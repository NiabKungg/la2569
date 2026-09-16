<!-- meta
title: 1.3 การรวมเชิงเส้นและการแผ่ทั่ว
ch: 1
section: 1.3
page: ch1-3.html
-->

<div class="crumb">บทที่ 1 · ระบบเชิงเส้น</div>
<h1 class="page-title">1.3 การรวมเชิงเส้นและการแผ่ทั่ว</h1>
<p class="page-sub">มุมมองใหม่ของระบบเชิงเส้น — มองสมการเป็น "เวกเตอร์" และ "เมทริกซ์"
เรียนรู้การรวมเชิงเส้น (linear combination) เซตที่แผ่ทั่ว (Span) และเข้าสู่การคูณเมทริกซ์อย่างเป็นทางการครั้งแรก</p>

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
      <li>พิจารณาว่าเวกเตอร์ \(\vec{b}\) เป็นการรวมเชิงเส้นของเวกเตอร์ชุดหนึ่งหรือไม่ (โดยแปลงเป็นระบบเชิงเส้น)</li>
      <li>อธิบายความหมายของ \(\operatorname{Span}\{\vec{v}_1, \dots, \vec{v}_p\}\) และรูปเรขาคณิตของมัน (เส้นตรง/ระนาบผ่านจุดกำเนิด)</li>
      <li>คำนวณ \(A\vec{x}\) ในฐานะการรวมเชิงเส้นของหลักของ \(A\) และเข้าใจความสมมูล 3 รูปแบบ: ระบบเชิงเส้น ↔ สมการเวกเตอร์ ↔ สมการเมทริกซ์</li>
      <li>ตัดสินว่าหลักของเมทริกซ์แผ่ทั่ว \(\mathbb{R}^m\) หรือไม่ และตัดสินว่า \(A\vec{x} = \vec{b}\) มีผลเฉลยสำหรับทุก \(\vec{b}\) หรือไม่</li>
      <li>คูณเมทริกซ์ได้ทั้งแบบหลักต่อหลักและแบบแถว-หลัก พร้อมใช้สมบัติพื้นฐาน (รวมทั้ง transpose)</li>
    </ul>
  </div>
</section>

