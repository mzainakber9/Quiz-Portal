# -*- coding: utf-8 -*-
import json, html, itertools

QS = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: []}   # chapter -> list of question dicts
META = {}                  # (chapter, index) -> level / section

def h(s): return html.escape(s, quote=False)

def add(ch, sec, lvl, q, ans, wrong, why):
    assert len(wrong) == 3, (q[:60], wrong)
    opts = [ans] + list(wrong)
    assert len(set(opts)) == 4, ("dup options", q[:80], opts)
    assert lvl in "KUA"
    QS[ch].append(dict(q=q, options=opts, ans=ans, reason=why, _lvl=lvl, _sec=sec))

def stim(text, extra=""):
    return '<div class="stimulus">%s%s</div>' % (text, extra)

def pre(code):
    return ('<pre style="background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;'
            'padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre">%s</pre>' % h(code.strip("\n")))

SV_OPEN = '<svg viewBox="0 0 %d %d" style="width:100%%;max-width:%dpx;height:auto;display:block;margin:6px auto" xmlns="http://www.w3.org/2000/svg" font-family="Arial" font-size="12">'
def svg(w, h_, body, maxw=None):
    return (SV_OPEN % (w, h_, maxw or w)) + body + '</svg>'

S = 'stroke="#222" stroke-width="1.6" fill="white"'
def line(x1,y1,x2,y2,extra=''): return '<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#222" stroke-width="1.6" %s/>' % (x1,y1,x2,y2,extra)
def text(x,y,t,anchor='middle',size=12,bold=False,fill='#222'):
    return '<text x="%s" y="%s" text-anchor="%s" font-size="%s" fill="%s"%s>%s</text>' % (x,y,anchor,size,fill,' font-weight="bold"' if bold else '',h(t))
def rect(x,y,w,hh,fill='white',rx=0,stroke='#222'):
    return '<rect x="%s" y="%s" width="%s" height="%s" rx="%s" fill="%s" stroke="%s" stroke-width="1.6"/>' % (x,y,w,hh,rx,fill,stroke)
def circ(x,y,r,fill='white',stroke='#222'):
    return '<circle cx="%s" cy="%s" r="%s" fill="%s" stroke="%s" stroke-width="1.6"/>' % (x,y,r,fill,stroke)

# ---------- logic gates (drawn at origin ox,oy = left-middle of the gate body) ----------
def gate_shape(kind, ox, oy):
    """returns (svg, in1_pt, in2_pt, out_pt). body is 46 wide x 40 high, centre line at oy."""
    t = oy - 20
    if kind in ('AND', 'NAND'):
        body = '<path d="M%s,%s H%s A20,20 0 0 1 %s,%s H%s Z" %s/>' % (ox, t, ox+26, ox+26, t+40, ox, S)
        tip = ox + 46
    elif kind in ('OR', 'NOR', 'XOR', 'XNOR'):
        body = ('<path d="M%s,%s C%s,%s %s,%s %s,%s C%s,%s %s,%s %s,%s C%s,%s %s,%s %s,%s Z" %s/>' %
                (ox, t, ox+18, t, ox+36, t+6, ox+50, oy, ox+36, t+34, ox+18, t+40, ox, t+40,
                 ox+10, t+28, ox+10, t+12, ox, t, S))
        if kind in ('XOR', 'XNOR'):
            body += '<path d="M%s,%s C%s,%s %s,%s %s,%s" fill="none" stroke="#222" stroke-width="1.6"/>' % (ox-7, t, ox+3, t+12, ox+3, t+28, ox-7, t+40)
        tip = ox + 50
    elif kind == 'NOT':
        body = '<path d="M%s,%s L%s,%s L%s,%s Z" %s/>' % (ox, t, ox, t+40, ox+36, oy, S)
        tip = ox + 36
    else:
        raise ValueError(kind)
    if kind in ('NAND', 'NOR', 'XNOR', 'NOT'):
        body += circ(tip + 4, oy, 4)
        tip += 8
    if kind == 'NOT':
        i1 = (ox, oy); i2 = None
    else:
        off = 3 if kind in ('XOR', 'XNOR') else 0
        i1 = (ox - off, oy - 10); i2 = (ox - off, oy + 10)
    return body, i1, i2, (tip, oy)

def gate_svg(kind, show_labels=True, w=190, hgt=90, ins=('A', 'B')):
    ox, oy = 70, hgt // 2
    body, i1, i2, out = gate_shape(kind, ox, oy)
    s = body
    if i2:
        s += line(25, i1[1], i1[0], i1[1]) + line(25, i2[1], i2[0], i2[1])
        s += text(18, i1[1] + 4, ins[0], 'end', 13, True) + text(18, i2[1] + 4, ins[1], 'end', 13, True)
    else:
        s += line(25, oy, i1[0], oy) + text(18, oy + 4, ins[0], 'end', 13, True)
    s += line(out[0], oy, out[0] + 30, oy) + text(out[0] + 40, oy + 4, 'F', 'start', 13, True)
    return svg(w, hgt, s, 200)

def circuit2(g1, g2, labels=('A','B','C'), title_out='F', swap=False):
    """g1 takes A,B and feeds g2; C goes to the other input of g2."""
    w, hh = 330, 140
    o1 = (80, 40); o2 = (200, 80)
    b1, a1, a2, out1 = gate_shape(g1, *o1)
    b2, c1, c2, out2 = gate_shape(g2, *o2)
    s = b1 + b2
    s += line(35, a1[1], a1[0], a1[1]) + line(35, a2[1], a2[0], a2[1])
    s += text(28, a1[1]+4, labels[0], 'end', 13, True) + text(28, a2[1]+4, labels[1], 'end', 13, True)
    # g1 output -> g2 first input (elbow)
    s += line(out1[0], out1[1], out1[0] + 14, out1[1]) + line(out1[0] + 14, out1[1], out1[0] + 14, c1[1]) + line(out1[0] + 14, c1[1], c1[0], c1[1])
    s += line(35, c2[1], c2[0], c2[1]) + text(28, c2[1]+4, labels[2], 'end', 13, True)
    s += line(out2[0], out2[1], out2[0] + 30, out2[1]) + text(out2[0] + 40, out2[1] + 4, title_out, 'start', 13, True)
    return svg(w, hh, s, 360)

def truth_html(headers, rows, cap=None):
    t = '<table style="border-collapse:collapse;margin:6px auto;font-size:14px">'
    if cap: t += '<caption style="caption-side:top;font-weight:bold;padding:2px">%s</caption>' % h(cap)
    t += '<tr>' + ''.join('<th style="border:1px solid #9bb;padding:3px 10px;background:#eaf1fb">%s</th>' % h(x) for x in headers) + '</tr>'
    for r in rows:
        t += '<tr>' + ''.join('<td style="border:1px solid #9bb;padding:3px 10px;text-align:center">%s</td>' % h(str(x)) for x in r) + '</tr>'
    return t + '</table>'

