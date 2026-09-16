<!-- meta
title: 2.3 เมทริกซ์ผกผันของเมทริกซ์จัตุรัส
ch: 2
section: 2.3
page: ch2-3.html
-->

<div class="crumb">บทที่ 2 · การแปลงเชิงเส้นและพีชคณิตเมทริกซ์</div>
<h1 class="page-title">2.3 เมทริกซ์ผกผันของเมทริกซ์จัตุรัส</h1>
<p class="page-sub">"การหาร" ของโลกเมทริกซ์ — เราจะเรียนหาเมทริกซ์ผกผัน \(A^{-1}\) ด้วยการดำเนินการแถว
ใช้มันแก้ระบบเชิงเส้นรอบเดียวจบ รู้จักเมทริกซ์มูลฐาน และปิดท้ายด้วยทฤษฎีบทรวมฮวบทุกความรู้ของเทอมนี้:
<strong>ทฤษฎีบทเมทริกซ์หาตัวผกผันได้</strong> (Invertible Matrix Theorem)</p>

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
      <li>หาเมทริกซ์ผกผันของ \(2 \times 2\) ด้วยสูตรดีเทอร์มิแนนต์ และของ \(n \times n\) ด้วยการลดรูป \(\begin{bmatrix} A \mid I_n \end{bmatrix}\)</li>
      <li>ใช้ \(A^{-1}\) หาผลเฉลยของ \(A\vec{x} = \vec{b}\) ในรูป \(\vec{x} = A^{-1}\vec{b}\) และเขียนสมบัติของ inverse (\((AB)^{-1} = B^{-1}A^{-1}\) ฯลฯ)</li>
      <li>อธิบายเมทริกซ์มูลฐาน (elementary matrix) และความสัมพันธ์ \(EA\) = การดำเนินการแถว</li>
      <li>ตัดสินว่าเมทริกซ์หาตัวผกผันได้หรือไม่ และหาค่า \(h\) ที่ทำให้หาตัวผกผันได้/ไม่ได้</li>
      <li>ใช้ทฤษฎีบทเมทริกซ์หาตัวผกผันได้ (IMT) ตอบคำถามเชิงตรรกะได้ทั้ง 17 ข้อความสมมูล</li>
    </ul>
  </div>
</section>

