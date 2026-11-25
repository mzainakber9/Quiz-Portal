# -*- coding: utf-8 -*-
# Builder for the Class 11 Urdu data files (not loaded by the website).
# Each question is a tuple: (level, question, correct, wrong1, wrong2, wrong3, reason)
#   level: K = knowledge, U = understanding, A = application
# The correct option is placed at a rotating position; the portal shuffles options anyway.
import json, os, sys, collections

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..")

def build(no, slug, label, order, title_en, items, write=True):
    qs = []
    for i, it in enumerate(items):
        lvl, q, a, d1, d2, d3, why = it
        assert lvl in "KUA", (i, lvl)
        opts = [d1, d2, d3]
        pos = (i * 7 + i // 4) % 4
        opts.insert(pos, a)
        qs.append({"q": q, "options": opts, "ans": a, "reason": why})
    cnt = collections.Counter(it[0] for it in items)
    body = ",\n".join("      " + json.dumps(q, ensure_ascii=False) for q in qs)
    js = (
        "// Class 11 Urdu (FBISE HSSC-I) - %s\n"
        "// %d MCQs, each with a reason in Urdu. Mix: K=%d, U=%d, A=%d (FBISE model-paper style).\n"
        "// Question text and reason are inserted as HTML; options are plain text.\n"
        "QuizBank.register({\n"
        "  class: \"11th\",\n"
        "  subject: \"Urdu\",\n"
        "  type: \"chapter\",\n"
        "  id: \"ch%d\",\n"
        "  label: %s,\n"
        "  order: %d,\n"
        "  questions: function () {\n"
        "    return [\n%s\n    ];\n"
        "  }\n"
        "});\n"
    ) % (title_en, len(qs), cnt["K"], cnt["U"], cnt["A"], no,
         json.dumps(label, ensure_ascii=False), order, body)
    path = os.path.join(ROOT, "data", "urdu", "11th", "11th-urdu-ch%d-%s.js" % (no, slug))
    if write:
        with open(path, "w", encoding="utf8") as f:
            f.write(js)
    return path, len(qs), dict(cnt)

def run(no, slug, label, title_en, parts):
    items = []
    for p in parts:
        items += p.ITEMS
    path, n, cnt = build(no, slug, label, no, title_en, items)
    print(os.path.relpath(path, ROOT), n, cnt)