def kmap3_html(ones):
    """3-variable K-map, ones = set of minterm numbers (ABC, A is MSB). Columns BC in Gray order."""
    cols = [(0,0),(0,1),(1,1),(1,0)]
    t = '<table style="border-collapse:collapse;margin:6px auto;font-size:14px;text-align:center">'
    t += '<tr><th style="border:1px solid #9bb;padding:4px 8px;background:#eaf1fb">A \\ BC</th>' + ''.join('<th style="border:1px solid #9bb;padding:4px 10px;background:#eaf1fb">%d%d</th>' % c for c in cols) + '</tr>'
    for a in (0, 1):
        t += '<tr><th style="border:1px solid #9bb;padding:4px 8px;background:#eaf1fb">%d</th>' % a
        for (b, c) in cols:
            m = a*4 + b*2 + c
            t += '<td style="border:1px solid #9bb;padding:4px 10px;%s">%d</td>' % ('background:#fff3c4;font-weight:bold' if m in ones else '', 1 if m in ones else 0)
        t += '</tr>'
    return t + '</table>'

# ---------- network topologies ----------
def node(x, y, label='', hub=False):
    if hub:
        return rect(x-18, y-12, 36, 24, '#ffe9b3', 3) + text(x, y+4, label or 'Hub', 'middle', 11, True)
    return rect(x-15, y-11, 30, 22, '#dcebff', 3) + text(x, y+4, label or 'PC', 'middle', 10)

def topo_svg(kind):
    w, hh = 300, 190
    s = ''
    if kind == 'bus':
        s += line(30, 95, 270, 95, 'stroke-width="3"')
        for i, x in enumerate((60, 120, 180, 240)):
            up = i % 2 == 0
            y = 45 if up else 145
            s += line(x, 95, x, y + (11 if up else -11)) + node(x, y)
        s += text(150, 120, 'Main cable', 'middle', 11, False, '#555') if False else ''
    elif kind == 'star':
        cx, cy = 150, 95
        pts = [(150, 25), (250, 70), (220, 160), (80, 160), (50, 70)]
        for (x, y) in pts: s += line(cx, cy, x, y)
        s += node(cx, cy, 'Hub', True)
        for (x, y) in pts: s += node(x, y)
    elif kind == 'ring':
        import math
        cx, cy, r = 150, 95, 70
        pts = [(cx + r*math.cos(math.radians(a)), cy + r*math.sin(math.radians(a))) for a in range(-90, 270, 60)]
        for i in range(6):
            a, b = pts[i], pts[(i+1) % 6]
            s += line(round(a[0],1), round(a[1],1), round(b[0],1), round(b[1],1))
        for p_ in pts: s += node(round(p_[0],1), round(p_[1],1))
    elif kind == 'mesh':
        pts = [(150, 25), (250, 85), (210, 160), (90, 160), (50, 85)]
        for a, b in itertools.combinations(pts, 2): s += line(a[0], a[1], b[0], b[1])
        for p_ in pts: s += node(p_[0], p_[1])
    elif kind == 'tree':
        s += line(150, 35, 80, 90) + line(150, 35, 220, 90)
        for x in (80, 220):
            s += line(x, 90, x-40, 150) + line(x, 90, x+40, 150)
        s += node(150, 30, 'Root', True) + node(80, 90, 'Sw', True) + node(220, 90, 'Sw', True)
        for x in (40, 120, 180, 260): s += node(x, 155)
    elif kind == 'hybrid':
        # left: a star (hub + 4 PCs); right: a ring of 4 PCs; one cable joins the two parts
        hub = (70, 95)
        for (x, y) in [(30, 35), (110, 35), (30, 155), (110, 155)]: s += line(hub[0], hub[1], x, y)
        s += node(hub[0], hub[1], 'Hub', True)
        for (x, y) in [(30, 35), (110, 35), (30, 155), (110, 155)]: s += node(x, y)
        ring = [(200, 55), (270, 55), (270, 135), (200, 135)]
        for i in range(4):
            a_, b_ = ring[i], ring[(i+1) % 4]
            s += line(a_[0], a_[1], b_[0], b_[1])
        s += line(hub[0]+18, hub[1], 200, 135)
        for (x, y) in ring: s += node(x, y)
    else:
        raise ValueError(kind)
    return svg(w, hh, s, 320)

# ---------- finishing ----------
def stats(ch):
    L = QS[ch]
    n = len(L)
    lv = {k: sum(1 for x in L if x['_lvl'] == k) for k in 'KUA'}
    longest = sum(1 for x in L if len(x['ans']) == max(len(o) for o in x['options']) and len(set(len(o) for o in x['options'])) > 1)
    secs = {}
    for x in L: secs[x['_sec']] = secs.get(x['_sec'], 0) + 1
    svgq = sum(1 for x in L if '<svg' in x['q'] or '<table' in x['q'])
    stimq = sum(1 for x in L if 'class="stimulus"' in x['q'])
    return n, lv, longest, secs, svgq, stimq

def check(ch):
    seen = set()
    for x in QS[ch]:
        k = x['q'] + '|' + '|'.join(sorted(x['options']))
        assert k not in seen, ("duplicate", x['q'][:80]); seen.add(k)
        for o in x['options']:
            import re as _re
            assert not _re.search(r'<[A-Za-z/]', o), ("html tag in option", o)

def write_js(ch, path, label, cid, order, header):
    check(ch)
    out = [header, 'QuizBank.register({', '  class: "11th",', '  subject: "Computer",', '  type: "chapter",',
           '  id: %s,' % json.dumps(cid), '  label: %s,' % json.dumps(label, ensure_ascii=False), '  order: %d,' % order,
           '  questions: function () {', '    return [']
    items = []
    for x in QS[ch]:
        items.append('    {\n      q: %s,\n      options: %s,\n      ans: %s,\n      reason: %s\n    }' % (
            json.dumps(x['q'], ensure_ascii=False), json.dumps(x['options'], ensure_ascii=False),
            json.dumps(x['ans'], ensure_ascii=False), json.dumps(x['reason'], ensure_ascii=False)))
    out.append(',\n'.join(items))
    out += ['    ];', '  }', '});', '']
    open(path, 'w', encoding='utf-8').write('\n'.join(out))