<section class="block" id="lesson">
  <h2><span class="h2-dot">📖</span> บทเรียน</h2>

  <h3>1) นิยามเมทริกซ์ผกผัน</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม — เมทริกซ์ผกผัน / เอกฐาน / ไม่เอกฐาน</div>
    <p>ให้ \(A\) เป็นเมทริกซ์จัตุรัสขนาด \(n\) ถ้ามีเมทริกซ์ \(C\) ที่ \(AC = I_n = CA\) เราเรียก \(C\) ว่า <strong>เมทริกซ์ผกผัน</strong> ของ \(A\) เขียนแทน \(A^{-1}\)</p>
    <p>• เมทริกซ์ผกผันมี<em>ตัวเดียว</em>เสมอ (ถ้ามี): ถ้า \(B, C\) เป็น inverse ของ \(A\) ทั้งคู่ แล้ว \(B = B(AC) = (BA)C = C\)</p>
    <p>• \(A\) ที่<em>มี</em> inverse เรียกว่า <strong>ไม่เอกฐาน</strong> (nonsingular) / \(A\) ที่<em>ไม่มี</em> inverse เรียกว่า <strong>เอกฐาน</strong> (singular)</p>
  </div>

  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 2.3.1 — สูตร inverse ของ \(2 \times 2\)</div>
    \[ \begin{bmatrix} a & b\\ c & d \end{bmatrix}^{-1} = \frac{1}{ad - bc}\begin{bmatrix} d & -b\\ -c & a \end{bmatrix} \quad \text{มีค่าเมื่อ} \quad ad - bc \neq 0 \]
    <p>(จำท่า: "สลับทแยง เปลี่ยนเครื่องหมายตัวข้าง หารด้วย \(ad - bc\)") — ตัว \(ad - bc\) ก็คือ<strong>ดีเทอร์มิแนนต์</strong> ซึ่งจะเจาะลึกในหัวข้อ 2.4</p>
  </div>

  <h3>2) ใช้ inverse แก้สมการเมทริกซ์</h3>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 2.3.2</div>
    <p>ถ้า \(A\) ขนาด \(n\) มีเมทริกซ์ผกผันและ \(\vec{b} \in \mathbb{R}^n\) แล้ว \(A\vec{x} = \vec{b}\) มีผลเฉลยชุดเดียวคือ</p>
    \[ \vec{x} = A^{-1}\vec{b} \]
    <p>(พิสูจน์สั้น ๆ: \(A(A^{-1}\vec{b}) = (AA^{-1})\vec{b} = I\vec{b} = \vec{b}\) และถ้า \(A\vec{x} = \vec{b}\) แล้ว \(\vec{x} = A^{-1}(A\vec{x}) = A^{-1}\vec{b}\) เท่านั้น)</p>
  </div>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 2.3.3 — สมบัติของ inverse</div>
    <p>สำหรับ \(A, B\) จัตุรัสขนาด \(n\) ที่หาตัวผกผันได้:</p>
    <p>1. \((A^{-1})^{-1} = A\) &nbsp; 2. \((A^T)^{-1} = (A^{-1})^T\) &nbsp; 3. \((AB)^{-1} = B^{-1}A^{-1}\) <em>(ลำดับกลับ!)</em> และทั่วไป \((A_1A_2\cdots A_k)^{-1} = A_k^{-1}\cdots A_2^{-1}A_1^{-1}\)</p>
  </div>

  <div class="box box-warn">
    <div class="box-title">⚠️ ข้อควรระวัง</div>
    <p>• ผลบวกมักไม่มี inverse: \((A + B)^{-1} \neq A^{-1} + B^{-1}\) โดยทั่วไป</p>
    <p>• \((AB)^{-1} = B^{-1}A^{-1}\) <strong>ไม่ใช่</strong> \(A^{-1}B^{-1}\) — จำท่า "ถอดเสื้อกันฝนทีหลังใส่ ต้องถอดก่อน" (ตัวที่คูณทีหลัง ต้องถอดก่อน)</p>
    <p>• สมการ \(A\vec{x} = \vec{b}\) ใช้ \(\vec{x} = A^{-1}\vec{b}\) ได้<em>ต่อเมื่อ \(A\) จัตุรัสและมี inverse</em> เท่านั้น</p>
  </div>

  <h3>3) เมทริกซ์มูลฐาน (elementary matrix)</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม</div>
    <p><strong>เมทริกซ์มูลฐาน</strong> คือเมทริกซ์ที่ได้จากการดำเนินการแถวมูลฐาน<em>หนึ่งครั้ง</em>กับเมทริกซ์เอกลักษณ์ \(I_n\) เช่น</p>
    \[ E_1 = \begin{bmatrix} 1 & 0\\ -3 & 1 \end{bmatrix} \text{ (จาก } R_2 - 3R_1\text{)}, \quad E_2 = \begin{bmatrix} 0 & 1\\ 1 & 0 \end{bmatrix} \text{ (จาก } R_{12}\text{)}, \quad E_3 = \begin{bmatrix} 1 & 0\\ 0 & 5 \end{bmatrix} \text{ (จาก } 5R_2\text{)} \]
  </div>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 2.3.4 และ 2.3.5</div>
    <p>• ทฤษฎีบท 2.3.4: การคูณซ้ายด้วยเมทริกซ์มูลฐาน = การดำเนินการแถวแบบเดียวกัน นั่นคือถ้า \(E\) ได้จาก \(I_m\) ด้วยการดำเนินการแถวใด ๆ แล้ว \(EA\) คือผลลัพธ์ของการดำเนินการแถวนั้นกับ \(A\)</p>
    <p>• ทฤษฎีบท 2.3.5: เมทริกซ์จัตุรัส \(A\) ขนาด \(n\) หาตัวผกผันได้ ก็ต่อเมื่อ \(A\) <strong>สมมูลแถวกับ \(I_n\)</strong> (นั่นคือ RREF ของ \(A\) คือ \(I_n\))</p>
  </div>

  <h3>4) วิธีหา inverse ด้วยการลดรูป \(\begin{bmatrix} A \mid I_n \end{bmatrix}\)</h3>
  <div class="box box-idea">
    <div class="box-title">💡 หลักคิดของวิธีนี้</div>
    <p>ถ้าลำดับการดำเนินการแถว (คือเมทริกซ์มูลฐาน \(E_k \cdots E_2E_1\)) เปลี่ยน \(A\) เป็น \(I\) แล้วเมทริกซ์นั้นแหละคือ \(A^{-1}\) ดังนั้น:</p>
    \[ \begin{bmatrix} A \mid I_n \end{bmatrix} \xrightarrow{\ \text{การดำเนินการแถว}\ } \begin{bmatrix} I_n \mid A^{-1} \end{bmatrix} \]
    <p>ทำพร้อมกัน 2 ครึ่งในตารางเดียว — ถ้าครึ่งซ้ายลดรูปไม่ได้ \(I\) แสดงว่า \(A\) เอกฐาน (ไม่มี inverse)</p>
  </div>

  <h3>5) ทฤษฎีบทเมทริกซ์หาตัวผกผันได้ (Invertible Matrix Theorem — IMT)</h3>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 2.3.6 — 17 ข้อความสมมูล (สำหรับ \(A\) จัตุรัสขนาด \(n\))</div>
    <div class="tbl-wrap"><table class="tbl">
      <tr><th>กลุ่ม</th><th>ข้อความสมมูล (จริงพร้อมกันทั้งหมด หรือเท็จพร้อมกันทั้งหมด)</th></tr>
      <tr><td>inverse</td><td>1. \(A\) หาตัวผกผันได้ &nbsp; 10. มี \(C\) ที่ \(CA = I_n\) &nbsp; 11. มี \(D\) ที่ \(AD = I_n\) &nbsp; 12. \(A^T\) หาตัวผกผันได้</td></tr>
      <tr><td>รูปแบบขั้นบันได</td><td>2. \(A\) สมมูลแถวกับ \(I_n\) &nbsp; 3. \(A\) มีตำแหน่งตัวหลัก \(n\) ตำแหน่ง</td></tr>
      <tr><td>ระบบเชิงเส้น</td><td>4. \(A\vec{x} = \vec{0}\) มีเพียงผลเฉลยชัด &nbsp; 7. \(A\vec{x} = \vec{b}\) มีผลเฉลยทุก \(\vec{b} \in \mathbb{R}^n\)</td></tr>
      <tr><td>อิสระ/แผ่ทั่ว</td><td>5. หลักของ \(A\) อิสระเชิงเส้น &nbsp; 8. หลักของ \(A\) แผ่ทั่ว \(\mathbb{R}^n\) &nbsp; 13. หลักของ \(A\) เป็นฐานหลักสำหรับ \(\mathbb{R}^n\) &nbsp; 14. \(\operatorname{Col} A = \mathbb{R}^n\)</td></tr>
      <tr><td>การแปลงเชิงเส้น</td><td>6. \(\vec{x} \mapsto A\vec{x}\) 1-1 &nbsp; 9. \(\vec{x} \mapsto A\vec{x}\) ทั่วถึง</td></tr>
      <tr><td>แรงก์/ศูนยภาพ</td><td>15. \(\operatorname{rank} A = n\) &nbsp; 16. \(\operatorname{Nul} A = \{\vec{0}\}\) &nbsp; 17. \(\operatorname{nullity} A = 0\)</td></tr>
    </table></div>
    <p>เมื่อ \(A\) หาตัวผกผันได้ การแปลง \(T(\vec{x}) = A\vec{x}\) เรียกว่า <strong>หาตัวผกผันได้</strong> โดย \(T^{-1}(\vec{x}) = A^{-1}\vec{x}\)</p>
  </div>

  <div class="box box-warn">
    <div class="box-title">⚠️ ใช้ IMT ให้ถูกทาง</div>
    <p>• IMT ใช้ได้เฉพาะ<strong>เมทริกซ์จัตุรัส</strong> — ถ้า \(A\) ไม่จัตุรัส ข้อความพวกนี้ไม่สมมูลกัน (เช่น \(m \times n\) ที่ \(m \ne n\) อาจ 1-1 แต่ไม่ทั่วถึง)</p>
    <p>• ทุกข้อ "จริงพร้อมกัน" หรือ "เท็จพร้อมกัน" — รู้ว่าข้อใดข้อหนึ่งเท็จ → ทุกข้อเท็จ รู้ว่าข้อใดข้อหนึ่งจริง → ทุกข้อจริง นี่คือเครื่องมือตอบข้อสอบแบบ "ไม่ต้องคำนวณ"</p>
  </div>
</section>

