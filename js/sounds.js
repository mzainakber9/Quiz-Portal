// =========================================================
// SOUND EFFECTS  (v2 - louder, game-show style)
// ---------------------------------------------------------
// Everything is synthesized in the browser with the Web Audio
// API: no audio files to host, works offline on GitHub Pages.
//
//   Sound.play("correct");          one-shot effects
//   Sound.play("pass", 0.9);        optional delay in seconds
//   Sound.startTimer(() => secsLeft)   continuous tension loop
//   Sound.stopTimer();
//
// One-shot names: start, select, correct, wrong, skip,
//                 pass, fail, timeup, login, error
//
// Tune loudness with MASTER_VOLUME (effects) and TIMER_VOLUME
// (the continuous timer pulse) just below.
//
// If audio is unavailable every call is a silent no-op, so the
// quiz never breaks because of sound. The mute choice is saved
// on the student's device.
// =========================================================

const Sound = (function () {
  const STORAGE_KEY = "quizSoundMuted";
  const MASTER_VOLUME = 1.0;   // overall loudness of everything
  const TIMER_VOLUME  = 1.0;   // timer pulse loudness (max)
  const DUCK_VOLUME   = 0.4;   // timer dips to this while a big effect plays

  let ctx = null, master = null, timerBus = null, noiseBuf = null;
  let muted = false;

  try { muted = localStorage.getItem(STORAGE_KEY) === "1"; } catch (e) {}

  // ---------- engine ----------
  function ensureContext() {
    if (ctx) {
      if (ctx.state === "suspended" && !document.hidden) ctx.resume().catch(() => {});
      return ctx;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    try {
      ctx = new AC({ latencyHint: "interactive" });

      // Loud but safe: compressor keeps stacked sounds from distorting.
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -14;
      comp.knee.value = 12;
      comp.ratio.value = 8;
      comp.attack.value = 0.003;
      comp.release.value = 0.18;
      comp.connect(ctx.destination);

      master = ctx.createGain();
      master.gain.value = MASTER_VOLUME;
      master.connect(comp);

      timerBus = ctx.createGain();
      timerBus.gain.value = TIMER_VOLUME;
      timerBus.connect(master);

      // 2 seconds of white noise, reused by whooshes / claps / hi-hats
      noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
      const d = noiseBuf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    } catch (e) { ctx = null; }
    return ctx;
  }

  // ---------- voices (all times are absolute AudioContext seconds) ----------
  // Basic oscillator with fast attack and exponential decay.
  function osc(type, f0, f1, t, dur, peak, o) {
    o = o || {};
    const dest = o.dest || master;
    const s = ctx.createOscillator();
    const g = ctx.createGain();
    s.type = type;
    s.frequency.setValueAtTime(f0, t);
    if (f1 && f1 !== f0) s.frequency.exponentialRampToValueAtTime(f1, t + dur);
    if (o.detune) s.detune.value = o.detune;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + (o.attack || 0.006));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    let node = s;
    if (o.lp) {
      const f = ctx.createBiquadFilter();
      f.type = "lowpass";
      f.frequency.setValueAtTime(o.lp, t);
      if (o.lpEnd) f.frequency.exponentialRampToValueAtTime(o.lpEnd, t + dur);
      f.Q.value = o.q || 1;
      s.connect(f); node = f;
    }
    node.connect(g); g.connect(dest);
    s.start(t); s.stop(t + dur + 0.05);
  }

  // Filtered noise burst (whoosh, clap, hi-hat, sparkle)
  function noise(t, dur, peak, filt, f0, f1, o) {
    o = o || {};
    const s = ctx.createBufferSource();
    s.buffer = noiseBuf;
    s.loop = true;
    const f = ctx.createBiquadFilter();
    f.type = filt;
    f.frequency.setValueAtTime(f0, t);
    if (f1) f.frequency.exponentialRampToValueAtTime(f1, t + dur);
    f.Q.value = o.q || 1;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + (o.attack || 0.004));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(o.dest || master);
    s.start(t, Math.random() * 1.5); s.stop(t + dur + 0.05);
  }

  // Bright bell / chime: a few inharmonic partials with different decays.
  function bell(f, t, dur, peak) {
    [[1, 1, 1], [2, 0.55, 0.7], [2.76, 0.4, 0.5], [5.4, 0.2, 0.3]].forEach(p =>
      osc("sine", f * p[0], 0, t, dur * p[2], peak * p[1]));
  }

  // Brass-like note: two detuned saws through a filter that "opens" quickly.
  function brass(f, t, dur, peak, glideTo) {
    [-7, 7].forEach(dt =>
      osc("sawtooth", f, glideTo, t, dur, peak,
        { detune: dt, lp: f * 2, lpEnd: f * 7, q: 2, attack: 0.03 }));
  }

  // Deep thump (heartbeat / impact)
  // Phone speakers can't play very low notes, so it also has a mid "body"
  // layer and a click that stay audible on small speakers.
  function kick(t, peak, dest) {
    const o = { attack: 0.002, dest: dest || master };
    osc("sine", 160, 50, t, 0.16, peak, o);
    osc("triangle", 330, 110, t, 0.10, peak * 0.7, o);
    noise(t, 0.02, peak * 0.45, "highpass", 2500, 0, { attack: 0.001, dest: dest || master });
  }

  // ---------- one-shot effects ----------
  const library = {
    // quiz begins: impact + rising shimmer
    start(t) {
      kick(t, 0.9);
      noise(t, 0.5, 0.35, "bandpass", 300, 4500, { q: 0.8, attack: 0.25 });
      bell(523.25, t + 0.28, 0.9, 0.45);
      bell(783.99, t + 0.28, 0.9, 0.35);
    },

    // option chosen: snappy pop + click
    select(t) {
      osc("sine", 520, 1100, t, 0.08, 0.75, { attack: 0.002 });
      noise(t, 0.03, 0.35, "highpass", 3000, 0, { attack: 0.001 });
    },

    // correct: rising game-show ding-ding-DING + sparkle
    correct(t) {
      bell(1046.5, t,        0.55, 0.65);  // C6
      bell(1318.5, t + 0.09, 0.55, 0.65);  // E6
      bell(1568.0, t + 0.18, 0.55, 0.65);  // G6
      bell(2093.0, t + 0.27, 0.90, 0.70);  // C7
      noise(t + 0.27, 0.45, 0.22, "highpass", 6000, 9000);
    },

    // wrong: cartoon "BONK -> slide-whistle fall -> womp-womp"
    wrong(t) {
      // bonk
      kick(t, 0.9);
      noise(t, 0.07, 0.6, "bandpass", 900, 500, { q: 2, attack: 0.002 });
      // slide-whistle falling (two slightly detuned sines wobble against each other)
      osc("sine", 1500, 190, t + 0.06, 0.6, 0.7, { attack: 0.01 });
      osc("sine", 1515, 196, t + 0.06, 0.6, 0.6, { attack: 0.01 });
      // comic "womp womp" at the end
      brass(196.0, t + 0.62, 0.22, 0.6);
      brass(164.8, t + 0.88, 0.50, 0.65, 130);
    },

    // skipped: quick whoosh
    skip(t) {
      noise(t, 0.2, 0.55, "bandpass", 500, 3000, { q: 1.2, attack: 0.05 });
      osc("sine", 300, 700, t, 0.15, 0.3);
    },

    // good result: brass fanfare + big chord + applause
    pass(t) {
      brass(523.25, t,        0.14, 0.5);  // C5
      brass(523.25, t + 0.17, 0.14, 0.5);
      brass(523.25, t + 0.34, 0.14, 0.5);
      brass(659.25, t + 0.51, 0.20, 0.5);  // E5
      brass(783.99, t + 0.74, 0.20, 0.5);  // G5
      [523.25, 659.25, 783.99, 1046.5].forEach(f => brass(f, t + 0.98, 1.1, 0.45));
      bell(2093.0, t + 0.98, 1.4, 0.5);
      bell(2637.0, t + 1.10, 1.4, 0.4);
      kick(t + 0.98, 0.9);
      // applause: lots of tiny clap bursts
      for (let i = 0; i < 90; i++) {
        const at = t + 1.0 + Math.random() * 2.2;
        const fade = 1 - (at - t - 1.0) / 2.6;
        noise(at, 0.03 + Math.random() * 0.02, 0.28 * fade, "bandpass",
              1500 + Math.random() * 3500, 0, { q: 0.9, attack: 0.002 });
      }
    },

    // low result: "sad trombone" wah-wah-wah-waaah
    fail(t) {
      brass(233.08, t,        0.38, 0.55);
      brass(220.00, t + 0.42, 0.38, 0.55);
      brass(207.65, t + 0.84, 0.38, 0.55);
      brass(196.00, t + 1.26, 1.1,  0.6, 160);   // last note slides down
    },

    // time ran out: loud alarm beeps
    timeup(t) {
      [0, 0.22, 0.44, 0.66].forEach(off => {
        osc("square", 880,  0, t + off, 0.16, 0.5, { attack: 0.004 });
        osc("square", 1320, 0, t + off, 0.16, 0.25, { attack: 0.004 });
      });
      kick(t, 0.8);
    },

    // login ok: power-up sweep + ding
    login(t) {
      osc("square", 300, 1200, t, 0.18, 0.4, { lp: 3000 });
      bell(1568.0, t + 0.16, 0.6, 0.6);
    },

    // login error: short harsh buzz
    error(t) {
      osc("sawtooth", 130, 0, t, 0.35, 0.7, { lp: 1000, q: 3 });
      osc("sawtooth", 137, 0, t, 0.35, 0.7, { lp: 1000, q: 3 });
    }
  };

  function play(name, delay) {
    if (muted) return;
    const fn = library[name];
    if (!fn) return;
    try {
      if (!ensureContext()) return;
      const now = ctx.currentTime;
      // Keep the timer very loud, but dip it briefly so answer sounds cut through.
      if (timerRunning && timerBus && name !== "select" && name !== "skip") {
        const g = timerBus.gain;
        g.cancelScheduledValues(now);
        g.setTargetAtTime(DUCK_VOLUME, now, 0.015);
        g.setTargetAtTime(TIMER_VOLUME, now + 1.1, 0.25);
      }
      fn(now + 0.01 + (delay || 0));
    } catch (e) { /* never let sound break the quiz */ }
  }

  // =======================================================
  // CONTINUOUS TIMER LOOP (tension pulse, "Kaun Banega Crorepati" feel)
  // Heartbeat thump + driving staccato bass + pinging high notes.
  // It speeds up and gets more intense as the time runs out:
  //   > 60s left : steady
  //   <= 60s     : faster + hi-hats
  //   <= 20s     : faster still
  //   <= 10s     : frantic, ping notes jump an octave
  // =======================================================
  const BASS  = [110, 110, 165, 110,  110, 110, 165, 110,
                  98,  98, 147,  98,   98,  98, 147, 131];
  const PINGS = [440, 523.25, 659.25, 523.25];

  let timerWanted = false;   // the quiz is running and wants the pulse
  let timerRunning = false;  // the scheduler is actually active
  let timerId = null;
  let getRemaining = () => 999;
  let step = 0, nextTime = 0;

  function tempo(rem) {
    if (rem <= 10) return 168;
    if (rem <= 20) return 146;
    if (rem <= 60) return 128;
    return 110;
  }

  function playStep(s, t) {
    const rem = getRemaining();
    const hot = rem <= 10;
    const dur = 60 / tempo(rem) / 4;

    const d = Math.min(0.13, dur * 0.9);
    if (s % 4 === 0) kick(t, 1.0, timerBus);             // heartbeat
    // pulsing bass: an octave-up layer (audible on phones) + the deep layer
    osc("sawtooth", BASS[s] * 2, 0, t, d, 0.8,
        { dest: timerBus, lp: 1900, lpEnd: 600, q: 3, attack: 0.003 });
    osc("sawtooth", BASS[s], 0, t, d, 0.5,
        { dest: timerBus, lp: 520, q: 4, attack: 0.004 });

    if (s % 4 === 2) {                                   // woodblock tick
      osc("square", 1500, 0, t, 0.025, 0.3, { dest: timerBus, attack: 0.001 });
    }
    if (s % 2 === 1 || hot) {                            // ping notes
      const f = PINGS[(s >> 1) % 4] * (hot ? 2 : 1);
      osc("triangle", f, 0, t, 0.11, 0.7, { dest: timerBus, attack: 0.003 });
    }
    if (rem <= 60 && s % 2 === 0) {                      // hi-hat
      noise(t, 0.03, 0.3, "highpass", 7000, 0, { dest: timerBus, attack: 0.001 });
    }
  }

  function schedule() {
    if (!timerRunning || !ctx || ctx.state !== "running") return;
    const now = ctx.currentTime;
    if (nextTime < now - 0.05) nextTime = now + 0.02;    // catch up after a pause
    while (nextTime < now + 0.25) {
      playStep(step, nextTime);
      nextTime += 60 / tempo(getRemaining()) / 4;
      step = (step + 1) % 16;
    }
  }

  function runTimer() {
    if (timerRunning || muted || !timerWanted) return;
    if (!ensureContext()) return;
    timerRunning = true;
    step = 0;
    nextTime = ctx.currentTime + 0.05;
    timerId = setInterval(schedule, 40);
    schedule();
  }

  function haltTimer() {
    timerRunning = false;
    clearInterval(timerId);
    timerId = null;
  }

  function startTimer(remainingFn) {
    getRemaining = remainingFn || (() => 999);
    timerWanted = true;
    haltTimer();
    runTimer();
  }

  function stopTimer() {
    timerWanted = false;
    haltTimer();
  }

  // Pause everything when the tab is hidden, resume when it returns.
  document.addEventListener("visibilitychange", () => {
    if (!ctx) return;
    if (document.hidden) ctx.suspend().catch(() => {});
    else ctx.resume().catch(() => {});
  });

  // ---------- mute button ----------
  function updateButton() {
    const btn = document.getElementById("soundToggle");
    if (!btn) return;
    btn.textContent = muted ? "\uD83D\uDD07" : "\uD83D\uDD0A";
    btn.title = muted ? "Sound is off - tap to turn on" : "Sound is on - tap to mute";
    btn.setAttribute("aria-label", btn.title);
    btn.setAttribute("aria-pressed", muted ? "true" : "false");
  }

  function setMuted(value) {
    muted = !!value;
    try { localStorage.setItem(STORAGE_KEY, muted ? "1" : "0"); } catch (e) {}
    updateButton();
    if (muted) haltTimer();   // silence the pulse (the quiz keeps running)
    else runTimer();          // bring it back if a quiz is in progress
  }

  function toggle() {
    setMuted(!muted);
    if (!muted) play("select");
  }

  // Unlock audio on the first real user gesture (needed by browsers / iOS).
  function unlock() {
    ensureContext();
    ["pointerdown", "keydown", "touchstart"].forEach(ev =>
      document.removeEventListener(ev, unlock, true));
  }
  ["pointerdown", "keydown", "touchstart"].forEach(ev =>
    document.addEventListener(ev, unlock, true));

  document.addEventListener("DOMContentLoaded", updateButton);

  return { play, startTimer, stopTimer, toggle, setMuted, isMuted: () => muted };
})();