import math as _m
def wave_pair_svg():
    pts = ' '.join('%.1f,%.1f' % (20 + i*2.2, 35 - 22*_m.sin(i/9.0)) for i in range(0, 120))
    s = '<polyline points="%s" fill="none" stroke="#1565c0" stroke-width="2"/>' % pts
    s += text(15, 38, 'X', 'end', 14, True)
    sq = 'M20,95 V70 H70 V95 H110 V70 H150 V95 H190 V70 H240 V95 H280'
    s += '<path d="%s" fill="none" stroke="#c62828" stroke-width="2"/>' % sq
    s += text(15, 87, 'Y', 'end', 14, True)
    return svg(300, 110, s, 340)

def waterfall_svg(missing):
    names = ['Requirements', 'Design', 'Development', 'Testing', 'Deployment', 'Maintenance']
    s = ''
    for i, n in enumerate(names):
        x, y = 8 + i * 48, 8 + i * 28
        lab = '?' if i == missing else n
        s += rect(x, y, 100, 24, '#fff3c4' if i == missing else '#dcebff', 3)
        s += text(x + 50, y + 16, lab, 'middle', 11, i == missing)
        if i < 5:
            s += line(x + 100, y + 12, x + 100 + 6, y + 12) if False else ''
            s += '<path d="M%d,%d V%d" stroke="#222" stroke-width="1.4" fill="none" marker-end="url(#ar)"/>' % (x + 74, y + 24, y + 28)
    defs = '<defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#222"/></marker></defs>'
    return svg(350, 185, defs + s, 380)

def enc_flow_svg(mid='Ciphertext', k1='Key', k2='Key', mid_missing=False):
    """Plaintext -> [Encryption] -> mid -> [Decryption] -> Plaintext, with key labels below the two boxes."""
    s = ''
    def box(x, w, label, fill='#dcebff'):
        return rect(x, 20, w, 32, fill, 3) + text(x + w/2, 40, label, 'middle', 11)
    arrow = lambda x1, x2: '<path d="M%d,36 H%d" stroke="#222" stroke-width="1.6" fill="none" marker-end="url(#ar2)"/>' % (x1, x2)
    defs = '<defs><marker id="ar2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#222"/></marker></defs>'
    s += box(6, 62, 'Plaintext') + arrow(68, 84)
    s += box(84, 74, 'Encryption', '#e5f6e0') + arrow(158, 176)
    s += box(176, 74, '?' if mid_missing else mid, '#fff3c4' if mid_missing else '#dcebff') + arrow(250, 268)
    s += box(268, 74, 'Decryption', '#e5f6e0') + arrow(342, 358)
    s += box(358, 62, 'Plaintext')
    s += line(121, 52, 121, 78) + text(121, 92, k1, 'middle', 11, True, '#b45309')
    s += line(305, 52, 305, 78) + text(305, 92, k2, 'middle', 11, True, '#b45309')
    return svg(430, 104, defs + s, 460)

def tell_list(ch, ratio=1.3, gap=6):
    out = []
    for i, x in enumerate(QS[ch]):
        w = [o for o in x['options'] if o != x['ans']]
        mean = sum(len(o) for o in w) / 3.0
        if len(x['ans']) > ratio * mean and len(x['ans']) - max(len(o) for o in w) >= gap:
            out.append(i)
    return out

# ======================= Unit 2 helpers =======================
FC_DEFS = '<defs><marker id="fa" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#222"/></marker></defs>'
def fc_arrow(pts):
    d = 'M' + ' L'.join('%s,%s' % p for p in pts)
    return '<path d="%s" fill="none" stroke="#222" stroke-width="1.5" marker-end="url(#fa)"/>' % d
def fc_plain(pts):
    return '<path d="M%s" fill="none" stroke="#222" stroke-width="1.5"/>' % ' L'.join('%s,%s' % p for p in pts)
def fc_shape(kind, cx, cy, w, hh, label=''):
    if kind == 'term':
        s = '<rect x="%s" y="%s" width="%s" height="%s" rx="%s" fill="#e5f6e0" stroke="#222" stroke-width="1.6"/>' % (cx - w/2, cy - hh/2, w, hh, hh/2)
    elif kind == 'proc':
        s = '<rect x="%s" y="%s" width="%s" height="%s" fill="#dcebff" stroke="#222" stroke-width="1.6"/>' % (cx - w/2, cy - hh/2, w, hh)
    elif kind == 'io':
        pts = '%s,%s %s,%s %s,%s %s,%s' % (cx - w/2 + 12, cy - hh/2, cx + w/2, cy - hh/2, cx + w/2 - 12, cy + hh/2, cx - w/2, cy + hh/2)
        s = '<polygon points="%s" fill="#f3e5f5" stroke="#222" stroke-width="1.6"/>' % pts
    elif kind == 'dec':
        pts = '%s,%s %s,%s %s,%s %s,%s' % (cx, cy - hh/2, cx + w/2, cy, cx, cy + hh/2, cx - w/2, cy)
        s = '<polygon points="%s" fill="#fff3c4" stroke="#222" stroke-width="1.6"/>' % pts
    else:
        raise ValueError(kind)
    if label:
        s += text(cx, cy + 4, label, 'middle', 11)
    return s

def symbol_svg(kind):
    return svg(160, 80, FC_DEFS + fc_shape(kind, 80, 40, 110 if kind != 'dec' else 100, 44 if kind != 'dec' else 62), 180)

def fc_branch(inp, cond, left, right):
    s = FC_DEFS
    s += fc_shape('term', 160, 22, 80, 28, 'Start') + fc_arrow([(160, 36), (160, 62)])
    s += fc_shape('io', 160, 78, 130, 30, inp) + fc_arrow([(160, 93), (160, 118)])
    s += fc_shape('dec', 160, 148, 150, 60, cond)
    s += fc_arrow([(85, 148), (62, 148), (62, 210)]) + text(72, 141, 'Yes', 'middle', 10)
    s += fc_arrow([(235, 148), (258, 148), (258, 210)]) + text(248, 141, 'No', 'middle', 10)
    s += fc_shape('io', 62, 226, 100, 30, left) + fc_shape('io', 258, 226, 100, 30, right)
    s += fc_plain([(62, 241), (62, 268), (160, 268)]) + fc_plain([(258, 241), (258, 268), (160, 268)])
    s += fc_arrow([(160, 268), (160, 284)]) + fc_shape('term', 160, 298, 80, 28, 'End')
    return svg(320, 320, s, 340)

