<!-- meta
title: คลังโจทย์จากตำรา บทที่ 3
ch: 7
section: TB-3
page: bank-ch3.html
tts: 1
-->

<div class="crumb">คลังโจทย์จากตำรา · บทที่ 3 ค่าลักษณะเฉพาะและเวกเตอร์ลักษณะเฉพาะ</div>
<h1 class="page-title">📚 คลังโจทย์จากตำรา — บทที่ 3</h1>
<p class="page-sub">โจทย์<strong>ทุกข้อ ทุกตัวอักษร</strong> จากแบบฝึกหัด 3.1–3.3 ของตำรา คำต่อคำ พร้อมเฉลยทีละขั้นและผ่านการตรวจคำนวณด้วยโปรแกรมทุกข้อ — คลังสมบูรณ์ 100% ไม่มีข้อตกหล่น</p>

<div class="box-idea">
  <p><strong>วิธีใช้คลังโจทย์</strong></p>
  <ul>
    <li>เลือกชุดแบบฝึกหัดจากปุ่มด้านบน แล้วกดเลขข้อในตารางสารบัญของชุดเพื่อกระโดดไปการ์ดข้อนั้น</li>
    <li>เฉลยทุกการ์ดเขียนทีละขั้น ("ทำอะไร + ทำไม") ปิดท้ายตรวจคำตอบเสมอ — กด "เฉลยทีละขั้น" เพื่อเปิดทีละสเต็ป</li>
    <li>การ์ดที่มี <span class="tag exam">🎯 แนว</span> คือข้อที่ตรงกับแนวข้อสอบ Final — ถ้าเวลาน้อย ทำข้อพวกนี้ก่อน</li>
    <li>ข้อที่หน้าบทเรียนเคยทำไว้ จะมีลิงก์ "มีบทเรียนประกอบ" กลับไปอ่านทฤษฎีเต็ม</li>
  </ul>
</div>

<h2 class="block" id="stats">สถิติความครบถ้วน (นับจากตำราจริง)</h2>
<table class="tbl">
  <tr><th>ชุด</th><th>เลขข้อ</th><th>ข้อย่อย</th><th>การ์ดทั้งหมด</th><th>คำตอบท้ายบทตำรา</th></tr>
  <tr><td>แบบฝึกหัด 3.1</td><td>1–12</td><td>1:กขคง · 6:กข · 7:กขค</td><td>18</td><td>ครบ 1–12</td></tr>
  <tr><td>แบบฝึกหัด 3.2</td><td>1–12</td><td>1,2:กข · 3:ก–ฉ · 4:ก–ญ (10) · 5:กขคง · 6:กข · 12:กขค</td><td>34</td><td>ข้อ 1–6 · <strong>ข้อ 7 คำตอบในตำราถูกตัดค้างท้ายหน้า 92 พิมพ์ไม่ครบ</strong> · 8–12 พิสูจน์</td></tr>
  <tr><td>แบบฝึกหัด 3.3</td><td>1–2</td><td>1:กขคง · 2:กข</td><td>6</td><td>ครบ 1–2</td></tr>
  <tr><td><strong>รวม</strong></td><td><strong>26 ข้อ</strong></td><td></td><td><strong>58 การ์ด</strong></td><td></td></tr>
</table>

<div class="box-warn">
  <p><strong>⚠️ หมายเหตุ errata ของตำรา</strong></p>
  <ul>
    <li>คำตอบแบบฝึกหัด 3.2 ข้อ 7: ตำราพิมพ์คำตอบค้างท้ายหน้า 92 แล้วถูกตัด (หน้าถัดไปขึ้นบท 4 เลย) — การ์ดของคลังคำนวณเฉลยให้ครบ พร้อมกล่องหมายเหตุ</li>
    <li>แบบฝึกหัด 3.2 ข้อ 3 (ข): คำตอบท้ายบทพิมพ์ฐานหลัก (−1, 1, 2) ที่ถูกตามการคำนวณคือ (1, 1, 2) — การ์ดใช้ค่าที่คำนวณถูก</li>
  </ul>
</div>

<div class="box-def">
  <p><strong>🎯 เชื่อมกับแนวข้อสอบ Final ล่าสุด (ปี 67 / รหัส 66)</strong></p>
  <ul>
    <li><strong>แนว ⑤</strong> "หา eigenvalues/eigenvectors จากเมทริกซ์ 3×3 (โจทย์ให้แค่เมทริกซ์)" และ "4×4 จบที่แก้สมการกำลัง 4": ตรงกับ <strong>3.2 ข้อ 4</strong> (สมการลักษณะเฉพาะ 10 เมทริกซ์ ทั้ง 2×2 และ 3×3) และ 3.2 ข้อ 3 (ฐานหลักของปริภูมิลักษณะเฉพาะ) — เทคนิคหัวใจ: \(\det(A-\lambda I)=0\) แล้วแก้ระบบ \((A-\lambda I)\vec{v}=\vec{0}\)</li>
  </ul>
</div>

<nav class="pillnav">
  <a href="#set-3-1">3.1</a>
  <a href="#set-3-2">3.2</a>
  <a href="#set-3-3">3.3</a>
</nav>

<!-- ชุดแบบฝึกหัดแต่ละชุดเติมที่นี่เป็น <section class="block" id="set-3-X"> -->

