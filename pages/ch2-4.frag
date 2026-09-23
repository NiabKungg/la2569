<!-- meta
title: 2.4 ดีเทอร์มิแนนต์
ch: 2
section: 2.4
page: ch2-4.html
-->

<div class="crumb">บทที่ 2 · การแปลงเชิงเส้นและพีชคณิตเมทริกซ์</div>
<h1 class="page-title">2.4 ดีเทอร์มิแนนต์</h1>
<p class="page-sub">ตัวเลขเดียวที่เล่าทุกอย่างของเมทริกซ์จัตุรัส — เราจะเรียนนิยามด้วยโคแฟกเตอร์ สมบัติทั้งหมดที่จับคู่กับการดำเนินการแถว
เมทริกซ์ผูกพัน (adjoint) และกฎของคราเมอร์ พร้อมใช้ det ตัดสินว่าเมทริกซ์มี inverse หรือไม่ได้ในบรรทัดเดียว</p>

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
      <li>หา \(\det A\) ด้วยการกระจายโคแฟกเตอร์ตามแถวใดก็ได้ (เลือกแถว/หลักที่มี 0 เยอะเพื่อความเร็ว)</li>
      <li>ใช้สมบัติของ det กับการดำเนินการแถว (สลับเปลี่ยนเครื่องหมาย, \(cR_p\) คูณ det, \(R_p + cR_q\) คงค่า) และเมทริกซ์สามเหลี่ยม (คูณทแยง)</li>
      <li>ใช้สมบัติ \(\det(AB) = \det A \det B\), \(\det(A^k)\), \(\det(cA) = c^n \det A\), \(\det A^{-1} = 1/\det A\) คำนวณเชิงสัญลักษณ์</li>
      <li>ใช้ det ตัดสินว่า \(A\) มี inverse หรือไม่ และหาเมทริกซ์ผูกพัน (adj A) กับ \(A^{-1} = \frac{1}{\det A}\operatorname{adj} A\)</li>
      <li>ใช้กฎของคราเมอร์แก้ระบบ \(n\) สมการ \(n\) ตัวแปร</li>
    </ul>
  </div>
</section>