def fc_loop():
    s = FC_DEFS
    s += fc_shape('term', 160, 20, 80, 28, 'Start') + fc_arrow([(160, 34), (160, 52)])
    s += fc_shape('proc', 160, 66, 110, 28, 'sum = 0') + fc_arrow([(160, 80), (160, 98)])
    s += fc_shape('proc', 160, 112, 110, 28, 'i = 1') + fc_arrow([(160, 126), (160, 144)])
    s += fc_shape('dec', 160, 176, 120, 58, 'i <= 3 ?')
    s += fc_arrow([(160, 205), (160, 236)]) + text(172, 222, 'Yes', 'start', 10)
    s += fc_shape('proc', 160, 250, 120, 28, 'sum = sum + i') + fc_arrow([(160, 264), (160, 280)])
    s += fc_shape('proc', 160, 294, 120, 28, 'i = i + 1')
    s += fc_arrow([(220, 294), (290, 294), (290, 176), (220, 176)])
    s += fc_arrow([(100, 176), (50, 176), (50, 236)]) + text(75, 169, 'No', 'middle', 10)
    s += fc_shape('io', 50, 250, 90, 28, 'Output sum') + fc_arrow([(50, 264), (50, 300)])
    s += fc_shape('term', 50, 314, 76, 26, 'End')
    return svg(320, 340, s, 340)

ARR_COL = {'y': '#fff3c4', 'b': '#cfe8ff', 'g': '#d4f3d0', 'r': '#ffd6d6', '': 'white'}
def array_svg(vals, col=None, idx=True, tags=None, bw=40):
    """vals: list; col: {index: 'y'|'b'|'g'|'r'}; tags: {index: 'mid'} printed above the box."""
    col = col or {}; tags = tags or {}
    n = len(vals); w = n * bw + 20
    top = 24 if tags else 6
    s = ''
    for i, v in enumerate(vals):
        x = 10 + i * bw
        s += '<rect x="%s" y="%s" width="%s" height="30" fill="%s" stroke="#222" stroke-width="1.5"/>' % (x, top, bw, ARR_COL[col.get(i, '')])
        s += text(x + bw/2, top + 20, str(v), 'middle', 13, True)
        if idx: s += text(x + bw/2, top + 46, str(i), 'middle', 10, False, '#666')
        if i in tags: s += text(x + bw/2, top - 8, tags[i], 'middle', 10, True, '#b45309')
    return svg(w, top + 54 if idx else top + 38, s, max(w, 160))

# ---- algorithm helpers (used to compute answers by code) ----
def bubble_pass(a):
    a = list(a); sw = 0
    for j in range(len(a) - 1):
        if a[j] > a[j + 1]:
            a[j], a[j + 1] = a[j + 1], a[j]; sw += 1
    return a, sw
def insertion_steps(a):
    a = list(a); out = [list(a)]
    for i in range(1, len(a)):
        k = a[i]; j = i - 1
        while j >= 0 and a[j] > k:
            a[j + 1] = a[j]; j -= 1
        a[j + 1] = k; out.append(list(a))
    return out    # out[i] = array after the first i+1 elements are in sorted order
def binary_trace(a, t):
    lo, hi = 0, len(a) - 1; seq = []
    while lo <= hi:
        mid = (lo + hi) // 2; seq.append((lo, mid, hi))
        if a[mid] == t: return seq, mid
        if a[mid] < t: lo = mid + 1
        else: hi = mid - 1
    return seq, None
def fmt(a): return ', '.join(str(x) for x in a)

# ======================= Unit 5 / 6 helpers =======================
ARW = '<defs><marker id="ah" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#222"/></marker></defs>'
def arrow(x1, y1, x2, y2, both=False):
    m = ' marker-end="url(#ah)"' + (' marker-start="url(#ah)"' if both else '')
    return '<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#222" stroke-width="1.6"%s/>' % (x1, y1, x2, y2, m)
def box(x, y, w, hh, label, fill='#dcebff', size=11, bold=False, dash=False):
    d = ' stroke-dasharray="5,3"' if dash else ''
    r = '<rect x="%s" y="%s" width="%s" height="%s" rx="4" fill="%s" stroke="#222" stroke-width="1.6"%s/>' % (x, y, w, hh, fill, d)
    parts = label.split('\n'); n = len(parts)
    for i, p_ in enumerate(parts):
        r += text(x + w/2, y + hh/2 + 4 - (n-1)*7 + i*14, p_, 'middle', size, bold)
    return r
def cloud_shape(cx, cy, w, hh, label, fill='#eaf1fb'):
    return ('<ellipse cx="%s" cy="%s" rx="%s" ry="%s" fill="%s" stroke="#222" stroke-width="1.6"/>' % (cx, cy, w/2, hh/2, fill) +
            ''.join(text(cx, cy + 4 - (len(label.split('\n'))-1)*7 + i*14, p_, 'middle', 11, True) for i, p_ in enumerate(label.split('\n'))))

def iot_flow_svg(missing=None, labels=('Smart\ndevices', 'Internet', 'Cloud\nservers', 'Mobile\napp')):
    s = ARW; xs = [8, 100, 192, 284]; fills = ['#e5f6e0', '#fff3c4', '#dcebff', '#f3e5f5']
    for i, x in enumerate(xs):
        s += box(x, 20, 76, 44, '?' if i == missing else labels[i], '#ffe0e0' if i == missing else fills[i], 11, i == missing)
        if i < 3: s += arrow(x + 76, 42, xs[i+1], 42)
    return svg(370, 84, s, 400)

def cloud_svg(kind):
    s = ARW
    if kind == 'public':
        s += cloud_shape(160, 40, 190, 56, 'Cloud owned by\nservice provider')
        for i, (x, lab) in enumerate([(8, 'Business'), (88, 'School'), (168, 'Shop'), (248, 'Person')]):
            s += box(x, 118, 64, 28, lab, '#e5f6e0') + arrow(x + 32, 118, 160 + (x + 32 - 160) * 0.45, 66)
    elif kind == 'private':
        s += '<rect x="40" y="8" width="240" height="140" rx="8" fill="none" stroke="#b45309" stroke-width="1.6" stroke-dasharray="6,4"/>'
        s += text(160, 24, 'One organization', 'middle', 11, True, '#b45309')
        s += cloud_shape(160, 62, 150, 48, 'Cloud') + box(105, 108, 110, 28, 'Staff and systems', '#e5f6e0') + arrow(160, 108, 160, 86)
    elif kind == 'community':
        s += cloud_shape(160, 40, 160, 52, 'Shared cloud')
        for x, lab in [(20, 'Org A'), (125, 'Org B'), (230, 'Org C')]:
            s += box(x, 112, 70, 28, lab, '#e5f6e0') + arrow(x + 35, 112, 160 + (x + 35 - 160) * 0.4, 66, True)
        s += text(160, 158, 'Same security and compliance needs', 'middle', 11, False, '#555')
    elif kind == 'hybrid':
        s += cloud_shape(75, 50, 120, 52, 'Private\ncloud') + cloud_shape(245, 50, 120, 52, 'Public\ncloud')
        s += arrow(135, 50, 185, 50, True)
        s += box(20, 110, 110, 28, 'Sensitive data', '#ffe9b3') + box(190, 110, 110, 28, 'Normal tasks', '#e5f6e0')
        s += arrow(75, 110, 75, 76) + arrow(245, 110, 245, 76)
    return svg(320, 165, s, 340)

