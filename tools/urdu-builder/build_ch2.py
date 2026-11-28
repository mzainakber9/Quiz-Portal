# -*- coding: utf-8 -*-
import lib, ch2_a, ch2_b
path, n, cnt = lib.build(2, "poetry-elements", "اجزائے شعر (E-17)", 2, "Poetry elements (E-17)", ch2_a.ITEMS + ch2_b.ITEMS)
print(path.split("/")[-1], n, cnt)