<section class="block" id="lesson">
  <h2><span class="h2-dot">📖</span> บทเรียน</h2>

  <h3>1) ปริภูมิยุคลิด \(\mathbb{R}^m\) และการรวมเชิงเส้น</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม — \(\mathbb{R}^m\) และการรวมเชิงเส้น</div>
    <p>\(\mathbb{R}^m\) คือเซตของเวกเตอร์หลักมิติ \(m \times 1\) ทั้งหมด และ \(\vec{0}\) คือเวกเตอร์ที่สมาชิกทุกตัวเป็น 0 (<strong>เวกเตอร์ศูนย์</strong>)</p>
    <p>สำหรับ \(\vec{v}_1, \vec{v}_2, \dots, \vec{v}_p \in \mathbb{R}^m\) และ \(c_1, c_2, \dots, c_p \in \mathbb{R}\) เวกเตอร์</p>
    \[ \vec{y} = c_1\vec{v}_1 + c_2\vec{v}_2 + \cdots + c_p\vec{v}_p \]
    <p>เรียกว่า <strong>การรวมเชิงเส้น</strong> (linear combination) ของ \(\vec{v}_1, \dots, \vec{v}_p\) ด้วยน้ำหนัก (weight) \(c_1, \dots, c_p\) — น้ำหนักเป็นจำนวนจริงใด ๆ (รวมถึง 0 และติดลบ)</p>
  </div>

  <div class="box box-thm">
    <div class="box-title">⭐ บทแทรก 1.3.1 — หัวใจของหัวข้อนี้</div>
    <p>เวกเตอร์ \(\vec{b}\) เป็นการรวมเชิงเส้นของ \(\vec{v}_1, \vec{v}_2, \dots, \vec{v}_p\) <strong>ก็ต่อเมื่อ</strong> สมการเวกเตอร์</p>
    \[ x_1\vec{v}_1 + x_2\vec{v}_2 + \cdots + x_p\vec{v}_p = \vec{b} \]
    <p>มีผลเฉลย — ก็ต่อเมื่อ ระบบเชิงเส้นที่มีเมทริกซ์แต่งเติม \(\begin{bmatrix} \vec{v}_1 & \vec{v}_2 & \cdots & \vec{v}_p & \vec{b} \end{bmatrix}\) มีผลเฉลย</p>
  </div>

  <div class="box box-idea">
    <div class="box-title">💡 ท่าคิดที่ใช้บ่อยที่สุดของทั้งวิชา</div>
    <p>"\(\vec{b}\) เป็นการรวมเชิงเส้นของ \(\vec{v}_1, \dots, \vec{v}_p\) หรือไม่" = "ระบบที่มีเมทริกซ์แต่งเติม \(\begin{bmatrix} \vec{v}_1 & \cdots & \vec{v}_p & \vec{b} \end{bmatrix}\) มีผลเฉลยหรือไม่" — เอาเวกเตอร์เรียงเป็นหลัก (รวม \(\vec{b}\) ต่อท้าย) แล้วลดรูปตามเนื้อหา 1.2 ได้เลย</p>
  </div>

  <h3>2) เซตที่แผ่ทั่ว (Span)</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม — Span</div>
    <p>\(\operatorname{Span}\{\vec{v}_1, \dots, \vec{v}_p\}\) คือเซตของ<em>การรวมเชิงเส้นทั้งหมด</em>ของ \(\vec{v}_1, \dots, \vec{v}_p\):</p>
    \[ \operatorname{Span}\{\vec{v}_1, \dots, \vec{v}_p\} = \{ c_1\vec{v}_1 + \cdots + c_p\vec{v}_p : c_1, \dots, c_p \in \mathbb{R} \} \]
    <p>ถ้า \(\operatorname{Span}\{\vec{v}_1, \dots, \vec{v}_p\} = \mathbb{R}^m\) เรากล่าวว่า \(\vec{v}_1, \dots, \vec{v}_p\) <strong>แผ่ทั่ว</strong> \(\mathbb{R}^m\) และโดยบทแทรก 1.3.2: \(\vec{b} \in \operatorname{Span}\{\vec{v}_1, \dots, \vec{v}_p\}\) ก็ต่อเมื่อสมการเวกเตอร์มีผลเฉลย</p>
  </div>

  <div class="box box-idea">
    <div class="box-title">💡 ภาพเรขาคณิตของ Span</div>
    <p>• \(\operatorname{Span}\{\vec{v}\}\) เมื่อ \(\vec{v} \neq \vec{0}\) = <strong>เส้นตรง</strong>ผ่านจุดกำเนิด มีทิศทางตาม \(\vec{v}\)</p>
    <p>• \(\operatorname{Span}\{\vec{v}_1, \vec{v}_2\}\) ใน \(\mathbb{R}^3\): ถ้า \(\vec{v}_1 = c\vec{v}_2\) จะได้เส้นตรง (เวกเตอร์พึ่งกัน) แต่ถ้าไม่ใช่สัดส่วนกัน = <strong>ระนาบ</strong>ผ่านจุดกำเนิด</p>
    <p>• 3 เวกเตอร์ที่ "ไม่เอนไปทางเดียวกัน" ใน \(\mathbb{R}^3\) มักแผ่ทั่วทั้งปริภูมิ \(\mathbb{R}^3\)</p>
  </div>

  <h3>3) สมการเมทริกซ์ \(A\vec{x} = \vec{b}\)</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม — ผลคูณของเมทริกซ์กับเวกเตอร์ \(A\vec{x}\)</div>
    <p>ให้ \(A\) เป็น \(m \times n\) เมทริกซ์มีหลัก \(\vec{v}_1, \dots, \vec{v}_n\) และ \(\vec{x} \in \mathbb{R}^n\) กำหนด</p>
    \[ A\vec{x} = \begin{bmatrix} \vec{v}_1 & \vec{v}_2 & \cdots & \vec{v}_n \end{bmatrix} \begin{bmatrix} x_1\\ x_2\\ \vdots\\ x_n \end{bmatrix} := x_1\vec{v}_1 + x_2\vec{v}_2 + \cdots + x_n\vec{v}_n \]
    <p>นั่นคือ \(A\vec{x}\) คือ<strong>การรวมเชิงเส้นของหลักของ \(A\) ด้วยน้ำหนักที่สมนัยกับสมาชิกของ \(\vec{x}\)</strong> และเรียกสมการ \(A\vec{x} = \vec{b}\) ว่า<strong>สมการเมทริกซ์</strong> (matrix equation)</p>
    <p>เมทริกซ์ทแยงมุมขนาด \(n\) ที่ทแยงหลักเป็น 1 ทั้งหมดเรียกว่า <strong>เมทริกซ์เอกลักษณ์</strong> \(I_n\) ซึ่ง \(I_n\vec{x} = \vec{x}\) เสมอ</p>
  </div>

  <div class="box box-thm">
    <div class="box-title">⭐ บทแทรก 1.3.3 — รูปแบบทั้ง 3 สมมูลกัน</div>
    <p>ให้ \(A\) เป็น \(m \times n\) เมทริกซ์และ \(\vec{b} \in \mathbb{R}^m\) ข้อความต่อไปนี้<strong>สมมูลกัน</strong>:</p>
    <p>1. สมการเมทริกซ์ \(A\vec{x} = \vec{b}\) มีผลเฉลย</p>
    <p>2. \(\vec{b}\) เป็นการรวมเชิงเส้นของหลักของ \(A\)</p>
    <p>3. เมทริกซ์แต่งเติม \(\begin{bmatrix} A \mid \vec{b} \end{bmatrix}\) สมนัยกับระบบเชิงเส้นที่มีผลเฉลย</p>
  </div>

  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 1.3.4 — เมื่อไรที่ \(A\vec{x} = \vec{b}\) มีผลเฉลยทุก \(\vec{b}\)</div>
    <p>ให้ \(A\) เป็น \(m \times n\) เมทริกซ์ ข้อความต่อไปนี้<strong>สมมูลกัน</strong>:</p>
    <p>1. สำหรับแต่ละ \(\vec{b} \in \mathbb{R}^m\) สมการ \(A\vec{x} = \vec{b}\) มีผลเฉลย</p>
    <p>2. หลักของ \(A\) แผ่ทั่ว \(\mathbb{R}^m\)</p>
    <p>3. \(A\) มีตำแหน่งตัวหลักในทุก ๆ <strong>แถว</strong></p>
  </div>

  <div class="box box-warn">
    <div class="box-title">⚠️ จำให้แม่น: "แถว" กับ "หลัก" ต่างกัน</div>
    <p>ทฤษฎีบท 1.3.4 ใช้<em>ตำแหน่งตัวหลักในทุกแถว</em> (เพื่อให้ \(\begin{bmatrix} A \mid \vec{b}\end{bmatrix}\) ไม่เกิดแถว \(\begin{bmatrix} 0 \ \dots \ 0 \mid b\neq 0 \end{bmatrix}\) เท่าไรก็ได้ของ \(\vec{b}\)) — ต่อไปในหัวข้อ 1.4 และ 2.2 จะพบข้อความที่ใช้ "ทุกหลัก" ซึ่งมีความหมายต่างกัน (อิสระเชิงเส้น) อย่าสับสน</p>
  </div>

  <h3>4) การคูณเมทริกซ์</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม — ผลคูณ \(AB\)</div>
    <p>ให้ \(A\) เป็น \(m \times n\) และ \(B\) เป็น \(n \times p\) มีหลัก \(\vec{b}_1, \dots, \vec{b}_p\) กำหนด</p>
    \[ AB = \begin{bmatrix} A\vec{b}_1 & A\vec{b}_2 & \cdots & A\vec{b}_p \end{bmatrix} \]
    <p>คือเมทริกซ์ \(m \times p\) ที่หลักที่ \(k\) คือ \(A\vec{b}_k\) และในเชิงสมาชิก สมาชิกแถวที่ \(i\) หลักที่ \(k\) ของ \(AB\) คือ</p>
    \[ (AB)_{ik} = a_{i1}b_{1k} + a_{i2}b_{2k} + \cdots + a_{in}b_{nk} \]
    <p>(แถวที่ \(i\) ของ \(A\) "จุด" กับหลักที่ \(k\) ของ \(B\))</p>
  </div>

  <div class="box box-warn">
    <div class="box-title">⚠️ ข้อควรระวัง 2 ข้อของการคูณเมทริกซ์</div>
    <p>1. คูณได้เมื่อ <strong>(จำนวนหลักของตัวซ้าย) = (จำนวนแถวของตัวขวา)</strong> และ \(AB\) มีขนาด \(m \times p\)</p>
    <p>2. โดยทั่วไป <strong>\(AB \neq BA\)</strong> (การคูณไม่มีสมบัติการสลับที่) และถ้า \(AB = 0\) ก็สรุปไม่ได้ว่า \(A = 0\) หรือ \(B = 0\)</p>
  </div>

  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 1.3.5 — สมบัติของการคูณเมทริกซ์</div>
    <p>เมื่อขนาดเมทริกซ์ที่เกี่ยวข้องคูณกันได้: 1. \(A(BC) = (AB)C\) &nbsp; 2. \(A(B+C) = AB + AC\) และ \((B+C)A = BA + CA\) &nbsp; 3. \(r(AB) = (rA)B = A(rB)\) &nbsp; 4. \(I_mA = A = AI_n\)</p>
  </div>

  <h3>5) เมทริกซ์สลับเปลี่ยน (transpose)</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม — Transpose</div>
    <p>\(A^T\) คือเมทริกซ์ \(n \times m\) ที่ได้จากการ "สลับแถวเป็นหลัก" ของ \(A\) เช่น \(A = \begin{bmatrix} 1 & -2\\ 4 & 3 \end{bmatrix}\) จะได้ \(A^T = \begin{bmatrix} 1 & 4\\ -2 & 3 \end{bmatrix}\)</p>
  </div>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 1.3.6 — สมบัติของ transpose</div>
    <p>1. \((A^T)^T = A\) &nbsp; 2. \((A+B)^T = A^T + B^T\) &nbsp; 3. \((rA)^T = rA^T\) &nbsp; 4. <strong>\((AB)^T = B^TA^T\)</strong> (ลำดับกลับด้าน!) และทั่วไปได้ \((A_1A_2\cdots A_k)^T = A_k^T \cdots A_2^T A_1^T\)</p>
  </div>