def chain_svg(tamper=None, hide=None):
    hs = ['A7', 'C3', '5E', '9B']; s = ''
    for i in range(4):
        x = 6 + i * 88
        bad = tamper == i; mism = tamper is not None and i == tamper + 1
        s += '<rect x="%s" y="10" width="76" height="86" rx="4" fill="%s" stroke="%s" stroke-width="1.8"%s/>' % (x, '#ffe0e0' if bad else '#dcebff', '#c62828' if (bad or mism) else '#222', ' stroke-dasharray="5,3"' if mism else '')
        s += text(x + 38, 26, 'Block %d' % (i + 1), 'middle', 11, True)
        s += text(x + 38, 42, 'Data: T%d' % (i + 1) + ('*' if bad else ''), 'middle', 10, False, '#c62828' if bad else '#222')
        prev = '00' if i == 0 else hs[i-1]
        s += text(x + 38, 62, 'Prev: ' + prev, 'middle', 10, False, '#c62828' if mism else '#222')
        hv = 'F0' if bad else hs[i]
        s += text(x + 38, 80, 'Hash: ' + hv, 'middle', 10, True, '#c62828' if bad else '#222')
        if i < 3: s += arrow(x + 76, 53, x + 88, 53)
    return svg(366, 106, ARW + s, 400)

def embedded_svg(missing=True):
    s = ARW + box(6, 24, 90, 44, 'Temperature\nsensor', '#e5f6e0') + arrow(96, 46, 124, 46)
    s += box(124, 14, 112, 64, '?' if missing else 'Microcontroller\n+ firmware', '#ffe0e0' if missing else '#fff3c4', 12, True) + arrow(236, 46, 264, 46)
    s += box(264, 24, 80, 44, 'Heater', '#dcebff')
    return svg(350, 92, s, 380)

def bcnet_svg(kind):
    import math
    s = ''
    def nodes(pts):
        o = ''
        for a, b in itertools.combinations(pts, 2):
            if math.dist(a, b) < 95: o += line(a[0], a[1], b[0], b[1])
        return o + ''.join(circ(x, y, 9, '#dcebff') for x, y in pts)
    if kind == 'public':
        pts = [(40, 40), (110, 25), (190, 45), (270, 30), (60, 110), (140, 95), (225, 115), (285, 100)]
        s += nodes(pts) + text(160, 152, 'Participants from anywhere in the world', 'middle', 11, False, '#555')
    elif kind == 'private':
        s += '<rect x="60" y="14" width="200" height="110" rx="8" fill="none" stroke="#b45309" stroke-width="1.6" stroke-dasharray="6,4"/>'
        s += text(160, 30, 'Single organization', 'middle', 11, True, '#b45309')
        s += nodes([(100, 60), (160, 50), (220, 62), (115, 100), (205, 100)])
    elif kind == 'consortium':
        for x, lab in [(10, 'Bank A'), (112, 'Bank B'), (214, 'Bank C')]:
            s += '<rect x="%s" y="14" width="96" height="100" rx="8" fill="none" stroke="#b45309" stroke-width="1.6" stroke-dasharray="6,4"/>' % x
            s += text(x + 48, 30, lab, 'middle', 11, True, '#b45309')
            s += circ(x + 30, 60, 9, '#dcebff') + circ(x + 66, 60, 9, '#dcebff') + circ(x + 48, 92, 9, '#dcebff') + line(x+30, 60, x+66, 60) + line(x+30, 60, x+48, 92) + line(x+66, 60, x+48, 92)
        s += line(106, 60, 112, 60) + line(208, 60, 214, 60)
    return svg(320, 158, s, 340)

def decentral_svg(kind):
    s = ''
    if kind == 'central':
        pts = [(40, 30), (280, 30), (40, 120), (280, 120), (160, 150)]
        for x, y in pts: s += line(160, 80, x, y)
        s += box(130, 64, 60, 32, 'Server', '#ffe9b3', 11, True)
        for x, y in pts: s += node(x, y, 'PC')
        return svg(320, 168, s, 340)
    pts = [(160, 22), (265, 62), (240, 135), (80, 135), (55, 62)]
    for a, b in itertools.combinations(pts, 2): s += line(a[0], a[1], b[0], b[1])
    for x, y in pts: s += box(x-24, y-13, 48, 26, 'Ledger', '#dcebff', 10)
    return svg(320, 160, s, 340)

# ======================= Unit 6 helpers =======================
def sources_svg(missing=None):
    names = ['Primary', 'Secondary', 'Tertiary']
    desc = ['First-hand,\noriginal evidence', 'Analyses and\nsummarizes primary', 'Overview of primary\nand secondary']
    fills = ['#e5f6e0', '#dcebff', '#f3e5f5']
    s = ARW; xs = [6, 124, 242]
    for i, x in enumerate(xs):
        s += box(x, 8, 102, 28, '?' if missing == i else names[i], '#ffe0e0' if missing == i else fills[i], 12, True)
        for j, d in enumerate(desc[i].split('\n')): s += text(x + 51, 56 + j * 14, d, 'middle', 10, False, '#444')
        if i < 2: s += arrow(x + 102, 22, xs[i+1], 22)
    return svg(352, 92, s, 380)

def sample_svg(kind):
    import random
    rnd = random.Random(7 if kind == 'urban' else 11)
    s = '<rect x="8" y="22" width="150" height="120" fill="#fff8e1" stroke="#222" stroke-width="1.6"/><rect x="158" y="22" width="150" height="120" fill="#e8f5e9" stroke="#222" stroke-width="1.6"/>'
    s += text(83, 15, 'Urban area', 'middle', 11, True) + text(233, 15, 'Rural area', 'middle', 11, True)
    pts = []
    for (x0, x1) in ((16, 150), (166, 300)):
        for _ in range(14): pts.append((rnd.randint(x0, x1), rnd.randint(32, 132), x0 < 100))
    for (x, y, urban) in pts:
        picked = (urban and rnd.random() < 0.6) if kind == 'urban' else (rnd.random() < 0.3)
        s += circ(x, y, 5, '#f57c00' if picked else '#cfd8dc', '#444')
    s += circ(70, 158, 5, '#f57c00') + text(80, 162, '= person surveyed', 'start', 11)
    s += circ(190, 158, 5, '#cfd8dc', '#444') + text(200, 162, '= person not surveyed', 'start', 11)
    return svg(316, 172, s, 340)

