<!-- meta
title: 4.5 รูปแบบกำลังสอง
ch: 4
section: 4.5
page: ch4-5.html
-->

<div class="crumb">บทที่ 4 · เรขาคณิตเชิงเส้นและฐานหลักเชิงตั้งฉาก</div>
<h1 class="page-title">4.5 รูปแบบกำลังสอง</h1>
<p class="page-sub">ปิดบทที่ 4 — เปลี่ยนรูปแบบกำลังสอง \(Q(\vec{x}) = \vec{x}^TA\vec{x}\) ด้วยการเปลี่ยนตัวแปร \(\vec{x} = P\vec{y}\)
ให้เหลือแต่กำลังสองล้วน (ไม่มีพจน์ไขว้) เห็นหน้าของวงรี/ไฮเปอร์โบลา และจำแนก positive definite ด้วยค่าลักษณะเฉพาะ</p>

<nav class="pillnav">
  <a href="#objectives">🎯 จุดประสงค์</a>
  <a href="#lesson">📖 บทเรียน</a>
  <a href="#examples">✏️ ตัวอย่างโจทย์</a>
  <a href="#recipe">⚡ สูตรสำเร็จ</a>
  <a href="#practice">🏋️ โจทย์ซ้อมมือ</a>
</nav>

<section class="block" id="objectives">
  <div class="obj">
    <h2>🎯 เรียนจบหัวข้อนี้ คุณต้องทำสิ่งเหล่านี้ได้</h2>
    <ul>
      <li>เขียนรูปแบบกำลังสองในรูป \(\vec{x}^TA\vec{x}\) และหาเมทริกซ์สมมาตร \(A\) ของมัน</li>
      <li>ใช้ทฤษฎีบทแกนมุขสำคัญ (Principal Axis Theorem): เปลี่ยนตัวแปร \(\vec{x} = P\vec{y}\) ให้ไม่มีพจน์ไขว้ → \(\vec{y}^TD\vec{y}\)</li>
      <li>จำแนก conic (วงรี/ไฮเปอร์โบลา/พาราโบลา) จากรูปที่ไม่มีพจน์ไขว้</li>
      <li>จำแนกรูปแบบกำลังสองว่าบวกแน่นอน/ลบแน่นอน/ไม่แน่นอน จากเครื่องหมายค่าลักษณะเฉพาะ และหาค่า \(k\) ที่กำหนด</li>
    </ul>
  </div>
</section>