</section>

<section class="block" id="examples">
  <h2><span class="h2-dot">✏️</span> ตัวอย่างโจทย์</h2>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 1</span><span class="tag easy">ง่าย</span><span class="ex-title">คำนวณ \(A\vec{x}\) ในฐานะการรวมเชิงเส้นของหลัก</span></div>
    <div class="ex-body">
      <div class="ex-q">จงคำนวณ \(A\vec{x}\) เมื่อ \(A = \begin{bmatrix} 3 & 0\\ -1 & 2\\ 1 & -1 \end{bmatrix}\) และ \(\vec{x} = \begin{bmatrix} 1\\ 2 \end{bmatrix}\) โดยเขียนในรูปการรวมเชิงเส้นของหลักของ \(A\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — \(A\vec{x} = x_1 \cdot (\text{หลัก 1}) + x_2 \cdot (\text{หลัก 2})\)</div>
      <ol class="steps">
        <li><span class="step-t">แยกหลักของ \(A\)</span> หลักที่ 1 คือ \(\vec{v}_1 = \begin{bmatrix} 3\\ -1\\ 1 \end{bmatrix}\) และหลักที่ 2 คือ \(\vec{v}_2 = \begin{bmatrix} 0\\ 2\\ -1 \end{bmatrix}\)</li>
        <li><span class="step-t">ใช้น้ำหนักจาก \(\vec{x}\)</span>
        \[ A\vec{x} = 1\begin{bmatrix} 3\\ -1\\ 1 \end{bmatrix} + 2\begin{bmatrix} 0\\ 2\\ -1 \end{bmatrix} = \begin{bmatrix} 3 + 0\\ -1 + 4\\ 1 - 2 \end{bmatrix} = \begin{bmatrix} 3\\ 3\\ -1 \end{bmatrix} \]</li>
        <li><span class="step-t">ตรวจด้วยวิธีแถว–หลัก</span> แถวแรก: \(3(1) + 0(2) = 3\) ✓ แถวสอง: \(-1(1) + 2(2) = 3\) ✓ แถวสาม: \(1(1) + (-1)(2) = -1\) ✓ ได้คำตอบตรงกัน</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2</span><span class="tag easy">ง่าย</span><span class="ex-title">แปลงสมการเวกเตอร์ ↔ เมทริกซ์แต่งเติม ↔ ระบบเชิงเส้น</span></div>
    <div class="ex-body">
      <div class="ex-q">จงเขียนสมการเวกเตอร์ \(x_1\begin{bmatrix} 2\\ 1\\ -3 \end{bmatrix} + x_2\begin{bmatrix} -1\\ 4\\ 0 \end{bmatrix} + x_3\begin{bmatrix} 5\\ 2\\ 1 \end{bmatrix} = \begin{bmatrix} 8\\ 7\\ -2 \end{bmatrix}\) ในรูปสมการเมทริกซ์และรูประบบเชิงเส้น</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — เวกเตอร์ทั้งหมดเรียงเป็นหลักของเมทริกซ์ (เวกเตอร์ฝั่งขวา \(\vec{b}\) ต่อท้าย) — ทั้ง 3 รูปแบบบอกเรื่องเดียวกันโดยบทแทรก 1.3.3</div>
      <ol class="steps">
        <li><span class="step-t">รูปสมการเมทริกซ์</span>
        \[ \begin{bmatrix} 2 & -1 & 5\\ 1 & 4 & 2\\ -3 & 0 & 1 \end{bmatrix} \begin{bmatrix} x_1\\ x_2\\ x_3 \end{bmatrix} = \begin{bmatrix} 8\\ 7\\ -2 \end{bmatrix} \]</li>
        <li><span class="step-t">รูประบบเชิงเส้น</span> อ่านทีละแถว:
        \[ \begin{aligned} 2x_1 - x_2 + 5x_3 &= 8\\ x_1 + 4x_2 + 2x_3 &= 7\\ -3x_1 + 0x_2 + x_3 &= -2 \end{aligned} \]</li>
        <li><span class="step-t">สรุป</span> ทั้ง 3 รูปแบบ (ระบบเชิงเส้น / สมการเวกเตอร์ / สมการเมทริกซ์) มีเซตผลเฉลยเดียวกัน — เลือกรูปที่สะดวกต่อการคิด โดยมากคือลดรูปเมทริกซ์แต่งเติม \(\begin{bmatrix} 2 & -1 & 5 & 8\\ 1 & 4 & 2 & 7\\ -3 & 0 & 1 & -2 \end{bmatrix}\)</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3</span><span class="tag easy">ง่าย</span><span class="ex-title">\(\vec{b}\) เป็นการรวมเชิงเส้นของ \(\vec{v}_1, \vec{v}_2\) หรือไม่</span></div>
    <div class="ex-body">
      <div class="ex-q">กำหนด \(\vec{v}_1 = \begin{bmatrix} 1\\ 1 \end{bmatrix}\), \(\vec{v}_2 = \begin{bmatrix} 3\\ 2 \end{bmatrix}\) และ \(\vec{b} = \begin{bmatrix} 5\\ 4 \end{bmatrix}\) จงพิจารณาว่า \(\vec{b}\) เป็นการรวมเชิงเส้นของ \(\vec{v}_1\) และ \(\vec{v}_2\) หรือไม่ ถ้าเป็นจงเขียน \(\vec{b}\) ในรูปการรวมเชิงเส้น</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — ต้องการหาน้ำหนัก \(x_1, x_2\) ที่ทำให้ \(x_1\vec{v}_1 + x_2\vec{v}_2 = \vec{b}\) → แปลงเป็นระบบเชิงเส้นแล้วแก้</div>
      <ol class="steps">
        <li><span class="step-t">เขียนเมทริกซ์แต่งเติม \(\begin{bmatrix} \vec{v}_1 & \vec{v}_2 & \vec{b} \end{bmatrix}\)</span>
        \[ \begin{bmatrix} 1 & 3 & 5\\ 1 & 2 & 4 \end{bmatrix} \xrightarrow{\,R_2 - R_1\,} \begin{bmatrix} 1 & 3 & 5\\ 0 & -1 & -1 \end{bmatrix} \xrightarrow{\,-R_2\,} \begin{bmatrix} 1 & 3 & 5\\ 0 & 1 & 1 \end{bmatrix} \xrightarrow{\,R_1 - 3R_2\,} \begin{bmatrix} 1 & 0 & 2\\ 0 & 1 & 1 \end{bmatrix} \]</li>
        <li><span class="step-t">อ่านผลเฉลย</span> ได้ \(x_1 = 2,\; x_2 = 1\) — มีผลเฉลยชุดเดียว ดังนั้น \(\vec{b}\) <strong>เป็นการรวมเชิงเส้น</strong>ของ \(\vec{v}_1, \vec{v}_2\)</li>
        <li><span class="step-t">เขียนคำตอบ</span>
        \[ \vec{b} = 2\vec{v}_1 + 1\vec{v}_2 \qquad \text{ตรวจ: } 2\begin{bmatrix} 1\\ 1 \end{bmatrix} + \begin{bmatrix} 3\\ 2 \end{bmatrix} = \begin{bmatrix} 5\\ 4 \end{bmatrix} \checkmark \]</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 4</span><span class="tag hard">ยาก</span><span class="ex-title">\(\vec{b} \in \operatorname{Span}\{\vec{v}_1, \vec{v}_2\}\) หรือไม่ (เวกเตอร์ 3 มิติ)</span></div>
    <div class="ex-body">
      <div class="ex-q">กำหนด \(\vec{v}_1 = \begin{bmatrix} -1\\ 2\\ 3 \end{bmatrix}\), \(\vec{v}_2 = \begin{bmatrix} 2\\ -3\\ 5 \end{bmatrix}\) และ \(\vec{b} = \begin{bmatrix} 1\\ 1\\ -3 \end{bmatrix}\) จงพิจารณาว่า \(\vec{b}\) อยู่ในเซต \(\operatorname{Span}\{\vec{v}_1, \vec{v}_2\}\) หรือไม่</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — \(\vec{b} \in \operatorname{Span}\{\vec{v}_1, \vec{v}_2\}\) ก็ต่อเมื่อระบบที่มีเมทริกซ์แต่งเติม \(\begin{bmatrix} \vec{v}_1 & \vec{v}_2 & \vec{b} \end{bmatrix}\) มีผลเฉลย (บทแทรก 1.3.2)</div>
      <ol class="steps">
        <li><span class="step-t">เขียนเมทริกซ์แต่งเติมและเริ่มลดรูป</span>
        \[ \begin{bmatrix} -1 & 2 & 1\\ 2 & -3 & 1\\ 3 & 5 & -3 \end{bmatrix} \xrightarrow{\substack{R_2 + 2R_1\\ R_3 + 3R_1}} \begin{bmatrix} -1 & 2 & 1\\ 0 & 1 & 3\\ 0 & 11 & 0 \end{bmatrix} \xrightarrow{\,R_3 - 11R_2\,} \begin{bmatrix} -1 & 2 & 1\\ 0 & 1 & 3\\ 0 & 0 & -33 \end{bmatrix} \]</li>
        <li><span class="step-t">ตัดสินด้วยทฤษฎีบท 1.2.2</span> แถวสุดท้ายคือ \(\begin{bmatrix} 0 & 0 & -33 \end{bmatrix}\) — หลักทางขวาสุด<em>เป็น</em>หลักตัวหลัก สมนัยกับ \(0 = -33\) ซึ่งขัดแย้ง</li>
        <li><span class="step-t">สรุป</span> ระบบไม่มีผลเฉลย ดังนั้น \(\vec{b}\) <strong>ไม่อยู่</strong>ใน \(\operatorname{Span}\{\vec{v}_1, \vec{v}_2\}\) — ในเชิงเรขาคณิต: \(\vec{v}_1, \vec{v}_2\) แผ่เป็นระนาบบางระนาบใน \(\mathbb{R}^3\) และ \(\vec{b}\) ลอยอยู่นอกระนาบนั้น</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5</span><span class="tag hard">ยาก</span><span class="ex-title">\(A\vec{x} = \vec{b}\) มีผลเฉลยสำหรับทุก \(\vec{b}\) หรือไม่</span></div>
    <div class="ex-body">
      <div class="ex-q">กำหนด \(A = \begin{bmatrix} 1 & 0 & 5\\ -2 & 1 & -6\\ 0 & 2 & 8 \end{bmatrix}\) จงพิจารณาว่าสมการเมทริกซ์ \(A\vec{x} = \vec{b}\) มีผลเฉลยสำหรับทุก ๆ \(\vec{b} = \begin{bmatrix} b_1\\ b_2\\ b_3 \end{bmatrix}\) หรือไม่ ถ้าไม่ จงหาเงื่อนไขบน \(b_1, b_2, b_3\) ที่ทำให้สมการมีผลเฉลย</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — ลดรูป \(\begin{bmatrix} A \mid \vec{b} \end{bmatrix}\) เหมือนกับมี \(\vec{b}\) เป็นสัญลักษณ์ แล้วดูว่าเกิดแถว \(\begin{bmatrix} 0 & \dots & 0 & \text{นิพจน์} \end{bmatrix}\) หรือไม่</div>
      <ol class="steps">
        <li><span class="step-t">ลดรูปจนได้รูปแบบขั้นบันได</span>
        \[ \begin{bmatrix} 1 & 0 & 5 & b_1\\ -2 & 1 & -6 & b_2\\ 0 & 2 & 8 & b_3 \end{bmatrix} \xrightarrow{\,R_2 + 2R_1\,} \begin{bmatrix} 1 & 0 & 5 & b_1\\ 0 & 1 & 4 & 2b_1 + b_2\\ 0 & 2 & 8 & b_3 \end{bmatrix} \xrightarrow{\,R_3 - 2R_2\,} \begin{bmatrix} 1 & 0 & 5 & b_1\\ 0 & 1 & 4 & 2b_1 + b_2\\ 0 & 0 & 0 & -4b_1 - 2b_2 + b_3 \end{bmatrix} \]</li>
        <li><span class="step-t">ตัดสิน</span> แถวสุดท้ายเป็น \(\begin{bmatrix} 0 & 0 & 0 & -4b_1 - 2b_2 + b_3 \end{bmatrix}\) — ถ้านิพจน์นี้ \(\neq 0\) จะได้ \(0 =\) (ค่าไม่ศูนย์) ซึ่งขัดแย้ง ดังนั้นระบบ<em>ไม่</em>มีผลเฉลยสำหรับทุก \(\vec{b}\) (เช่น \(\vec{b} = (1, 1, 1)\) ให้ \(-4 - 2 + 1 = -5 \neq 0\))</li>
        <li><span class="step-t">เงื่อนไขที่มีผลเฉลย</span> โดยทฤษฎีบท 1.2.2 สมการมีผลเฉลย ก็ต่อเมื่อ
        \[ -4b_1 - 2b_2 + b_3 = 0 \]
        เช่น \(\vec{b} = (1, 1, 6)\) ผ่านเงื่อนไข (\(-4 - 2 + 6 = 0\)) จึงมีผลเฉลย แต่ \(\vec{b} = (1, 0, 0)\) ไม่ผ่านจึงไม่มี</li>
        <li><span class="step-t">ตีความ</span> เพราะ \(A\) ไม่มีตำแหน่งตัวหลักในทุกแถว (หลักที่ 3 ของ REF ไม่มีตัวนำ) หลักของ \(A\) จึงไม่แผ่ทั่ว \(\mathbb{R}^3\) — ตรงกับทฤษฎีบท 1.3.4</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 6</span><span class="tag hard">ยาก</span><span class="ex-title">เซตของเวกเตอร์แผ่ทั่ว \(\mathbb{R}^3\) หรือไม่</span></div>
    <div class="ex-body">
      <div class="ex-q">กำหนด \(\vec{v}_1 = \begin{bmatrix} 1\\ 0\\ -1 \end{bmatrix}\), \(\vec{v}_2 = \begin{bmatrix} -1\\ 3\\ 7 \end{bmatrix}\), \(\vec{v}_3 = \begin{bmatrix} 3\\ -2\\ -2 \end{bmatrix}\) จงพิจารณาว่าเซต \(\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}\) แผ่ทั่ว \(\mathbb{R}^3\) หรือไม่ เพราะเหตุใด</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — โดยทฤษฎีบท 1.3.4 หลักของ \(A = \begin{bmatrix} \vec{v}_1 & \vec{v}_2 & \vec{v}_3 \end{bmatrix}\) แผ่ทั่ว \(\mathbb{R}^3\) ก็ต่อเมื่อ \(A\) มีตำแหน่งตัวหลักในทุกแถว → ลดรูปเฉพาะ \(A\) (ไม่ต้องมี \(\vec{b}\))</div>
      <ol class="steps">
        <li><span class="step-t">เขียน \(A\) แล้วลดรูปจนได้รูปแบบขั้นบันได</span>
        \[ A = \begin{bmatrix} 1 & -1 & 3\\ 0 & 3 & -2\\ -1 & 7 & -2 \end{bmatrix} \xrightarrow{\,R_3 + R_1\,} \begin{bmatrix} 1 & -1 & 3\\ 0 & 3 & -2\\ 0 & 6 & 1 \end{bmatrix} \xrightarrow{\,R_3 - 2R_2\,} \begin{bmatrix} 1 & -1 & 3\\ 0 & 3 & -2\\ 0 & 0 & 5 \end{bmatrix} \]</li>
        <li><span class="step-t">นับตำแหน่งตัวหลัก</span> ตัวนำอยู่แถวที่ 1, 2 และ 3 (หลัก 1, 2, 3) → \(A\) มีตำแหน่งตัวหลักใน<em>ทุกแถว</em></li>
        <li><span class="step-t">สรุป</span> โดยทฤษฎีบท 1.3.4 หลักของ \(A\) แผ่ทั่ว \(\mathbb{R}^3\) — นั่นคือเวกเตอร์ใด ๆ \(\vec{b} \in \mathbb{R}^3\) เขียนเป็นการรวมเชิงเส้นของ \(\vec{v}_1, \vec{v}_2, \vec{v}_3\) ได้เสมอ</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจความเข้าใจ:</span> ถ้าโจทย์เปลี่ยน \(\vec{v}_3\) เป็น \((2, 2, 4)\) (เท่ากับ \(2\vec{v}_1 + \vec{v}_2\)) แถวที่ 3 จะล้าเป็นศูนย์ → เหลือตัวนำ 2 แถว → ไม่แผ่ทั่ว \(\mathbb{R}^3\) — ลองคิดตามแล้วจะเข้าใจทั้งสองทิศทาง</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 7</span><span class="tag hard">ยาก</span><span class="ex-title">การคูณเมทริกซ์และข้อเตือนใจ \(AB \neq BA\)</span></div>
    <div class="ex-body">
      <div class="ex-q">กำหนด \(A = \begin{bmatrix} 1 & 2\\ 3 & 4 \end{bmatrix}\), \(B = \begin{bmatrix} 0 & 1\\ 1 & 0 \end{bmatrix}\) และ \(C = \begin{bmatrix} 1 & 2 & -1\\ -1 & 0 & 3 \end{bmatrix}\), \(D = \begin{bmatrix} 1 & -1\\ 0 & 2\\ 2 & 1 \end{bmatrix}\) จงหา (ก) \(AB\) และ \(BA\) (ข) \(CD\) (ค) \(DC\) ทำได้หรือไม่</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — หลักที่ \(k\) ของ \(AB\) คือ \(A\vec{b}_k\) (คูณ \(A\) กับหลักของ \(B\) ทีละหลัก) หรือใช้สูตรแถว–หลักก็ได้ ส่วนการคูณต้องตรวจว่า "หลักซ้าย = แถวขวา"</div>
      <ol class="steps">
        <li><span class="step-t">(ก) คูณแบบหลักต่อหลัก</span> หลักของ \(B\) คือ \(\vec{b}_1 = (0,1)^T\), \(\vec{b}_2 = (1,0)^T\):
        \[ AB = \begin{bmatrix} A\vec{b}_1 & A\vec{b}_2 \end{bmatrix} = \begin{bmatrix} 1(0)+2(1) & 1(1)+2(0)\\ 3(0)+4(1) & 3(1)+4(0) \end{bmatrix} = \begin{bmatrix} 2 & 1\\ 4 & 3 \end{bmatrix} \]</li>
        <li><span class="step-t">(ก) คูณกลับด้านเพื่อเทียบ</span>
        \[ BA = \begin{bmatrix} 0 & 1\\ 1 & 0 \end{bmatrix}\begin{bmatrix} 1 & 2\\ 3 & 4 \end{bmatrix} = \begin{bmatrix} 3 & 4\\ 1 & 2 \end{bmatrix} \neq AB \]
        เห็นชัดว่า <strong>\(AB \neq BA\)</strong> — \(B\) ทำหน้าที่ "สลับแถว" กับ \(A\) แต่ "สลับหลัก" กับ \(A^T\) ผลจึงต่างกัน</li>
        <li><span class="step-t">(ข) \(C\) ขนาด \(2\times 3\), \(D\) ขนาด \(3\times 2\) → คูณได้ ผลลัพธ์ \(2\times 2\)</span>
        \[ CD = \begin{bmatrix} 1(1)+2(0)+(-1)(2) & 1(-1)+2(2)+(-1)(1)\\ (-1)(1)+0(0)+3(2) & (-1)(-1)+0(2)+3(1) \end{bmatrix} = \begin{bmatrix} -1 & 2\\ 5 & 4 \end{bmatrix} \]</li>
        <li><span class="step-t">(ค) \(DC\): ขนาด \(3\times 2\) คูณ \(2\times 3\)</span> จำนวนหลักของ \(D\) (2) = จำนวนแถวของ \(C\) (2) → <strong>คูณได้</strong> และผลลัพธ์มีขนาด \(3\times 3\) (ไม่เท่า \(CD\) ที่เป็น \(2\times2\) อีกแล้ว — เห็นภาพว่าทำไม \(CD \neq DC\) เป็นเรื่องปกติ)</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ (ข):</span> เช็กสมาชิกแถว 1 หลัก 1 ของ \(CD\) ด้วยวิธีแถว–หลัก: แถว 1 ของ \(C\) คือ \((1, 2, -1)\) จุดกับหลัก 1 ของ \(D\) คือ \((1, 0, 2)\) → \(1 + 0 - 2 = -1\) ✓ ตรงกัน</div>
    </div>
  </article>
