<!-- meta
title: 3.2 ค่าลักษณะเฉพาะ เวกเตอร์ลักษณะเฉพาะ และการแปลงเป็นทแยงมุม
ch: 3
section: 3.2
page: ch3-2.html
tts: 1
-->

<div class="crumb">บทที่ 3 · ค่าลักษณะเฉพาะและเวกเตอร์ลักษณะเฉพาะ</div>
<h1 class="page-title">3.2 ค่าลักษณะเฉพาะ เวกเตอร์ลักษณะเฉพาะ และการแปลงเป็นทแยงมุม</h1>
<p class="page-sub">หัวใจของบทที่ 3 — หา "ทิศทางวิเศษ" ที่เมทริกซ์ทำได้แค่ยืดสเกล (\(A\vec{v} = \lambda\vec{v}\))
ผ่านพหุนามลักษณะเฉพาะ แล้วใช้เวกเตอร์เหล่านี้แปลงเมทริกซ์เป็นทแยงมุม เพื่อคำนวณ \(A^k\) ได้ในพริบตา</p>

<nav class="pillnav">
  <a href="#objectives">🎯 จุดประสงค์</a>
  <a href="#lesson">📖 บทเรียน</a>
  <a href="#examples">✏️ ตัวอย่างโจทย์</a>
  <a href="#textbook">📚 ตัวอย่างจากตำรา</a>
  <a href="#apply">🌍 การใช้จริง</a>
  <a href="#recipe">⚡ สูตรสำเร็จ</a>
  <a href="#practice">🏋️ โจทย์ซ้อมมือ</a>
</nav>

<section class="block" id="objectives">
  <div class="obj">
    <h2>🎯 เรียนจบหัวข้อนี้ คุณต้องทำสิ่งเหล่านี้ได้</h2>
    <ul>
      <li>ตรวจว่าเวกเตอร์ใดเป็นเวกเตอร์ลักษณะเฉพาะของ \(A\) และหาค่าลักษณะเฉพาะที่สมนัย</li>
      <li>หาค่าลักษณะเฉพาะทั้งหมดจากสมการลักษณะเฉพาะ \(\det(A - \lambda I) = 0\) และหาปริภูมิลักษณะเฉพาะ \(E_\lambda = \operatorname{Nul}(A - \lambda I)\)</li>
      <li>ตัดสินว่า \(A\) แปลงเป็นทแยงมุมได้หรือไม่ (นับจำนวนเวกเตอร์ลักษณะเฉพาะอิสระเทียบกับ \(n\))</li>
      <li>หา \(P\) และ \(D\) ที่ \(A = PDP^{-1}\) และใช้ \(A^k = PD^kP^{-1}\) คำนวณกำลังของเมทริกซ์</li>
      <li>ใช้สมบัติของเมทริกซ์คล้าย (similar): พหุนามลักษณะเฉพาะ, det, trace เท่ากัน</li>
    </ul>
  </div>
</section>

<section class="block" id="lesson">
  <h2><span class="h2-dot">📖</span> บทเรียน</h2>

  <h3>1) ค่าลักษณะเฉพาะและเวกเตอร์ลักษณะเฉพาะ</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม — eigenvalue / eigenvector / eigenspace</div>
    <p>ให้ \(A\) เป็นเมทริกซ์จัตุรัสขนาด \(n\)</p>
    <p>• \(\lambda\) เป็น<strong>ค่าลักษณะเฉพาะ</strong> (eigenvalue) ของ \(A\) ถ้ามี \(\vec{v} \neq \vec{0}\) ที่ทำให้</p>
    \[ A\vec{v} = \lambda\vec{v} \]
    <p>และเวกเตอร์ \(\vec{v}\) นั้นเรียกว่า <strong>เวกเตอร์ลักษณะเฉพาะ</strong> (eigenvector) ที่สมนัยกับ \(\lambda\)</p>
    <p>• เซตผลเฉลยทั้งหมดของ \((A - \lambda I)\vec{x} = \vec{0}\) เรียกว่า <strong>ปริภูมิลักษณะเฉพาะ</strong> (eigenspace) \(E_\lambda = \operatorname{Nul}(A - \lambda I)\) — รวม \(\vec{0}\) ไว้ด้วย (แม้ \(\vec{0}\) ไม่ใช่ eigenvector)</p>
  </div>

  <div class="box box-idea">
    <div class="box-title">💡 เข้าใจภาพ</div>
    <p>การคูณเมทริกซ์ \(A\vec{x}\) ปกติจะ<em>บิดและยืด</em>เวกเตอร์ แต่ eigenvector คือทิศทางพิเศษที่ \(A\) ทำได้แค่<strong>ยืด/หด/กลับด้าน</strong> (\(\lambda &gt; 1\) ยืด, \(0 &lt; \lambda &lt; 1\) หด, \(\lambda &lt; 0\) กลับด้าน, \(\lambda = 0\) ยุบเป็นศูนย์) — เช่น ถ้าเราเขียน \(\vec{x}\) ในฐานหลักที่ทำจาก eigenvector การกระทำ \(A\) จะเหลือแค่ "คูณเลขทแยง" ธรรมดา</p>
    <p><strong>ท่าหา eigenvector:</strong> \(A\vec{v} = \lambda\vec{v} \Leftrightarrow (A - \lambda I)\vec{v} = \vec{0}\) — เวกเตอร์ลักษณะเฉพาะคือผลเฉลยไม่ชัดของระบบเอกพันธุ์นี้</p>
  </div>

  <figure class="fig">
    <svg viewBox="0 0 480 300" role="img" aria-label="เวกเตอร์ v = (2,1) เมื่อถูก A คูณ อาจถูกยืด หด หรือกลับด้าน แล้วแต่ค่า lambda">
      <defs>
        <marker id="m1a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mka"/></marker>
        <marker id="m1b" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mk1"/></marker>
        <marker id="m1r" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mk2"/></marker>
      </defs>
      <path class="grid" d="M25 20V280M65 20V280M105 20V280M145 20V280M225 20V280M265 20V280M305 20V280M345 20V280M385 20V280M425 20V280M465 20V280M25 20H465M25 60H465M25 100H465M25 140H465M25 220H465M25 260H465"/>
      <path class="ax" d="M25 180H470" marker-end="url(#m1a)"/>
      <path class="ax" d="M185 285V14" marker-end="url(#m1a)"/>
      <path class="aux" d="M265 140V180M185 140H265M425 20V180M185 20H425M65 240V180M65 240H185"/>
      <path class="vec1" d="M185 180 265 140" marker-end="url(#m1b)"/>
      <path class="vec2" d="M185 180 425 20" marker-end="url(#m1r)"/>
      <path class="vec2" d="M185 180 225 160" marker-end="url(#m1r)"/>
      <path class="vec2" d="M185 180 65 240" marker-end="url(#m1r)"/>
      <text x="25" y="198" text-anchor="middle" class="mut small">−4</text>
      <text x="58" y="198" text-anchor="end" class="mut small">−3</text>
      <text x="105" y="198" text-anchor="middle" class="mut small">−2</text>
      <text x="265" y="198" text-anchor="middle" class="mut small">2</text>
      <text x="345" y="198" text-anchor="middle" class="mut small">4</text>
      <text x="425" y="198" text-anchor="middle" class="mut small">6</text>
      <text x="177" y="264" text-anchor="end" class="mut small">−2</text>
      <text x="177" y="252" text-anchor="end" class="mut small">−1.5</text>
      <text x="177" y="144" text-anchor="end" class="mut small">1</text>
      <text x="177" y="104" text-anchor="end" class="mut small">2</text>
      <text x="177" y="64" text-anchor="end" class="mut small">3</text>
      <text x="177" y="24" text-anchor="end" class="mut small">4</text>
      <text x="468" y="197" text-anchor="middle" class="mut">x₁</text>
      <text x="176" y="12" text-anchor="end" class="mut">x₂</text>
      <text x="272" y="134" class="t1">v = (2, 1)</text>
      <text x="400" y="26" text-anchor="end" class="t2">3v = (6, 3)  (λ = 3)</text>
      <text x="238" y="172" class="t2">0.5v  (λ = 0.5)</text>
      <text x="65" y="262" text-anchor="middle" class="t2">−1.5v  (λ = −1.5)</text>
    </svg>
    <figcaption>ภาพเดียว เห็นครบ 3 กรณีของนิยาม \(A\vec{v} = \lambda\vec{v}\): เมื่อ \(A\) กระทำกับ \(\vec{v} = (2, 1)^T\) ผลลัพธ์ \(\lambda = 3\) <strong>ยืด</strong>เป็น 3 เท่า, \(\lambda = 0.5\) <strong>หด</strong>เหลือครึ่งเดียว และ \(\lambda = -1.5\) <strong>กลับด้าน</strong>พร้อมยืด — ทุกกรณี \(A\vec{v}\) ยังอยู่ "เส้นเดียวกัน" กับ \(\vec{v}\) (ทิศเดิมหรือสวนทาง) นี่คือลักษณะเฉพาะที่ eigenvector ต้องมี</figcaption>
  </figure>

  <h3>2) สมการลักษณะเฉพาะ (characteristic equation)</h3>
  <div class="box box-thm">
    <div class="box-title">⭐ หัวใจของหัวข้อ</div>
    <p>\(A\) มีค่าลักษณะเฉพาะ \(\lambda\) ก็ต่อเมื่อ \((A - \lambda I)\vec{x} = \vec{0}\) มีผลเฉลยไม่ชัด ก็ต่อเมื่อ \((A - \lambda I)\) เอกฐาน ก็ต่อเมื่อ</p>
    \[ \det(A - \lambda I) = 0 \]
    <p>สำหรับ \(2\times2\) มักเขียน \(\det(A - \lambda I) = \lambda^2 - (\text{trace } A)\lambda + \det A\) และตรวจคำตอบได้: <strong>ผลบวกของค่าลักษณะเฉพาะ = trace, ผลคูณ = det</strong></p>
  </div>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 3.2.1</div>
    <p>เวกเตอร์ลักษณะเฉพาะที่สมนัยกับค่าลักษณะเฉพาะ<em>ที่ต่างกัน</em> เป็นเซตอิสระเชิงเส้นเสมอ — นี่คือเหตุผลที่เมทริกซ์ที่มีค่าลักษณะเฉพาะต่างกัน \(n\) ค่า มักแปลงเป็นทแยงมุมได้ทันที</p>
  </div>

  <h3>3) เมทริกซ์คล้าย (similar matrices)</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม</div>
    <p>\(A\) <strong>คล้าย</strong>กับ \(B\) เมื่อมี \(P\) ไม่เอกฐานที่ \(B = P^{-1}AP\) — และโดยทฤษฎีบท 3.2.2 เมทริกซ์คล้ายกันมี<strong>พหุนามลักษณะเฉพาะเหมือนกัน</strong> (จึงมีค่าลักษณะเฉพาะชุดเดียวกัน, \(\det\), trace เท่ากัน) แต่เดี๋ยวนะ — มีพหุนามเดียวกัน<em>ไม่ได้แปลว่า</em>คล้ายกันเสมอ</p>
  </div>

  <h3>4) การแปลงเป็นทแยงมุม (diagonalization)</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม</div>
    <p>\(A\) <strong>แปลงเป็นทแยงมุมได้</strong> (diagonalizable) เมื่อมี \(P\) ไม่เอกฐานและ \(D\) ทแยงมุมที่ \(A = PDP^{-1}\) (เทียบเท่ากับ \(P^{-1}AP = D\))</p>
  </div>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 3.2.3 — ทฤษฎีบทการแปลงเป็นทแยงมุม (Diagonalization Theorem)</div>
    <p>\(A\) ขนาด \(n\) แปลงเป็นทแยงมุมได้ ก็ต่อเมื่อ \(A\) มีเวกเตอร์ลักษณะเฉพาะที่<strong>อิสระเชิงเส้น \(n\) ตัว</strong></p>
    <p>โดย: <strong>หลักของ \(P\) = eigenvectors</strong> (เรียงลำดับใดก็ได้) และ <strong>สมาชิกทแยงของ \(D\) = ค่าลักษณะเฉพาะที่สมนัยกันตามลำดับ</strong> — ลำดับหลักของ \(P\) กับทแยงของ \(D\) ต้องตรงกัน!</p>
    <p>และผลด้านการคำนวณ: \(\;A^k = PD^kP^{-1}\) โดย \(D^k\) แค่ยกกำลังตัวทแยง — หัวใจของการนำไปใช้</p>
  </div>

  <figure class="fig">
    <svg viewBox="0 0 480 300" role="img" aria-label="A ยืดวงกลมหน่วยเป็นวงรีที่แกนอยู่บน eigenvector เมื่อเปลี่ยนไปมองบนกริดใหม่ วงรีจะอยู่ตรงแกน ยืด 3 และ 5 เท่า">
      <defs>
        <marker id="m5a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mka"/></marker>
        <marker id="m5b" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mk1"/></marker>
        <marker id="m5g" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mk3"/></marker>
        <clipPath id="cp5"><rect x="252" y="26" width="226" height="254"/></clipPath>
      </defs>
      <text x="125" y="16" text-anchor="middle" class="big">ฐานเดิม: A บิด + ยืด</text>
      <text x="365" y="16" text-anchor="middle" class="big">ฐานใหม่: เหลือแค่ยืด</text>
      <path class="grid" d="M13 27V273M41 27V273M69 27V273M97 27V273M153 27V273M181 27V273M209 27V273M237 27V273M13 38H237M13 66H237M13 94H237M13 122H237M13 178H237M13 206H237M13 234H237M13 262H237"/>
      <path class="ax" d="M8 150H240" marker-end="url(#m5a)"/>
      <path class="ax" d="M125 288V34" marker-end="url(#m5a)"/>
      <text x="234" y="166" text-anchor="end" class="mut small">x₁</text>
      <text x="118" y="44" text-anchor="end" class="mut small">x₂</text>
      <polyline class="thin1" points="153,150 149.2,136 139,125.8 125,122 111,125.8 100.8,136 97,150 100.8,164 111,174.2 125,178 139,174.2 149.2,164 153,150"/>
      <polyline class="vec2" points="87.4,74.9 63.1,51.8 43,35.4 28.4,26.9 20.5,26.7 19.7,34.9 26,51 39.1,73.8 58.1,101.8 81.6,133.1 108,165.6 135.7,197 162.6,225.1 186.9,248.2 207,264.6 221.6,273.1 229.5,273.3 230.3,265.1 224,249 210.9,226.2 191.9,198.2 168.4,166.9 142,134.4 114.3,103 87.4,74.9"/>
      <text x="125" y="112" text-anchor="middle" class="t1 small">วงกลมหน่วย</text>
      <g clip-path="url(#cp5)">
        <path class="grid" d="M468.6 266.1 286.4 84M443.6 216 261.4 33.9M481.1 291.2 299 109M431 191 248.9 8.8M442.4 285 327.2 54.6M402.8 245.4 287.6 15M462.2 304.8 347 74.4M383 225.6 267.8 -4.8M482 324.6 366.8 94.2M363.2 205.8 248 -24.6"/>
      </g>
      <path class="thin1" d="M415 250 315 50"/>
      <path class="thin3" d="M474 259 256 41"/>
      <polyline class="vec2" points="327.4,74.9 303.1,51.8 283,35.4 268.4,26.9 260.5,26.7 259.7,34.9 266,51 279.1,73.8 298.1,101.8 321.6,133.1 348,165.6 375.7,197 402.6,225.1 426.9,248.2 447,264.6 461.6,273.1 469.5,273.3 470.3,265.1 464,249 450.9,226.2 431.9,198.2 408.4,166.9 382,134.4 354.3,103 327.4,74.9"/>
      <path class="vec1" d="M365 150 352.5 125" marker-end="url(#m5b)"/>
      <path class="vec3" d="M365 150 345.2 130.2" marker-end="url(#m5g)"/>
      <circle cx="327.4" cy="74.9" r="3" class="pt1"/>
      <circle cx="266" cy="51" r="3" class="pt3"/>
      <text x="358" y="128" class="t1 small">u₁</text>
      <text x="338" y="142" text-anchor="end" class="t3 small">u₂</text>
      <text x="334" y="70" class="t1 small">3u₁ (λ=3)</text>
      <text x="274" y="44" class="t3 small">5u₂ (λ=5)</text>
    </svg>
    <figcaption>ภาพหัวใจของการแปลงเป็นทแยงมุม (โจทย์แบบตัวอย่าง 3.2.4 ที่ \(A = \begin{bmatrix} 7 &amp; 2\\ -4 &amp; 1 \end{bmatrix}\), \(\lambda = 3, 5\)): ซ้าย — \(A\) ไม่ได้แค่ยืดวงกลมหน่วย แต่<strong>บิด</strong>เป็นวงรีเอียง ขวา — เมื่อเปลี่ยนไปใช้กริดใหม่ที่ทำจาก eigenvector \(\vec{u}_1, \vec{u}_2\) วงรีจะ<em>ตรงแกน</em>พอดี: \(A\) ยืดตามเส้น \(\lambda = 3\) ด้วย \(3\vec{u}_1\) และตามเส้น \(\lambda = 5\) ด้วย \(5\vec{u}_2\) — นั่นคือ \(D = \operatorname{diag}(3, 5)\) ในมุมมองของ \(P\) (จุดสีแดง = ปลายแกนวงรี)</figcaption>
  </figure>
  <div class="box box-idea">
    <div class="box-title">💡 เช็กลิสต์ตัดสินว่า diagonalizable หรือไม่</div>
    <p>1. หาค่าลักษณะเฉพาะทั้งหมด (แยกพจน์จากพหุนาม)</p>
    <p>2. ถ้ามีค่าลักษณะเฉพาะต่างกัน \(n\) ค่า → <strong>diagonalizable ทันที</strong> (ทฤษฎีบท 3.2.1 + 3.2.3)</p>
    <p>3. ถ้ามีค่าซ้ำ: หา \(\dim E_\lambda\) (จำนวนตัวแปรเสรีของ \((A-\lambda I)\vec{x} = \vec{0}\)) ให้แต่ละ \(\lambda\) — <strong>ทุก</strong> \(\dim E_\lambda\) ต้องเท่ากับจำนวนครั้งที่ \(\lambda\) ซ้ำ แล้วรวมทุกเวกเตอร์ฐานได้ครบ \(n\) ตัวจึง diagonalizable</p>
  </div>
  <div class="box box-warn">
    <div class="box-title">⚠️ ข้อควรระวัง</div>
    <p>• เวกเตอร์ศูนย์<strong>ไม่ใช่</strong> eigenvector (นิยามกันไว้ \(\vec{v} \neq \vec{0}\)) — แต่ \(\lambda = 0\) เป็นค่าลักษณะเฉพาะได้ (ก็ต่อเมื่อ \(\det A = 0\))</p>
    <p>• ค่าลักษณะเฉพาะซ้ำ (เช่น \((\lambda-2)^2\)) อาจ diagonalizable ได้<em>ถ้า</em> \(E_2\) มีมิติ 2 — ดูจากจำนวนตัวแปรเสรี อย่าตัดสินจากพหุนามอย่างเดียว</p>
    <p>• เวกเตอร์ใน \(P\) คูณสเกลาร์เท่าไรก็ได้ (ยังเป็น eigenvector) จึงมี \(P, D\) คู่ตอบได้หลายแบบ แต่ \(D\) ตายตัวตามลำดับของ \(P\)</p>
  </div>
</section>

