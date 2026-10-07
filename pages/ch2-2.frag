<!-- meta
title: 2.2 ปริภูมิย่อย ฐานหลัก มิติ และแรงก์
ch: 2
section: 2.2
page: ch2-2.html
-->

<div class="crumb">บทที่ 2 · การแปลงเชิงเส้นและพีชคณิตเมทริกซ์</div>
<h1 class="page-title">2.2 ปริภูมิย่อย ฐานหลัก มิติ และแรงก์</h1>
<p class="page-sub">หัวใจเชิงโครงสร้างของพีชคณิตเชิงเส้น — เราจะเรียนรู้ <strong>ปริภูมิหลัก</strong> (Col A) และ
<strong>ปริภูมิสู่ศูนย์</strong> (Nul A) วิธีหา<strong>ฐานหลัก</strong> มิติ <strong>แรงก์</strong> (rank) และ <strong>ศูนยภาพ</strong> (nullity) พร้อมทฤษฎีบทแรงก์ที่เชื่อมทุกอย่างเข้าด้วยกัน</p>

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
      <li>ตรวจว่าเซตย่อยของ \(\mathbb{R}^m\) เป็นปริภูมิย่อยหรือไม่ (3 สมบัติ)</li>
      <li>อธิบายได้ว่า \(\operatorname{Col} A\), \(\operatorname{Nul} A\), เรนจ์ของการแปลงเชิงเส้น คือปริภูมิย่อยอย่างไร และสังเกตได้จากตัวอย่าง</li>
      <li>ตรวจว่าเซตของเวกเตอร์เป็นฐานหลักสำหรับ \(\mathbb{R}^m\) หรือไม่ และหาฐานหลักสำหรับ \(\operatorname{Col} A\) และ \(\operatorname{Nul} A\)</li>
      <li>หา \(\operatorname{rank} A\), \(\operatorname{nullity} A\) และใช้ทฤษฎีบทแรงก์ \(\operatorname{rank} A + \operatorname{nullity} A = n\)</li>
      <li>เขียนเซตที่กำหนดมาในรูป \(\operatorname{Col} A\) หรือ \(\operatorname{Nul} A\) เพื่อแสดงว่าเป็นปริภูมิย่อย แล้วหาฐานหลัก/มิติของมัน</li>
    </ul>
  </div>
</section>