</section>

<section class="block" id="recipe">
  <h2><span class="h2-dot">⚡</span> สูตรสำเร็จ — ท่าที่ใช้ทำโจทย์หัวข้อนี้</h2>
  <div class="recipe">
    <div class="recipe-head">🪜 ท่าหลัก: ตรวจ "รวมเชิงเส้น / อยู่ใน Span / สมการมีผลเฉลย"</div>
    <div class="recipe-body">
      <ol>
        <li>เขียนเวกเตอร์ทั้งหมด<em>เรียงเป็นหลัก</em>ของเมทริกซ์ โดย \(\vec{b}\) ต่อท้ายเป็นหลักสุดท้าย → เกิดเมทริกซ์แต่งเติม \(\begin{bmatrix} \vec{v}_1 & \cdots & \vec{v}_p & \vec{b} \end{bmatrix}\)</li>
        <li>ลดรูปจนได้รูปแบบขั้นบันได</li>
        <li>ไม่มีแถว \(\begin{bmatrix} 0 & \dots & 0 & b \neq 0 \end{bmatrix}\) → <strong>มีผลเฉลย</strong> → \(\vec{b}\) เป็นการรวมเชิงเส้น (อยู่ใน Span) — ลดต่อจน RREF เพื่ออ่านน้ำหนักได้</li>
        <li>มีแถว \(\begin{bmatrix} 0 & \dots & 0 & b \neq 0 \end{bmatrix}\) → <strong>ไม่มีผลเฉลย</strong> → \(\vec{b}\) ไม่อยู่ใน Span</li>
      </ol>
    </div>
  </div>
  <div class="key-grid">
    <div class="key-card"><div class="k-title">ท่า: ตรวจแผ่ทั่ว \(\mathbb{R}^m\)</div>เรียงเวกเตอร์เป็นหลักของ \(A\) (ไม่ต้องมี \(\vec{b}\)) ลดรูปจน REF → มีตัวนำครบ<em>ทุกแถว</em> = แผ่ทั่ว (ทฤษฎีบท 1.3.4)</div>
    <div class="key-card"><div class="k-title">ท่า: เงื่อนไขบน \(b_1, b_2, b_3\)</div>ลดรูป \(\begin{bmatrix} A \mid \vec{b} \end{bmatrix}\) โดยให้ \(\vec{b}\) เป็นสัญลักษณ์ แถวสุดท้ายจะให้สมการเงื่อนไข เช่น \(-4b_1 - 2b_2 + b_3 = 0\)</div>
    <div class="key-card"><div class="k-title">ท่า: คูณเมทริกซ์ 2 สไตล์</div>แบบหลักต่อหลัก: \(AB = \begin{bmatrix} A\vec{b}_1 & \cdots & A\vec{b}_p \end{bmatrix}\) / แบบแถว–หลัก: \((AB)_{ik} =\) (แถว \(i\) ของ \(A\)) จุด (หลัก \(k\) ของ \(B\))</div>
    <div class="key-card"><div class="k-title">ท่า: ขนาดผลลัพธ์</div>\(m \times n\) คูณ \(n \times p\) = ได้ \(m \times p\) — จำนวนกลาง (\(n\)) ต้องตรงกัน ไม่งั้นคูณไม่ได้</div>
  </div>