def divide_svg():
    s = ARW + box(6, 18, 130, 74, 'Fast Internet\nSmartphones\nOnline jobs', '#e5f6e0', 11) + box(184, 18, 130, 74, 'No Internet\nNo devices\nFew chances', '#ffe0e0', 11)
    s += arrow(140, 55, 180, 55, True) + text(160, 46, 'GAP', 'middle', 11, True, '#c62828')
    s += text(71, 108, 'Group A', 'middle', 11, True) + text(249, 108, 'Group B', 'middle', 11, True)
    return svg(320, 120, s, 340)

# ======================= Unit 8 helpers =======================
def fidelity_svg(missing=None):
    names = ['Low-fidelity', 'Medium-fidelity', 'High-fidelity']
    sub = [('Quick and cheap', 'basic layout'), ('More detailed', 'for user testing'), ('Realistic interface', 'and function')]
    fills = ['#fff3c4', '#dcebff', '#e5f6e0']; xs = [6, 124, 242]
    s = ARW
    for i, x in enumerate(xs):
        s += box(x, 8, 104, 30, '?' if missing == i else names[i], '#ffe0e0' if missing == i else fills[i], 12, True)
        for j, d in enumerate(sub[i]): s += text(x + 52, 58 + j * 14, d, 'middle', 10, False, '#444')
        if i < 2: s += arrow(x + 104, 23, xs[i+1], 23)
    s += text(176, 100, 'More detail and realism', 'middle', 10, False, '#888')
    return svg(352, 108, s, 380)

def iter_loop_svg(missing=None):
    names = ['Gather\nfeedback', 'Analyze\ndata', 'Make\nchanges', 'Repeat\ntesting']
    pos = [(10, 12), (196, 12), (196, 82), (10, 82)]
    s = ARW
    for i, (x, y) in enumerate(pos):
        s += box(x, y, 100, 44, '?' if missing == i else names[i], '#ffe0e0' if missing == i else '#dcebff', 11, True)
    s += arrow(110, 34, 196, 34) + arrow(246, 56, 246, 82) + arrow(196, 104, 110, 104) + arrow(60, 82, 60, 56)
    return svg(310, 136, s, 340)

def release_svg(missing=None):
    names = ['Alpha', 'Beta', 'Official\nrelease']
    sub = ['Internal testing', 'Select group of users', 'Product launched']
    fills = ['#fff3c4', '#dcebff', '#e5f6e0']; xs = [6, 124, 242]
    s = ARW
    for i, x in enumerate(xs):
        s += box(x, 8, 104, 40, '?' if missing == i else names[i], '#ffe0e0' if missing == i else fills[i], 12, True)
        s += text(x + 52, 68, sub[i], 'middle', 10, False, '#444')
        if i < 2: s += arrow(x + 104, 28, xs[i+1], 28)
    return svg(352, 80, s, 380)

def mvp_svg():
    s = ARW
    s += text(80, 14, 'Included in first version', 'middle', 11, True, '#2e7d32') + text(240, 14, 'Postponed for later', 'middle', 11, True, '#888')
    for i, lab in enumerate(['Sign up', 'Place an order', 'Pay online']):
        s += box(14, 24 + i * 38, 132, 30, lab, '#e5f6e0', 11, True)
    for i, lab in enumerate(['Chat support', 'Colour themes', 'Reward badges']):
        s += box(174, 24 + i * 38, 132, 30, lab, '#f5f5f5', 11, False, True)
    return svg(320, 142, s, 340)

def bar_svg_u8(vals, labels, title, colors=None):
    mx = max(vals); s = ''
    s += text(160, 14, title, 'middle', 11, True)
    s += '<line x1="30" y1="130" x2="310" y2="130" stroke="#222" stroke-width="1.5"/><line x1="30" y1="22" x2="30" y2="130" stroke="#222" stroke-width="1.5"/>'
    n = len(vals); bw = 56; gap = (280 - n * bw) / (n + 1)
    cols = colors or ['#90caf9', '#ffcc80', '#a5d6a7', '#ce93d8']
    for i, (v, l) in enumerate(zip(vals, labels)):
        h = 100 * v / mx; x = 30 + gap + i * (bw + gap)
        s += '<rect x="%s" y="%s" width="%s" height="%s" fill="%s" stroke="#222" stroke-width="1.2"/>' % (x, 130 - h, bw, h, cols[i % len(cols)])
        s += text(x + bw / 2, 126 - h, str(v), 'middle', 11, True) + text(x + bw / 2, 144, l, 'middle', 10)
    return svg(320, 156, s, 340)

def lean_svg():
    items = [('1', 'Final product\nidea'), ('2', 'Complex circuit\n(pressure sensors)'), ('3', 'Cost-driven circuit\n(infrared sensor,\nmicrocontroller)'), ('4', 'Small-scale circuit\n(buzzer, limit switch)')]
    s = ARW
    for i, (n, lab) in enumerate(items):
        x = 6 + i * 92
        s += box(x, 20, 84, 64, lab, ['#fff3c4', '#dcebff', '#e5f6e0', '#f3e5f5'][i], 9)
        s += circ(x + 10, 14, 9, '#fff') + text(x + 10, 18, n, 'middle', 11, True)
        if i < 3: s += arrow(x + 84, 52, x + 92, 52)
    return svg(374, 96, s, 400)


# ======================= Unit 3 / Unit 4 helpers =======================
import io, contextlib, builtins, math as _math

def run(code, inputs=None):
    """Execute Python code, return what it prints (stripped, lines joined by ' / ')."""
    buf = io.StringIO(); it = iter(inputs or [])
    g = {'__name__': '__main__'}
    old = builtins.input
    builtins.input = lambda *a: next(it)
    try:
        with contextlib.redirect_stdout(buf):
            exec(code, g)
    finally:
        builtins.input = old
    return ' / '.join(l for l in buf.getvalue().strip().split('\n'))

def outq(ch, sec, lvl, code, wrong, why, stem="What is the output of the following code?", inputs=None, intro="Study the code."):
    ans = run(code, inputs)
    add(ch, sec, lvl, stim(intro, pre(code)) + stem, ans, wrong, why)
    return ans

# ---- turtle simulator: cmds = [('f',100),('l',90),('pu',),('pd',),('b',50),('r',90)] ----
def turtle_sim(cmds):
    x = y = 0.0; ang = 0.0; pen = True; segs = []
    for c in cmds:
        k = c[0]
        if k in 'fb':
            d = c[1] if k == 'f' else -c[1]
            nx = x + d * _math.cos(_math.radians(ang)); ny = y + d * _math.sin(_math.radians(ang))
            if pen: segs.append((x, y, nx, ny))
            x, y = nx, ny
        elif k == 'l': ang += c[1]
        elif k == 'r': ang -= c[1]
        elif k == 'pu': pen = False
        elif k == 'pd': pen = True
        elif k == 'goto': 
            if pen: segs.append((x, y, c[1], c[2]))
            x, y = c[1], c[2]
    return segs, (round(x, 6), round(y, 6)), round(ang % 360, 6)

