// Validates every data/urdu/11th/*.js file.
//   node tools/validate-urdu.js            -> all Urdu files
//   node tools/validate-urdu.js ch5 ch6    -> only those ids
const fs = require("fs");
const path = require("path");
const DIR = path.join(__dirname, "..", "data", "urdu", "11th");
const want = process.argv.slice(2);
const EXPECT = 100;
const EXPECT_BY_ID = { ch2: 65, ch3: 87, ch4: 55, ch13: 58 };   // ch3 (poetic forms) has only 89 non-repeating questions on purpose

// characters that must not appear (Arabic variants / presentation forms / ASCII punctuation in Urdu text)
const BAD = [
  [/\u064A/, "Arabic Yeh (ي)"], [/\u0643/, "Arabic Kaf (ك)"], [/\u0649/, "Alef Maksura (ى)"],
  [/\u06D5/, "Ae (ە)"], [/\u0629/, "Teh Marbuta (ة)"], [/\u06C0/, "Heh with Yeh above (ۀ)"],
  [/[\uFB50-\uFDFF\uFE70-\uFEFF]/, "presentation-form letters"],
  [/\u200B|\u200E|\u200F|\u00A0/, "hidden zero-width / nbsp"],
  [/ {2,}/, "double space"], [/ [۔؟،!]/, "space before Urdu punctuation"],
  [/[؟،۔]\S/, null],  // handled below (needs space after)
  [/\?/, "ASCII ? (use ؟)"], [/[^\u0000-\u007F]\.(\s|$)/, "ASCII full stop (use ۔)"],
  [/[a-z]\w*,|[\u0600-\u06FF],/, "ASCII comma (use ،)"],
  [/"/, "straight double quote"], [/'/, "straight apostrophe"]
];
const FORBIDDEN_OPTIONS = /اوپر کے تمام|ان میں سے کوئی نہیں|تمام صحیح|سب درست|All of the above|None of the above/;
const stripTags = s => s.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]*>/g, "").replace(/&[a-z]+;/g, " ");
const words = s => new Set(stripTags(s).replace(/[^\u0600-\u06FF\s]/g, " ").split(/\s+/).filter(Boolean));
function jaccard(a, b) {
  let i = 0; a.forEach(w => { if (b.has(w)) i++; });
  return i / (a.size + b.size - i || 1);
}