<section class="block" id="examples">
  <h2><span class="h2-dot">✏️</span> ตัวอย่างโจทย์</h2>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 1</span><span class="tag easy">ง่าย</span><span class="ex-title">ตรวจ eigenvector และหา eigenvalue</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(A = \begin{bmatrix} 2 & 1\\ 1 & 2 \end{bmatrix}\) จงตรวจว่า \(\vec{u} = \begin{bmatrix} 1\\ 1 \end{bmatrix}\) และ \(\vec{v} = \begin{bmatrix} 1\\ -1 \end{bmatrix}\) เป็นเวกเตอร์ลักษณะเฉพาะของ \(A\) หรือไม่ ถ้าเป็นจงหาค่าลักษณะเฉพาะที่สมนัย</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — คูณ \(A\) กับเวกเตอร์ แล้วดูว่าผลลัพธ์เป็นสเกลาร์เท่าของเวกเตอร์เดิมหรือไม่ (และเวกเตอร์ต้องไม่ศูนย์) กลยุทธ์ของข้อนี้: การตรวจ eigenvector คือการทำ "การคูณเมทริกซ์ธรรมดา" แค่รอบเดียว ไม่ต้องแก้สมการอะไรเลย — ถ้า \(A\vec{v}\) ออกมาเป็นตัว \(\vec{v}\) เองคูณเลขสักตัว (ทิศเดิม แค่ยืด/หด/กลับ) ก็ตอบว่าเป็น eigenvector ทันที โดยเลขที่คูณอยู่นั่นแหละคือ \(\lambda\) (แลมบ์ดา = ตัวแปรแทนค่าลักษณะเฉพาะ) ที่สมนัย</div>
      <ol class="steps">
        <li><span class="step-t">เช็ก \(\vec{u}\)</span> คูณ \(A\vec{u}\) — ช่องที่ \(i\) ของผลลัพธ์ = (แถวที่ \(i\) ของ \(A\)) · \(\vec{u}\) คือคูณตำแหน่งต่อตำแหน่งแล้วบวกสะสม: ช่องบน = \(2(1) + 1(1) = 2 + 1 = 3\), ช่องล่าง = \(1(1) + 2(1) = 1 + 2 = 3\):
        \[ A\vec{u} = \begin{bmatrix} 2 & 1\\ 1 & 2 \end{bmatrix}\begin{bmatrix} 1\\ 1 \end{bmatrix} = \begin{bmatrix} 3\\ 3 \end{bmatrix} = 3\begin{bmatrix} 1\\ 1 \end{bmatrix} = 3\vec{u} \]
        ผลลัพธ์ \(\begin{bmatrix} 3\\ 3 \end{bmatrix}\) ชี้ไปทิศเดียวกับ \(\vec{u} = \begin{bmatrix} 1\\ 1 \end{bmatrix}\) พอดี (ทุกช่องโดนคูณด้วย 3 เท่าตัว) → เป็นสเกลาร์เท่า → \(\vec{u}\) เป็น eigenvector ที่สมนัยกับ \(\lambda = 3\) (<em>เพราะ</em>ตรงนิยาม \(A\vec{v} = \lambda\vec{v}\) เป๊ะ โดย \(\vec{u} \neq \vec{0}\))</li>
        <li><span class="step-t">เช็ก \(\vec{v}\)</span> คูณแบบเดียวกัน: ช่องบน = \(2(1) + 1(-1) = 2 - 1 = 1\), ช่องล่าง = \(1(1) + 2(-1) = 1 - 2 = -1\):
        \[ A\vec{v} = \begin{bmatrix} 2 & 1\\ 1 & 2 \end{bmatrix}\begin{bmatrix} 1\\ -1 \end{bmatrix} = \begin{bmatrix} 1\\ -1 \end{bmatrix} = 1\cdot\vec{v} \]
        ผลลัพธ์เท่ากับ \(\vec{v}\) ตัวเดิมทุกช่อง (เท่ากับโดนคูณ 1) → \(\vec{v}\) เป็น eigenvector ที่สมนัยกับ \(\lambda = 1\) (ค่าลักษณะเฉพาะเป็นบวกไม่จำเป็น — เป็น 1 ก็ได้ และติดลบก็ได้เช่นกัน)</li>
        <li><span class="step-t">สรุปและตรวจด้วย trace/det</span> ทั้งสองเวกเตอร์เป็น eigenvector ของ \(A\) โดย \(\lambda = 3\) และ \(\lambda = 1\) ตามลำดับ — ตรวจซ้ำด้วยคุณสมบัติ: trace (ผลบวกของเลขบนเส้นทแยงมุมหลัก) \(= 2 + 2 = 4 = 3+1\) ✓ และ det \(= 2\cdot2 - 1\cdot1 = 4 - 1 = 3 = 3\times1\) ✓ (<em>เพราะ</em>ผลบวกค่าลักษณะเฉพาะต้องเท่ากับ trace และผลคูณต้องเท่ากับ det เสมอ) — สรุปคำตอบ: \(\vec{u}\) เป็น eigenvector กับ \(\lambda = 3\), \(\vec{v}\) เป็น eigenvector กับ \(\lambda = 1\)</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2</span><span class="tag easy">ง่าย</span><span class="ex-title">หาค่าลักษณะเฉพาะทั้งหมดของ \(2\times2\)</span></div>
    <div class="ex-body">
      <div class="ex-q">จงหาค่าลักษณะเฉพาะทั้งหมดของ \(A = \begin{bmatrix} 1 & 2\\ 2 & 1 \end{bmatrix}\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — แก้สมการลักษณะเฉพาะ \(\det(A - \lambda I_2) = 0\) กลยุทธ์ของข้อนี้: สมการ \(\det(A - \lambda I) = 0\) คือเงื่อนไขที่ทำให้ \((A - \lambda I)\vec{x} = \vec{0}\) มีผลเฉลยไม่ชัด (เพราะเมทริกซ์เอกฐาน) — สำหรับ \(2\times2\) ขั้นตอนจึงคาดเดาได้: เขียน \(A - \lambda I\) (ลบ \(\lambda\) ลงทแยง), คิด det (จะออกมาเป็นพหุนามดีกรี 2 ของ \(\lambda\)), แยกตัวประกอบ, แล้วตั้งแต่ละตัวประกอบเป็นศูนย์เพื่ออ่านค่า \(\lambda\)</div>
      <ol class="steps">
        <li><span class="step-t">เขียน \(A - \lambda I\) และหา det</span> \(I_2\) คือเมทริกซ์เอกลักษณ์ \(\begin{bmatrix} 1 & 0\\ 0 & 1 \end{bmatrix}\) การลบ \(\lambda I\) จึงไปลบ \(\lambda\) ที่<em>ช่องทแยงมุมหลัก</em>เท่านั้น (ช่องนอกทแยงคงเดิม: \(2, 2\)) แล้วคิด det สูตรทแยงลงลบทแยงขึ้น: \((1-\lambda)(1-\lambda) - (2)(2) = (1-\lambda)^2 - 4\) — กระจาย \((1-\lambda)^2 = 1 - 2\lambda + \lambda^2\) ได้ \(1 - 2\lambda + \lambda^2 - 4 = \lambda^2 - 2\lambda - 3\):
        \[ \det(A - \lambda I_2) = \begin{vmatrix} 1-\lambda & 2\\ 2 & 1-\lambda \end{vmatrix} = (1-\lambda)^2 - 4 = \lambda^2 - 2\lambda - 3 \]</li>
        <li><span class="step-t">แก้สมการ</span> หาสองจำนวนที่<em>คูณกันได้ \(-3\)</em> และ<em>บวกกันได้ \(-2\)</em> (สัมประสิทธิ์ของพหุนาม) — คือ \(-3\) กับ \(1\) → แยกตัวประกอบได้ \((\lambda - 3)(\lambda + 1)\) (ตรวจ: \((\lambda-3)(\lambda+1) = \lambda^2 + \lambda - 3\lambda - 3 = \lambda^2 - 2\lambda - 3\) ✓) หรือจะทดลองแทนก็ได้: ลอง \(\lambda = 3\) จากตัวประกอบของค่าคงตัว: \(9 - 6 - 3 = 0\) ✓ และ \(\lambda = -1\): \(1 + 2 - 3 = 0\) ✓ — เมื่อผลคูณเป็นศูนย์ ตัวใดตัวหนึ่งต้องเป็นศูนย์:
        \[ \lambda^2 - 2\lambda - 3 = (\lambda - 3)(\lambda + 1) = 0 \;\Longrightarrow\; \lambda = 3, \; -1 \]</li>
        <li><span class="step-t">ตรวจด้วย trace/det และสรุป</span> trace (ผลบวกเลขบนทแยงหลัก) \(= 1 + 1 = 2 = 3 + (-1)\) ✓ det \(= 1\cdot1 - 2\cdot2 = 1 - 4 = -3 = 3 \times (-1)\) ✓ ทั้งผลบวกและผลคูณตรง → การแยกตัวประกอบไม่พลาด — สรุปคำตอบ: ค่าลักษณะเฉพาะทั้งหมดของ \(A\) คือ \(\lambda = 3\) และ \(\lambda = -1\)</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3</span><span class="tag hard">ยาก</span><span class="ex-title">3×3 ค่าลักษณะเฉพาะซ้ำ + ตัดสินว่า diagonalizable ได้หรือไม่ (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">กำหนด \(A = \begin{bmatrix} 3 & 1 & -1\\ 2 & 2 & -1\\ 2 & 2 & 0 \end{bmatrix}\) จงหาค่าลักษณะเฉพาะ ปริภูมิลักษณะเฉพาะทุกค่า และตัดสินว่า \(A\) แปลงเป็นทแยงมุมได้หรือไม่</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — หา char. poly → แยกตัวประกอบ → หา \(\dim E_\lambda\) แต่ละค่า → เทียบกับจำนวนครั้งที่ซ้ำ กลยุทธ์ของข้อนี้: ค่าลักษณะเฉพาะที่<em>ไม่ซ้ำ</em>รับประกันเวกเตอร์อิสระได้คนละ 1 ตัวเสมอ (ทฤษฎีบท 3.2.1) แต่ค่าที่<em>ซ้ำ</em>ต้องเปิดตรวจของจริง — ต้องไปแก้ระบบ \((A - \lambda I)\vec{x} = \vec{0}\) แล้วนับว่ามีตัวแปรเสรีกี่ตัว ถ้าค่าที่ซ้ำ 2 ครั้งให้เวกเตอร์อิสระได้แค่ 1 ตัว ก็รวมกันไม่ครบ 3 ตัว แปลว่าแปลงเป็นทแยงมุมไม่ได้</div>
      <ol class="steps">
        <li><span class="step-t">หาพหุนามลักษณะเฉพาะ</span> (กระจายโคแฟกเตอร์ตามแถวที่ 1 — แต่ละพจน์ = เลขช่องนั้น × det ของเมทริกซ์ย่อยที่เหลือ เครื่องหมายสลับ + − +) เมทริกซ์ย่อยสามตัวคือ \(\begin{bmatrix} 2-\lambda & -1\\ 2 & -\lambda \end{bmatrix}\), \(\begin{bmatrix} 2 & -1\\ 2 & -\lambda \end{bmatrix}\), \(\begin{bmatrix} 2 & 2-\lambda\\ 2 & 2 \end{bmatrix}\) โดย det ตัวแรก \(= (2-\lambda)(-\lambda) - (-1)(2) = \lambda^2 - 2\lambda + 2\), det ตัวที่สอง \(= 2(-\lambda) - (-1)(2) = -2\lambda + 2\), det ตัวที่สาม \(= 2\cdot2 - (2-\lambda)\cdot2 = 4 - 4 + 2\lambda = 2\lambda\) รวมกระจายแล้วรวบพจน์ (เช่น พจน์ \(\lambda^3\) มาจาก \((3-\lambda)\cdot\lambda^2 = 3\lambda^2 - \lambda^3\)) จะได้
        \[ \det(A - \lambda I_3) = \begin{vmatrix} 3-\lambda & 1 & -1\\ 2 & 2-\lambda & -1\\ 2 & 2 & -\lambda \end{vmatrix} = -\lambda^3 + 5\lambda^2 - 8\lambda + 4 \]</li>
        <li><span class="step-t">แยกตัวประกอบ</span> วิธีมาตรฐานคือ "ทดลองแทน \(\lambda\) = ตัวหารของค่าคงตัว" (ค่าคงตัวคือ 4 ตัวหารคือ \(\pm1, \pm2, \pm4\)) — ลอง \(\lambda = 1\): \(-(1)^3 + 5(1)^2 - 8(1) + 4 = -1 + 5 - 8 + 4 = 0\) ✓ เจอราก! หารยาวด้วย \((\lambda - 1)\) เหลือ \(-\lambda^2 + 4\lambda - 4 = -(\lambda^2 - 4\lambda + 4) = -(\lambda - 2)^2\) (สี่เหลี่ยมสมบูรณ์: \((\lambda-2)^2 = \lambda^2 - 2\cdot2\lambda + 4\)) จึงแยกได้ครบ (จะทดลอง \(\lambda = 2\) ซ้ำก็ได้: \(-8 + 20 - 16 + 4 = 0\) ✓)
        \[ -\lambda^3 + 5\lambda^2 - 8\lambda + 4 = -(\lambda - 1)(\lambda - 2)^2 = 0 \;\Longrightarrow\; \lambda = 1, \; 2, \; 2 \]
        \(\lambda = 2\) ซ้ำ 2 ครั้ง — จุดนี้แหละที่ต้องเฝ้าระวังในขั้นถัดไป</li>
        <li><span class="step-t">\(E_1 = \operatorname{Nul}(A - I_3)\)</span> ลบ \(I_3\) (เลข 1 บนทแยง) ออกจากทแยงของ \(A\): ช่อง \(3 \to 3 - 1 = 2\), ช่อง \(2 \to 2 - 1 = 1\), ช่อง \(0 \to 0 - 1 = -1\) ส่วนช่องนอกทแยงคงเดิม แล้วลดรูป: \(R_2 - R_1\) ทำทุกช่อง (\(2 - 2 = 0\), \(1 - 1 = 0\), \(-1 - (-1) = 0\)) ให้แถวศูนย์ (เขียนเป็นภาพขั้นบันไดแล้วแถวศูนย์ถูกเลื่อนไปนั่งล่างสุด), \(R_3 - R_1\) ทำทุกช่อง (\(2 - 2 = 0\), \(2 - 1 = 1\), \(-1 - (-1) = -1 + 1 = 0\)) ได้ \((0, 1, 0)\) หลังจากนั้นหารแถวบนด้วย 2 (\(2 \div 2 = 1\), \(1 \div 2 = \tfrac{1}{2}\), \(-1 \div 2 = -\tfrac{1}{2}\)) แล้วใช้ \(R_1 - \tfrac{1}{2}R_2\) เคลียร์ช่องกลาง (\(\tfrac{1}{2} - \tfrac{1}{2}(1) = 0\)) จนได้ RREF:
        \[ A - I_3 = \begin{bmatrix} 2 & 1 & -1\\ 2 & 1 & -1\\ 2 & 2 & -1 \end{bmatrix} \xrightarrow{\substack{R_2 - R_1\\ R_3 - R_1}} \begin{bmatrix} 2 & 1 & -1\\ 0 & 1 & 0\\ 0 & 1 & 0 \end{bmatrix} \xrightarrow{\,R_3 - R_2\,} \begin{bmatrix} 1 & \tfrac{1}{2} & -\tfrac{1}{2}\\ 0 & 1 & 0\\ 0 & 0 & 0 \end{bmatrix} \xrightarrow{\,R_1 - \tfrac{1}{2}R_2\,} \begin{bmatrix} 1 & 0 & -\tfrac{1}{2}\\ 0 & 1 & 0\\ 0 & 0 & 0 \end{bmatrix} \]
        อ่านระบบ: \(x_1 - \tfrac{1}{2}x_3 = 0 \Rightarrow x_1 = \tfrac{1}{2}x_3\), \(x_2 = 0\) ส่วน \(x_3\) เสรี → \(\vec{x} = x_3(\tfrac12, 0, 1)^T\) — เลือก \(x_3 = 2\) (ตัวคูณที่ทำให้เศษส่วน \(\tfrac12\cdot2 = 1\) หายไป) → \(E_1 = \operatorname{Span}\{(1, 0, 2)^T\}\), \(\dim E_1 = 1\) ✓ (ตรงจำนวนที่ไม่ซ้ำ — ค่าไม่ซ้ำได้เวกเตอร์อิสระอย่างน้อย 1 เสมอ)</li>
        <li><span class="step-t">\(E_2 = \operatorname{Nul}(A - 2I_3)\)</span> ลบ 2 ออกจากทแยง: \(3 \to 1\), \(2 \to 0\), \(0 \to -2\) — ลดรูป: \(R_2 - 2R_1\) ทำทุกช่อง (\(2 - 2(1) = 0\), \(0 - 2(1) = -2\), \(-1 - 2(-1) = -1 + 2 = 1\)) ได้ \((0, -2, 1)\); \(R_3 - 2R_1\) ก็ทำทุกช่อง (\(2 - 2 = 0\), \(2 - 2 = 0\), \(-2 + 2 = 0\)) ได้แถวศูนย์; จากนั้นคูณ \(R_2\) ด้วย \(-\tfrac{1}{2}\) (\(-2\cdot(-\tfrac12) = 1\), \(1\cdot(-\tfrac12) = -\tfrac{1}{2}\)) และใช้ \(R_1 - R_2\) เคลียร์ช่องกลางของแถวบน (\(1 - 0 = 1\), \(1 - 1 = 0\), \(-1 - (-\tfrac{1}{2}) = -\tfrac{1}{2}\)):
        \[ A - 2I_3 = \begin{bmatrix} 1 & 1 & -1\\ 2 & 0 & -1\\ 2 & 2 & -2 \end{bmatrix} \xrightarrow{\substack{R_2 - 2R_1\\ R_3 - 2R_1}} \begin{bmatrix} 1 & 1 & -1\\ 0 & -2 & 1\\ 0 & 0 & 0 \end{bmatrix} \xrightarrow{\,-\tfrac{1}{2}R_2\,} \begin{bmatrix} 1 & 0 & -\tfrac{1}{2}\\ 0 & 1 & -\tfrac{1}{2}\\ 0 & 0 & 0 \end{bmatrix} \]
        อ่านระบบ: \(x_1 = \tfrac{1}{2}x_3,\; x_2 = \tfrac{1}{2}x_3\), \(x_3\) เสรี → เลือก \(x_3 = 2\) กำจัดเศษส่วน → \(E_2 = \operatorname{Span}\{(1, 1, 2)^T\}\), \(\dim E_2 = 1\) — <strong>แต่ \(\lambda = 2\) ซ้ำ 2 ครั้ง!</strong> (ที่ต้องการคือ 2 เวกเตอร์อิสระ แต่ได้มาแค่ 1)</li>
        <li><span class="step-t">ตัดสิน</span> รวมเวกเตอร์ลักษณะเฉพาะอิสระได้เพียง \(1 + 1 = 2 &lt; 3\) ตัว → โดยทฤษฎีบท 3.2.3 \(A\) <strong>ไม่สามารถแปลงเป็นทแยงมุมได้</strong> — <em>เพราะ</em>การสร้าง \(P\) ต้องใช้เวกเตอร์อิสระครบ \(n = 3\) ตัว (ให้ครบทุกทิศของ \(\mathbb{R}^3\)) แต่ค่า \(\lambda = 2\) ที่ซ้ำ 2 ครั้งให้ \(\dim E_2 = 1\) น้อยกว่าจำนวนครั้งที่ซ้ำ จึงเก็บเวกเตอร์มาได้ไม่ครบเสมอ — สรุปคำตอบ: ค่าลักษณะเฉพาะคือ \(1, 2, 2\), \(E_1 = \operatorname{Span}\{(1,0,2)^T\}\), \(E_2 = \operatorname{Span}\{(1,1,2)^T\}\) และ \(A\) แปลงเป็นทแยงมุมไม่ได้</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> \(A(1,0,2)^T = (3+0-2,\; 2+0-2,\; 2+0+0)^T = (1, 0, 2)^T = 1\cdot(1,0,2)\) ✓ (แถวบน: \(3(1) + 1(0) + (-1)(2) = 1\) ฯลฯ) และ \(A(1,1,2)^T = (3+1-2,\; 2+2-2,\; 2+2+0)^T = (2, 2, 4)^T = 2(1,1,2)^T\) ✓ — ทั้งสองเวกเตอร์ผ่านการทดสอบ \(A\vec{v} = \lambda\vec{v}\) จริง ยืนยันว่าฐานของ \(E_1, E_2\) ที่รายงานถูกต้อง</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 4</span><span class="tag hard">ยาก</span><span class="ex-title">แปลงเป็นทแยงมุม + หา \(A^k\) (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">จงแปลง \(A = \begin{bmatrix} 7 & 2\\ -4 & 1 \end{bmatrix}\) เป็นเมทริกซ์ทแยงมุม นั่นคือหา \(P, D\) ที่ \(A = PDP^{-1}\) และหาสูตร \(A^k\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — λ จาก char. equation → eigenvector ทีละค่า → เรียงเป็นหลักของ \(P\), ค่า λ เรียงตามลำดับเดียวกันใน \(D\) → \(A^k = PD^kP^{-1}\) กลยุทธ์ของข้อนี้: นี่คือโจทย์ "ครบเครื่อง" ของหัวข้อ — หาค่าลักษณะเฉพาะก่อน (สองค่าต่างกัน = ผ่านเงื่อนไข diagonalizable ทันที) แล้วแก้ระบบเอกพันธุ์หาเวกเตอร์ทีละค่า ประกอบ \(P, D\) ให้ลำดับหลักกับทแยง<em>จับคู่ตรงกัน</em> แล้วปิดท้ายด้วยการยกกำลังผ่าน \(D^k\) ซึ่งเร็วกว่าคูณ \(A\) ซ้ำ ๆ มาก</div>
      <ol class="steps">
        <li><span class="step-t">หาค่าลักษณะเฉพาะ</span> ลบ \(\lambda\) ลงทแยงแล้วคิด det (ทแยงลง − ทแยงขึ้น): \((7-\lambda)(1-\lambda) - (2)(-4) = 7 - 7\lambda - \lambda + \lambda^2 + 8 = \lambda^2 - 8\lambda + 15\) — แยกตัวประกอบ: หาสองจำนวนที่คูณกันได้ 15 และบวกกันได้ \(-8\) → คือ \(-3\) กับ \(-5\) (ทดลองแทน \(\lambda = 3\): \(9 - 24 + 15 = 0\) ✓):
        \[ \det(A - \lambda I_2) = \begin{vmatrix} 7-\lambda & 2\\ -4 & 1-\lambda \end{vmatrix} = \lambda^2 - 8\lambda + 15 = (\lambda - 3)(\lambda - 5) = 0 \;\Longrightarrow\; \lambda = 3, 5 \]
        ค่าลักษณะเฉพาะต่างกัน 2 ค่า → diagonalizable ทันที (<em>เพราะ</em>ค่าที่ต่างกันให้ eigenvector อิสระคนละตัวเสมอ ตามทฤษฎีบท 3.2.1 — ครบ 2 ตัวพอดีกับ \(n = 2\))</li>
        <li><span class="step-t">หา \(E_3 = \operatorname{Nul}(A - 3I_2)\)</span> ลบ 3 ออกจากทแยง: \(7 \to 4\), \(1 \to -2\) (ช่อง \(-4, 2\) คงเดิม) — ลดรูป: หารแถวบนด้วย 4 (\(4 \div 4 = 1\), \(2 \div 4 = \tfrac{1}{2}\)) แล้วใช้ \(R_2 + 4R_1\) (\(-4 + 4(1) = 0\), \(-2 + 4(\tfrac{1}{2}) = -2 + 2 = 0\)) ได้แถวศูนย์:
        \[ A - 3I_2 = \begin{bmatrix} 4 & 2\\ -4 & -2 \end{bmatrix} \sim \begin{bmatrix} 1 & \tfrac{1}{2}\\ 0 & 0 \end{bmatrix} \;\Longrightarrow\; x_1 = -\tfrac{1}{2}x_2 \;\Longrightarrow\; \vec{v}_1 = \begin{bmatrix} -1\\ 2 \end{bmatrix} \]
        (จาก \(x_1 + \tfrac{1}{2}x_2 = 0\): เลือก \(x_2 = 2\) เพื่อกำจัดเศษส่วน → \(x_1 = -\tfrac{1}{2}(2) = -1\))</li>
        <li><span class="step-t">หา \(E_5 = \operatorname{Nul}(A - 5I_2)\)</span> ลบ 5 ออกจากทแยง: \(7 \to 2\), \(1 \to -4\) — หารแถวบนด้วย 2 (\(2 \div 2 = 1\), \(2 \div 2 = 1\)) แล้ว \(R_2 + 4R_1\) (\(-4 + 4 = 0\), \(-4 + 4 = 0\)) ได้แถวศูนย์:
        \[ A - 5I_2 = \begin{bmatrix} 2 & 2\\ -4 & -4 \end{bmatrix} \sim \begin{bmatrix} 1 & 1\\ 0 & 0 \end{bmatrix} \;\Longrightarrow\; x_1 = -x_2 \;\Longrightarrow\; \vec{v}_2 = \begin{bmatrix} -1\\ 1 \end{bmatrix} \]
        (เลือก \(x_2 = 1\) → \(x_1 = -1\))</li>
        <li><span class="step-t">เรียงเป็น \(P\) และ \(D\) (ลำดับต้องตรงกัน!)</span> เอา \(\vec{v}_1\) เป็นหลักแรกของ \(P\) → ทแยงช่องแรกของ \(D\) ต้องเป็น 3 (ค่าที่สมนัยกับ \(\vec{v}_1\)) และ \(\vec{v}_2\) เป็นหลักสอง → ทแยงช่องที่สองเป็น 5 (<em>เพราะ</em>หลักที่ \(j\) ของ \(P\) กับทแยงช่องที่ \(j\) ของ \(D\) ต้องอ้างถึง eigenvector–eigenvalue คู่เดียวกัน) ส่วน \(P^{-1}\) ใช้สูตร \(2\times2\): det \(= (-1)(1) - (-1)(2) = -1 + 2 = 1\) สลับทแยง เปลี่ยนเครื่องหมายตัวนอก หารด้วย det:
        \[ P = \begin{bmatrix} -1 & -1\\ 2 & 1 \end{bmatrix}, \qquad D = \begin{bmatrix} 3 & 0\\ 0 & 5 \end{bmatrix} \]
        โดย \(P^{-1} = \frac{1}{(-1)(1) - (-1)(2)}\begin{bmatrix} 1 & 1\\ -2 & -1 \end{bmatrix} = \begin{bmatrix} 1 & 1\\ -2 & -1 \end{bmatrix}\) (det \(P = 1\))</li>
        <li><span class="step-t">สูตร \(A^k\)</span> เหตุผลที่ \(A^k = PD^kP^{-1}\): \(A^2 = (PDP^{-1})(PDP^{-1}) = PD(P^{-1}P)DP^{-1} = PD^2P^{-1}\) เพราะ \(P^{-1}P = I\) ตรงกลางหักล้างกัน — ยกกำลัง \(k\) ครั้งก็ได้ \(D^k\) ซึ่งแค่<em>ยกกำลังตัวเลขบนทแยง</em> (\(3^k, 5^k\)) ง่ายกว่าคูณ \(A\) ซ้ำกัน \(k\) รอบมาก:
        \[ A^k = PD^kP^{-1} = \begin{bmatrix} -1 & -1\\ 2 & 1 \end{bmatrix}\begin{bmatrix} 3^k & 0\\ 0 & 5^k \end{bmatrix}\begin{bmatrix} 1 & 1\\ -2 & -1 \end{bmatrix} = \begin{bmatrix} 2\cdot 5^k - 3^k & 5^k - 3^k\\ 2(3^k - 5^k) & 2\cdot 3^k - 5^k \end{bmatrix} \]
        ลองแทน \(k = 2\): \(3^2 = 9, 5^2 = 25\) → ช่องซ้ายบน \(2(25) - 9 = 50 - 9 = 41\), ช่องขวาบน \(25 - 9 = 16\), ช่องซ้ายล่าง \(2(9 - 25) = 2(-16) = -32\), ช่องขวาล่าง \(2(9) - 25 = 18 - 25 = -7\) คือ \(A^2 = \begin{bmatrix} 50-9 & 25-9\\ 18-50 & 18-25 \end{bmatrix} = \begin{bmatrix} 41 & 16\\ -32 & -7 \end{bmatrix}\)</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> คูณ \(A^2\) ตรง ๆ (ช่องซ้ายบน = \((7, 2)\cdot(7, -4) = 49 - 8 = 41\), ช่องขวาบน = \((7, 2)\cdot(2, 1) = 14 + 2 = 16\) ฯลฯ): \(A^2 = \begin{bmatrix} 7 & 2\\ -4 & 1 \end{bmatrix}\begin{bmatrix} 7 & 2\\ -4 & 1 \end{bmatrix} = \begin{bmatrix} 49-8 & 14+2\\ -28-4 & -8+1 \end{bmatrix} = \begin{bmatrix} 41 & 16\\ -32 & -7 \end{bmatrix}\) ✓ ตรงกัน! — สรุปคำตอบ: \(A = PDP^{-1}\) เมื่อ \(P = \begin{bmatrix} -1 & -1\\ 2 & 1 \end{bmatrix}\), \(D = \operatorname{diag}(3, 5)\) และ \(A^k = \begin{bmatrix} 2\cdot 5^k - 3^k & 5^k - 3^k\\ 2(3^k - 5^k) & 2\cdot 3^k - 5^k \end{bmatrix}\)</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5</span><span class="tag hard">ยาก</span><span class="ex-title">2×2 ค่าลักษณะเฉพาะซ้ำที่แปลงไม่ได้</span></div>
    <div class="ex-body">
      <div class="ex-q">จงแสดงว่า \(A = \begin{bmatrix} 3 & 1\\ 0 & 3 \end{bmatrix}\) ไม่สามารถแปลงเป็นเมทริกซ์ทแยงมุมได้</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — ค่าลักษณะเฉพาะซ้ำ → เช็กว่า \(\dim E_\lambda\) พอหรือไม่ กลยุทธ์ของข้อนี้: เมื่อพหุนามลักษณะเฉพาะให้ค่าเดียวซ้ำ ๆ อย่าเพิ่งตัดสินว่า "ซ้ำ = ไม่ได้" — ให้ไปแก้ \((A - \lambda I)\vec{x} = \vec{0}\) จริง ๆ แล้วนับเวกเตอร์อิสระ: ถ้าได้ครบ \(n = 2\) ตัวก็ยัง diagonalizable ได้ แต่ถ้าได้แค่ 1 ตัว (อย่างข้อนี้) ก็จบ ไม่มีทางสร้าง \(P\) ได้</div>
      <ol class="steps">
        <li><span class="step-t">หาค่าลักษณะเฉพาะ</span> \(A\) เป็นเมทริกซ์สามเหลี่ยม (ใต้/เหนือทแยงเป็นศูนย์หมด) → det ของเมทริกซ์สามเหลี่ยมคือผลคูณของเลขบนทแยง ดังนั้น \(\det(A - \lambda I_2) = (3-\lambda)(3-\lambda) = (3-\lambda)^2\) → ตั้งเป็นศูนย์ได้ \(\lambda = 3\) ซ้ำ 2 ครั้ง (ค่าลักษณะเฉพาะของเมทริกซ์สามเหลี่ยม = เลขบนทแยงหลักเสมอ ไม่ต้องคำนวณยาว)</li>
        <li><span class="step-t">หา \(E_3\)</span> ลบ 3 ออกจากทแยง: \(3 \to 0\) ทั้งสองช่อง (ช่อง \(1\) นอกทแยงคงเดิม) — แถวบนบอก \(0\cdot x_1 + 1\cdot x_2 = 0\) คือ \(x_2 = 0\) เท่านั้น ส่วน \(x_1\) ไม่ถูกผูกเงื่อนไข (เสรี):
        \[ A - 3I_2 = \begin{bmatrix} 0 & 1\\ 0 & 0 \end{bmatrix} \;\Longrightarrow\; x_2 = 0,\; x_1 \text{ เสรี} \;\Longrightarrow\; E_3 = \operatorname{Span}\{(1, 0)^T\}, \; \dim E_3 = 1 \]
        (เลือก \(x_1 = 1\) เป็นเวกเตอร์ฐาน \((1, 0)^T\) — พื้นที่ผลเฉลยจึงเป็นเส้นตรงเดียวบนแกน \(x_1\))</li>
        <li><span class="step-t">ตัดสิน</span> ได้เวกเตอร์ลักษณะเฉพาะอิสระเพียง 1 ตัว &lt; 2 → ไม่มีเวกเตอร์พอสร้าง \(P\) ไม่เอกฐาน → <strong>\(A\) แปลงเป็นทแยงมุมไม่ได้</strong> — <em>เพราะ</em>เงื่อนไขของทฤษฎีบท 3.2.3 ต้องการ eigenvector อิสระครบ \(n = 2\) ตัว แต่ที่นี่ \(\lambda = 3\) ซ้ำ 2 ครั้งแทนที่จะให้ \(\dim E_3 = 2\) กลับให้แค่ \(\dim E_3 = 1\) เก็บเวกเตอร์ไม่ครบ ตัดสิ้นเชิง</li>
        <li><span class="step-t">ต่อยอด (ความเข้าใจ)</span> \(2\times2\) ที่มี \(\lambda\) ซ้ำจะ diagonalizable ได้<em>ก็ต่อเมื่อ</em> \(A = \lambda I\) เท่านั้น — เหตุผล: ถ้ามีตัวนอกทแยงอย่างน้อย 1 ตัว (เช่น เลข 1 ช่องขวาบนของข้อนี้) ระบบ \((A - \lambda I)\vec{x} = \vec{0}\) จะบังคับ \(x_2 = 0\) ทำให้ \(E_\lambda\) เหลือมิติ 1 เสมอ ส่วนถ้า \(A = \lambda I\) ล้วน ๆ ทุกเวกเตอร์ที่ไม่ศูนย์จะเป็น eigenvector จึงได้ครบ 2 ตัวสบาย</li>
      </ol>
      <figure class="fig">
        <svg viewBox="0 0 520 340" role="img" aria-label="การเลื่อนปลอม ๆ (shear) ของ A ที่ทุกทิศถูกบิด นอกจากแกน x">
          <defs>
            <marker id="m6a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mka"/></marker>
            <marker id="m6b" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mk1"/></marker>
            <marker id="m6r" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mk2"/></marker>
          </defs>
          <path class="grid" d="M51 51V303M93 51V303M135 51V303M219 51V303M261 51V303M303 51V303M345 51V303M387 51V303M429 51V303M51 51H513M51 93H513M51 135H513M51 219H513M51 261H513M51 303H513"/>
          <path class="ax" d="M45 177H508" marker-end="url(#m6a)"/>
          <path class="ax" d="M177 315V36" marker-end="url(#m6a)"/>
          <text x="93" y="195" text-anchor="middle" class="mut small">−2</text>
          <text x="219" y="195" text-anchor="middle" class="mut small">1</text>
          <text x="261" y="195" text-anchor="middle" class="mut small">2</text>
          <text x="345" y="195" text-anchor="middle" class="mut small">4</text>
          <text x="429" y="195" text-anchor="middle" class="mut small">6</text>
          <text x="169" y="55" text-anchor="end" class="mut small">3</text>
          <text x="169" y="97" text-anchor="end" class="mut small">2</text>
          <text x="169" y="265" text-anchor="end" class="mut small">−2</text>
          <text x="500" y="195" text-anchor="middle" class="mut">x₁</text>
          <text x="168" y="30" text-anchor="end" class="mut">x₂</text>
          <polyline class="thin1" points="219,177 217.6,166.1 213.4,156 206.7,147.3 198,140.6 187.9,136.4 177,135 166.1,136.4 156,140.6 147.3,147.3 140.6,156 136.4,166.1 135,177 136.4,187.9 140.6,198 147.3,206.7 156,213.4 166.1,217.6 177,219 187.9,217.6 198,213.4 206.7,206.7 213.4,198 217.6,187.9 219,177"/>
          <polyline class="vec2" points="303,177 309.6,144.4 307.1,114 295.8,87.9 276.4,67.9 250.2,55.3 219,51 185,55.3 150.4,67.9 117.6,87.9 88.9,114 66.2,144.4 51,177 44.4,209.6 46.9,240 58.2,266.1 77.6,286.1 103.8,298.7 135,303 169,298.7 203.6,286.1 236.4,266.1 265.1,240 287.8,209.6 303,177"/>
          <path class="aux" d="M219 51V177M177 51H219"/>
          <path class="vec1" d="M177 177 219 177" marker-end="url(#m6b)"/>
          <path class="vec1" d="M177 177 177 135" marker-end="url(#m6b)"/>
          <path class="vec1" d="M177 177 207 207" marker-end="url(#m6b)"/>
          <path class="vec2" d="M177 177 303 177" marker-end="url(#m6r)"/>
          <path class="vec2" d="M177 177 219 51" marker-end="url(#m6r)"/>
          <path class="vec2" d="M177 177 236.4 266.1" marker-end="url(#m6r)"/>
          <text x="226" y="168" class="t1">e₁</text>
          <text x="352" y="168" class="t2">Ae₁ = 3e₁</text>
          <text x="185" y="126" class="t1">e₂</text>
          <text x="226" y="46" class="t2">Ae₂ = (1, 3)</text>
          <text x="166" y="216" text-anchor="end" class="t1">v</text>
          <text x="245" y="272" class="t2">Av = (1.41, −2.12)</text>
          <text x="352" y="96" class="mut small">คงทิศอย่างเดียว: E₃ = แกน x₁</text>
          <text x="40" y="328" class="t1 small">วงกลมหน่วย</text>
          <text x="400" y="290" text-anchor="middle" class="t2 small">ภาพ A(วงกลมหน่วย)</text>
        </svg>
        <figcaption>\(A = \begin{bmatrix} 3 &amp; 1\\ 0 &amp; 3 \end{bmatrix}\) ทำกับทุกเวกเตอร์บนวงกลมหน่วย (สีน้ำเงิน) ได้วงรี (สีแดง) — เวกเตอร์เกือบทุกทิศถูก<em>บิด</em>ไปทิศใหม่ (เช่น \(\vec{e}_2 \to (1, 3)^T\)) มีเพียงแกน \(x_1\) เส้นเดียวที่คงทิศ (\(E_3 = \operatorname{Span}\{(1,0)^T\}\), \(\dim = 1\)) — ทิศที่ "ไม่ถูกบิด" มีไม่พอ 2 ทิศ จึงไม่มีฐานของ eigenvector ครบ และ \(A\) แปลงเป็นทแยงมุมไม่ได้ ตรงกับเฉลยข้างบน</figcaption>
      </figure>
    </div>
  </article>
</section>

  <section class="block" id="textbook">
    <h2><span class="h2-dot">📚</span> ตัวอย่างจากตำรา (พีชคณิต.pdf)</h2>
    <p class="page-sub">โจทย์ทุกข้อคัดมาตรงจากตำราประกอบการสอน โดยเรียงจากง่ายไปยาก — ใต้โจทย์แต่ละข้อมี "อธิบายโจทย์ง่าย ๆ" ช่วยให้เห็นว่าโจทย์ถามอะไรก่อนลงมือทำ</p>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3.2.1</span><span class="tag book">จากตำรา</span><span class="tag easy">ง่าย</span><span class="ex-title">ตรวจด้วยนิยาม: \(\lambda\) เป็นค่าลักษณะเฉพาะ / \(\vec{v}\) เป็นเวกเตอร์ลักษณะเฉพาะ</span></div>
      <div class="ex-body">
        <div class="ex-q">ให้ \(A = \begin{bmatrix} 2 & 1\\ 4 & 2 \end{bmatrix}\) จงพิจารณาว่า
        (ก) \(1\) เป็นค่าลักษณะเฉพาะของ \(A\) หรือไม่<br>
        (ข) เวกเตอร์ \(\begin{bmatrix} 1\\ 2 \end{bmatrix}\) เป็นเวกเตอร์ลักษณะเฉพาะของ \(A\) หรือไม่ ถ้าเป็นจงหาค่าลักษณะเฉพาะซึ่งสมนัยกับเวกเตอร์นี้</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — สองข้อนี้ไม่ต้องหาค่าลักษณะเฉพาะทั้งหมดเลย — ใช้นิยามตรง ๆ ข้อ (ก): \(\lambda = 1\) จะเป็นค่าลักษณะเฉพาะก็ต่อเมื่อ \((A - I)\vec{x} = \vec{0}\) มีผลเฉลยไม่ชัด ซึ่งเช็กเร็วสุดด้วย \(\det(A - I) = 0\) หรือไม่ ข้อ (ข): คูณ \(A\vec{v}\) รอบเดียว ถ้าผลออกมาเป็น \(\vec{v}\) คูณสเกลาร์สักตัว (ทิศเดิม) ก็เป็นเวกเตอร์ลักษณะเฉพาะทันที โดยสเกลาร์นั้นคือ \(\lambda\)</div>
        <ol class="steps">
          <li><span class="step-t">(ก) เขียน \(A - I_2\) แล้วคิด det</span> ลบ 1 ออกจากทแยง: \(2 \to 1\), \(2 \to 1\) (ช่อง \(1, 4\) คงเดิม) แล้วคิด det สูตรทแยงลง − ทแยงขึ้น:
          \[ \det(A - I_2) = \begin{vmatrix} 2-1 & 1\\ 4 & 2-1 \end{vmatrix} = \begin{vmatrix} 1 & 1\\ 4 & 1 \end{vmatrix} = 1 - 4 = -3 \neq 0 \]
          det ไม่เป็นศูนย์แปลว่า \(A - I_2\) ไม่เอกฐาน ระบบ \((A - I_2)\vec{x} = \vec{0}\) มีเพียงผลเฉลยชัด → <strong>1 ไม่เป็นค่าลักษณะเฉพาะของ \(A\)</strong></li>
          <li><span class="step-t">(ข) คูณ \(A\vec{v}\)</span> ช่องบน \(2(1) + 1(2) = 4\), ช่องล่าง \(4(1) + 2(2) = 8\):
          \[ A\begin{bmatrix} 1\\ 2 \end{bmatrix} = \begin{bmatrix} 2 & 1\\ 4 & 2 \end{bmatrix}\begin{bmatrix} 1\\ 2 \end{bmatrix} = \begin{bmatrix} 4\\ 8 \end{bmatrix} = 4\begin{bmatrix} 1\\ 2 \end{bmatrix} \]
          ผลลัพธ์เป็นตัวเวกเตอร์เดิมคูณ 4 พอดี → <strong>เป็นเวกเตอร์ลักษณะเฉพาะ สมนัยกับ \(\lambda = 4\)</strong></li>
        </ol>
        <div class="verify"><span class="lbl">สรุปคำตอบ:</span> (ก) 1 ไม่เป็นค่าลักษณะเฉพาะของ \(A\) เพราะ \(\det(A - I_2) = -3 \neq 0\) · (ข) \(\begin{bmatrix} 1\\ 2 \end{bmatrix}\) เป็นเวกเตอร์ลักษณะเฉพาะ สมนัยกับ \(\lambda = 4\) — ตรงตามตำรา</div>
      </div>
    </article>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">แบบฝึกหัด 3.2 ข้อ 1 ก,ข + ข้อ 2 (ก)</span><span class="tag book">จากตำรา</span><span class="tag easy">ง่าย</span><span class="ex-title">ท่าเดียวกับ 3.2.1 — ตรวจด้วยนิยาม (3 ข้อย่อย)</span></div>
      <div class="ex-body">
        <div class="ex-q">จงตอบคำถามต่อไปนี้<br>
        ข้อ 1 (ก) \(\lambda = 2\) เป็นค่าลักษณะเฉพาะของ \(\begin{bmatrix} 3 & 8\\ 3 & 2 \end{bmatrix}\) หรือไม่ เพราะเหตุใด<br>
        ข้อ 1 (ข) \(\lambda = -2\) เป็นค่าลักษณะเฉพาะของ \(\begin{bmatrix} 7 & 3\\ 3 & -1 \end{bmatrix}\) หรือไม่ เพราะเหตุใด<br>
        ข้อ 2 (ก) เวกเตอร์ \(\begin{bmatrix} 1\\ 4 \end{bmatrix}\) เป็นเวกเตอร์ลักษณะเฉพาะของ \(\begin{bmatrix} -3 & 1\\ -3 & 5 \end{bmatrix}\) หรือไม่ ถ้าเป็นจงหาค่าลักษณะเฉพาะซึ่งสมนัยกับเวกเตอร์นี้</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — สามข้อย่อยใช้เครื่องมือเดียวกับตัวอย่าง 3.2.1: สองข้อแรกถามเรื่องค่าลักษณะเฉพาะ → ตรวจด้วย \(\det(A - \lambda I) = 0\) หรือไม่ (ระวัง \(\lambda = -2\) ต้อง "บวก 2" ที่ทแยง เพราะลบด้วยจำนวนลบ) ข้อที่สามถามเรื่องเวกเตอร์ → คูณ \(A\vec{v}\) แล้วดูว่าเป็นสเกลาร์เท่าของ \(\vec{v}\) หรือไม่</div>
        <ol class="steps">
          <li><span class="step-t">ข้อ 1 (ก)</span> \(A - 2I_2 = \begin{bmatrix} 3-2 & 8\\ 3 & 2-2 \end{bmatrix} = \begin{bmatrix} 1 & 8\\ 3 & 0 \end{bmatrix}\) → \(\det = 1(0) - 8(3) = -24 \neq 0\) → <strong>ไม่เป็นค่าลักษณะเฉพาะ</strong> (เมทริกซ์ไม่เอกฐาน ระบบมีแต่ผลเฉลยชัด)</li>
          <li><span class="step-t">ข้อ 1 (ข)</span> \(A - (-2)I_2 = A + 2I_2 = \begin{bmatrix} 7+2 & 3\\ 3 & -1+2 \end{bmatrix} = \begin{bmatrix} 9 & 3\\ 3 & 1 \end{bmatrix}\) → \(\det = 9 - 9 = 0\) → <strong>เป็นค่าลักษณะเฉพาะ</strong> (<em>เพราะ</em> \((A + 2I_2)\vec{x} = \vec{0}\) มีผลเฉลยไม่ชัด)</li>
          <li><span class="step-t">ข้อ 2 (ก)</span> คูณ: ช่องบน \(-3(1) + 1(4) = 1\), ช่องล่าง \(-3(1) + 5(4) = 17\):
          \[ A\begin{bmatrix} 1\\ 4 \end{bmatrix} = \begin{bmatrix} 1\\ 17 \end{bmatrix} \]
          ถ้าเป็นเวกเตอร์ลักษณะเฉพาะ ต้องมี \(\lambda\) ที่ \(1 = \lambda(1)\) และ \(17 = \lambda(4)\) พร้อมกัน — ข้อแรกบังคับ \(\lambda = 1\) แต่ข้อสองต้องการ \(\lambda = 17/4\) ขัดกัน → <strong>ไม่เป็นเวกเตอร์ลักษณะเฉพาะ</strong></li>
        </ol>
        <div class="verify"><span class="lbl">สรุปคำตอบ:</span> ข้อ 1: (ก) ไม่ · (ข) เป็น — ข้อ 2 (ก) ไม่ (เพราะ \(A\vec{v} = (1, 17)^T\) ไม่เป็นสเกลาร์เท่าของ \((1, 4)^T\)) — ตรงกับคำตอบท้ายบทของตำรา</div>
      </div>
    </article>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3.2.2</span><span class="tag book">จากตำรา</span><span class="tag easy">ง่าย</span><span class="ex-title">สมการลักษณะเฉพาะ + ปริภูมิลักษณะเฉพาะ (\(2 \times 2\))</span></div>
      <div class="ex-body">
        <div class="ex-q">กำหนดให้ \(A = \begin{bmatrix} 3 & 2\\ 3 & 8 \end{bmatrix}\) จงหาสมการลักษณะเฉพาะ ค่าลักษณะเฉพาะ และฐานหลักสำหรับปริภูมิลักษณะเฉพาะซึ่งสมนัยกับแต่ละค่าลักษณะเฉพาะที่หาได้</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — สามงานตามลำดับ: (1) แก้ \(\det(A - \lambda I_2) = 0\) ได้พหุนามแล้วแยกตัวประกอบ (2) สำหรับ \(\lambda\) แต่ละค่า ไปแก้ \((A - \lambda I)\vec{x} = \vec{0}\) แบบระบบเอกพันธุ์ (3) เวกเตอร์ฐานของเซตผลเฉลย = ฐานหลักของปริภูมิลักษณะเฉพาะ — จำไว้ว่าปริภูมิลักษณะเฉพาะคือ "ทุกทิศที่เมทริกซ์ยืดด้วยเลข \(\lambda\) ตัวเดียวกัน" ไม่ใช่เวกเตอร์เดียว</div>
        <ol class="steps">
          <li><span class="step-t">สมการลักษณะเฉพาะ</span> det = \((3 - \lambda)(8 - \lambda) - (2)(3)\) — กระจาย: \(24 - 11\lambda + \lambda^2\) แล้วลบ 6:
          \[ \det(A - \lambda I_2) = (3 - \lambda)(8 - \lambda) - 6 = \lambda^2 - 11\lambda + 18 = 0 \]
          แยกตัวประกอบ: หาสองจำนวนคูณกันได้ 18 บวกกันได้ \(-11\) → \(-2\) กับ \(-9\) → \((\lambda - 2)(\lambda - 9) = 0 \Rightarrow \lambda = 2, 9\) (ตรวจ trace/det: \(3 + 8 = 11 = 2 + 9\) ✓, \(24 - 6 = 18 = 2 \times 9\) ✓)</li>
          <li><span class="step-t">\(\lambda = 2\): แก้ \((A - 2I_2)\vec{x} = \vec{0}\)</span> ลบ 2 ที่ทแยง → \(\begin{bmatrix} 1 & 2\\ 3 & 6 \end{bmatrix}\) — แถวล่างเป็น 3 เท่าของแถวบน เหลือสมการ \(x_1 + 2x_2 = 0 \Rightarrow x_1 = -2x_2\) เลือก \(x_2 = 1\):
          \[ E_2 = \operatorname{Nul}(A - 2I_2) = \operatorname{Span}\left\{ \begin{bmatrix} -2\\ 1 \end{bmatrix} \right\} \]</li>
          <li><span class="step-t">\(\lambda = 9\): แก้ \((A - 9I_2)\vec{x} = \vec{0}\)</span> ลบ 9 ที่ทแยง → \(\begin{bmatrix} -6 & 2\\ 3 & -1 \end{bmatrix}\) — แถวล่างเป็น \(-\tfrac{1}{2}\) เท่าของแถวบน เหลือสมการ \(x_1 - \tfrac{1}{3}x_2 = 0 \Rightarrow x_1 = \tfrac{1}{3}x_2\) เลือก \(x_2 = 3\) ได้ \(\begin{bmatrix} 1\\ 3 \end{bmatrix}\) (คูณ 3 เพื่อกำจัดเศษส่วน — ยังเป็นเวกเตอร์ลักษณะเฉพาะเพราะคูณสเกลาร์ได้เสมอ):
          \[ E_9 = \operatorname{Nul}(A - 9I_2) = \operatorname{Span}\left\{ \begin{bmatrix} 1\\ 3 \end{bmatrix} \right\} \]</li>
        </ol>
        <figure class="fig">
          <svg viewBox="0 0 430 545" role="img" aria-label="เส้นตรงสองเส้นของปริภูมิลักษณะเฉพาะ E2 ทิศ (-2,1) และ E9 ทิศ (1,3) ผ่านจุดกำเนิด พร้อม Av ของแต่ละทิศ">
            <defs>
              <marker id="m2a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mka"/></marker>
              <marker id="m2b" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mk1"/></marker>
              <marker id="m2r" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mk2"/></marker>
            </defs>
            <path class="grid" d="M45 30V530M85 30V530M125 30V530M165 30V530M205 30V530M285 30V530M325 30V530M365 30V530M405 30V530M45 50H405M45 90H405M45 130H405M45 170H405M45 210H405M45 250H405M45 290H405M45 330H405M45 370H405M45 410H405M45 490H405M45 530H405"/>
            <path class="ax" d="M40 450H414" marker-end="url(#m2a)"/>
            <path class="ax" d="M245 534V20" marker-end="url(#m2a)"/>
            <text x="85" y="468" text-anchor="middle" class="mut small">−4</text>
            <text x="165" y="468" text-anchor="middle" class="mut small">−2</text>
            <text x="325" y="468" text-anchor="middle" class="mut small">2</text>
            <text x="365" y="468" text-anchor="middle" class="mut small">3</text>
            <text x="236" y="374" text-anchor="end" class="mut small">2</text>
            <text x="236" y="294" text-anchor="end" class="mut small">4</text>
            <text x="236" y="214" text-anchor="end" class="mut small">6</text>
            <text x="236" y="134" text-anchor="end" class="mut small">8</text>
            <text x="236" y="98" text-anchor="end" class="mut small">9</text>
            <text x="236" y="54" text-anchor="end" class="mut small">10</text>
            <text x="418" y="468" text-anchor="middle" class="mut">x₁</text>
            <text x="236" y="16" text-anchor="end" class="mut">x₂</text>
            <text x="234" y="468" text-anchor="end" class="mut">O</text>
            <path class="thin2" d="M373 514 153 404"/>
            <path class="thin3" d="M223 516 377 54"/>
            <path class="aux" d="M85 370V450M245 370H85M365 90V450M245 90H365"/>
            <path class="vec1" d="M245 450 165 410" marker-end="url(#m2b)"/>
            <path class="vec2" d="M245 450 85 370" marker-end="url(#m2r)"/>
            <path class="vec1" d="M245 450 258.3 370" marker-end="url(#m2b)"/>
            <path class="vec2" d="M245 450 365 90" marker-end="url(#m2r)"/>
            <text x="152" y="430" text-anchor="end" class="t1">v₁ = (−2, 1)</text>
            <text x="18" y="352" class="t2">Av₁ = 2v₁ = (−4, 2)</text>
            <text x="275" y="398" class="t1">v₂ = (1/3, 1)</text>
            <text x="300" y="180" text-anchor="end" class="t2">Av₂ = 9v₂ = (3, 9)</text>
            <text x="330" y="522" text-anchor="middle" class="t2">E₂ (λ = 2)</text>
            <text x="360" y="40" text-anchor="middle" class="t3">E₉ (λ = 9)</text>
          </svg>
          <figcaption>ปริภูมิลักษณะเฉพาะไม่ใช่เวกเตอร์เดียว แต่เป็น<strong>เส้นตรงทั้งเส้น</strong>ผ่านจุดกำเนิด: เส้น \(E_2\) ทิศ \((-2, 1)^T\) (แดงเอียงลง) กับ \(E_9\) ทิศ \((1, 3)^T\) (เขียวชัน) — จุดสำคัญ: \(A\) ยืดทุกเวกเตอร์บน \(E_2\) ด้วย 2 เท่า (\((-2,1) \to (-4,2)\)) และทุกเวกเตอร์บน \(E_9\) ด้วย 9 เท่า (\((\tfrac13, 1) \to (3, 9)\)) ทิศไหนก็ได้บนเส้นนั้น ไม่ใช่แค่ตัวที่วาดให้</figcaption>
        </figure>
        <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(\lambda^2 - 11\lambda + 18 = 0 \Rightarrow \lambda = 2, 9\) · ฐานหลัก: \(\lambda = 2\): \(\left\{ \begin{bmatrix} -2\\ 1 \end{bmatrix} \right\}\) · \(\lambda = 9\): \(\left\{ \begin{bmatrix} 1\\ 3 \end{bmatrix} \right\}\) (ตำราเขียนรูป \(\left\{ \begin{bmatrix} 1/3\\ 1 \end{bmatrix} \right\}\) ซึ่งเท่ากันเพราะเป็นสเกลาร์เท่ากัน) — ตรงตามตำรา</div>
      </div>
    </article>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">แบบฝึกหัด 3.2 ข้อ 3 (ก),(ข)</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">ฐานหลักของปริภูมิลักษณะเฉพาะ (โจทย์ให้ \(\lambda\) มาแล้ว)</span></div>
      <div class="ex-body">
        <div class="ex-q">จงหาฐานหลักสำหรับปริภูมิลักษณะเฉพาะของเมทริกซ์ \(A\) ซึ่งสมนัยกับค่าลักษณะเฉพาะที่กำหนดให้
        \[ \text{(ก)}\;\; A = \begin{bmatrix} 10 & -9\\ 4 & -2 \end{bmatrix}, \;\; \lambda = 4 \qquad\qquad
        \text{(ข)}\;\; A = \begin{bmatrix} 4 & -2\\ -3 & 9 \end{bmatrix}, \;\; \lambda = 10 \]</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — โจทย์ให้ \(\lambda\) มาแล้วจึงข้ามขั้นหาค่าลักษณะเฉพาะไปได้ เหลืองานเดียวคือแก้ \((A - \lambda I)\vec{x} = \vec{0}\) แล้วเลือกเวกเตอร์ฐานที่ไม่มีเศษส่วน — ระวังช่องที่ติดลบตอนลบ \(\lambda\) ที่ทแยง</div>
        <ol class="steps">
          <li><span class="step-t">(ก) แก้ \((A - 4I_2)\vec{x} = \vec{0}\)</span> ลบ 4 ที่ทแยง → \(\begin{bmatrix} 6 & -9\\ 4 & -6 \end{bmatrix}\) — หารแถวบนด้วย 3 ได้ \(\begin{bmatrix} 2 & -3 \end{bmatrix}\) (แถวล่างซ้ำข้อมูล: \(4/2 = 2\), \(-6/-3 = 2\) เป็น 2 เท่าของแถวบนเดิม) สมการ \(2x_1 - 3x_2 = 0 \Rightarrow x_1 = \tfrac{3}{2}x_2\) เลือก \(x_2 = 2\) กำจัดเศษส่วน:
          \[ E_4 = \operatorname{Span}\left\{ \begin{bmatrix} 3\\ 2 \end{bmatrix} \right\} \]</li>
          <li><span class="step-t">(ข) แก้ \((A - 10I_2)\vec{x} = \vec{0}\)</span> ลบ 10 ที่ทแยง → \(\begin{bmatrix} -6 & -2\\ -3 & -1 \end{bmatrix}\) — แถวล่างเป็นครึ่งหนึ่งของแถวบน เหลือสมการ \(3x_1 + x_2 = 0 \Rightarrow x_2 = -3x_1\) เลือก \(x_1 = -1\):
          \[ E_{10} = \operatorname{Span}\left\{ \begin{bmatrix} -1\\ 3 \end{bmatrix} \right\} \]</li>
        </ol>
        <div class="verify"><span class="lbl">สรุปคำตอบ:</span> (ก) ฐานหลัก \(\begin{bmatrix} 3\\ 2 \end{bmatrix}\) · (ข) ฐานหลัก \(\begin{bmatrix} -1\\ 3 \end{bmatrix}\) — ตรงกับคำตอบท้ายบทของตำรา (ตรวจ: \(10(3) - 9(2) = 12 = 4(3)\) ✓ และ \(4(-1) - 2(3) = -10 = 10(-1)\) ✓)</div>
      </div>
    </article>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3.2.3 (ก)</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">\(3 \times 3\) ค่าลักษณะเฉพาะซ้ำ — หาครบทั้งสมการและฐานหลัก</span></div>
      <div class="ex-body">
        <div class="ex-q">จงหาสมการลักษณะเฉพาะ ค่าลักษณะเฉพาะ และฐานหลักสำหรับปริภูมิลักษณะเฉพาะของเมทริกซ์ \(A\) ซึ่งสมนัยกับแต่ละค่าลักษณะเฉพาะที่หาได้ เมื่อกำหนดให้
        \[ A = \begin{bmatrix} 5 & -6 & -6\\ -1 & 4 & 2\\ 3 & -6 & -4 \end{bmatrix} \]</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — ขั้นตอนมาตรฐานของ \(3 \times 3\): กระจายโคแฟกเตอร์หา \(\det(A - \lambda I_3)\) → แยกตัวประกอบ (ทดลองแทนตัวหารของค่าคงตัว) → สำหรับ \(\lambda\) แต่ละค่า แก้ \((A - \lambda I)\vec{x} = \vec{0}\) — จุดที่ต้องเฝ้าระวังคือ \(\lambda = 2\) ที่<em>ซ้ำสองครั้ง</em>: ถ้าแก้แล้วได้เวกเตอร์อิสระสองตัวก็ดี ถ้าได้แค่ตัวเดียวจะกลายเป็นปัญหาในตัวอย่าง 3.2.5</div>
        <ol class="steps">
          <li><span class="step-t">พหุนามลักษณะเฉพาะ</span> กระจายโคแฟกเตอร์ตามแถวที่ 1 แล้วรวบพจน์:
          \[ \det(A - \lambda I_3) = -\lambda^3 + 5\lambda^2 - 8\lambda + 4 = 0 \]
          ทดลองแทน \(\lambda = 1\): \(-1 + 5 - 8 + 4 = 0\) ✓ หารยาวด้วย \((\lambda - 1)\) เหลือ \(-(\lambda^2 - 4\lambda + 4) = -(\lambda - 2)^2\) → \(A\) มีค่าลักษณะเฉพาะ \(\lambda = 1, 2, 2\) (เลข 2 ซ้ำสองครั้ง)</li>
          <li><span class="step-t">\(\lambda = 1\): ลดรูป \(A - I_3\)</span> ลบ 1 ที่ทแยง → \(\begin{bmatrix} 4 & -6 & -6\\ -1 & 3 & 2\\ 3 & -6 & -5 \end{bmatrix}\) ลดรูปจนได้รูปแบบขั้นบันไดลดรูป \(\begin{bmatrix} 1 & 0 & -1\\ 0 & 1 & \tfrac{1}{3}\\ 0 & 0 & 0 \end{bmatrix}\) → \(x_1 = x_3,\; x_2 = -\tfrac{1}{3}x_3\) เลือก \(x_3 = 3\) (กำจัดเศษส่วน):
          \[ E_1 = \operatorname{Span}\left\{ \begin{bmatrix} 3\\ -1\\ 3 \end{bmatrix} \right\} \]</li>
          <li><span class="step-t">\(\lambda = 2\): ลดรูป \(A - 2I_3\)</span> ลบ 2 ที่ทแยง → \(\begin{bmatrix} 3 & -6 & -6\\ -1 & 2 & 2\\ 3 & -6 & -6 \end{bmatrix}\) — แถวที่ 2 และ 3 เป็นสเกลาร์เท่าของกันหมด (ทุกแถวบอกเรื่องเดียว) ลดเหลือ \(\begin{bmatrix} 1 & -2 & -2\\ 0 & 0 & 0\\ 0 & 0 & 0 \end{bmatrix}\) → \(x_1 = 2x_2 + 2x_3\) โดย \(x_2, x_3\) เสรีทั้งคู่ (นี่คือเหตุผลที่ \(\dim E_2 = 2\)):
          \[ E_2 = \operatorname{Span}\left\{ \begin{bmatrix} 2\\ 1\\ 0 \end{bmatrix}, \begin{bmatrix} 2\\ 0\\ 1 \end{bmatrix} \right\} \]
          (ให้ \(x_2 = 1, x_3 = 0\) ได้ \((2, 1, 0)^T\); ให้ \(x_2 = 0, x_3 = 1\) ได้ \((2, 0, 1)^T\))</li>
        </ol>
        <div class="verify"><span class="lbl">สรุปคำตอบ:</span> สมการลักษณะเฉพาะ \(-\lambda^3 + 5\lambda^2 - 8\lambda + 4 = 0\), ค่าลักษณะเฉพาะ \(\lambda = 1, 2, 2\) · ฐานหลัก: \(\lambda = 1\): \(\left\{ \begin{bmatrix} 3\\ -1\\ 3 \end{bmatrix} \right\}\) · \(\lambda = 2\): \(\left\{ \begin{bmatrix} 2\\ 1\\ 0 \end{bmatrix}, \begin{bmatrix} 2\\ 0\\ 1 \end{bmatrix} \right\}\) — ตรงตามตำรา (ตรวจ: \(A(3,-1,3)^T = (3, -1, 3)^T\) ✓ และ \(A(2,1,0)^T = (4, 2, 0)^T = 2(2,1,0)^T\) ✓)</div>
      </div>
    </article>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3.2.3 (ข)</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">\(3 \times 3\) อีกตัว — พหุนามเดิม คำตอบต่าง</span></div>
      <div class="ex-body">
        <div class="ex-q">จงหาสมการลักษณะเฉพาะ ค่าลักษณะเฉพาะ และฐานหลักสำหรับปริภูมิลักษณะเฉพาะของเมทริกซ์ \(A\) ซึ่งสมนัยกับแต่ละค่าลักษณะเฉพาะที่หาได้ เมื่อกำหนดให้
        \[ A = \begin{bmatrix} 3 & 1 & -1\\ 2 & 2 & -1\\ 2 & 2 & 0 \end{bmatrix} \]</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — ขั้นตอนเดียวกับข้อ (ก) ทุกอย่าง และเผอิญได้พหุนามลักษณะเฉพาะ<em>เหมือนกันเป๊ะ</em> (\(-\lambda^3 + 5\lambda^2 - 8\lambda + 4\)) — ตำราตั้งใจวางคู่กันเพื่อชวนสังเกตว่าพหุนามเหมือนกันไม่ได้แปลว่าเมทริกซ์เหมือนกัน: ข้อนี้ค่า \(\lambda = 2\) ที่ซ้ำจะให้เวกเตอร์อิสระ<em>แค่ตัวเดียว</em> ต่างจากข้อ (ก)</div>
        <ol class="steps">
          <li><span class="step-t">พหุนามลักษณะเฉพาะ</span> กระจายโคแฟกเตอร์ตามแถวที่ 1:
          \[ \det(A - \lambda I_3) = -\lambda^3 + 5\lambda^2 - 8\lambda + 4 = -(\lambda - 1)(\lambda - 2)^2 = 0 \;\Longrightarrow\; \lambda = 1, 2, 2 \]</li>
          <li><span class="step-t">\(\lambda = 1\): ลดรูป \(A - I_3\)</span> ลบ 1 ที่ทแยง → \(\begin{bmatrix} 2 & 1 & -1\\ 2 & 1 & -1\\ 2 & 2 & -1 \end{bmatrix}\) — \(R_2 - R_1\) ให้แถวศูนย์, \(R_3 - R_1\) ให้ \((0, 1, 0)\) จากนั้น \(R_1 - R_2\) และ \(\tfrac{1}{2}R_1\) ได้ \(\begin{bmatrix} 1 & 0 & -\tfrac{1}{2}\\ 0 & 1 & 0\\ 0 & 0 & 0 \end{bmatrix}\) → \(x_1 = \tfrac{1}{2}x_3,\; x_2 = 0\) เลือก \(x_3 = 2\):
          \[ E_1 = \operatorname{Span}\left\{ \begin{bmatrix} 1\\ 0\\ 2 \end{bmatrix} \right\} \]</li>
          <li><span class="step-t">\(\lambda = 2\): ลดรูป \(A - 2I_3\)</span> ลบ 2 ที่ทแยง → \(\begin{bmatrix} 1 & 1 & -1\\ 2 & 0 & -1\\ 2 & 2 & -2 \end{bmatrix}\) — \(R_2 - 2R_1\) ได้ \((0, -2, 1)\), \(R_3 - 2R_1\) ได้แถวศูนย์ (ข้อมูลซ้ำ) จากนั้น \(-\tfrac{1}{2}R_2\) และ \(R_1 - R_2\) ได้
          \[ \sim \begin{bmatrix} 1 & 0 & -\tfrac{1}{2}\\ 0 & 1 & -\tfrac{1}{2}\\ 0 & 0 & 0 \end{bmatrix} \;\Longrightarrow\; x_1 = \tfrac{1}{2}x_3, \;\; x_2 = \tfrac{1}{2}x_3 \;\Longrightarrow\; E_2 = \operatorname{Span}\left\{ \begin{bmatrix} 1\\ 1\\ 2 \end{bmatrix} \right\} \]
          <strong>สังเกต: \(\dim E_2 = 1\)</strong> — ค่าลักษณะเฉพาะซ้ำสองครั้งแต่ได้เวกเตอร์อิสระแค่ตัวเดียว (ต่างจากข้อ (ก) ที่ได้สองตัว)</li>
        </ol>
        <figure class="fig">
          <svg viewBox="0 0 480 322" role="img" aria-label="ภาพสามมิติของตัวอย่าง 3.2.3 ข: ปริภูมิลักษณะเฉพาะมีแค่สองเส้น รวมเวกเตอร์อิสระได้แค่ 2 จาก 3 จึงทแยงมุมไม่ได้">
            <defs>
              <marker id="m4a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mka"/></marker>
              <marker id="m4b" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mk1"/></marker>
              <marker id="m4g" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mk3"/></marker>
            </defs>
            <path class="aux" d="M255 210 292 189M255 210 218 189M255 210V236"/>
            <path class="thin1" d="M282.6 257.8 212.3 136"/>
            <path class="thin3" d="M255 241.9V160.7"/>
            <path class="ax" d="M255 210 95 300" marker-end="url(#m4a)"/>
            <path class="ax" d="M255 210 415 300" marker-end="url(#m4a)"/>
            <path class="ax" d="M255 210V36" marker-end="url(#m4a)"/>
            <path class="vec1" d="M255 210 205 123" marker-end="url(#m4b)"/>
            <path class="vec3" d="M255 210 255 152" marker-end="url(#m4g)"/>
            <text x="199" y="252" text-anchor="middle" class="mut small">1</text>
            <text x="148" y="281" text-anchor="middle" class="mut small">2</text>
            <text x="311" y="252" text-anchor="middle" class="mut small">1</text>
            <text x="361" y="281" text-anchor="middle" class="mut small">2</text>
            <text x="263" y="98" class="mut small">2</text>
            <text x="92" y="317" text-anchor="middle" class="mut">x</text>
            <text x="422" y="317" text-anchor="middle" class="mut">y</text>
            <text x="266" y="32" class="mut">z</text>
            <text x="197" y="112" text-anchor="end" class="t1">w₁ = (1, 0, 2), λ = 1</text>
            <text x="263" y="148" class="t3">w₂ = (1, 1, 2), λ = 2</text>
            <text x="292" y="264" class="t1 small">E₁</text>
            <text x="264" y="238" class="t3 small">E₂</text>
          </svg>
          <figcaption>เมทริกซ์ข้อ (ข) มีพหุนามลักษณะเฉพาะ<em>เหมือนกันเป๊ะ</em>กับข้อ (ก) แต่ภาพต่างกันคนละแบบ: ทั้ง \(E_1\) (น้ำเงิน) และ \(E_2\) (เขียว) เป็น<strong>เส้นตรงเส้นเดียว</strong>เท่านั้น — \(\lambda = 2\) ซ้ำ 2 ครั้งแต่ \(\dim E_2 = 1\) เก็บเวกเตอร์อิสระได้แค่ \(1 + 1 = 2 &lt; 3\) ทิศ สร้าง \(P\) ไม่เอกฐานไม่ได้ จึงแปลงเป็นทแยงมุมไม่ได้ (ดูต่อที่ตัวอย่าง 3.2.5 (ข))</figcaption>
        </figure>
        <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(\lambda = 1, 2, 2\) · ฐานหลัก: \(\lambda = 1\): \(\left\{ \begin{bmatrix} 1\\ 0\\ 2 \end{bmatrix} \right\}\) · \(\lambda = 2\): \(\left\{ \begin{bmatrix} 1\\ 1\\ 2 \end{bmatrix} \right\}\) — <em>หมายเหตุ:</em> ตำราพิมพ์ฐานหลักของ \(\lambda = 2\) เป็น \(\begin{bmatrix} -1\\ 1\\ 2 \end{bmatrix}\) เพราะ RREF ในตำราได้ช่อง \((1, 3)\) เป็น \(+\tfrac{1}{2}\) ซึ่งคำนวณผิดเครื่องหมาย (RREF ที่ถูกต้องแถวแรกเป็น \(-\tfrac{1}{2}\) ตามขั้นตอนด้านบน) — ตรวจด้วยการคูณจริง: \(A(1,1,2)^T = (2, 2, 4)^T = 2(1,1,2)^T\) ✓ ขณะที่ \(A(-1,1,2)^T = (-4, -2, 0)^T \neq 2(-1,1,2)^T\) จึงใช้ฐานหลัก \((1, 1, 2)^T\) ตามที่คำนวณได้ถูกต้อง</div>
      </div>
    </article>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3.2.5 (ก)</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">เมทริกซ์ 3.2.3 (ก) แปลงเป็นทแยงมุมได้</span></div>
      <div class="ex-body">
        <div class="ex-q">จงพิจารณาว่าเมทริกซ์ \(A = \begin{bmatrix} 5 & -6 & -6\\ -1 & 4 & 2\\ 3 & -6 & -4 \end{bmatrix}\) (จากตัวอย่าง 3.2.3 (ก)) สามารถแปลงเป็นทแยงมุมได้หรือไม่ เพราะเหตุใด</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — เกณฑ์ตัดสินมีข้อเดียว: รวมเวกเตอร์ลักษณะเฉพาะอิสระทุกค่าลักษณะเฉพาะได้ครบ \(n = 3\) ตัวหรือไม่ (ทฤษฎีบท 3.2.5) — ข้อมูลทั้งหมดอยู่ในตัวอย่าง 3.2.3 (ก) แล้ว งานของข้อนี้คือ "นับให้ถูก" แล้วประกอบ \(P, D\) ให้ลำดับจับคู่ถูกตัว</div>
        <ol class="steps">
          <li><span class="step-t">นับเวกเตอร์อิสระ</span> จากตัวอย่าง 3.2.3 (ก): \(\lambda = 1\) ให้ \(\dim E_1 = 1\) (ฐาน \((3, -1, 3)^T\)) และ \(\lambda = 2\) ซ้ำ 2 ครั้งแต่ให้ \(\dim E_2 = 2\) (ฐาน \((2, 1, 0)^T, (2, 0, 1)^T\)) — เท่ากับจำนวนครั้งที่ซ้ำพอดี → รวม \(1 + 2 = 3\) เวกเตอร์อิสระครบ \(n = 3\) → <strong>แปลงเป็นทแยงมุมได้</strong></li>
          <li><span class="step-t">ประกอบ \(P\) และ \(D\)</span> เรียงเวกเตอร์ลักษณะเฉพาะเป็นหลักของ \(P\) ตามลำดับ แล้วใส่ค่าลักษณะเฉพาะที่จับคู่กันลงทแยงของ \(D\) (หลักที่ \(j\) ของ \(P\) กับทแยงช่องที่ \(j\) ของ \(D\) ต้องเป็นคู่เดียวกัน):
          \[ P = \begin{bmatrix} 3 & 2 & 2\\ -1 & 1 & 0\\ 3 & 0 & 1 \end{bmatrix}, \qquad D = \begin{bmatrix} 1 & 0 & 0\\ 0 & 2 & 0\\ 0 & 0 & 2 \end{bmatrix} \]</li>
          <li><span class="step-t">ตรวจ \(AP = PD\)</span> หลักแรกของ \(PD\) คือ \(1 \cdot (3, -1, 3)^T = (3, -1, 3)^T\) และ \(A(3, -1, 3)^T = (3, -1, 3)^T\) ✓ · หลักสอง \(2 \cdot (2, 1, 0)^T = (4, 2, 0)^T\) และ \(A(2, 1, 0)^T = (4, 2, 0)^T\) ✓ · หลักสาม \(2 \cdot (2, 0, 1)^T = (4, 0, 2)^T\) และ \(A(2, 0, 1)^T = (4, 0, 2)^T\) ✓ — สองข้างตรงกันทุกหลัก จึงได้ \(A = PDP^{-1}\)</li>
        </ol>
        <figure class="fig">
          <svg viewBox="0 0 480 315" role="img" aria-label="ภาพสามมิติ: เวกเตอร์ลักษณะเฉพาะสามตัวของตัวอย่าง 3.2.3 ก คือเส้น E1 และระนาบ E2 ที่ทำให้แปลงเป็นทแยงมุมได้">
            <defs>
              <marker id="m3a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mka"/></marker>
              <marker id="m3b" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mk1"/></marker>
              <marker id="m3r" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mk2"/></marker>
              <marker id="m3g" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mk3"/></marker>
            </defs>
            <polygon class="f2" points="327.5,146 275.8,235.7 181.2,235.7 233,146" fill-opacity=".45"/>
            <path class="thin2" d="M327.5 146 275.8 235.7 181.2 235.7 233 146Z"/>
            <path class="aux" d="M260 185 300 162M260 185 220 162M260 185 260 231"/>
            <path class="thin1" d="M137.5 114.3 368.1 247.4"/>
            <path class="ax" d="M260 185 113 270" marker-end="url(#m3a)"/>
            <path class="ax" d="M260 185 407 270" marker-end="url(#m3a)"/>
            <path class="ax" d="M260 185V35" marker-end="url(#m3a)"/>
            <path class="vec1" d="M260 185 80 81" marker-end="url(#m3b)"/>
            <path class="vec2" d="M260 185 215 263" marker-end="url(#m3r)"/>
            <path class="vec3" d="M260 185 170 185" marker-end="url(#m3g)"/>
            <text x="209" y="224" text-anchor="middle" class="mut small">1</text>
            <text x="164" y="250" text-anchor="middle" class="mut small">2</text>
            <text x="119" y="276" text-anchor="middle" class="mut small">3</text>
            <text x="311" y="224" text-anchor="middle" class="mut small">1</text>
            <text x="356" y="250" text-anchor="middle" class="mut small">2</text>
            <text x="401" y="276" text-anchor="middle" class="mut small">3</text>
            <text x="268" y="137" class="mut small">1</text>
            <text x="268" y="85" class="mut small">2</text>
            <text x="100" y="285" text-anchor="middle" class="mut">x</text>
            <text x="420" y="285" text-anchor="middle" class="mut">y</text>
            <text x="272" y="30" class="mut">z</text>
            <text x="16" y="68" class="t1">v₁ = (3, −1, 3), λ = 1</text>
            <text x="215" y="285" text-anchor="middle" class="t2">v₂ = (2, 1, 0)</text>
            <text x="162" y="178" text-anchor="end" class="t3">v₃ = (2, 0, 1)</text>
            <text x="170" y="150" text-anchor="middle" class="t1">E₁</text>
            <text x="335" y="140" class="t2 small">E₂ (λ = 2) : ระนาบ</text>
          </svg>
          <figcaption>\(\lambda = 2\) ซ้ำ 2 ครั้งแต่ให้ <strong>ระนาบทั้งระนาบ</strong> \(E_2 = \operatorname{Span}\{(2,1,0)^T, (2,0,1)^T\}\) (แดงโปร่งแสง — \(\dim E_2 = 2\) ครบจำนวนครั้งที่ซ้ำ) ส่วน \(\lambda = 1\) ให้เส้น \(E_1\) ทิศ \((3,-1,3)^T\) (น้ำเงิน) — รวมได้เวกเตอร์อิสระ \(1 + 2 = 3\) ตัวครบ \(n = 3\) จึงแปลงเป็นทแยงมุมได้ (ดูต่อที่ตัวอย่าง 3.2.5 (ก))</figcaption>
        </figure>
        <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(A\) แปลงเป็นทแยงมุมได้ เพราะผลรวมมิติของปริภูมิลักษณะเฉพาะ \(= 1 + 2 = 3 = n\) โดย \(A = PDP^{-1}\) เมื่อ \(P = \begin{bmatrix} 3 & 2 & 2\\ -1 & 1 & 0\\ 3 & 0 & 1 \end{bmatrix}\), \(D = \operatorname{diag}(1, 2, 2)\) — ตรงตามตำรา</div>
      </div>
    </article>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3.2.5 (ข)</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">เมทริกซ์ 3.2.3 (ข) แปลงเป็นทแยงมุมไม่ได้</span></div>
      <div class="ex-body">
        <div class="ex-q">จงพิจารณาว่าเมทริกซ์ \(A = \begin{bmatrix} 3 & 1 & -1\\ 2 & 2 & -1\\ 2 & 2 & 0 \end{bmatrix}\) (จากตัวอย่าง 3.2.3 (ข)) สามารถแปลงเป็นทแยงมุมได้หรือไม่ เพราะเหตุใด</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — คู่ตรงข้ามของข้อ (ก): ค่าลักษณะเฉพาะซ้ำ \(\lambda = 2\) ของเมทริกซ์นี้ให้ปริภูมิลักษณะเฉพาะมีมิติแค่ 1 — น้อยกว่าจำนวนครั้งที่ซ้ำ — เก็บเวกเตอร์อิสระไม่ครบ 3 ตัว จึงสร้าง \(P\) ไม่เอกฐานไม่ได้ ตัดสินจบได้จากการนับ ไม่ต้องคำนวณเพิ่ม</div>
        <ol class="steps">
          <li><span class="step-t">รวบข้อมูลจากตัวอย่าง 3.2.3 (ข)</span> \(\lambda = 1\): \(\dim E_1 = 1\) (ฐาน \((1, 0, 2)^T\)) · \(\lambda = 2\) ซ้ำ 2 ครั้ง: \(\dim E_2 = 1\) (ฐาน \((1, 1, 2)^T\))</li>
          <li><span class="step-t">เทียบกับจำนวนครั้งที่ซ้ำ</span> โดยทฤษฎีบท 3.2.5 ข้อ 1: มิติของปริภูมิลักษณะเฉพาะต้อง ≤ จำนวนการซ้ำ (ที่นี่ \(1 \le 2\) ผ่าน) แต่ข้อ 2 บอกว่าแปลงเป็นทแยงมุมได้<em>ก็ต่อเมื่อ</em>ผลรวมมิติเท่ากับ \(n\) — ที่นี่ \(1 + 1 = 2 &lt; 3\) → <strong>แปลงเป็นทแยงมุมไม่ได้</strong></li>
          <li><span class="step-t">เหตุผลเชิงภาพ</span> เวกเตอร์อิสระมีแค่ 2 ตัว เมื่อเรียงเป็นหลักของ \(P\) ได้เมทริกซ์ \(3 \times 3\) ที่หลักขาด (เอกฐาน) — \(P^{-1}\) ไม่มีจึงพูดถึง \(PDP^{-1}\) ไม่ได้เลย เมทริกซ์ประเภทนี้ "บิด" ทิศที่ค่าลักษณะเฉพาะซ้ำครอบคลุมไม่พอ จึงเลียนแบบด้วยทแยงมุมไม่ได้</li>
        </ol>
        <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(A\) <strong>ไม่สามารถแปลงเป็นทแยงมุมได้</strong> เพราะ \(\dim E_2 = 1\) น้อยกว่าจำนวนการซ้ำของ \(\lambda = 2\) ทำให้ผลรวมมิติของปริภูมิลักษณะเฉพาะ \(= 2 \neq 3\) — ตรงตามตำรา</div>
      </div>
    </article>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3.2.6</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">หาฐานหลัก \(B'\) ที่ทำให้ \([T]_{B'}\) เป็นทแยงมุม</span></div>
      <div class="ex-body">
        <div class="ex-q">ให้ \(T: \mathbb{R}^2 \to \mathbb{R}^2\) เป็นการแปลงเชิงเส้นกำหนดโดย \(T(x_1, x_2) = (7x_1 + 2x_2,\; -4x_1 + x_2)\) สำหรับทุก ๆ \((x_1, x_2) \in \mathbb{R}^2\) จงหาฐานหลัก \(B'\) สำหรับ \(\mathbb{R}^2\) ซึ่งทำให้ \([T]_{B'}\) เป็นเมทริกซ์ทแยงมุม (ถ้ามี)</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — โจทย์ถามหา "มุมมองที่ทำให้ \(T\) ดูง่าย": เขียน \(T\) ในรูปเมทริกซ์มาตรฐาน \(A\) ก่อน (สัมประสิทธิ์ของสูตร = แถวของ \(A\)) แล้วทำเหมือน 3.2.4 ทั้งหมด — หาค่าลักษณะเฉพาะ เวกเตอร์ลักษณะเฉพาะ แล้วใช้ทฤษฎีบท 3.2.6: ฐานหลัก \(B'\) ที่สร้างจากหลักของ \(P\) ทำให้ \([T]_{B'} = D\) พอดี</div>
        <ol class="steps">
          <li><span class="step-t">เขียนเมทริกซ์มาตรฐาน</span> \(T(\vec{x}) = A\vec{x}\) เมื่อ \(A = \begin{bmatrix} 7 & 2\\ -4 & 1 \end{bmatrix}\) (สังเกตว่าเป็นเมทริกซ์เดียวกับตัวอย่าง 3.2.4 — โจทย์ตำราตั้งใจเชื่อมสองข้อนี้)</li>
          <li><span class="step-t">หา eigenpair</span> จากตัวอย่าง 3.2.4: \(\det(A - \lambda I_2) = \lambda^2 - 8\lambda + 15 = (\lambda - 3)(\lambda - 5) = 0 \Rightarrow \lambda = 3, 5\) โดย \(\lambda = 3\) ได้เวกเตอร์ฐาน \((-1, 2)^T\) และ \(\lambda = 5\) ได้ \((-1, 1)^T\) (ตรวจเร็ว: \(A(-1, 2)^T = (-7 + 4,\; 4 + 2)^T = (-3, 6)^T = 3(-1, 2)^T\) ✓ และ \(A(-1, 1)^T = (-7 + 2,\; 4 + 1)^T = (-5, 5)^T = 5(-1, 1)^T\) ✓)</li>
          <li><span class="step-t">ประกาศฐานหลัก \(B'\)</span> เอาเวกเตอร์ลักษณะเฉพาะสองตัวมาเป็นสมาชิก \(B'\) — โดยทฤษฎีบท 3.2.6 ฐานหลักนี้ทำให้ \([T]_{B'}\) เป็นเมทริกซ์ทแยงมุมโดยตรง:
          \[ B' = \left\{ \begin{bmatrix} -1\\ 2 \end{bmatrix}, \begin{bmatrix} -1\\ 1 \end{bmatrix} \right\}, \qquad [T]_{B'} = \begin{bmatrix} 3 & 0\\ 0 & 5 \end{bmatrix} \]
          (หลักที่ \(j\) ของ \([T]_{B'}\) คือ \([T(\vec{v}_j)]_{B'} = \lambda_j\vec{v}_j\) ในพิกัด \(B'\) — จึงมีแต่เลขยืดบนทแยง)</li>
        </ol>
        <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(B' = \left\{ \begin{bmatrix} -1\\ 2 \end{bmatrix}, \begin{bmatrix} -1\\ 1 \end{bmatrix} \right\}\) ทำให้ \([T]_{B'} = \begin{bmatrix} 3 & 0\\ 0 & 5 \end{bmatrix}\) เป็นเมทริกซ์ทแยงมุม — ตรงตามตำรา</div>
      </div>
    </article>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3.2.7</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">ค่าลักษณะเฉพาะซ้ำ \(2 \times 2\) — แปลงเป็นทแยงมุมไม่ได้</span></div>
      <div class="ex-body">
        <div class="ex-q">ให้ \(A = \begin{bmatrix} 4 & -9\\ 4 & -8 \end{bmatrix}\) และ \(T: \mathbb{R}^2 \to \mathbb{R}^2\) เป็นการแปลงเมทริกซ์กำหนดโดย \(T(\vec{x}) = A\vec{x}\) สำหรับทุก ๆ \(\vec{x} \in \mathbb{R}^2\) จงหาฐานหลัก \(B'\) สำหรับ \(\mathbb{R}^2\) ซึ่งทำให้ \([T]_{B'}\) เป็นเมทริกซ์ทแยงมุม (ถ้ามี)</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — ทำเหมือนตัวอย่าง 3.2.6 ทุกขั้น แต่เจอกับดัก: พหุนามลักษณะเฉพาะให้รากซ้ำ \((\lambda + 2)^2\) — เมื่อเจอค่าซ้ำให้ไปนับเวกเตอร์อิสระของค่านั้นทันที ถ้าได้ไม่ครบ 2 ตัวก็ตอบว่าไม่มีฐานหลักดังกล่าว จบเลย</div>
        <ol class="steps">
          <li><span class="step-t">หาค่าลักษณะเฉพาะ</span> det = \((4 - \lambda)(-8 - \lambda) - (-9)(4)\) — กระจาย: \(-32 - 4\lambda + 8\lambda + \lambda^2 = \lambda^2 + 4\lambda - 32\) แล้ว "ลบด้วย \(-36\)" คือบวก 36: \(-32 + 36 = 4\):
          \[ \det(A - \lambda I_2) = (4 - \lambda)(-8 - \lambda) + 36 = \lambda^2 + 4\lambda + 4 = (\lambda + 2)^2 = 0 \;\Longrightarrow\; \lambda = -2, -2 \]</li>
          <li><span class="step-t">หา \(E_{-2} = \operatorname{Nul}(A + 2I_2)\)</span> บวก 2 ที่ทแยง (ลบด้วย \(-2\) = บวก 2) → \(\begin{bmatrix} 6 & -9\\ 4 & -6 \end{bmatrix}\) — หารแถวบนด้วย 3 ได้ \(\begin{bmatrix} 2 & -3 \end{bmatrix}\) (แถวล่างเป็น 2 เท่าของแถวบน) สมการ \(2x_1 - 3x_2 = 0 \Rightarrow x_1 = \tfrac{3}{2}x_2\) เลือก \(x_2 = 2\):
          \[ E_{-2} = \operatorname{Span}\left\{ \begin{bmatrix} 3\\ 2 \end{bmatrix} \right\} \;\Longrightarrow\; \operatorname{nullity}(A + 2I_2) = 1 \]</li>
          <li><span class="step-t">ตัดสิน</span> \(\lambda = -2\) ซ้ำ 2 ครั้งแต่ \(\dim E_{-2} = 1 &lt; 2\) → เวกเตอร์ลักษณะเฉพาะอิสระมีแค่ตัวเดียว ไม่พอสร้างฐานหลักของ \(\mathbb{R}^2\) → <strong>ไม่มีฐานหลัก \(B'\) ที่ทำให้ \([T]_{B'}\) เป็นเมทริกซ์ทแยงมุม</strong> (โดยทฤษฎีบท 3.2.5 และ 3.2.6)</li>
        </ol>
        <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(\lambda = -2, -2\) แต่ \(\operatorname{nullity}(A + 2I) = 1\) น้อยกว่าจำนวนการซ้ำ → \(A\) (และ \(T\)) แปลงเป็นทแยงมุมไม่ได้ จึงไม่มีฐานหลัก \(B'\) ดังกล่าว — ตรงตามตำรา</div>
      </div>
    </article>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">แบบฝึกหัด 3.2 ข้อ 7</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">ตัดสิน \(4 \times 4\) จากข้อมูลที่ให้มา — ไม่ต้องคำนวณเมทริกซ์</span></div>
      <div class="ex-body">
        <div class="ex-q">กำหนดให้ \(A\) เป็นเมทริกซ์มิติ \(4 \times 4\) ซึ่งมีค่าลักษณะเฉพาะเป็น \(\lambda = 2, 2, 1, -1\) ถ้า \(\operatorname{nullity}(A - 2I_4) = 2\) แล้ว \(A\) สามารถแปลงเป็นทแยงมุมได้หรือไม่ เพราะเหตุใด</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — ข้อนี้ไม่ให้เมทริกซ์จริงมา ให้ตัดสินจากตัวเลขล้วน ๆ: นับ "เวกเตอร์อิสระที่จะได้" รวมทุกค่าลักษณะเฉพาะ แล้วเทียบกับ \(n = 4\) — ค่าที่ไม่ซ้ำให้เวกเตอร์อิสระอย่างน้อย 1 ตัวเสมอ (ทฤษฎีบท 3.2.1) ส่วนค่าที่ซ้ำต้องดู nullity ที่โจทย์บอกมา</div>
        <ol class="steps">
          <li><span class="step-t">แยกดูทีละค่า</span> \(\lambda = 2\) ซ้ำ 2 ครั้ง: โจทย์บอก \(\operatorname{nullity}(A - 2I_4) = 2\) → \(\dim E_2 = 2\) <em>เท่ากับ</em>จำนวนครั้งที่ซ้ำพอดี ✓ · \(\lambda = 1\) และ \(\lambda = -1\) ไม่ซ้ำ: ได้เวกเตอร์อิสระคนละ 1 ตัว (ทฤษฎีบท 3.2.1: เวกเตอร์ลักษณะเฉพาะของค่าที่ต่างกันเป็นอิสระเชิงเส้น)</li>
          <li><span class="step-t">รวมนับ</span> เวกเตอร์อิสระรวมทั้งหมด \(2 + 1 + 1 = 4 = n\) — และทุกกลุ่มอิสระในตัว รวมกันยังอิสระ (ทฤษฎีบท 3.2.5 ข้อ 3) → มีเวกเตอร์ลักษณะเฉพาะอิสระครบ 4 ตัว</li>
          <li><span class="step-t">ตัดสิน</span> ครบเงื่อนไขของทฤษฎีบท 3.2.3 → เรียงเวกเตอร์ 4 ตัวเป็นหลักของ \(P\) ได้เมทริกซ์ไม่เอกฐาน และ \(D = \operatorname{diag}(2, 2, 1, -1)\) (เรียงตามลำดับหลักของ \(P\))</li>
        </ol>
        <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(A\) <strong>แปลงเป็นทแยงมุมได้</strong> เพราะผลรวมมิติของปริภูมิลักษณะเฉพาะทั้งหมด \(= 2 + 1 + 1 = 4 = n\) (nullity ของค่าซ้ำเท่ากับจำนวนครั้งที่ซ้ำพอดี) — ตรงกับคำตอบท้ายบทของตำรา</div>
      </div>
    </article>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3.2.4</span><span class="tag book">จากตำรา</span><span class="tag hard">ยาก</span><span class="ex-title">แปลงเป็นทแยงมุม + หาสูตร \(A^k\)</span></div>
      <div class="ex-body">
        <div class="ex-q">จงแปลงเมทริกซ์ \(A = \begin{bmatrix} 7 & 2\\ -4 & 1 \end{bmatrix}\) เป็นเมทริกซ์ทแยงมุม นั่นคือ จงหาเมทริกซ์ไม่เอกฐาน \(P\) และเมทริกซ์ทแยงมุม \(D\) ที่ทำให้ \(A = PDP^{-1}\) พร้อมทั้งหาสูตรสำหรับ \(A^k\) สำหรับทุก ๆ จำนวนเต็มบวก \(k\)</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — โจทย์ครบเครื่องของหัวข้อ: หาค่าลักษณะเฉพาะ (สองค่าต่างกัน → diagonalizable ทันที) → หาเวกเตอร์ทีละค่า → ประกอบ \(P, D\) ให้ลำดับจับคู่ถูก → ปิดท้ายด้วย \(A^k = PD^kP^{-1}\) ซึ่ง \(D^k\) แค่ยกกำลังตัวทแยง — นี่คือรางวัลของทั้งบท: คูณเมทริกซ์กำลังสูงได้ในพริบตา</div>
        <ol class="steps">
          <li><span class="step-t">ค่าลักษณะเฉพาะ</span> det = \((7 - \lambda)(1 - \lambda) - (2)(-4)\) — กระจาย: \(7 - 8\lambda + \lambda^2\) แล้วลบด้วย \(-8\) คือบวก 8:
          \[ \det(A - \lambda I_2) = (7 - \lambda)(1 - \lambda) + 8 = \lambda^2 - 8\lambda + 15 = (\lambda - 3)(\lambda - 5) = 0 \;\Longrightarrow\; \lambda = 3, 5 \]
          สองค่าต่างกัน → แปลงเป็นทแยงมุมได้ทันที (ทฤษฎีบท 3.2.1 + บทแทรก 3.2.4)</li>
          <li><span class="step-t">\(\lambda = 3\)</span> \(A - 3I_2 = \begin{bmatrix} 4 & 2\\ -4 & -2 \end{bmatrix} \sim \begin{bmatrix} 1 & \tfrac{1}{2}\\ 0 & 0 \end{bmatrix}\) → \(x_1 = -\tfrac{1}{2}x_2\) เลือก \(x_2 = 2\): \(\vec{v}_1 = \begin{bmatrix} -1\\ 2 \end{bmatrix}\) (ฐานของ \(E_3\))</li>
          <li><span class="step-t">\(\lambda = 5\)</span> \(A - 5I_2 = \begin{bmatrix} 2 & 2\\ -4 & -4 \end{bmatrix} \sim \begin{bmatrix} 1 & 1\\ 0 & 0 \end{bmatrix}\) → \(x_1 = -x_2\) เลือก \(x_2 = 1\): \(\vec{v}_2 = \begin{bmatrix} -1\\ 1 \end{bmatrix}\) (ฐานของ \(E_5\))</li>
          <li><span class="step-t">ประกอบ \(P, D\) และหา \(P^{-1}\)</span> เรียง \(\vec{v}_1, \vec{v}_2\) เป็นหลัก → ทแยงของ \(D\) คือ 3, 5 ตามลำดับ — det \(P = (-1)(1) - (-1)(2) = 1\) จึงหา inverse ได้:
          \[ P = \begin{bmatrix} -1 & -1\\ 2 & 1 \end{bmatrix}, \qquad D = \begin{bmatrix} 3 & 0\\ 0 & 5 \end{bmatrix}, \qquad P^{-1} = \begin{bmatrix} 1 & 1\\ -2 & -1 \end{bmatrix} \]</li>
          <li><span class="step-t">สูตร \(A^k\)</span> เหตุผล: \(A^2 = (PDP^{-1})(PDP^{-1}) = PD^2P^{-1}\) เพราะ \(P^{-1}P = I\) ตรงกลางหักล้าง — ยกกำลัง \(k\) ครั้งได้ \(A^k = PD^kP^{-1}\) โดย \(D^k = \operatorname{diag}(3^k, 5^k)\) คูณต่อกัน:
          \[ A^k = \begin{bmatrix} -1 & -1\\ 2 & 1 \end{bmatrix}\begin{bmatrix} 3^k & 0\\ 0 & 5^k \end{bmatrix}\begin{bmatrix} 1 & 1\\ -2 & -1 \end{bmatrix} = \begin{bmatrix} -3^k + 2\cdot 5^k & -3^k + 5^k\\ 2\cdot 3^k - 2\cdot 5^k & 2\cdot 3^k - 5^k \end{bmatrix} \]
          ลอง \(k = 1\): ช่องซ้ายบน \(-3 + 10 = 7\) ✓, ขวาบน \(-3 + 5 = 2\) ✓, ซ้ายล่าง \(6 - 10 = -4\) ✓, ขวาล่าง \(6 - 5 = 1\) ✓ คืน \(A\) ตัวเดิมทุกช่อง</li>
        </ol>
        <figure class="fig">
          <svg viewBox="0 0 500 308" role="img" aria-label="วิถีของ x, Ax, A2x ที่ค่อย ๆ เอนเข้าหาเส้น eigenvector ของ lambda ที่มีค่าสัมบูรณ์มากที่สุด">
            <defs>
              <marker id="m7a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mka"/></marker>
              <marker id="m7b" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mk1"/></marker>
              <marker id="m7r" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mk2"/></marker>
            </defs>
            <path class="grid" d="M25 20V272M89 20V272M217 20V272M281 20V272M345 20V272M409 20V272M473 20V272M25 30H475M25 158H475M25 222H475"/>
            <path class="ax" d="M20 94H486" marker-end="url(#m7a)"/>
            <path class="ax" d="M153 282V12" marker-end="url(#m7a)"/>
            <text x="25" y="112" text-anchor="middle" class="mut small">−8</text>
            <text x="89" y="112" text-anchor="middle" class="mut small">−4</text>
            <text x="217" y="112" text-anchor="middle" class="mut small">4</text>
            <text x="281" y="112" text-anchor="middle" class="mut small">8</text>
            <text x="345" y="112" text-anchor="middle" class="mut small">12</text>
            <text x="409" y="112" text-anchor="middle" class="mut small">16</text>
            <text x="145" y="226" text-anchor="end" class="mut small">−8</text>
            <text x="145" y="162" text-anchor="end" class="mut small">−4</text>
            <text x="145" y="34" text-anchor="end" class="mut small">4</text>
            <text x="480" y="112" text-anchor="middle" class="mut">x₁</text>
            <text x="145" y="10" text-anchor="end" class="mut">x₂</text>
            <text x="145" y="110" text-anchor="end" class="mut">O</text>
            <path class="thin1" d="M111.4 10.8 191.4 170.8"/>
            <path class="thin3" d="M61.8 2.8 247.4 188.4"/>
            <path class="vec1" d="M153 94 185 78" marker-end="url(#m7b)"/>
            <path class="vec2" d="M153 94 409 206" marker-end="url(#m7r)"/>
            <path class="aux" d="M409 206 490 269" marker-end="url(#m7a)"/>
            <text x="104" y="18" text-anchor="end" class="t1">E₃ (λ = 3)</text>
            <text x="256" y="196" class="t3">E₅ (λ = 5)</text>
            <text x="191" y="72" class="t1">x₀ = (2, 1)</text>
            <text x="300" y="228" class="t2">x₁ = Ax₀ = (16, −7)</text>
            <text x="492" y="284" text-anchor="end" class="mut small">x₂ = (98, −71) →</text>
            <text x="250" y="302" text-anchor="middle" class="mut small">ยิ่งยกกำลังมาก ทิศของ xₖ ยิ่งเอนเข้าเส้น λ = 5 เพราะ 5ᵏ โตเร็วกว่า 3ᵏ</text>
          </svg>
          <figcaption>ทำไม \(A^k = PD^kP^{-1}\) ถึงทำงาน: วาด \(\vec{x}_0 = (2,1)^T\) (น้ำเงิน) แล้วคูณ \(A\) ซ้ำ — \(\vec{x}_1 = (16,-7)^T\) (แดง) เริ่มเอนเข้าหาเส้น \(E_5\), \(\vec{x}_2 = (98,-71)^T\) (เส้นประ ต่อนอกภาพ) เข้าใกล้เส้น \(E_5\) มากขึ้น เพราะเมื่อแตก \(\vec{x}_0 = 3\vec{v}_1 - 5\vec{v}_2\) แล้ว \(A^k\vec{x}_0 = 3^k(3)\vec{v}_1 - 5^k(5)\vec{v}_2\) — พจน์ \(5^k\) กลืน \(3^k\) ไปเอง โดยไม่ต้องคูณเมทริกซ์สักรอบ</figcaption>
        </figure>
        <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(A = PDP^{-1}\) เมื่อ \(P = \begin{bmatrix} -1 & -1\\ 2 & 1 \end{bmatrix}\), \(D = \begin{bmatrix} 3 & 0\\ 0 & 5 \end{bmatrix}\) และ \(A^k = \begin{bmatrix} -3^k + 2\cdot 5^k & -3^k + 5^k\\ 2\cdot 3^k - 2\cdot 5^k & 2\cdot 3^k - 5^k \end{bmatrix}\) สำหรับทุกจำนวนเต็มบวก \(k\) — ตรงตามตำรา (ตรวจ \(k = 2\): \(A^2 = \begin{bmatrix} 41 & 16\\ -32 & -7 \end{bmatrix}\) เท่ากับการคูณ \(A\) สองรอบตรง ๆ ✓)</div>
      </div>
    </article>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">แบบฝึกหัด 3.2 ข้อ 6</span><span class="tag book">จากตำรา</span><span class="tag hard">ยาก</span><span class="ex-title">หาค่า \(h\) ที่ปรับมิติของปริภูมิลักษณะเฉพาะ</span></div>
      <div class="ex-body">
        <div class="ex-q">กำหนดให้
        \[ A = \begin{bmatrix} 5 & -2 & 6 & -1\\ 0 & 3 & h & 0\\ 0 & 0 & 5 & 4\\ 0 & 0 & 0 & 2 \end{bmatrix} \]
        จงหาค่าของ \(h\) ที่ทำให้ปริภูมิลักษณะเฉพาะซึ่งสมนัยกับค่าลักษณะเฉพาะ \(\lambda = 5\) (ก) มีมิติเท่ากับ 1 &nbsp; (ข) มีมิติเท่ากับ 2</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — โจทย์ย้อนทิศ: ไม่ได้ถามค่าลักษณะเฉพาะ แต่ให้ค่าลักษณะเฉพาะแล้วถาม "ปรับ \(h\) อย่างไรให้ปริภูมิลักษณะเฉพาะกว้างหรือแคบ" — กุญแจอยู่ที่เมทริกซ์เป็น<em>สามเหลี่ยม</em>: อ่านค่าลักษณะเฉพาะจากทแยงได้เลย (5 ปรากฏสองครั้ง = ซ้ำสอง) จากนั้นแก้ \((A - 5I_4)\vec{x} = \vec{0}\) โดยมี \(h\) ปนอยู่ แล้วดูว่า \(h\) ค่าใดทำให้เกิดตัวแปรเสรีเพิ่ม</div>
        <ol class="steps">
          <li><span class="step-t">อ่านค่าลักษณะเฉพาะและเขียน \(A - 5I_4\)</span> สามเหลี่ยม → \(\lambda = 5, 3, 5, 2\) (\(\lambda = 5\) ซ้ำ 2 ครั้ง) — ลบ 5 ที่ทแยง:
          \[ A - 5I_4 = \begin{bmatrix} 0 & -2 & 6 & -1\\ 0 & -2 & h & 0\\ 0 & 0 & 0 & 4\\ 0 & 0 & 0 & -3 \end{bmatrix} \]</li>
          <li><span class="step-t">อ่านเงื่อนไขทีละแถว</span> แถวที่ 4: \(-3x_4 = 0 \Rightarrow x_4 = 0\) · แถวที่ 3: \(4x_4 = 0\) (ซ้ำข้อมูลเดิม) · แถวที่ 1 (แทน \(x_4 = 0\)): \(-2x_2 + 6x_3 = 0 \Rightarrow x_2 = 3x_3\) · แถวที่ 2: \(-2x_2 + hx_3 = 0\) — แทน \(x_2 = 3x_3\) ลงไป: \((-6 + h)x_3 = 0\) นี่คือสมการที่ตัดสินทุกอย่าง</li>
          <li><span class="step-t">(ก) มิติ 1 เมื่อ \(h \neq 6\)</span> \((h - 6)x_3 = 0\) โดย \(h - 6 \neq 0\) บังคับ \(x_3 = 0\) → \(x_2 = 0\) → เหลือ \(x_1\) เสรีตัวเดียว เวกเตอร์ฐาน \((1, 0, 0, 0)^T\) → \(\dim E_5 = 1\)</li>
          <li><span class="step-t">(ข) มิติ 2 เมื่อ \(h = 6\)</span> สมการกลายเป็น \(0 = 0\) — แถวที่ 2 ไม่บังคับอะไรอีก (ซ้ำกับแถวที่ 1) → \(x_3\) เสรี: ให้ \(x_1 = 1, x_3 = 0\) ได้ \((1, 0, 0, 0)^T\); ให้ \(x_3 = 1\) ได้ \((0, 3, 1, 0)^T\) → \(\dim E_5 = 2\) — เท่ากับจำนวนครั้งที่ \(\lambda = 5\) ซ้ำพอดี</li>
        </ol>
        <div class="verify"><span class="lbl">สรุปคำตอบ:</span> (ก) \(h \neq 6\) ทำให้ปริภูมิลักษณะเฉพาะของ \(\lambda = 5\) มีมิติ 1 · (ข) \(h = 6\) ทำให้มีมิติ 2 — ตรงกับคำตอบท้ายบทของตำรา</div>
      </div>
    </article>
  </section>

  <section class="block" id="apply">
    <h2><span class="h2-dot">🌍</span> เอาไปใช้ทำอะไร — โจทย์ประยุกต์</h2>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">🐛 ประชากรแมลง 2 วัย — ทำนายหลายฤดูด้วย \(A^k\)</span><span class="tag app">ใช้จริง</span><span class="tag mid">กลาง</span><span class="ex-title">ที่ซึ่ง \(A^k = PD^kP^{-1}\) ช่วยประหยัดเวลาจริง</span></div>
      <div class="ex-body">
        <div class="ex-q">นักกีฏวิทยาเฝ้าดูแมลงหนึ่งชนิดที่มี 2 วัย: วัยอ่อน \(x_1\) และตัวเต็มวัย \(x_2\) (หน่วย: พันตัว) ต่อหนึ่งฤดู: วัยอ่อนรอดอยู่ครึ่งหนึ่ง (\(\tfrac{1}{2}x_1\)), ตัวเต็มวัยแต่ละตัววางไข่ฟักเป็นวัยอ่อนใหม่ 2 ตัว (\(2x_2\)), วัยอ่อน \(\tfrac{1}{4}\) โตเป็นเต็มวัย (\(\tfrac{1}{4}x_1\)) และตัวเต็มวัยตายหมดหลังวางไข่ ฤดูถัดไปจึงได้
        \[ \begin{bmatrix} x_1\\ x_2 \end{bmatrix}_{\text{ฤดู}+1} = \begin{bmatrix} \tfrac{1}{2} & 2\\ \tfrac{1}{4} & 0 \end{bmatrix}\begin{bmatrix} x_1\\ x_2 \end{bmatrix} = A\vec{x} \]
        ปีนี้มีวัยอ่อน 100, เต็มวัย 40 (พันตัว) จงทำนายว่าอีก 10 ฤดู ประชากรเป็นอย่างไร และสัดส่วนวัยจะลงเอยที่เท่าไร</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — คำถาม "อีก 10 ฤดู" คือการหา \(A^{10}\vec{x}\) — คูณ \(A\) ซ้ำสิบรอบได้แต่เขียนโปรแกรมไม่ได้มือ — ท่าที่เรามีคือหา eigenpair ของ \(A\) แล้วแตก \(\vec{x}\) เป็นส่วนผสม พอครบ \(k\) ฤดู ส่วนที่มี \(\lambda\) ตัวใหญ่จะเหลือครองเกม สัดส่วนจะล็อกตามทิศเวกเตอร์ลักษณะเฉพาะของค่านั้น</div>
        <ol class="steps">
          <li><span class="step-t">หาค่าลักษณะเฉพาะ</span> det = \((\tfrac{1}{2} - \lambda)(0 - \lambda) - (2)(\tfrac{1}{4}) = \lambda^2 - \tfrac{1}{2}\lambda - \tfrac{1}{2}\) — ตั้งเป็นศูนย์ คูณ 2 ทั้งสมการ: \(2\lambda^2 - \lambda - 1 = (\lambda - 1)(2\lambda + 1) = 0 \Rightarrow \lambda = 1, -\tfrac{1}{2}\)</li>
          <li><span class="step-t">หาเวกเตอร์ลักษณะเฉพาะ</span> \(\lambda = 1\): \(A - I = \begin{bmatrix} -\tfrac{1}{2} & 2\\ \tfrac{1}{4} & -1 \end{bmatrix}\) → แถวล่าง \(\tfrac{1}{4}x_1 - x_2 = 0 \Rightarrow x_1 = 4x_2\) → \(\vec{v}_1 = (4, 1)^T\) · \(\lambda = -\tfrac{1}{2}\): \(A + \tfrac{1}{2}I = \begin{bmatrix} 1 & 2\\ \tfrac{1}{4} & \tfrac{1}{2} \end{bmatrix}\) → \(x_1 + 2x_2 = 0\) → \(\vec{v}_2 = (-2, 1)^T\) (ตรวจ: \(A(4,1)^T = (2 + 2,\; 1)^T = (4, 1)^T\) ✓)</li>
          <li><span class="step-t">แตก \(\vec{x}_0 = (100, 40)^T\) เป็นส่วนผสม</span> แก้ \(a\vec{v}_1 + b\vec{v}_2 = (100, 40)^T\): \(4a - 2b = 100\), \(a + b = 40\) → แทน \(a = 40 - b\): \(160 - 6b = 100 \Rightarrow b = 10, a = 30\) — เมื่อแตกเป็นส่วนผสมของเวกเตอร์ลักษณะเฉพาะแล้ว ผ่านไป \(k\) ฤดูคือเลิกคูณ \(A\) แล้วยกกำลัง \(k\) ที่สเกลาร์แทน
          \[ \vec{x}_k = 30(1)^k\begin{bmatrix} 4\\ 1 \end{bmatrix} + 10\left(-\tfrac{1}{2}\right)^k\begin{bmatrix} -2\\ 1 \end{bmatrix} \]</li>
          <li><span class="step-t">อ่านผลที่ \(k = 10\)</span> \((-\tfrac{1}{2})^{10} = \tfrac{1}{1024} \approx 0.001\) แทบเป็นศูนย์ → \(\vec{x}_{10} \approx 30(4, 1)^T = (120, 30)^T\) — วัยอ่อนราว 120,000 ตัว เต็มวัย 30,000 ตัว รวม 150,000 ตัว สัดส่วน \(4:1\) เป๊ะ (ตรวจด้วยการคูณ \(A\) สิบรอบจริงได้ \((119.98, 30.01)\) ✓)</li>
        </ol>
        <figure class="fig">
          <svg viewBox="0 0 460 260" role="img" aria-label="วิถีประชากร x0 ถึง x6 สลับซ้ายขวาแล้วลู่เข้าหาเส้นทิศ eigenvector 4,1">
            <defs>
              <marker id="m8a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="mka"/></marker>
            </defs>
            <path class="grid" d="M84.5 30V230M179.5 30V230M274.5 30V230M369.5 30V230M18 58.5H436M18 106H436M18 153.5H436M18 201H436"/>
            <text x="84.5" y="219" text-anchor="middle" class="mut small">10</text>
            <text x="179.5" y="219" text-anchor="middle" class="mut small">11</text>
            <text x="274.5" y="219" text-anchor="middle" class="mut small">12</text>
            <text x="369.5" y="219" text-anchor="middle" class="mut small">13</text>
            <text x="14" y="205" class="mut small">2.5</text>
            <text x="14" y="157.5" class="mut small">3</text>
            <text x="14" y="110" class="mut small">3.5</text>
            <text x="14" y="62.5" class="mut small">4</text>
            <text x="436" y="238" text-anchor="end" class="mut small">x₁ ÷ 10 (พันตัว)</text>
            <text x="14" y="26" class="mut small">x₂ ÷ 10</text>
            <path class="thin1" d="M18 217.6 436 113.1"/>
            <text x="352" y="100" class="t1 small">ทิศ v₁ = (4, 1)</text>
            <path class="aux" d="M84.5 58.5 369.5 201" marker-end="url(#m8a)"/>
            <path class="aux" d="M369.5 201 227 129.8" marker-end="url(#m8a)"/>
            <path class="aux" d="M227 129.8 298.2 165.4" marker-end="url(#m8a)"/>
            <path class="aux" d="M298.2 165.4 262.6 147.6" marker-end="url(#m8a)"/>
            <path class="aux" d="M262.6 147.6 280.4 156.4" marker-end="url(#m8a)"/>
            <path class="aux" d="M280.4 156.4 271.6 152" marker-end="url(#m8a)"/>
            <circle cx="84.5" cy="58.5" r="3.2" class="pt1"/>
            <circle cx="369.5" cy="201" r="3.2" class="pt1"/>
            <circle cx="227" cy="129.8" r="3.2" class="pt1"/>
            <circle cx="298.2" cy="165.4" r="3.2" class="pt1"/>
            <circle cx="262.6" cy="147.6" r="3.2" class="pt1"/>
            <circle cx="280.4" cy="156.4" r="3.2" class="pt1"/>
            <circle cx="271.6" cy="152" r="3.2" class="pt1"/>
            <text x="84.5" y="46" text-anchor="middle" class="mut small">k=0</text>
            <text x="377" y="214" class="mut small">k=1</text>
            <text x="219" y="118" text-anchor="end" class="mut small">k=2</text>
            <text x="306" y="178" class="mut small">k=3</text>
            <text x="270" y="144" class="mut small">k=4</text>
            <text x="272" y="172" text-anchor="end" class="mut small">k=5</text>
            <text x="262" y="142" text-anchor="end" class="mut small">k=6</text>
            <text x="230" y="245" text-anchor="middle" class="t3 small">k → ∞ : xₖ → (120, 30) อยู่บนเส้น v₁ พอดี — สัดส่วน 4 : 1</text>
          </svg>
          <figcaption>วิถีจริงของประชากร \(\vec{x}_k = 30(1)^k(4,1)^T + 10(-\tfrac12)^k(-2,1)^T\) (หน่วยย่อ 10 เท่าเพื่อดูง่าย): จุด \(k = 0, 1, 2, \dots\) สลับข้างเส้น \(v_1 = (4,1)^T\) ไปมา (เพราะ \((-\tfrac12)^k\) สลับเครื่องหมาย) แต่แรงสั่นนั้นจืดลงเร็ว — ประชากรลู่เข้าสู่ทิศ eigenvector ของ \(\lambda = 1\) จนสัดส่วนวัยอ่อน : เต็มวัย = 4 : 1 คงที่ ตรงกับคำตอบ \(\vec{x}_{10} \approx (120, 30)\)</figcaption>
        </figure>
        <div class="verify"><span class="lbl">เห็นไหมว่า...</span> พอแตกด้วย eigenvector แล้ว \(A^{10}\) กลายเป็น "ยกกำลังสองเลข" (\(1^{10}\) กับ \((-\tfrac{1}{2})^{10}\)) — โมเดลประชากรแบบนี้ (Leslie matrix) ใช้จริงในการจัดการประมง แมลงศัตรูพืช และสัตว์ใกล้สูญพันธุ์ โดยค่าลักษณะเฉพาะที่ใหญ่สุดบอก "อัตราโตระยะยาว" และเวกเตอร์ลักษณะเฉพาะของมันบอก "โครงสร้างอายุที่คงตัว" ที่ประชากรจะลงเอยด้วย</div>
      </div>
    </article>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">🌐 PageRank — จัดอันดับเว็บ 3 หน้า</span><span class="tag app">ใช้จริง</span><span class="tag mid">กลาง</span><span class="ex-title">ความสำคัญของหน้าเว็บ = เวกเตอร์ลักษณะเฉพาะของ \(\lambda = 1\)</span></div>
      <div class="ex-body">
        <div class="ex-q">เว็บเล็ก ๆ มี 3 หน้า: หน้า A ลิงก์ไป B และ C (หน้าละครึ่งคะแนน), หน้า B ลิงก์ไป C เท่านั้น, หน้า C ลิงก์ไป A เท่านั้น ให้ \(M\) เป็นเมทริกซ์ที่หลักที่ \(j\) คือ "การกระจายคะแนนของหน้า \(j\)"
        \[ M = \begin{bmatrix} 0 & 0 & 1\\ \tfrac{1}{2} & 0 & 0\\ \tfrac{1}{2} & 1 & 0 \end{bmatrix} \]
        คะแนนความสำคัญ \(\vec{r} = (r_A, r_B, r_C)^T\) ที่สมดุลคือเวกเตอร์ที่ \(M\vec{r} = \vec{r}\) จงหา \(\vec{r}\) (ให้ผลรวมเท่ากับ 1)</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — สมการ \(M\vec{r} = \vec{r}\) อ่านได้ว่า "ถ้ากระจายคะแนนตามลิงก์หนึ่งรอบแล้วคะแนนไม่เปลี่ยน" — นิยามเดียวกับ \(\lambda = 1\) เป๊ะ! งานของเราคือหาเวกเตอร์ลักษณะเฉพาะของ \(M\) สมนัยกับ \(\lambda = 1\) โดยแก้ \((M - I)\vec{r} = \vec{0}\) แบบระบบเอกพันธุ์ธรรมดา</div>
        <ol class="steps">
          <li><span class="step-t">ตั้งระบบ \((M - I_3)\vec{r} = \vec{0}\)</span> ลบ 1 ที่ทแยง:
          \[ \begin{bmatrix} -1 & 0 & 1\\ \tfrac{1}{2} & -1 & 0\\ \tfrac{1}{2} & 1 & -1 \end{bmatrix}\vec{r} = \vec{0} \;\Longrightarrow\; \begin{aligned} -r_A + r_C &= 0\\ \tfrac{1}{2}r_A - r_B &= 0\\ \tfrac{1}{2}r_A + r_B - r_C &= 0 \end{aligned} \]</li>
          <li><span class="step-t">แก้ระบบ</span> สมการแรกให้ \(r_C = r_A\) · สมการที่สองให้ \(r_B = \tfrac{1}{2}r_A\) · สมการที่สามตรวจ: \(\tfrac{1}{2}r_A + \tfrac{1}{2}r_A = r_A = r_C\) ✓ (ข้อมูลซ้ำ ไม่ขัดแย้ง) → ให้ \(r_A = 2\): \(\vec{r} = (2, 1, 2)^T\)</li>
          <li><span class="step-t">ปรับให้ผลรวมเป็น 1</span> ผลรวม \(2 + 1 + 2 = 5\) → \(\vec{r} = (\tfrac{2}{5}, \tfrac{1}{5}, \tfrac{2}{5})^T = (0.4, 0.2, 0.4)^T\) — หน้า A กับ C สำคัญเท่ากัน ส่วน B สำคัญครึ่งหนึ่ง (ตรวจ: หน้า A รับคะแนนจาก C เต็ม ๆ = 0.4 ✓, หน้า B รับครึ่งของ A = 0.2 ✓, หน้า C รับ \(\tfrac{1}{2}A + B = 0.2 + 0.2 = 0.4\) ✓)</li>
        </ol>
        <div class="verify"><span class="lbl">เห็นไหมว่า...</span> ค่าลักษณะเฉพาะ \(\lambda = 1\) ไม่ใช่แค่โจทย์ในห้องเรียน — PageRank ต้นฉบับของ Google คือการหาเวกเตอร์ลักษณะเฉพาะของ \(\lambda = 1\) ของเมทริกซ์ลิงก์ขนาดพันล้านหลัก และ "ทำไมจึงมี \(\lambda = 1\) เสมอ" ก็เพราะเมทริกซ์แต่ละหลักรวมได้ 1 (คะแนนไม่หายไปไหน) — โจทย์เดียวกับที่คุณเพิ่งทำ แค่คูณด้วยขนาดอินเทอร์เน็ต</div>
      </div>
    </article>
  </section>

  <section class="block" id="recipe">
  <h2><span class="h2-dot">⚡</span> สูตรสำเร็จ — ท่าที่ใช้ทำโจทย์หัวข้อนี้</h2>
  <div class="recipe">
    <div class="recipe-head">🪜 ท่าหลัก: แปลง \(A\) เป็นทแยงมุม</div>
    <div class="recipe-body">
      <ol>
        <li>หาค่าลักษณะเฉพาะ: แก้ \(\det(A - \lambda I) = 0\) (2×2 ใช้ \(\lambda^2 - (\text{trace})\lambda + \det A\); 3×3 กระจายโคแฟกเตอร์ แล้วแยกตัวประกอบ — ลองแทน \(\lambda = \pm1, \pm2\) ก่อนเสมอ)</li>
        <li>หาเวกเตอร์ลักษณะเฉพาะ: แก้ \((A - \lambda I)\vec{x} = \vec{0}\) ทีละค่า → เวกเตอร์ฐานของ \(\operatorname{Nul}(A - \lambda I)\)</li>
        <li>เรียง eigenvectors เป็น<strong>หลักของ \(P\)</strong> และค่า \(\lambda\) ที่สมนัยเรียง<strong>ตามลำดับเดียวกัน</strong>ลงทแยงของ \(D\) → \(A = PDP^{-1}\)</li>
        <li>หา \(A^k\): \(A^k = PD^kP^{-1}\) โดย \(D^k\) = ยกกำลังเฉพาะทแยง</li>
        <li>ตรวจ: \(A\vec{v}_i = \lambda_i\vec{v}_i\) ทุกหลัก และ \(P^{-1}AP\) ต้องได้ \(D\)</li>
      </ol>
    </div>
  </div>
  <div class="key-grid">
    <div class="key-card"><div class="k-title">ท่า: ตรวจ diagonalizable เร็ว</div>ค่าลักษณะเฉพาะต่างกัน \(n\) ค่า → ได้เลย / มีซ้ำ → นับ \(\dim E_\lambda\) ทุกค่า ต้อง = จำนวนครั้งซ้ำ</div>
    <div class="key-card"><div class="k-title">ท่า: เช็กเลขของ char. poly</div>trace \(A\) = ผลบวกค่าลักษณะเฉพาะ, det \(A\) = ผลคูณ — ใช้จับพลาดการแยกตัวประกอบ</div>
    <div class="key-card"><div class="k-title">ท่า: ค่าลักษณะเฉพาะของเมทริกซ์สามเหลี่ยม</div>= สมาชิกบนทแยงมุมหลักทั้งหมด (ไม่ต้องคำนวณ det)</div>
    <div class="key-card"><div class="k-title">ท่า: \(P\) สลับหลักได้</div>สลับหลักของ \(P\) ต้องสลับทแยงของ \(D\) ตาม — คู่ \(P, D\) ตอบได้หลายแบบ (เวกเตอร์คูณสเกลาร์ก็ยังถูก)</div>
  </div>
</section>

<section class="block" id="practice">
  <h2><span class="h2-dot">🏋️</span> โจทย์ซ้อมมือ (6 ข้อ)</h2>
  <p class="small">ลองทำเองก่อน แล้วค่อยกดเปิดคำใบ้ → เฉลยทีละขั้น เมื่อทำได้แล้วติ๊ก ✓ เพื่อบันทึกความคืบหน้า</p>

  <article class="pr-card" data-pkey="p3-2-1">
    <div class="pr-head"><span class="pr-num">ข้อ 1</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(A = \begin{bmatrix} 2 & 3\\ 3 & 2 \end{bmatrix}\) จงตรวจว่า \(\vec{u} = \begin{bmatrix} 1\\ 1 \end{bmatrix}\) และ \(\vec{w} = \begin{bmatrix} 1\\ -1 \end{bmatrix}\) เป็นเวกเตอร์ลักษณะเฉพาะของ \(A\) หรือไม่ ถ้าเป็น จงหาค่าลักษณะเฉพาะที่สมนัย</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">คูณ \(A\vec{u}\) กับ \(A\vec{w}\) แล้วดูว่าเป็นสเกลาร์เท่าของตัวเดิมไหม</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> \(A\vec{v} = \lambda\vec{v}\) — ภาพต้องอยู่ทางเดียวกับตัวเอง กลยุทธ์ของข้อนี้: คูณเมทริกซ์กับเวกเตอร์แต่ละตัวรอบเดียว (ช่องละหนึ่งการ "แถว · เวกเตอร์") แล้วมองว่าผลลัพธ์เป็นตัวเวกเตอร์เดิมคูณเลขอะไรอยู่ — ถ้าทิศไม่เปลี่ยนก็เป็น eigenvector และเลขคูณนั้นคือ \(\lambda\) (แลมบ์ดา = ค่าลักษณะเฉพาะ)</p>
      <ol class="steps">
        <li><span class="step-t">เช็ก \(\vec{u}\)</span> คูณช่องต่อช่อง: ช่องบน = \(2(1) + 3(1) = 2 + 3 = 5\), ช่องล่าง = \(3(1) + 2(1) = 3 + 2 = 5\):
        \[ A\vec{u} = \begin{bmatrix} 2+3\\ 3+2 \end{bmatrix} = \begin{bmatrix} 5\\ 5 \end{bmatrix} = 5\vec{u} \;\Longrightarrow\; \lambda = 5 \]
        ผลลัพธ์ทุกช่องคูณ 5 เท่าของ \(\vec{u}\) พอดี → ทิศเดิม เป็น eigenvector ที่ \(\lambda = 5\)</li>
        <li><span class="step-t">เช็ก \(\vec{w}\)</span> ระวังเครื่องหมาย: ช่องบน = \(2(1) + 3(-1) = 2 - 3 = -1\), ช่องล่าง = \(3(1) + 2(-1) = 3 - 2 = 1\):
        \[ A\vec{w} = \begin{bmatrix} 2-3\\ 3-2 \end{bmatrix} = \begin{bmatrix} -1\\ 1 \end{bmatrix} = -1\cdot\vec{w} \;\Longrightarrow\; \lambda = -1 \]
        ผลลัพธ์เป็น \(\vec{w}\) คูณ \(-1\) (กลับหัว 180°) — ยังนับเป็น "ทิศเดียวกัน" ในความหมายของ eigenvector → เป็น eigenvector ที่ \(\lambda = -1\)</li>
        <li><span class="step-t">สรุปและตรวจ</span> ทั้งคู่เป็น eigenvector โดย \(\lambda = 5\) (สำหรับ \(\vec{u}\)) และ \(\lambda = -1\) (สำหรับ \(\vec{w}\)) ตรวจด้วย trace/det: trace \(= 2 + 2 = 4 = 5 + (-1)\) ✓ det \(= 2\cdot2 - 3\cdot3 = 4 - 9 = -5 = 5(-1)\) ✓ ทั้งผลบวกและผลคูณตรง — สรุปคำตอบ: \(\vec{u}\) เป็น eigenvector กับ \(\lambda = 5\), \(\vec{w}\) เป็น eigenvector กับ \(\lambda = -1\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p3-2-2">
    <div class="pr-head"><span class="pr-num">ข้อ 2</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาค่าลักษณะเฉพาะทั้งหมดของ \(A = \begin{bmatrix} 1 & -2\\ 1 & 4 \end{bmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(\det(A - \lambda I_2) = (1-\lambda)(4-\lambda) + 2\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> แก้สมการลักษณะเฉพาะ กลยุทธ์ของข้อนี้: เขียน \(\det(A - \lambda I_2) = 0\) ให้เป็นพหุนามดีกรี 2 ของ \(\lambda\) (คิด det ด้วยสูตรทแยงลง − ทแยงขึ้น โดยระวังช่อง \(-2\) ที่ติดลบอยู่แล้ว) จากนั้นแยกตัวประกอบและตั้งแต่ละตัวประกอบเป็นศูนย์ ปิดท้ายด้วยการตรวจ trace/det ทุกครั้งเพื่อจับพลาดการแยกตัวประกอบ</p>
      <ol class="steps">
        <li><span class="step-t">หาพหุนามลักษณะเฉพาะ</span> det = (ทแยงลงคูณกัน) − (ทแยงขึ้นคูณกัน) = \((1-\lambda)(4-\lambda) - (-2)(1)\) — กระจาย \((1-\lambda)(4-\lambda) = 4 - \lambda - 4\lambda + \lambda^2 = 4 - 5\lambda + \lambda^2\) แล้วลบด้วย \((-2)(1) = -2\) ซึ่งเท่ากับ "บวก 2" (ลบด้วยเลขลบ = บวก): \(4 + 2 = 6\):
        \[ \det(A - \lambda I_2) = (1-\lambda)(4-\lambda) - (-2)(1) = \lambda^2 - 5\lambda + 4 + 2 = \lambda^2 - 5\lambda + 6 \]</li>
        <li><span class="step-t">แยกตัวประกอบ</span> หาสองจำนวนที่คูณกันได้ 6 และบวกกันได้ \(-5\) → คือ \(-2\) กับ \(-3\) (ทดลองแทน \(\lambda = 2\) จากตัวประกอบของค่าคงตัว: \(4 - 10 + 6 = 0\) ✓ และ \(\lambda = 3\): \(9 - 15 + 6 = 0\) ✓) — เมื่อผลคูณเป็นศูนย์ ตัวใดตัวหนึ่งต้องเป็นศูนย์:
        \[ (\lambda - 2)(\lambda - 3) = 0 \;\Longrightarrow\; \lambda = 2, \; 3 \]</li>
        <li><span class="step-t">ตรวจและสรุป</span> trace \(= 1 + 4 = 5 = 2 + 3\) ✓ det \(= 1\cdot4 - (-2)(1) = 4 + 2 = 6 = 2 \times 3\) ✓ ทั้งคู่ตรง → ไม่มีพลาด — สรุปคำตอบ: ค่าลักษณะเฉพาะทั้งหมดของ \(A\) คือ \(\lambda = 2\) และ \(\lambda = 3\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p3-2-3">
    <div class="pr-head"><span class="pr-num">ข้อ 3</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(A = \begin{bmatrix} 4 & -2\\ 1 & 1 \end{bmatrix}\) (มีค่าลักษณะเฉพาะ \(\lambda = 2\) และ \(3\)) จงหาปริภูมิลักษณะเฉพาะ \(E_2\) และ \(E_3\) พร้อมฐานหลักของแต่ละปริภูมิ</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">แก้ \((A - 2I)\vec{x} = \vec{0}\) และ \((A - 3I)\vec{x} = \vec{0}\) แยกกัน</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> \(E_\lambda = \operatorname{Nul}(A - \lambda I)\) กลยุทธ์ของข้อนี้: โจทย์ให้ค่าลักษณะเฉพาะมาแล้ว (ไม่ต้องหาเอง) เหลือหน้าที่เดียวคือไปหา "ผลเฉลยทั้งหมด" ของ \((A - \lambda I)\vec{x} = \vec{0}\) ทีละค่า — เขียนเมทริกซ์ \(A - \lambda I\) (ลบ \(\lambda\) ที่ทแยง), ลดรูป, ตั้งตัวแปรเสรี แล้วเลือกค่าที่ทำให้เวกเตอร์ฐานสวย ๆ (ไม่มีเศษส่วน)</p>
      <ol class="steps">
        <li><span class="step-t">กรณี \(\lambda = 2\)</span> ลบ 2 ออกจากทแยง: \(4 \to 2\), \(1 \to -1\) (ช่อง \(-2, 1\) คงเดิม) — ลดรูป: หารแถวบนด้วย 2 (\(2 \div 2 = 1\), \(-2 \div 2 = -1\)) แล้ว \(R_2 - R_1\) (\(1 - 1 = 0\), \(-1 - (-1) = 0\)) ได้แถวศูนย์:
        \[ A - 2I_2 = \begin{bmatrix} 2 & -2\\ 1 & -1 \end{bmatrix} \sim \begin{bmatrix} 1 & -1\\ 0 & 0 \end{bmatrix} \;\Longrightarrow\; x_1 = x_2 \;\Longrightarrow\; E_2 = \operatorname{Span}\left\{ \begin{bmatrix} 1\\ 1 \end{bmatrix} \right\} \]
        (จากสมการ \(x_1 - x_2 = 0\): เลือก \(x_2 = 1\) → \(x_1 = 1\) ได้เวกเตอร์ฐาน \((1, 1)^T\))</li>
        <li><span class="step-t">กรณี \(\lambda = 3\)</span> ลบ 3 ออกจากทแยง: \(4 \to 1\), \(1 \to -2\) — แถวล่าง \(R_2 - R_1\) (\(1 - 1 = 0\), \(-2 - (-2) = 0\)) ได้แถวศูนย์:
        \[ A - 3I_2 = \begin{bmatrix} 1 & -2\\ 1 & -2 \end{bmatrix} \sim \begin{bmatrix} 1 & -2\\ 0 & 0 \end{bmatrix} \;\Longrightarrow\; x_1 = 2x_2 \;\Longrightarrow\; E_3 = \operatorname{Span}\left\{ \begin{bmatrix} 2\\ 1 \end{bmatrix} \right\} \]
        (จาก \(x_1 - 2x_2 = 0\): เลือก \(x_2 = 1\) → \(x_1 = 2\))</li>
        <li><span class="step-t">ตรวจคำตอบและสรุป</span> ทดสอบ \(A\vec{v} = \lambda\vec{v}\) ด้วยเลขจริง: \(A(1,1) = (4(1) + (-2)(1),\; 1(1) + 1(1)) = (2, 2) = 2(1,1)\) ✓ และ \(A(2,1) = (4(2) + (-2)(1),\; 1(2) + 1(1)) = (8 - 2,\; 2 + 1) = (6, 3) = 3(2,1)\) ✓ — และเวกเตอร์ 2 ตัวนี้ก็คือฐานหลัก \(B'\) ในโจทย์ซ้อมข้อ 5 ของหัวข้อ 3.1 ที่ทำให้ \([T]_{B'} = \operatorname{diag}(2, 3)\) พอดี! — สรุปคำตอบ: \(E_2 = \operatorname{Span}\{(1,1)^T\}\) ฐานหลักคือ \((1,1)^T\), \(E_3 = \operatorname{Span}\{(2,1)^T\}\) ฐานหลักคือ \((2,1)^T\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p3-2-4">
    <div class="pr-head"><span class="pr-num">ข้อ 4</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงแปลง \(A = \begin{bmatrix} 0 & 2\\ 3 & 1 \end{bmatrix}\) เป็นเมทริกซ์ทแยงมุม (หา \(P, D\) ที่ \(A = PDP^{-1}\)) แล้วเขียนสูตร \(A^k\) และหา \(A^3\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(\lambda^2 - \lambda - 6 = 0\) → \(\lambda = 3, -2\) / \(\lambda = 3\): \(v = (2, 3)^T\), \(\lambda = -2\): \(v = (1, -1)^T\) / \(P^{-1} = \begin{bmatrix} \tfrac{1}{5} & \tfrac{1}{5}\\ \tfrac{3}{5} & -\tfrac{2}{5} \end{bmatrix}\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ตามขั้นตอนมาตรฐาน 5 ขั้น กลยุทธ์ของข้อนี้: (1) แก้ \(\det(A - \lambda I) = 0\) หาค่าลักษณะเฉพาะ — ได้สองค่าต่างกันจึงมั่นใจได้เลยว่า diagonalizable (2) แก้ \((A - \lambda I)\vec{x} = \vec{0}\) หาเวกเตอร์ทีละค่า (3) ประกอบ \(P, D\) ให้ลำดับจับคู่ถูกต้อง (4) หา \(P^{-1}\) แล้วเขียนสูตร \(A^k\) (5) แทน \(k = 3\) หา \(A^3\) และตรวจด้วยการคูณตรง</p>
      <ol class="steps">
        <li><span class="step-t">ค่าลักษณะเฉพาะ</span> det = \((0-\lambda)(1-\lambda) - (2)(3)\) — กระจายพจน์แรก: \(-\lambda(1-\lambda) = -\lambda + \lambda^2\) และ \(2\cdot3 = 6\) จึงได้ \(\lambda^2 - \lambda - 6\) — หาสองจำนวนคูณกันได้ \(-6\) บวกกันได้ \(-1\) → คือ \(3\) กับ \(-2\) (ทดลองแทน \(\lambda = 3\): \(9 - 3 - 6 = 0\) ✓):
        \[ \det(A - \lambda I_2) = -\lambda(1-\lambda) - 6 = \lambda^2 - \lambda - 6 = (\lambda - 3)(\lambda + 2) = 0 \;\Longrightarrow\; \lambda = 3, -2 \]</li>
        <li><span class="step-t">เวกเตอร์ลักษณะเฉพาะ</span> กรณี \(\lambda = 3\): ลบ 3 ที่ทแยง → \(A - 3I_2 = \begin{bmatrix} -3 & 2\\ 3 & -2 \end{bmatrix}\) (ช่อง \(0 \to -3\), \(1 \to -2\)) ใช้ \(R_2 + R_1\) ได้แถวศูนย์ สมการ \(-3x_1 + 2x_2 = 0 \Rightarrow 3x_1 = 2x_2 \Rightarrow x_2 = \tfrac{3}{2}x_1\) เลือก \(x_1 = 2\) (กำจัดเศษส่วน) → \(x_2 = 3\) → \(\vec{v}_1 = (2, 3)^T\); กรณี \(\lambda = -2\): <em>บวก</em> 2 ที่ทแยง (ลบด้วย \(-2\) = บวก 2) → \(A + 2I_2 = \begin{bmatrix} 2 & 2\\ 3 & 3 \end{bmatrix}\) ใช้ \(R_2 - \tfrac{3}{2}R_1\) ได้แถวศูนย์ สมการ \(2x_1 + 2x_2 = 0 \Rightarrow x_1 = -x_2\) เลือก \(x_2 = -1\) → \(\vec{v}_2 = (1, -1)^T\)</li>
        <li><span class="step-t">ประกอบ \(P, D\)</span> เอา \(\vec{v}_1 = (2, 3)^T\) เป็นหลักแรก → ทแยงแรกของ \(D\) คือ 3, \(\vec{v}_2 = (1, -1)^T\) เป็นหลักสอง → ทแยงสองคือ \(-2\) (<em>เพราะ</em>หลัก \(P\) กับทแยง \(D\) ต้องเป็นคู่ eigenvector–eigenvalue เดียวกันตามลำดับ) — \(P^{-1}\): det \(P = 2(-1) - 1(3) = -2 - 3 = -5\) สลับทแยง เปลี่ยนเครื่องหมายตัวนอก (\(-1 \to -1\) ... ตัวนอกคือ \(1, 3 \to -1, -3\)) แล้วหารด้วย \(-5\): \(\frac{-1}{-5} = \tfrac{1}{5}\), \(\frac{-3}{-5} = \tfrac{3}{5}\), \(\frac{2}{-5} = -\tfrac{2}{5}\):
        \[ P = \begin{bmatrix} 2 & 1\\ 3 & -1 \end{bmatrix}, \qquad D = \begin{bmatrix} 3 & 0\\ 0 & -2 \end{bmatrix}, \qquad P^{-1} = \frac{1}{-5}\begin{bmatrix} -1 & -1\\ -3 & 2 \end{bmatrix} = \begin{bmatrix} \tfrac{1}{5} & \tfrac{1}{5}\\ \tfrac{3}{5} & -\tfrac{2}{5} \end{bmatrix} \]</li>
        <li><span class="step-t">สูตร \(A^k\) และค่า \(A^3\)</span> \(D^3\) = ยกกำลังทแยง: \(3^3 = 27\), \((-2)^3 = -8\) (ลบคูณลบคูณลบ = ลบ) — คูณ \(PD^3\) ก่อน (หลักแรกคูณ 27, หลักสองคูณ \(-8\)): \(\begin{bmatrix} 2\cdot27 & 1\cdot(-8)\\ 3\cdot27 & (-1)(-8) \end{bmatrix} = \begin{bmatrix} 54 & -8\\ 81 & 8 \end{bmatrix}\) แล้วคูณต่อด้วย \(P^{-1}\): ช่องซ้ายบน = \((54, -8)\cdot(\tfrac15, \tfrac35) = \tfrac{54}{5} - \tfrac{24}{5} = \tfrac{30}{5} = 6\), ช่องขวาบน = \((54, -8)\cdot(\tfrac15, -\tfrac25) = \tfrac{54}{5} + \tfrac{16}{5} = \tfrac{70}{5} = 14\), ช่องซ้ายล่าง = \((81, 8)\cdot(\tfrac15, \tfrac35) = \tfrac{81}{5} + \tfrac{24}{5} = \tfrac{105}{5} = 21\), ช่องขวาล่าง = \((81, 8)\cdot(\tfrac15, -\tfrac25) = \tfrac{81}{5} - \tfrac{16}{5} = \tfrac{65}{5} = 13\):
        \[ A^k = PD^kP^{-1} = \begin{bmatrix} 2 & 1\\ 3 & -1 \end{bmatrix}\begin{bmatrix} 3^k & 0\\ 0 & (-2)^k \end{bmatrix}\begin{bmatrix} \tfrac{1}{5} & \tfrac{1}{5}\\ \tfrac{3}{5} & -\tfrac{2}{5} \end{bmatrix} \]
        \[ A^3 = \begin{bmatrix} 2 & 1\\ 3 & -1 \end{bmatrix}\begin{bmatrix} 27 & 0\\ 0 & -8 \end{bmatrix}\begin{bmatrix} \tfrac{1}{5} & \tfrac{1}{5}\\ \tfrac{3}{5} & -\tfrac{2}{5} \end{bmatrix} = \begin{bmatrix} 54 & -8\\ 81 & 8 \end{bmatrix}\begin{bmatrix} \tfrac{1}{5} & \tfrac{1}{5}\\ \tfrac{3}{5} & -\tfrac{2}{5} \end{bmatrix} = \begin{bmatrix} 6 & 14\\ 21 & 13 \end{bmatrix} \]</li>
        <li><span class="step-t">ตรวจคำตอบ</span> คูณตรงช้า ๆ: \(A^2 = \begin{bmatrix} 0 & 2\\ 3 & 1 \end{bmatrix}\begin{bmatrix} 0 & 2\\ 3 & 1 \end{bmatrix} = \begin{bmatrix} 0+6 & 0+2\\ 0+3 & 6+1 \end{bmatrix} = \begin{bmatrix} 6 & 2\\ 3 & 7 \end{bmatrix}\), \(A^3 = A^2A = \begin{bmatrix} 6 & 2\\ 3 & 7 \end{bmatrix}\begin{bmatrix} 0 & 2\\ 3 & 1 \end{bmatrix} = \begin{bmatrix} 0+6 & 12+2\\ 0+21 & 6+7 \end{bmatrix} = \begin{bmatrix} 6 & 14\\ 21 & 13 \end{bmatrix}\) ✓ ตรงกับวิธี diagonalization ทุกช่อง! — สรุปคำตอบ: \(A = PDP^{-1}\) เมื่อ \(P = \begin{bmatrix} 2 & 1\\ 3 & -1 \end{bmatrix}\), \(D = \operatorname{diag}(3, -2)\) และ \(A^3 = \begin{bmatrix} 6 & 14\\ 21 & 13 \end{bmatrix}\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p3-2-5">
    <div class="pr-head"><span class="pr-num">ข้อ 5</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงแสดงว่า \(A = \begin{bmatrix} 4 & 0 & 1\\ -2 & 1 & 0\\ -2 & 0 & 1 \end{bmatrix}\) แปลงเป็นเมทริกซ์ทแยงมุมได้ โดยหา \(P\) และ \(D\) ที่ \(A = PDP^{-1}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">char. poly = \((\lambda - 1)(\lambda - 2)(\lambda - 3)\) / เวกเตอร์ลักษณะเฉพาะ: \(\lambda=1\): \((0,1,0)^T\), \(\lambda=2\): \((1,-2,-2)^T\), \(\lambda=3\): \((1,-1,-1)^T\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ค่าลักษณะเฉพาะต่างกัน 3 ค่า → ต้อง diagonalizable ตามทฤษฎีบท 3.2.1 + 3.2.3 กลยุทธ์ของข้อนี้: หาค่าลักษณะเฉพาะจากพหุนามลักษณะเฉพาะก่อน (ทดลองแทนตัวหารของค่าคงตัว 6) แล้วแก้ \((A - \lambda I)\vec{x} = \vec{0}\) ทีละค่าเพื่อเก็บ eigenvector ครบ 3 ตัว เรียงเป็นหลักของ \(P\) พร้อมค่า \(\lambda\) เรียงตามใน \(D\) และปิดท้ายด้วยการทดสอบ \(A\vec{v}_i = \lambda_i\vec{v}_i\) ทุกตัว</p>
      <ol class="steps">
        <li><span class="step-t">พหุนามลักษณะเฉพาะ</span> กระจายโคแฟกเตอร์ตามแถวที่ 1 แล้วแยกตัวประกอบ — ค่าคงตัวคือ 6 ทดลองแทน \(\lambda = 1\): \(-1 + 6 - 11 + 6 = 0\) ✓, \(\lambda = 2\): \(-8 + 24 - 22 + 6 = 0\) ✓, \(\lambda = 3\): \(-27 + 54 - 33 + 6 = 0\) ✓ เจอรากครบสามค่า (ดีกรี 3 มีรากได้มากที่สุด 3 ค่า จึงแยกได้หมดพอดี):
        \[ \det(A - \lambda I_3) = -\lambda^3 + 6\lambda^2 - 11\lambda + 6 = -(\lambda - 1)(\lambda - 2)(\lambda - 3) = 0 \;\Longrightarrow\; \lambda = 1, 2, 3 \]</li>
        <li><span class="step-t">หา \(E_1\)</span> ลบ 1 ที่ทแยง: \(4 \to 3\), \(1 \to 0\), \(1 \to 0\) ได้ \(A - I_3 = \begin{bmatrix} 3 & 0 & 1\\ -2 & 0 & 0\\ -2 & 0 & 0 \end{bmatrix}\) — แถวกลางบอก \(-2x_1 = 0 \Rightarrow x_1 = 0\) แทนลงแถวบน: \(3(0) + 0 + x_3 = 0 \Rightarrow x_3 = 0\) เหลือ \(x_2\) เสรี เลือก \(x_2 = 1\) → \(\vec{v}_1 = (0, 1, 0)^T\) (ทำไมได้: หลักที่ 2 ของเมทริกซ์เป็นศูนย์หมด ไม่มีสมการใดผูก \(x_2\))</li>
        <li><span class="step-t">หา \(E_2\)</span> ลบ 2 ที่ทแยง: \(4 \to 2\), \(1 \to -1\), \(1 \to -1\) ได้ \(A - 2I_3 = \begin{bmatrix} 2 & 0 & 1\\ -2 & -1 & 0\\ -2 & 0 & -1 \end{bmatrix}\) — แถวกลาง: \(-2x_1 - x_2 = 0 \Rightarrow x_2 = -2x_1\); แถวบน: \(2x_1 + x_3 = 0 \Rightarrow x_3 = -2x_1\) เลือก \(x_1 = 1\) → \(\vec{v}_2 = (1, -2, -2)^T\) (แถวล่าง \(-2x_1 - x_3 = 0\) ให้ข้อมูลซ้ำกับแถวบน ไม่เพิ่มเงื่อนไขใหม่)</li>
        <li><span class="step-t">หา \(E_3\)</span> ลบ 3 ที่ทแยง: \(4 \to 1\), \(1 \to -2\), \(1 \to -2\) ได้ \(A - 3I_3 = \begin{bmatrix} 1 & 0 & 1\\ -2 & -2 & 0\\ -2 & 0 & -2 \end{bmatrix}\) — แถวบน: \(x_1 + x_3 = 0 \Rightarrow x_3 = -x_1\); แถวกลาง: \(-2x_1 - 2x_2 = 0 \Rightarrow x_2 = -x_1\) เลือก \(x_1 = 1\) → \(\vec{v}_3 = (1, -1, -1)^T\)</li>
        <li><span class="step-t">ประกอบ \(P, D\)</span> เรียง \(\vec{v}_1, \vec{v}_2, \vec{v}_3\) เป็นหลัก แล้วใส่ \(\lambda = 1, 2, 3\) บนทแยงของ \(D\) ตามลำดับเดียวกัน — ตรวจ \(P\) ไม่เอกฐานด้วย det: กระจายตามแถวที่ 1: \(0\cdot\det(\cdot) - 1\cdot(1\cdot(-1) - (-1)\cdot0) + 1\cdot(1\cdot(-2) - (-2)\cdot0) = 0 - 1\cdot(-1) + 1\cdot(-2) = 1 - 2 = -1\):
        \[ P = \begin{bmatrix} 0 & 1 & 1\\ 1 & -2 & -1\\ 0 & -2 & -1 \end{bmatrix}, \qquad D = \begin{bmatrix} 1 & 0 & 0\\ 0 & 2 & 0\\ 0 & 0 & 3 \end{bmatrix} \qquad (\det P = -1 \neq 0 \Rightarrow P \text{ ไม่เอกฐาน} \checkmark) \]</li>
        <li><span class="step-t">ตรวจคำตอบ</span> ทดสอบ \(A\vec{v}_i = \lambda_i\vec{v}_i\) ทีละตัวด้วยเลขจริง: \(A\vec{v}_1 = A(0,1,0)^T = (0, 1, 0)^T = \vec{v}_1\) ✓ (ช่องแรก: \(4(0) + 0(1) + 1(0) = 0\) ฯลฯ) \(A\vec{v}_2 = A(1,-2,-2)^T = (4 + 0 - 2,\; -2 + 2 + 0,\; -2 + 0 - 2)^T = (2, -4, -4)^T = 2\vec{v}_2\) ✓ และ \(A\vec{v}_3 = A(1,-1,-1)^T = (4 - 1,\; -2 + 1,\; -2 - 1)^T = (3, -3, -3)^T = 3\vec{v}_3\) ✓ — สรุปคำตอบ: \(A\) แปลงเป็นทแยงมุมได้ โดย \(A = PDP^{-1}\) เมื่อ \(P = \begin{bmatrix} 0 & 1 & 1\\ 1 & -2 & -1\\ 0 & -2 & -1 \end{bmatrix}\), \(D = \operatorname{diag}(1, 2, 3)\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p3-2-6">
    <div class="pr-head"><span class="pr-num">ข้อ 6</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงพิจารณาว่าเมทริกซ์ต่อไปนี้แปลงเป็นทแยงมุมได้หรือไม่ ถ้าได้จงหา \(P, D\) ถ้าไม่ได้จงอธิบายเหตุผล<br>
      (ก) \(A = \begin{bmatrix} 2 & 1\\ 0 & 2 \end{bmatrix}\) &nbsp;&nbsp;
      (ข) \(B = \begin{bmatrix} 2 & 0 & 0\\ 0 & 2 & 0\\ 1 & 0 & 5 \end{bmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">ทั้งคู่มีค่าลักษณะเฉพาะซ้ำ — ชี้ชวนอยู่ที่ว่า \(\dim E_\lambda\) ของค่าที่ซ้ำพอหรือไม่</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ค่าซ้ำไม่ใช่คำตัดสิน — ให้นับจำนวนเวกเตอร์ลักษณะเฉพาะอิสระจริง ๆ กลยุทธ์ของข้อนี้: ทั้ง (ก) และ (ข) มีค่าลักษณะเฉพาะซ้ำ (เห็นได้ทันทีเพราะเป็นเมทริกซ์สามเหลี่ยม — ค่าลักษณะเฉพาะ = เลขบนทแยง) แต่ผลลัพธ์ต่างกัน! ต้องไปแก้ \((A - \lambda I)\vec{x} = \vec{0}\) ของค่าที่ซ้ำแล้วนับเวกเตอร์อิสระเทียบกับจำนวนครั้งที่ซ้ำ — นี่คือข้อที่แยก "จำกฎ" ออกจาก "เข้าใจกฎ" ชัดที่สุด</p>
      <ol class="steps">
        <li><span class="step-t">(ก) ค่าลักษณะเฉพาะ</span> สามเหลี่ยม → det คือผลคูณทแยง → \(\det(A - \lambda I_2) = (2-\lambda)(2-\lambda) = (2-\lambda)^2\) → \(\lambda = 2\) ซ้ำ 2 ครั้ง</li>
        <li><span class="step-t">(ก) หา \(E_2\)</span> ลบ 2 ที่ทแยง: \(2 \to 0\) ทั้งคู่ (ช่อง 1 คงเดิม) — แถวบนบอก \(x_2 = 0\), ส่วน \(x_1\) เสรี เลือก \(x_1 = 1\):
        \[ A - 2I_2 = \begin{bmatrix} 0 & 1\\ 0 & 0 \end{bmatrix} \;\Longrightarrow\; x_2 = 0 \;\Longrightarrow\; E_2 = \operatorname{Span}\{(1,0)^T\}, \dim = 1 &lt; 2 \]
        → <strong>\(A\) แปลงเป็นทแยงมุมไม่ได้</strong> (<em>เพราะ</em> \(\lambda = 2\) ซ้ำ 2 ครั้งแต่ \(\dim E_2 = 1\) — เวกเตอร์อิสระได้แค่ตัวเดียว รวมไม่ครบ \(n = 2\) ตามเงื่อนไขทฤษฎีบท 3.2.3)</li>
        <li><span class="step-t">(ข) ค่าลักษณะเฉพาะ</span> สามเหลี่ยม → อ่านจากทแยงได้เลย → \(\lambda = 2, 2, 5\)</li>
        <li><span class="step-t">(ข) หา \(E_2\)</span> ลบ 2 ที่ทแยง: \(2 \to 0\) สองช่อง, \(5 \to 3\) ได้แถวบนสองแถวเป็นศูนย์หมด (ตัวแปร \(x_1, x_2\) จึงถูกปล่อยอิสระจากสองแถวนั้น) เหลือแถวล่างบอก \(x_1 + 3x_3 = 0\) — ให้ \(x_2 = 1, x_3 = 0\) → \((0, 1, 0)^T\); ให้ \(x_2 = 0, x_3 = 1\) → \(x_1 = -3\) → \((-3, 0, 1)^T\) (ลบ 3 ย้ายข้าง):
        \[ B - 2I_3 = \begin{bmatrix} 0 & 0 & 0\\ 0 & 0 & 0\\ 1 & 0 & 3 \end{bmatrix} \;\Longrightarrow\; x_1 + 3x_3 = 0 \;\Longrightarrow\; x_2, x_3 \text{ เสรี} \;\Longrightarrow\; E_2 = \operatorname{Span}\{(0,1,0)^T, (-3,0,1)^T\}, \dim = 2 \checkmark \]</li>
        <li><span class="step-t">(ข) หา \(E_5\) และสรุป</span> ลบ 5 ที่ทแยง: \(2 \to -3\) สองช่อง, \(5 \to 0\) → แถวบน: \(-3x_1 = 0 \Rightarrow x_1 = 0\), แถวกลาง: \(-3x_2 = 0 \Rightarrow x_2 = 0\) (แถวล่าง \(x_1 = 0\) ซ้ำข้อมูลเดิม) \(x_3\) เสรี เลือก \(x_3 = 1\) → \(\vec{v}_3 = (0, 0, 1)^T\) รวมทั้งหมดได้ \(2 + 1 = 3\) เวกเตอร์อิสระครบ \(n = 3\) → <strong>\(B\) แปลงเป็นทแยงมุมได้</strong> (<em>เพราะ</em>ค่าซ้ำ \(\lambda = 2\) ให้ \(\dim E_2 = 2\) เท่ากับจำนวนครั้งที่ซ้ำพอดี) โดย
        \[ P = \begin{bmatrix} 0 & -3 & 0\\ 1 & 0 & 0\\ 0 & 1 & 1 \end{bmatrix}, \qquad D = \begin{bmatrix} 2 & 0 & 0\\ 0 & 2 & 0\\ 0 & 0 & 5 \end{bmatrix} \]
        (ตรวจ: \(B(0,1,0)^T = (0,2,0)^T = 2(0,1,0)\) ✓ (แถวกลาง: \(0 + 2(1) + 0 = 2\)) \(B(-3,0,1)^T = (-6,0,2)^T = 2(-3,0,1)\) ✓ (แถวบน: \(2(-3) = -6\), แถวล่าง: \(-3 + 5(1) = 2\)) \(B(0,0,1)^T = (0,0,5)^T = 5(0,0,1)\) ✓)</li>
        <li><span class="step-t">บทเรียนจากข้อนี้</span> ค่าลักษณะเฉพาะซ้ำอาจ diagonalizable ได้หรือไม่ได้ก็ได้ — (ก) ซ้ำแล้วได้เวกเตอร์ไม่พอ = ไม่ได้, (ข) ซ้ำแล้วได้เวกเตอร์พอ = ได้ — ตัดสินด้วย \(\dim E_\lambda\) เทียบจำนวนครั้งซ้ำเสมอ อย่าเดาจากพหุนามอย่างเดียว — สรุปคำตอบ: (ก) แปลงเป็นทแยงมุมไม่ได้ (ข) ได้ โดย \(P, D\) ด้านบน</li>
      </ol>
    </div></details>
  </article>
</section>