def turtle_svg(cmds, w=230, hh=170, pad=18):
    segs, end, ang = turtle_sim(cmds)
    pts = [(a, b) for a, b, c, d in segs] + [(c, d) for a, b, c, d in segs] + [(0, 0), end]
    xs = [p[0] for p in pts]; ys = [p[1] for p in pts]
    minx, maxx, miny, maxy = min(xs), max(xs), min(ys), max(ys)
    sc = min((w - 2 * pad) / max(maxx - minx, 1), (hh - 2 * pad) / max(maxy - miny, 1))
    tx = lambda X: pad + (X - minx) * sc + ((w - 2 * pad) - (maxx - minx) * sc) / 2
    ty = lambda Y: hh - pad - (Y - miny) * sc - ((hh - 2 * pad) - (maxy - miny) * sc) / 2
    b = ''
    for a, bb, c, d in segs:
        b += '<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="#1d4ed8" stroke-width="2.4"/>' % (tx(a), ty(bb), tx(c), ty(d))
    b += '<circle cx="%.1f" cy="%.1f" r="4.5" fill="#16a34a"/>' % (tx(0), ty(0))
    b += text(tx(0), ty(0) + 16, 'start', 'middle', 10, False, '#16a34a')
    return svg(w, hh, b, w)

# ---- generic flow of boxes (horizontal), missing index shown as '?' ----
def boxes_svg(labels, missing=None, w=None, bw=96, gap=22, hh=44, fills=None):
    n = len(labels); W = n * bw + (n - 1) * gap + 20
    s = '<defs><marker id="ba" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#222"/></marker></defs>'
    for i, l in enumerate(labels):
        x = 10 + i * (bw + gap)
        fill = '#fff3c4' if i == missing else (fills[i] if fills else '#eaf1fb')
        s += rect(x, 10, bw, hh, fill, 6)
        if i != missing and '\n' in l:
            l1, l2 = l.split('\n'); s += text(x + bw / 2, 10 + hh / 2 - 2, l1, 'middle', 11, True) + text(x + bw / 2, 10 + hh / 2 + 13, l2, 'middle', 11, True)
        else:
            s += text(x + bw / 2, 10 + hh / 2 + 4, '?' if i == missing else l, 'middle', 12 if i != missing else 18, True)
        if i < n - 1: s += '<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#222" stroke-width="1.6" marker-end="url(#ba)"/>' % (x + bw, 10 + hh / 2, x + bw + gap - 1, 10 + hh / 2)
    return svg(W, hh + 20, s, W)

def vboxes_svg(labels, missing=None, bw=170, hh=30, gap=16, fills=None):
    n = len(labels); H = n * hh + (n - 1) * gap + 20
    s = '<defs><marker id="va" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#222"/></marker></defs>'
    for i, l in enumerate(labels):
        y = 10 + i * (hh + gap)
        s += rect(10, y, bw, hh, '#fff3c4' if i == missing else '#eaf1fb', 6)
        s += text(10 + bw / 2, y + hh / 2 + 4, '?' if i == missing else l, 'middle', 12, True)
        if i < n - 1: s += '<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#222" stroke-width="1.6" marker-end="url(#va)"/>' % (10 + bw / 2, y + hh, 10 + bw / 2, y + hh + gap - 1)
    return svg(bw + 20, H, s, bw + 20)