<section class="block" id="examples">
  <h2><span class="h2-dot">✏️</span> ตัวอย่างโจทย์</h2>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 1</span><span class="tag easy">ง่าย</span><span class="ex-title">inverse ของ \(2 \times 2\) ด้วยสูตร</span></div>
    <div class="ex-body">
      <div class="ex-q">จงหาเมทริกซ์ผกผันของ \(A = \begin{bmatrix} 3 & 5\\ 1 & 2 \end{bmatrix}\) แล้วตรวจคำตอบ</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — ใช้สูตร 2×2: หา \(ad - bc\) ก่อน ถ้าเป็นศูนย์ = เอกฐาน จบ ถ้าไม่ใช่ แทนสูตรได้เลย</div>
      <ol class="steps">
        <li><span class="step-t">หาดีเทอร์มิแนนต์</span> \(ad - bc = 3(2) - 5(1) = 6 - 5 = 1 \neq 0\) → \(A\) ไม่เอกฐาน</li>
        <li><span class="step-t">แทนสูตร</span>
        \[ A^{-1} = \frac{1}{1}\begin{bmatrix} 2 & -5\\ -1 & 3 \end{bmatrix} = \begin{bmatrix} 2 & -5\\ -1 & 3 \end{bmatrix} \]</li>
        <li><span class="step-t">ตรวจคำตอบด้วย \(AA^{-1} = I_2\)</span>
        \[ AA^{-1} = \begin{bmatrix} 3 & 5\\ 1 & 2 \end{bmatrix}\begin{bmatrix} 2 & -5\\ -1 & 3 \end{bmatrix} = \begin{bmatrix} 6 - 5 & -15 + 15\\ 2 - 2 & -5 + 6 \end{bmatrix} = \begin{bmatrix} 1 & 0\\ 0 & 1 \end{bmatrix} \;\checkmark \]</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2</span><span class="tag easy">ง่าย</span><span class="ex-title">ใช้ \(A^{-1}\) แก้ระบบเชิงเส้น</span></div>
    <div class="ex-body">
      <div class="ex-q">จงใช้เมทริกซ์ผกผันหาผลเฉลยของระบบเชิงเส้น
      \[ \begin{aligned} 3x_1 + 5x_2 &= 11\\ x_1 + 2x_2 &= 4 \end{aligned} \]</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — เขียนเป็น \(A\vec{x} = \vec{b}\) แล้วตอบ \(\vec{x} = A^{-1}\vec{b}\) (ทฤษฎีบท 2.3.2) — ใช้ \(A\) จากตัวอย่างที่ 1</div>
      <ol class="steps">
        <li><span class="step-t">รูปสมการเมทริกซ์</span>
        \[ \begin{bmatrix} 3 & 5\\ 1 & 2 \end{bmatrix}\begin{bmatrix} x_1\\ x_2 \end{bmatrix} = \begin{bmatrix} 11\\ 4 \end{bmatrix} \]</li>
        <li><span class="step-t">คูณซ้ายด้วย \(A^{-1}\)</span>
        \[ \vec{x} = A^{-1}\vec{b} = \begin{bmatrix} 2 & -5\\ -1 & 3 \end{bmatrix}\begin{bmatrix} 11\\ 4 \end{bmatrix} = \begin{bmatrix} 22 - 20\\ -11 + 12 \end{bmatrix} = \begin{bmatrix} 2\\ 1 \end{bmatrix} \]</li>
        <li><span class="step-t">ตรวจคำตอบ</span> \(3(2) + 5(1) = 11\) ✓ และ \(2 + 2(1) = 4\) ✓ — และโดยทฤษฎีบท 2.3.2 นี่คือผลเฉลย<em>ชุดเดียว</em></li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3</span><span class="tag hard">ยาก</span><span class="ex-title">inverse \(3 \times 3\) ด้วย \(\begin{bmatrix} A \mid I \end{bmatrix}\) (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">จงหาเมทริกซ์ผกผันของ \(A = \begin{bmatrix} 1 & 0 & 3\\ 0 & 2 & 0\\ 2 & 0 & 5 \end{bmatrix}\) (ถ้ามี)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — ลดรูป \(\begin{bmatrix} A \mid I_3 \end{bmatrix}\) ให้ครึ่งซ้ายเป็น \(I_3\) ครึ่งขวาที่เหลือคือ \(A^{-1}\) — ดำเนินการแถวทั้งสองครึ่ง<em>พร้อมกัน</em>ทุกขั้น</div>
      <ol class="steps">
        <li><span class="step-t">เขียนเมทริกซ์แต่งเติมและเริ่มลดรูป</span>
        \[ \begin{bmatrix} 1 & 0 & 3 & 1 & 0 & 0\\ 0 & 2 & 0 & 0 & 1 & 0\\ 2 & 0 & 5 & 0 & 0 & 1 \end{bmatrix} \xrightarrow{\,R_3 - 2R_1\,} \begin{bmatrix} 1 & 0 & 3 & 1 & 0 & 0\\ 0 & 2 & 0 & 0 & 1 & 0\\ 0 & 0 & -1 & -2 & 0 & 1 \end{bmatrix} \xrightarrow{\,\tfrac{1}{2}R_2\,} \begin{bmatrix} 1 & 0 & 3 & 1 & 0 & 0\\ 0 & 1 & 0 & 0 & \tfrac{1}{2} & 0\\ 0 & 0 & -1 & -2 & 0 & 1 \end{bmatrix} \]</li>
        <li><span class="step-t">ปรับแถวที่ 3 ให้เป็น 1 ตัวนำ แล้วกวาดขึ้น</span>
        \[ \xrightarrow{\,-R_3\,} \begin{bmatrix} 1 & 0 & 3 & 1 & 0 & 0\\ 0 & 1 & 0 & 0 & \tfrac{1}{2} & 0\\ 0 & 0 & 1 & 2 & 0 & -1 \end{bmatrix} \xrightarrow{\,R_1 - 3R_3\,} \begin{bmatrix} 1 & 0 & 0 & -5 & 0 & 3\\ 0 & 1 & 0 & 0 & \tfrac{1}{2} & 0\\ 0 & 0 & 1 & 2 & 0 & -1 \end{bmatrix} \]</li>
        <li><span class="step-t">อ่านคำตอบ</span> ครึ่งซ้ายได้ \(I_3\) → \(A\) ไม่เอกฐาน และ
        \[ A^{-1} = \begin{bmatrix} -5 & 0 & 3\\ 0 & \tfrac{1}{2} & 0\\ 2 & 0 & -1 \end{bmatrix} \]</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> \(AA^{-1}\) เช็กหลักแรก: \((1(-5) + 0 + 3(2),\; 0 + 2(\tfrac12) + 0,\; 2(-5) + 0 + 5(-1)) = (1, 1, -15)\)? ระวัง คำนวณแถวที่ 3 ใหม่: \(2(-5) + 0(\tfrac{1}{2}) + 5(-1) = -10 - 5 = -15\)?? — เช็กให้เนี้ยบ: แถว 3 ของ \(A\) คือ \((2, 0, 5)\) จุดกับหลักแรกของ \(A^{-1}\) คือ \((-5, 0, 2)\): \(2(-5) + 0(0) + 5(2) = -10 + 10 = 0\) ✓ ส่วนแถว 1: \(1(-5) + 0(0) + 3(2) = 1\) ✓ แถว 2: \(0 + 2(\tfrac12) + 0 = 1\) ✓ ครบ \(I_3\)</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 4</span><span class="tag hard">ยาก</span><span class="ex-title">ตรวจว่ามี inverse ไหม + หา \(h\) ที่มี inverse (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">(ก) จงใช้ทฤษฎีบทเมทริกซ์หาตัวผกผันได้ตรวจสอบว่า \(A = \begin{bmatrix} 1 & -2 & -1\\ -1 & 5 & 6\\ 5 & -4 & 5 \end{bmatrix}\) มีเมทริกซ์ผกผันหรือไม่<br>
      (ข) จงหาค่าของ \(h\) ทั้งหมดที่ทำให้ \(B = \begin{bmatrix} 1 & -7 & h\\ 2 & 1 & 1\\ 1 & 3 & 2 \end{bmatrix}\) หาเมทริกซ์ผกผันได้</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — ลดรูปจน REF แล้วนับตำแหน่งตัวหลัก: ได้ครบ \(n\) ตำแหน่ง = มี inverse สำหรับ \(h\) ให้วิเคราะห์ว่าตัวนำหลักสุดท้ายเป็นศูนย์เมื่อไร</div>
      <ol class="steps">
        <li><span class="step-t">(ก) ลดรูปจนได้รูปแบบขั้นบันได</span>
        \[ A \xrightarrow{\substack{R_2 + R_1\\ R_3 - 5R_1}} \begin{bmatrix} 1 & -2 & -1\\ 0 & 3 & 5\\ 0 & 6 & 10 \end{bmatrix} \xrightarrow{\,R_3 - 2R_2\,} \begin{bmatrix} 1 & -2 & -1\\ 0 & 3 & 5\\ 0 & 0 & 0 \end{bmatrix} \]
        มีตำแหน่งตัวหลักเพียง 2 ตำแหน่ง &lt; 3 → โดยข้อ 3 ของ IMT \(A\) <strong>ไม่มีเมทริกซ์ผกผัน</strong> (เอกฐาน)</li>
        <li><span class="step-t">(ข) จัดแถวแล้วลดรูป</span>
        \[ B \xrightarrow{\,R_{12}\,} \begin{bmatrix} 1 & 3 & 2\\ 2 & 1 & 1\\ 1 & -7 & h \end{bmatrix} \xrightarrow{\substack{R_2 - 2R_1\\ R_3 - R_1}} \begin{bmatrix} 1 & 3 & 2\\ 0 & -5 & -3\\ 0 & -10 & h - 2 \end{bmatrix} \xrightarrow{\,R_3 - 2R_2\,} \begin{bmatrix} 1 & 3 & 2\\ 0 & -5 & -3\\ 0 & 0 & h + 4 \end{bmatrix} \]
        (แถว 3: \(-10 - 2(-5) = 0\), \(h - 2 - 2(-3) = h + 4\))</li>
        <li><span class="step-t">(ข) ตัดสิน</span> \(B\) มีตำแหน่งตัวหลักครบ 3 ตำแหน่ง ก็ต่อเมื่อ \(h + 4 \neq 0\) → โดย IMT \(B\) หาตัวผกผันได้ ก็ต่อเมื่อ \(h \neq -4\)</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจ (ข):</span> แทน \(h = -4\): แถวที่ 3 เป็น \(\begin{bmatrix} 0 & 0 & 0 \end{bmatrix}\) → \(B\vec{x} = \vec{0}\) มีผลเฉลยไม่ชัด → ขัดข้อ 4 ของ IMT → ไม่มี inverse จริง ✓</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5</span><span class="tag hard">ยาก</span><span class="ex-title">ใช้ IMT ตอบแบบไม่ต้องคำนวณ</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(A\) เป็นเมทริกซ์จัตุรัสขนาด 4 ที่ระบบ \(A\vec{x} = \vec{b}\) มีผลเฉลยไม่ต้องกันสำหรับเวกเตอร์ \(\vec{b}\) บางตัวใน \(\mathbb{R}^4\) จงตอบคำถามต่อไปนี้พร้อมเหตุผลโดยอ้างข้อของ IMT<br>
      (ก) \(A\) หาตัวผกผันได้หรือไม่ &nbsp; (ข) ระบบ \(A\vec{x} = \vec{0}\) มีผลเฉลยไม่ชัดหรือไม่ &nbsp; (ค) หลักของ \(A\) แผ่ทั่ว \(\mathbb{R}^4\) หรือไม่ และ \(\operatorname{rank} A\), \(\operatorname{nullity} A\) เป็นไปได้เท่าไร</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — ข้อความ "มีผลเฉลยทุก \(\vec{b}\)" (ข้อ 7) เท็จ → ทุกข้อของ IMT เท็จ → ตอบทั้งหมดในทิศทางลบ</div>
      <ol class="steps">
        <li><span class="step-t">จุดเริ่ม: ข้อ 7 เท็จ</span> มี \(\vec{b}\) ที่ \(A\vec{x} = \vec{b}\) ไม่ต้องกัน → ข้อความข้อ 7 ของ IMT เป็นเท็จ → ทุกข้อความของ IMT เป็นเท็จ</li>
        <li><span class="step-t">(ก) ไม่มี inverse</span> ข้อ 1 เท็จ — ถ้า \(A\) มี inverse จะได้ผลเฉลย \(\vec{x} = A^{-1}\vec{b}\) ทุก \(\vec{b}\) ขัดกับสมมติฐาน</li>
        <li><span class="step-t">(ข) มีผลเฉลยไม่ชัด</span> ข้อ 4 เท็จ หมายความว่า \(A\vec{x} = \vec{0}\) <strong>มีผลเฉลยไม่ชัด</strong> (จำได้จาก 1.4: ไม่มีตัวแปรเสรี ⟺ ชัดเท่านั้น)</li>
        <li><span class="step-t">(ค) ไม่แผ่ทั่ว + ตัวเลขที่เป็นไปได้</span> ข้อ 8 เท็จ → หลักของ \(A\) <em>ไม่</em>แผ่ทั่ว \(\mathbb{R}^4\) และจาก 2.2: \(\operatorname{rank} A < 4\) และ \(\operatorname{nullity} A > 0\) โดย \(\operatorname{rank} + \operatorname{nullity} = 4\) เป็นไปได้เช่น \(\operatorname{rank} = 3, \operatorname{nullity} = 1\) (หรือคู่อื่นที่ผลรวม 4)</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 6</span><span class="tag hard">ยาก</span><span class="ex-title">เมทริกซ์มูลฐาน: คูณซ้าย = ดำเนินการแถว + inverse ของเมทริกซ์มูลฐาน</span></div>
    <div class="ex-body">
      <div class="ex-q">กำหนด \(E_1 = \begin{bmatrix} 1 & 0 & 0\\ 0 & 0 & 1\\ 0 & 1 & 0 \end{bmatrix}\), \(E_2 = \begin{bmatrix} 1 & 0 & 0\\ 0 & 3 & 0\\ 0 & 0 & 1 \end{bmatrix}\), \(E_3 = \begin{bmatrix} 1 & 0 & 0\\ -4 & 1 & 0\\ 0 & 0 & 1 \end{bmatrix}\) และ \(A = \begin{bmatrix} a & b & c\\ d & e & f\\ g & h & i \end{bmatrix}\)<br>
      จงหา \(E_1A, E_2A, E_3A\) และจงหา \(E_1^{-1}, E_2^{-1}, E_3^{-1}\) พร้อมอธิบายหน้าที่ของแต่ละตัว</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — แต่ละ \(E_j\) คือ "คำสั่งดำเนินการแถว 1 ครั้ง" ที่ถูกเก็บเป็นเมทริกซ์ และ inverse ของมันคือ "คำสั่งย้อนกลับ"</div>
      <ol class="steps">
        <li><span class="step-t">คำนวณผลคูณ</span>
        \[ E_1A = \begin{bmatrix} a & b & c\\ g & h & i\\ d & e & f \end{bmatrix} \;(\text{สลับ } R_2 \leftrightarrow R_3) \quad
        E_2A = \begin{bmatrix} a & b & c\\ 3d & 3e & 3f\\ g & h & i \end{bmatrix} \;(3R_2) \quad
        E_3A = \begin{bmatrix} a & b & c\\ d - 4a & e - 4b & f - 4c\\ g & h & i \end{bmatrix} \;(R_2 - 4R_1) \]</li>
        <li><span class="step-t">inverse = คำสั่งย้อนกลับ</span> สลับแถวคืนด้วยการสลับอีกที, คูณ \(3\) คืนด้วยการคูณ \(\tfrac{1}{3}\), ลบ \(4R_1\) คืนด้วยการบวก \(4R_1\):
        \[ E_1^{-1} = E_1 \quad (\text{สลับสองครั้งคืนเดิม}), \qquad E_2^{-1} = \begin{bmatrix} 1 & 0 & 0\\ 0 & \tfrac{1}{3} & 0\\ 0 & 0 & 1 \end{bmatrix}, \qquad E_3^{-1} = \begin{bmatrix} 1 & 0 & 0\\ 4 & 1 & 0\\ 0 & 0 & 1 \end{bmatrix} \]</li>
        <li><span class="step-t">ตรวจ</span> \(E_3E_3^{-1} = \begin{bmatrix} 1 & 0 & 0\\ -4+4 & 1 & 0\\ 0 & 0 & 1 \end{bmatrix} = I_3\) ✓ — นี่คือเหตุผลที่เมทริกซ์มูลฐานทุกตัวหาตัวผกผันได้เสมอ</li>
      </ol>
    </div>
  </article>
</section>

<section class="block" id="recipe">
  <h2><span class="h2-dot">⚡</span> สูตรสำเร็จ — ท่าที่ใช้ทำโจทย์หัวข้อนี้</h2>
  <div class="recipe">
    <div class="recipe-head">🪜 ท่าหลัก: หา \(A^{-1}\) ด้วยการดำเนินการแถว</div>
    <div class="recipe-body">
      <ol>
        <li>ขนาด \(2\times2\): ใช้สูตร \(\dfrac{1}{ad-bc}\begin{bmatrix} d & -b\\ -c & a \end{bmatrix}\) (เช็ก \(ad - bc \neq 0\) ก่อน)</li>
        <li>ขนาด \(n \ge 3\): เขียน \(\begin{bmatrix} A \mid I_n \end{bmatrix}\) → ลดรูปจนครึ่งซ้ายเป็น \(I_n\) → ครึ่งขวาคือ \(A^{-1}\)</li>
        <li>ถ้าครึ่งซ้ายเกิดแถวล้า (ไม่ได้ \(I_n\)) → \(A\) เอกฐาน → <em>ไม่มี inverse</em> สรุปจบทันที</li>
        <li>ตรวจคำตอบด้วย \(AA^{-1} = I_n\) เสมอ</li>
        <li>เจอโจทย์ "หา \(h\) ที่มี inverse": ลดรูปจน REF โดยไม่แต่งเติม → หาเงื่อนไขที่ตัวนำครบ \(n\) ตำแหน่ง</li>
      </ol>
    </div>
  </div>
  <div class="key-grid">
    <div class="key-card"><div class="k-title">ท่า: แก้ระบบด้วย inverse</div>\(A\vec{x} = \vec{b}\), \(A\) ไม่เอกฐาน → \(\vec{x} = A^{-1}\vec{b}\) (ชุดเดียว) — ประหยัดเวลาเมื่อต้องแก้หลาย \(\vec{b}\) ที่ \(A\) เดิม</div>
    <div class="key-card"><div class="k-title">ท่า: จำสมบัติสำคัญ</div>\((AB)^{-1} = B^{-1}A^{-1}\) (กลับลำดับ), \((A^T)^{-1} = (A^{-1})^T\), \((A^{-1})^{-1} = A\)</div>
    <div class="key-card"><div class="k-title">ท่า: IMT ตอบเร็ว</div>จำกลุ่มข้อ: มี inverse ⟺ ตัวนำครบ \(n\) ⟺ \(A\vec{x}=0\) ชัดเท่านั้น ⟺ หลักอิสระ+แผ่ทั่ว ⟺ 1-1+ทั่วถึง ⟺ rank \(n\), nullity 0</div>
    <div class="key-card"><div class="k-title">ท่า: เมทริกซ์มูลฐาน</div>\(EA\) = ดำเนินการแถวบน \(A\) / inverse ของ \(E\) = การดำเนินการย้อนกลับ / ทุก \(E\) ไม่เอกฐาน</div>
  </div>
</section>

<section class="block" id="practice">
  <h2><span class="h2-dot">🏋️</span> โจทย์ซ้อมมือ (6 ข้อ)</h2>
  <p class="small">ลองทำเองก่อน แล้วค่อยกดเปิดคำใบ้ → เฉลยทีละขั้น เมื่อทำได้แล้วติ๊ก ✓ เพื่อบันทึกความคืบหน้า</p>

  <article class="pr-card" data-pkey="p2-3-1">
    <div class="pr-head"><span class="pr-num">ข้อ 1</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาเมทริกซ์ผกผันของ \(2 \times 2\) เมทริกซ์ต่อไปนี้ (ถ้ามี)<br>
      (ก) \(A = \begin{bmatrix} 1 & 2\\ -1 & 3 \end{bmatrix}\) &nbsp;
      (ข) \(B = \begin{bmatrix} 2 & 4\\ 0 & -1 \end{bmatrix}\) &nbsp;
      (ค) \(C = \begin{bmatrix} 3 & 4\\ 5 & 6 \end{bmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">หา \(ad - bc\) ทุกตัวก่อน แล้วแทนสูตร "สลับทแยง เปลี่ยนเครื่องหมายข้าง หารด้วย det"</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ใช้ทฤษฎีบท 2.3.1</p>
      <ol class="steps">
        <li><span class="step-t">(ก)</span> \(\det A = 1(3) - 2(-1) = 5 \neq 0\)
        \[ A^{-1} = \frac{1}{5}\begin{bmatrix} 3 & -2\\ 1 & 1 \end{bmatrix} \]</li>
        <li><span class="step-t">(ข)</span> \(\det B = 2(-1) - 4(0) = -2 \neq 0\)
        \[ B^{-1} = \frac{1}{-2}\begin{bmatrix} -1 & -4\\ 0 & 2 \end{bmatrix} = \begin{bmatrix} \tfrac{1}{2} & 2\\ 0 & -1 \end{bmatrix} \]</li>
        <li><span class="step-t">(ค)</span> \(\det C = 3(6) - 4(5) = 18 - 20 = -2 \neq 0\)
        \[ C^{-1} = \frac{1}{-2}\begin{bmatrix} 6 & -4\\ -5 & 3 \end{bmatrix} = \begin{bmatrix} -3 & 2\\ \tfrac{5}{2} & -\tfrac{3}{2} \end{bmatrix} \]</li>
        <li><span class="step-t">ตรวจ (ก)</span> \(A \cdot \tfrac{1}{5}\begin{bmatrix} 3 & -2\\ 1 & 1 \end{bmatrix} = \tfrac{1}{5}\begin{bmatrix} 3+2 & -2+2\\ -3+3 & 2+3 \end{bmatrix} = I_2\) ✓</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p2-3-2">
    <div class="pr-head"><span class="pr-num">ข้อ 2</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>โดยอาศัยเมทริกซ์ผกผันจากข้อก่อนหน้า จงหาผลเฉลยของระบบเชิงเส้น
      \[ \begin{aligned} x_1 + 2x_2 &= -4\\ -x_1 + 3x_2 &= 1 \end{aligned} \]</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">ระบบนี้คือ \(A\vec{x} = \vec{b}\) โดย \(A\) จากข้อ 1 (ก) → \(\vec{x} = A^{-1}\vec{b}\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> \(\vec{x} = A^{-1}\vec{b}\) โดยทฤษฎีบท 2.3.2</p>
      <ol class="steps">
        <li><span class="step-t">คำนวณ \(A^{-1}\vec{b}\)</span>
        \[ \vec{x} = \frac{1}{5}\begin{bmatrix} 3 & -2\\ 1 & 1 \end{bmatrix}\begin{bmatrix} -4\\ 1 \end{bmatrix} = \frac{1}{5}\begin{bmatrix} -12 - 2\\ -4 + 1 \end{bmatrix} = \frac{1}{5}\begin{bmatrix} -14\\ -3 \end{bmatrix} = \begin{bmatrix} -\tfrac{14}{5}\\ -\tfrac{3}{5} \end{bmatrix} \]</li>
        <li><span class="step-t">ตรวจคำตอบ</span> \(-\tfrac{14}{5} + 2(-\tfrac{3}{5}) = -\tfrac{14 + 6}{5} = -4\) ✓ และ \(+\tfrac{14}{5} + 3(-\tfrac{3}{5}) = \tfrac{14 - 9}{5} = 1\) ✓</li>
        <li><span class="step-t">สรุป</span> ผลเฉลยชุดเดียวคือ \(\left(-\tfrac{14}{5}, -\tfrac{3}{5}\right)\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p2-3-3">
    <div class="pr-head"><span class="pr-num">ข้อ 3</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาเมทริกซ์ผกผันของ \(A = \begin{bmatrix} -1 & 2 & -5\\ 2 & 1 & 0\\ 4 & -2 & 5 \end{bmatrix}\) (ถ้ามี)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">ลดรูป \(\begin{bmatrix} A \mid I_3 \end{bmatrix}\) — ระวังเครื่องหมายลบ ค่อย ๆ ทำ แล้วตรวจด้วย \(AA^{-1} = I_3\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ลดรูปจนครึ่งซ้ายเป็น \(I_3\)</p>
      <ol class="steps">
        <li><span class="step-t">สลับให้เริ่มสวยและกวาดหลักที่ 1</span>
        \[ \begin{bmatrix} -1 & 2 & -5 & 1 & 0 & 0\\ 2 & 1 & 0 & 0 & 1 & 0\\ 4 & -2 & 5 & 0 & 0 & 1 \end{bmatrix} \xrightarrow{\,-R_1\,} \begin{bmatrix} 1 & -2 & 5 & -1 & 0 & 0\\ 2 & 1 & 0 & 0 & 1 & 0\\ 4 & -2 & 5 & 0 & 0 & 1 \end{bmatrix} \xrightarrow{\substack{R_2 - 2R_1\\ R_3 - 4R_1}} \begin{bmatrix} 1 & -2 & 5 & -1 & 0 & 0\\ 0 & 5 & -10 & 2 & 1 & 0\\ 0 & 6 & -15 & 4 & 0 & 1 \end{bmatrix} \]</li>
        <li><span class="step-t">กวาดหลักที่ 2</span> ใช้ \(R_3 - \tfrac{6}{5}R_2\):
        \[ \xrightarrow{\,R_3 - \tfrac{6}{5}R_2\,} \begin{bmatrix} 1 & -2 & 5 & -1 & 0 & 0\\ 0 & 5 & -10 & 2 & 1 & 0\\ 0 & 0 & -3 & \tfrac{8}{5} & -\tfrac{6}{5} & 1 \end{bmatrix} \xrightarrow{\,-\tfrac{1}{3}R_3\,} \begin{bmatrix} 1 & -2 & 5 & -1 & 0 & 0\\ 0 & 5 & -10 & 2 & 1 & 0\\ 0 & 0 & 1 & -\tfrac{8}{15} & \tfrac{2}{5} & -\tfrac{1}{3} \end{bmatrix} \]</li>
        <li><span class="step-t">กวาดหลักที่ 3 ขึ้น แล้วปรับมาตรา/กวาดหลักที่ 2</span>
        \[ \xrightarrow{\substack{R_2 + 10R_3\\ R_1 - 5R_3}} \begin{bmatrix} 1 & -2 & 0 & \tfrac{5}{3} & -2 & \tfrac{5}{3}\\ 0 & 5 & 0 & -\tfrac{10}{3} & 5 & -\tfrac{10}{3}\\ 0 & 0 & 1 & -\tfrac{8}{15} & \tfrac{2}{5} & -\tfrac{1}{3} \end{bmatrix} \xrightarrow{\substack{\tfrac{1}{5}R_2\\ R_1 + 2R_2}} \begin{bmatrix} 1 & 0 & 0 & \tfrac{1}{3} & 0 & \tfrac{1}{3}\\ 0 & 1 & 0 & -\tfrac{2}{3} & 1 & -\tfrac{2}{3}\\ 0 & 0 & 1 & -\tfrac{8}{15} & \tfrac{2}{5} & -\tfrac{1}{3} \end{bmatrix} \]</li>
        <li><span class="step-t">สรุป</span>
        \[ A^{-1} = \begin{bmatrix} \tfrac{1}{3} & 0 & \tfrac{1}{3}\\ -\tfrac{2}{3} & 1 & -\tfrac{2}{3}\\ -\tfrac{8}{15} & \tfrac{2}{5} & -\tfrac{1}{3} \end{bmatrix} \;\; \Big(= \tfrac{1}{15}\begin{bmatrix} 5 & 0 & 5\\ -10 & 15 & -10\\ -8 & 6 & -5 \end{bmatrix}\Big) \]</li>
        <li><span class="step-t">ตรวจ (ตัวอย่าง 1 ตำแหน่ง)</span> แถว 1 ของ \(A\) จุดหลัก 1 ของ \(A^{-1}\): \(-1 \cdot \tfrac{1}{3} + 2 \cdot (-\tfrac{2}{3}) + (-5)(-\tfrac{8}{15}) = -\tfrac{1}{3} - \tfrac{4}{3} + \tfrac{8}{3} = 1\) ✓</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p2-3-4">
    <div class="pr-head"><span class="pr-num">ข้อ 4</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาเมทริกซ์ผกผันของ \(A = \begin{bmatrix} 1 & 0 & 0 & 0\\ 2 & 1 & 0 & 0\\ 4 & 2 & 1 & 0\\ -2 & 3 & 1 & 1 \end{bmatrix}\) (ถ้ามี)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">เมทริกซ์สามเหลี่ยมล่างที่ทแยงเป็น 1 — กวาดทีละหลักจะกลายเป็น \(I\) ได้ง่าย ๆ (ตัวนำพร้อมอยู่แล้ว แค่กวาดขึ้น)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> เมทริกซ์สามเหลี่ยมล่างทแยง 1 ไม่เอกฐานแน่นอน — ลดรูป \(\begin{bmatrix} A \mid I_4 \end{bmatrix}\)</p>
      <ol class="steps">
        <li><span class="step-t">เขียน \(\begin{bmatrix} A \mid I_4 \end{bmatrix}\) และกวาดหลักที่ 1</span>
        \[ \xrightarrow{\substack{R_2 - 2R_1\\ R_3 - 4R_1\\ R_4 + 2R_1}} \left[\begin{array}{cccc|cccc} 1 & 0 & 0 & 0 & 1 & 0 & 0 & 0\\ 0 & 1 & 0 & 0 & -2 & 1 & 0 & 0\\ 0 & 2 & 1 & 0 & -4 & 0 & 1 & 0\\ 0 & 3 & 1 & 1 & 2 & 0 & 0 & 1 \end{array}\right] \]</li>
        <li><span class="step-t">กวาดหลักที่ 2</span>
        \[ \xrightarrow{\substack{R_3 - 2R_2\\ R_4 - 3R_2}} \left[\begin{array}{cccc|cccc} 1 & 0 & 0 & 0 & 1 & 0 & 0 & 0\\ 0 & 1 & 0 & 0 & -2 & 1 & 0 & 0\\ 0 & 0 & 1 & 0 & 0 & -2 & 1 & 0\\ 0 & 0 & 1 & 1 & 8 & -3 & 0 & 1 \end{array}\right] \xrightarrow{\,R_4 - R_3\,} \left[\begin{array}{cccc|cccc} 1 & 0 & 0 & 0 & 1 & 0 & 0 & 0\\ 0 & 1 & 0 & 0 & -2 & 1 & 0 & 0\\ 0 & 0 & 1 & 0 & 0 & -2 & 1 & 0\\ 0 & 0 & 0 & 1 & 8 & -1 & -1 & 1 \end{array}\right] \]</li>
        <li><span class="step-t">สรุป</span> ครึ่งซ้ายเป็น \(I_4\) แล้ว:
        \[ A^{-1} = \begin{bmatrix} 1 & 0 & 0 & 0\\ -2 & 1 & 0 & 0\\ 0 & -2 & 1 & 0\\ 8 & -1 & -1 & 1 \end{bmatrix} \]</li>
        <li><span class="step-t">ตรวจ</span> แถวที่ 4 ของ \(A\) คือ \((-2, 3, 1, 1)\) จุดกับหลักที่ 1 ของ \(A^{-1}\) ซึ่งคือ \((1, -2, 0, 8)\): \((-2)(1) + 3(-2) + 1(0) + 1(8) = -2 - 6 + 0 + 8 = 0\) ✓ (และกับหลักที่ 4: \((-2)(0) + 3(0) + 1(-1) + 1(1) = 0\) ✓)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p2-3-5">
    <div class="pr-head"><span class="pr-num">ข้อ 5</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาเมทริกซ์ไม่เอกฐาน \(C\) ซึ่งทำให้ \(CA\) เป็นเมทริกซ์ขั้นบันไดลดรูป และบอกแรงก์ของ \(A\) เมื่อ
      \(A = \begin{bmatrix} 1 & 1 & 0 & -1\\ 3 & 2 & 1 & 1\\ 1 & 0 & 1 & 3 \end{bmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">ลดรูป \(\begin{bmatrix} A \mid I_3 \end{bmatrix}\) จนครึ่งซ้ายเป็น RREF แล้วครึ่งขวาคือ \(C\) (ทฤษฎีบท 2.3.4 — ลำดับการดำเนินการแถวถูก "บันทึก" ไว้ที่ครึ่งขวา)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> เมทริกซ์ \(C\) = ผลคูณเมทริกซ์มูลฐานที่ทำให้ \(A\) กลายเป็น RREF — หาได้จากการลดรูป \(\begin{bmatrix} A \mid I_3 \end{bmatrix}\)</p>
      <ol class="steps">
        <li><span class="step-t">ลดรูปจนได้ RREF พร้อมติดตามครึ่งขวา</span>
        \[ \left[\begin{array}{cccc|ccc} 1 & 1 & 0 & -1 & 1 & 0 & 0\\ 3 & 2 & 1 & 1 & 0 & 1 & 0\\ 1 & 0 & 1 & 3 & 0 & 0 & 1 \end{array}\right] \xrightarrow{\substack{R_2 - 3R_1\\ R_3 - R_1}} \left[\begin{array}{cccc|ccc} 1 & 1 & 0 & -1 & 1 & 0 & 0\\ 0 & -1 & 1 & 4 & -3 & 1 & 0\\ 0 & -1 & 1 & 4 & -1 & 0 & 1 \end{array}\right] \xrightarrow{\,R_3 - R_2\,} \left[\begin{array}{cccc|ccc} 1 & 1 & 0 & -1 & 1 & 0 & 0\\ 0 & -1 & 1 & 4 & -3 & 1 & 0\\ 0 & 0 & 0 & 0 & 2 & -1 & 1 \end{array}\right] \]</li>
        <li><span class="step-t">ปรับ RREF ให้เนี้ยบ</span>
        \[ \xrightarrow{\,-R_2\,} \left[\begin{array}{cccc|ccc} 1 & 1 & 0 & -1 & 1 & 0 & 0\\ 0 & 1 & -1 & -4 & 3 & -1 & 0\\ 0 & 0 & 0 & 0 & 2 & -1 & 1 \end{array}\right] \xrightarrow{\,R_1 - R_2\,} \left[\begin{array}{cccc|ccc} 1 & 0 & 1 & 3 & -2 & 1 & 0\\ 0 & 1 & -1 & -4 & 3 & -1 & 0\\ 0 & 0 & 0 & 0 & 2 & -1 & 1 \end{array}\right] \]</li>
        <li><span class="step-t">สรุป</span>
        \[ C = \begin{bmatrix} -2 & 1 & 0\\ 3 & -1 & 0\\ 2 & -1 & 1 \end{bmatrix}, \qquad CA = \text{RREF}(A) = \begin{bmatrix} 1 & 0 & 1 & 3\\ 0 & 1 & -1 & -4\\ 0 & 0 & 0 & 0 \end{bmatrix} \]
        มีตัวนำ 2 ตำแหน่ง → <strong>\(\operatorname{rank} A = 2\)</strong> และเนื่องจากเกิดแถวล้า \(A\) เป็นเมทริกซ์เอกฐาน (ไม่มี inverse)</li>
        <li><span class="step-t">ตรวจ</span> \(CA\): แถวแรกของ \(C\) คูณ \(A\): \(-2(1,1,0,-1) + 1(3,2,1,1) + 0 = (1, 0, 1, 3)\) ✓ ตรงแถวแรกของ RREF</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p2-3-6">
    <div class="pr-head"><span class="pr-num">ข้อ 6</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(A\) เป็นเมทริกซ์จัตุรัสขนาด 5 จงตอบคำถามต่อไปนี้พร้อมอ้างข้อของทฤษฎีบทเมทริกซ์หาตัวผกผันได้<br>
      (ก) ถ้ารู้ว่าหลักของ \(A\) เป็นฐานหลักสำหรับ \(\mathbb{R}^5\) จะสรุปได้ว่า \(A\) หาตัวผกผันได้หรือไม่<br>
      (ข) ถ้ารู้ว่าระบบ \(A\vec{x} = \vec{b}\) มีผลเฉลยไม่ต้องกันสำหรับ \(\vec{b}\) บางตัว จะสรุปเกี่ยวกับ \(\operatorname{rank} A\), \(\operatorname{nullity} A\), สมบัติ 1-1 และทั่วถึงของ \(\vec{x} \mapsto A\vec{x}\) ได้อย่างไร<br>
      (ค) ถ้า \(\operatorname{rank} A = 5\) จะสรุปได้ว่า \(A\vec{x} = \vec{0}\) มีผลเฉลยเช่นไร และการแปลง \(\vec{x} \mapsto A\vec{x}\) มีสมบัติอย่างไร</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">ทุกข้อตอบด้วยหลัก "จริงพร้อมกันทั้งหมด เท็จพร้อมกันทั้งหมด" ของ IMT</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> หยิบข้อที่รู้ แล้วลากไปยังข้อที่ถามผ่าน IMT</p>
      <ol class="steps">
        <li><span class="step-t">(ก) ได้ — มี inverse</span> "หลักเป็นฐานหลักสำหรับ \(\mathbb{R}^5\)" (ข้อ 13) จริง → ทุกข้อของ IMT จริง → โดยข้อ 1 \(A\) <strong>หาตัวผกผันได้</strong></li>
        <li><span class="step-t">(ข) ข้อ 7 เท็จ → ทุกข้อเท็จ</span><br>
        • ข้อ 15 เท็จ: \(\operatorname{rank} A < 5\) (จริง ๆ แล้วไม่ต้องกันแปลว่าไม่แผ่ทั่ว จึง rank &lt; 5)<br>
        • ข้อ 17 เท็จ: \(\operatorname{nullity} A > 0\) (มีตัวแปรเสรี ≥ 1)<br>
        • ข้อ 6 เท็จ: \(\vec{x} \mapsto A\vec{x}\) <em>ไม่</em> 1-1 &nbsp;• ข้อ 9 เท็จ: <em>ไม่</em>ทั่วถึง</li>
        <li><span class="step-t">(ค) ทุกอย่างดีหมด</span> \(\operatorname{rank} A = 5 = n\) (ข้อ 15 จริง) → ทุกข้อจริง:<br>
        • ข้อ 4: \(A\vec{x} = \vec{0}\) มี<em>เพียงผลเฉลยชัด</em><br>
        • ข้อ 6 และ 9: \(\vec{x} \mapsto A\vec{x}\) ทั้ง <strong>1-1 และทั่วถึง</strong> และโดยข้อ 1 \(A\) มี inverse (การแปลงจึงหาตัวผกผันได้)</li>
      </ol>
    </div></details>
  </article>
</section>