<section class="block" id="lesson">
  <h2><span class="h2-dot">📖</span> บทเรียน</h2>

  <h3>1) ปริภูมิย่อย (subspace)</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม — ปริภูมิย่อยของ \(\mathbb{R}^m\)</div>
    <p>เซตย่อย \(H\) ของ \(\mathbb{R}^m\) เป็น<strong>ปริภูมิย่อย</strong> เมื่อ:</p>
    <p>1. \(\vec{0}_m \in H\) &nbsp; 2. ถ้า \(\vec{u}, \vec{v} \in H\) แล้ว \(\vec{u} + \vec{v} \in H\) (ปิดเมื่ออาการบวก) &nbsp; 3. ถ้า \(\vec{u} \in H\) และ \(c \in \mathbb{R}\) แล้ว \(c\vec{u} \in H\) (ปิดเมื่ออาการคูณสเกลาร์)</p>
  </div>

  <div class="box box-idea">
    <div class="box-title">💡 เทคนิคตรวจเร็ว</div>
    <p>• เช็กข้อ 1 ก่อนเสมอ: ถ้า \(\vec{0} \notin H\) → ไม่เป็นปริภูมิย่อยทันที เช่น \(\{(x_1, x_2): x_1^2 = x_2 + 3\}\) มี \((0,0)\) ไม่อยู่ → ไม่ใช่</p>
    <p>• สังเกตสมการ: เซตที่เขียนได้เป็น \(\{\vec{x} : A\vec{x} = \vec{0}\}\) หรือ \(\{A\vec{x}\}\) หรือ \(\operatorname{Span}\{\dots\}\) → เป็นปริภูมิย่อยเสมอ</p>
    <p>• เซตที่มี \(|x_i|\), \(x_i^2\), \(x_i \ge 0\), ค่าคงตัวไม่เป็นศูนย์ (เช่น \(x_1 + x_2 = 1\)) → มักไม่เป็นปริภูมิย่อย</p>
    <p>• ปริภูมิย่อยของ \(\mathbb{R}^2\) มีแค่ 3 แบบ: \(\{\vec{0}\}\), เส้นตรงผ่านจุดกำเนิด, และ \(\mathbb{R}^2\) ทั้งหมด</p>
  </div>

  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 2.2.1 — Span เป็นปริภูมิย่อยเสมอ</div>
    <p>ให้ \(\vec{v}_1, \dots, \vec{v}_p \in \mathbb{R}^m\) แล้ว \(H = \operatorname{Span}\{\vec{v}_1, \dots, \vec{v}_p\}\) เป็นปริภูมิย่อยของ \(\mathbb{R}^m\) (เพราะ \(\vec{0} = 0\vec{v}_1 + \cdots + 0\vec{v}_p\), ผลบวกและคูณสเกลาร์ของการรวมเชิงเส้นก็ยังเป็นการรวมเชิงเส้น)</p>
  </div>

  <h3>2) ปริภูมิหลักและปริภูมิสู่ศูนย์</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม — Col A และ Nul A</div>
    <p>ให้ \(A = \begin{bmatrix} \vec{v}_1 & \cdots & \vec{v}_n \end{bmatrix}\) เป็น \(m \times n\) เมทริกซ์</p>
    <p>• <strong>ปริภูมิหลัก</strong> (column space): \(\operatorname{Col} A = \operatorname{Span}\{\vec{v}_1, \dots, \vec{v}_n\} = \{A\vec{x} : \vec{x} \in \mathbb{R}^n\}\) — เป็นปริภูมิย่อยของ \(\mathbb{R}^{\color{#d97706}m}\) และ \(\vec{b} \in \operatorname{Col} A\) ก็ต่อเมื่อ \(\begin{bmatrix} A \mid \vec{b} \end{bmatrix}\) ต้องกัน</p>
    <p>• <strong>ปริภูมิสู่ศูนย์</strong> (null space): \(\operatorname{Nul} A = \{\vec{x} \in \mathbb{R}^n : A\vec{x} = \vec{0}_m\}\) — เป็นปริภูมิย่อยของ \(\mathbb{R}^{\color{#d97706}n}\) (ทฤษฎีบท 2.2.3)</p>
  </div>

  <div class="box box-idea">
    <div class="box-title">💡 Col อยู่คนละปริภูมิกับ Nul!</div>
    <p>\(\operatorname{Col} A\) อยู่ใน \(\mathbb{R}^m\) (เวกเตอร์ "ผลลัพธ์") ส่วน \(\operatorname{Nul} A\) อยู่ใน \(\mathbb{R}^n\) (เวกเตอร์ "ข้อมูลนำเข้า") — และ \(\operatorname{Col} A\) ก็คือ<strong>เรนจ์ของการแปลง \(\vec{x} \mapsto A\vec{x}\)</strong> ด้วย (ทฤษฎีบท 2.2.2)</p>
    <p>หา Col: ลดรูป \(A\) → หาหลักตัวหลัก → ฐานหลักคือ<em>หลักตัวหลักของ A ตัวจริง</em> (ไม่ใช่ของ REF!)<br>
    หา Nul: ต้องแก้ \(A\vec{x} = \vec{0}\) → ลดรูปจน RREF → เขียนผลเฉลยอิงตัวแปรเสริม</p>
  </div>

  <h3>3) ฐานหลัก (basis)</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม — ฐานหลัก</div>
    <p><strong>ฐานหลัก</strong> (basis) สำหรับปริภูมิย่อย \(H\) คือเซต \(\mathcal{B} \subseteq H\) ซึ่ง</p>
    <p>1. เป็น<strong>อิสระเชิงเส้น</strong> และ 2. <strong>แผ่ทั่ว</strong> \(H\) (Span \(\mathcal{B} = H\))</p>
    <p>เวกเตอร์มาตรฐาน \(\{\vec{e}_1, \dots, \vec{e}_m\}\) เป็นฐานหลักสำหรับ \(\mathbb{R}^m\) เรียกว่า <strong>ฐานหลักมาตรฐาน</strong></p>
  </div>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 2.2.4 — ฐานหลักของ Col A</div>
    <p>เซตของ<strong>หลักตัวหลักของ \(A\)</strong> (หลักจากเมทริกซ์ต้นฉบับ!) เป็นฐานหลักหนึ่งสำหรับ \(\operatorname{Col} A\) — และจำนวนหลักตัวหลักก็คือ <strong>แรงก์</strong> ของ \(A\)</p>
  </div>

  <h3>4) มิติ แรงก์ และศูนยภาพ</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม — มิติ แรงก์ ศูนยภาพ</div>
    <p>• เซตฐานหลักทั้งหมดของ \(H\) มีจำนวนสมาชิกเท่ากันเสมอ เรียกว่า <strong>มิติ</strong> (dimension) \(\dim H\) (โดยกำหนด \(\dim\{\vec{0}\} = 0\))</p>
    <p>• <strong>แรงก์</strong>: \(\operatorname{rank} A = \dim \operatorname{Col} A\) = จำนวนหลักตัวหลัก</p>
    <p>• <strong>ศูนยภาพ</strong>: \(\operatorname{nullity} A = \dim \operatorname{Nul} A\) = จำนวนตัวแปรเสรีของ \(A\vec{x} = \vec{0}\)</p>
  </div>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 2.2.5 — ทฤษฎีบทแรงก์ (Rank Theorem)</div>
    <p>ถ้า \(A\) เป็น \(m \times n\) เมทริกซ์ (มี \(n\) หลัก) แล้ว</p>
    \[ \operatorname{rank} A + \operatorname{nullity} A = n \]
    <p>(จำนวนหลักตัวหลัก + จำนวนหลักที่ไม่เป็นหลักตัวหลัก = จำนวนหลักทั้งหมด — มองแบบนี้แล้วทฤษฎีบทกลายเป็นเรื่องชัดเจน!)</p>
  </div>

  <div class="box box-warn">
    <div class="box-title">⚠️ ข้อผิดพลาดที่พบบ่อยที่สุดของหัวข้อนี้</div>
    <p>• ฐานหลักของ \(\operatorname{Col} A\) ต้องหยิบ<em>หลักตัวหลักจาก \(A\) ต้นฉบับ</em> ไม่ใช่หลักตัวหลักของ REF/RREF</p>
    <p>• ฐานหลักของ \(\operatorname{Nul} A\) มาจาก<em>เวกเตอร์ทิศทางในผลเฉลยอิงตัวแปรเสริม</em> (จาก RREF) ไม่ใช่หลักของ \(A\)</p>
    <p>• \(\operatorname{rank} A + \operatorname{nullity} A = n\) (จำนวน<em>หลัก</em>) — ไม่ใช่ \(m\) (จำนวนแถว) อย่าสับสน</p>
  </div>
</section>

<section class="block" id="examples">
  <h2><span class="h2-dot">✏️</span> ตัวอย่างโจทย์</h2>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 1</span><span class="tag easy">ง่าย</span><span class="ex-title">ตรวจว่าเซตเป็นปริภูมิย่อยหรือไม่</span></div>
    <div class="ex-body">
      <div class="ex-q">จงพิจารณาว่าเซตต่อไปนี้เป็นปริภูมิย่อยของ \(\mathbb{R}^2\) หรือ \(\mathbb{R}^3\) หรือไม่ เพราะเหตุใด<br>
      (ก) \(H_1 = \{(x_1, x_2) : x_2 = 2x_1\}\) &nbsp;
      (ข) \(H_2 = \{(x_1, x_2) : x_1x_2 = 0\}\) &nbsp;
      (ค) \(H_3 = \{(x_1, x_2, x_3) : x_1 - 2x_2 + x_3 = 0\}\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — เช็ก 3 สมบัติ: มี \(\vec{0}\) → ปิดการบวก → ปิดการคูณสเกลาร์ (เจอข้อห้ามตัวใดตัวหนึ่งก็จบ) กลยุทธ์ของข้อนี้: เริ่มจากแทน \(\vec{0}\) เสมอ เพราะคิดเร็วสุด ถ้าตกข้อนี้ตอบ "ไม่เป็น" ทันที ถ้าผ่าน ค่อยทดสอบสมบัติปิดด้วยเวกเตอร์ตัวอย่างเลขง่าย ๆ อีกทางลัดคือจำรูปแบบ: สมการเชิงเส้นที่ "ผ่านจุดกำเนิด" (เท่ากับ 0) มักเป็นปริภูมิย่อย ส่วนที่เท่ากับค่าอื่นหรือมีเงื่อนไขอสมภาค/ยกกำลังมักไม่เป็น</div>
      <ol class="steps">
        <li><span class="step-t">(ก) เป็นปริภูมิย่อย</span> \((0,0) \in H_1\) ✓ ถ้า \(\vec{u}, \vec{v}\) อยู่ใน \(H_1\) แล้วผลบวกก็ยังมี \(x_2 = 2x_1\) ✓ คูณสเกลาร์ก็เช่นกัน ✓ (หรือสังเกต \(H_1 = \operatorname{Nul}\begin{bmatrix} -2 & 1 \end{bmatrix}\)) — ขยายดูทีละสมบัติ: (1) แทน \((0, 0)\): \(0 = 2(0)\) จริง จุดกำเนิดอยู่ในเซต (2) ปิดการบวก: เวกเตอร์ใน \(H_1\) มีรูป \((a, 2a)\) เอาสองตัวมาบวกกันได้ \((a, 2a) + (b, 2b) = (a + b,\; 2a + 2b) = (a + b,\; 2(a + b))\) — สมาชิกตัวหลังยังเป็น "สองเท่าของตัวหน้า" จึงยังอยู่ใน \(H_1\) (3) ปิดการคูณสเกลาร์: \(c(a, 2a) = (ca,\; 2ca)\) ก็ยังเป็นรูปเดิม ✓ ทางลัด: สมการ \(x_2 - 2x_1 = 0\) เขียนเป็น \(A\vec{x} = \vec{0}\) ได้เมื่อ \(A = \begin{bmatrix} -2 & 1 \end{bmatrix}\) เซตจึงเป็น \(\operatorname{Nul} A\) ซึ่งเป็นปริภูมิย่อยโดยทฤษฎีบท 2.2.3</li>
        <li><span class="step-t">(ข) ไม่เป็นปริภูมิย่อย</span> \((0,0) \in H_2\) ✓ (เช็ก: \(0 \cdot 0 = 0\) จริง) แต่ไม่ปิดการบวก: หยิบ \(\vec{u} = (1, 0) \in H_2\) (เพราะ \(1 \cdot 0 = 0\) ✓) และ \(\vec{v} = (0, 1) \in H_2\) (เพราะ \(0 \cdot 1 = 0\) ✓) แต่ \(\vec{u} + \vec{v} = (1, 1)\) มี \(x_1x_2 = 1 \cdot 1 = 1 \neq 0\) → \(\vec{u} + \vec{v} \notin H_2\) ✗ — จุดที่ต้องสังเกต: สองเวกเตอร์ "แยกกันอยู่ในเซต" แต่ "บวกกันแล้วหลุดออกนอกเซต" ตัวการคือพจน์ \(x_1x_2\) ที่ให้ค่าเป็นศูนย์เฉพาะเมื่อ "ตัวใดตัวหนึ่งเป็นศูนย์" พอบวกกันแล้วทั้งสองตัวไม่เป็นศูนย์ สมการก็พัง</li>
        <li><span class="step-t">(ค) เป็นปริภูมิย่อย</span> สมการผ่านจุดกำเนิดและเป็นเชิงเส้น → \(H_3 = \operatorname{Nul} A\) เมื่อ \(A = \begin{bmatrix} 1 & -2 & 1 \end{bmatrix}\) → เป็นปริภูมิย่อยโดยทฤษฎีบท 2.2.3 — ดูเหตุผลให้ลึกขึ้น: ย้ายข้างให้เหลือศูนย์ \(x_1 - 2x_2 + x_3 = 0\) พอแทน \(\vec{0} = (0, 0, 0)\) ได้ \(0 - 2(0) + 0 = 0\) ✓ และถ้าสองเวกเตอร์ "อิ่มตัวต่อสมการนี้" ผลบวกและคูณสเกลาร์ของมันก็ยังอิ่มตัว (เพราะสมการเป็นเชิงเส้น ไม่มียกกำลัง ไม่มีค่าคงตัว) เซตจึงเป็น \(\operatorname{Nul} A\) = ปริภูมิย่อยแน่นอน</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2</span><span class="tag easy">ง่าย</span><span class="ex-title">เซตเป็นฐานหลักสำหรับ \(\mathbb{R}^3\) หรือไม่</span></div>
    <div class="ex-body">
      <div class="ex-q">จงพิจารณาว่าเซตต่อไปนี้เป็นฐานหลักสำหรับ \(\mathbb{R}^3\) หรือไม่ เพราะเหตุใด<br>
      (ก) \(\left\{ \begin{bmatrix} 1\\ 0\\ 1 \end{bmatrix}, \begin{bmatrix} 0\\ 1\\ 1 \end{bmatrix}, \begin{bmatrix} 1\\ 1\\ 2 \end{bmatrix} \right\}\) &nbsp;
      (ข) \(\left\{ \begin{bmatrix} 1\\ 0\\ 1 \end{bmatrix}, \begin{bmatrix} 0\\ 1\\ 1 \end{bmatrix}, \begin{bmatrix} 1\\ 1\\ 3 \end{bmatrix} \right\}\) &nbsp;
      (ค) เซตของ 4 เวกเตอร์ใน \(\mathbb{R}^3\) ใด ๆ</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — ฐานหลักของ \(\mathbb{R}^3\) ต้องมี 3 เวกเตอร์ อิสระเชิงเส้น และแผ่ทั่ว — ใน \(\mathbb{R}^3\) เงื่อนไข "3 เวกเตอร์ + อิสระ" พอแล้ว (แผ่ทั่วตามมาอัตโนมัติ) กลยุทธ์ของข้อนี้: เช็ก "จำนวนเวกเตอร์" ก่อนเป็นอันดับแรก ถ้าจำนวนไม่ใช่ 3 ก็ตอบจบทันทีโดยไม่ต้องคำนวณอะไร เมื่อจำนวนถูกแล้ว ค่อยเรียงเวกเตอร์เป็นหลักของเมทริกซ์แล้วลดรูป: ตัวนำครบ 3 หลัก = อิสระเชิงเส้น = เป็นฐานหลัก</div>
      <ol class="steps">
        <li><span class="step-t">(ก) ตรวจอิสระเชิงเส้นด้วยการลดรูป</span> เรียงเวกเตอร์สามตัวเป็น<em>หลัก</em>ของเมทริกซ์ แล้วลดรูป:
        \[ \begin{bmatrix} 1 & 0 & 1\\ 0 & 1 & 1\\ 1 & 1 & 2 \end{bmatrix} \xrightarrow{\,R_3 - R_1\,} \begin{bmatrix} 1 & 0 & 1\\ 0 & 1 & 1\\ 0 & 1 & 1 \end{bmatrix} \xrightarrow{\,R_3 - R_2\,} \begin{bmatrix} 1 & 0 & 1\\ 0 & 1 & 1\\ 0 & 0 & 0 \end{bmatrix} \]
        อธิบายลูกศร: \(R_3 - R_1\) เคาะช่องแรกของแถวล่าง ทีละช่อง ได้ \(1 - 1 = 0\), \(1 - 0 = 1\), \(2 - 1 = 1\) แล้ว \(R_3 - R_2\) เคาะช่องที่สองต่อ ได้ \(0 - 0 = 0\), \(1 - 1 = 0\), \(1 - 1 = 0\) — แถวล่างกลายเป็นศูนย์ทั้งแถว หลักที่ 3 ไม่เป็นหลักตัวหลัก → เวกเตอร์พึ่งเชิงเส้น (จริง ๆ ตัวที่ 3 = ตัวที่ 1 + ตัวที่ 2 — ลองบวกดู: \((1, 0, 1) + (0, 1, 1) = (1, 1, 2)\) ✓ ตรงพอดี) → <strong>ไม่เป็นฐานหลัก</strong></li>
        <li><span class="step-t">(ข) ลดรูปเช็ก</span> เปลี่ยนเวกเตอร์ตัวที่สามเป็น \((1, 1, 3)\) แล้วลดรูปเหมือนเดิม:
        \[ \begin{bmatrix} 1 & 0 & 1\\ 0 & 1 & 1\\ 1 & 1 & 3 \end{bmatrix} \xrightarrow{\,R_3 - R_1\,} \begin{bmatrix} 1 & 0 & 1\\ 0 & 1 & 1\\ 0 & 1 & 2 \end{bmatrix} \xrightarrow{\,R_3 - R_2\,} \begin{bmatrix} 1 & 0 & 1\\ 0 & 1 & 1\\ 0 & 0 & 1 \end{bmatrix} \]
        ลูกศรแรกให้แถวล่าง \((1 - 1,\; 1 - 0,\; 3 - 1) = (0, 1, 2)\) ลูกศรที่สองให้ \((0 - 0,\; 1 - 1,\; 2 - 1) = (0, 0, 1)\) — ตัวนำ (ค่า 1, 1, 1 บนเส้นทแยงมุม) ครบทุกหลัก → อิสระเชิงเส้น มี 3 เวกเตอร์ → <strong>เป็นฐานหลักสำหรับ \(\mathbb{R}^3\)</strong> (เพราะ "3 เวกเตอร์อิสระใน \(\mathbb{R}^3\)" จะแผ่ทั่วโดยอัตโนมัติ ไม่ต้องเช็กแผ่ทั่วแยก)</li>
        <li><span class="step-t">(ค) ไม่เป็นฐานหลักเสมอ</span> เซตที่มี 4 เวกเตอร์ใน \(\mathbb{R}^3\) พึ่งเชิงเส้นเสมอ (\(p = 4 > m = 3\)) → ขาดสมบัติอิสระเชิงเส้น → <strong>ไม่เป็นฐานหลัก</strong> (แม้จะแผ่ทั่วก็ตาม) — เหตุผลเชิงเดาความ: ระบบเอกพันธุ์ 3 สมการกับ 4 ตัวแปร (น้ำหนัก \(c_1, \dots, c_4\)) มีสมการน้อยกว่าตัวแปร จึงต้องมีตัวแปรเสรีอย่างน้อย 1 ตัว แปลว่ามีวิธีรวมแบบไม่หมดศูนย์เสมอ</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3</span><span class="tag hard">ยาก</span><span class="ex-title">หาฐานหลักของ Col A และ Nul A + rank + nullity</span></div>
    <div class="ex-body">
      <div class="ex-q">จงหาฐานหลักสำหรับปริภูมิหลักและปริภูมิสู่ศูนย์ของเมทริกซ์
      \[ A = \begin{bmatrix} 1 & 0 & -2 & 3\\ 0 & 1 & 1 & -1\\ 1 & 1 & -1 & 2 \end{bmatrix} \]
      พร้อมทั้งหา \(\operatorname{rank} A\) และ \(\operatorname{nullity} A\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — ลดรูป \(A\) ครั้งเดียวได้ทั้งสองคำตอบ: หลักตัวหลัก → ฐานของ Col A (จาก \(A\) ตัวจริง) / RREF → แก้ \(A\vec{x} = \vec{0}\) เพื่อฐานของ Nul A กลยุทธ์ของข้อนี้: อย่าแยกทำสองรอบ เพราะการลดรูปครั้งเดียวให้ข้อมูลครบ — หลักไหนมีตัวนำ (หัวบันได) ให้เก็บ "หลักนั้นของ \(A\) ต้นฉบับ" เป็นฐานของ Col A ส่วนหลักที่ไม่มีตัวนำกลายเป็นตัวแปรเสรี แต่ละตัวแปรเสรีจะ "โยก" ได้หนึ่งทิศทาง ทิศทางเหล่านั้นคือฐานของ Nul A จำนวนทั้งสองบวกกันต้องเท่ากับจำนวนหลักเสมอ (ทฤษฎีบทแรงก์) ใช้เป็นตัวตรวจ</div>
      <ol class="steps">
        <li><span class="step-t">ลดรูปจนได้รูปแบบขั้นบันได</span> ใช้หลักแรก (ค่า 1 ที่ซ้ายบน) เป็นตัวเคาะ:
        \[ A \xrightarrow{\,R_3 - R_1\,} \begin{bmatrix} 1 & 0 & -2 & 3\\ 0 & 1 & 1 & -1\\ 0 & 1 & 1 & -1 \end{bmatrix} \xrightarrow{\,R_3 - R_2\,} \begin{bmatrix} 1 & 0 & -2 & 3\\ 0 & 1 & 1 & -1\\ 0 & 0 & 0 & 0 \end{bmatrix} \]
        ลูกศรแรก \(R_3 - R_1\) ทำทีละช่อง: \(1 - 1 = 0\), \(1 - 0 = 1\), \(-1 - (-2) = -1 + 2 = 1\), \(2 - 3 = -1\) ลูกศรที่สอง \(R_3 - R_2\): \(0 - 0 = 0\), \(1 - 1 = 0\), \(1 - 1 = 0\), \(-1 - (-1) = 0\) — แถวล่างหายเป็นศูนย์ทั้งแถว (RREF ตรงนี้เลย เพราะหลักตัวหลัก 1, 2 สะอาดอยู่แล้ว) หลักตัวหลักคือหลักที่ 1 และ 2 (ตัวนำคือ 1 ที่ซ้ายบน กับ 1 ที่กลางแถวสอง)</li>
        <li><span class="step-t"><span class="step-tag">ท่า: ฐาน Col A</span>หยิบหลักตัวหลักจาก A ตัวจริง</span> หลักที่ 1 และ 2 เป็นหลักตัวหลัก จึงหยิบ "หลักที่ 1 และ 2 ของ \(A\) ต้นฉบับ" (ไม่ใช่ของ RREF! เพราะการลดรูปเปลี่ยนค่าหลักไปแล้ว หลักตัวหลักของ RREF จะพาไปผิดปริภูมิ):
        \[ \operatorname{Col} A = \operatorname{Span}\left\{ \begin{bmatrix} 1\\ 0\\ 1 \end{bmatrix}, \begin{bmatrix} 0\\ 1\\ 1 \end{bmatrix} \right\} \]
        และ \(\operatorname{rank} A = 2\) (แรงก์ = จำนวนหลักตัวหลัก = จำนวนเวกเตอร์ในฐานของ Col A)</li>
        <li><span class="step-t"><span class="step-tag">ท่า: ฐาน Nul A</span>แก้ \(A\vec{x} = \vec{0}\) จาก RREF</span> จาก RREF แต่ละแถวกลับเป็นสมการได้ โดย \(x_3, x_4\) (หลักที่ไม่มีตัวนำ) เป็นตัวแปรเสรี — แถว 1 อ่านว่า \(x_1 - 2x_3 + 3x_4 = 0\) ย้ายข้างได้ \(x_1 = 2x_3 - 3x_4\) แถว 2 อ่านว่า \(x_2 + x_3 - x_4 = 0\) ย้ายข้างได้ \(x_2 = -x_3 + x_4\):
        \[ \begin{aligned} x_1 - 2x_3 + 3x_4 &= 0\\ x_2 + x_3 - x_4 &= 0 \end{aligned} \;\Longrightarrow\; \begin{aligned} x_1 &= 2x_3 - 3x_4\\ x_2 &= -x_3 + x_4 \end{aligned} \]
        เขียน \(\vec{x}\) แยกตามตัวแปรเสรี (เทคนิค: ให้ \(x_3 = 1, x_4 = 0\) ได้เวกเตอร์แรก \(\begin{bmatrix} 2\\ -1\\ 1\\ 0 \end{bmatrix}\) และ \(x_3 = 0, x_4 = 1\) ได้เวกเตอร์ที่สอง \(\begin{bmatrix} -3\\ 1\\ 0\\ 1 \end{bmatrix}\) — ช่องของตัวแปรเสรีใส่ 0/1 สลับกันพอดี):
        \[ \vec{x} = x_3\begin{bmatrix} 2\\ -1\\ 1\\ 0 \end{bmatrix} + x_4\begin{bmatrix} -3\\ 1\\ 0\\ 1 \end{bmatrix} \;\Longrightarrow\; \operatorname{Nul} A = \operatorname{Span}\left\{ \begin{bmatrix} 2\\ -1\\ 1\\ 0 \end{bmatrix}, \begin{bmatrix} -3\\ 1\\ 0\\ 1 \end{bmatrix} \right\} \]
        และ \(\operatorname{nullity} A = 2\) (ศูนยภาพ = จำนวนตัวแปรเสรี = จำนวนเวกเตอร์ในฐานของ Nul A)</li>
        <li><span class="step-t">ตรวจทฤษฎีบทแรงก์</span> \(\operatorname{rank} A + \operatorname{nullity} A = 2 + 2 = 4 = n\) (จำนวนหลักของ \(A\)) ✓ — ตรวจแบบนี้ได้ทุกข้อ: หลักตัวหลัก 2 หลัก + หลักไม่ตัวหลัก 2 หลัก = 4 หลักพอดี สรุป: ฐาน Col A = \(\{(1, 0, 1), (0, 1, 1)\}\), ฐาน Nul A = \(\{(2, -1, 1, 0), (-3, 1, 0, 1)\}\), rank = 2, nullity = 2</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจฐานของ Nul A:</span> \(A(2, -1, 1, 0) = (2 - 2,\; -1 + 1,\; 2 - 1 - 1) = (0, 0, 0)\) ✓ และ \(A(-3, 1, 0, 1) = (-3 + 3,\; 1 - 1,\; -3 + 1 + 2) = (0, 0, 0)\) ✓</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 4</span><span class="tag hard">ยาก</span><span class="ex-title">แสดงว่า H เป็นปริภูมิย่อย + หาฐานหลักและมิติ (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">จงแสดงว่าเซต
      \[ H = \{(x_1 + 2x_2, \; -x_2 + x_3, \; x_1 + x_2 + x_3) : x_1, x_2, x_3 \in \mathbb{R}\} \]
      เป็นปริภูมิย่อยของ \(\mathbb{R}^3\) พร้อมทั้งหาฐานหลักและมิติของ \(H\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — เซตแบบพารามิเตอร์: แยกตามพารามิเตอร์ให้เห็นว่าเป็น Span → จึงเป็นปริภูมิย่อย → หาฐานโดยการลดรูปเมทริกซ์ที่พารามิเตอร์เรียงเป็นหลัก กลยุทธ์ของข้อนี้: พบเซตที่เขียนเป็น "(สูตรที่มีพารามิเตอร์ \(x_1, x_2, \dots\))" ให้รีบแยกสูตรเป็น "พจน์ของ \(x_1\) + พจน์ของ \(x_2\) + ..." พอแยกแล้วจะเห็นเวกเตอร์คงตัวโผล่มา ซึ่งเวกเตอร์เหล่านั้นคือหลักของเมทริกซ์ \(A\) ที่ทำให้เซตกลายเป็น \(\operatorname{Col} A\) — แล้วเรื่องที่เหลือคือลดรูปนับตัวนำเหมือนเดิม</div>
      <ol class="steps">
        <li><span class="step-t"><span class="step-tag">ท่า: แยกพารามิเตอร์</span>เขียนองค์ประกอบของ H เป็นการรวมเชิงเส้น</span> แยกเวกเตอร์สามช่องตามพารามิเตอร์ — ช่องแรก \(x_1 + 2x_2\) มีแต่ \(x_1\) (สัมประสิทธิ์ 1) กับ \(x_2\) (สัมประสิทธิ์ 2) ไม่มี \(x_3\) ช่องที่สอง \(-x_2 + x_3\) ไม่มี \(x_1\) ช่องที่สาม \(x_1 + x_2 + x_3\) มีครบทุกตัว (สัมประสิทธิ์ 1, 1, 1) — เก็บสัมประสิทธิ์ของ \(x_1\) ทุกช่องเป็นเวกเตอร์แรก ของ \(x_2\) เป็นเวกเตอร์ที่สอง ของ \(x_3\) เป็นเวกเตอร์ที่สาม:
        \[ \begin{bmatrix} x_1 + 2x_2\\ -x_2 + x_3\\ x_1 + x_2 + x_3 \end{bmatrix} = x_1\begin{bmatrix} 1\\ 0\\ 1 \end{bmatrix} + x_2\begin{bmatrix} 2\\ -1\\ 1 \end{bmatrix} + x_3\begin{bmatrix} 0\\ 1\\ 1 \end{bmatrix} = \operatorname{Col} A \;\text{เมื่อ}\; A = \begin{bmatrix} 1 & 2 & 0\\ 0 & -1 & 1\\ 1 & 1 & 1 \end{bmatrix} \]
        แปลว่า \(H\) คือเซตของการรวมเชิงเส้นทั้งหมดของ 3 เวกเตอร์นี้ = \(\operatorname{Col} A\) โดยทฤษฎีบท 2.2.1 \(\operatorname{Col} A\) เป็นปริภูมิย่อยของ \(\mathbb{R}^3\) ✓ (ทดลองสักชุดเพื่อเช็กการแยก: ใส่ \(x_1 = 1, x_2 = 0, x_3 = 2\) ฝั่งซ้ายได้ \((1,\; 2,\; 3)\) ฝั่งขวาได้ \(1\begin{bmatrix} 1\\ 0\\ 1 \end{bmatrix} + 2\begin{bmatrix} 0\\ 1\\ 1 \end{bmatrix} = (1, 2, 3)\) ✓ ตรงกัน)</li>
        <li><span class="step-t">ลดรูป \(A\) จนได้รูปแบบขั้นบันได</span> ลูกศรแรก \(R_3 - R_1\) ทีละช่อง ได้ \(1 - 1 = 0\), \(1 - 2 = -1\), \(1 - 0 = 1\) ลูกศรที่สอง \(R_3 - R_2\) ได้ \(0 - 0 = 0\), \(-1 - (-1) = 0\), \(1 - 1 = 0\):
        \[ A \xrightarrow{\,R_3 - R_1\,} \begin{bmatrix} 1 & 2 & 0\\ 0 & -1 & 1\\ 0 & -1 & 1 \end{bmatrix} \xrightarrow{\,R_3 - R_2\,} \begin{bmatrix} 1 & 2 & 0\\ 0 & -1 & 1\\ 0 & 0 & 0 \end{bmatrix} \]
        หลักตัวหลักคือหลักที่ 1 และ 2 (ตัวนำคือ 1 ที่ซ้ายบน กับ \(-1\) แถวกลางหลักที่สอง) — หลักที่ 3 ไม่มีตัวนำ</li>
        <li><span class="step-t">ฐานหลักและมิติ</span> หยิบหลักตัวหลักจาก \(A\) ต้นฉบับ (หลัก 1 และ 2):
        \[ \mathcal{B} = \left\{ \begin{bmatrix} 1\\ 0\\ 1 \end{bmatrix}, \begin{bmatrix} 2\\ -1\\ 1 \end{bmatrix} \right\} \quad \text{เป็นฐานหลักหนึ่งสำหรับ } H \;\Longrightarrow\; \dim H = 2 \]
        (มิติ = จำนวนเวกเตอร์ในฐาน = จำนวนหลักตัวหลัก) (เห็นไหมว่า \(H\) คือระนาบผ่านจุดกำเนิดใน \(\mathbb{R}^3\)) — สรุป: \(H\) เป็นปริภูมิย่อย (รูป \(\operatorname{Col} A\)), ฐานหลัก \(\{(1, 0, 1), (2, -1, 1)\}\), \(\dim H = 2\)</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5</span><span class="tag hard">ยาก</span><span class="ex-title">H จากเงื่อนไข 2 สมการ → Nul A (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">จงแสดงว่าเซต
      \[ H = \{(x_1, x_2, x_3, x_4) \in \mathbb{R}^4 : x_1 + x_2 = x_3 + x_4 \;\text{และ}\; x_1 + x_2 + x_3 + x_4 = 0 \} \]
      เป็นปริภูมิย่อยของ \(\mathbb{R}^4\) พร้อมทั้งหาฐานหลักและมิติของ \(H\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — เซตแบบสมการ: ย้ายข้างให้เป็น \(A\vec{x} = \vec{0}\) → \(H = \operatorname{Nul} A\) → ลดรูปจน RREF แล้วเขียนผลเฉลยอิงตัวแปรเสริม กลยุทธ์ของข้อนี้: สมการที่ไม่ได้เขียนในรูป "= 0" ให้ย้ายพจน์ข้ามฝั่งก่อนเสมอ (สมการแรก \(x_1 + x_2 = x_3 + x_4\) ต้องกลายเป็น \(x_1 + x_2 - x_3 - x_4 = 0\)) พอทุกสมการเป็น "= 0" แล้วเรียงสัมประสิทธิ์เป็นแถวของ \(A\) ที่เหลือคือสูตรฐานของ Nul A ที่ฝึกไว้แล้ว</div>
      <ol class="steps">
        <li><span class="step-t"><span class="step-tag">ท่า: ย้ายข้าง</span>เขียนเงื่อนไขเป็นระบบเอกพันธุ์</span> สมการแรก \(x_1 + x_2 = x_3 + x_4\) ย้ายทุกพจน์มาข้างซ้าย ได้ \(x_1 + x_2 - x_3 - x_4 = 0\) สมการที่สองเป็น "= 0" อยู่แล้ว เรียงสัมประสิทธิ์เป็นแถวของ \(A\):
        \[ \begin{aligned} x_1 + x_2 - x_3 - x_4 &= 0\\ x_1 + x_2 + x_3 + x_4 &= 0 \end{aligned} \;\Longrightarrow\; H = \{\vec{x} : A\vec{x} = \vec{0}\} = \operatorname{Nul} A,\;\; A = \begin{bmatrix} 1 & 1 & -1 & -1\\ 1 & 1 & 1 & 1 \end{bmatrix} \]
        โดยทฤษฎีบท 2.2.3 \(H\) เป็นปริภูมิย่อยของ \(\mathbb{R}^4\) ✓ (จุดแรกเข้าใจง่าย: ระบบเอกพันธุ์คือระบบที่ทุกสมการเท่ากับศูนย์ เซตของผลเฉลยทั้งหมดของมัน = \(\operatorname{Nul} A\) = ปริภูมิย่อยเสมอ)</li>
        <li><span class="step-t">ลดรูปจนได้ RREF</span> ลูกศรแรก \(R_2 - R_1\) ทีละช่อง ได้ \(1 - 1 = 0\), \(1 - 1 = 0\), \(1 - (-1) = 2\), \(1 - (-1) = 2\) จากนั้น \(\tfrac{1}{2}R_2\) คูณแถวล่างทั้งแถวด้วยครึ่ง ให้ \((0, 0, 1, 1)\) แล้ว \(R_1 + R_2\) ทำลายค่า \(-1\) ที่หลัก 3 ของแถวบน: ได้ \(-1 + 1 = 0\) และ \(-1 + 1 = 0\):
        \[ A \xrightarrow{\,R_2 - R_1\,} \begin{bmatrix} 1 & 1 & -1 & -1\\ 0 & 0 & 2 & 2 \end{bmatrix} \xrightarrow{\substack{\tfrac{1}{2}R_2\\ R_1 + R_2}} \begin{bmatrix} 1 & 1 & 0 & 0\\ 0 & 0 & 1 & 1 \end{bmatrix} \]</li>
        <li><span class="step-t">แก้ระบบ → ผลเฉลยอิงตัวแปรเสริม</span> หลักที่มีตัวนำคือหลัก 1 และ 3 ดังนั้น \(x_2, x_4\) เป็นตัวแปรเสรี อ่านสมการจาก RREF: แถวบน \(x_1 + x_2 = 0\) จึงได้ \(x_1 = -x_2\) แถวล่าง \(x_3 + x_4 = 0\) จึงได้ \(x_3 = -x_4\) ใส่ค่าทดลอง \((x_2, x_4) = (1, 0)\) ได้เวกเตอร์แรก \((-1, 1, 0, 0)\) และ \((0, 1)\) ได้เวกเตอร์ที่สอง \((0, 0, -1, 1)\):
        \[ x_1 = -x_2, \quad x_3 = -x_4 \;\Longrightarrow\; \vec{x} = x_2\begin{bmatrix} -1\\ 1\\ 0\\ 0 \end{bmatrix} + x_4\begin{bmatrix} 0\\ 0\\ -1\\ 1 \end{bmatrix} \]</li>
        <li><span class="step-t">ฐานหลักและมิติ</span> สองเวกเตอร์ทิศทางจากตัวแปรเสรีสองตัวคือฐานหลัก (จำนวนเวกเตอร์ = จำนวนตัวแปรเสรี = จำนวนหลักที่ไม่มีตัวนำ):
        \[ \mathcal{B} = \left\{ \begin{bmatrix} -1\\ 1\\ 0\\ 0 \end{bmatrix}, \begin{bmatrix} 0\\ 0\\ -1\\ 1 \end{bmatrix} \right\} \;\text{เป็นฐานหลักหนึ่งสำหรับ } H \;\Longrightarrow\; \dim H = 2 \]
        และตรวจ: \(\operatorname{rank} A = 2\), \(\operatorname{nullity} A = 2\), ผลรวม \(= 4 = n\) ✓ สรุป: \(H\) เป็นปริภูมิย่อย (รูป \(\operatorname{Nul} A\)), ฐานหลัก \(\{(-1, 1, 0, 0), (0, 0, -1, 1)\}\), \(\dim H = 2\)</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 6</span><span class="tag hard">ยาก</span><span class="ex-title">ใช้ทฤษฎีบทแรงก์ตอบเร็ว</span></div>
    <div class="ex-body">
      <div class="ex-q">กำหนดให้ \(A\) เป็น \(5 \times 8\) เมทริกซ์ซึ่ง \(\operatorname{rank} A = 3\) จงหา \(\operatorname{nullity} A\) และตอบคำถามต่อไปนี้
      พร้อมเหตุผล<br>
      (ก) จำนวนตัวแปรเสรีของระบบ \(A\vec{x} = \vec{0}\) เป็นเท่าใด<br>
      (ข) มี \(\vec{b} \in \mathbb{R}^5\) ที่ทำให้ \(A\vec{x} = \vec{b}\) ไม่มีผลเฉลยหรือไม่<br>
      (ข้อ 3) ถ้า \(T(\vec{x}) = A\vec{x}\) แล้ว \(T\) 1-1 หรือทั่วถึงหรือไม่</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — ใช้ทฤษฎีบทแรงก์ + ความสัมพันธ์ระหว่างแรงก์กับตัวนำ กลยุทธ์ของข้อนี้: โจทย์ไม่ให้ตัวเลขในเมทริกซ์เลย ให้คิดด้วย "ตัวเลขสถานะ" 3 ตัวเท่านั้น — จำนวนหลัก \(n = 8\), จำนวนแถว \(m = 5\), แรงก์ = 3 จากนั้นทุกคำถามตอบได้ด้วยสูตร \(\operatorname{nullity} = n - \operatorname{rank}\) กับเกณฑ์ "แรงก์ครบแถว = ทั่วถึง / แรงก์ครบหลัก = 1-1"</div>
      <ol class="steps">
        <li><span class="step-t">หา nullity</span> โดยทฤษฎีบท 2.2.5: \(\operatorname{nullity} A = n - \operatorname{rank} A = 8 - 3 = 5\) — อธิบายที่มาของสูตร: ทฤษฎีบทบอกว่า \(\operatorname{rank} A + \operatorname{nullity} A = n\) โดย \(n\) = จำนวนหลัก ที่นี่ \(A\) เป็น \(5 \times 8\) จึงมี \(n = 8\) หลัก แทนแรงก์ที่โจทย์ให้ (3) แล้วย้ายข้าง ได้ nullity = \(8 - 3 = 5\)</li>
        <li><span class="step-t">(ก) ตัวแปรเสรี</span> จำนวนตัวแปรเสรีของ \(A\vec{x} = \vec{0}\) = \(\operatorname{nullity} A = 5\) (หลักที่ไม่เป็นหลักตัวหลักมี \(8 - 3 = 5\) หลัก) — จำไว้: หลักที่มีตัวนำ "กำหนดทาง" ให้ตัวแปรได้ (ตัวแปรหลัก) หลักที่ไม่มีตัวนำ "โยกค่าได้อิสระ" (ตัวแปรเสรี) รวมกันเท่ากับจำนวนหลักทั้งหมดพอดี</li>
        <li><span class="step-t">(ข) มี \(\vec{b}\) ที่ไม่มีผลเฉลย — มี</span> \(\operatorname{rank} A = 3 < 5 =\) จำนวนแถว → \(A\) ไม่มีตำแหน่งตัวหลักในทุกแถว → หลักของ \(A\) ไม่แผ่ทั่ว \(\mathbb{R}^5\) → มีเวกเตอร์บางตัวที่ไม่อยู่ใน \(\operatorname{Col} A\) จึงทำให้ระบบไม่ต้องกัน — เพราะทั่วถึงต้องการให้ทุก \(\vec{b} \in \mathbb{R}^5\) อยู่ใน \(\operatorname{Col} A\) ซึ่งต้องมีตัวนำครบทั้ง 5 แถว แต่ตัวนำมีได้แค่ 3 ตัว (จากแรงก์ = 3) จึงมี \(\vec{b}\) หลุดรอดอย่างน้อยสองมิติแน่นอน</li>
        <li><span class="step-t">(ค) T ไม่ 1-1 และไม่ทั่วถึง</span> \(\operatorname{nullity} A = 5 > 0\) → \(T\vec{x} = \vec{0}\) มีผลเฉลยไม่ชัด → <em>ไม่ 1-1</em> (เพราะ 1-1 ต้องการให้ \(T\vec{x} = \vec{0}\) มีแต่ \(\vec{x} = \vec{0}\) ซึ่งเทียบเท่ากับ nullity = 0) และ \(\operatorname{rank} A = 3 < 5\) → <em>ไม่ทั่วถึง</em> \(\mathbb{R}^5\) (ค่ากลาง ๆ แบบนี้เป็นได้เพราะ \(5 \ne 8\)) สรุป: nullity = 5, (ก) ตัวแปรเสรี 5 ตัว, (ข) มี \(\vec{b}\) ที่ไม่มีผลเฉลย, (ค) \(T\) ไม่ 1-1 และไม่ทั่วถึง</li>
      </ol>
    </div>
  </article>
</section>

    <section class="block" id="textbook">
      <h2><span class="h2-dot">📚</span> ตัวอย่างจากตำรา (พีชคณิต.pdf)</h2>
      <p class="page-sub">โจทย์ทุกข้อคัดมาตรงจากตำราประกอบการสอน โดยเรียงจากง่ายไปยาก — ใต้โจทย์แต่ละข้อมี "อธิบายโจทย์ง่าย ๆ" ช่วยให้เห็นว่าโจทย์ถามอะไรก่อนลงมือทำ</p>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2.2.1 (ข้อ 1–2)</span><span class="tag book">จากตำรา</span><span class="tag easy">ง่าย</span><span class="ex-title">เซตที่ "เป็น" ปริภูมิย่อย</span></div>
        <div class="ex-body">
          <div class="ex-q">จากตัวอย่าง 2.2.1 ของตำรา: (1) \(\{\vec{0}_m\}\) และ \(\mathbb{R}^m\) เป็นปริภูมิย่อยของ \(\mathbb{R}^m\) &nbsp; (2) \(\{(x_1, x_2) \in \mathbb{R}^2 : x_1 = -x_2\}\) เป็นปริภูมิย่อยของ \(\mathbb{R}^2\) — จงอธิบายเหตุผล</div>
          <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — การตรวจว่า "เป็นปริภูมิย่อย" ต้องผ่าน 3 ประตู: มี \(\vec{0}\) · บวกกันแล้วไม่หลุดเซต · คูณสเกลาร์แล้วไม่หลุดเซต — สองเซตแรกเป็น "ปลายสุด" ของสเปกตรัม ส่วนเซตเส้นตรงผ่านจุดกำเนิดอย่าง \(x_1 = -x_2\) ตรวจทีละประตูได้ไม่ยาก</div>
          <ol class="steps">
            <li><span class="step-t">เซต \(\{\vec{0}_m\}\)</span> มี \(\vec{0} \in \{\vec{0}\}\) อยู่แล้ว · \(\vec{0} + \vec{0} = \vec{0}\) ยังอยู่ในเซต · \(c\vec{0} = \vec{0}\) ก็อยู่ในเซตทุก \(c\) — ผ่านครบ 3 เงื่อนไข → เป็นปริภูมิย่อย (เป็นปริภูมิย่อยที่ "เล็กที่สุด" มีมิติ 0)</li>
            <li><span class="step-t">เซต \(\mathbb{R}^m\) ทั้งปริภูมิ</span> บวก/คูณสเกลาร์เวกเตอร์ใน \(\mathbb{R}^m\) ได้ผลยังอยู่ใน \(\mathbb{R}^m\) เสมอ (ปิดตามนิยามของการดำเนินการ) → เป็นปริภูมิย่อยที่ "ใหญ่ที่สุด"</li>
            <li><span class="step-t">เซต \(\{(x_1, x_2) : x_1 = -x_2\}\) (เส้น \(y = -x\))</span> ตรวจทีละประตู: (1) \((0, 0)\) มี \(0 = -0\) ✓ อยู่ในเซต · (2) ให้ \(\vec{u} = (a, -a)\), \(\vec{v} = (b, -b)\) แล้ว \(\vec{u} + \vec{v} = (a + b,\; -(a+b))\) ซึ่งช่องแรก = ลบของช่องที่สอง ✓ ยังอยู่ในเซต · (3) \(c\vec{u} = (ca, -ca)\) ✓ — ผ่านครบ → เป็นปริภูมิย่อย (ตำราจะยกไปคิดละเอียดอีกครั้งในตัวอย่าง 2.2.3)</li>
          </ol>
          <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(\{\vec{0}_m\}\), \(\mathbb{R}^m\) และเซต \(\{(x_1, x_2) : x_1 = -x_2\}\) เป็นปริภูมิย่อยทั้งหมด — หัวใจคือผ่าน 3 เงื่อนไขครบ (มีศูนย์ + ปิดภายใต้การบวก + ปิดภายใต้การคูณสเกลาร์)</div>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2.2.1 (ข้อ 3–4)</span><span class="tag book">จากตำรา</span><span class="tag easy">ง่าย</span><span class="ex-title">เซตที่ "ไม่เป็น" ปริภูมิย่อย — จับที่จุดเดียวจบ</span></div>
        <div class="ex-body">
          <div class="ex-q">จากตัวอย่าง 2.2.1 ของตำรา: (3) \(\{(x_1, x_2) \in \mathbb{R}^2 : x_1^2 = x_2 + 3\}\) ไม่เป็นปริภูมิย่อยของ \(\mathbb{R}^2\) &nbsp; (4) \(H = \{(x_1, x_2, x_3) \in \mathbb{R}^3 : \sin(x_1 + x_2 + x_3) = 0\}\) ไม่เป็นปริภูมิย่อยของ \(\mathbb{R}^3\) — จงแสดงเหตุผล</div>
          <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — การ<em>ปฏิเสธ</em>ทำง่ายกว่าการยอมรับมาก: ตัวเงื่อนไขแรก ("มี \(\vec{0}\)") แค่แทน \(\vec{0}\) เข้าไปดูว่าอยู่ในเซตไหม — ถ้าไม่อยู่จบเลย ไม่ต้องไล่ตรวจสองเงื่อนไขที่เหลือ ถ้า \(\vec{0}\) อยู่ ก็ลองหาเวกเตอร์คู่หนึ่งที่บวกกันแล้วหลุดเซต</div>
          <ol class="steps">
            <li><span class="step-t">ข้อ (3): แทนจุดกำเนิด</span> \((0, 0)\): ฝั่งซ้าย \(0^2 = 0\) ฝั่งขวา \(0 + 3 = 3\) — \(0 \neq 3\) แสดงว่า \((0, 0)\) <em>ไม่อยู่</em>ในเซต → เงื่อนไขแรกพังทันที จึงไม่เป็นปริภูมิย่อย (เชิงเรขาคณิต: เป็นพาราโบลาที่ไม่ผ่านจุดกำเนิด — ถูกเลื่อนขึ้น 3 หน่วย)</li>
            <li><span class="step-t">ข้อ (4): เซตนี้มี \(\vec{0}\) นะ ต้องขยับไปตรวจปิดการบวก/สเกลาร์</span> เลือก \(\vec{v} = (\pi, 0, \pi)\): เพราะ \(\sin(\pi + 0 + \pi) = \sin 2\pi = 0\) ✓ จึง \(\vec{v} \in H\) แต่ลองคูณ \(c = \tfrac{1}{6}\): \(\tfrac{1}{6}\vec{v} = \left(\tfrac{\pi}{6}, 0, \tfrac{\pi}{6}\right)\) แล้วแทนเข้าเงื่อนไขได้ \(\sin\!\left(\tfrac{\pi}{6} + 0 + \tfrac{\pi}{6}\right) = \sin\tfrac{\pi}{3} = \tfrac{\sqrt{3}}{2} \neq 0\) → \(\tfrac{1}{6}\vec{v} \notin H\) — เงื่อนไขปิดภายใต้การคูณสเกลาร์พัง จึงไม่เป็นปริภูมิย่อย</li>
          </ol>
          <div class="verify"><span class="lbl">สรุปคำตอบ:</span> ข้อ (3) ไม่เป็น เพราะ \((0, 0)\) ไม่อยู่ในเซต · ข้อ (4) ไม่เป็น เพราะ \((\pi, 0, \pi) \in H\) แต่ \(\tfrac{1}{6}(\pi, 0, \pi) \notin H\) — ตรงตามตำราทุกตัวอักษร</div>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2.2.3</span><span class="tag book">จากตำรา</span><span class="tag easy">ง่าย</span><span class="ex-title">เซต \(x_1 = -x_2\) คือ \(\operatorname{Nul} A\) ของเมทริกซ์ \(1 \times 2\)</span></div>
        <div class="ex-body">
          <div class="ex-q">จงแสดงว่าเซต \(H = \left\{ \begin{bmatrix} x_1\\ x_2 \end{bmatrix} \in \mathbb{R}^2 : x_1 = -x_2 \right\}\) เป็นปริภูมิย่อยของ \(\mathbb{R}^2\) โดยเขียนในรูป \(\operatorname{Nul} A\)</div>
          <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — ท่าที่ตำราชอบใช้: แทนที่จะตรวจ 3 เงื่อนไขเอง ให้แปลงเซตเป็น \(\operatorname{Nul} A\) ของเมทริกซ์สักตัวก่อน แล้วดึงทฤษฎีบท 2.2.3 ("ปริภูมิสู่ศูนย์เป็นปริภูมิย่อยเสมอ") มาสรุปแทน — เงื่อนไข \(x_1 = -x_2\) ย้ายข้างได้เป็นสมการเอกพันธุ์ \(x_1 + x_2 = 0\)</div>
          <ol class="steps">
            <li><span class="step-t">แปลงเงื่อนไขเป็นสมการเมทริกซ์</span> \(x_1 = -x_2\) ⟺ \(x_1 + x_2 = 0\) ⟺ \(\begin{bmatrix} 1 & 1 \end{bmatrix}\begin{bmatrix} x_1\\ x_2 \end{bmatrix} = 0\) — เมทริกซ์แถวเดียว \(A = \begin{bmatrix} 1 & 1 \end{bmatrix}\) ทำหน้าที่ "เก็บ" เงื่อนไขไว้ในตัวเดียว</li>
            <li><span class="step-t">อ่านชื่อเซต</span> ดังนั้น \(H = \{\vec{x} : A\vec{x} = \vec{0}\} = \operatorname{Nul}\begin{bmatrix} 1 & 1 \end{bmatrix}\) — และโดยทฤษฎีบท 2.2.3 ปริภูมิสู่ศูนย์ของเมทริกซ์ใด ๆ เป็นปริภูมิย่อยเสมอ จึงสรุปได้ทันทีโดยไม่ต้องตรวจ 3 เงื่อนไขมือเปล่าอีกครั้ง</li>
          </ol>
          <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(H = \operatorname{Nul}\begin{bmatrix} 1 & 1 \end{bmatrix}\) จึงเป็นปริภูมิย่อยของ \(\mathbb{R}^2\) — ท่า "แปลงเซตเป็น Col/Nul แล้วดึงทฤษฎีบท" ใช้ได้กับทุกเซตที่เงื่อนไขเป็นสมการเชิงเส้นเท่ากับศูนย์</div>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2.2.5</span><span class="tag book">จากตำรา</span><span class="tag easy">ง่าย</span><span class="ex-title">ฐานหลักมาตรฐานของ \(\mathbb{R}^m\)</span></div>
        <div class="ex-body">
          <div class="ex-q">สำหรับแต่ละ \(j = 1, 2, \dots, m\) ให้ \(\vec{e}_j\) เป็นเวกเตอร์ที่ได้จากหลักที่ \(j\) ของเมทริกซ์เอกลักษณ์ \(I_m\) จงแสดงว่า \(\{\vec{e}_1, \vec{e}_2, \dots, \vec{e}_m\}\) เป็นฐานหลักหนึ่งสำหรับ \(\mathbb{R}^m\) (ฐานหลักมาตรฐาน)</div>
          <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — "ฐานหลัก" ต้องผ่านสองข้อ: อิสระเชิงเส้น + แผ่ทั่ว — ข้อสอบว่าอิสระ: รวมเชิงเส้นเป็นศูนย์ได้เมื่อน้ำหนักเป็นศูนย์ทั้งหมดไหม ข้อสอบว่าแผ่ทั่ว: เวกเตอร์อะไรก็เขียนเป็นรวมเชิงเส้นของพวกมันได้ไหม — เวกเตอร์ฐานมาตรฐานผ่านทั้งคู่แบบไม่ต้องลดรูปเลย</div>
          <ol class="steps">
            <li><span class="step-t">แผ่ทั่ว</span> เวกเตอร์ใด ๆ \(\vec{x} = \begin{bmatrix} x_1\\ \vdots\\ x_m \end{bmatrix} \in \mathbb{R}^m\) เขียนได้เป็น \(\vec{x} = x_1\vec{e}_1 + x_2\vec{e}_2 + \cdots + x_m\vec{e}_m\) — อ่านน้ำหนักตรงจากช่องของ \(\vec{x}\) จึงแผ่ทั่ว \(\mathbb{R}^m\) ✓</li>
            <li><span class="step-t">อิสระเชิงเส้น</span> ถ้า \(c_1\vec{e}_1 + \cdots + c_m\vec{e}_m = \vec{0}\) ฝั่งซ้ายรวมได้ \(\begin{bmatrix} c_1\\ \vdots\\ c_m \end{bmatrix} = \vec{0}\) บังคับให้ \(c_1 = \cdots = c_m = 0\) ✓ (อีกมุม: ลดรูป \(I_m\) แล้วมีตัวนำครบทุกหลัก → อิสระ ตามทฤษฎีบท 1.3.4 และบทแทรก 1.4.3 ที่ตำราอ้าง)</li>
          </ol>
          <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(\{\vec{e}_1, \dots, \vec{e}_m\}\) อิสระเชิงเส้นและแผ่ทั่ว \(\mathbb{R}^m\) จึงเป็นฐานหลักหนึ่งสำหรับ \(\mathbb{R}^m\) เรียกว่า<strong>ฐานหลักมาตรฐาน</strong> — และเพราะมีสมาชิก \(m\) ตัว จึงได้ \(\dim \mathbb{R}^m = m\) (ตัวอย่าง 2.2.8 ของตำรา)</div>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2.2.2</span><span class="tag book">จากตำรา</span><span class="tag easy">ง่าย</span><span class="ex-title">ตรวจว่า \(\vec{b} \in \operatorname{Col} A\) หรือไม่</span></div>
        <div class="ex-body">
          <div class="ex-q">ให้ \(A = \begin{bmatrix} 1 & -3 & -2\\ 0 & 1 & -1\\ -2 & 3 & 7 \end{bmatrix}\) และ \(\vec{b} = \begin{bmatrix} -5\\ 4\\ -2 \end{bmatrix}\) จงพิจารณาว่า \(\vec{b} \in \operatorname{Col} A\) หรือไม่ เพราะเหตุใด</div>
          <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — "อยู่ในปริภูมิหลัก" แปลว่า "ผสมจากหลักของ \(A\) ได้" ซึ่งก็คือมี \(\vec{x}\) ที่ \(A\vec{x} = \vec{b}\) — ดังนั้นโจทย์นี้คือโจทย์แก้ระบบเชิงเส้นที่แต่งตัวมาใหม่เท่านั้น: ลดรูปเมทริกซ์แต่งเติมแล้วดูว่ามีแถวขัดแย้งไหม</div>
          <ol class="steps">
            <li><span class="step-t">ลดรูป \([A \mid \vec{b}]\)</span> \(R_3 + 2R_1\) ทีละช่อง: \(-2 + 2(1) = 0\), \(3 + 2(-3) = -3\), \(7 + 2(-2) = 3\), \(-2 + 2(-5) = -12\) จากนั้น \(R_3 + 3R_2\): \(-3 + 3(1) = 0\), \(3 + 3(-1) = 0\), \(-12 + 3(4) = 0\)
            \[ \left[\begin{array}{ccc|c} 1 & -3 & -2 & -5\\ 0 & 1 & -1 & 4\\ -2 & 3 & 7 & -2 \end{array}\right] \sim \left[\begin{array}{ccc|c} 1 & -3 & -2 & -5\\ 0 & 1 & -1 & 4\\ 0 & -3 & 3 & -12 \end{array}\right] \sim \left[\begin{array}{ccc|c} 1 & -3 & -2 & -5\\ 0 & 1 & -1 & 4\\ 0 & 0 & 0 & 0 \end{array}\right] \]</li>
            <li><span class="step-t">อ่านผล</span> แถวล้าเป็น \(0 = 0\) (ไม่มีแถวขัดแย้งแบบ \(0 = b \neq 0\)) ระบบจึงมีผลเฉลย (มีตัวแปรเสรี 1 ตัว ผลเฉลยอนันต์ชุด) — โดยทฤษฎีบท 1.2.2 ระบบมีผลเฉลย ทำให้ \(\vec{b} \in \operatorname{Col} A\) — ลองหาชุดหนึ่ง: ให้ \(x_3 = 0\) ได้ \(\vec{x} = (7, 4, 0)\) แล้วตรวจ \(A\vec{x} = (7 - 12,\; 4,\; -14 + 12) = (-5, 4, -2) = \vec{b}\) ✓ ผสมจริง</li>
          </ol>
          <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(\vec{b} \in \operatorname{Col} A\) เพราะระบบ \(A\vec{x} = \vec{b}\) ต้องกัน (ลดรูปแล้วไม่มีแถวขัดแย้ง) — ตรงตามตำรา</div>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2.2.4 – 2.2.6</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">\(\operatorname{Nul} A = \operatorname{Span}\{\vec{v}\}\) และ \(\vec{v}\) ตัวเดียวก็เป็นฐานหลัก</span></div>
        <div class="ex-body">
          <div class="ex-q">พิจารณาเมทริกซ์ \(A = \begin{bmatrix} 1 & -3 & -2\\ 0 & 1 & -1\\ -2 & 3 & 7 \end{bmatrix}\) จากตัวอย่าง 2.2.4 ของตำรา ได้ว่า \(\operatorname{Nul} A = \operatorname{Span}\left\{ \begin{bmatrix} 5\\ 1\\ 1 \end{bmatrix} \right\}\) จงแสดงว่าเซต \(B = \left\{ \begin{bmatrix} 5\\ 1\\ 1 \end{bmatrix} \right\}\) เป็นฐานหลักหนึ่งสำหรับ \(\operatorname{Nul} A\) (ตัวอย่าง 2.2.6)</div>
          <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — โจทย์ขอสองอย่างต่อเนื่อง: (1) เห็นว่า \(\operatorname{Nul} A\) เขียนเป็น Span ของเวกเตอร์ตัวเดียวได้อย่างไร (2) เซตที่มีสมาชิกตัวเดียวจะเป็นฐานหลักได้ก็ต่อเมื่อตัวนั้นไม่ใช่เวกเตอร์ศูนย์ — เพราะเซตตัวเดียว "อิสระ" อยู่แล้วถ้าตัวนั้นไม่ใช่ศูนย์</div>
          <ol class="steps">
            <li><span class="step-t">หา \(\operatorname{Nul} A\) ด้วยการลดรูป \(A\vec{x} = \vec{0}\)</span> ลดรูป \(A\) ได้รูปแบบขั้นบันไดลดรูป \(\begin{bmatrix} 1 & 0 & -5\\ 0 & 1 & -1\\ 0 & 0 & 0 \end{bmatrix}\) (ใช้ข้อมูลจากตัวอย่าง 1.4.1 ที่ตำราอ้าง) → \(x_1 - 5x_3 = 0\), \(x_2 - x_3 = 0\) ให้ \(x_3 = t\) ได้ \(\vec{x} = \begin{bmatrix} 5t\\ t\\ t \end{bmatrix} = t\begin{bmatrix} 5\\ 1\\ 1 \end{bmatrix}\) ดังนั้น \(\operatorname{Nul} A = \operatorname{Span}\left\{ \begin{bmatrix} 5\\ 1\\ 1 \end{bmatrix} \right\}\)</li>
            <li><span class="step-t">ตรวจว่า \(\vec{v} = (5, 1, 1)\) อยู่จริงใน \(\operatorname{Nul} A\)</span> \(A\vec{v} = \begin{bmatrix} 5 - 3 - 2\\ 1 - 1\\ -10 + 3 + 7 \end{bmatrix} = \begin{bmatrix} 0\\ 0\\ 0 \end{bmatrix}\) ✓ — ทุกช่องล้าเป็นศูนย์พอดี</li>
            <li><span class="step-t">เซตตัวเดียวเป็นฐานหลักได้ไหม</span> ต้อง (1) อยู่ใน \(\operatorname{Nul} A\) ✓ จากขั้นที่แล้ว (2) อิสระเชิงเส้น: เซต \(\{\vec{v}\}\) ที่ \(\vec{v} \neq \vec{0}\) อิสระเสมอ เพราะ \(c\vec{v} = \vec{0}\) กับ \(\vec{v} \neq \vec{0}\) บังคับ \(c = 0\) (3) แผ่ทั่ว ✓ ตามนิยามของ Span — ครบสามข้อ จึงเป็นฐานหลัก</li>
          </ol>
          <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(B = \left\{ \begin{bmatrix} 5\\ 1\\ 1 \end{bmatrix} \right\}\) เป็นฐานหลักหนึ่งสำหรับ \(\operatorname{Nul} A\) และ \(\dim(\operatorname{Nul} A) = 1\) — ตรงตามตำรา</div>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2.2.7</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">ฐานหลักของ \(\operatorname{Col} A\) = หลักตัวหลักของ \(A\) (ไม่ใช่ของ REF!)</span></div>
        <div class="ex-body">
          <div class="ex-q">จงหาฐานหลักสำหรับ \(\operatorname{Col} A\) เมื่อ \(A = \begin{bmatrix} 1 & -3 & -2\\ 0 & 1 & -1\\ -2 & 3 & 7 \end{bmatrix}\)</div>
          <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — ทฤษฎีบท 2.2.4 ของตำราให้สูตรสำเร็จ: "หลักตัวหลัก<em>ของเมทริกซ์ A ต้นฉบับ</em>" เป็นฐานหลักของ Col A — กับดักคือคนมักหยิบหลักจากรูปแบบขั้นบันไดมาใช้ผิด เพราะการลดรูปเปลี่ยนค่าหลักไปแล้ว ต้องกลับไปชี้หลักตำแหน่งเดิมใน \(A\)</div>
          <ol class="steps">
            <li><span class="step-t">ลดรูป \(A\) เพื่อหาหลักตัวหลัก</span> \(R_3 + 2R_1\) ได้ \(\begin{bmatrix} 0 & -3 & 3 \end{bmatrix}\) แล้ว \(R_3 + 3R_2\) ได้แถวล้า \(\begin{bmatrix} 0 & 0 & 0 \end{bmatrix}\)
            \[ A = \begin{bmatrix} 1 & -3 & -2\\ 0 & 1 & -1\\ -2 & 3 & 7 \end{bmatrix} \sim \begin{bmatrix} 1 & -3 & -2\\ 0 & 1 & -1\\ 0 & 0 & 0 \end{bmatrix} \]</li>
            <li><span class="step-t">ระบุหลักตัวหลัก</span> ตัวนำอยู่ที่<em>หลักที่ 1 และ 2</em> (หลักที่ 3 ไม่มีตัวนำ) — ดังนั้นเซตของหลักที่ 1 และ 2 <em>ของ A ต้นฉบับ</em>คือฐานหลักหนึ่งสำหรับ Col A</li>
            <li><span class="step-t">กลับไปหยิบหลักจาก \(A\) ต้นฉบับ</span> หลักที่ 1 ของ \(A\) คือ \(\begin{bmatrix} 1\\ 0\\ -2 \end{bmatrix}\) หลักที่ 2 คือ \(\begin{bmatrix} -3\\ 1\\ 3 \end{bmatrix}\) (ระวัง: ไม่ใช่ \(\begin{bmatrix} 1\\ 0\\ 0 \end{bmatrix}, \begin{bmatrix} -3\\ 1\\ 0 \end{bmatrix}\) จาก REF เพราะนั่นคือหลัก "หลังลดรูป" ไม่ใช่ของเดิม)</li>
          </ol>
          <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(\left\{ \begin{bmatrix} 1\\ 0\\ -2 \end{bmatrix}, \begin{bmatrix} -3\\ 1\\ 3 \end{bmatrix} \right\}\) เป็นฐานหลักหนึ่งสำหรับ \(\operatorname{Col} A\) ตรงตามตำรา — สังเกตว่า \(\operatorname{Col} A\) มีมิติ 2 ซึ่งเป็นแรงก์ของ \(A\) พอดี</div>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2.2.8 – 2.2.9 – 2.2.13</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">มิติ · แรงก์ · ศูนยภาพ และทฤษฎีบทแรงก์</span></div>
        <div class="ex-body">
          <div class="ex-q"><strong>2.2.8:</strong> จงหา \(\dim \mathbb{R}^m\) &nbsp; <strong>2.2.9:</strong> ให้ \(A = \begin{bmatrix} 1 & -3 & -2\\ 0 & 1 & -1\\ -2 & 3 & 7 \end{bmatrix}\) จงหา \(\operatorname{rank} A\) และ \(\operatorname{nullity} A\) &nbsp; <strong>2.2.13:</strong> ให้ \(A\) เป็น \(10 \times 12\) เมทริกซ์ซึ่งมี \(\operatorname{nullity} A = 7\) จงหา \(\operatorname{rank} A\)</div>
          <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — สามข้อนี้ฝึก "การนับมิติ" ให้คล่อง: แรงก์ = จำนวนหลักตัวหลัก, ศูนยภาพ = จำนวนตัวแปรเสรี และทั้งคู่ต้องรวมกันได้ \(n\) = จำนวนหลักเสมอ (ทฤษฎีบทแรงก์) — ข้อ 2.2.13 ใช้ทฤษฎีบทนี้ "ย้อน" หาแรงก์จากศูนยภาพโดยไม่ต้องเห็นตัวเมทริกซ์เลย</div>
          <ol class="steps">
            <li><span class="step-t">2.2.8: มิติของ \(\mathbb{R}^m\)</span> จากตัวอย่าง 2.2.5 ฐานหลักมาตรฐาน \(\{\vec{e}_1, \dots, \vec{e}_m\}\) มีสมาชิก \(m\) ตัว ดังนั้น \(\dim \mathbb{R}^m = m\) — จำนวนสมาชิกของฐานหลัก (ฐานไหนก็เท่ากัน) คือมิติ</li>
            <li><span class="step-t">2.2.9: แรงก์และศูนยภาพของ \(A\)</span> จากตัวอย่าง 2.2.7 ได้ฐานหลักของ Col A มี 2 เวกเตอร์ → \(\operatorname{rank} A = \dim(\operatorname{Col} A) = 2\) และจากตัวอย่าง 2.2.6 ได้ฐานหลักของ Nul A มี 1 เวกเตอร์ → \(\operatorname{nullity} A = \dim(\operatorname{Nul} A) = 1\) — ตรวจทฤษฎีบทแรงก์: \(2 + 1 = 3 = n\) (จำนวนหลัก) ✓</li>
            <li><span class="step-t">2.2.13: ย้อนหาแรงก์จากศูนยภาพ</span> \(A\) มี \(n = 12\) หลัก โดยทฤษฎีบทแรงก์ (2.2.5): \(\operatorname{rank} A + \operatorname{nullity} A = 12\) แทน \(\operatorname{nullity} A = 7\) ได้ \(\operatorname{rank} A = 12 - 7 = 5\) — ทำได้ทันทีแม้ไม่เคยเห็นตัวเมทริกซ์ เพราะทฤษฎีบทคุมทุกเมทริกซ์</li>
          </ol>
          <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(\dim \mathbb{R}^m = m\) · \(\operatorname{rank} A = 2\), \(\operatorname{nullity} A = 1\) (รวมกันได้ 3 = จำนวนหลัก ✓) · เมทริกซ์ \(10 \times 12\) ที่ nullity = 7 มี \(\operatorname{rank} A = 5\) — ตรงตามตำราทุกข้อ</div>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2.2.10</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">เซตที่เขียนเป็น \(\operatorname{Col} A\) — หาฐานหลักและมิติ</span></div>
        <div class="ex-body">
          <div class="ex-q">จงแสดงว่าเซต
          \[ H = \{(x_1 + 2x_2,\; -x_2 + x_3,\; x_1 + x_2 + x_3) : x_1, x_2, x_3 \in \mathbb{R}\} \]
          เป็นปริภูมิย่อยของ \(\mathbb{R}^3\) พร้อมทั้งหาฐานหลักและมิติของ \(H\)</div>
          <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — สูตรแต่ละช่องเป็นพจน์เชิงเส้นของ \(x_1, x_2, x_3\) ล้วน → เขียน \(\vec{h}\) เป็น \(x_1(\text{เวกเตอร์}) + x_2(\text{เวกเตอร์}) + x_3(\text{เวกเตอร์})\) ได้ ซึ่งก็คือ Span = Col A → เป็นปริภูมิย่อยทันที แล้วจึงลดรูป \(A\) เพื่อหาฐานหลัก (หลักตัวหลัก) และนับมิติ</div>
          <ol class="steps">
            <li><span class="step-t">เขียนเป็นการรวมเชิงเส้น</span> เก็บสัมประสิทธิ์ของ \(x_1, x_2, x_3\) ทีละตัว:
            \[ H = \left\{ x_1\begin{bmatrix} 1\\ 0\\ 1 \end{bmatrix} + x_2\begin{bmatrix} 2\\ -1\\ 1 \end{bmatrix} + x_3\begin{bmatrix} 0\\ 1\\ 1 \end{bmatrix} : x_1, x_2, x_3 \in \mathbb{R} \right\} = \operatorname{Span}\left\{ \begin{bmatrix} 1\\ 0\\ 1 \end{bmatrix}, \begin{bmatrix} 2\\ -1\\ 1 \end{bmatrix}, \begin{bmatrix} 0\\ 1\\ 1 \end{bmatrix} \right\} = \operatorname{Col} A \]
            เมื่อ \(A = \begin{bmatrix} 1 & 2 & 0\\ 0 & -1 & 1\\ 1 & 1 & 1 \end{bmatrix}\) — เพราะ Span เป็นปริภูมิย่อยเสมอ (ทฤษฎีบท 2.2.1) \(H\) จึงเป็นปริภูมิย่อยของ \(\mathbb{R}^3\)</li>
            <li><span class="step-t">ลดรูป \(A\) เพื่อจับหลักตัวหลัก</span> \(R_3 - R_1\) ทีละช่อง: \(1 - 1 = 0\), \(1 - 2 = -1\), \(1 - 0 = 1\) แล้ว \(R_3 - R_2\): \(-1 - (-1) = 0\), \(1 - 1 = 0\)
            \[ A \sim \begin{bmatrix} 1 & 2 & 0\\ 0 & -1 & 1\\ 0 & 0 & 0 \end{bmatrix} \]</li>
            <li><span class="step-t">หลักตัวหลักคือหลักที่ 1 และ 2 → ฐานหลักและมิติ</span> หยิบหลักที่ 1, 2 จาก \(A\) ต้นฉบับ: \(\left\{ \begin{bmatrix} 1\\ 0\\ 1 \end{bmatrix}, \begin{bmatrix} 2\\ -1\\ 1 \end{bmatrix} \right\}\) เป็นฐานหลักหนึ่งสำหรับ \(H\) มี 2 สมาชิก ดังนั้น \(\dim H = 2\) — (หลักที่ 3 \(\begin{bmatrix} 0\\ 1\\ 1 \end{bmatrix}\) ไม่ได้เพิ่มทิศทางใหม่ เพราะเป็น \(2(\text{หลัก 1}) - (\text{หลัก 2}) = 2\begin{bmatrix} 1\\ 0\\ 1 \end{bmatrix} - \begin{bmatrix} 2\\ -1\\ 1 \end{bmatrix}\) พอดี)</li>
          </ol>
          <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(H = \operatorname{Col} A\) เป็นปริภูมิย่อยของ \(\mathbb{R}^3\) โดยมีฐานหลัก \(\left\{ \begin{bmatrix} 1\\ 0\\ 1 \end{bmatrix}, \begin{bmatrix} 2\\ -1\\ 1 \end{bmatrix} \right\}\) และ \(\dim H = 2\) — ตรงตามตำรา</div>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">แบบฝึกหัด 2.2 ข้อ 1 (ก, ข)</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">เซต 3 เวกเตอร์เป็นฐานหลักของ \(\mathbb{R}^3\) หรือไม่</span></div>
        <div class="ex-body">
          <div class="ex-q">จงพิจารณาว่าเซตต่อไปนี้เป็นฐานหลักสำหรับ \(\mathbb{R}^3\) หรือไม่ เพราะเหตุใด
          \[ \text{(ก)}\; \left\{ \begin{bmatrix} 0\\ 1\\ -2 \end{bmatrix}, \begin{bmatrix} 6\\ 3\\ 5 \end{bmatrix}, \begin{bmatrix} 5\\ -7\\ 4 \end{bmatrix} \right\} \qquad
          \text{(ข)}\; \left\{ \begin{bmatrix} 1\\ 1\\ -2 \end{bmatrix}, \begin{bmatrix} 7\\ 0\\ -5 \end{bmatrix}, \begin{bmatrix} -5\\ -1\\ 2 \end{bmatrix} \right\} \]</div>
          <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — ใน \(\mathbb{R}^3\) เซตมี 3 เวกเตอร์พอดี (จำนวนเท่ากับมิติ) จึงตัดสินด้วยตัวเดียว: เวกเตอร์ทั้งก้อน<em>อิสระเชิงเส้นหรือไม่</em> — เทคนิคเร็วคือจัดเป็นเมทริกซ์ \(3 \times 3\) แล้วคำนวณดีเทอร์มิแนนต์: ไม่เป็นศูนย์ = อิสระ = เป็นฐานหลัก</div>
          <ol class="steps">
            <li><span class="step-t">(ก) คำนวณดีเทอร์มิแนนต์ (กระจายตามหลักที่ 1)</span> \(\det = 0 \cdot M_{11} - 1 \cdot \det\begin{bmatrix} 6 & 5\\ 5 & 4 \end{bmatrix} + (-2) \cdot \det\begin{bmatrix} 6 & 5\\ 3 & -7 \end{bmatrix} = 0 - 1(24 - 25) - 2(-42 - 15)\) — คิดต่อ: \(-1(-1) = 1\) และ \(-2(-57) = 114\)
            \[ \det \begin{bmatrix} 0 & 6 & 5\\ 1 & 3 & -7\\ -2 & 5 & 4 \end{bmatrix} = 1 + 114 = 115 \neq 0 \]</li>
            <li><span class="step-t">(ก) สรุป</span> ดีเทอร์มิแนนต์ไม่เป็นศูนย์ → 3 เวกเตอร์อิสระเชิงเส้น → เป็นฐานหลักของ \(\mathbb{R}^3\) (อิสระ + จำนวนครบ 3 = แผ่ทั่วอัตโนมัติ)</li>
            <li><span class="step-t">(ข) คำนวณดีเทอร์มิแนนต์ (กระจายตามแถวที่ 1)</span> ต้องระวังเครื่องหมายเป็นพิเศษ: มิเนอร์ \(M_{11} = \det\begin{bmatrix} 0 & -1\\ -5 & 2 \end{bmatrix} = 0(2) - (-1)(-5) = 0 - 5 = -5\) · \(M_{12} = \det\begin{bmatrix} 1 & -1\\ -2 & 2 \end{bmatrix} = 2 - 2 = 0\) · \(M_{13} = \det\begin{bmatrix} 1 & 0\\ -2 & -5 \end{bmatrix} = -5 - 0 = -5\) แล้วรวมตามเครื่องหมายหมุนเวียน \(+, -, +\):
            \[ \det \begin{bmatrix} 1 & 7 & -5\\ 1 & 0 & -1\\ -2 & -5 & 2 \end{bmatrix} = 1(-5) - 7(0) + (-5)(-5) = -5 + 25 = 20 \neq 0 \]</li>
            <li><span class="step-t">(ข) สรุป</span> ดีเทอร์มิแนนต์ \(20 \neq 0\) → อิสระเชิงเส้น → เป็นฐานหลักของ \(\mathbb{R}^3\) เช่นกัน</li>
          </ol>
          <div class="verify"><span class="lbl">สรุปคำตอบ:</span> (ก) เป็นฐานหลัก (\(\det = 115 \neq 0\)) · (ข) เป็นฐานหลัก (\(\det = 20 \neq 0\)) — ตรงกับคำตอบท้ายบทของตำรา</div>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">แบบฝึกหัด 2.2 ข้อ 3 (ข, ค)</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">เซตเงื่อนไขเชิงเส้น vs เงื่อนไขกำลังสอง</span></div>
        <div class="ex-body">
          <div class="ex-q">จงพิจารณาว่าเซต \(H\) ที่กำหนดให้ต่อไปนี้ เป็นปริภูมิย่อยของ \(\mathbb{R}^3\) หรือไม่ ถ้าเป็นจงหาฐานหลักและมิติของ \(H\)<br>
          (ข) \(H = \{(x_1, x_2, x_3) \in \mathbb{R}^3 : x_1 - 2x_2 + x_3 = 0\}\) &nbsp;&nbsp;
          (ค) \(H = \{(x_1, x_2, x_3) \in \mathbb{R}^3 : x_1^2 + x_2^2 + x_3^2 = 1\}\)</div>
          <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — เทียบสองรูปแบบให้เห็นความต่าง: เงื่อนไขเชิงเส้น "= 0" เขียนเป็น \(\operatorname{Nul} A\) ได้เสมอ จึงเป็นปริภูมิย่อยเสมอ ส่วนเงื่อนไขกำลังสอง (ทรงกลมรัศมี 1) มักพังตั้งแต่ประตูแรกเพราะจุดกำเนิดไม่อยู่ในเซต</div>
          <ol class="steps">
            <li><span class="step-t">(ข) เขียนเป็น \(\operatorname{Nul} A\)</span> \(x_1 - 2x_2 + x_3 = 0\) ⟺ \(\begin{bmatrix} 1 & -2 & 1 \end{bmatrix}\begin{bmatrix} x_1\\ x_2\\ x_3 \end{bmatrix} = 0\) ดังนั้น \(H = \operatorname{Nul}\begin{bmatrix} 1 & -2 & 1 \end{bmatrix}\) → เป็นปริภูมิย่อยโดยทฤษฎีบท 2.2.3 (เชิงเรขาคณิต: เป็นระนาบผ่านจุดกำเนิด)</li>
            <li><span class="step-t">(ข) หาฐานหลัก</span> ให้ \(x_2 = s\), \(x_3 = t\) เป็นตัวแปรเสรี แล้ว \(x_1 = 2s - t\) ดังนั้น \(\vec{x} = \begin{bmatrix} 2s - t\\ s\\ t \end{bmatrix} = s\begin{bmatrix} 2\\ 1\\ 0 \end{bmatrix} + t\begin{bmatrix} -1\\ 0\\ 1 \end{bmatrix}\) → ฐานหลักคือ \(\left\{ \begin{bmatrix} 2\\ 1\\ 0 \end{bmatrix}, \begin{bmatrix} -1\\ 0\\ 1 \end{bmatrix} \right\}\) (ตรวจ: \(2 - 2(1) + 0 = 0\) ✓, \(-1 - 2(0) + 1 = 0\) ✓) และ \(\dim H = 2\)</li>
            <li><span class="step-t">(ค) แทนจุดกำเนิด</span> \((0, 0, 0)\): \(0^2 + 0^2 + 0^2 = 0 \neq 1\) → \(\vec{0} \notin H\) → พังเงื่อนไขแรกทันที จึง<em>ไม่เป็น</em>ปริภูมิย่อย (ทรงกลมหนา 1 หน่วยลอยอยู่รอบจุดกำเนิด ไม่ผ่านจุดกำเนิด — และแม้แต่การบวกสองจุดบนทรงกลมก็ยาวกว่า 1 เกินเสมอ)</li>
          </ol>
          <div class="verify"><span class="lbl">สรุปคำตอบ:</span> (ข) เป็นปริภูมิย่อย ฐานหลัก \(\left\{ \begin{bmatrix} 2\\ 1\\ 0 \end{bmatrix}, \begin{bmatrix} -1\\ 0\\ 1 \end{bmatrix} \right\}\), \(\dim H = 2\) · (ค) ไม่เป็นปริภูมิย่อย เพราะ \(\vec{0} \notin H\) — ตรงกับคำตอบท้ายบทของตำรา</div>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2.2.11</span><span class="tag book">จากตำรา</span><span class="tag hard">ยาก</span><span class="ex-title">เซตสองเงื่อนไข = \(\operatorname{Nul} A\) ใน \(\mathbb{R}^4\)</span></div>
        <div class="ex-body">
          <div class="ex-q">จงแสดงว่าเซต
          \[ H = \{(x_1, x_2, x_3, x_4) \in \mathbb{R}^4 : x_1 + x_2 = x_3 + x_4 \text{ และ } x_1 + x_2 + x_3 + x_4 = 0\} \]
          เป็นปริภูมิย่อยของ \(\mathbb{R}^4\) พร้อมทั้งหาฐานหลักและมิติของ \(H\)</div>
          <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — เซตนี้มีเงื่อนไข<em>สอง</em>ข้อพร้อมกัน ท่าของตำรา: จัดรูปทั้งคู่เป็น "…= 0" แล้วเขียนรวมเป็นระบบ \(A\vec{x} = \vec{0}\) เมทริกซ์ \(2 \times 4\) หนึ่งตัว → \(H = \operatorname{Nul} A\) → เป็นปริภูมิย่อยโดยอัตโนมัติ แล้วลดรูปหาฐานหลักจากตัวแปรเสรี 2 ตัว</div>
          <ol class="steps">
            <li><span class="step-t">จัดรูปเป็นระบบเอกพันธุ์</span> เงื่อนไขแรกย้ายข้าง: \(x_1 + x_2 - x_3 - x_4 = 0\) · เงื่อนไขที่สองอยู่แล้ว: \(x_1 + x_2 + x_3 + x_4 = 0\) → เขียนเป็น \(A\vec{x} = \vec{0}\) เมื่อ \(A = \begin{bmatrix} 1 & 1 & -1 & -1\\ 1 & 1 & 1 & 1 \end{bmatrix}\) ดังนั้น \(H = \operatorname{Nul} A\) เป็นปริภูมิย่อยของ \(\mathbb{R}^4\) โดยทฤษฎีบท 2.2.3</li>
            <li><span class="step-t">ลดรูปเป็นรูปแบบขั้นบันไดลดรูป</span> \(R_2 - R_1\) ทีละช่อง: \(1 - 1 = 0\), \(1 - 1 = 0\), \(1 - (-1) = 2\), \(1 - (-1) = 2\) แล้ว \(\tfrac{1}{2}R_2\) และ \(R_1 + R_2\) เคาะเหนือตัวนำ
            \[ A \sim \begin{bmatrix} 1 & 1 & -1 & -1\\ 0 & 0 & 2 & 2 \end{bmatrix} \sim \begin{bmatrix} 1 & 1 & 0 & 0\\ 0 & 0 & 1 & 1 \end{bmatrix} \]</li>
            <li><span class="step-t">อ่านสมการและแยกตัวแปรเสรี</span> จาก RREF: \(x_1 + x_2 = 0\) และ \(x_3 + x_4 = 0\) นั่นคือ \(x_1 = -x_2\), \(x_3 = -x_4\) — ตัวแปรเสรีคือ \(x_2, x_4\) เขียนผลเฉลยทั่วไป
            \[ \vec{x} = \begin{bmatrix} -x_2\\ x_2\\ -x_4\\ x_4 \end{bmatrix} = x_2\begin{bmatrix} -1\\ 1\\ 0\\ 0 \end{bmatrix} + x_4\begin{bmatrix} 0\\ 0\\ -1\\ 1 \end{bmatrix} \]</li>
            <li><span class="step-t">ฐานหลักและมิติ</span> \(\left\{ \begin{bmatrix} -1\\ 1\\ 0\\ 0 \end{bmatrix}, \begin{bmatrix} 0\\ 0\\ -1\\ 1 \end{bmatrix} \right\}\) เป็นฐานหลักหนึ่งสำหรับ \(H\) (อิสระชัดเจนเพราะรองรับตำแหน่งต่างกัน และแผ่ทั่ว Nul A ตามการแยกตัวแปรเสรี) มี 2 สมาชิก → \(\dim H = 2\) (ตรวจทฤษฎีบทแรงก์: \(\operatorname{rank} A = 2\), \(\operatorname{nullity} A = 2\), รวม \(= 4 = n\) ✓)</li>
          </ol>
          <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(H = \operatorname{Nul} A\) เป็นปริภูมิย่อยของ \(\mathbb{R}^4\) โดยมีฐานหลัก \(\left\{ \begin{bmatrix} -1\\ 1\\ 0\\ 0 \end{bmatrix}, \begin{bmatrix} 0\\ 0\\ -1\\ 1 \end{bmatrix} \right\}\) และ \(\dim H = 2\) — ตรงตามตำรา</div>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2.2.12</span><span class="tag book">จากตำรา</span><span class="tag hard">ยาก</span><span class="ex-title">ฐานหลักของ Col A และ Nul A ของเมทริกซ์ \(5 \times 4\)</span></div>
        <div class="ex-body">
          <div class="ex-q">จงหาฐานหลักสำหรับปริภูมิหลักและปริภูมิสู่ศูนย์ของเมทริกซ์
          \[ A = \begin{bmatrix} 1 & -1 & 0 & 3\\ 0 & 1 & -1 & 0\\ -2 & -3 & 0 & -1\\ 0 & -1 & 0 & 1\\ 0 & 1 & 0 & -1 \end{bmatrix} \]
          พร้อมทั้งหา \(\operatorname{rank} A\) และ \(\operatorname{nullity} A\)</div>
          <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — โจทย์รวมทุกท่าของหัวข้อนี้ไว้ในข้อเดียว: ลดรูปหาหลักตัวหลัก (เอามาเป็นฐาน Col A และนับเป็นแรงก์) ต่อด้วยลดรูปสุดขีดเป็น RREF เพื่ออ่านตัวแปรเสรี (เอามาเป็นฐาน Nul A และนับเป็นศูนยภาพ) และปิดด้วยทฤษฎีบทแรงก์ \(3 + 1 = 4\)</div>
          <ol class="steps">
            <li><span class="step-t">ลดรูปเป็นรูปแบบขั้นบันได</span> \(R_3 + 2R_1\) ได้ \(\begin{bmatrix} 0 & -5 & 0 & 5 \end{bmatrix}\) แล้ว \(R_3 + 5R_2\) ได้ \(\begin{bmatrix} 0 & 0 & -5 & 5 \end{bmatrix}\) · \(R_4 + R_2\) ได้ \(\begin{bmatrix} 0 & 0 & -1 & 1 \end{bmatrix}\) ซึ่งหารกับแถว \(R_3\) ล้าเป็นศูนย์ · \(R_5 - R_2 = \begin{bmatrix} 0 & 0 & 1 & -1 \end{bmatrix}\) ก็ล้ากับ \(R_3\) เช่นกัน
            \[ A \sim \begin{bmatrix} 1 & -1 & 0 & 3\\ 0 & 1 & -1 & 0\\ 0 & 0 & -5 & 5\\ 0 & 0 & 0 & 0\\ 0 & 0 & 0 & 0 \end{bmatrix} \]</li>
            <li><span class="step-t">ฐานหลักของ \(\operatorname{Col} A\) และแรงก์</span> ตัวนำอยู่หลักที่ 1, 2, 3 → หยิบหลักที่ 1, 2, 3 จาก \(A\) ต้นฉบับ: \(\left\{ \begin{bmatrix} 1\\ 0\\ -2\\ 0\\ 0 \end{bmatrix}, \begin{bmatrix} -1\\ 1\\ -3\\ -1\\ 1 \end{bmatrix}, \begin{bmatrix} 0\\ -1\\ 0\\ 0\\ 0 \end{bmatrix} \right\}\) เป็นฐานหลักสำหรับ Col A ดังนั้น <strong>\(\operatorname{rank} A = 3\)</strong> (หมายเหตุ: ตำราบางสำนวนพิมพ์ "rank A = 2" ซึ่งขัดกับหลักตัวหลัก 3 หลักที่ลดรูปได้เองข้างบน ที่ถูกต้องคือ 3 เพราะแรงก์นับจำนวนตัวนำ)</li>
            <li><span class="step-t">ลดรูปต่อเป็น RREF เพื่อหาฐานของ \(\operatorname{Nul} A\)</span> กวาดขึ้นและปรับมาตราจนได้ \(\begin{bmatrix} 1 & 0 & 0 & 2\\ 0 & 1 & 0 & -1\\ 0 & 0 & 1 & -1\\ 0 & 0 & 0 & 0\\ 0 & 0 & 0 & 0 \end{bmatrix}\) → \(x_1 = -2x_4\), \(x_2 = x_4\), \(x_3 = x_4\) ให้ \(x_4\) เป็นตัวแปรเสรี:
            \[ \vec{x} = x_4\begin{bmatrix} -2\\ 1\\ 1\\ 1 \end{bmatrix} \;\Longrightarrow\; \operatorname{Nul} A = \operatorname{Span}\left\{ \begin{bmatrix} -2\\ 1\\ 1\\ 1 \end{bmatrix} \right\} \]</li>
            <li><span class="step-t">ศูนยภาพและตรวจทฤษฎีบทแรงก์</span> ฐานหลักของ Nul A มี 1 เวกเตอร์ → <strong>\(\operatorname{nullity} A = 1\)</strong> และ \(\operatorname{rank} A + \operatorname{nullity} A = 3 + 1 = 4 = n\) ✓ (ตรวจเวกเตอร์ฐาน: \(A\begin{bmatrix} -2\\ 1\\ 1\\ 1 \end{bmatrix} = (-2 - 1 + 3,\; 1 - 1,\; 4 - 3 - 1,\; -1 + 1,\; 1 - 1) = (0, 0, 0, 0, 0)\) ✓)</li>
          </ol>
          <div class="verify"><span class="lbl">สรุปคำตอบ:</span> ฐานหลักของ Col A คือหลักตัวหลักที่ 1, 2, 3 ของ \(A\) (3 เวกเตอร์), ฐานหลักของ Nul A คือ \(\begin{bmatrix} -2\\ 1\\ 1\\ 1 \end{bmatrix}\), \(\operatorname{rank} A = 3\), \(\operatorname{nullity} A = 1\) — ตรงตามวิธีทำของตำรา (ที่ตัวเลขแรงก์ในตำราพิมพ์คลาดเคลื่อน ดูหมายเหตุในขั้นที่ 2)</div>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">แบบฝึกหัด 2.2 ข้อ 5</span><span class="tag book">จากตำรา</span><span class="tag hard">ยาก</span><span class="ex-title">จริงหรือเท็จ: เมทริกซ์ \(A\) ขนาด \(4 \times 6\)</span></div>
        <div class="ex-body">
          <div class="ex-q">ให้ \(A\) เป็น \(4 \times 6\) เมทริกซ์ จงพิจารณาว่าข้อความต่อไปนี้เป็นจริงหรือเท็จ โดยอธิบายเหตุผลหรือยกตัวอย่างประกอบ<br>
          (ก) \(\operatorname{Nul} A\) เป็นปริภูมิย่อยของ \(\mathbb{R}^6\) &nbsp;
          (ข) \(\operatorname{rank} A = 3\) ก็ต่อเมื่อ \(\operatorname{nullity} A = 3\) &nbsp;
          (ค) \(\operatorname{nullity} A \geq 2\) &nbsp;
          (ง) \(\operatorname{rank} A \geq 2\) &nbsp;
          (จ) ถ้า \(A\) มี 4 หลักตัวหลักแล้ว \(\operatorname{Col} A = \mathbb{R}^6\)</div>
          <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — โจทย์ให้ "โกดัง" เมทริกซ์ \(4 \times 6\) (4 แถว 6 หลัก) แล้วถามคุณสมบัติทีละข้อ อาวุธหลักมีสามชิ้น: (1) แรงก์ ≤ min(4, 6) = 4 เพราะตัวนำมีแค่ 4 แถวให้ยืน (2) ทฤษฎีบทแรงก์ rank + nullity = 6 (3) การปฏิเสธทำด้วยการยกตัวอย่างเมทริกซ์ศูนย์</div>
          <ol class="steps">
            <li><span class="step-t">(ก) จริง</span> โดยทฤษฎีบท 2.2.3 ปริภูมิสู่ศูนย์ของเมทริกซ์ใด ๆ เป็นปริภูมิย่อยเสมอ — และเพราะ \(A\) มี 6 หลัก \(\operatorname{Nul} A = \{\vec{x} \in \mathbb{R}^6 : A\vec{x} = \vec{0}\}\) จึงเป็นปริภูมิย่อยของ \(\mathbb{R}^6\) พอดี (ระวังหลง: ไม่ใช่ \(\mathbb{R}^4\) — ตัวแปรมี 6 ตัวเพราะหลักมี 6 หลัก)</li>
            <li><span class="step-t">(ข) จริง</span> ทฤษฎีบทแรงก์: \(\operatorname{rank} A + \operatorname{nullity} A = n = 6\) — ถ้า \(\operatorname{rank} A = 3\) แล้ว \(\operatorname{nullity} A = 6 - 3 = 3\) และย้อนกลับกันก็จริงเช่นกัน จึงเป็น "ก็ต่อเมื่อ" สองทาง</li>
            <li><span class="step-t">(ค) จริง</span> ตัวนำมีได้ไม่เกิน 4 ตำแหน่ง (มีแค่ 4 แถว) ดังนั้น \(\operatorname{rank} A \leq 4\) → \(\operatorname{nullity} A = 6 - \operatorname{rank} A \geq 6 - 4 = 2\) — เมทริกซ์ตัวไหนในโลกนี้ก็หนีไม่พ้น มีตัวแปรเสรีอย่างน้อย 2 ตัวเสมอ</li>
            <li><span class="step-t">(ง) เท็จ</span> ยกตัวอย่างต้าน: เมทริกซ์ศูนย์ \(4 \times 6\) (ทุกช่องเป็น 0) มีตัวนำ 0 ตำแหน่ง ดังนั้น \(\operatorname{rank} A = 0\) ซึ่งไม่ใช่ \(\geq 2\) — ข้อความ "ทุก \(A\) มีแรงก์อย่างน้อย 2" จึงล้ม</li>
            <li><span class="step-t">(จ) เท็จ</span> เวกเตอร์ทุกตัวใน \(\operatorname{Col} A\) คือการรวมเชิงเส้นของ<em>หลักของ \(A\)</em> ซึ่งแต่ละหลักมี 4 ช่อง (มาจาก \(\mathbb{R}^4\)) ดังนั้น \(\operatorname{Col} A \subseteq \mathbb{R}^4\) เสมอ จึงเท่ากับ \(\mathbb{R}^6\) ไม่ได้เด็ดขาด (จริง ๆ ถ้ามี 4 หลักตัวหลักแล้ว \(\operatorname{Col} A = \mathbb{R}^4\) ต่างหาก)</li>
          </ol>
          <div class="verify"><span class="lbl">สรุปคำตอบ:</span> (ก) จริง · (ข) จริง · (ค) จริง · (ง) เท็จ (เมทริกซ์ศูนย์ rank 0) · (จ) เท็จ (Col A ⊆ \(\mathbb{R}^4\) เท่านั้น) — ตรงกับคำตอบท้ายบทของตำรา จริง/จริง/จริง/เท็จ/เท็จ</div>
        </div>
      </article>
    </section>

    <section class="block" id="apply">
      <h2><span class="h2-dot">🌍</span> เอาไปใช้ทำอะไร — โจทย์ประยุกต์</h2>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">🎛️ มิกเซอร์เสียง: ผสมได้หรือไม่?</span><span class="tag app">ใช้จริง</span><span class="tag easy">ง่าย</span><span class="ex-title">\(\vec{b} \in \operatorname{Col} A\) ในห้องอัดเสียง</span></div>
        <div class="ex-body">
          <div class="ex-q">ห้องซ้อมดนตรีมีปุ่มมิกซ์ 2 ปุ่มต่อเข้าลำโพง 3 ตัว: ปุ่ม A เปิดเต็ม 1 หน่วยจะส่งเสียงไปลำโพงที่ 1 และ 3 พอดี ส่วนปุ่ม B จะส่งไปลำโพงที่ 2 และ 3 (เสียงของแต่ละปุ่มซ้อนกันได้ตามระดับที่หมุน) ให้ \(a, b\) คือระดับที่หมุนปุ่ม A, B แล้วระดับเสียงที่ลำโพงทั้งสามได้ยินคือ \(A\begin{bmatrix} a\\ b \end{bmatrix} = \begin{bmatrix} 1 & 0\\ 0 & 1\\ 1 & 1 \end{bmatrix}\begin{bmatrix} a\\ b \end{bmatrix}\) (ก) อยากได้ระดับเสียง \(\begin{bmatrix} 2\\ 3\\ 5 \end{bmatrix}\) ตั้ง \(a, b\) ว่าอะไรได้ไหม (ข) อยากได้ \(\begin{bmatrix} 1\\ 1\\ 1 \end{bmatrix}\) (เสียงดังเท่ากันทุกลำโพง) ตั้งได้ไหม</div>
          <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — คำถาม "ตั้งปุ่มให้ได้เสียงเป้าหมายได้ไหม" ก็คือคำถาม "\(\vec{b}\) อยู่ในปริภูมิหลักของ \(A\) หรือไม่" เป๊ะ ๆ — ถ้าอยู่ แก้ \(A\vec{x} = \vec{b}\) ได้ค่าปุ่ม ถ้าไม่อยู่ หมายความว่าระบบนี้<em>สร้างเสียงแบบนั้นไม่ได้เลย</em> ไม่ว่าจะหมุนปุ่มยังไง</div>
          <ol class="steps">
            <li><span class="step-t">(ก) ตั้งสมการแล้วแก้</span> ต้องการ \(A\begin{bmatrix} a\\ b \end{bmatrix} = \begin{bmatrix} 2\\ 3\\ 5 \end{bmatrix}\) อ่านจากสองแถวแรกได้เลย: \(a = 2\), \(b = 3\) แล้วเช็กแถวที่สาม: \(a + b = 2 + 3 = 5\) ✓ ตรงพอดี — ดังนั้น \(\begin{bmatrix} 2\\ 3\\ 5 \end{bmatrix} \in \operatorname{Col} A\) ตั้งปุ่ม A ที่ 2 และ B ที่ 3 จบ</li>
            <li><span class="step-t">(ข) ลองแก้ดู</span> แถวแรกบังคับ \(a = 1\) แถวที่สองบังคับ \(b = 1\) แต่แถวที่สามต้องการ \(a + b = 1\) ขณะที่ค่าที่ได้คือ \(1 + 1 = 2 \neq 1\) — ขัดแย้ง! ระบบไม่ต้องกัน แสดงว่า \(\begin{bmatrix} 1\\ 1\\ 1 \end{bmatrix} \notin \operatorname{Col} A\) (มุมมอง Span: เสียงที่เป็นไปได้ทั้งหมดคือ \(a(1,0,1) + b(0,1,1)\) ซึ่ง "ช่องที่ 3" ถูกล็อกให้เท่ากับ "ช่อง 1 + ช่อง 2" เสมอ หลุดกฎนี้ไม่ได้)</li>
            <li><span class="step-t">วิธีแก้เชิงวิศวกรรม</span> เพื่อให้เสียงดังเท่ากันทุกลำโพงได้ ต้อง<em>เพิ่มหลัก</em>ในเมทริกซ์ เช่น เพิ่มปุ่ม C ที่ส่งเข้าลำโพง 1 อย่างเดียว แล้ว Col A จะกว้างขึ้นคลุมเป้าหมายที่เคยพลาด — นี่คือการตัดสินใจ "ออกแบบฮาร์ดแวร์" ด้วยมโนทัศน์ปริภูมิหลักจริง ๆ</li>
          </ol>
          <div class="verify"><span class="lbl">เห็นไหมว่า...</span> "\(\vec{b} \in \operatorname{Col} A\) หรือไม่" ที่เราฝึกด้วยการลดรูปเมทริกซ์ ในโลกจริงคือคำถาม "อุปกรณ์ชุดนี้ผลิตผลลัพธ์ที่ต้องการได้จริงไหม" — ใช้ได้ทั้งกับมิกเซอร์เสียง การผสมสารเคมี การจัดพอร์ตลงทุน และระบบแนะนำ — ถ้าไม่อยู่ใน Col ก็รู้ทันทีว่าต้องเพิ่มช่องทาง ไม่ใช่นั่งหมุนปุ่มเดิมค้นต่อไป</div>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">⚖️ จุดสมดุลของระบบถังน้ำ 3 ใบ</span><span class="tag app">ใช้จริง</span><span class="tag mid">กลาง</span><span class="ex-title">\(\operatorname{Nul} A\), แรงก์ และศูนยภาพ = จำนวนอิสระของสมดุล</span></div>
        <div class="ex-body">
          <div class="ex-q">มีถังน้ำ 3 ใบต่อท่อวนกันเป็นวง ให้ \(x_1, x_2, x_3\) คือระดับน้ำ (หน่วยสัมพัทธ์) ในถังที่ 1, 2, 3 ระบบจะอยู่ตัว (สมดุล น้ำไม่ไหลเอง) เมื่อแรงดันระหว่างคู่ถังที่ต่อกันเท่ากันหมด ซึ่งเขียนเป็นระบบเอกพันธุ์
          \[ \begin{aligned} x_1 - x_2 &= 0\\ x_2 - x_3 &= 0\\ x_3 - x_1 &= 0 \end{aligned} \qquad \text{นั่นคือ } A\vec{x} = \vec{0} \text{ เมื่อ } A = \begin{bmatrix} 1 & -1 & 0\\ 0 & 1 & -1\\ -1 & 0 & 1 \end{bmatrix} \]
          จงหาจุดสมดุลทั้งหมด (\(\operatorname{Nul} A\)) พร้อมแรงก์และศูนยภาพของ \(A\) และอธิบายความหมาย</div>
          <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — "จุดสมดุลทั้งหมด" = เซตผลเฉลยของ \(A\vec{x} = \vec{0}\) = \(\operatorname{Nul} A\) เป๊ะ ๆ — และมิติของ Nul A (ศูนยภาพ) จะบอกเราว่าจุดสมดุลมี "อิสระ" กี่ทิศทาง: จุดเดียว เส้นเดียว หรือระนาบทั้งใบ</div>
          <ol class="steps">
            <li><span class="step-t">ลดรูป \(A\)</span> \(R_3 + R_1\) ได้ \(\begin{bmatrix} 0 & -1 & 1 \end{bmatrix}\) แล้ว \(R_3 + R_2\) ได้ \(\begin{bmatrix} 0 & 0 & 0 \end{bmatrix}\)
            \[ A \sim \begin{bmatrix} 1 & -1 & 0\\ 0 & 1 & -1\\ 0 & 0 & 0 \end{bmatrix} \]</li>
            <li><span class="step-t">แรงก์และศูนยภาพ</span> ตัวนำอยู่ 2 ตำแหน่ง (หลัก 1, 2) → \(\operatorname{rank} A = 2\) โดยทฤษฎีบทแรงก์ \(\operatorname{nullity} A = 3 - 2 = 1\) — จุดสมดุลจึงมีอิสระ<em>หนึ่งทิศทาง</em>พอดี (เส้นตรงเส้นเดียว)</li>
            <li><span class="step-t">หาจุดสมดุลจากตัวแปรเสรี</span> ให้ \(x_3 = t\): จากแถวสอง \(x_2 = x_3 = t\) และจากแถวแรก \(x_1 = x_2 = t\)
            \[ \operatorname{Nul} A = \operatorname{Span}\left\{ \begin{bmatrix} 1\\ 1\\ 1 \end{bmatrix} \right\} \quad (t \in \mathbb{R}) \]
            (ตรวจ: \(A\begin{bmatrix} 1\\ 1\\ 1 \end{bmatrix} = (1-1,\; 1-1,\; -1+1) = \vec{0}\) ✓)</li>
            <li><span class="step-t">อ่านความหมายทางกายภาพ</span> จุดสมดุลคือทุกสถานะที่ "ระดับน้ำทุกถังเท่ากัน" — เติมน้ำรวม 10 หน่วยหรือ 100 หน่วยก็ได้ ขอให้แบ่งเท่า ๆ กัน ระบบก็นิ่ง ศูนยภาพ = 1 บอกว่าอิสระนี้มีทิศทางเดียว (เลือก "ระดับรวม") ส่วนแรงก์ 2 คือจำนวนเงื่อนไขจริงที่ระบบบังคับ</li>
          </ol>
          <div class="verify"><span class="lbl">เห็นไหมว่า...</span> การหา "จุดสมดุลของระบบ" ทั้งหลาย — น้ำในถัง กระแสในวงจร อุณหภูมิในอาคาร จำนวนเงินหมุนวนระหว่างบัญชี — ล้วนแปลงเป็นการหา \(\operatorname{Nul} A\) แบบเดียวกันนี้ และศูนยภาพก็บอกทันทีว่าระบบสมดุลได้ "หลายแบบแค่ไหน" ซึ่งเป็นข้อมูลชี้ขาดในการออกแบบระบบควบคุมจริง</div>
        </div>
      </article>
    </section>

    <section class="block" id="recipe">
  <h2><span class="h2-dot">⚡</span> สูตรสำเร็จ — ท่าที่ใช้ทำโจทย์หัวข้อนี้</h2>
  <div class="recipe">
    <div class="recipe-head">🪜 ท่าหลัก: หาฐานหลัก/มิติของ Col A และ Nul A ในรอบเดียว</div>
    <div class="recipe-body">
      <ol>
        <li>ลดรูป \(A\) จนได้ <strong>REF</strong> (หรือ RREF ไปเลย) → ระบุ<strong>หลักตัวหลัก</strong></li>
        <li><strong>ฐานของ Col A:</strong> หยิบหลักตัวหลักจาก \(A\) <em>ตัวจริง</em> → \(\operatorname{rank} A =\) จำนวนหลักตัวหลัก</li>
        <li><strong>ฐานของ Nul A:</strong> จาก RREF เขียนผลเฉลยอิงตัวแปรเสริมของ \(A\vec{x} = \vec{0}\) → เวกเตอร์ทิศทางแต่ละตัวคือ 1 สมาชิกฐาน → \(\operatorname{nullity} A =\) จำนวนตัวแปรเสรี</li>
        <li>ตรวจด้วยทฤษฎีบทแรงก์: \(\operatorname{rank} A + \operatorname{nullity} A = n\) (จำนวนหลัก)</li>
      </ol>
    </div>
  </div>
  <div class="key-grid">
    <div class="key-card"><div class="k-title">ท่า: แสดง H เป็นปริภูมิย่อย (แบบพารามิเตอร์)</div>แยกตามพารามิเตอร์ → H = Span/Col → ใช้ทฤษฎีบท 2.2.1 → ลดรูปหาฐาน</div>
    <div class="key-card"><div class="k-title">ท่า: แสดง H เป็นปริภูมิย่อย (แบบสมการ)</div>ย้ายข้างให้เป็น \(A\vec{x} = \vec{0}\) → H = Nul A → ใช้ทฤษฎีบท 2.2.3 → แก้เพื่อหาฐาน</div>
    <div class="key-card"><div class="k-title">ท่า: ตรวจฐานหลักของ \(\mathbb{R}^m\)</div>ต้อง: มี \(m\) เวกเตอร์ + อิสระเชิงเส้น (ลดรูปดูว่าตัวนำครบทุกหลัก) → แผ่ทั่วตามอัตโนมัติ</div>
    <div class="key-card"><div class="k-title">ท่า: เชื่อมโยงกับบทเรียนก่อน</div>rank = จำนวนตัวนำ / nullity = ตัวแปรเสรีของ \(A\vec{x}=0\) / rank = m ⇔ ทั่วถึง / nullity = 0 ⇔ 1-1</div>
  </div>
</section>

<section class="block" id="practice">
  <h2><span class="h2-dot">🏋️</span> โจทย์ซ้อมมือ (6 ข้อ)</h2>
  <p class="small">ลองทำเองก่อน แล้วค่อยกดเปิดคำใบ้ → เฉลยทีละขั้น เมื่อทำได้แล้วติ๊ก ✓ เพื่อบันทึกความคืบหน้า</p>

  <article class="pr-card" data-pkey="p2-2-1">
    <div class="pr-head"><span class="pr-num">ข้อ 1</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงพิจารณาว่าเซตต่อไปนี้เป็นปริภูมิย่อยหรือไม่ เพราะเหตุใด<br>
      (ก) \(H_1 = \{(x_1, x_2) : x_1 = 3x_2\}\) &nbsp;
      (ข) \(H_2 = \{(x_1, x_2) : x_1 \geq 0\}\) &nbsp;
      (ค) \(H_3 = \{(x_1, x_2, x_3) : x_1 + x_2 + x_3 = 1\}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">เช็ก \(\vec{0} \in H\) ก่อนเสมอ — สองเซตหลังจะตกข้อนี้หรือสมบัติการคูณสเกลาร์</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ตรวจ 3 สมบัติตามลำดับ เจอข้อห้ามก็สรุปได้ทันที — ลำดับที่ถูกคือ: (1) แทน \(\vec{0}\) ก่อน (เร็วสุด) (2) ถ้าผ่าน ค่อยหาเวกเตอร์คู่ตัวอย่างที่ทำให้การบวกหรือการคูณสเกลาร์พัง โดยเฉพาะเงื่อนไข \(x_1 \geq 0\) แบบนี้ให้ลองคูณ \(-1\) เป็นอย่างแรก</p>
      <ol class="steps">
        <li><span class="step-t">(ก) เป็นปริภูมิย่อย</span> เป็นเส้นตรงผ่านจุดกำเนิด: \(H_1 = \operatorname{Nul}\begin{bmatrix} 1 & -3 \end{bmatrix}\) — มี \(\vec{0}\), ปิดการบวกและการคูณสเกลาร์ ✓ ขยายรายละเอียด: สมการ \(x_1 = 3x_2\) เขียนเป็น \(x_1 - 3x_2 = 0\) คือ \(A\vec{x} = \vec{0}\) เมื่อ \(A = \begin{bmatrix} 1 & -3 \end{bmatrix}\) แทน \((0, 0)\) ได้ \(0 - 3(0) = 0\) ✓ เวกเตอร์ใน \(H_1\) ทุกตัวมีรูป \((3a, a)\) บวกกันได้ \((3a, a) + (3b, b) = (3(a + b),\; a + b)\) ยังอยู่ในรูปเดิม ✓ คูณสเกลาร์ \(c(3a, a) = (3ca, ca)\) ก็ยังอยู่ในรูปเดิม ✓ จึงเป็นปริภูมิย่อย (เป็นเส้นตรงผ่านจุดกำเนิดใน \(\mathbb{R}^2\))</li>
        <li><span class="step-t">(ข) ไม่เป็นปริภูมิย่อย</span> มี \((1, 0) \in H_2\) แต่ \((-1) \cdot (1, 0) = (-1, 0) \notin H_2\) → ไม่ปิดการคูณสเกลาร์ ✗ (เงื่อนไข \(x_1 \geq 0\) พังเมื่อคูณลบ) — ขั้นตอนชัด ๆ: เช็กสมบัติ 1 ก่อน \((0, 0)\) มี \(x_1 = 0 \geq 0\) ผ่าน ✓ แต่สมบัติ 3 ต้องให้ "คูณสเกลาร์อะไรก็ได้ รวมถึงติดลบ" ยังอยู่ในเซต พอคูณ \(-1\) ค่า \(x_1\) กลายเป็น \(-1\) ซึ่ง \( -1 \geq 0\) เป็นเท็จ จึงหลุดออกนอกเซต — เงื่อนไข "อย่างน้อยศูนย์" ทำให้เซตเป็นครึ่งระนาบ ไม่มีทางเป็นปริภูมิย่อย</li>
        <li><span class="step-t">(ค) ไม่เป็นปริภูมิย่อย</span> \((0, 0, 0) \notin H_3\) เพราะ \(0 + 0 + 0 = 0 \neq 1\) → ตกสมบัติข้อ 1 ทันที ✗ — สรุปคำตอบ: (ก) เป็นปริภูมิย่อย, (ข) (ค) ไม่เป็น (สังเกตว่า "เท่ากับ 1" ในโจทย์ข้อ (ค) คือค่าคงตัวไม่เป็นศูนย์ ทำให้จุดกำเนิดไม่อยู่ในเซตเสมอ)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p2-2-2">
    <div class="pr-head"><span class="pr-num">ข้อ 2</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงพิจารณาว่าเซตต่อไปนี้เป็นฐานหลักสำหรับ \(\mathbb{R}^3\) หรือไม่ เพราะเหตุใด<br>
      (ก) \(\left\{ \begin{bmatrix} 0\\ 1\\ -2 \end{bmatrix}, \begin{bmatrix} 6\\ 3\\ 5 \end{bmatrix}, \begin{bmatrix} 5\\ -7\\ 4 \end{bmatrix} \right\}\) &nbsp;
      (ข) \(\left\{ \begin{bmatrix} 2\\ 2\\ -1 \end{bmatrix}, \begin{bmatrix} 4\\ -1\\ 1 \end{bmatrix}, \begin{bmatrix} 3\\ -2\\ 0 \end{bmatrix}, \begin{bmatrix} 0\\ 5\\ 0 \end{bmatrix} \right\}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">(ข) ไม่ต้องลดรูป — นับจำนวนเวกเตอร์ก่อน (ก) ลดรูปแล้วดูว่าตัวนำครบทุกหลักไหม</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ฐานหลักของ \(\mathbb{R}^3\) = 3 เวกเตอร์ + อิสระเชิงเส้น กลยุทธ์ของข้อนี้: นับจำนวนเวกเตอร์ก่อนเสมอ ถ้าไม่ใช่ 3 ตัว ตอบจบโดยไม่ต้องคำนวณ ถ้าได้ 3 ตัว ค่อยเรียงเป็นหลักของเมทริกซ์แล้วลดรูปดูว่าตัวนำครบ 3 หลักไหม</p>
      <ol class="steps">
        <li><span class="step-t">(ข) ตอบทันที: ไม่เป็นฐานหลัก</span> มี 4 เวกเตอร์ใน \(\mathbb{R}^3\) (\(p > m\)) → พึ่งเชิงเส้นเสมอ → ขาดสมบัติฐานหลัก (แม้จะแผ่ทั่ว \(\mathbb{R}^3\) ก็ตาม) — เพราะระบบเอกพันธุ์ 3 สมการกับ 4 น้ำหนัก \(c_1, \dots, c_4\) ต้องมีตัวแปรเสรี จึงมีวิธีรวมไม่หมดศูนย์ให้ผลลัพธ์เป็น \(\vec{0}\) เสมอ ฐานหลักจึงตกตั้งแต่เงื่อนไขอิสระเชิงเส้น</li>
        <li><span class="step-t">(ก) ลดรูปเมทริกซ์ที่เวกเตอร์เรียงเป็นหลัก</span> หมายเหตุ: ช่องซ้ายบนเป็น 0 จึงต้องสลับแถวก่อนเป็นอย่างแรก
        \[ \begin{bmatrix} 0 & 6 & 5\\ 1 & 3 & -7\\ -2 & 5 & 4 \end{bmatrix} \xrightarrow{\,R_{12}\,} \begin{bmatrix} 1 & 3 & -7\\ 0 & 6 & 5\\ -2 & 5 & 4 \end{bmatrix} \xrightarrow{\substack{R_3 + 2R_1}} \begin{bmatrix} 1 & 3 & -7\\ 0 & 6 & 5\\ 0 & 11 & -10 \end{bmatrix} \xrightarrow{\,R_3 - \tfrac{11}{6}R_2\,} \begin{bmatrix} 1 & 3 & -7\\ 0 & 6 & 5\\ 0 & 0 & -\tfrac{115}{6} \end{bmatrix} \]
        อธิบายทีละลูกศร: \(R_{12}\) สลับแถว 1 กับ 2 เพื่อดันเลข 1 ขึ้นมาเป็นตัวนำ \(R_3 + 2R_1\) เคาะช่องแรกของแถวล่าง ทีละช่อง ได้ \(-2 + 2(1) = 0\), \(5 + 2(3) = 11\), \(4 + 2(-7) = 4 - 14 = -10\) แล้ว \(R_3 - \tfrac{11}{6}R_2\) เคาะช่องที่สองต่อ: \(11 - \tfrac{11}{6}(6) = 0\), ช่องสุดท้าย \(-10 - \tfrac{11}{6}(5) = -\tfrac{60}{6} - \tfrac{55}{6} = -\tfrac{115}{6}\) (ทำเศษส่วนให้มีตัวส่วนร่วม 6 ก่อนค่อยลบ) ตัวนำอยู่ครบหลัก 1, 2, 3 → อิสระเชิงเส้น</li>
        <li><span class="step-t">(ก) สรุป</span> มี 3 เวกเตอร์และอิสระเชิงเส้น → <strong>เป็นฐานหลักสำหรับ \(\mathbb{R}^3\)</strong> (โดยอัตโนมัติแผ่ทั่ว \(\mathbb{R}^3\)) — เหตุผลที่แผ่ทั่วตามมาเอง: ถ้า 3 เวกเตอร์ใน \(\mathbb{R}^3\) อิสระ ลดรูปแล้วตัวนำครบทั้ง 3 หลักและ 3 แถว ระบบ \(A\vec{x} = \vec{b}\) จึงมีผลเฉลยสำหรับ \(\vec{b}\) ทุกตัว สรุปคำตอบ: (ก) เป็นฐานหลัก, (ข) ไม่เป็น</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p2-2-3">
    <div class="pr-head"><span class="pr-num">ข้อ 3</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาฐานหลักสำหรับปริภูมิหลักและปริภูมิสู่ศูนย์ของเมทริกซ์
      \[ A = \begin{bmatrix} 1 & 2 & 0 & 1\\ 2 & 4 & 1 & 5\\ 1 & 2 & 1 & 4 \end{bmatrix} \]
      พร้อมทั้งหา \(\operatorname{rank} A\) และ \(\operatorname{nullity} A\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(R_2 - 2R_1\) และ \(R_3 - R_1\) แล้วจะเห็นหลักตัวหลักชัด (หลัก 1 กับ 3)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ลดรูปครั้งเดียว ได้ทั้ง Col และ Nul — หลักที่มีตัวนำ (หัวบันได) เก็บหลักนั้นของ \(A\) ต้นฉบับเป็นฐานของ Col A หลักที่ไม่มีตัวนำเป็นตัวแปรเสรี แต่ละตัวให้เวกเตอร์หนึ่งตัวของฐาน Nul A จบด้วยการตรวจว่า rank + nullity = จำนวนหลัก</p>
      <ol class="steps">
        <li><span class="step-t">ลดรูปจนได้ RREF</span> ทำสองลูกศรแรกพร้อมกัน เพราะใช้แถวบนเป็นตัวเคาะทั้งสองแถวล่าง:
        \[ A \xrightarrow{\substack{R_2 - 2R_1\\ R_3 - R_1}} \begin{bmatrix} 1 & 2 & 0 & 1\\ 0 & 0 & 1 & 3\\ 0 & 0 & 1 & 3 \end{bmatrix} \xrightarrow{\,R_3 - R_2\,} \begin{bmatrix} 1 & 2 & 0 & 1\\ 0 & 0 & 1 & 3\\ 0 & 0 & 0 & 0 \end{bmatrix} \]
        ดูแถว 2 (\(R_2 - 2R_1\)) ทีละช่อง: \(2 - 2(1) = 0\), \(4 - 2(2) = 0\), \(1 - 2(0) = 1\), \(5 - 2(1) = 3\) แถว 3 (\(R_3 - R_1\)): \(1 - 1 = 0\), \(2 - 2 = 0\), \(1 - 0 = 1\), \(4 - 1 = 3\) แล้วลูกศรสุดท้าย \(R_3 - R_2\) เคาะให้แถวล่างหายไป: \(0 - 0 = 0\), \(0 - 0 = 0\), \(1 - 1 = 0\), \(3 - 3 = 0\) — หลักตัวหลักคือหลักที่ 1 และ 3 (ตัวนำอยู่ที่หลัก 1 ของแถวบน และหลัก 3 ของแถวกลาง)</li>
        <li><span class="step-t">ฐานของ Col A (หลักจาก A ตัวจริง)</span> หลักตัวหลักคือหลัก 1 และ 3 จึงหยิบหลัก 1 และ 3 ของ \(A\) <em>ต้นฉบับ</em> (ข้อควรระวังที่สุดของหัวข้อนี้: ห้ามหยิบจาก RREF เพราะการลดรูปเปลี่ยนค่าหลักไปแล้ว หลักของ RREF ไม่ได้ Span เซตเดิม):
        \[ \operatorname{Col} A = \operatorname{Span}\left\{ \begin{bmatrix} 1\\ 2\\ 1 \end{bmatrix}, \begin{bmatrix} 0\\ 1\\ 1 \end{bmatrix} \right\}, \qquad \operatorname{rank} A = 2 \]
        (แรงก์ = จำนวนหลักตัวหลัก = 2)</li>
        <li><span class="step-t">ฐานของ Nul A (จาก RREF)</span> ตัวแปรหลักคือ \(x_1, x_3\) (มีตัวนำ) ตัวแปรเสรีคือ \(x_2, x_4\) (ไม่มีตัวนำ) อ่านสมการจาก RREF: แถวบน \(x_1 + 2x_2 + x_4 = 0\) ย้ายข้างได้ \(x_1 = -2x_2 - x_4\) แถวกลาง \(x_3 + 3x_4 = 0\) ได้ \(x_3 = -3x_4\) — ใส่ค่าทดลอง \((x_2, x_4) = (1, 0)\) ได้ \((x_1, x_3) = (-2, 0)\) เวกเตอร์คือ \((-2, 1, 0, 0)\) และ \((x_2, x_4) = (0, 1)\) ได้ \((x_1, x_3) = (-1, -3)\) เวกเตอร์คือ \((-1, 0, -3, 1)\):
        \[ x_1 = -2x_2 - x_4, \quad x_3 = -3x_4 \;\Longrightarrow\; \vec{x} = x_2\begin{bmatrix} -2\\ 1\\ 0\\ 0 \end{bmatrix} + x_4\begin{bmatrix} -1\\ 0\\ -3\\ 1 \end{bmatrix} \]
        \[ \operatorname{Nul} A = \operatorname{Span}\left\{ \begin{bmatrix} -2\\ 1\\ 0\\ 0 \end{bmatrix}, \begin{bmatrix} -1\\ 0\\ -3\\ 1 \end{bmatrix} \right\}, \qquad \operatorname{nullity} A = 2 \]</li>
        <li><span class="step-t">ตรวจ</span> \(\operatorname{rank} + \operatorname{nullity} = 2 + 2 = 4 = n\) ✓ และแทนฐานของ Nul กลับ: \(A(-2, 1, 0, 0) = (-2+2,\; -4+4,\; -2+2) = (0,0,0)\) ✓ และ \(A(-1, 0, -3, 1) = (-1 - 0 + 1,\; -2 - 3 + 5,\; -1 - 3 + 4) = (0,0,0)\) ✓ (การแทนกลับทำทีละแถว: แต่ละช่องของคำตอบ = แถวของ \(A\) · เวกเตอร์ เช่น ช่องแรกของตัวแรก: \(1(-2) + 2(1) + 0(0) + 1(0) = 0\)) สรุป: ฐาน Col A = \(\{(1, 2, 1), (0, 1, 1)\}\), ฐาน Nul A = \(\{(-2, 1, 0, 0), (-1, 0, -3, 1)\}\), rank = 2, nullity = 2</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p2-2-4">
    <div class="pr-head"><span class="pr-num">ข้อ 4</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงแสดงว่า \(H = \{(x_1, x_2, x_3) \in \mathbb{R}^3 : 2x_1 - x_2 + x_3 = 0\}\) เป็นปริภูมิย่อยของ \(\mathbb{R}^3\) พร้อมทั้งหาฐานหลักและมิติของ \(H\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(H = \operatorname{Nul} A\) เมื่อ \(A = \begin{bmatrix} 2 & -1 & 1 \end{bmatrix}\) ซึ่งเป็น RREF เท่ากับ \(\begin{bmatrix} 1 & -\tfrac{1}{2} & \tfrac{1}{2} \end{bmatrix}\) — ตัวแปรเสรี 2 ตัว</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> เซตแบบสมการเชิงเส้นผ่านจุดกำเนิด → Nul → ปริภูมิย่อย กลยุทธ์ของข้อนี้: สมการ \(2x_1 - x_2 + x_3 = 0\) ทุกพจน์มีตัวแปร เท่ากับศูนย์ ไม่มีค่าคงตัว จึงเป็นระบบเอกพันธุ์ทันที (เวกเตอร์สัมประสิทธิ์ \((2, -1, 1)\) เรียงเป็นแถวเดียวคือ \(A\)) จากนั้นแก้หา \(x_1\) โดยปล่อย \(x_2, x_3\) เป็นตัวแปรเสรี</p>
      <ol class="steps">
        <li><span class="step-t">ระบุ H</span> \(H = \{\vec{x} : A\vec{x} = \vec{0}\} = \operatorname{Nul} A\), \(A = \begin{bmatrix} 2 & -1 & 1 \end{bmatrix}\) → เป็นปริภูมิย่อยของ \(\mathbb{R}^3\) โดยทฤษฎีบท 2.2.3 (เพราะ \(\operatorname{Nul} A\) ของเมทริกซ์ใด ๆ เป็นปริภูมิย่อยเสมอ — ไม่ต้องเช็ก 3 สมบัติด้วยมือ)</li>
        <li><span class="step-t">แก้ระบบ</span> จากสมการ \(2x_1 - x_2 + x_3 = 0\) ย้ายพจน์ที่ไม่มี \(x_1\) ไปขวา: \(2x_1 = x_2 - x_3\) แล้วหารทั้งสองข้างด้วย 2 ได้ \(x_1 = \tfrac{1}{2}x_2 - \tfrac{1}{2}x_3\) โดย \(x_2, x_3\) เป็นตัวแปรเสรี (เลขครึ่งเกิดจากการหารด้วย 2 อย่างเดียว ไม่มีอะไรซับซ้อนกว่านั้น)</li>
        <li><span class="step-t">ผลเฉลยอิงตัวแปรเสริม</span> ใส่ค่าทดลอง \((x_2, x_3) = (1, 0)\) ได้ \(x_1 = \tfrac{1}{2}\) เวกเตอร์ \((\tfrac{1}{2}, 1, 0)\) และ \((0, 1)\) ได้ \(x_1 = -\tfrac{1}{2}\) เวกเตอร์ \((-\tfrac{1}{2}, 0, 1)\):
        \[ \vec{x} = x_2\begin{bmatrix} \tfrac{1}{2}\\ 1\\ 0 \end{bmatrix} + x_3\begin{bmatrix} -\tfrac{1}{2}\\ 0\\ 1 \end{bmatrix} \]
        เลือกคูณ 2 เพื่อความสวย (ฐานหลักคูณสเกลาร์ก็ยังเป็นฐาน — เพราะการคูณสเกลาร์ไม่เปลี่ยน Span และไม่ทำให้พึ่งกัน): ใช้ \(\begin{bmatrix} 1\\ 2\\ 0 \end{bmatrix}\) และ \(\begin{bmatrix} 1\\ 0\\ -2 \end{bmatrix}\)</li>
        <li><span class="step-t">ฐานหลักและมิติ</span> ตัวแปรเสรี 2 ตัว → ฐานหลักมี 2 เวกเตอร์:
        \[ \mathcal{B} = \left\{ \begin{bmatrix} 1\\ 2\\ 0 \end{bmatrix}, \begin{bmatrix} 1\\ 0\\ -2 \end{bmatrix} \right\}, \qquad \dim H = 2 \]
        (เรขาคณิต: \(H\) คือระนาบผ่านจุดกำเนิดที่ตั้งฉากกับเวกเตอร์ \((2, -1, 1)\)) ตรวจฐาน: \(2(1) - 2 + 0 = 0\) ✓ \(2(1) - 0 + (-2) = 0\) ✓ (แทนเวกเตอร์ฐานแต่ละตัวลงในสมการเดิม ได้ 0 ทั้งคู่ จึงอยู่ใน \(H\) จริง) สรุป: \(H\) เป็นปริภูมิย่อย, ฐานหลัก \(\{(1, 2, 0), (1, 0, -2)\}\), \(\dim H = 2\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p2-2-5">
    <div class="pr-head"><span class="pr-num">ข้อ 5</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงแสดงว่า \(H = \{(x_1 - 2x_2, \; x_1 + x_2, \; x_1 + 3x_2) : x_1, x_2 \in \mathbb{R}\}\) เป็นปริภูมิย่อยของ \(\mathbb{R}^3\) พร้อมทั้งหาฐานหลักและมิติของ \(H\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">แยกตามพารามิเตอร์ \(x_1, x_2\): \(H = \operatorname{Span}\{\vec{v}_1, \vec{v}_2\}\) — แล้วตรวจว่าเวกเตอร์ 2 ตัวนั้นอิสระกันไหม</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> เซตแบบพารามิเตอร์ → Span → ปริภูมิย่อย กลยุทธ์ของข้อนี้: แยกสูตรแต่ละช่องตามพารามิเตอร์ \(x_1, x_2\) จะได้เวกเตอร์คงตัวสองตัว จากนั้นเช็กว่าสองเวกเตอร์นี้ "ไม่ขนานกัน" (ไม่เป็นสัดส่วนกัน) ก็เป็นฐานหลักทันที เพราะ Span ของเวกเตอร์อิสระ 2 ตัวคือปริภูมิ 2 มิติ</p>
      <ol class="steps">
        <li><span class="step-t">แยกพารามิเตอร์</span> เก็บสัมประสิทธิ์ของ \(x_1\) ทุกช่อง: ช่องแรกมี 1, ช่องที่สองมี 1, ช่องที่สามมี 1 ได้ \(\begin{bmatrix} 1\\ 1\\ 1 \end{bmatrix}\) และสัมประสิทธิ์ของ \(x_2\): ช่องแรกมี \(-2\), ช่องที่สองมี 1, ช่องที่สามมี 3 ได้ \(\begin{bmatrix} -2\\ 1\\ 3 \end{bmatrix}\):
        \[ H = \left\{ x_1\begin{bmatrix} 1\\ 1\\ 1 \end{bmatrix} + x_2\begin{bmatrix} -2\\ 1\\ 3 \end{bmatrix} : x_1, x_2 \in \mathbb{R} \right\} = \operatorname{Span}\left\{ \begin{bmatrix} 1\\ 1\\ 1 \end{bmatrix}, \begin{bmatrix} -2\\ 1\\ 3 \end{bmatrix} \right\} = \operatorname{Col} A \]
        เมื่อ \(A = \begin{bmatrix} 1 & -2\\ 1 & 1\\ 1 & 3 \end{bmatrix}\) → เป็นปริภูมิย่อยโดยทฤษฎีบท 2.2.1 (Span เป็นปริภูมิย่อยเสมอ เพราะ \(\vec{0} = 0\vec{v}_1 + 0\vec{v}_2\) และการบวก/คูณสเกลาร์ของการรวมเชิงเส้นก็ยังเป็นการรวมเชิงเส้น)</li>
        <li><span class="step-t">ตรวจอิสระของ 2 เวกเตอร์</span> ไม่สัดส่วนกัน (\(\tfrac{-2}{1} \neq \tfrac{1}{1}\)) → อิสระเชิงเส้น (หรือลดรูป: ตัวนำอยู่ครบ 2 หลัก) — วิธีคิดเทียบสัดส่วน: ถ้าสองเวกเตอร์เป็นคูณสเกลาร์กัน ทุกช่องต้องให้อัตราส่วนเท่ากัน ที่นี่ช่องแรกให้ \(-2/1 = -2\) แต่ช่องที่สองให้ \(1/1 = 1\) ไม่เท่ากันแค่คู่เดียวก็พอ สรุปว่าไม่สัดส่วน (เวกเตอร์สองตัวเป็นพิเศษ: "ไม่ขนาน" = "อิสระ" ตรวจแค่จุดเดียวจบ)</li>
        <li><span class="step-t">ฐานหลักและมิติ</span> เวกเตอร์สองตัวที่แยกได้ทั้งอิสระและ Span ครอบคลุม \(H\) พอดี จึงเป็นฐานหลัก:
        \[ \mathcal{B} = \left\{ \begin{bmatrix} 1\\ 1\\ 1 \end{bmatrix}, \begin{bmatrix} -2\\ 1\\ 3 \end{bmatrix} \right\} \;\text{เป็นฐานหลักหนึ่งสำหรับ } H, \qquad \dim H = 2 \]
        (2 เวกเตอร์อิสระใน \(\mathbb{R}^3\) → \(H\) คือระนาบผ่านจุดกำเนิด) สรุป: \(H\) เป็นปริภูมิย่อย, ฐานหลัก \(\{(1, 1, 1), (-2, 1, 3)\}\), \(\dim H = 2\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p2-2-6">
    <div class="pr-head"><span class="pr-num">ข้อ 6</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงตอบคำถามต่อไปนี้พร้อมเหตุผล<br>
      (ก) ให้ \(A\) เป็น \(9 \times 6\) เมทริกซ์ซึ่ง \(\operatorname{rank} A = 4\) จงหา \(\operatorname{nullity} A\) จำนวนหลักตัวหลัก และจำนวนตัวแปรเสรีของ \(A\vec{x} = \vec{0}\)<br>
      (ข) ให้ \(T : \mathbb{R}^4 \to \mathbb{R}^6\) เป็นการแปลงเชิงเส้นที่มี \(\operatorname{nullity} A = 0\) เมื่อ \(A\) เป็นเมทริกซ์มาตรฐาน จงบอกว่า \(T\) มีสมบัติ 1-1 และทั่วถึงหรือไม่<br>
      (ค) ให้ \(B\) เป็น \(4 \times 4\) เมทริกซ์ที่ระบบ \(B\vec{x} = \vec{0}\) มีเพียงผลเฉลยชัด จงบอกว่าระบบ \(B\vec{x} = \vec{b}\) มีผลเฉลยสำหรับทุก \(\vec{b} \in \mathbb{R}^4\) หรือไม่</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">ใช้ทฤษฎีบทแรงก์เป็นหลัก: rank + nullity = จำนวนหลัก และตัวนำ = rank เสมอ</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ทุกข้อตอบด้วยทฤษฎีบทแรงก์และเกณฑ์ตัวนำ — จำสามตัวเลขสถานะให้ได้: จำนวนหลัก \(n\), จำนวนแถว \(m\), และแรงก์ จากนั้น nullity = \(n -\) rank, จำนวนหลักตัวหลัก = rank, ตัวแปรเสรี = nullity และตัดสินสมบัติด้วย "แรงก์ครบแถว = ทั่วถึง / แรงก์ครบหลัก = 1-1"</p>
      <ol class="steps">
        <li><span class="step-t">(ก) ใช้ทฤษฎีบทแรงก์</span> \(A\) เป็น \(9 \times 6\) จึงมี \(n = 6\) หลัก (มิติต้นทาง) และ \(m = 9\) แถว (มิติปลายทาง) โดยทฤษฎีบท 2.2.5: \(\operatorname{nullity} A = n - \operatorname{rank} A = 6 - 4 = 2\) จำนวนหลักตัวหลัก = \(\operatorname{rank} A = 4\) หลัก (เพราะ "แรงก์" นิยามด้วยจำนวนหลักตัวหลักพอดี) ตัวแปรเสรีของ \(A\vec{x} = \vec{0}\) = \(\operatorname{nullity} A = 2\) ตัว (เพราะตัวแปรเสรี = ตัวแปรที่อยู่ในหลักที่ไม่มีตัวนำ = \(6 - 4 = 2\))</li>
        <li><span class="step-t">(ข) rank จาก nullity</span> \(T : \mathbb{R}^4 \to \mathbb{R}^6\) มีเมทริกซ์มาตรฐานขนาด \(6 \times 4\) (แถว = ปลายทาง, หลัก = ต้นทาง) จึงมี \(n = 4\) ทฤษฎีบทแรงก์บอก \(\operatorname{rank} A = n - \operatorname{nullity} A = 4 - 0 = 4\)<br>
        1-1: nullity = 0 → \(A\vec{x} = \vec{0}\) มีเพียงผลเฉลยชัด → <strong>T 1-1</strong> ✓ (เพราะถ้ามีเวกเตอร์อื่นที่ \(T\) ส่งไป \(\vec{0}\) nullity จะเป็นบวก แต่มันเป็น 0 พอดี)<br>
        ทั่วถึง: \(\operatorname{rank} A = 4 < 6\) แถว → ไม่มีตัวนำครบทุกแถว → <strong>ไม่ทั่วถึง</strong> \(\mathbb{R}^6\) (จำเป็น: \(T: \mathbb{R}^4 \to \mathbb{R}^6\) ทั่วถึงไม่ได้เสมอ — เพราะหลักมีแค่ 4 หลัก ให้ตัวนำได้สูงสุด 4 ตำแหน่ง น้อยกว่าแถวที่ต้องครอบ 6 แถว)</li>
        <li><span class="step-t">(ค) มีผลเฉลยทุก \(\vec{b}\)</span> \(B\vec{x} = \vec{0}\) มีเพียงผลเฉลยชัด → \(\operatorname{nullity} B = 0\) → \(\operatorname{rank} B = 4 - 0 = 4\) = จำนวนแถว → \(B\) มีตำแหน่งตัวหลักในทุกแถว → หลักของ \(B\) แผ่ทั่ว \(\mathbb{R}^4\) → ระบบ \(B\vec{x} = \vec{b}\) <strong>มีผลเฉลยสำหรับทุก \(\vec{b}\)</strong> (และเป็นผลเฉลยชุดเดียว — เพราะตัวนำครบทุกหลักด้วย ไม่มีตัวแปรเสรีให้เลือกค่า — ซึ่งจะกลายเป็นข้อหนึ่งของทฤษฎีบทเมทริกซ์หาตัวผกผันได้ในหัวข้อ 2.3!) สรุป: (ก) nullity = 2, หลักตัวหลัก 4 หลัก, ตัวแปรเสรี 2 ตัว, (ข) 1-1 แต่ไม่ทั่วถึง, (ค) มีผลเฉลยทุก \(\vec{b}\)</li>
      </ol>
    </div></details>
  </article>
</section>