<section class="block" id="lesson">
  <h2><span class="h2-dot">📖</span> บทเรียน</h2>

  <h3>1) นิยามดีเทอร์มิแนนต์และโคแฟกเตอร์</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม — det A แบบเวียนเกิด (recursive)</div>
    <p>ให้ \(M_{ij}(A)\) คือเมทริกซ์ที่ได้จากการ<em>ตัด</em>แถวที่ \(i\) และหลักที่ \(j\) ของ \(A\) ออก</p>
    <p>• \(n = 1\): \(\det [a_{11}] = a_{11}\)</p>
    <p>• \(n > 1\): \(\det A = \sum_{j=1}^{n} (-1)^{1+j} a_{1j}\det M_{1j}(A)\) — คือ "การกระจายโคแฟกเตอร์ตามแถวที่ 1"</p>
    <p>โดย<strong>โคแฟกเตอร์</strong> \(C_{ij}(A) = (-1)^{i+j}\det M_{ij}(A)\) — เครื่องหมายเดินตามรูปแบบกระดานหมากรุก \(\begin{bmatrix} + & - & + & \dots\\ - & + & - & \dots\\ + & - & + & \dots \end{bmatrix}\)</p>
  </div>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 2.4.1 — กระจายตามแถวใดก็ได้</div>
    \[ \det A = \sum_{j=1}^n a_{ij}C_{ij}(A) \quad \text{สำหรับแถวที่ } i \text{ ใด ๆ (จริงกับหลักใด ๆ ด้วย)} \]
    <p>ท่าฉลาด: เลือกแถวหรือหลักที่มี <strong>0 มากที่สุด</strong> — พจน์ที่สัมประสิทธิ์เป็น 0 หายไปทั้งพจน์</p>
  </div>
  <div class="box box-thm">
    <div class="box-title">⭐ บทแทรก 2.4.2 — เมทริกซ์สามเหลี่ยม</div>
    <p>ถ้า \(A\) เป็นเมทริกซ์สามเหลี่ยม (บนหรือล่าง) แล้ว \(\det A =\) <strong>ผลคูณสมาชิกบนเส้นทแยงมุมหลัก</strong></p>
  </div>
  <div class="box box-idea">
    <div class="box-title">💡 ทางลัด Sarrus สำหรับ \(3\times3\) เท่านั้น</div>
    \[ \det A = \underbrace{(a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32})}_{\text{เฉียงลงขวา } (\backslash)} - \underbrace{(a_{31}a_{22}a_{13} + a_{32}a_{23}a_{11} + a_{33}a_{21}a_{12})}_{\text{เฉียงขึ้นขวา } (/)} \]
    <p>(เขียนหลัก 1, 2 ซ้ำต่อท้ายแล้วลากเฉียง) — ใช้ได้เฉพาะ 3×3 ห้ามเอาไปใช้กับ 4×4!</p>
  </div>

  <h3>2) det กับการดำเนินการแถว — เครื่องมือหลักในการคำนวณ</h3>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 2.4.3 และ 2.4.4 — สมบัติสำคัญของ det</div>
    <div class="tbl-wrap"><table class="tbl">
      <tr><th>การกระทำ</th><th>ผลต่อ det</th></tr>
      <tr><td>\(\det A^T\)</td><td>\(= \det A\) (แถวกับหลักสลับกันได้)</td></tr>
      <tr><td>สลับแถว \(R_{pq}\)</td><td>\(\det C = -\det A\) (เปลี่ยนเครื่องหมาย)</td></tr>
      <tr><td>สองแถวเหมือนกัน</td><td>\(\det A = 0\)</td></tr>
      <tr><td>\(R_p + cR_q\)</td><td>\(\det C = \det A\) (คงค่า — ใช้กวาดได้อิสระ!)</td></tr>
      <tr><td>\(cR_p\)</td><td>\(\det C = c\det A\) (ดึง \(c\) ออกจากแถวนั้นได้)</td></tr>
      <tr><td>\(A\) ไม่เอกฐาน</td><td>ก็ต่อเมื่อ \(\det A \neq 0\) และ \(\det A^{-1} = \dfrac{1}{\det A}\)</td></tr>
    </table></div>
  </div>
  <div class="box box-idea">
    <div class="box-title">💡 ท่าคำนวณ det ที่เร็วที่สุด</div>
    <p>ใช้ \(R_p + cR_q\) (คงค่า det) กวาดให้เป็นเมทริกซ์สามเหลี่ยม แล้วคูณทแยง — ถ้าระหว่างทางต้องสลับแถว ให้จำไว้ว่า det เปลี่ยนเครื่องหมาย ถ้าต้องคูณ \(cR_p\) ให้จำว่า det ถูกคูณ \(c\)</p>
  </div>

  <h3>3) สมบัติเชิงพีชคณิตของ det</h3>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 2.4.5 และบทแทรก 2.4.6</div>
    <p>สำหรับ \(A, B\) จัตุรัสขนาด \(n\), \(k\) จำนวนเต็มบวก, \(c\) จำนวนจริง:</p>
    \[ \det(AB) = \det A \det B \qquad \det(A^k) = (\det A)^k \qquad \det(cA) = c^n \det A \]
    <p>และต่อยอด: \(\det(A^T B) = \det A \det B\), \(\det(A^{-1}B) = \frac{\det B}{\det A}\), \(\det(B^{-1}AB) = \det B\) ฯลฯ — แยกตัวประกอบแล้วคูณกันไปเรื่อย ๆ</p>
  </div>
  <div class="box box-warn">
    <div class="box-title">⚠️ กับดัก \(\det(cA)\)</div>
    <p>\(\det(2A) = 2^n \det A\) <strong>ไม่ใช่</strong> \(2\det A\) — เพราะการคูณสเกลาร์คูณ<em>ทุกแถว</em> \(n\) แถว ดังนั้น det ถูกดึงออก \(n\) ครั้ง เช่น \(3\times3\) มี \(\det(2A) = 8\det A\) และ \(\det(-A) = (-1)^n \det A\)</p>
  </div>

  <h3>4) เมทริกซ์ผูกพัน (adjoint) และกฎของคราเมอร์</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม — เมทริกซ์ผูกพัน</div>
    <p>\(\operatorname{adj} A = \begin{bmatrix} C_{ij}(A) \end{bmatrix}^T\) — เอาเมทริกซ์โคแฟกเตอร์ทั้งหมดแล้ว<em>สลับเปลี่ยน</em> (ระวังลำดับ: ตัว \(C_{ij}\) ไปอยู่ตำแหน่ง \((j, i)\))</p>
  </div>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 2.4.7 และบทแทรก 2.4.8</div>
    \[ A(\operatorname{adj} A) = (\operatorname{adj} A)A = (\det A)I_n \qquad \Longrightarrow \qquad A^{-1} = \frac{1}{\det A}\operatorname{adj} A \;\; (\det A \neq 0) \]
  </div>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 2.4.9 — กฎของคราเมอร์ (Cramer's Rule)</div>
    <p>ถ้า \(A\) จัตุรัสขนาด \(n\) และ \(\det A \neq 0\) ผลเฉลยของ \(A\vec{x} = \vec{b}\) คือ</p>
    \[ x_i = \frac{\det A_i}{\det A} \qquad \text{เมื่อ } A_i = \text{เมทริกซ์ } A \text{ ที่แทนหลักที่ } i \text{ ด้วย } \vec{b} \]
    <p>ใช้ได้กับระบบ \(n\) สมการ \(n\) ตัวแปรที่มีผลเฉลยชุดเดียวเท่านั้น (ข้อดี: หา \(x_i\) ตัวใดตัวหนึ่งแยกได้โดยไม่ต้องแก้ทั้งระบบ)</p>
  </div>
</section>

<section class="block" id="examples">
  <h2><span class="h2-dot">✏️</span> ตัวอย่างโจทย์</h2>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 1</span><span class="tag easy">ง่าย</span><span class="ex-title">กระจายโคแฟกเตอร์ 3×3</span></div>
    <div class="ex-body">
      <div class="ex-q">จงหา \(\det A\) เมื่อ \(A = \begin{bmatrix} 2 & 1 & 3\\ 0 & -1 & 2\\ 1 & 2 & 0 \end{bmatrix}\) โดยกระจายโคแฟกเตอร์ (ก) ตามแถวที่ 1 (ข) ตามแถวที่ 2 แล้วเทียบคำตอบ</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — เลือกแถวที่มี 0 ช่วย (แถว 2) จะประหยัดพจน์ — และทุกแถวต้องให้ค่าเดียวกัน (ทฤษฎีบท 2.4.1) กลยุทธ์ของข้อนี้: det หาได้จากการกระจายตามแถวไหนก็ได้เสมอ ดังนั้น "ทำสองแถวเทียบกัน" คือการตรวจคำตอบที่ดีที่สุด จำอุปกรณ์ให้แน่: (1) เครื่องหมายกระดานหมากรุก \(+,-,+ \;/\; -,+,+ \dots\) เริ่มด้วย + ที่มุมซ้ายบน (2) เมทริกซ์ย่อยทุกตัวคือ 2×2 ที่ตัดแถว-หลักของตำแหน่งนั้นออก แล้วหา det ด้วยสูตร \(ad - bc\)</div>
      <ol class="steps">
        <li><span class="step-t">(ก) กระจายตามแถวที่ 1</span> เครื่องหมายแถวแรกคือ \(+, -, +\) สำหรับตำแหน่ง \((1,1), (1,2), (1,3)\) แต่ละพจน์ = (ตัวเลขในแถว 1) × (เครื่องหมาย) × (det ของเมทริกซ์ย่อย 2×2 ที่ตัดแถว 1 กับหลักนั้นออก) — เช่น พจน์แรก ตัดแถว 1 หลัก 1 เหลือ \(\begin{bmatrix} -1 & 2\\ 2 & 0 \end{bmatrix}\) det คือ \((-1)(0) - 2(2) = 0 - 4 = -4\):
        \[ \det A = 2\begin{vmatrix} -1 & 2\\ 2 & 0 \end{vmatrix} - 1\begin{vmatrix} 0 & 2\\ 1 & 0 \end{vmatrix} + 3\begin{vmatrix} 0 & -1\\ 1 & 2 \end{vmatrix} \]
        \[ = 2(0 - 4) - 1(0 - 2) + 3(0 + 1) = -8 + 2 + 3 = -3 \]
        (พจน์กลาง: \(\begin{bmatrix} 0 & 2\\ 1 & 0 \end{bmatrix}\) ให้ \(0(0) - 2(1) = -2\) แต่โดนเครื่องหมายลบลบทิ้ง จึงกลายเป็น \(+2\) พจน์ที่สาม: \(\begin{bmatrix} 0 & -1\\ 1 & 2 \end{bmatrix}\) ให้ \(0(2) - (-1)(1) = 1\))</li>
        <li><span class="step-t">(ข) กระจายตามแถวที่ 2 (มี 0 ตัวหนึ่ง)</span> สังเกตเครื่องหมาย \(+,-,+\) ที่ตำแหน่ง \((2,1), (2,2), (2,3)\) คือ \(-,+,-\) — ตำแหน่ง (2,1) มีตัวเลข 0 พจน์นั้นจึงหายไปทั้งพจน์ (นี่คือเหตุผลที่แถวมี 0 ช่วยงานเยอะ) สองพจน์ที่เหลือ:
        \[ \det A = -0\begin{vmatrix} 1 & 3\\ 2 & 0 \end{vmatrix} + (-1)\begin{vmatrix} 2 & 3\\ 1 & 0 \end{vmatrix} - 2\begin{vmatrix} 2 & 1\\ 1 & 2 \end{vmatrix} \]
        \[ = 0 + (-1)(0 - 3) - 2(4 - 1) = 3 - 6 = -3 \;\checkmark \]
        (ดูพจน์ที่สองให้ชัด: ตัวเลขคือ \(-1\), เครื่องหมาย +, เมทริกซ์ย่อย \(\begin{bmatrix} 2 & 3\\ 1 & 0 \end{bmatrix}\) ให้ \(2(0) - 3(1) = -3\) รวมเป็น \((-1)(-3) = +3\))</li>
        <li><span class="step-t">สรุป</span> ทั้งสองวิธีได้ \(\det A = -3\) ตรงกัน (ทางเร็วคือเลือกแถวที่ 2 เพราะพจน์แรกหายไป) — ข้อสรุปสำคัญ: det ไม่ขึ้นกับว่าเรากระจายตามแถวไหน จึงใช้เทียบคำตอบกันเองได้เสมอ</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2</span><span class="tag easy">ง่าย</span><span class="ex-title">เมทริกซ์สามเหลี่ยม</span></div>
    <div class="ex-body">
      <div class="ex-q">จงหา \(\det A\) เมื่อ \(A = \begin{bmatrix} -4 & 0 & 0 & 0\\ 0 & 2 & 0 & 0\\ 1 & 2 & -3 & 0\\ -2 & 4 & 2 & -1 \end{bmatrix}\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — เมทริกซ์สามเหลี่ยมล่าง → คูณทแยงจบ กลยุทธ์ของข้อนี้: ก่อนคูณให้แน่ใจว่ามัน "เป็นสามเหลี่ยมจริง" โดยดูว่าฝั่งหนึ่งของเส้นทแยงมีศูนย์ครบทุกช่อง (ที่นี่ศูนย์อยู่เหนือทแยง = สามเหลี่ยมล่าง) ถ้าใช่ det คือแค่คูณตัวเลขทแยง 4 ตัว ระวังอย่างเดียวคือจำนวนเครื่องหมายลบ</div>
      <ol class="steps">
        <li><span class="step-t">เห็นว่าเป็นสามเหลี่ยมล่าง</span> สมาชิกเหนือทแยงเป็น 0 ทั้งหมด (ดูแถวบน: \(-4, 0, 0, 0\) ฯลฯ) → โดยบทแทรก 2.4.2 ไม่ต้องกระจายโคแฟกเตอร์เลย det คือผลคูณบนเส้นทแยงมุมหลัก (เหตุผลเชิงความรู้สึก: กระจายตามแถวแรกที่มีแต่ 0 กับ \(-4\) จะเหลือพจน์เดียว แล้วค่อย ๆ พับลงมาเรื่อย ๆ ก็เหลือแค่คูณทแยงในที่สุด)</li>
        <li><span class="step-t">คูณทแยง</span> เอาทแยงมาคูณทีละตัวและจัดการเครื่องหมายลบไปพร้อมกัน: \((-4)(2) = -8\) ต่อด้วย \((-8)(-3) = 24\) (ลบคูณลบได้บวก) ปิดท้าย \(24(-1) = -24\):
        \[ \det A = (-4)(2)(-3)(-1) = -24 \]
        (จำวิธีนับเครื่องหมาย: ลบ 3 ตัวคูณกัน = ลบ ตัวเลข \(4 \times 2 \times 3 \times 1 = 24\) รวมเป็น \(-24\)) สรุป: \(\det A = -24\) ซึ่ง \(\neq 0\) แปลว่า \(A\) ไม่เอกฐาน (มี inverse)</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3</span><span class="tag hard">ยาก</span><span class="ex-title">หา det ด้วยการดำเนินการแถว (วิธีที่เร็วที่สุด)</span></div>
    <div class="ex-body">
      <div class="ex-q">จงหา \(\det A\) เมื่อ \(A = \begin{bmatrix} 1 & 2 & 1 & 3\\ 2 & 5 & 6 & 8\\ -1 & -2 & 0 & 2\\ 3 & 6 & 3 & 11 \end{bmatrix}\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — ใช้ \(R_p + cR_q\) กวาดจนเป็นสามเหลี่ยม (การดำเนินการนี้<em>ไม่เปลี่ยน</em> det) แล้วคูณทแยง กลยุทธ์ของข้อนี้: 4×4 ถ้ากระจายโคแฟกเตอร์จะเกิดเมทริกซ์ย่อยถึง 16 ตัว ไม่คุ้ม แต่การกวาดด้วย "แถวใหม่ = แถวเดิม + c เท่าของแถวอื่น" นั้น det คงเดิมทุกครั้ง เราจึงกวาดฟรี ๆ จนเป็นสามเหลี่ยมแล้วคูณทแยงครั้งเดียวจบ</div>
      <ol class="steps">
        <li><span class="step-t">กวาดหลักที่ 1</span> ใช้แถวแรก (นำ 1) เป็นตัวเคาะทั้งสามแถวล่างพร้อมกัน — คำนวณทีละแถว: \(R_2 - 2R_1\): \((2 - 2(1),\; 5 - 2(2),\; 6 - 2(1),\; 8 - 2(3)) = (0, 1, 4, 2)\) \(R_3 + R_1\): \((-1 + 1,\; -2 + 2,\; 0 + 1,\; 2 + 3) = (0, 0, 1, 5)\) \(R_4 - 3R_1\): \((3 - 3(1),\; 6 - 3(2),\; 3 - 3(1),\; 11 - 3(3)) = (0, 0, 0, 2)\) — สังเกตว่าทุกการดำเนินการเป็นรูป \(R_p \pm cR_1\) (แถวใหม่ = เดิมบวก/ลบ c เท่าของแถวอื่น) det จึงไม่ถูกแตะต้องเลย:
        \[ \xrightarrow{\substack{R_2 - 2R_1\\ R_3 + R_1\\ R_4 - 3R_1}} \begin{bmatrix} 1 & 2 & 1 & 3\\ 0 & 1 & 4 & 2\\ 0 & 0 & 1 & 5\\ 0 & 0 & 0 & 2 \end{bmatrix} \]
        (เช็ก: แถว 3: \(-1+1 = 0,\; -2+2 = 0,\; 0+1 = 1,\; 2+3 = 5\) ✓ แถว 4: \(3-3 = 0,\; 6-6 = 0,\; 3-3 = 0,\; 11-9 = 2\) ✓)</li>
        <li><span class="step-t">ได้เมทริกซ์สามเหลี่ยมแล้วคูณทแยง</span> เนื่องจากใช้แต่ \(R_p + cR_q\) ซึ่งคงค่า det (det ของเมทริกซ์เดิม = det ของสามเหลี่ยมที่ได้) คูณทแยงทีละตัว \(1 \times 1 = 1\), \(1 \times 1 = 1\), \(1 \times 2 = 2\):
        \[ \det A = 1 \cdot 1 \cdot 1 \cdot 2 = 2 \]
        สรุป: \(\det A = 2 \neq 0\) แปลว่า \(A\) ไม่เอกฐาน (มีเมทริกซ์ผกผัน)</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> กระจายโคแฟกเตอร์ตามหลักที่ 4 ของเมทริกซ์สามเหลี่ยมที่ได้: พจน์เดียวคือ \(2 \cdot (+1)^{4+4}\det\begin{bmatrix} 1 & 2 & 1\\ 0 & 1 & 4\\ 0 & 0 & 1 \end{bmatrix} = 2 \cdot 1 = 2\) ✓</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 4</span><span class="tag hard">ยาก</span><span class="ex-title">สมบัติ det เชิงสัญลักษณ์</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(A, B, C\) เป็น \(3 \times 3\) เมทริกซ์ซึ่ง \(\det A = 2\), \(\det B = -3\) และ \(\det C = 5\) จงหา<br>
      (ก) \(\det(AB^T)\) &nbsp; (ข) \(\det(2A)\) &nbsp; (ค) \(\det(A^{-1}B)\) &nbsp; (ง) \(\det(B^2A^{-1})\) &nbsp; (จ) \(\det(-3C)\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — แยกเป็นผลคูณของ det แต่ละตัวแล้วแทนค่า ระวังกำลัง \(n = 3\) ของ \(\det(cA)\) กลยุทธ์ของข้อนี้: โจทย์ไม่ให้เมทริกซ์จริง ให้เฉพาะ "เลข det" 3 ตัว ดังนั้นทุกข้อแก้ด้วยการแยกสลายด้วยสมบัติ 3 ตัว: \(\det(AB) = \det A \det B\), \(\det(cA) = c^n \det A\), \(\det A^{-1} = 1/\det A\) (และ \(\det A^T = \det A\)) — คิดทีละตัวอักษรว่า "มันถูกยกกำลัง คูณ หรือผันอยู่" แล้วจะไม่หลงทาง</div>
      <ol class="steps">
        <li><span class="step-t">(ก)</span> ใช้สองสมบัติต่อเนื่อง: \(\det(AB^T) = \det A \cdot \det B^T\) (แยกผลคูณ) และ \(\det B^T = \det B\) (การทรานสโพสไม่เปลี่ยน det) จึงได้ \(\det(AB^T) = \det A \cdot \det B = 2(-3) = -6\)</li>
        <li><span class="step-t">(ข)</span> ระวังกับดัก: การคูณสเกลาร์ 2 ต้อง "ดึงออกจากทุกแถว" — \(A\) เป็น \(3 \times 3\) มี 3 แถว จึงดึงได้ 3 ครั้ง \(\det(2A) = 2^3 \det A = 8(2) = 16\) (ไม่ใช่ \(2 \times 2 = 4\)!)</li>
        <li><span class="step-t">(ค)</span> \(\det(A^{-1}B) = \det A^{-1}\det B = \dfrac{\det B}{\det A} = \dfrac{-3}{2} = -\dfrac{3}{2}\) — เพราะ \(\det A^{-1} = 1/\det A\) (ผกผันแล้ว det เป็นเศษส่วนกลับกัน)</li>
        <li><span class="step-t">(ง)</span> \(B^2 = BB\) จึงแยกเป็น \(\det(BB) = \det B \cdot \det B = (\det B)^2\) แล้วคูณส่วน \(A^{-1}\): \(\det(B^2A^{-1}) = (\det B)^2 \cdot \dfrac{1}{\det A} = (-3)^2 \cdot \dfrac{1}{2} = \dfrac{9}{2}\) (ยกกำลังสองทำให้ลบหายไป — \((-3)^2 = 9\))</li>
        <li><span class="step-t">(จ)</span> \(\det(-3C) = (-3)^3 \det C = -27(5) = -135\) (ระวังกำลังสามทำให้เครื่องหมายลบ! เพราะ \((-3)^3 = -27\) — ลบคูณกันสามครั้ง = ลบ) สรุปทั้งหมด: (ก) \(-6\), (ข) \(16\), (ค) \(-\tfrac{3}{2}\), (ง) \(\tfrac{9}{2}\), (จ) \(-135\)</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5</span><span class="tag hard">ยาก</span><span class="ex-title">เมทริกซ์ผูกพันและ \(A^{-1} = \frac{1}{\det A}\operatorname{adj} A\) (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">กำหนด \(A = \begin{bmatrix} -1 & 4 & 1\\ 3 & 0 & 2\\ 2 & 1 & 0 \end{bmatrix}\) จงหา \(\det A\), \(\operatorname{adj} A\) และ \(A^{-1}\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — หาโคแฟกเตอร์ทั้ง 9 ตำแหน่ง → det (จากแถวใดก็ได้) → adj = transpose ของเมทริกซ์โคแฟกเตอร์ → \(A^{-1} = \operatorname{adj} A / \det A\) กลยุทธ์ของข้อนี้: งานหนักอยู่ที่ "โคแฟกเตอร์ 9 ตัว" — แต่ละตัวคือ (เครื่องหมายกระดานหมากรุก) × (det เมทริกซ์ย่อย 2×2 ที่ตัดแถว-หลักนั้นออก ด้วยสูตร \(ad - bc\)) เครื่องหมายเดินรูป \(+ - +\;/\; - + -\;/\; + - +\) เสร็จแล้วอย่าลืมว่า adj ต้อง<em>สลับเปลี่ยน</em> (transpose) ก่อนใช้ทุกครั้ง</div>
      <ol class="steps">
        <li><span class="step-t">หาโคแฟกเตอร์ทีละตำแหน่ง</span> อ่านสูตร \(C_{ij} = (\text{เครื่องหมาย } (-1)^{i+j}) \times \det M_{ij}\) — แถวแรก: \(C_{11}\) ตัดแถว 1 หลัก 1 เหลือ \(\begin{bmatrix} 0 & 2\\ 1 & 0 \end{bmatrix}\) det คือ \(0(0) - 2(1) = -2\), เครื่องหมาย + → \(-2\) \(C_{12}\) เหลือ \(\begin{bmatrix} 3 & 2\\ 2 & 0 \end{bmatrix}\) det คือ \(3(0) - 2(2) = -4\), เครื่องหมาย − → \(+4\) \(C_{13}\) เหลือ \(\begin{bmatrix} 3 & 0\\ 2 & 1 \end{bmatrix}\) det คือ \(3(1) - 0(2) = 3\), เครื่องหมาย + → 3 ทำแถว 2 (เครื่องหมาย \(-, +, -\)) และแถว 3 (เครื่องหมาย \(+, -, +\)) ด้วยสูตรเดียวกัน เช่น \(C_{23}\) ตัดแถว 2 หลัก 3 เหลือ \(\begin{bmatrix} -1 & 4\\ 2 & 1 \end{bmatrix}\) det คือ \(-1(1) - 4(2) = -9\), เครื่องหมาย − → \(+9\):
        \[ C_{11} = +\begin{vmatrix} 0 & 2\\ 1 & 0 \end{vmatrix} = -2, \quad C_{12} = -\begin{vmatrix} 3 & 2\\ 2 & 0 \end{vmatrix} = 4, \quad C_{13} = +\begin{vmatrix} 3 & 0\\ 2 & 1 \end{vmatrix} = 3 \]
        \[ C_{21} = -\begin{vmatrix} 4 & 1\\ 1 & 0 \end{vmatrix} = 1, \quad C_{22} = +\begin{vmatrix} -1 & 1\\ 2 & 0 \end{vmatrix} = -2, \quad C_{23} = -\begin{vmatrix} -1 & 4\\ 2 & 1 \end{vmatrix} = 9 \]
        \[ C_{31} = +\begin{vmatrix} 4 & 1\\ 0 & 2 \end{vmatrix} = 8, \quad C_{32} = -\begin{vmatrix} -1 & 1\\ 3 & 2 \end{vmatrix} = 5, \quad C_{33} = +\begin{vmatrix} -1 & 4\\ 3 & 0 \end{vmatrix} = -12 \]</li>
        <li><span class="step-t">det จากแถวที่ 1</span> พจน์ = (ตัวเลขแถว 1) × (โคแฟกเตอร์ตำแหน่งเดียวกัน) แล้วบวกกัน: \((-1)(-2) = 2\), \(4(4) = 16\), \(1(3) = 3\):
        \[ \det A = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13} = (-1)(-2) + 4(4) + 1(3) = 2 + 16 + 3 = 21 \]</li>
        <li><span class="step-t">transpose เมทริกซ์โคแฟกเตอร์ → adj A</span> จัดโคแฟกเตอร์เรียงตามตำแหน่ง \((i, j)\) ก่อน แล้ว<em>สลับแถว-หลัก</em> (ตัว \(C_{ij}\) ย้ายไปอยู่ \((j, i)\)) — เช่น ตัว \(C_{12} = 4\) (แถว 1 หลัก 2) จะไปอยู่แถว 2 หลัก 1 ของ adj:
        \[ \operatorname{adj} A = \begin{bmatrix} -2 & 4 & 3\\ 1 & -2 & 9\\ 8 & 5 & -12 \end{bmatrix}^T = \begin{bmatrix} -2 & 1 & 8\\ 4 & -2 & 5\\ 3 & 9 & -12 \end{bmatrix} \]</li>
        <li><span class="step-t">หา \(A^{-1}\)</span> เพราะ \(\det A = 21 \neq 0\) จึงใช้สูตร \(A^{-1} = \frac{1}{\det A}\operatorname{adj} A\) — คือเอาเมทริกซ์ adj ทั้งอันมาคูณด้วย 1/21 (อย่าหารทีละช่องแบบลืมตัวอื่น):
        \[ A^{-1} = \frac{1}{21}\begin{bmatrix} -2 & 1 & 8\\ 4 & -2 & 5\\ 3 & 9 & -12 \end{bmatrix} \]
        สรุป: \(\det A = 21\), \(\operatorname{adj} A\) และ \(A^{-1}\) ตามด้านบน</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> \(A(\operatorname{adj} A)\) ตำแหน่ง \((1,1)\): \((-1)(-2) + 4(4) + 1(3) = 21 = \det A\) ✓ (ตามทฤษฎีบท 2.4.7 ทุกตำแหน่งทแยงคือ 21 นอกทแยงเป็น 0)</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 6</span><span class="tag hard">ยาก</span><span class="ex-title">กฎของคราเมอร์ (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">จงใช้กฎของคราเมอร์หาผลเฉลยของระบบเชิงเส้น
      \[ \begin{aligned} x_1 - x_2 + 2x_3 &= -2\\ 3x_1 - 2x_2 + 4x_3 &= -5\\ \phantom{x_1 -{}} 2x_2 - 5x_3 &= 2 \end{aligned} \]</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — \(x_i = \det A_i / \det A\) — แทนหลักที่ \(i\) ด้วย \(\vec{b}\) แล้วหา det ทั้ง 4 ตัว กลยุทธ์ของข้อนี้: ก่อนอื่นต้องหา \(\det A\) ให้ได้และต้องไม่เป็นศูนย์ (ไม่งั้นใช้กฎคราเมอร์ไม่ได้) จากนั้นเป็นงานทำซ้ำ: สร้าง \(A_1, A_2, A_3\) โดย "เท" เวกเตอร์ \(\vec{b} = (-2, -5, 2)\) ลงทับหลักที่ 1, 2, 3 สลับกัน หา det ทีละตัว (จุดพลาดบ่อยสุดคือเครื่องหมายของ \(a_{12}\) ที่เป็นลบอยู่แล้ว ต้องเจอเครื่องหมายกระดานหมากรุกอีกชั้น) ปิดท้ายตรวจด้วยการแทนกลับทุกสมการ</div>
      <ol class="steps">
        <li><span class="step-t">เขียน \(A\) และเมทริกซ์ \(A_1, A_2, A_3\)</span> เก็บสัมประสิทธิ์จากสามสมการเรียงเป็นแถว: สมการ 1 \((1, -1, 2)\), สมการ 2 \((3, -2, 4)\), สมการ 3 \((0, 2, -5)\) — \(A_1\) = แทนหลัก 1 ของ \(A\) ด้วย \(\vec{b}\), \(A_2\) = แทนหลัก 2, \(A_3\) = แทนหลัก 3 (หลักอื่นคงเดิมห้ามลืม):
        \[ A = \begin{bmatrix} 1 & -1 & 2\\ 3 & -2 & 4\\ 0 & 2 & -5 \end{bmatrix}, \quad A_1 = \begin{bmatrix} -2 & -1 & 2\\ -5 & -2 & 4\\ 2 & 2 & -5 \end{bmatrix}, \quad A_2 = \begin{bmatrix} 1 & -2 & 2\\ 3 & -5 & 4\\ 0 & 2 & -5 \end{bmatrix}, \quad A_3 = \begin{bmatrix} 1 & -1 & -2\\ 3 & -2 & -5\\ 0 & 2 & 2 \end{bmatrix} \]
        (แต่ละ \(A_i\) คือ \(A\) ที่หลักที่ \(i\) ถูกแทนด้วย \(\vec{b} = (-2, -5, 2)^T\))</li>
        <li><span class="step-t">หา \(\det A\)</span> (กระจายตามแถวที่ 1 — เครื่องหมาย \(+, -, +\)) พจน์แรก: ตัดแถว 1 หลัก 1 เหลือ \(\begin{bmatrix} -2 & 4\\ 2 & -5 \end{bmatrix}\) det คือ \((-2)(-5) - 4(2) = 10 - 8 = 2\) พจน์ที่สอง: ตัวเลข \(-1\), เครื่องหมาย \(-\), เมทริกซ์ย่อย \(\begin{bmatrix} 3 & 4\\ 0 & -5 \end{bmatrix}\) ให้ \(-15\) จึงได้ \((-1)(-1)(-15) = -15\) พจน์ที่สาม: \(\begin{bmatrix} 3 & -2\\ 0 & 2 \end{bmatrix}\) ให้ \(6\):
        \[ \det A = 1\begin{vmatrix} -2 & 4\\ 2 & -5 \end{vmatrix} + 1\begin{vmatrix} 3 & 4\\ 0 & -5 \end{vmatrix} + 2\begin{vmatrix} 3 & -2\\ 0 & 2 \end{vmatrix} = 1(2) + 1(-15) + 2(6) = -1 \]
        (เขียนรูป \(+1\cdot(\cdots)\) ในพจน์กลางเพราะ "ลบคูณลบ" ระหว่างเครื่องหมาย − กับตัวเลข \(-1\)) — เพราะ \(\det A = -1 \neq 0\) จึงใช้กฎของคราเมอร์ได้</li>
        <li><span class="step-t">หา \(\det A_1\)</span> (แถวที่ 1: เครื่องหมาย \(+,-,+ \times\) ตัวเลข \(-2, -1, 2\)) พจน์ที่สองเป็นจุดพลาดสูงสุด: เครื่องหมาย − คูณตัวเลข \(-1\) ได้ \(+1\) จึงเห็นเป็น \(+1(\cdots)\) เมทริกซ์ย่อยตัวนั้น \(\begin{bmatrix} -5 & 4\\ 2 & -5 \end{bmatrix}\) ให้ \((-5)(-5) - 4(2) = 25 - 8 = 17\) พจน์ที่สาม \(\begin{bmatrix} -5 & -2\\ 2 & 2 \end{bmatrix}\) ให้ \(-10 + 4 = -6\):
        \[ \det A_1 = -2\begin{vmatrix} -2 & 4\\ 2 & -5 \end{vmatrix} + 1\begin{vmatrix} -5 & 4\\ 2 & -5 \end{vmatrix} + 2\begin{vmatrix} -5 & -2\\ 2 & 2 \end{vmatrix} = -2(2) + 1(17) + 2(-6) = -4 + 17 - 12 = 1 \]
        (ระวัง: พจน์ที่สองคือ \(-a_{12} = -(-1) = +1\) คูณเมทริกซ์ย่อย)</li>
        <li><span class="step-t">หา \(\det A_2\) และ \(\det A_3\)</span> ทำเหมือนเดิมทุกขั้น เพียงเปลี่ยนเมทริกซ์ที่กระจาย — \(\det A_2\): พจน์แรก \(\begin{bmatrix} -5 & 4\\ 2 & -5 \end{bmatrix} = 17\) (ตัวเดียวกับข้อก่อน), พจน์ที่สองเครื่องหมาย − คูณ \(-2\) ได้ \(+2\), เมทริกซ์ย่อย \(\begin{bmatrix} 3 & 4\\ 0 & -5 \end{bmatrix} = -15\), พจน์ที่สาม \(\begin{bmatrix} 3 & -5\\ 0 & 2 \end{bmatrix} = 6\) ส่วน \(\det A_3\): พจน์สามช่องได้ \(6, 6, -12\) ตามลำดับ (พจน์ที่สามเครื่องหมาย − คูณ 2 = \(-2\), เมทริกซ์ย่อยให้ \(6\)):
        \[ \det A_2 = 1\begin{vmatrix} -5 & 4\\ 2 & -5 \end{vmatrix} + 2\begin{vmatrix} 3 & 4\\ 0 & -5 \end{vmatrix} + 2\begin{vmatrix} 3 & -5\\ 0 & 2 \end{vmatrix} = 17 + 2(-15) + 2(6) = -1 \]
        \[ \det A_3 = 1\begin{vmatrix} -2 & -5\\ 2 & 2 \end{vmatrix} + 1\begin{vmatrix} 3 & -5\\ 0 & 2 \end{vmatrix} - 2\begin{vmatrix} 3 & -2\\ 0 & 2 \end{vmatrix} = 6 + 6 - 12 = 0 \]</li>
        <li><span class="step-t">ผลเฉลยตามกฎของคราเมอร์</span> หารทีละตัว — เศษลบหารลบได้บวก ศูนย์หารอะไรก็ได้ศูนย์:
        \[ x_1 = \frac{\det A_1}{\det A} = \frac{1}{-1} = -1, \qquad x_2 = \frac{\det A_2}{\det A} = \frac{-1}{-1} = 1, \qquad x_3 = \frac{\det A_3}{\det A} = \frac{0}{-1} = 0 \]
        \[ \vec{x} = \begin{bmatrix} -1\\ 1\\ 0 \end{bmatrix} \]
        สรุป: \((x_1, x_2, x_3) = (-1, 1, 0)\) (ตรวจการแทนกลับอยู่ในกล่องตรวจคำตอบด้านล่าง)</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> แทน \((-1, 1, 0)\): \(x_1 - x_2 + 2x_3 = -1 - 1 + 0 = -2\) ✓ \(3(-1) - 2(1) + 0 = -5\) ✓ \(2(1) - 5(0) = 2\) ✓ ครบทุกสมการ</div>
    </div>
  </article>
</section>

<section class="block" id="recipe">
  <h2><span class="h2-dot">⚡</span> สูตรสำเร็จ — ท่าที่ใช้ทำโจทย์หัวข้อนี้</h2>
  <div class="recipe">
    <div class="recipe-head">🪜 ท่าหลัก: หา det ของเมทริกซ์จัตุรัสขนาดใหญ่</div>
    <div class="recipe-body">
      <ol>
        <li>\(2\times2\): \(ad - bc\) &nbsp;/&nbsp; \(3\times3\): Sarrus หรือโคแฟกเตอร์ &nbsp;/&nbsp; \(4\times4\) ขึ้นไป: <strong>ใช้การดำเนินการแถว</strong></li>
        <li>ใช้ \(R_p + cR_q\) กวาดจนเป็น<strong>เมทริกซ์สามเหลี่ยม</strong> (คงค่า det) — ถ้าต้องสลับแถวจำว่า det ติดลบ, ถ้าต้องคูณ \(cR_p\) จำว่า det โดนคูณ \(c\)</li>
        <li>หรือกระจายโคแฟกเตอร์ตามแถว/หลักที่มี <strong>0 เยอะที่สุด</strong> แล้วทำซ้ำกับเมทริกซ์ย่อย</li>
        <li>เมทริกซ์สามเหลี่ยม: คูณทแยงจบ</li>
      </ol>
    </div>
  </div>
  <div class="key-grid">
    <div class="key-card"><div class="k-title">ท่า: det เชิงสัญลักษณ์</div>ทุกอย่างแยกเป็นผลคูณ: \(\det(AB) = \det A\det B\), \(\det(cA) = c^n\det A\), \(\det A^{-1} = 1/\det A\), \(\det A^T = \det A\)</div>
    <div class="key-card"><div class="k-title">ท่า: ตรวจ inverse ด้วย det</div>\(\det A \neq 0\) ⇔ ไม่เอกฐาน ⇔ มี \(A^{-1}\) — เร็วกว่าการลดรูป \([A \mid I]\) มาก</div>
    <div class="key-card"><div class="k-title">ท่า: adj A</div>คำนวณโคแฟกเตอร์ 9 ตัว → เรียงเป็นเมทริกซ์ → <strong>transpose</strong> → \(A^{-1} = \operatorname{adj}A/\det A\)</div>
    <div class="key-card"><div class="k-title">ท่า: กฎของคราเมอร์</div>เฉพาะระบบจัตุรัสที่ \(\det A \neq 0\): \(x_i = \det A_i / \det A\) — ระวังเครื่องหมายโคแฟกเตอร์ แล้วตรวจด้วยการแทนกลับ</div>
  </div>
</section>

<section class="block" id="practice">
  <h2><span class="h2-dot">🏋️</span> โจทย์ซ้อมมือ (6 ข้อ)</h2>
  <p class="small">ลองทำเองก่อน แล้วค่อยกดเปิดคำใบ้ → เฉลยทีละขั้น เมื่อทำได้แล้วติ๊ก ✓ เพื่อบันทึกความคืบหน้า</p>

  <article class="pr-card" data-pkey="p2-4-1">
    <div class="pr-head"><span class="pr-num">ข้อ 1</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>กำหนด \(A = \begin{bmatrix} 2 & 1 & 3\\ 1 & -2 & 2\\ 0 & 1 & 3 \end{bmatrix}\) จงหาโคแฟกเตอร์ \(C_{ij}(A)\) ทุกตำแหน่ง และหา \(\det A\) โดยกระจายโคแฟกเตอร์ตามแถวที่ 1</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">เครื่องหมายกระดานหมากรุก \(\begin{bmatrix} + & - & +\\ - & + & -\\ + & - & + \end{bmatrix}\) คูณกับ det ของเมทริกซ์ย่อย 2×2 ที่ตัดแถว-หลักนั้นออก</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> \(C_{ij} = (-1)^{i+j}\det M_{ij}\) — เตรียมเครื่องหมายกระดานหมากรุก \(+ - + \;/\; - + - \;/\; + - +\) ไว้ก่อน แล้วทีละตำแหน่ง: ตัดแถว \(i\) หลัก \(j\) ออก → หา det ของ 2×2 ที่เหลือด้วย \(ad - bc\) → คูณเครื่องหมาย</p>
      <ol class="steps">
        <li><span class="step-t">โคแฟกเตอร์แถวที่ 1</span> ดูตัวอย่างแรกให้ขาด: \(C_{11}\) ตัดแถว 1 หลัก 1 เหลือ \(\begin{bmatrix} -2 & 2\\ 1 & 3 \end{bmatrix}\) det คือ \((-2)(3) - 2(1) = -6 - 2 = -8\), เครื่องหมาย + → \(-8\) \(C_{12}\) เหลือ \(\begin{bmatrix} 1 & 2\\ 0 & 3 \end{bmatrix}\) det คือ \(3 - 0 = 3\), เครื่องหมาย − → \(-3\) \(C_{13}\) เหลือ \(\begin{bmatrix} 1 & -2\\ 0 & 1 \end{bmatrix}\) det คือ \(1 - 0 = 1\), เครื่องหมาย + → \(1\):
        \[ C_{11} = +\begin{vmatrix} -2 & 2\\ 1 & 3 \end{vmatrix} = -8, \quad C_{12} = -\begin{vmatrix} 1 & 2\\ 0 & 3 \end{vmatrix} = -3, \quad C_{13} = +\begin{vmatrix} 1 & -2\\ 0 & 1 \end{vmatrix} = 1 \]</li>
        <li><span class="step-t">โคแฟกเตอร์แถวที่ 2</span> เครื่องหมายแถวนี้คือ \(-, +, -\) — \(C_{21}\): เมทริกซ์ย่อย \(\begin{bmatrix} 1 & 3\\ 1 & 3 \end{bmatrix}\) ให้ \(3 - 3 = 0\), เครื่องหมาย − คูณ 0 ก็ยังเป็น 0 (สองแถวของเมทริกซ์ย่อยนี้เหมือนกันพอดี det จึงเป็นศูนย์) \(C_{22}\): \(\begin{bmatrix} 2 & 3\\ 0 & 3 \end{bmatrix}\) ให้ \(6 - 0 = 6\), เครื่องหมาย + → 6 \(C_{23}\): \(\begin{bmatrix} 2 & 1\\ 0 & 1 \end{bmatrix}\) ให้ \(2 - 0 = 2\), เครื่องหมาย − → \(-2\):
        \[ C_{21} = -\begin{vmatrix} 1 & 3\\ 1 & 3 \end{vmatrix} = 0, \quad C_{22} = +\begin{vmatrix} 2 & 3\\ 0 & 3 \end{vmatrix} = 6, \quad C_{23} = -\begin{vmatrix} 2 & 1\\ 0 & 1 \end{vmatrix} = -2 \]</li>
        <li><span class="step-t">โคแฟกเตอร์แถวที่ 3</span> เครื่องหมาย \(+, -, +\) — \(C_{31}\): \(\begin{bmatrix} 1 & 3\\ -2 & 2 \end{bmatrix}\) ให้ \(2 + 6 = 8\), เครื่องหมาย + \(C_{32}\): \(\begin{bmatrix} 2 & 3\\ 1 & 2 \end{bmatrix}\) ให้ \(4 - 3 = 1\), เครื่องหมาย − → \(-1\) \(C_{33}\): \(\begin{bmatrix} 2 & 1\\ 1 & -2 \end{bmatrix}\) ให้ \(-4 - 1 = -5\), เครื่องหมาย +:
        \[ C_{31} = +\begin{vmatrix} 1 & 3\\ -2 & 2 \end{vmatrix} = 8, \quad C_{32} = -\begin{vmatrix} 2 & 3\\ 1 & 2 \end{vmatrix} = -1, \quad C_{33} = +\begin{vmatrix} 2 & 1\\ 1 & -2 \end{vmatrix} = -5 \]</li>
        <li><span class="step-t">det จากแถวที่ 1</span> พจน์ = (ตัวเลขแถว 1 คือ \(2, 1, 3\)) × (โคแฟกเตอร์ตำแหน่งเดียวกัน): \(2(-8) = -16\), \(1(-3) = -3\), \(3(1) = 3\):
        \[ \det A = 2(-8) + 1(-3) + 3(1) = -16 - 3 + 3 = -16 \]
        ตรวจจากแถวที่ 3 (มี 0): \(0(8) + 1(-1) + 3(-5) = -1 - 15 = -16\) ✓ — สองแถวให้ค่าตรงกัน ยืนยันว่าโคแฟกเตอร์ทุกตัวถูกต้อง สรุป: \(\det A = -16 \neq 0\) (และ \(\det A \neq 0\) แปลว่า \(A\) มี inverse)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p2-4-2">
    <div class="pr-head"><span class="pr-num">ข้อ 2</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาค่าของ<br>
      (ก) \(\begin{vmatrix} 1 & -1 & 2\\ 3 & 1 & 1\\ 2 & -1 & 3 \end{vmatrix}\) &nbsp;
      (ข) \(\begin{vmatrix} a & b & c\\ a+1 & b+1 & c+1\\ a-1 & b-1 & c-1 \end{vmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">(ข) อย่ากระจาย — มองหาความสัมพันธ์ระหว่างแถว: ลองบวกแถวที่ 2 กับแถวที่ 3 ดู</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> (ก) Sarrus (ข) ใช้สมบัติ "สองแถวเหมือนกัน → det = 0" กลยุทธ์ของข้อนี้: (ก) เป็น 3×3 เลขจริง ทำได้ทั้ง Sarrus และโคแฟกเตอร์ ที่นี่ใช้โคแฟกเตอร์ตามแถว 1 (ข) ตัวแปรเป็นสัญลักษณ์ ห้ามรีบกระจาย ให้มองหา "ความสัมพันธ์ระหว่างแถว" ก่อน — ถ้าแถวไหนเป็นคูณสเกลาร์ของแถวอื่น det จะเป็นศูนย์ทันที</p>
      <ol class="steps">
        <li><span class="step-t">(ก) กระจายโคแฟกเตอร์ตามแถวที่ 1</span> (ระวังเครื่องหมาย \(+,-,+ \times\) ตัวเลข \(1, -1, 2\): พจน์กลางเครื่องหมาย − คูณ \(-1\) ได้ \(+1\)) เมทริกซ์ย่อยตัวแรก \(\begin{bmatrix} 1 & 1\\ -1 & 3 \end{bmatrix}\) ให้ \(3 + 1 = 4\) ตัวที่สอง \(\begin{bmatrix} 3 & 1\\ 2 & 3 \end{bmatrix}\) ให้ \(9 - 2 = 7\) ตัวที่สาม \(\begin{bmatrix} 3 & 1\\ 2 & -1 \end{bmatrix}\) ให้ \(-3 - 2 = -5\):
        \[ \det = 1\begin{vmatrix} 1 & 1\\ -1 & 3 \end{vmatrix} + 1\begin{vmatrix} 3 & 1\\ 2 & 3 \end{vmatrix} + 2\begin{vmatrix} 3 & 1\\ 2 & -1 \end{vmatrix} = (3+1) + (9-2) + 2(-3-2) = 4 + 7 - 10 = 1 \]</li>
        <li><span class="step-t">(ข) หาแถวที่พึ่งเชิงเส้นกัน</span> ทดลองบวกแถวที่ 2 กับแถวที่ 3 ช่องต่อช่อง: \((a+1) + (a-1) = 2a\), \((b+1) + (b-1) = 2b\), \((c+1) + (c-1) = 2c\) ได้ \((2a, 2b, 2c) = 2 \times \text{แถวที่ 1}\) — แถวที่ 2 + แถวที่ 3 เท่ากับแถวที่ 1 สองเท่าแปลว่าสามแถวพึ่งเชิงเส้นกัน (แถวที่ 1 = ครึ่งหนึ่งของแถว 2 + แถว 3) → โดยสมบัติ det (แถวพึงเชิงเส้น ⟺ det = 0 — และการดำเนินการ \(R_2 + R_3\) ที่เราลองทำในหัวเป็นรูป \(R_p + cR_q\) ซึ่งคงค่า det ไว้ ดังนั้น det เดิมก็เป็นศูนย์ด้วย):
        \[ \det = 0 \]</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p2-4-3">
    <div class="pr-head"><span class="pr-num">ข้อ 3</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงใช้การดำเนินการแถวหาค่า \(\det\begin{bmatrix} 1 & 2 & 3\\ 2 & 5 & 3\\ 1 & 0 & 8 \end{bmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(R_2 - 2R_1\), \(R_3 - R_1\) (คงค่า det) แล้วกวาดต่อจนเป็นสามเหลี่ยม</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> กวาดด้วย \(R_p + cR_q\) ซึ่งไม่เปลี่ยน det แล้วคูณทแยง — เป้าหมายคือทำให้ใต้เส้นทแยงเป็นศูนย์หมด จะได้ไม่ต้องแตะต้องตัวเลขเหนือทแยงเลย และที่สำคัญ: ถ้าระหว่างทางใช้แต่รูป "แถวใหม่ = แถวเดิม + c เท่าของแถวอื่น" det จะคงเดิม 100% ไม่ต้องจดตัวคูณใด ๆ</p>
      <ol class="steps">
        <li><span class="step-t">กวาดหลักที่ 1</span> ใช้แถวบน (นำ 1) เคาะสองแถวล่างพร้อมกัน — \(R_2 - 2R_1\): \((2 - 2(1),\; 5 - 2(2),\; 3 - 2(3)) = (0, 1, -3)\) \(R_3 - R_1\): \((1 - 1,\; 0 - 2,\; 8 - 3) = (0, -2, 5)\) จากนั้นหลักที่ 2 ยังมี \(-2\) ใต้ตัวนำ ใช้ \(R_3 + 2R_2\) เคาะต่อ: \((0,\; -2 + 2(1),\; 5 + 2(-3)) = (0, 0, -1)\):
        \[ \begin{bmatrix} 1 & 2 & 3\\ 2 & 5 & 3\\ 1 & 0 & 8 \end{bmatrix} \xrightarrow{\substack{R_2 - 2R_1\\ R_3 - R_1}} \begin{bmatrix} 1 & 2 & 3\\ 0 & 1 & -3\\ 0 & -2 & 5 \end{bmatrix} \xrightarrow{\,R_3 + 2R_2\,} \begin{bmatrix} 1 & 2 & 3\\ 0 & 1 & -3\\ 0 & 0 & -1 \end{bmatrix} \]</li>
        <li><span class="step-t">คูณทแยง</span> ได้สามเหลี่ยมบนแล้ว คูณทแยงทีละตัว \(1 \times 1 = 1\) ปิดท้าย \(1 \times (-1) = -1\) — ตัวนำตัวสุดท้ายเป็นลบก็ใช้ได้ปกติ เพราะเมทริกซ์สามเหลี่ยมไม่ได้ต้องการให้ทแยงเป็น 1:
        \[ \det = 1(1)(-1) = -1 \]</li>
        <li><span class="step-t">ตรวจด้วย Sarrus</span> เฉียงลง: \(1(5)(8) + 2(3)(1) + 3(2)(0) = 40 + 6 + 0 = 46\) wait ระวังลำดับ: เฉียงขึ้นคือ \(a_{31}a_{22}a_{13} + a_{32}a_{23}a_{11} + a_{33}a_{21}a_{12} = 1(5)(3) + 0(3)(1) + 8(2)(2) = 15 + 0 + 32 = 47\) → \(\det = 46 - 47 = -1\) ✓ ตรงกัน (จุดตรวจนี้ชวนสอน: คำเฉียงขึ้นต้องอ่านจาก "ล่างซ้ายไปขวาบน" ตามสูตร \(a_{31}a_{22}a_{13}\) ฯลฯ ไม่ใช่เดาทิศ — ครั้งแรกหยิบผิดชุดเลข คำนวณใหม่ด้วยลำดับที่ถูกแล้วจึงได้ 47 พอดี) สรุป: \(\det = -1\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p2-4-4">
    <div class="pr-head"><span class="pr-num">ข้อ 4</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>กำหนด \(\begin{vmatrix} a & b & c\\ d & e & f\\ g & h & i \end{vmatrix} = 4\) จงหาค่าของ<br>
      (ก) \(\begin{vmatrix} a & b & c\\ -g & -h & -i\\ 3d & 3e & 3f \end{vmatrix}\) &nbsp;
      (ข) \(\begin{vmatrix} 2a+d & 2b+e & 2c+f\\ g & h & i\\ -2a & -2b & -2c \end{vmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">(ก) ดึง 3 ออกจากแถว 3 → สลับแถว 2,3 → ดึง −1 ออกจากแถว 2 (ข) \(R_3 + R_1\) ก่อน (ดึงทแยงออก) แล้วค่อยจัดรูป</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> จัดเมทริกซ์ที่ถามกลับเป็นรูปเดิมโดยนับค่าที่ "หายไป" ทีละขั้น — จำราคาของการดำเนินการแต่ละแบบให้ขึ้นใจ: ดึง \(c\) ออกจากแถว → det ถูกคูณ \(c\), สลับแถว → det เปลี่ยนเครื่องหมาย, \(R_p + cR_q\) → det คงเดิม ทุกขั้นตอนของข้อนี้แค่ "ย้อนกลับ" แล้วเก็บค่าที่ถูกเพิ่มเข้าไป</p>
      <ol class="steps">
        <li><span class="step-t">(ก) ดึง 3 ออกจากแถวที่ 3</span> แถวที่ 3 เป็น \(3 \times\) (แถวของเมทริกซ์เดิม) การดึง 3 ออกทำให้ det ที่เหลือเป็น "1/3 ของเดิม" เขียนย้อนรูปแบบตรวจคำตอบได้ว่าเมทริกซ์ที่ถาม = 3 × (เมทริกซ์รูปเกือบเดิม): \(= 3\begin{vmatrix} a & b & c\\ -g & -h & -i\\ d & e & f \end{vmatrix}\)</li>
        <li><span class="step-t">(ก) สลับแถว 2, 3 (เครื่องหมายเปลี่ยน) แล้วดึง \(-1\) ออกจากแถว 2</span> การสลับสองแถวทำให้ det ติดลบ 1 ครั้ง (เขียนเป็นตัวคูณ \(-1\)) จากนั้นแถว \((-g, -h, -i) = (-1) \times (g, h, i)\) ดึง \(-1\) ออกอีกหนึ่งตัว รวมสองขั้น det ที่จัดรูปแล้วคือ \(3 \times (-1) \times (-1) \times\) (det เดิมที่เท่ากับ 4) = \(3(1)(4) = 12\):
        \[ = 3(-1)\begin{vmatrix} a & b & c\\ d & e & f\\ -g & -h & -i \end{vmatrix} = 3(-1)(-1)\begin{vmatrix} a & b & c\\ d & e & f\\ g & h & i \end{vmatrix} = 3(1)(4) = 12 \]
        (เหตุผลตอบจบ: สามตัวดัดแปลงคือ "คูณ 3", "สลับ", "คูณ −1" รวมเป็น \(3 \times (-1) \times (-1) = 3\) คูณ det เดิม)</li>
        <li><span class="step-t">(ข) \(R_3 + R_1\) ให้แถว 3 กลายเป็น \((d, e, f)\)</span> (\(R_3 + R_1\) คงค่า det — เพราะ \(R_1 = (2a, 2b, 2c)\) ทำให้ \(-2a + 2a = 0\) ฯลฯ — ตรวจทีละช่อง: ช่องแรก \(-2a + (2a + d) = d\), ช่องกลาง \(-2b + (2b + e) = e\), ช่องสุดท้าย \(-2c + (2c + f) = f\)):
        \[ = \begin{vmatrix} 2a+d & 2b+e & 2c+f\\ g & h & i\\ d & e & f \end{vmatrix} \]</li>
        <li><span class="step-t">(ข) ดึง 2 ออกจากแถวที่ 1 แล้วสลับแถว 2, 3</span> แถว 1 ทุกช่องมีตัว 2 ร่วม ดึงออกได้ (det ถูกคูณ 2 รอบหนึ่ง) จากนั้นทำ \(R_1 - \tfrac{1}{2}R_3\) (รูป \(R_p + cR_q\), คงค่า) เพื่อเคาะ \(\tfrac{d}{2}\) ฯลฯ ออกจนแถว 1 เหลือ \((a, b, c)\) แท้ ๆ แล้วสลับแถว 2, 3 (det ติดลบหนึ่งครั้ง):
        \[ = 2\begin{vmatrix} a+\tfrac{d}{2} & b+\tfrac{e}{2} & c+\tfrac{f}{2}\\ g & h & i\\ d & e & f \end{vmatrix} = 2\begin{vmatrix} a & b & c\\ g & h & i\\ d & e & f \end{vmatrix} = 2(-1)\begin{vmatrix} a & b & c\\ d & e & f\\ g & h & i \end{vmatrix} = 2(-1)(4) = -8 \]
        (ขั้นกลาง \(R_1 - \tfrac{1}{2}R_3\) คงค่า det ทำให้แถว 1 เหลือ \((a,b,c)\) แท้ ๆ) สรุป: (ก) \(= 12\), (ข) \(= -8\) — จำวิธีคิด: เขียนเมทริกซ์ที่ถามว่า "ผ่านการดำเนินการอะไรมาบ้าง" แล้วคูณราคาทุกขั้นกับ det เดิม</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p2-4-5">
    <div class="pr-head"><span class="pr-num">ข้อ 5</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงใช้ดีเทอร์มิแนนต์ตรวจสอบว่าเมทริกซ์ต่อไปนี้มีเมทริกซ์ผกผันหรือไม่ เพราะเหตุใด
      \(A = \begin{bmatrix} 0 & 7 & 5 & 4\\ 3 & 8 & 6 & 0\\ 1 & -7 & -5 & 0\\ 2 & 0 & 0 & 8 \end{bmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">ลดรูปด้วย \(R_p + cR_q\) (คง det) ให้เป็นสามเหลี่ยม แล้วดูว่าทแยงมีศูนย์ไหม</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> \(\det A = 0\) ⇔ เอกฐาน ⇔ ไม่มี inverse — เมทริกซ์ 4×4 ไม่ควรกระจายโคแฟกเตอร์ ให้กวาดด้วย \(R_p + cR_q\) (คงค่า det) พอเห็นแถวล้าก็ตอบจบทันทีโดยไม่ต้องหาตัวเลข det เลย เพราะแถวล้า = สามเหลี่ยมมีทแยงศูนย์ = det เป็นศูนย์แน่นอน</p>
      <ol class="steps">
        <li><span class="step-t">สลับให้เริ่มด้วย 1 แล้วกวาดหลักที่ 1</span> ช่องซ้ายบนเป็น 0 ใช้เป็นตัวเคาะไม่ได้ จึงสลับ \(R_{13}\) (แถว 1 ↔ แถว 3) ซึ่งทำให้ det เปลี่ยนเครื่องหมาย 1 ครั้ง (สลับครั้งเดียว = ลบ) แต่ตอนนี้เราไม่สนตัวเลข det สนแค่ว่า "เป็นศูนย์หรือไม่" จากนั้นเคาะหลักแรก: \(R_2 - 3R_1\): \((3 - 3(1),\; 8 - 3(-7),\; 6 - 3(-5),\; 0) = (0, 29, 21, 0)\) \(R_4 - 2R_1\): \((2 - 2(1),\; 0 - 2(-7),\; 0 - 2(-5),\; 8) = (0, 14, 10, 8)\):
        \[ \xrightarrow{\,R_{13}\,} \begin{bmatrix} 1 & -7 & -5 & 0\\ 3 & 8 & 6 & 0\\ 0 & 7 & 5 & 4\\ 2 & 0 & 0 & 8 \end{bmatrix} \xrightarrow{\substack{R_2 - 3R_1\\ R_4 - 2R_1}} \begin{bmatrix} 1 & -7 & -5 & 0\\ 0 & 29 & 21 & 0\\ 0 & 7 & 5 & 4\\ 0 & 14 & 10 & 8 \end{bmatrix} \]</li>
        <li><span class="step-t">สังเกตความสัมพันธ์ในหลักที่ 2–3</span> แถวที่ 4 = \(2 \times\) (แถวที่ 3 เฉพาะหลัก 2,3): \(14 = 2(7)\), \(10 = 2(5)\) → ลอง \(R_4 - 2R_3\) (คงค่า det): ทีละช่อง \((0,\; 14 - 2(7),\; 10 - 2(5),\; 8 - 2(4)) = (0, 0, 0, 0)\) — หลักที่ 4 ก็พังพอดีด้วย (\(8 - 8 = 0\)) แถวล้าปรากฏตัว:
        \[ \xrightarrow{\,R_4 - 2R_3\,} \begin{bmatrix} 1 & -7 & -5 & 0\\ 0 & 29 & 21 & 0\\ 0 & 7 & 5 & 4\\ 0 & 0 & 0 & 0 \end{bmatrix} \]</li>
        <li><span class="step-t">สรุป</span> เกิดแถวล้า → สามเหลี่ยมที่มีทแยงเป็น 0 → \(\det A = 0\) → \(A\) เป็นเมทริกซ์เอกฐาน <strong>ไม่มีเมทริกซ์ผกผัน</strong> — "เพราะ" แถวล้าทำให้ทแยงมุมหลักของรูปสามเหลี่ยมมี 0 ผลคูณทแยง (คือ det) เป็นศูนย์โดยอัตโนมัติ ไม่ต้องสนว่าการสลับแถวตอนแรกจะเปลี่ยนเครื่องหมายหรือไม่ ก็ยังเป็นศูนย์เหมือนเดิม</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p2-4-6">
    <div class="pr-head"><span class="pr-num">ข้อ 6</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงใช้กฎของคราเมอร์หาผลเฉลยของระบบเชิงเส้น
      \[ \begin{aligned} x_1 + x_2 + x_3 &= 6\\ 2x_1 - x_2 + x_3 &= 3\\ x_1 + 2x_2 - x_3 &= 2 \end{aligned} \]</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(A = \begin{bmatrix} 1 & 1 & 1\\ 2 & -1 & 1\\ 1 & 2 & -1 \end{bmatrix}\) — หา \(\det A\) ก่อน แล้วสร้าง \(A_1, A_2, A_3\) โดยแทนหลักด้วย \((6, 3, 2)^T\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> \(x_i = \det A_i / \det A\) — ขั้นแรกหา \(\det A\) แล้วดูว่าไม่เป็นศูนย์ (เงื่อนไขการใช้กฎคราเมอร์) จากนั้นสร้าง \(A_1, A_2, A_3\) โดยแทนหลักที่ 1, 2, 3 ด้วย \(\vec{b} = (6, 3, 2)^T\) แล้วหา det ทีละตัว ปิดท้ายหารและแทนกลับตรวจ</p>
      <ol class="steps">
        <li><span class="step-t">หา \(\det A\)</span> (กระจายตามหลักที่ 3 — ไม่มี 0 แต่ตัวเลขเล็ก) เครื่องหมายแถว 1 คือ \(+, -, +\) เมทริกซ์ย่อยแรก (ตัดแถว 1 หลัก 1): \(\begin{bmatrix} -1 & 1\\ 2 & -1 \end{bmatrix}\) ให้ \((-1)(-1) - 1(2) = 1 - 2 = -1\) ตัวที่สอง: \(\begin{bmatrix} 2 & 1\\ 1 & -1 \end{bmatrix}\) ให้ \(-2 - 1 = -3\) ตัวที่สาม: \(\begin{bmatrix} 2 & -1\\ 1 & 2 \end{bmatrix}\) ให้ \(4 + 1 = 5\):
        \[ \det A = 1(-1 - 2) - 1(-2 - 1) + 1(4 + 1) = -3 + 3 + 5 = 7 \neq 0 \]→ ใช้กฎของคราเมอร์ได้ (พจน์กลาง: เครื่องหมาย − คูณตัวเลข 1 ได้ \(-1\), แล้วคูณเมทริกซ์ย่อยที่ให้ \(-3\) จึงกลายเป็น \(+3\))</li>
        <li><span class="step-t">สร้าง \(A_1\) (แทนหลัก 1 ด้วย \(\vec{b}\)) และหา det</span> เท \((6, 3, 2)^T\) ลงทับหลักแรก หลัก 2, 3 คงเดิม แล้วกระจายตามแถวที่ 1 (เครื่องหมาย \(+, -, + \times\) ตัวเลข \(6, 1, 1\)): เมทริกซ์ย่อยตัวแรก \(\begin{bmatrix} -1 & 1\\ 2 & -1 \end{bmatrix}\) ให้ \(1 - 2 = -1\) ตัวที่สอง \(\begin{bmatrix} 3 & 1\\ 2 & -1 \end{bmatrix}\) ให้ \(-3 - 2 = -5\) แต่โดนเครื่องหมาย − จึงเป็น \(+5\) ตัวที่สาม \(\begin{bmatrix} 3 & -1\\ 2 & 2 \end{bmatrix}\) ให้ \(6 + 2 = 8\):
        \[ A_1 = \begin{bmatrix} 6 & 1 & 1\\ 3 & -1 & 1\\ 2 & 2 & -1 \end{bmatrix}, \quad \det A_1 = 6\begin{vmatrix} -1 & 1\\ 2 & -1 \end{vmatrix} - 1\begin{vmatrix} 3 & 1\\ 2 & -1 \end{vmatrix} + 1\begin{vmatrix} 3 & -1\\ 2 & 2 \end{vmatrix} = 6(-1) - 1(-5) + 1(8) = 7 \]</li>
        <li><span class="step-t">สร้าง \(A_2\) และหา det</span> เท \(\vec{b}\) ลงหลักที่สอง (หลัก 1, 3 คงเดิม) กระจายตามแถวที่ 1 อีกครั้ง: เมทริกซ์ย่อยตัวแรก \(\begin{bmatrix} 3 & 1\\ 2 & -1 \end{bmatrix}\) ให้ \(-3 - 2 = -5\) ตัวที่สอง เครื่องหมาย − คูณตัวเลข 6 ได้ \(-6\), เมทริกซ์ย่อย \(\begin{bmatrix} 2 & 1\\ 1 & -1 \end{bmatrix}\) ให้ \(-2 - 1 = -3\) รวมเป็น \((-6)(-3) = +18\) ตัวที่สาม \(\begin{bmatrix} 2 & 3\\ 1 & 2 \end{bmatrix}\) ให้ \(4 - 3 = 1\):
        \[ A_2 = \begin{bmatrix} 1 & 6 & 1\\ 2 & 3 & 1\\ 1 & 2 & -1 \end{bmatrix}, \quad \det A_2 = 1(-3 - 2) - 6(-2 - 1) + 1(4 - 3) = -5 + 18 + 1 = 14 \]</li>
        <li><span class="step-t">สร้าง \(A_3\) และหา det</span> เท \(\vec{b}\) ลงหลักที่สาม: เมทริกซ์ย่อยตัวแรก \(\begin{bmatrix} -1 & 3\\ 2 & 2 \end{bmatrix}\) ให้ \(-2 - 6 = -8\) ตัวที่สอง เครื่องหมาย − คูณ 1, เมทริกซ์ย่อย \(\begin{bmatrix} 2 & 3\\ 1 & 2 \end{bmatrix}\) ให้ \(4 - 3 = 1\) จึงได้ \(-1\) ตัวที่สาม เครื่องหมาย + คูณ 6, เมทริกซ์ย่อย \(\begin{bmatrix} 2 & -1\\ 1 & 2 \end{bmatrix}\) ให้ \(4 + 1 = 5\) จึงได้ \(30\):
        \[ A_3 = \begin{bmatrix} 1 & 1 & 6\\ 2 & -1 & 3\\ 1 & 2 & 2 \end{bmatrix}, \quad \det A_3 = 1(-2 - 6) - 1(4 - 3) + 6(4 + 1) = -8 - 1 + 30 = 21 \]</li>
        <li><span class="step-t">กฎของคราเมอร์</span> หารทีละตัว — ทุกเศษหารด้วย \(\det A = 7\):
        \[ x_1 = \frac{7}{7} = 1, \qquad x_2 = \frac{14}{7} = 2, \qquad x_3 = \frac{21}{7} = 3 \;\Longrightarrow\; \vec{x} = (1, 2, 3) \]
        สรุป: \((x_1, x_2, x_3) = (1, 2, 3)\)</li>
        <li><span class="step-t">ตรวจคำตอบ</span> แทนกลับทั้งสามสมการ: สมการ 1 \(1 + 2 + 3 = 6\) ✓ สมการ 2 \(2(1) - 2 + 3 = 2 - 2 + 3 = 3\) ✓ สมการ 3 \(1 + 2(2) - 3 = 1 + 4 - 3 = 2\) ✓ ครบทุกสมการ คำตอบถูกต้อง</li>
      </ol>
    </div></details>
  </article>
</section>