</section>

<section class="block" id="practice">
  <h2><span class="h2-dot">🏋️</span> โจทย์ซ้อมมือ (6 ข้อ)</h2>
  <p class="small">ลองทำเองก่อน แล้วค่อยกดเปิดคำใบ้ → เฉลยทีละขั้น เมื่อทำได้แล้วติ๊ก ✓ เพื่อบันทึกความคืบหน้า</p>

  <article class="pr-card" data-pkey="p1-3-1">
    <div class="pr-head"><span class="pr-num">ข้อ 1</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>กำหนด \(\vec{v}_1 = \begin{bmatrix} 2\\ -1\\ 3 \end{bmatrix}\) และ \(\vec{v}_2 = \begin{bmatrix} 1\\ 0\\ -2 \end{bmatrix}\) จงหา (ก) \(3\vec{v}_1 - 2\vec{v}_2\) &nbsp; (ข) เวกเตอร์ \(\vec{w}\) ที่ทำให้ \(\vec{v}_1 - 2\vec{v}_2 + \vec{w} = \vec{0}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">(ข) ย้ายข้าง: \(\vec{w} = 2\vec{v}_2 - \vec{v}_1\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> การรวมเชิงเส้นคือบวกกันแบบตำแหน่งต่อตำแหน่งหลังคูณน้ำหนัก</p>
      <ol class="steps">
        <li><span class="step-t">(ก) คูณน้ำหนักก่อนแล้วบวก</span>
        \[ 3\vec{v}_1 - 2\vec{v}_2 = \begin{bmatrix} 6\\ -3\\ 9 \end{bmatrix} + \begin{bmatrix} -2\\ 0\\ 4 \end{bmatrix} = \begin{bmatrix} 4\\ -3\\ 13 \end{bmatrix} \]</li>
        <li><span class="step-t">(ข) แก้หา \(\vec{w}\)</span> \(\vec{w} = 2\vec{v}_2 - \vec{v}_1 = \begin{bmatrix} 2\\ 0\\ -4 \end{bmatrix} - \begin{bmatrix} 2\\ -1\\ 3 \end{bmatrix} = \begin{bmatrix} 0\\ 1\\ -7 \end{bmatrix}\)</li>
        <li><span class="step-t">ตรวจคำตอบ</span> \(\vec{v}_1 - 2\vec{v}_2 + \vec{w} = (2,-1,3) + (-2,0,4) + (0,1,-7) = (0,0,0) = \vec{0}\) ✓</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p1-3-2">
    <div class="pr-head"><span class="pr-num">ข้อ 2</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงคำนวณ \(A\vec{x}\) สองวิธี — แบบการรวมเชิงเส้นของหลัก และแบบแถว–หลัก — เมื่อ \(A = \begin{bmatrix} 4 & -1\\ -2 & 3\\ 1 & 1 \end{bmatrix}\), \(\vec{x} = \begin{bmatrix} 2\\ -3 \end{bmatrix}\) แล้วเทียบว่าได้คำตอบตรงกัน</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">หลักของ \(A\) คือ \((4, -2, 1)^T\) กับ \((-1, 3, 1)^T\) น้ำหนักคือ \(2\) กับ \(-3\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> \(A\vec{x} = x_1\vec{v}_1 + x_2\vec{v}_2\) (นิยาม) — สูตรแถว–หลักต้องให้ผลเดียวกันเสมอ</p>
      <ol class="steps">
        <li><span class="step-t">วิธีการรวมเชิงเส้น</span>
        \[ A\vec{x} = 2\begin{bmatrix} 4\\ -2\\ 1 \end{bmatrix} + (-3)\begin{bmatrix} -1\\ 3\\ 1 \end{bmatrix} = \begin{bmatrix} 8\\ -4\\ 2 \end{bmatrix} + \begin{bmatrix} 3\\ -9\\ -3 \end{bmatrix} = \begin{bmatrix} 11\\ -13\\ -1 \end{bmatrix} \]</li>
        <li><span class="step-t">วิธีแถว–หลัก</span>
        \[ \begin{bmatrix} 4(2) + (-1)(-3)\\ (-2)(2) + 3(-3)\\ 1(2) + 1(-3) \end{bmatrix} = \begin{bmatrix} 8 + 3\\ -4 - 9\\ 2 - 3 \end{bmatrix} = \begin{bmatrix} 11\\ -13\\ -1 \end{bmatrix} \]</li>
        <li><span class="step-t">สรุป</span> ทั้งสองวิธีได้ \(\begin{bmatrix} 11\\ -13\\ -1 \end{bmatrix}\) ตรงกัน ✓</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p1-3-3">
    <div class="pr-head"><span class="pr-num">ข้อ 3</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>กำหนด \(\vec{v}_1 = \begin{bmatrix} 2\\ -1 \end{bmatrix}\), \(\vec{v}_2 = \begin{bmatrix} -3\\ 4 \end{bmatrix}\), \(\vec{b} = \begin{bmatrix} -4\\ 7 \end{bmatrix}\) จงพิจารณาว่า \(\vec{b}\) เป็นการรวมเชิงเส้นของ \(\vec{v}_1, \vec{v}_2\) หรือไม่ แล้วเขียน \(\vec{b}\) ในรูปการรวมเชิงเส้น</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">เมทริกซ์แต่งเติมคือ \(\begin{bmatrix} 2 & -3 & -4\\ -1 & 4 & 7 \end{bmatrix}\) — ลดรูปแล้วอ่านน้ำหนัก</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> หา \(x_1, x_2\) ที่ \(x_1\vec{v}_1 + x_2\vec{v}_2 = \vec{b}\)</p>
      <ol class="steps">
        <li><span class="step-t">ลดรูป</span>
        \[ \begin{bmatrix} 2 & -3 & -4\\ -1 & 4 & 7 \end{bmatrix} \xrightarrow{\,R_{12}\,} \begin{bmatrix} -1 & 4 & 7\\ 2 & -3 & -4 \end{bmatrix} \xrightarrow{\,-R_1\,} \begin{bmatrix} 1 & -4 & -7\\ 2 & -3 & -4 \end{bmatrix} \xrightarrow{\,R_2 - 2R_1\,} \begin{bmatrix} 1 & -4 & -7\\ 0 & 5 & 10 \end{bmatrix} \xrightarrow{\,\tfrac{1}{5}R_2\,} \begin{bmatrix} 1 & -4 & -7\\ 0 & 1 & 2 \end{bmatrix} \xrightarrow{\,R_1 + 4R_2\,} \begin{bmatrix} 1 & 0 & 1\\ 0 & 1 & 2 \end{bmatrix} \]</li>
        <li><span class="step-t">อ่านน้ำหนัก</span> \(x_1 = 1,\; x_2 = 2\) → \(\vec{b}\) <strong>เป็นการรวมเชิงเส้น</strong> และ \(\vec{b} = \vec{v}_1 + 2\vec{v}_2\)</li>
        <li><span class="step-t">ตรวจคำตอบ</span> \((2,-1) + 2(-3,4) = (2-6,\; -1+8) = (-4, 7)\) ✓</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p1-3-4">
    <div class="pr-head"><span class="pr-num">ข้อ 4</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาค่าของ \(h\) ทั้งหมดที่ทำให้ \(\vec{b} = \begin{bmatrix} 2\\ 5\\ h \end{bmatrix}\) อยู่ในเซต \(\operatorname{Span}\{\vec{v}_1, \vec{v}_2\}\) เมื่อ \(\vec{v}_1 = \begin{bmatrix} 1\\ 2\\ 3 \end{bmatrix}\), \(\vec{v}_2 = \begin{bmatrix} 0\\ 1\\ 2 \end{bmatrix}\) และเมื่อพบแล้วจงเขียน \(\vec{b}\) ในรูปการรวมเชิงเส้น</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">ลดรูป \(\begin{bmatrix} \vec{v}_1 & \vec{v}_2 & \vec{b} \end{bmatrix} = \begin{bmatrix} 1 & 0 & 2\\ 2 & 1 & 5\\ 3 & 2 & h \end{bmatrix}\) แถวสุดท้ายจะเหลือ \(\begin{bmatrix} 0 & 0 & h - 8 \end{bmatrix}\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> \(\vec{b} \in \operatorname{Span}\{\vec{v}_1, \vec{v}_2\}\) ก็ต่อเมื่อระบบ \(\begin{bmatrix} \vec{v}_1 & \vec{v}_2 & \vec{b} \end{bmatrix}\) ต้องกัน</p>
      <ol class="steps">
        <li><span class="step-t">ลดรูปจนได้รูปแบบขั้นบันได</span>
        \[ \begin{bmatrix} 1 & 0 & 2\\ 2 & 1 & 5\\ 3 & 2 & h \end{bmatrix} \xrightarrow{\substack{R_2 - 2R_1\\ R_3 - 3R_1}} \begin{bmatrix} 1 & 0 & 2\\ 0 & 1 & 1\\ 0 & 2 & h - 6 \end{bmatrix} \xrightarrow{\,R_3 - 2R_2\,} \begin{bmatrix} 1 & 0 & 2\\ 0 & 1 & 1\\ 0 & 0 & h - 8 \end{bmatrix} \]</li>
        <li><span class="step-t">ตัดสิน</span> ระบบต้องกัน ก็ต่อเมื่อ \(h - 8 = 0\) นั่นคือ \(\vec{b} \in \operatorname{Span}\{\vec{v}_1, \vec{v}_2\}\) ก็ต่อเมื่อ \(h = 8\) (ถ้า \(h \neq 8\) จะเกิด \(0 = h - 8 \neq 0\))</li>
        <li><span class="step-t">หาน้ำหนักเมื่อ \(h = 8\)</span>
        \[ \begin{bmatrix} 1 & 0 & 2\\ 0 & 1 & 1\\ 0 & 0 & 0 \end{bmatrix} \;\Longrightarrow\; x_1 = 2,\; x_2 = 1 \]</li>
        <li><span class="step-t">สรุปและตรวจ</span> \(\vec{b} = 2\vec{v}_1 + \vec{v}_2 = (2, 4, 6) + (0, 1, 2) = (2, 5, 8)\) ✓ ตรงกับ \(h = 8\) พอดี</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p1-3-5">
    <div class="pr-head"><span class="pr-num">ข้อ 5</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>กำหนด \(A = \begin{bmatrix} 1 & -2\\ -2 & 4\\ 3 & -6 \end{bmatrix}\) จงพิจารณาว่าสมการ \(A\vec{x} = \vec{b}\) มีผลเฉลยสำหรับทุก ๆ \(\vec{b} = \begin{bmatrix} b_1\\ b_2\\ b_3 \end{bmatrix}\) หรือไม่ ถ้าไม่ จงหาเงื่อนไขบน \(b_1, b_2, b_3\) ที่ทำให้สมการมีผลเฉลย พร้อมทั้งตอบด้วยว่าหลักของ \(A\) แผ่ทั่ว \(\mathbb{R}^3\) หรือไม่</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">สังเกตว่าหลักที่ 2 ของ \(A\) เท่ากับ \(-2\) เท่าของหลักที่ 1 → ลดรูปแล้วจะเหลือตัวนำแค่หลักเดียว แถวที่ 2 และ 3 จะให้เงื่อนไข</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ลดรูป \(\begin{bmatrix} A \mid \vec{b} \end{bmatrix}\) โดย \(\vec{b}\) เป็นสัญลักษณ์</p>
      <ol class="steps">
        <li><span class="step-t">ลดรูปจนได้รูปแบบขั้นบันได</span>
        \[ \begin{bmatrix} 1 & -2 & b_1\\ -2 & 4 & b_2\\ 3 & -6 & b_3 \end{bmatrix} \xrightarrow{\substack{R_2 + 2R_1\\ R_3 - 3R_1}} \begin{bmatrix} 1 & -2 & b_1\\ 0 & 0 & b_2 + 2b_1\\ 0 & 0 & b_3 - 3b_1 \end{bmatrix} \]</li>
        <li><span class="step-t">ตัดสิน</span> มี 2 แถวแบบ \(\begin{bmatrix} 0 & 0 & \text{นิพจน์} \end{bmatrix}\) ระบบ<em>ไม่</em>มีผลเฉลยสำหรับทุก \(\vec{b}\) — มีผลเฉลยก็ต่อเมื่อ
        \[ b_2 + 2b_1 = 0 \quad \text{และ} \quad b_3 - 3b_1 = 0 \;\; \Big( \text{นั่นคือ } b_2 = -2b_1, \; b_3 = 3b_1 \Big) \]</li>
        <li><span class="step-t">ตรวจเงื่อนไข</span> \(\vec{b} = (1, -2, 3)\) ผ่านเงื่อนไข → ต้องมีผลเฉลย ลองแก้: \(x_1\begin{bmatrix}1\\-2\\3\end{bmatrix} + x_2\begin{bmatrix}-2\\4\\-6\end{bmatrix} = \begin{bmatrix}1\\-2\\3\end{bmatrix}\) มีผลเฉลย \(x_1 = 1, x_2 = 0\) ✓ / \(\vec{b} = (1, 0, 0)\) ไม่ผ่าน (\(0 + 2 \neq 0\)) → ไม่มีผลเฉลย ✓</li>
        <li><span class="step-t">แผ่ทั่วหรือไม่</span> รูปขั้นบันไดของ \(A\) มีตัวนำเพียงแถวเดียว → \(A\) <em>ไม่</em>มีตำแหน่งตัวหลักในทุกแถว → หลักของ \(A\) <strong>ไม่แผ่ทั่ว \(\mathbb{R}^3\)</strong> (ตรงทฤษฎีบท 1.3.4 — เพราะเวกเตอร์ 2 ตัวแผ่ได้มากที่สุดระนาบเดียว ไม่พอสำหรับ \(\mathbb{R}^3\))</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p1-3-6">
    <div class="pr-head"><span class="pr-num">ข้อ 6</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>กำหนด \(A = \begin{bmatrix} 1 & -2 & 0\\ 3 & 1 & -1 \end{bmatrix}\) และ \(B = \begin{bmatrix} 2 & 1\\ 0 & -1\\ 3 & 2 \end{bmatrix}\) จงหา \(AB\) แล้วตรวจสอบว่า \((AB)^T = B^TA^T\) จริงหรือไม่ (คำนวณ \(B^TA^T\) แยกต่างหาก)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(AB\) มีขนาด \(2\times2\) — หาหลักของ \(AB\) ด้วยการคูณ \(A\) กับหลักของ \(B\) ทีละหลัก</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> นิยาม \(AB = \begin{bmatrix} A\vec{b}_1 & A\vec{b}_2 \end{bmatrix}\) และสมบัติ \((AB)^T = B^TA^T\) (ทฤษฎีบท 1.3.6 ข้อ 4)</p>
      <ol class="steps">
        <li><span class="step-t">หาหลักที่ 1 ของ \(AB\)</span>
        \[ A\vec{b}_1 = A\begin{bmatrix} 2\\ 0\\ 3 \end{bmatrix} = 2\begin{bmatrix} 1\\ 3 \end{bmatrix} + 0\begin{bmatrix} -2\\ 1 \end{bmatrix} + 3\begin{bmatrix} 0\\ -1 \end{bmatrix} = \begin{bmatrix} 2\\ 6 - 3 \end{bmatrix} = \begin{bmatrix} 2\\ 3 \end{bmatrix} \]</li>
        <li><span class="step-t">หาหลักที่ 2 ของ \(AB\)</span>
        \[ A\vec{b}_2 = A\begin{bmatrix} 1\\ -1\\ 2 \end{bmatrix} = 1\begin{bmatrix} 1\\ 3 \end{bmatrix} + (-1)\begin{bmatrix} -2\\ 1 \end{bmatrix} + 2\begin{bmatrix} 0\\ -1 \end{bmatrix} = \begin{bmatrix} 1 + 2\\ 3 - 1 - 2 \end{bmatrix} = \begin{bmatrix} 3\\ 0 \end{bmatrix} \]</li>
        <li><span class="step-t">รวมผลและ transpose</span>
        \[ AB = \begin{bmatrix} 2 & 3\\ 3 & 0 \end{bmatrix} \;\Longrightarrow\; (AB)^T = \begin{bmatrix} 2 & 3\\ 3 & 0 \end{bmatrix} \]</li>
        <li><span class="step-t">คำนวณ \(B^TA^T\) แยกต่างหาก</span>
        \[ B^T = \begin{bmatrix} 2 & 0 & 3\\ 1 & -1 & 2 \end{bmatrix}, \quad A^T = \begin{bmatrix} 1 & 3\\ -2 & 1\\ 0 & -1 \end{bmatrix} \]
        \[ B^TA^T = \begin{bmatrix} 2(1)+0(-2)+3(0) & 2(3)+0(1)+3(-1)\\ 1(1)+(-1)(-2)+2(0) & 1(3)+(-1)(1)+2(-1) \end{bmatrix} = \begin{bmatrix} 2 & 3\\ 3 & 0 \end{bmatrix} \]</li>
        <li><span class="step-t">สรุป</span> \((AB)^T = B^TA^T = \begin{bmatrix} 2 & 3\\ 3 & 0 \end{bmatrix}\) จริงตามทฤษฎีบท ✓</li>
      </ol>
    </div></details>
  </article>
</section>
