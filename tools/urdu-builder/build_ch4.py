# -*- coding: utf-8 -*-
import lib, ch4_a
path, n, cnt = lib.build(4, "poetry-by-subject", "موضوعاتی شاعری (E-15)", 4, "Poetry by subject (E-15)", [("U",) + it[1:] if it[0]=="K" and any(it[1].startswith(p) for p in ("مرثیے میں ہیرو کے میدانِ جنگ","مرثیے میں ہیرو کے اپنے نسب","مرثیے میں ہیرو کی جنگ","مرثیے میں ہیرو کے شہید","مرثیے کے آخر میں")) else it for it in ch4_a.ITEMS])
print(path.split("/")[-1], n, cnt)