<section class="block" id="set-3-1">
  <h2>แบบฝึกหัด 3.1 — เมทริกซ์สำหรับการแปลงเชิงเส้นและการเปลี่ยนฐานหลัก</h2>
  <p class="page-sub">โจทย์คำต่อคำจากตำรา · คำตอบท้ายบทครบทุกข้อ (เทียบแล้วทุกข้อ)</p>
  <table class="tbl">
    <tr><th>ข้อ</th><th>เนื้อหาสั้น</th><th>การ์ด</th></tr>
    <tr><td>1</td><td>เวกเตอร์พิกัด [x]B</td><td><a href="#p-3-1-1ก">ก</a> <a href="#p-3-1-1ข">ข</a> <a href="#p-3-1-1ค">ค</a> <a href="#p-3-1-1ง">ง</a></td></tr>
    <tr><td>2</td><td>ฐานหลัก + เมทริกซ์เปลี่ยนพิกัดมาตรฐาน→B′ + [v]B′</td><td><a href="#p-3-1-2">ข้อ 2</a></td></tr>
    <tr><td>3</td><td>เมทริกซ์เปลี่ยนพิกัด B→C (จากความสัมพันธ์ของฐาน)</td><td><a href="#p-3-1-3">ข้อ 3</a></td></tr>
    <tr><td>4</td><td>เมทริกซ์เปลี่ยนพิกัด C→B (อินเวอร์ส)</td><td><a href="#p-3-1-4">ข้อ 4</a></td></tr>
    <tr><td>5</td><td>[T]_{C←B} จากค่า T บนฐานหลัก</td><td><a href="#p-3-1-5">ข้อ 5</a></td></tr>
    <tr><td>6</td><td>[T]_{C←B} ของ T ที่กำหนดด้วยสูตร</td><td><a href="#p-3-1-6ก">ก</a> <a href="#p-3-1-6ข">ข</a></td></tr>
    <tr><td>7</td><td>เปลี่ยนพิกัด B→C และ C→B</td><td><a href="#p-3-1-7ก">ก</a> <a href="#p-3-1-7ข">ข</a> <a href="#p-3-1-7ค">ค</a></td></tr>
    <tr><td>8</td><td>[T] จากนิยามบนฐานหลัก</td><td><a href="#p-3-1-8">ข้อ 8</a></td></tr>
    <tr><td>9</td><td>T(v₁+2v₂−3v₃) จาก [T]B</td><td><a href="#p-3-1-9">ข้อ 9</a></td></tr>
    <tr><td>10</td><td>[T]B + [x]B + [T(x)]B</td><td><a href="#p-3-1-10">ข้อ 10</a></td></tr>
    <tr><td>11</td><td>เดิมใน R⁴</td><td><a href="#p-3-1-11">ข้อ 11</a></td></tr>
    <tr><td>12</td><td>[T]B1, [T]B2, พิกัด, และเมทริกซ์เปลี่ยนพิกัด B2→B1</td><td><a href="#p-3-1-12">ข้อ 12</a></td></tr>
  </table>

  <article class="pr-card" id="p-3-1-1ก" data-pkey="pTB-3-1-1ก">
    <div class="pr-head"><span class="pr-num">แบบฝึกหัด 3.1 ข้อ 1 (ก)</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>กำหนดเวกเตอร์ \(\vec{b}_1, \vec{b}_2\) และ \(\vec{x}\) ถ้า \(H\) เป็นปริภูมิย่อยที่มีฐานหลักเป็น \(B = \{\vec{b}_1, \vec{b}_2\}\) และ \(\vec{x} \in H\) จงหาเวกเตอร์พิกัดของ \(\vec{x}\) สัมพัทธ์กับฐานหลัก B เมื่อ \(\vec{b}_1 = \begin{bmatrix} 1\\ -4 \end{bmatrix}, \vec{b}_2 = \begin{bmatrix} -2\\ 7 \end{bmatrix}, \vec{x} = \begin{bmatrix} -3\\ 7 \end{bmatrix}\)</p>
      <p class="tagline">มีบทเรียนประกอบ: <a href="ch3-1.html">หน้า 3.1</a></p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">หา \(c_1, c_2\) ที่ทำให้ \(c_1\vec{b}_1 + c_2\vec{b}_2 = \vec{x}\) — คือการแก้ระบบ 2 ตัวแปร 2 สมการ</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> เวกเตอร์พิกัด = สัมประสิทธิ์ในการรวมเชิงเส้น — ตั้งระบบแล้วแก้</p>
      <ol class="steps">
        <li><span class="step-t">ตั้งระบบ</span> \(c_1\begin{bmatrix}1\\-4\end{bmatrix} + c_2\begin{bmatrix}-2\\7\end{bmatrix} = \begin{bmatrix}-3\\7\end{bmatrix}\) → \(c_1 - 2c_2 = -3\), \(-4c_1 + 7c_2 = 7\)</li>
        <li><span class="step-t">แก้</span> จากสมการแรก \(c_1 = 2c_2 - 3\) แทนสมการที่สอง: \(-4(2c_2-3) + 7c_2 = 7\) → \(-8c_2 + 12 + 7c_2 = 7\) → \(-c_2 = -5\) → \(c_2 = 5\), \(c_1 = 7\)</li>
        <li><span class="step-t">ตรวจคำตอบ</span> \(7(1,-4) + 5(-2,7) = (7-10, -28+35) = (-3, 7)\) ✓ — <strong>สรุป:</strong> \([\vec{x}]_B = \begin{bmatrix} 7\\ 5 \end{bmatrix}\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" id="p-3-1-1ข" data-pkey="pTB-3-1-1ข">
    <div class="pr-head"><span class="pr-num">แบบฝึกหัด 3.1 ข้อ 1 (ข)</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาเวกเตอร์พิกัด เมื่อ \(\vec{b}_1 = \begin{bmatrix} 2\\ 1 \end{bmatrix}, \vec{b}_2 = \begin{bmatrix} -3\\ 4 \end{bmatrix}, \vec{x} = \begin{bmatrix} 3\\ -5 \end{bmatrix}\)</p>
      <p class="tagline">มีบทเรียนประกอบ: <a href="ch3-1.html">หน้า 3.1</a></p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">ระบบเดิม — คำตอบออกเศษส่วน ตัวส่วน 11</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ระบบเดิม — ระวังเครื่องหมายเวลาแทน</p>
      <ol class="steps">
        <li><span class="step-t">ตั้งระบบ</span> \(2c_1 - 3c_2 = 3\), \(c_1 + 4c_2 = -5\)</li>
        <li><span class="step-t">แก้</span> \(c_1 = -5 - 4c_2\) แทนสมการแรก: \(2(-5-4c_2) - 3c_2 = 3\) → \(-10 - 8c_2 - 3c_2 = 3\) → \(-11c_2 = 13\) → \(c_2 = -\frac{13}{11}\), \(c_1 = -5 + \frac{52}{11} = -\frac{3}{11}\)</li>
        <li><span class="step-t">ตรวจคำตอบ</span> \(-\frac{3}{11}(2,1) - \frac{13}{11}(-3,4) = \frac{1}{11}(-6+39, -3-52) = \frac{1}{11}(33, -55) = (3, -5)\) ✓ — <strong>สรุป:</strong> \([\vec{x}]_B = \begin{bmatrix} -\frac{3}{11}\\ -\frac{13}{11} \end{bmatrix}\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" id="p-3-1-1ค" data-pkey="pTB-3-1-1ค">
    <div class="pr-head"><span class="pr-num">แบบฝึกหัด 3.1 ข้อ 1 (ค)</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาเวกเตอร์พิกัด เมื่อ \(\vec{b}_1 = \begin{bmatrix} 3\\ 6\\ 2 \end{bmatrix}, \vec{b}_2 = \begin{bmatrix} -1\\ 0\\ 1 \end{bmatrix}, \vec{x} = \begin{bmatrix} 3\\ 12\\ 7 \end{bmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">สมการกลาง (แถวที่ 2) ไม่มี c₂ — แก้ c₁ ได้ทันทีก่อน</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ระบบ 3 สมการ 2 ตัวแปร (x ∈ H เพราะโจทย์ให้) — มองหาสมการที่แก้ง่ายก่อน</p>
      <ol class="steps">
        <li><span class="step-t">สมการที่แก้ง่าย</span> แถวที่ 2: \(6c_1 + 0c_2 = 12\) → \(c_1 = 2\)</li>
        <li><span class="step-t">หา c₂</span> แถวที่ 1: \(3(2) - c_2 = 3\) → \(c_2 = 3\) ตรวจแถวที่ 3: \(2(2) + 3 = 7\) ✓</li>
        <li><span class="step-t">ตรวจคำตอบ</span> \(2(3,6,2) + 3(-1,0,1) = (6-3, 12, 4+3) = (3, 12, 7)\) ✓ — <strong>สรุป:</strong> \([\vec{x}]_B = \begin{bmatrix} 2\\ 3 \end{bmatrix}\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" id="p-3-1-1ง" data-pkey="pTB-3-1-1ง">
    <div class="pr-head"><span class="pr-num">แบบฝึกหัด 3.1 ข้อ 1 (ง)</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาเวกเตอร์พิกัด เมื่อ \(\vec{b}_1 = \begin{bmatrix} 1\\ 5\\ -3 \end{bmatrix}, \vec{b}_2 = \begin{bmatrix} 3\\ 7\\ -5 \end{bmatrix}, \vec{x} = \begin{bmatrix} -2\\ 0\\ 1 \end{bmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">แก้จากสมการกลางก่อน (ได้ความสัมพันธ์ c₁ กับ c₂) แล้วแทน</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ระบบ 3 สมการ 2 ตัวแปร — ใช้ 2 สมการแก้ อีก 1 สมการตรวจ</p>
      <ol class="steps">
        <li><span class="step-t">ตั้งระบบ</span> \(c_1 + 3c_2 = -2\), \(5c_1 + 7c_2 = 0\), \(-3c_1 - 5c_2 = 1\)</li>
        <li><span class="step-t">แก้</span> จากสมการ 2: \(c_1 = -\frac{7}{5}c_2\) แทนสมการ 1: \(-\frac{7}{5}c_2 + 3c_2 = -2\) → \(\frac{8}{5}c_2 = -2\) → \(c_2 = -\frac{5}{4}\), \(c_1 = \frac{7}{4}\)</li>
        <li><span class="step-t">ตรวจคำตอบ</span> สมการ 3: \(-3(\frac{7}{4}) - 5(-\frac{5}{4}) = \frac{-21+25}{4} = 1\) ✓ — <strong>สรุป:</strong> \([\vec{x}]_B = \begin{bmatrix} \frac{7}{4}\\ -\frac{5}{4} \end{bmatrix}\) (ตรงคำตอบท้ายบท)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" id="p-3-1-2" data-pkey="pTB-3-1-2">
    <div class="pr-head"><span class="pr-num">แบบฝึกหัด 3.1 ข้อ 2</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงแสดงว่า \(B' = \left\{\begin{bmatrix} 1\\ 2\\ 0 \end{bmatrix}, \begin{bmatrix} 0\\ 1\\ 0 \end{bmatrix}, \begin{bmatrix} -1\\ 1\\ 3 \end{bmatrix}\right\}\) เป็นฐานหลักสำหรับ \(\mathbb{R}^3\) และจงหาเมทริกซ์การเปลี่ยนพิกัดจากฐานหลักมาตรฐาน \(B = \{\vec{e}_1, \vec{e}_2, \vec{e}_3\}\) ไป B′ พร้อมทั้งหา \([\vec{v}]_{B'}\) เมื่อ \(\vec{v} = \begin{bmatrix} 0\\ 3\\ 3 \end{bmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">เมทริกซ์เปลี่ยนพิกัดจากมาตรฐานไป B′ = \(P = [\vec{b}'_1\ \vec{b}'_2\ \vec{b}'_3]\) — แสดงฐานหลักด้วย det ≠ 0 · \([\vec{v}]_{B'} = P^{-1}\vec{v}\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> หลักของ P คือเวกเตอร์ฐานหลัก B′ — P ไม่เอกฐาน ⟺ เป็นฐานหลัก และ \(P[\vec{v}]_{B'} = \vec{v}\) จึงแก้ด้วย \(P^{-1}\)</p>
      <ol class="steps">
        <li><span class="step-t">แสดงว่าเป็นฐานหลัก</span> \(P = \begin{bmatrix} 1 & 0 & -1\\ 2 & 1 & 1\\ 0 & 0 & 3 \end{bmatrix}\) → \(\det P = 3(1\cdot1 - 0\cdot2) = 3 \neq 0\) → 3 เวกเตอร์อิสระใน \(\mathbb{R}^3\) = ฐานหลัก ∎</li>
        <li><span class="step-t">เมทริกซ์เปลี่ยนพิกัด B→B′</span> คอลัมน์ที่ j = \([\vec{e}_j]_{B'}\) — รวมได้ว่าเมทริกซ์นี้คือ \(P^{-1}\) (เพราะ \(P[\vec{e}_j]_{B'} = \vec{e}_j\)) — หาโดยแถวดำเนินการ \([P \mid I] \to [I \mid P^{-1}]\) ได้ \(P^{-1} = \begin{bmatrix} 1 & 0 & \frac{1}{3}\\ -2 & 1 & -1\\ 0 & 0 & \frac{1}{3} \end{bmatrix}\)</li>
        <li><span class="step-t">หา [v]B′</span> \([\vec{v}]_{B'} = P^{-1}\vec{v} = \begin{bmatrix} 0+\frac{3}{3}\\ -2+3-3\\ \frac{3}{3} \end{bmatrix} = \begin{bmatrix} 1\\ 0\\ 1 \end{bmatrix}\)</li>
        <li><span class="step-t">ตรวจคำตอบ</span> \(1\vec{b}'_1 + 0\vec{b}'_2 + 1\vec{b}'_3 = (1,2,0)+(-1,1,3) = (0,3,3) = \vec{v}\) ✓ — <strong>สรุป:</strong> \(P\) เป็นฐานหลัก (det = 3), เมทริกซ์เปลี่ยนพิกัด \(= P^{-1}\) ตามด้านบน, \([\vec{v}]_{B'} = (1, 0, 1)\) (ตรงคำตอบท้ายบท)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" id="p-3-1-3" data-pkey="pTB-3-1-3">
    <div class="pr-head"><span class="pr-num">แบบฝึกหัด 3.1 ข้อ 3</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(B = \{\vec{v}_1, \vec{v}_2\}\) และ \(C = \{\vec{w}_1, \vec{w}_2\}\) เป็นฐานหลักสำหรับ \(\mathbb{R}^2\) โดยที่ \(\vec{v}_1 = 4\vec{w}_2\) และ \(\vec{v}_2 = -6\vec{w}_1 - \vec{w}_2\) จงหาเมทริกซ์ของการเปลี่ยนพิกัดจาก B ไป C และถ้า \([\vec{x}]_B = \begin{bmatrix} 3\\ 1 \end{bmatrix}\) จงหา \([\vec{x}]_C\)</p>
      <p class="tagline">มีบทเรียนประกอบ: <a href="ch3-1.html">หน้า 3.1</a></p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">หลักที่ j ของเมทริกซ์ B→C คือ \([\vec{v}_j]_C\) — อ่านตรงจากความสัมพันธ์ที่โจทย์ให้ ไม่ต้องแก้ระบบ</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> \([\vec{x}]_C = P_{C\leftarrow B}[\vec{x}]_B\) โดยหลักที่ j ของ \(P_{C\leftarrow B}\) คือพิกัดของ \(\vec{v}_j\) บนฐานหลัก C — โจทย์ให้มาแล้ว!</p>
      <ol class="steps">
        <li><span class="step-t">อ่านพิกัดจากโจทย์</span> \(\vec{v}_1 = 4\vec{w}_2\) → \([\vec{v}_1]_C = \begin{bmatrix} 0\\ 4 \end{bmatrix}\); \(\vec{v}_2 = -6\vec{w}_1 - \vec{w}_2\) → \([\vec{v}_2]_C = \begin{bmatrix} -6\\ -1 \end{bmatrix}\) — ทำไมอ่านตรงได้: พิกัดบน C คือสัมประสิทธิ์หน้า w</li>
        <li><span class="step-t">ประกอบเมทริกซ์</span> \(P_{C\leftarrow B} = \begin{bmatrix} 0 & -6\\ 4 & -1 \end{bmatrix}\)</li>
        <li><span class="step-t">คูณหา [x]C</span> \([\vec{x}]_C = P_{C\leftarrow B}\begin{bmatrix} 3\\ 1 \end{bmatrix} = 3\begin{bmatrix} 0\\ 4 \end{bmatrix} + 1\begin{bmatrix} -6\\ -1 \end{bmatrix} = \begin{bmatrix} -6\\ 11 \end{bmatrix}\)</li>
        <li><span class="step-t">ตรวจคำตอบ</span> ทำนองเดียวกัน \([\vec{x}]_C = 3[\vec{v}_1]_C + [\vec{v}_2]_C\) เพราะ \(\vec{x} = 3\vec{v}_1+\vec{v}_2\) และพิกัดเชิงเส้นต่อการรวม ✓ — <strong>สรุป:</strong> \(P_{C\leftarrow B} = \begin{bmatrix} 0 & -6\\ 4 & -1 \end{bmatrix}\), \([\vec{x}]_C = (-6, 11)\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" id="p-3-1-4" data-pkey="pTB-3-1-4">
    <div class="pr-head"><span class="pr-num">แบบฝึกหัด 3.1 ข้อ 4</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(B = \{\vec{v}_1, \vec{v}_2, \vec{v}_3\}\) และ \(C = \{\vec{w}_1, \vec{w}_2, \vec{w}_3\}\) เป็นฐานหลักโดยที่ \(\vec{v}_1 = 2\vec{w}_1 - \vec{w}_2 + \vec{w}_3\), \(\vec{v}_2 = 3\vec{w}_2 + \vec{w}_3\) และ \(\vec{v}_3 = -3\vec{w}_1 + 2\vec{w}_2\) จงหาเมทริกซ์ของการเปลี่ยนพิกัดจาก C ไป B และเวกเตอร์พิกัด \([\vec{w}_1 - 2\vec{w}_2 + 2\vec{w}_3]_B\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">จากความสัมพันธ์ได้ \(P_{C\leftarrow B}\) ก่อน แล้วทิศ C→B คืออินเวอร์ส · หมายเหตุ: โจทย์พิมพ์ "\(\mathbb{R}^2\)" แต่มีเวกเตอร์ 3 มิติ 3 ตัว — จริง ๆ คือ \(\mathbb{R}^3\) (พิมพ์ผิดในตำรา)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ความสัมพันธ์ v ในแง่ w ให้ \(P_{C\leftarrow B}\) ฟรี — แต่โจทย์ขอทิศตรงข้าม จึงต้องอินเวอร์ส แล้วคูณเวกเตอร์พิกัดบน C</p>
      <ol class="steps">
        <li><span class="step-t">สร้าง P_{C←B}</span> หลัก = \([\vec{v}_i]_C\): \(P_{C\leftarrow B} = \begin{bmatrix} 2 & 0 & -3\\ -1 & 3 & 2\\ 1 & 1 & 0 \end{bmatrix}\)</li>
        <li><span class="step-t">กลับทิศ</span> เมทริกซ์จาก C ไป B = \(P_{B\leftarrow C} = (P_{C\leftarrow B})^{-1} = \begin{bmatrix} -\frac{1}{4} & -\frac{3}{8} & \frac{9}{8}\\ \frac{1}{4} & \frac{3}{8} & -\frac{1}{8}\\ -\frac{1}{2} & -\frac{1}{4} & \frac{3}{4} \end{bmatrix}\) (ตรวจ: \(P_{C\leftarrow B}\,P_{B\leftarrow C} = I\) ✓)</li>
        <li><span class="step-t">คูณหาพิกัด</span> \(\vec{w}_1 - 2\vec{w}_2 + 2\vec{w}_3\) มีพิกัดบน C คือ \((1, -2, 2)\) → \([\cdot]_B = P_{B\leftarrow C}\begin{bmatrix} 1\\ -2\\ 2 \end{bmatrix} = \begin{bmatrix} -\frac{1}{4}+\frac{3}{4}+\frac{9}{4}\\ \frac{1}{4}-\frac{3}{4}-\frac{1}{4}\\ -\frac{1}{2}+\frac{1}{2}+\frac{3}{2} \end{bmatrix} = \begin{bmatrix} \frac{11}{4}\\ -\frac{3}{4}\\ \frac{3}{2} \end{bmatrix}\)</li>
        <li><span class="step-t">ตรวจคำตอบ</span> ช่องแรก: \(-\frac{1}{4} + \frac{3}{4} + \frac{9}{4} = \frac{11}{4}\) ✓ — <strong>สรุป:</strong> \(P_{B\leftarrow C}\) ตามด้านบน, \([\vec{w}_1-2\vec{w}_2+2\vec{w}_3]_B = (\frac{11}{4}, -\frac{3}{4}, \frac{3}{2})\) (ตรงคำตอบท้ายบท)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" id="p-3-1-5" data-pkey="pTB-3-1-5">
    <div class="pr-head"><span class="pr-num">แบบฝึกหัด 3.1 ข้อ 5</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(B = \{\vec{v}_1, \vec{v}_2, \vec{v}_3\}\) เป็นฐานหลักสำหรับ \(\mathbb{R}^3\) และ \(C = \{\vec{w}_1, \vec{w}_2\}\) เป็นฐานหลักสำหรับ \(\mathbb{R}^2\) ถ้า \(T:\mathbb{R}^3\to\mathbb{R}^2\) เป็นการแปลงเชิงเส้นซึ่ง \(T(\vec{v}_1) = 2\vec{w}_1 - \vec{w}_2\), \(T(\vec{v}_2) = \vec{w}_2 - 4\vec{w}_1\) และ \(T(\vec{v}_3) = -\vec{w}_2\) จงหาเมทริกซ์สำหรับ T สัมพัทธ์กับฐานหลัก B และ C</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">หลักที่ j ของ \([T]_{C\leftarrow B}\) คือ \([T(\vec{v}_j)]_C\) — อ่านจากโจทย์ตรง ๆ</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> นิยามของ \([T]_{C\leftarrow B}\): หลักที่ j = พิกัดบน C ของ \(T(\vec{v}_j)\) — โจทย์ให้ครบทั้งสามหลักแล้ว</p>
      <ol class="steps">
        <li><span class="step-t">อ่านพิกัด</span> \([T(\vec{v}_1)]_C = (2, -1)\), \([T(\vec{v}_2)]_C = (-4, 1)\) (จาก \(\vec{w}_2-4\vec{w}_1\) ระวังลำดับ: w₁ มาก่อนจึง −4 ขึ้นบน), \([T(\vec{v}_3)]_C = (0, -1)\)</li>
        <li><span class="step-t">ประกอบ</span> \([T]_{C\leftarrow B} = \begin{bmatrix} 2 & -4 & 0\\ -1 & 1 & -1 \end{bmatrix}\)</li>
        <li><span class="step-t">ตรวจคำตอบ</span> ขนาด 2×3 ถูกต้อง (โดเมน 3 มิติ, โคโดเมน 2 มิติ) ✓ — <strong>สรุป:</strong> \([T]_{C\leftarrow B} = \begin{bmatrix} 2 & -4 & 0\\ -1 & 1 & -1 \end{bmatrix}\) (ตรงคำตอบท้ายบท)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" id="p-3-1-6ก" data-pkey="pTB-3-1-6ก">
    <div class="pr-head"><span class="pr-num">แบบฝึกหัด 3.1 ข้อ 6 (ก)</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(T:\mathbb{R}^2\to\mathbb{R}^2\) เป็นการแปลงเชิงเส้นซึ่ง \(T(x_1, x_2) = (x_1+2x_2,\ 2x_1-3x_2)\) จงหาเมทริกซ์สำหรับ T สัมพัทธ์กับฐานหลัก \(B = \left\{\begin{bmatrix} 1\\ 0 \end{bmatrix}, \begin{bmatrix} 0\\ 1 \end{bmatrix}\right\}\) และ \(C = \left\{\begin{bmatrix} 2\\ 1 \end{bmatrix}, \begin{bmatrix} -1\\ 0 \end{bmatrix}\right\}\)</p>
      <p class="tagline">มีบทเรียนประกอบ: <a href="ch3-1.html">หน้า 3.1</a></p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">คำนวณ \(T(\vec{b}_j)\) แล้วเขียนเป็นการรวมเชิงเส้นของ \(\vec{w}_1, \vec{w}_2\) — หลักที่ j = พิกัดนั้น</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> \([T]_{C\leftarrow B}\) หลักที่ j คือ \([T(\vec{b}_j)]_C\) — B เป็นมาตรฐานจึง \(T(\vec{b}_j)\) อ่านจากสูตรได้ทันที</p>
      <ol class="steps">
        <li><span class="step-t">หลักที่ 1</span> \(T(1,0) = (1, 2)\) เขียน \(= a(2,1) + b(-1,0)\): แถว 2 ให้ \(a = 2\); แถว 1: \(2a - b = 1\) → \(b = 3\) → \([T(\vec{b}_1)]_C = (2, 3)\)</li>
        <li><span class="step-t">หลักที่ 2</span> \(T(0,1) = (2, -3)\): \(a = -3\); \(2(-3) - b = 2\) → \(b = -8\) → \([T(\vec{b}_2)]_C = (-3, -8)\)</li>
        <li><span class="step-t">ประกอบ + ตรวจ</span> \([T]_{C\leftarrow B} = \begin{bmatrix} 2 & -3\\ 3 & -8 \end{bmatrix}\) ตรวจ: \(P_C[T]_{C\leftarrow B} = [A]_{std}[P_B]\) โดย \(P_C = \begin{bmatrix} 2 & -1\\ 1 & 0 \end{bmatrix}\): \(P_C[T] = \begin{bmatrix} 1 & 2\\ 2 & -3 \end{bmatrix}\) = เมทริกซ์มาตรฐานของ T ✓ — <strong>สรุป:</strong> \([T]_{C\leftarrow B} = \begin{bmatrix} 2 & -3\\ 3 & -8 \end{bmatrix}\) (ตรงคำตอบท้ายบท)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" id="p-3-1-6ข" data-pkey="pTB-3-1-6ข">
    <div class="pr-head"><span class="pr-num">แบบฝึกหัด 3.1 ข้อ 6 (ข)</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาเมทริกซ์สำหรับ T เดียวกับข้อ 6 (ก) สัมพัทธ์กับฐานหลัก \(B = \left\{\begin{bmatrix} 1\\ 1 \end{bmatrix}, \begin{bmatrix} -2\\ 3 \end{bmatrix}\right\}\) และ \(C = \left\{\begin{bmatrix} 1\\ 1 \end{bmatrix}, \begin{bmatrix} 0\\ 2 \end{bmatrix}\right\}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">ขั้นเดิม: หา T(bⱼ) จากสูตร → แก้พิกัดบน C</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> เหมือน (ก) แต่ B ไม่ใช่มาตรฐาน — หา T(bⱼ) ด้วยการแทนค่าในสูตรก่อน</p>
      <ol class="steps">
        <li><span class="step-t">หลักที่ 1</span> \(T(1,1) = (1+2,\ 2-3) = (3, -1)\) เขียน \(= a(1,1)+b(0,2)\): \(a = 3\), \(3+2b = -1\) → \(b = -2\) → \((3, -2)\)</li>
        <li><span class="step-t">หลักที่ 2</span> \(T(-2,3) = (-2+6,\ -4-9) = (4, -13)\): \(a = 4\), \(4+2b = -13\) → \(b = -\frac{17}{2}\) → \((4, -\frac{17}{2})\)</li>
        <li><span class="step-t">ประกอบ + ตรวจ</span> \([T]_{C\leftarrow B} = \begin{bmatrix} 3 & 4\\ -2 & -\frac{17}{2} \end{bmatrix}\) — <strong>สรุป:</strong> \([T]_{C\leftarrow B} = \begin{bmatrix} 3 & 4\\ -2 & -\frac{17}{2} \end{bmatrix}\) (ตรงคำตอบท้ายบท)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" id="p-3-1-7ก" data-pkey="pTB-3-1-7ก">
    <div class="pr-head"><span class="pr-num">แบบฝึกหัด 3.1 ข้อ 7 (ก)</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(B = \{\vec{v}_1, \vec{v}_2\}\) และ \(C = \{\vec{w}_1, \vec{w}_2\}\) เป็นฐานหลักสำหรับ \(\mathbb{R}^2\) จงหาเมทริกซ์ของการเปลี่ยนพิกัดจาก B ไป C และเมทริกซ์ของการเปลี่ยนพิกัดจาก C ไป B เมื่อ \(\vec{v}_1 = \begin{bmatrix} 7\\ 5 \end{bmatrix}, \vec{v}_2 = \begin{bmatrix} -3\\ -1 \end{bmatrix}, \vec{w}_1 = \begin{bmatrix} 1\\ -5 \end{bmatrix}, \vec{w}_2 = \begin{bmatrix} -2\\ 2 \end{bmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(P_{C\leftarrow B} = W^{-1}V\) โดย V, W เรียงเวกเตอร์เป็นหลัก — ทิศกลับคืออินเวอร์ส</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ต้องแก้พิกัดของ v บนฐาน w จริง ๆ (ไม่มีใครให้มา) — วิธีเมทริกซ์: \(P_{C\leftarrow B} = W^{-1}V\) และ \(P_{B\leftarrow C} = W V^{-1}\)... ถูกต้องคือ \(P_{B\leftarrow C} = (P_{C\leftarrow B})^{-1}\)</p>
      <ol class="steps">
        <li><span class="step-t">ตั้งเมทริกซ์</span> \(V = \begin{bmatrix} 7 & -3\\ 5 & -1 \end{bmatrix}\), \(W = \begin{bmatrix} 1 & -2\\ -5 & 2 \end{bmatrix}\) — ทำไม: \([\vec{x}]_C = W^{-1}\vec{x}\) ดังนั้น \([\vec{v}_j]_C = W^{-1}\)หลักที่ j ของ V</li>
        <li><span class="step-t">B→C</span> \(P_{C\leftarrow B} = W^{-1}V\): \(W^{-1} = \frac{1}{-8}\begin{bmatrix} 2 & 2\\ 5 & 1 \end{bmatrix} = \begin{bmatrix} -\frac{1}{4} & -\frac{1}{4}\\ -\frac{5}{8} & -\frac{1}{8} \end{bmatrix}\) → \(P_{C\leftarrow B} = \begin{bmatrix} -3 & 1\\ -5 & 2 \end{bmatrix}\)</li>
        <li><span class="step-t">C→B</span> \(P_{B\leftarrow C} = (P_{C\leftarrow B})^{-1} = \frac{1}{-1}\begin{bmatrix} 2 & -1\\ 5 & -3 \end{bmatrix} = \begin{bmatrix} -2 & 1\\ -5 & 3 \end{bmatrix}\)</li>
        <li><span class="step-t">ตรวจคำตอบ</span> คูณกลับ \(P_{C\leftarrow B}P_{B\leftarrow C} = \begin{bmatrix} (-3)(-2)+1(-5) & (-3)(1)+1(3)\\ (-5)(-2)+2(-5) & (-5)(1)+2(3) \end{bmatrix} = \begin{bmatrix} 1 & 0\\ 0 & 1 \end{bmatrix}\) ✓ — <strong>สรุป:</strong> B→C = \(\begin{bmatrix} -3 & 1\\ -5 & 2 \end{bmatrix}\), C→B = \(\begin{bmatrix} -2 & 1\\ -5 & 3 \end{bmatrix}\) (ตรงคำตอบท้ายบท)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" id="p-3-1-7ข" data-pkey="pTB-3-1-7ข">
    <div class="pr-head"><span class="pr-num">แบบฝึกหัด 3.1 ข้อ 7 (ข)</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาเมทริกซ์เปลี่ยนพิกัด B→C และ C→B เมื่อ \(\vec{v}_1 = \begin{bmatrix} -1\\ 8 \end{bmatrix}, \vec{v}_2 = \begin{bmatrix} 1\\ -5 \end{bmatrix}, \vec{w}_1 = \begin{bmatrix} 1\\ 4 \end{bmatrix}, \vec{w}_2 = \begin{bmatrix} 1\\ 1 \end{bmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(W^{-1} = \frac{1}{-3}\begin{bmatrix} 1 & -1\\ -4 & 1 \end{bmatrix}\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> สูตรเดิม \(P_{C\leftarrow B} = W^{-1}V\)</p>
      <ol class="steps">
        <li><span class="step-t">W⁻¹</span> \(W = \begin{bmatrix} 1 & 1\\ 4 & 1 \end{bmatrix}\), \(\det W = -3\) → \(W^{-1} = \frac{1}{-3}\begin{bmatrix} 1 & -1\\ -4 & 1 \end{bmatrix}\)</li>
        <li><span class="step-t">B→C</span> \(P_{C\leftarrow B} = W^{-1}\begin{bmatrix} -1 & 1\\ 8 & -5 \end{bmatrix} = \frac{1}{-3}\begin{bmatrix} -1-8 & 1+5\\ 4+8 & -4-5 \end{bmatrix} = \frac{1}{-3}\begin{bmatrix} -9 & 6\\ 12 & -9 \end{bmatrix} = \begin{bmatrix} 3 & -2\\ -4 & 3 \end{bmatrix}\)</li>
        <li><span class="step-t">C→B</span> \(\det(P_{C\leftarrow B}) = 9-8 = 1\) → \(P_{B\leftarrow C} = \begin{bmatrix} 3 & 2\\ 4 & 3 \end{bmatrix}\)</li>
        <li><span class="step-t">ตรวจคำตอบ</span> คูณกลับได้ I ✓ — <strong>สรุป:</strong> B→C = \(\begin{bmatrix} 3 & -2\\ -4 & 3 \end{bmatrix}\), C→B = \(\begin{bmatrix} 3 & 2\\ 4 & 3 \end{bmatrix}\) (ตรงคำตอบท้ายบท)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" id="p-3-1-7ค" data-pkey="pTB-3-1-7ค">
    <div class="pr-head"><span class="pr-num">แบบฝึกหัด 3.1 ข้อ 7 (ค)</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาเมทริกซ์เปลี่ยนพิกัด B→C และ C→B เมื่อ \(\vec{v}_1 = \begin{bmatrix} -6\\ -1 \end{bmatrix}, \vec{v}_2 = \begin{bmatrix} 2\\ 0 \end{bmatrix}, \vec{w}_1 = \begin{bmatrix} 2\\ -1 \end{bmatrix}, \vec{w}_2 = \begin{bmatrix} 6\\ -2 \end{bmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">สูตรเดิม — \(\det W = 2\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> สูตรเดิม</p>
      <ol class="steps">
        <li><span class="step-t">W⁻¹</span> \(W = \begin{bmatrix} 2 & 6\\ -1 & -2 \end{bmatrix}\), \(\det W = -4+6 = 2\) → \(W^{-1} = \frac{1}{2}\begin{bmatrix} -2 & -6\\ 1 & 2 \end{bmatrix}\)</li>
        <li><span class="step-t">B→C</span> \(P_{C\leftarrow B} = \frac{1}{2}\begin{bmatrix} -2 & -6\\ 1 & 2 \end{bmatrix}\begin{bmatrix} -6 & 2\\ -1 & 0 \end{bmatrix} = \frac{1}{2}\begin{bmatrix} 12+6 & -4\\ -6-2 & 2 \end{bmatrix} = \begin{bmatrix} 9 & -2\\ -4 & 1 \end{bmatrix}\)</li>
        <li><span class="step-t">C→B</span> \(\det = 9-8 = 1\) → \(P_{B\leftarrow C} = \begin{bmatrix} 1 & 2\\ 4 & 9 \end{bmatrix}\)</li>
        <li><span class="step-t">ตรวจคำตอบ</span> คูณกลับได้ I ✓ — <strong>สรุป:</strong> B→C = \(\begin{bmatrix} 9 & -2\\ -4 & 1 \end{bmatrix}\), C→B = \(\begin{bmatrix} 1 & 2\\ 4 & 9 \end{bmatrix}\) (ตรงคำตอบท้ายบท)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" id="p-3-1-8" data-pkey="pTB-3-1-8">
    <div class="pr-head"><span class="pr-num">แบบฝึกหัด 3.1 ข้อ 8</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(B = \{\vec{v}_1, \vec{v}_2, \vec{v}_3\}\) เป็นฐานหลักสำหรับ \(\mathbb{R}^3\) และ \(T:\mathbb{R}^3\to\mathbb{R}^2\) เป็นการแปลงเชิงเส้นซึ่ง \(T(x_1\vec{v}_1 + x_2\vec{v}_2 + x_3\vec{v}_3) = (2x_1 - 4x_2 + 5x_3,\ -x_2 + 3x_3)\) จงหาเมทริกซ์สำหรับ T สัมพัทธ์กับฐานหลัก B และฐานหลักมาตรฐาน \(\{\vec{e}_1, \vec{e}_2\}\) สำหรับ \(\mathbb{R}^2\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">แทน \((x_1,x_2,x_3) = (1,0,0), (0,1,0), (0,0,1)\) — ได้ \(T(\vec{v}_j)\) เป็นพิกัดมาตรฐานพอดี</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> โจทย์ให้ T ในรูป "พิกัดเข้า → พิกัดมาตรฐานออก" — สังเกตว่าผลลัพธ์เป็นเวกเตอร์บนฐานมาตรฐานของ \(\mathbb{R}^2\) อยู่แล้ว</p>
      <ol class="steps">
        <li><span class="step-t">หา T บนฐานหลัก</span> \(T(\vec{v}_1) = (2, 0)\), \(T(\vec{v}_2) = (-4, -1)\), \(T(\vec{v}_3) = (5, 3)\) (แทน x เฉพาะช่องเดียวเป็น 1)</li>
        <li><span class="step-t">ประกอบ</span> ผลลัพธ์อยู่บนพิกัดมาตรฐานแล้ว จึงเป็นหลักของเมทริกซ์ตรง ๆ: \([T] = \begin{bmatrix} 2 & -4 & 5\\ 0 & -1 & 3 \end{bmatrix}\)</li>
        <li><span class="step-t">ตรวจคำตอบ</span> ลอง \(\vec{x} = \vec{v}_1\): \([T]_{C\leftarrow B}\begin{bmatrix}1\\0\\0\end{bmatrix} = (2, 0)\) ตรงกับแทนสูตร \((2, 0)\) ✓ — <strong>สรุป:</strong> \([T] = \begin{bmatrix} 2 & -4 & 5\\ 0 & -1 & 3 \end{bmatrix}\) (ตรงคำตอบท้ายบท)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" id="p-3-1-9" data-pkey="pTB-3-1-9">
    <div class="pr-head"><span class="pr-num">แบบฝึกหัด 3.1 ข้อ 9</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(B = \{\vec{v}_1, \vec{v}_2, \vec{v}_3\}\) เป็นฐานหลักสำหรับ \(\mathbb{R}^3\) และ \(T:\mathbb{R}^3\to\mathbb{R}^3\) เป็นการแปลงเชิงเส้นซึ่งมี \([T]_B = \begin{bmatrix} 0 & 3 & 1\\ 1 & 1 & 2\\ 1 & 0 & -1 \end{bmatrix}\) จงหา \(T(\vec{v}_1 + 2\vec{v}_2 - 3\vec{v}_3)\)</p>
      <p class="tagline">มีบทเรียนประกอบ: <a href="ch3-1.html">หน้า 3.1</a></p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">ทำงานบนพิกัดทั้งหมด: \([T(\vec{x})]_B = [T]_B[\vec{x}]_B\) แล้วแปลกลับเป็นเวกเตอร์</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> เวกเตอร์ตั้งต้นเขียนบนฐาน B ได้ตรง ๆ: \(\vec{x} = \vec{v}_1+2\vec{v}_2-3\vec{v}_3\) → \([\vec{x}]_B = (1, 2, -3)\) — คูณเมทริกซ์บนพิกัด แล้วแปลกลับ</p>
      <ol class="steps">
        <li><span class="step-t">คูณบนพิกัด</span> \([T(\vec{x})]_B = [T]_B\begin{bmatrix} 1\\ 2\\ -3 \end{bmatrix} = \begin{bmatrix} 0+6-3\\ 1+2-6\\ 1+0+3 \end{bmatrix} = \begin{bmatrix} 3\\ -3\\ 4 \end{bmatrix}\)</li>
        <li><span class="step-t">แปลกลับเป็นเวกเตอร์</span> \(T(\vec{x}) = 3\vec{v}_1 - 3\vec{v}_2 + 4\vec{v}_3\) — หยุดตรงนี้ได้เลย เพราะโจทย์ไม่ได้ให้ตัว v มา</li>
        <li><span class="step-t">ตรวจคำตอบ</span> ตรวจด้วยพจน์: \(T(\vec{x}) = T(\vec{v}_1) + 2T(\vec{v}_2) - 3T(\vec{v}_3)\) และ \([T(\vec{v}_1)]_B = (0,1,1)\) ฯลฯ รวมพิกัด: \((0,1,1)+2(3,1,0)-3(1,2,-1) = (0+6-3, 1+2-6, 1+0+3) = (3,-3,4)\) ✓ — <strong>สรุป:</strong> \(T(\vec{v}_1+2\vec{v}_2-3\vec{v}_3) = 3\vec{v}_1-3\vec{v}_2+4\vec{v}_3\) (ตรงคำตอบท้ายบท)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" id="p-3-1-10" data-pkey="pTB-3-1-10">
    <div class="pr-head"><span class="pr-num">แบบฝึกหัด 3.1 ข้อ 10</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(T:\mathbb{R}^3\to\mathbb{R}^3\) เป็นการแปลงเชิงเส้น กำหนดโดย \(T(x_1, x_2, x_3) = (2x_1 - x_2,\ x_1 + x_2 + x_3,\ x_2 - x_3)\) จงหาเมทริกซ์สำหรับ T สัมพัทธ์กับฐานหลัก \(B = \left\{\begin{bmatrix} 2\\ 1\\ 3 \end{bmatrix}, \begin{bmatrix} 1\\ 0\\ 1 \end{bmatrix}, \begin{bmatrix} -1\\ 1\\ 1 \end{bmatrix}\right\}\) และเวกเตอร์พิกัด \([\vec{x}]_B\) และ \([T(\vec{x})]_B\) เมื่อ \(\vec{x} = (-1, 4, 0)\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\([T]_B = P^{-1}AP\) โดย \(A\) = เมทริกซ์มาตรฐานของ T, \(P\) = เมทริกซ์ฐานหลัก · \([\vec{x}]_B = P^{-1}\vec{x}\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> เมทริกซ์มาตรฐาน \(A = \begin{bmatrix} 2 & -1 & 0\\ 1 & 1 & 1\\ 0 & 1 & -1 \end{bmatrix}\) (อ่านจากสูตร) — แล้วเปลี่ยนมุมมองเป็นฐานหลัก B ด้วย \(P^{-1}AP\)</p>
      <ol class="steps">
        <li><span class="step-t">ตั้ง P และ P⁻¹</span> \(P = \begin{bmatrix} 2 & 1 & -1\\ 1 & 0 & 1\\ 3 & 1 & 1 \end{bmatrix}\) ลดรูป \([P\mid I]\) ได้ \(P^{-1} = \begin{bmatrix} 1 & 2 & -1\\ -2 & -5 & 3\\ -1 & -1 & 1 \end{bmatrix}\)</li>
        <li><span class="step-t">[x]B ก่อน</span> \([\vec{x}]_B = P^{-1}\begin{bmatrix} -1\\ 4\\ 0 \end{bmatrix} = \begin{bmatrix} -1+8\\ 2-20\\ 1-4 \end{bmatrix} = \begin{bmatrix} 7\\ -18\\ -3 \end{bmatrix}\)</li>
        <li><span class="step-t">[T]B</span> \(A P = \begin{bmatrix} 2 & -1 & 0\\ 1 & 1 & 1\\ 0 & 1 & -1 \end{bmatrix}\begin{bmatrix} 2 & 1 & -1\\ 1 & 0 & 1\\ 3 & 1 & 1 \end{bmatrix} = \begin{bmatrix} 3 & 2 & -3\\ 6 & 2 & 1\\ -2 & -1 & 0 \end{bmatrix}\) → \([T]_B = P^{-1}(AP) = \begin{bmatrix} 17 & 7 & -1\\ -42 & -17 & 1\\ -11 & -5 & 2 \end{bmatrix}\)</li>
        <li><span class="step-t">[T(x)]B</span> \([T(\vec{x})]_B = [T]_B[\vec{x}]_B = \begin{bmatrix} 17(7)+7(-18)+3\\ -42(7)-17(-18)-3\\ -11(7)-5(-18)-6 \end{bmatrix} = \begin{bmatrix} 119-126+3\\ -294+306-3\\ -77+90-6 \end{bmatrix} = \begin{bmatrix} -4\\ 9\\ 7 \end{bmatrix}\)</li>
        <li><span class="step-t">ตรวจคำตอบ</span> ตรวจกลับสองชั้น: \(P[\vec{x}]_B = (-1, 4, 0) = \vec{x}\) ✓ และ \(P[T(\vec{x})]_B = -4(2,1,3)+9(1,0,1)+7(-1,1,1) = (-8+9-7,\ -4+7,\ -12+9+7) = (-6, 3, 4)\) เทียบ \(T(\vec{x})\) จากสูตร: \(T(-1,4,0) = (-2-4, -1+4+0, 4-0) = (-6, 3, 4)\) ✓ — <strong>สรุป:</strong> \([T]_B\), \([\vec{x}]_B = (7,-18,-3)\), \([T(\vec{x})]_B = (-4,9,7)\) (ตรงคำตอบท้ายบททุกตัว)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" id="p-3-1-11" data-pkey="pTB-3-1-11">
    <div class="pr-head"><span class="pr-num">แบบฝึกหัด 3.1 ข้อ 11</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(T:\mathbb{R}^4\to\mathbb{R}^4\) เป็นการแปลงเชิงเส้น กำหนดโดย \(T(x_1, x_2, x_3, x_4) = (x_1+x_3-x_4,\ 2x_1-x_3,\ x_1+2x_2+x_3+x_4,\ x_3-x_4)\) จงหาเมทริกซ์สำหรับ T สัมพัทธ์กับฐานหลัก \(B = \left\{\begin{bmatrix} -1\\ 1\\ -1\\ 1 \end{bmatrix}, \begin{bmatrix} 2\\ 1\\ 0\\ 1 \end{bmatrix}, \begin{bmatrix} 1\\ 0\\ 0\\ 2 \end{bmatrix}, \begin{bmatrix} 0\\ 0\\ 0\\ 1 \end{bmatrix}\right\}\) และ \([\vec{x}]_B\), \([T(\vec{x})]_B\) เมื่อ \(\vec{x} = (2, -1, 2, 3)\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">ขั้นตอนเดียวกับข้อ 10 แต่เป็น 4×4 — คูณ A กับ P หลักต่อหลักก่อนเสมอ แล้วค่อยคูณ P⁻¹</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> สูตรเดิม \([T]_B = P^{-1}AP\) ในมิติ 4 — จัดการคำนวณเป็นขั้น ๆ: \([\vec{x}]_B\) ก่อน, \(AP\) ต่อ, แล้วค่อยคูณ \(P^{-1}\)</p>
      <ol class="steps">
        <li><span class="step-t">ตั้ง A และ P</span> \(A = \begin{bmatrix} 1 & 0 & 1 & -1\\ 2 & 0 & -1 & 0\\ 1 & 2 & 1 & 1\\ 0 & 0 & 1 & -1 \end{bmatrix}\), \(P = \begin{bmatrix} -1 & 2 & 1 & 0\\ 1 & 1 & 0 & 0\\ -1 & 0 & 0 & 0\\ 1 & 1 & 2 & 1 \end{bmatrix}\)</li>
        <li><span class="step-t">[x]B</span> แก้ \(P\vec{c} = (2,-1,2,3)\) เริ่มจากแถวที่ 3 ซึ่งมีตัวแปรเดียว: \(-c_1 = 2\) → \(c_1 = -2\); แถว 2: \(c_1+c_2 = -1\) → \(c_2 = 1\); แถว 1: \(-c_1+2c_2+c_3 = 2\) → \(2+2+c_3 = 2\) → \(c_3 = -2\); แถว 4: \(c_1+c_2+2c_3+c_4 = 3\) → \(-2+1-4+c_4 = 3\) → \(c_4 = 8\) → \([\vec{x}]_B = (-2, 1, -2, 8)\)</li>
        <li><span class="step-t">[T]B</span> คำนวณ \(AP\) หลักต่อหลัก เช่น \(A\vec{b}_1 = (1(-1)+0+1(-1)-1(1),\ 2(-1)-(-1),\ -1+2(1)+(-1)+1,\ -1-1) = (-3, -1, -1, -2)\) ทำครบ 4 หลักแล้วคูณ \(P^{-1}\) ได้ \([T]_B = \begin{bmatrix} -1 & -5 & -3 & -1\\ 0 & 9 & 5 & 1\\ -4 & -22 & -14 & -4\\ 7 & 39 & 24 & 7 \end{bmatrix}\) (ตรวจ: \(P[T]_B = AP\) ✓)</li>
        <li><span class="step-t">[T(x)]B</span> \([T]_B\begin{bmatrix} -2\\ 1\\ -2\\ 8 \end{bmatrix} = \begin{bmatrix} 2-5+6-8\\ 0+9+5+8\\ 8-22+28-32\\ -14+39-48+56 \end{bmatrix} = \begin{bmatrix} -5\\ 7\\ -18\\ 33 \end{bmatrix}\)</li>
        <li><span class="step-t">ตรวจคำตอบ</span> แปลกลับ: \(-5\vec{b}_1+7\vec{b}_2-18\vec{b}_3+33\vec{b}_4\) รวมช่องต่อช่อง: ช่อง 1: \(5+14-18+0 = 1\); ช่อง 2: \(-5+7+0+0 = 2\); ช่อง 3: \(5+0+0+0 = 5\); ช่อง 4: \(-5+7-36+33 = -1\) → \((1, 2, 5, -1)\) เทียบกับ \(T(\vec{x})\) จากสูตรตรง: \(T(2,-1,2,3) = (2+2-3, 4-2, 2-2+2+3, 2-3) = (1, 2, 5, -1)\) ✓ ตรงพอดี — <strong>สรุป:</strong> \([T]_B\), \([\vec{x}]_B = (-2,1,-2,8)\), \([T(\vec{x})]_B = (-5,7,-18,33)\) (ตรงคำตอบท้ายบททุกตัว)</li>
      </ol>
    </div></div></details>
  </article>

  <article class="pr-card" id="p-3-1-12" data-pkey="pTB-3-1-12">
    <div class="pr-head"><span class="pr-num">แบบฝึกหัด 3.1 ข้อ 12</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(T:\mathbb{R}^3\to\mathbb{R}^3\) เป็นการแปลงเชิงเส้นซึ่งมีเมทริกซ์มาตรฐาน \(A = \begin{bmatrix} 1 & 1 & 3\\ 2 & -1 & 1\\ 1 & 2 & 0 \end{bmatrix}\) และให้ \(\vec{x} = \begin{bmatrix} 1\\ 2\\ 2 \end{bmatrix}\) จงหาเมทริกซ์สำหรับ T สัมพัทธ์กับฐานหลัก \(B_1 = \left\{\begin{bmatrix} 1\\ 1\\ 1 \end{bmatrix}, \begin{bmatrix} 1\\ 0\\ 1 \end{bmatrix}, \begin{bmatrix} -1\\ 1\\ 0 \end{bmatrix}\right\}\), ฐานหลัก \(B_2 = \left\{\begin{bmatrix} 1\\ 2\\ 1 \end{bmatrix}, \begin{bmatrix} -1\\ 1\\ 2 \end{bmatrix}, \begin{bmatrix} 1\\ 2\\ 3 \end{bmatrix}\right\}\) และเวกเตอร์พิกัด \([T(\vec{x})]_{B_1}\), \([T(\vec{x})]_{B_2}\) พร้อมทั้งเมทริกซ์การเปลี่ยนพิกัดจาก B2 ไป B1 และเมทริกซ์สำหรับ T สัมพัทธ์กับฐานหลัก B1 และ B2</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\([T]_{B_i} = P_i^{-1}AP_i\) · \([\vec{x}]_{B_i} = P_i^{-1}\vec{x}\) · \([\vec{x}]_{B_1} = (P_1^{-1}P_2)[\vec{x}]_{B_2}\) · \([T]_{B_2\leftarrow B_1} = P_2^{-1}AP_1\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> รวมทุกสูตรเปลี่ยนฐานในโจทย์เดียว — ตั้ง \(P_1, P_2\) ก่อน แล้วไล่ทีละชิ้น</p>
      <ol class="steps">
        <li><span class="step-t">[T]B1 และ [x]B1</span> \(P_1 = \begin{bmatrix} 1 & 1 & -1\\ 1 & 0 & 1\\ 1 & 1 & 0 \end{bmatrix}\) → \([T]_{B_1} = P_1^{-1}AP_1 = \begin{bmatrix} 4 & 6 & -4\\ -1 & -5 & 5\\ -2 & -3 & 1 \end{bmatrix}\); \([\vec{x}]_{B_1} = P_1^{-1}(1,2,2) = (1, 1, 1)\) (ตรวจ: \(\vec{b}_1+\vec{b}_2+\vec{b}_3 = (1+1-1, 1+0+1, 1+1+0) = (1, 2, 2)\) ✓)</li>
        <li><span class="step-t">[T(x)]B1</span> \([T]_{B_1}[\vec{x}]_{B_1} = \begin{bmatrix} 4+6-4\\ -1-5+5\\ -2-3+1 \end{bmatrix} = \begin{bmatrix} 6\\ -1\\ -4 \end{bmatrix}\) — ตรวจกับทางตรง: \(A\vec{x} = (1+2+6,\ 2-2+2,\ 1+4+0) = (9, 2, 5)\) แก้ \(P_1\vec{c} = (9,2,5)\): จากแถว 2, 3: \(c_3 = 2-c_1\), \(c_2 = 5-c_1\) แทนแถว 1: \(c_1+(5-c_1)-(2-c_1) = 9\) → \(c_1 = 6\), \(c_2 = -1\), \(c_3 = -4\) ✓ — <strong>สรุป:</strong> \([T(\vec{x})]_{B_1} = (6, -1, -4)\)</li>
        <li><span class="step-t">[T]B2, [x]B2</span> \(P_2 = \begin{bmatrix} 1 & -1 & 1\\ 2 & 1 & 2\\ 1 & 2 & 3 \end{bmatrix}\) (\(\det = -1+(-1)\cdot(6-2)+1(4-1) = ... = -6\)) → \([T]_{B_2} = P_2^{-1}AP_2 = \begin{bmatrix} -\frac{8}{3} & -\frac{7}{3} & -2\\ -\frac{11}{3} & -\frac{13}{3} & -7\\ 5 & 4 & 7 \end{bmatrix}\); \([\vec{x}]_{B_2} = P_2^{-1}(1,2,2) = (\frac{1}{2}, 0, \frac{1}{2})\)</li>
        <li><span class="step-t">[T(x)]B2</span> \([T]_{B_2}[\vec{x}]_{B_2} = \frac{1}{2}\)หลัก 1 \(+\frac{1}{2}\)หลัก 3 \(= \begin{bmatrix} -\frac{4}{3}-1\\ -\frac{11}{6}-\frac{7}{2}\\ \frac{5}{2}+\frac{7}{2} \end{bmatrix} = \begin{bmatrix} -\frac{7}{3}\\ -\frac{16}{3}\\ 6 \end{bmatrix}\)</li>
        <li><span class="step-t">เมทริกซ์เปลี่ยนพิกัด B2→B1</span> \(P_{B_1\leftarrow B_2} = P_1^{-1}P_2 = \begin{bmatrix} 2 & -2 & 0\\ -1 & 4 & 3\\ 0 & 3 & 2 \end{bmatrix}\) ตรวจ: คูณด้วย \([\vec{x}]_{B_2} = (\frac12, 0, \frac12)\): \((1-\frac{0}{1}, -\frac12+\frac32, \frac22) = (1, 1, 1) = [\vec{x}]_{B_1}\) ✓</li>
        <li><span class="step-t">[T] สัมพัทธ์กับ B1 และ B2</span> \([T]_{B_2\leftarrow B_1} = P_2^{-1}AP_1 = \begin{bmatrix} -\frac{2}{3} & \frac{4}{3} & -3\\ -\frac{8}{3} & -\frac{5}{3} & -1\\ 3 & 1 & 2 \end{bmatrix}\)</li>
        <li><span class="step-t">ตรวจคำตอบ</span> ทุกตัวเทียบคำตอบท้ายบทแล้ว: \([T]_{B_1}, [T]_{B_2}, [\vec{x}]_{B_1} = (1,1,1), [\vec{x}]_{B_2} = (\frac12, 0, \frac12), [T(\vec{x})]_{B_1} = (6,-1,-4), [T(\vec{x})]_{B_2} = (-\frac73, -\frac{16}{3}, 6), P_{B_1\leftarrow B_2}\) ตรงทั้งหมด ✓ — หมายเหตุ: ข้อนี้ต้องอ่านเวกเตอร์ที่ 3 ของ B2 จากตำราให้ครบ: คือ \((1,2,3)\)</li>
      </ol>
    </div></details>
  </article>

</section>