let failed = 0;
const all = {};
fs.readdirSync(DIR).filter(f => f.endsWith(".js")).sort((a, b) =>
  parseInt(a.match(/ch(\d+)/)[1]) - parseInt(b.match(/ch(\d+)/)[1])).forEach(file => {
  const id = "ch" + file.match(/ch(\d+)/)[1];
  if (want.length && !want.includes(id)) return;
  const problems = [], warns = [];
  const found = [];
  global.QuizBank = { register: e => found.push(e) };
  try { new Function(fs.readFileSync(path.join(DIR, file), "utf8"))(); }
  catch (e) { console.log(`FAIL ${file}: does not load: ${e.message}`); failed++; return; }
  if (found.length !== 1) { console.log(`FAIL ${file}: registers ${found.length}`); failed++; return; }
  const e = found[0], qs = e.questions();
  if (e.class !== "11th" || e.subject !== "Urdu" || e.type !== "chapter" || e.id !== id) problems.push("bad registry fields");
  if (!/^[\u0600-\u06FF].*\(E-\d\d\)$|^[\u0600-\u06FF ]+$/.test(e.label)) problems.push("label format: " + e.label);
  const want_n = EXPECT_BY_ID[id] || EXPECT;
  if (qs.length !== want_n) problems.push(`count ${qs.length} (expected ${want_n})`);
  const seenQ = new Map(), wordSets = [], repeatedStems = [];
  let optDup = 0, ansBad = 0, reasonBad = 0, optCount = 0, charBad = 0, forb = 0, abc = 0;
  qs.forEach((q, i) => {
    const n = i + 1;
    if (!q.options || q.options.length !== 4) { optCount++; problems.push(`Q${n}: ${q.options && q.options.length} options`); }
    else {
      if (new Set(q.options).size !== 4) { optDup++; problems.push(`Q${n}: duplicate options`); }
      if (!q.options.includes(q.ans)) { ansBad++; problems.push(`Q${n}: ans not in options`); }
      if (q.options.some(o => !o || o !== o.trim())) problems.push(`Q${n}: empty/untrimmed option`);
      if (q.options.some(o => FORBIDDEN_OPTIONS.test(o))) { forb++; problems.push(`Q${n}: all/none-of-the-above option`); }
    }
    if (!q.reason || !/[\u0600-\u06FF]/.test(stripTags(q.reason)) || stripTags(q.reason).trim().length < 15) { reasonBad++; problems.push(`Q${n}: empty/short reason`); }
    if (!q.q || !/[\u0600-\u06FF]/.test(stripTags(q.q))) problems.push(`Q${n}: empty question`);
    const key = stripTags(q.q).replace(/\s+/g, " ").trim();
    const osig = (q.options || []).slice().sort().join("|");
    if (seenQ.has(key)) {
      const prev = seenQ.get(key);
      if (prev.osig === osig) problems.push(`Q${n}: duplicate of Q${prev.n}`);       // same stem AND same options
      else repeatedStems.push(`Q${prev.n}/Q${n}`);                                  // same stem, different options
    } else seenQ.set(key, { n, osig });
    const texts = [q.q, q.reason].concat(q.options || []);
    texts.forEach((t, k) => {
      const plain = stripTags(t);
      BAD.forEach(([re, msg]) => { if (msg && re.test(plain)) { charBad++; problems.push(`Q${n}: ${msg} in ${k === 0 ? "question" : k === 1 ? "reason" : "option"}: ${plain.slice(0, 40)}`); } });
      if (/[۔؟،][^\s\)\]”’<]/.test(plain)) problems.push(`Q${n}: missing space after Urdu punctuation: ${plain.slice(0, 40)}`);
    });
    wordSets.push(words(q.q + " " + (q.options || []).join(" ")));
  });
  // near-duplicate questions (stem + options)
  for (let i = 0; i < qs.length; i++) for (let j = i + 1; j < qs.length; j++) {
    const sim = jaccard(wordSets[i], wordSets[j]);
    if (sim >= 0.8) warns.push(`near-duplicate Q${i + 1} ~ Q${j + 1} (${sim.toFixed(2)})`);
  }
  // same stem text + same answer is a hard error; same options set is a warning
  const sig = new Map();
  qs.forEach((q, i) => {
    const s = [...q.options].sort().join("|");
    if (sig.has(s)) warns.push(`same option set Q${sig.get(s)} and Q${i + 1}`); else sig.set(s, i + 1);
  });
  const lv = (fs.readFileSync(path.join(DIR, file), "utf8").match(/Mix: K=(\d+), U=(\d+), A=(\d+)/) || []).slice(1).join("/");
  const status = problems.length ? "FAIL" : "PASS";
  if (problems.length) failed++;
  console.log(`${status} ${id} ${file}: ${qs.length} Q | 4 options: ${optCount ? "NO" : "yes"} | ans in options: ${ansBad ? "NO" : "yes"} | dup options: ${optDup} | dup questions: ${problems.filter(p => /duplicate of/.test(p)).length} | empty reasons: ${reasonBad} | bad chars: ${charBad} | K/U/A ${lv}`);
  problems.slice(0, 25).forEach(p => console.log("   ! " + p));
  if (problems.length > 25) console.log(`   ... and ${problems.length - 25} more`);
  if (repeatedStems.length) console.log(`   ~ ${repeatedStems.length} question(s) reuse an earlier stem with different options and answer (e.g. ${repeatedStems.slice(0,3).join(", ")})`);
  warns.slice(0, 15).forEach(w => console.log("   ~ " + w));
  if (warns.length > 15) console.log(`   ... and ${warns.length - 15} more warnings`);
  all[id] = qs;
});
// overlap between chapters (identical question text)
const seen = new Map();
Object.keys(all).forEach(id => all[id].forEach((q, i) => {
  const k = stripTags(q.q).trim() + "||" + q.options.slice().sort().join("|");
  if (seen.has(k)) console.log(`   ~ cross-chapter repeat: ${id} Q${i + 1} = ${seen.get(k)}`); else seen.set(k, `${id} Q${i + 1}`);
}));
console.log(failed ? `\n${failed} file(s) FAILED` : "\nAll checked files PASSED");
process.exit(failed ? 1 : 0);
