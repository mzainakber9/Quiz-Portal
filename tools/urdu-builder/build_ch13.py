# -*- coding: utf-8 -*-
import lib, ch13_a
path, n, cnt = lib.build(13, "mutalazim", "متلازم الفاظ", 13, "Mutalazim words (no E-code in the framework)", ch13_a.ITEMS)
print(path.split("/")[-1], n, cnt)
