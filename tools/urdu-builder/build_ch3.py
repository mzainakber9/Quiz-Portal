# -*- coding: utf-8 -*-
# Ch3: the first draft restated several facts in different words (e.g. "5 lines per band" four times).
# Those restatements are removed here so the chapter has no repeated facts; the final count is below 100.
import lib, ch3_a, ch3_b, ch3_c
REMOVE = [
 "پانچ مصرعوں کے کئی بندوں پر مشتمل نظم۔", "ایک نظم کے ہر بند میں پانچ مصرعے ہیں۔ یہ نظم ہو سکتی ہے:",
 "ہر بند کے مصرعوں کی تعداد چھ ہے اور نظم کئی بندوں کی ہے۔", "تین بندوں اور ہر بند میں چھ مصرعے۔",
 "ایک شاعر نے ایک ہی موضوع پر چھ چھ مصرعوں کے بند لکھے۔", "قافیوں کی ترتیب ‘الف الف ب الف’ ہو۔",
 "ایک اکائی میں صرف چار مصرعے", "ایک شاعر چار مصرعوں میں گہرا فلسفیانہ", "ہر شعر کے دونوں مصرعے ہم قافیہ ہوں مگر اگلے شعر میں قافیہ بدل جائے۔",
 "کہانی مسلسل ایک شعر سے دوسرے شعر", "ایک شاعر قصہ منظوم لکھنا چاہتا ہے", "ایک ہی قافیے میں مختلف مضامین کے اشعار۔",
 "مطلع، مقطع اور ایک ہی قافیے کی پابندی ہوتی ہے۔", "غزل کے ایک خاص رنگ میں تمام اشعار", "ایسی صنف جس کے ہر مصرعے میں وزن ہو مگر کہیں بھی قافیہ نہ آئے۔",
 "مصرعوں کی لمبائی برابر ہونا ضروری نہیں اور قافیہ لازمی نہیں۔", "ایک خیال دو تین اشعار میں پیش کیا جائے اور مطلع نہ ہو۔",
 "ایک کلام میں ہر شعر کا مضمون الگ ہے اور پہلے شعر کے دونوں مصرعے ہم قافیہ ہیں۔",
 "اس مطلع کے دونوں مصرعوں کے قافیے ہیں:", "اس مطلع کی ردیف ہے:",   # asked in ch2
]
items = [it for it in ch3_a.ITEMS + ch3_b.ITEMS if not any(r in it[1] for r in REMOVE)]
removed = len(ch3_a.ITEMS + ch3_b.ITEMS) - len(items)
items += ch3_c.ITEMS
RELEVEL = ["درج ذیل میں سے کون سی", "مسدس اور مخمس کی مشترک", "غزل کے اشعار کے بارے میں", "غزل میں قافیے کی ترتیب", "مثنوی میں قافیوں کی ترتیب"]
items = [("U",) + it[1:] if it[0] == "K" and any(it[1].startswith(r) for r in RELEVEL) else it for it in items]
path, n, cnt = lib.build(3, "poetic-forms", "اصنافِ شعر (E-16)", 3, "Poetic forms (E-16)", items)
print("removed restated questions:", removed, "| final:", n, cnt)