# ---- charts ----
PAL = ['#3b82f6', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#14b8a6']
def bar_svg(labels, vals, title=None, w=300, hh=190, ymax=None, color='#3b82f6'):
    ymax = ymax or max(vals) * 1.15; L, B, T = 38, hh - 30, 26 if title else 10
    s = text(w / 2, 16, title, 'middle', 12, True) if title else ''
    s += line(L, T, L, B) + line(L, B, w - 8, B)
    step = max(1, int(ymax // 4)) if ymax >= 4 else ymax / 4
    k = 0
    while k <= ymax:
        yy = B - (B - T) * k / ymax
        s += line(L - 4, yy, L, yy) + text(L - 7, yy + 4, ('%g' % k), 'end', 10) + '<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#ddd"/>' % (L, yy, w - 8, yy)
        k += step
    bw = (w - L - 16) / len(vals)
    for i, (l, v) in enumerate(zip(labels, vals)):
        x = L + 8 + i * bw; bh = (B - T) * v / ymax
        s += '<rect x="%.1f" y="%.1f" width="%.1f" height="%.1f" fill="%s" stroke="#222"/>' % (x, B - bh, bw - 16, bh, color)
        s += text(x + (bw - 16) / 2, B + 14, l, 'middle', 10)
    return svg(w, hh, s, w)

def hist_svg(counts, edges, title=None, w=300, hh=190):
    ymax = max(counts) * 1.15; L, B, T = 38, hh - 30, 26 if title else 10
    s = text(w / 2, 16, title, 'middle', 12, True) if title else ''
    s += line(L, T, L, B) + line(L, B, w - 8, B)
    bw = (w - L - 16) / len(counts)
    for i, c in enumerate(counts):
        x = L + 4 + i * bw; bh = (B - T) * c / ymax
        s += '<rect x="%.1f" y="%.1f" width="%.1f" height="%.1f" fill="#10b981" stroke="#222"/>' % (x, B - bh, bw, bh)
    for i, e in enumerate(edges):
        s += text(L + 4 + i * bw, B + 14, str(e), 'middle', 10)
    return svg(w, hh, s, w)

def pie_svg(labels, vals, w=300, hh=190):
    tot = float(sum(vals)); cx, cy, r = 90, hh / 2, 70; a0 = -_math.pi / 2; s = ''
    for i, v in enumerate(vals):
        a1 = a0 + 2 * _math.pi * v / tot
        x0, y0, x1, y1 = cx + r * _math.cos(a0), cy + r * _math.sin(a0), cx + r * _math.cos(a1), cy + r * _math.sin(a1)
        s += '<path d="M%s,%s L%.1f,%.1f A%s,%s 0 %d 1 %.1f,%.1f Z" fill="%s" stroke="#fff" stroke-width="2"/>' % (cx, cy, x0, y0, r, r, 1 if a1 - a0 > _math.pi else 0, x1, y1, PAL[i])
        s += '<rect x="190" y="%d" width="12" height="12" fill="%s"/>' % (40 + i * 24, PAL[i]) + text(208, 51 + i * 24, '%s (%g%%)' % (labels[i], v), 'start', 11)
        a0 = a1
    return svg(w, hh, s, w)

def line_svg(xs, ys, title=None, w=300, hh=190, xl='', yl=''):
    L, B, T, R = 40, hh - 32, 26 if title else 12, w - 14
    ymax = max(ys) * 1.15; s = text(w / 2, 16, title, 'middle', 12, True) if title else ''
    s += line(L, T, L, B) + line(L, B, R, B)
    st = max(1, int(ymax // 4)); k = 0
    while k <= ymax:
        yy = B - (B - T) * k / ymax; s += line(L - 4, yy, L, yy) + text(L - 7, yy + 4, str(k), 'end', 10) + '<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#eee"/>' % (L, yy, R, yy); k += st
    pts = []
    for i, (x, y) in enumerate(zip(xs, ys)):
        px = L + 14 + i * (R - L - 28) / (len(xs) - 1); py = B - (B - T) * y / ymax; pts.append((px, py))
        s += text(px, B + 14, str(x), 'middle', 10)
    s += '<polyline points="%s" fill="none" stroke="#ef4444" stroke-width="2.2"/>' % ' '.join('%.1f,%.1f' % p for p in pts)
    for p in pts: s += circ('%.1f' % p[0], '%.1f' % p[1], 3.5, '#ef4444')
    if xl: s += text((L + R) / 2, hh - 4, xl, 'middle', 10, False, '#555')
    return svg(w, hh, s, w)

def _nice(v):
    for c in (1, 2, 5, 10, 20, 25, 50, 100):
        if c >= v: return c
    return 100

def scatter_svg(pts, fit=None, title=None, w=300, hh=210, xl='x', yl='y', xmax=None, ymax=None, color='#3b82f6', ticks=True):
    L, B, T, R = 40, hh - 34, 26 if title else 12, w - 14
    xmax = xmax or max(p[0] for p in pts) * 1.1; ymax = ymax or max(p[1] for p in pts) * 1.1
    s = text(w / 2, 16, title, 'middle', 12, True) if title else ''
    s += line(L, T, L, B) + line(L, B, R, B)
    mx = lambda X: L + (R - L) * X / xmax; my = lambda Y: B - (B - T) * Y / ymax
    if ticks:
        for k in range(0, int(xmax) + 1, _nice(xmax / 5)): s += line(mx(k), B, mx(k), B + 4) + text(mx(k), B + 15, str(k), 'middle', 10)
        for k in range(0, int(ymax) + 1, _nice(ymax / 5)): s += line(L - 4, my(k), L, my(k)) + text(L - 7, my(k) + 4, str(k), 'end', 10)
    if fit:
        m, c = fit
        s += '<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="#ef4444" stroke-width="2"/>' % (mx(0), my(c), mx(xmax), my(m * xmax + c))
    for X, Y in pts: s += circ('%.1f' % mx(X), '%.1f' % my(Y), 3.8, color)
    s += text((L + R) / 2, hh - 4, xl, 'middle', 11, True) + '<text x="11" y="%s" font-size="11" font-weight="bold" transform="rotate(-90 11 %s)" text-anchor="middle">%s</text>' % ((B + T) / 2, (B + T) / 2, h(yl))
    return svg(w, hh, s, w)

def cluster_svg(groups, w=300, hh=190, colors=None, labelled=True):
    s = line(10, hh - 14, w - 10, hh - 14) + line(10, 10, 10, hh - 14)
    for gi, g in enumerate(groups):
        for x, y in g: s += circ(x, y, 5, (colors or PAL)[gi] if labelled else '#9ca3af')
    return svg(w, hh, s, w)

def pop_sample_svg():
    s = '<ellipse cx="110" cy="85" rx="100" ry="72" fill="#eaf1fb" stroke="#222" stroke-width="1.6"/>'
    import random as _r; rnd = _r.Random(5)
    for i in range(34):
        a = rnd.random() * 6.28; rr = 62 * rnd.random() ** 0.5
        s += circ('%.1f' % (110 + 88 * rr / 62 * _math.cos(a) * 0.9), '%.1f' % (85 + 58 * rr / 62 * _math.sin(a)), 3.2, '#93c5fd')
    s += '<ellipse cx="135" cy="85" rx="32" ry="26" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="5 3"/>'
    s += text(110, 172, 'Outer circle = all items', 'middle', 10) + text(222, 82, '', 'start', 10)
    s += text(200, 40, 'dashed circle =', 'start', 10, False, '#ef4444') + text(200, 54, 'selected group', 'start', 10, False, '#ef4444')
    return svg(310, 180, s, 310)

def dbg_svg(hl=None):
    names = ['Go', 'Step', 'Over', 'Out', 'Quit']; s = ''
    for i, n in enumerate(names):
        s += rect(10 + i * 58, 10, 52, 26, '#fff3c4' if n == hl else '#eaf1fb', 4) + text(36 + i * 58, 27, n, 'middle', 12, True)
    return svg(304, 46, s, 304)

def code_table(headers, rows, cap=None): return truth_html(headers, rows, cap)


def cluster_pair(groups):
    """Left panel: unlabelled grey points; right panel: same points coloured by group."""
    s = ''
    for panel in (0, 1):
        ox = 8 + panel * 170
        s += line(ox, 112, ox + 150, 112) + line(ox, 8, ox, 112)
        for gi, g in enumerate(groups):
            for x, y in g:
                s += circ('%.1f' % (ox + 6 + x * 0.55), '%.1f' % (y * 0.72), 4.5, PAL[gi] if panel else '#9ca3af')
        s += text(ox + 75, 128, 'Unlabelled data' if panel == 0 else 'Three groups found', 'middle', 11, True)
    return svg(340, 136, s, 340)


# ======================= Unit 7 helpers =======================
def infographic_svg():
    s = rect(5, 5, 290, 30, '#3b82f6', 6) + text(150, 25, 'SCHOOL FUN FAIR 2026', 'middle', 14, True, '#fff')
    for i, (lab, num, col) in enumerate([('Stalls', '12', '#f59e0b'), ('Games', '8', '#10b981'), ('Visitors', '450', '#ef4444')]):
        cx = 55 + i * 95
        s += circ(cx, 75, 28, col, '#fff') + text(cx, 80, num, 'middle', 15, True, '#fff') + text(cx, 120, lab, 'middle', 11, True)
    vals = [('Fri', 120), ('Sat', 200), ('Sun', 130)]
    for i, (d, v) in enumerate(vals):
        x = 40 + i * 80; bh = v * 0.2
        s += '<rect x="%s" y="%s" width="46" height="%s" fill="#93c5fd" stroke="#222"/>' % (x, 195 - bh, bh) + text(x + 23, 210, d, 'middle', 10) + text(x + 23, 190 - bh, str(v), 'middle', 10, True)
    s += text(150, 137, "Visitors per day", 'middle', 11, True) + line(30, 195, 280, 195)
    return svg(300, 218, s, 300)