<section class="block" id="lesson">
  <h2><span class="h2-dot">📖</span> บทเรียน</h2>

  <h3>1) รูปแบบกำลังสอง (quadratic form)</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยามและเมทริกซ์ของรูปแบบกำลังสอง</div>
    <p><strong>รูปแบบกำลังสอง</strong>คือฟังก์ชันที่ทุกพจน์มีดีกรี 2 เช่น \(Q(x_1, x_2) = 3x_1^2 + 6x_2^2 - 4x_1x_2\) — เขียนเป็นเมทริกซ์ได้เสมอ:</p>
    \[ Q(\vec{x}) = \vec{x}^TA\vec{x} \]
    <p>โดย \(A\) <strong>สมมาตร</strong>: สัมประสิทธิ์กำลังสอง \(x_i^2\) ลงทแยง \(a_{ii}\) ส่วนสัมประสิทธิ์ของ \(x_ix_j\) (\(i \ne j\)) แบ่งครึ่งลง \(a_{ij} = a_{ji}\) — เช่น \(Q = 3x_1^2 + 6x_2^2 - 4x_1x_2\) มี \(A = \begin{bmatrix} 3 & -2\\ -2 & 6 \end{bmatrix}\) และ \(Q = x_1x_2\) มี \(A = \begin{bmatrix} 0 & 1/2\\ 1/2 & 0 \end{bmatrix}\)</p>
  </div>

  <h3>2) ทฤษฎีบทแกนมุขสำคัญ (Principal Axis Theorem)</h3>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 4.5.1</div>
    <p>ให้ \(A\) สมมาตร จะมีการเปลี่ยนตัวแปร \(\vec{x} = P\vec{y}\) (\(P\) เชิงตั้งฉากปรกติ จากการแปลงทแยงมุมเชิงตั้งฉากของ \(A\)) ซึ่งทำให้</p>
    \[ \vec{x}^TA\vec{x} = (P\vec{y})^TA(P\vec{y}) = \vec{y}^T(P^TAP)\vec{y} = \vec{y}^TD\vec{y} = \lambda_1y_1^2 + \cdots + \lambda_ny_n^2 \]
    <p>— ไม่มีพจน์ผลคูณไขว้แล้ว! แกนพิกัดใหม่ \(y_1, y_2\) อยู่ตามทิศ eigenvector พอดี (จึงเรียก "แกนมุขสำคัญ")</p>
  </div>
  <div class="box box-idea">
    <div class="box-title">💡 ใช้จำแนก conic</div>
    <p>สมการ \(Q(\vec{x}) = c\) เมื่อเปลี่ยนตัวแปรแล้วกลายเป็น \(\lambda_1y_1^2 + \lambda_2y_2^2 = c\):</p>
    <p>• \(\lambda\) ทั้งคู่เครื่องหมายเดียวกัน → <strong>วงรี</strong> (ellipse) &nbsp;• เครื่องหมายต่างกัน → <strong>ไฮเปอร์โบลา</strong> &nbsp;• ค่าใดค่าหนึ่งเป็น 0 → <strong>พาราโบลา</strong></p>
  </div>

  <h3>3) การจำแนกเครื่องหมาย (definiteness)</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม</div>
    <p>รูปแบบกำลังสอง \(Q\) เป็น</p>
    <p>• <strong>บวกแน่นอน</strong> (positive definite) เมื่อ \(Q(\vec{x}) > 0\) ทุก \(\vec{x} \neq \vec{0}\) [บวกกึ่งแน่นอน: \(\geq 0\)]</p>
    <p>• <strong>ลบแน่นอน</strong> (negative definite) เมื่อ \(Q(\vec{x}) &lt; 0\) ทุก \(\vec{x} \neq \vec{0}\) [ลบกึ่งแน่นอน: \(\leq 0\)]</p>
    <p>• <strong>ไม่แน่นอน</strong> (indefinite) เมื่อ \(Q(\vec{x})\) ได้ทั้งค่าบวกและลบ</p>
  </div>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 4.5.2 — ตัดสินด้วยค่าลักษณะเฉพาะ</div>
    <p>\(Q(\vec{x}) = \vec{x}^TA\vec{x}\) เมื่อ \(A\) สมมาตร:</p>
    <p>• <strong>บวกแน่นอน</strong> ⇔ ค่าลักษณะเฉพาะทุกตัว &gt; 0 &nbsp;• <strong>ลบแน่นอน</strong> ⇔ ทุกตัว &lt; 0 &nbsp;• <strong>ไม่แน่นอน</strong> ⇔ มีทั้งบวกและลบ</p>
    <p>(มี 0 ปนแต่ไม่มีเครื่องหมายตรงข้าม → กึ่งแน่นอน) — ง่ายมากเพราะ \(Q = \lambda_1y_1^2 + \cdots + \lambda_ny_n^2\) หลังเปลี่ยนตัวแปร</p>
  </div>
</section>

<section class="block" id="examples">
  <h2><span class="h2-dot">✏️</span> ตัวอย่างโจทย์</h2>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 1</span><span class="tag easy">ง่าย</span><span class="ex-title">หาเมทริกซ์ของรูปแบบกำลังสอง</span></div>
    <div class="ex-body">
      <div class="ex-q">จงหาเมทริกซ์สมมาตร \(A\) ของรูปแบบกำลังสอง (ก) \(Q = 3x_1^2 + 6x_2^2 - 4x_1x_2\) &nbsp; (ข) \(Q = x_1x_2\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — กำลังสองลงทแยง / ไขว้หารสองกระจายสองข้าง</div>
      <ol class="steps">
        <li><span class="step-t">(ก)</span> กำลังสอง: \(3, 6\) ลงทแยง; ไขว้ \(-4x_1x_2\): หาร 2 ได้ \(-2\) →
        \[ A = \begin{bmatrix} 3 & -2\\ -2 & 6 \end{bmatrix} \]</li>
        <li><span class="step-t">(ข)</span> ไม่มีกำลังสอง (ทแยง = 0); ไขว้ \(1\cdot x_1x_2\): หาร 2 ได้ \(\tfrac12\) →
        \[ A = \begin{bmatrix} 0 & 1/2\\ 1/2 & 0 \end{bmatrix} \]</li>
        <li><span class="step-t">ตรวจคำตอบ</span> คูณกลับ: \(\vec{x}^TA\vec{x} = 3x_1^2 + 6x_2^2 - 2x_1x_2 - 2x_2x_1 = 3x_1^2 + 6x_2^2 - 4x_1x_2\) ✓</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2</span><span class="tag hard">ยาก</span><span class="ex-title">เปลี่ยนตัวแปรให้ไม่มีพจน์ไขว้ + จำแนก conic (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(Q(x_1, x_2) = 3x_1^2 + 6x_2^2 - 4x_1x_2\) จงหาการเปลี่ยนตัวแปร \(\vec{x} = P\vec{y}\) ซึ่งทำให้ \(Q\) ไม่มีพจน์ไขว้ แล้วบอกหน้าของกราฟ \(3x_1^2 + 6x_2^2 - 4x_1x_2 = 14\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — orthogonally diagonalize \(A\) → \(P, D\) → \(Q = \vec{y}^TD\vec{y}\) → อ่านหน้า conic และ definiteness</div>
      <ol class="steps">
        <li><span class="step-t">ค่าลักษณะเฉพาะของ \(A = \begin{bmatrix} 3 & -2\\ -2 & 6 \end{bmatrix}\)</span>
        \[ \det(A - \lambda I_2) = (3-\lambda)(6-\lambda) - 4 = \lambda^2 - 9\lambda + 14 = (\lambda - 2)(\lambda - 7) = 0 \;\Longrightarrow\; \lambda = 2, 7 \]</li>
        <li><span class="step-t">eigenvectors แล้วปรับหนึ่งหน่วย</span> \(\lambda = 2\): \(x_1 = 2x_2 \Rightarrow \vec{u}_1 = \tfrac{1}{\sqrt5}(2, 1)^T\); \(\lambda = 7\): \(x_1 = -\tfrac12x_2 \Rightarrow \vec{u}_2 = \tfrac{1}{\sqrt5}(1, -2)^T\) (ตั้งฉากกัน ✓)</li>
        <li><span class="step-t">เปลี่ยนตัวแปร \(\vec{x} = P\vec{y}\)</span>
        \[ P = \frac{1}{\sqrt5}\begin{bmatrix} 2 & 1\\ 1 & -2 \end{bmatrix}, \qquad D = \begin{bmatrix} 2 & 0\\ 0 & 7 \end{bmatrix} \;\Longrightarrow\; Q = \vec{y}^TD\vec{y} = 2y_1^2 + 7y_2^2 \]</li>
        <li><span class="step-t">อ่านหน้ากราฟ</span> \(3x_1^2 + 6x_2^2 - 4x_1x_2 = 14\) กลายเป็น \(2y_1^2 + 7y_2^2 = 14\) — ทั้งสองพจน์บวก → <strong>วงรี</strong>ที่มีแกนสัมพัทธ์กับแกน \(y_1, y_2\) (แกนใหม่เอียงตาม eigenvector) — และเพราะ \(\lambda = 2, 7 > 0\) \(Q\) เป็น<strong>บวกแน่นอน</strong></li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> แทนจุด \(\vec{x} = (2,1)^T\) (บนทิศ \(\vec{u}_1\)): \(Q = 12 + 6 - 8 = 10 = 2\lambda_1\)? — ตรวจด้วย \(\vec{y} = P^T\vec{x} = (\tfrac{5}{\sqrt5}, 0)^T = (\sqrt5, 0)^T\): \(2y_1^2 = 2(5) = 10\) ✓ ตรงกัน</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3</span><span class="tag hard">ยาก</span><span class="ex-title">จำแนก definiteness (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">จงพิจารณาว่ารูปแบบกำลังสองต่อไปนี้เป็นบวกแน่นอน ลบแน่นอน หรือไม่แน่นอน<br>
      (ก) \(Q(x_1, x_2) = 3x_1^2 + 6x_2^2 - 4x_1x_2\) &nbsp; (ข) \(Q(x_1, x_2, x_3) = x_1^2 + 3x_2^2 + x_3^2 + 2x_1x_2 + 6x_1x_3 + 2x_2x_3\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — หาเมทริกซ์ → หาค่าลักษณะเฉพาะ → ดูเครื่องหมาย (ทฤษฎีบท 4.5.2)</div>
      <ol class="steps">
        <li><span class="step-t">(ก)</span> จากตัวอย่าง 2: \(\lambda = 2, 7\) ทั้งคู่บวก → <strong>บวกแน่นอน</strong></li>
        <li><span class="step-t">(ข) หาเมทริกซ์</span>
        \[ A = \begin{bmatrix} 1 & 1 & 3\\ 1 & 3 & 1\\ 3 & 1 & 1 \end{bmatrix} \]</li>
        <li><span class="step-t">(ข) ค่าลักษณะเฉพาะ</span> กระจายโคแฟกเตอร์:
        \[ \det(A - \lambda I_3) = -(\lambda + 2)(\lambda - 2)(\lambda - 5) = 0 \;\Longrightarrow\; \lambda = -2, 2, 5 \]
        มีทั้งบวก (\(2, 5\)) และลบ (\(-2\)) → <strong>ไม่แน่นอน</strong> (เช่น \(Q(1,0,0) = 1 > 0\) แต่ \(Q(-1, 1, -1)^T?\) — ลองเวกเตอร์ของ \(\lambda = -2\) จะได้ค่าติดลบ)</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 4</span><span class="tag hard">ยาก</span><span class="ex-title">หาค่า \(k\) ที่ทำให้บวกแน่นอน</span></div>
    <div class="ex-body">
      <div class="ex-q">จงหาค่าของ \(k\) ทั้งหมดที่ทำให้ \(Q(x_1, x_2) = x_1^2 + kx_2^2 - 4x_1x_2\) เป็นรูปแบบกำลังสองบวกแน่นอน</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — บวกแน่นอน ⇔ ค่าลักษณะเฉพาะทุกตัว &gt; 0 — สำหรับ 2×2 ใช้เงื่อนไข trace &gt; 0 และ det &gt; 0</div>
      <ol class="steps">
        <li><span class="step-t">เมทริกซ์และเงื่อนไข</span> \(A = \begin{bmatrix} 1 & -2\\ -2 & k \end{bmatrix}\): บวกแน่นอน ⇔ \(\operatorname{tr} A > 0\) และ \(\det A > 0\) (ค่าลักษณะเฉพาะรวม = trace &gt; 0, คูณ = det &gt; 0 บังคับให้ทั้งคู่บวก)</li>
        <li><span class="step-t">คำนวณเงื่อนไข</span>
        \[ \operatorname{tr} A = 1 + k > 0 \;\Longleftarrow\; k > -1, \qquad \det A = k - 4 > 0 \;\Longleftrightarrow\; k > 4 \]</li>
        <li><span class="step-t">สรุป</span> ต้องการทั้งสองเงื่อนไขพร้อมกัน → \(k > 4\) (เมื่อ \(k = 4\) ได้ \(\lambda = 0\) → บวกกึ่งแน่นอนเท่านั้น; \(k &lt; 4\) ค่าลักษณะเฉพาะติดลบ → ไม่แน่นอน)</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> \(k = 5\): \(\lambda^2 - 6\lambda - 3\)? — \(\det = 1 > 0\), trace \(= 6 > 0\) → ทั้งคู่บวก ✓ / \(k = 4\): \(\lambda^2 - 5\lambda + 0 = \lambda(\lambda - 5)\) → \(\lambda = 0\) ปน → กึ่งแน่นอน ✓</div>
    </div>
  </article>
</section>

<section class="block" id="recipe">
  <h2><span class="h2-dot">⚡</span> สูตรสำเร็จ — ท่าที่ใช้ทำโจทย์หัวข้อนี้</h2>
  <div class="recipe">
    <div class="recipe-head">🪜 ท่าหลัก: กำจัดพจน์ไขว้และจำแนกเครื่องหมาย</div>
    <div class="recipe-body">
      <ol>
        <li>เขียนรูปแบบกำลังสองเป็น \(\vec{x}^TA\vec{x}\): กำลังสองลงทแยง, สัมประสิทธิ์ไขว้<strong>หาร 2</strong> กระจายสองข้าง</li>
        <li>แปลงทแยงมุมเชิงตั้งฉาก \(A = PDP^T\) (เหมือน 4.4 ทุกประการ)</li>
        <li>เปลี่ยนตัวแปร \(\vec{x} = P\vec{y}\) → \(Q = \lambda_1y_1^2 + \cdots + \lambda_ny_n^2\) (ไม่มีไขว้) — สมการ \(Q = c\) ก็แปลงตามพร้อมพจน์เชิงเส้น/ค่าคงตัว</li>
        <li>จำแนก conic: λ เครื่องหมายเดียวกัน = วงรี / ต่างเครื่องหมาย = ไฮเปอร์โบลา / มี λ = 0 = พาราโบลา</li>
        <li>จำแนก definiteness ด้วยเครื่องหมาย λ: ทั้งหมดบวก = บวกแน่นอน / ทั้งหมดลบ = ลบแน่นอน / ปน = ไม่แน่นอน</li>
      </ol>
    </div>
  </div>
  <div class="key-grid">
    <div class="key-card"><div class="k-title">ท่า: หา k ให้บวกแน่นอน (2×2)</div>trace &gt; 0 และ det &gt; 0 — เร็วกว่าการหาค่าลักษณะเฉพาะตรง ๆ</div>
    <div class="key-card"><div class="k-title">ท่า: ตรวจเมทริกซ์ของ Q</div>คูณกลับ \(\vec{x}^TA\vec{x}\) แล้วพจน์ไขว้ต้องรวมกลับเป็นสัมประสิทธิ์เดิม (สองครั้ง \(\tfrac{c}{2}\))</div>
    <div class="key-card"><div class="k-title">ท่า: สมการที่มีพจน์เชิงเส้น</div>พจน์เชิงเส้น \(\vec{b}^T\vec{x}\) แปลงเป็น \(\vec{b}^TP\vec{y}\) — เขียนเวกเตอร์สัมประสิทธิ์แล้วคูณ \(P\)</div>
    <div class="key-card"><div class="k-title">ท่า: อ่านความหมาย</div>บวกแน่นอน = กราฟชาม (minimum จริง) / ลบแน่นอน = โดม (maximum จริง) / ไม่แน่นอน = อานม้า (saddle)</div>
  </div>
</section>

<section class="block" id="practice">
  <h2><span class="h2-dot">🏋️</span> โจทย์ซ้อมมือ (6 ข้อ)</h2>
  <p class="small">ลองทำเองก่อน แล้วค่อยกดเปิดคำใบ้ → เฉลยทีละขั้น เมื่อทำได้แล้วติ๊ก ✓ เพื่อบันทึกความคืบหน้า</p>

  <article class="pr-card" data-pkey="p4-5-1">
    <div class="pr-head"><span class="pr-num">ข้อ 1</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาเมทริกซ์ของรูปแบบกำลังสอง (ก) \(Q = -5x_1^2 - 2x_2^2 + 4x_1x_2\) &nbsp; (ข) \(Q = 5x_1^2 + 3x_2^2 + 2x_1x_2\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">ไขว้ \(4x_1x_2\) → หาร 2 = 2 ลงสองตำแหน่ง / ไขว้ \(2x_1x_2\) → 1</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> กำลังสองลงทแยง ไขว้หารสอง</p>
      <ol class="steps">
        <li><span class="step-t">(ก)</span>
        \[ A = \begin{bmatrix} -5 & 2\\ 2 & -2 \end{bmatrix} \]</li>
        <li><span class="step-t">(ข)</span>
        \[ A = \begin{bmatrix} 5 & 1\\ 1 & 3 \end{bmatrix} \]</li>
        <li><span class="step-t">ตรวจคำตอบ (ก)</span> \(\vec{x}^TA\vec{x} = -5x_1^2 - 2x_2^2 + 2x_1x_2 + 2x_2x_1 = -5x_1^2 - 2x_2^2 + 4x_1x_2\) ✓</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p4-5-2">
    <div class="pr-head"><span class="pr-num">ข้อ 2</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาค่าของ \(\vec{x}^TA\vec{x}\) เมื่อ \(A = \begin{bmatrix} 5 & \tfrac12\\ \tfrac12 & -1 \end{bmatrix}\) และ \(\vec{x} = \begin{bmatrix} 2\\ -2 \end{bmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">คูณ \(A\vec{x}\) ก่อน แล้วจุดกับ \(\vec{x}\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> คูณเมทริกซ์สองขั้น</p>
      <ol class="steps">
        <li><span class="step-t">\(A\vec{x}\)</span>
        \[ A\vec{x} = \begin{bmatrix} 10 - 1\\ 1 + 2 \end{bmatrix} = \begin{bmatrix} 9\\ 3 \end{bmatrix} \]</li>
        <li><span class="step-t">\(\vec{x}^T(A\vec{x})\)</span>
        \[ \vec{x}^TA\vec{x} = (2)(9) + (-2)(3) = 18 - 6 = 12 \]</li>
        <li><span class="step-t">ตรวจด้วยกระจายตรง</span> \(5(4) + 2(\tfrac12)(2)(-2) + (-1)(4) = 20 - 4 - 4 = 12\) ✓</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p4-5-3">
    <div class="pr-head"><span class="pr-num">ข้อ 3</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(Q(x_1, x_2) = 5x_1^2 + 5x_2^2 - 6x_1x_2\) จงเปลี่ยนตัวแปร \(\vec{x} = P\vec{y}\) ที่ทำให้ \(Q\) ไม่มีพจน์ไขว้ จำแนกว่า \(Q\) บวกแน่นอน/ลบแน่นอน/ไม่แน่นอน และบอกหน้าของกราฟ \(Q = 4\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(A = \begin{bmatrix} 5 & -3\\ -3 & 5 \end{bmatrix}\): \(\lambda = 8, 2\) / \(\lambda = 8\): \(\vec{u}_1 = \tfrac{1}{\sqrt2}(1,-1)^T\), \(\lambda = 2\): \(\vec{u}_2 = \tfrac{1}{\sqrt2}(1,1)^T\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ตามขั้นตอนมาตรฐาน</p>
      <ol class="steps">
        <li><span class="step-t">ค่าลักษณะเฉพาะ</span> \(\det(A - \lambda I_2) = (5-\lambda)^2 - 9 = \lambda^2 - 10\lambda + 16 = (\lambda - 8)(\lambda - 2) = 0 \Rightarrow \lambda = 8, 2\)</li>
        <li><span class="step-t">eigenvectors</span> \(\lambda = 8\): \(x_1 = -x_2 \Rightarrow \vec{u}_1 = \tfrac{1}{\sqrt2}(1,-1)^T\); \(\lambda = 2\): \(x_1 = x_2 \Rightarrow \vec{u}_2 = \tfrac{1}{\sqrt2}(1,1)^T\)</li>
        <li><span class="step-t">เปลี่ยนตัวแปร</span>
        \[ P = \frac{1}{\sqrt2}\begin{bmatrix} 1 & 1\\ -1 & 1 \end{bmatrix}, \quad D = \begin{bmatrix} 8 & 0\\ 0 & 2 \end{bmatrix} \;\Longrightarrow\; Q = 8y_1^2 + 2y_2^2 \]</li>
        <li><span class="step-t">จำแนก</span> \(\lambda = 8, 2 > 0\) → <strong>บวกแน่นอน</strong> และ \(8y_1^2 + 2y_2^2 = 4\) เป็น<strong>วงรี</strong></li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p4-5-4">
    <div class="pr-head"><span class="pr-num">ข้อ 4</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(Q(x_1, x_2) = x_1^2 + x_2^2 - 4x_1x_2\) จงเปลี่ยนตัวแปร \(\vec{x} = P\vec{y}\) ให้ไม่มีพจน์ไขว้ จำแนก definiteness และบอกหน้าของกราฟ \(Q = 6\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">เมทริกซ์เดียวกับตัวอย่าง 1 ของหัวข้อ 4.4: \(\lambda = 3, -1\) / \(\lambda = 3\): \((1,-1)^T\), \(\lambda = -1\): \((1,1)^T\) หนึ่งหน่วย</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> มีค่าลักษณะเฉพาะต่างเครื่องหมาย → indefinite</p>
      <ol class="steps">
        <li><span class="step-t">ค่าลักษณะเฉพาะ</span> \(A = \begin{bmatrix} 1 & -2\\ -2 & 1 \end{bmatrix}\): \(\lambda^2 - 2\lambda - 3 = (\lambda - 3)(\lambda + 1) = 0 \Rightarrow \lambda = 3, -1\)</li>
        <li><span class="step-t">eigenvectors</span> \(\lambda = 3\): \(x_1 = -x_2 \Rightarrow \vec{u}_1 = \tfrac{1}{\sqrt2}(1,-1)^T\); \(\lambda = -1\): \(x_1 = x_2 \Rightarrow \vec{u}_2 = \tfrac{1}{\sqrt2}(1,1)^T\)</li>
        <li><span class="step-t">เปลี่ยนตัวแปร</span>
        \[ P = \frac{1}{\sqrt2}\begin{bmatrix} 1 & 1\\ -1 & 1 \end{bmatrix}, \quad D = \begin{bmatrix} 3 & 0\\ 0 & -1 \end{bmatrix} \;\Longrightarrow\; Q = 3y_1^2 - y_2^2 \]</li>
        <li><span class="step-t">จำแนก</span> มีทั้งบวกและลบ → <strong>ไม่แน่นอน</strong> และ \(3y_1^2 - y_2^2 = 6\) เป็น<strong>ไฮเปอร์โบลา</strong></li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p4-5-5">
    <div class="pr-head"><span class="pr-num">ข้อ 5</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาค่าของ \(k\) ทั้งหมดที่ทำให้ \(Q(x_1, x_2) = 2x_1^2 + 2x_2^2 + kx_1x_2\) เป็นรูปแบบกำลังสองบวกแน่นอน</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">เมทริกซ์ \(\begin{bmatrix} 2 & k/2\\ k/2 & 2 \end{bmatrix}\): trace \(= 4 > 0\) เสมอ / \(\det = 4 - \tfrac{k^2}{4} > 0\) ⟺ \(|k| < 4\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> เงื่อนไข trace/det</p>
      <ol class="steps">
        <li><span class="step-t">เมทริกซ์</span> \(A = \begin{bmatrix} 2 & k/2\\ k/2 & 2 \end{bmatrix}\) — ไขว้ \(k\) หารสอง</li>
        <li><span class="step-t">เงื่อนไขบวกแน่นอน</span> trace \(= 4 > 0\) เสมอ; \(\det A = 4 - \tfrac{k^2}{4} > 0 \Longleftrightarrow k^2 < 16 \Longleftrightarrow -4 < k < 4\)</li>
        <li><span class="step-t">สรุป</span> \(Q\) บวกแน่นอน ก็ต่อเมื่อ \(-4 < k < 4\) (ที่ \(k = \pm4\): \(\lambda = 0\) ปน → บวกกึ่งแน่นอน; \(|k| > 4\): ค่าลักษณะเฉพาะต่างเครื่องหมาย → ไม่แน่นอน)</li>
        <li><span class="step-t">ตรวจคำตอบ</span> \(k = 2\): \(\lambda^2 - 4\lambda + 3 = (\lambda-1)(\lambda-3)\) → ทั้งคู่บวก ✓ / \(k = 6\): \(\lambda^2 - 4\lambda - 5 = (\lambda-5)(\lambda+1)\) → ปนลบ → ไม่แน่นอน ✓</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p4-5-6">
    <div class="pr-head"><span class="pr-num">ข้อ 6</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงพิจารณาว่า \(Q(x_1, x_2, x_3) = x_1^2 + x_2^2 + x_3^2 - 2x_2x_3\) เป็นบวกแน่นอน ลบแน่นอน บวกกึ่งแน่นอน หรือไม่แน่นอน พร้อมเหตุผลจากค่าลักษณะเฉพาะ</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(A = \begin{bmatrix} 1 & 0 & 0\\ 0 & 1 & -1\\ 0 & -1 & 1 \end{bmatrix}\): บล็อกล่างขวา \(\begin{bmatrix} 1 & -1\\ -1 & 1 \end{bmatrix}\) มี \(\lambda = 2, 0\) → รวมกับทิศ \(x_1\) ได้ \(\lambda = 2, 1, 0\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> เมทริกซ์บล็อกทแยง — อ่านค่าลักษณะเฉพาะได้ทันที</p>
      <ol class="steps">
        <li><span class="step-t">เมทริกซ์</span> \(A = \begin{bmatrix} 1 & 0 & 0\\ 0 & 1 & -1\\ 0 & -1 & 1 \end{bmatrix}\) — แกน \(x_1\) แยกเป็นบล็อก \([1]\) และส่วนที่เหลือเป็นบล็อก \(\begin{bmatrix} 1 & -1\\ -1 & 1 \end{bmatrix}\)</li>
        <li><span class="step-t">ค่าลักษณะเฉพาะ</span> บล็อก \([1]\) → \(\lambda = 1\); บล็อก 2×2: \((1-\lambda)^2 - 1 = 0 \Rightarrow \lambda = 2, 0\) → รวม: \(\lambda = 2, 1, 0\)</li>
        <li><span class="step-t">จำแนก</span> ไม่มีค่าติดลบ แต่มี 0 → <strong>บวกกึ่งแน่นอน</strong> (positive semidefinite) — เพราะ \(Q \ge 0\) เสมอแต่ \(Q(0,1,1)^T = 1 + 1 - 2 = 0\) แม้ \(\vec{x} \ne \vec{0}\)</li>
      </ol>
    </div></details>
  </article>
</section>
