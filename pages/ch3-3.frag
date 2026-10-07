<!-- meta
title: 3.3 ระบบสมการเชิงอนุพันธ์
ch: 3
section: 3.3
page: ch3-3.html
-->

<div class="crumb">บทที่ 3 · ค่าลักษณะเฉพาะและเวกเตอร์ลักษณะเฉพาะ</div>
<h1 class="page-title">3.3 ระบบสมการเชิงอนุพันธ์</h1>
<p class="page-sub">รางวัลของการแปลงเป็นทแยงมุม — เราจะใช้ค่า/เวกเตอร์ลักษณะเฉพาะแก้ระบบสมการเชิงอนุพันธ์
\(\vec{x}\,{}' = A\vec{x}\) ที่ปรากฏทั่วไปในวิชาวิศวกรรมและวิทยาศาสตร์ ได้อย่างเป็นระบบในไม่กี่บรรทัด</p>

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
      <li>เขียนระบบสมการเชิงอนุพันธ์ในรูปเมทริกซ์ \(\vec{x}\,{}' = A\vec{x}\)</li>
      <li>ตรวจว่า \(\vec{x}(t) = e^{\lambda t}\vec{v}\) เป็นผลเฉลยของระบบหรือไม่ และเข้าใจที่มาจาก eigenpair</li>
      <li>เขียนผลเฉลยทั่วไป \(\vec{x}(t) = C_1e^{\lambda_1 t}\vec{v}_1 + \cdots + C_ne^{\lambda_n t}\vec{v}_n\) เมื่อ \(A\) diagonalizable</li>
      <li>หาผลเฉลยเฉพาะจากเงื่อนไขเริ่มต้น \(\vec{x}(0)\) โดยแก้ระบบเชิงเส้นหาค่า \(C_1, \dots, C_n\)</li>
    </ul>
  </div>
</section>

<section class="block" id="lesson">
  <h2><span class="h2-dot">📖</span> บทเรียน</h2>

  <h3>1) ระบบสมการเชิงอนุพันธ์ในรูปเมทริกซ์</h3>
  <div class="box box-def">
    <div class="box-title">📐 รูปแบบที่เราสนใจ</div>
    <p>ระบบสมการเชิงอนุพันธ์เชิงเส้นสัมประสิทธิ์คงตัว</p>
    \[ \begin{aligned} x_1' &= a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n\\ &\;\;\vdots\\ x_n' &= a_{n1}x_1 + a_{n2}x_2 + \cdots + a_{nn}x_n \end{aligned} \qquad \Longleftrightarrow \qquad \vec{x}\,{}' = A\vec{x} \]
    <p>เมื่อ \(\vec{x}(t) = \begin{bmatrix} x_1(t)\\ \vdots\\ x_n(t) \end{bmatrix}\) และ \(\vec{x}\,{}' = \begin{bmatrix} x_1'(t)\\ \vdots\\ x_n'(t) \end{bmatrix}\) — ผลเฉลยคือฟังก์ชัน<em>เวกเตอร์</em>ของ \(t\) ที่ทำให้สมการจริงทุก \(t\)</p>
  </div>

  <div class="box box-idea">
    <div class="box-title">💡 ทำไม eigenpair จึงเกี่ยว</div>
    <p>ลองเดาผลเฉลยในรูป \(e^{\lambda t}\vec{v}\) เมื่อ \(\vec{v}\) เป็นเวกเตอร์คงตัว แล้วแทน:</p>
    \[ \vec{x}\,{}' = \lambda e^{\lambda t}\vec{v} \qquad \text{ขณะที่} \qquad A\vec{x} = e^{\lambda t}A\vec{v} \]
    <p>สองฝั่งเท่ากันก็ต่อเมื่อ \(\lambda\vec{v} = A\vec{v}\) — นั่นคือ <strong>\(\vec{v}\) ต้องเป็น eigenvector และ \(\lambda\) เป็น eigenvalue ของ \(A\) พอดี!</strong> เรื่องทั้งบทจึงมาประกอบกันตรงนี้</p>
  </div>

  <h3>2) ผลเฉลยทั่วไป (ทฤษฎีบท 3.3.1)</h3>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 3.3.1</div>
    <p>ให้ \(A\) ขนาด \(n\) <strong>แปลงเป็นทแยงมุมได้</strong> และ \(\vec{v}_1, \dots, \vec{v}_n\) เป็น eigenvectors อิสระ \(n\) ตัว สมนัยกับ \(\lambda_1, \dots, \lambda_n\) แล้วผลเฉลยทั่วไปของ \(\vec{x}\,{}' = A\vec{x}\) คือ</p>
    \[ \vec{x}(t) = C_1e^{\lambda_1 t}\vec{v}_1 + C_2e^{\lambda_2 t}\vec{v}_2 + \cdots + C_ne^{\lambda_n t}\vec{v}_n \qquad (C_1, \dots, C_n \in \mathbb{R}) \]
  </div>

  <h3>3) ผลเฉลยเฉพาะจากเงื่อนไขเริ่มต้น</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม — ผลเฉลยเฉพาะ (particular solution)</div>
    <p>เมื่อโจทย์กำหนด \(\vec{x}(0) = \begin{bmatrix} x_1(0)\\ \vdots\\ x_n(0) \end{bmatrix}\) ให้แทน \(t = 0\) (ทุก \(e^{\lambda \cdot 0} = 1\)) จะได้ระบบเชิงเส้น</p>
    \[ C_1\vec{v}_1 + C_2\vec{v}_2 + \cdots + C_n\vec{v}_n = \vec{x}(0) \;\Longleftrightarrow\; P\vec{C} = \vec{x}(0) \]
    <p>แก้หา \(\vec{C} = (C_1, \dots, C_n)^T\) (ระบบมีผลเฉลยชุดเดียวเสมอเพราะหลักของ \(P\) อิสระ) แล้วแทนกลับ — เขียนผลเฉลยเฉพาะได้ทั้งรูปเวกเตอร์หรือรูปกระจายสมการ</p>
  </div>

  <div class="box box-warn">
    <div class="box-title">⚠️ เงื่อนไขการใช้ทฤษฎีบท 3.3.1</div>
    <p>ทฤษฎีบทนี้ใช้ได้เมื่อ \(A\) <strong>แปลงเป็นทแยงมุมได้</strong> (มี eigenvectors อิสระครบ \(n\) ตัว) — ถ้า \(A\) diagonalizable ไม่ได้ (เช่น \(\begin{bmatrix} 1 & 1\\ 0 & 1 \end{bmatrix}\)) จะใช้สูตรนี้ตรง ๆ ไม่ได้ ต้องมีเครื่องมือเพิ่ม (อยู่นอกขอบเขตวิชานี้)</p>
    <p>และระวังจับคู่ผิด: \(e^{\lambda_i t}\) ต้องคู่กับ \(\vec{v}_i\) ตัวที่สมนัยกันเท่านั้น</p>
  </div>
</section>

<section class="block" id="examples">
  <h2><span class="h2-dot">✏️</span> ตัวอย่างโจทย์</h2>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 1</span><span class="tag easy">ง่าย</span><span class="ex-title">เขียนระบบเป็น \(\vec{x}\,{}' = A\vec{x}\) และหาผลเฉลยทั่วไป</span></div>
    <div class="ex-body">
      <div class="ex-q">จงหาผลเฉลยทั่วไปของระบบสมการเชิงอนุพันธ์
      \[ \begin{aligned} x_1' &= x_1 - x_2\\ x_2' &= -4x_1 + 4x_2 \end{aligned} \]</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — เขียนเมทริกซ์ \(A\) → หา eigenpair ทั้งหมด → เขียนผลรวม \(C_ie^{\lambda_i t}\vec{v}_i\) กลยุทธ์ของข้อนี้: แปลระบบสมการอนุพันธ์ให้เป็นภาษาเมทริกซ์ก่อน (สัมประสิทธิ์แต่ละสมการ = แถวของ \(A\)) แล้วงานที่เหลือคือเรื่องเดิมของบทที่ 3 ล้วน ๆ: หาค่าลักษณะเฉพาะจาก \(\det(A - \lambda I) = 0\) หาเวกเตอร์ลักษณะเฉพาะทีละค่า แล้วจับคู่เข้าสูตร \(C_ie^{\lambda_i t}\vec{v}_i\) — ทุก eigenpair คู่หนึ่งให้พจน์หนึ่งพจน์ของคำตอบ</div>
      <ol class="steps">
        <li><span class="step-t">รูปเมทริกซ์</span> ตัวเลขหน้า \(x_1, x_2\) ในแต่ละสมการกลายเป็นแถวของ \(A\): สมการแรก \(x_1' = 1\cdot x_1 + (-1)\cdot x_2\) ให้แถวบน \((1, -1)\), สมการที่สอง \(x_2' = (-4)\cdot x_1 + 4\cdot x_2\) ให้แถวล่าง \((-4, 4)\) โดย \(\vec{x}\,{}'\) (อ่านว่า x-ไพรม์ = อนุพันธ์เทียบ \(t\)) คือเวกเตอร์ของ \(x_1'(t), x_2'(t)\):
        \[ \vec{x}\,{}' = \begin{bmatrix} 1 & -1\\ -4 & 4 \end{bmatrix}\vec{x} \]</li>
        <li><span class="step-t">หาค่าลักษณะเฉพาะ</span> det = ทแยงลง − ทแยงขึ้น = \((1-\lambda)(4-\lambda) - (-1)(-4)\) — กระจาย: \(4 - 5\lambda + \lambda^2\) และ \((-1)(-4) = 4\) (ลบคูณลบได้บวก) จึงได้ \(\lambda^2 - 5\lambda + 4 - 4 = \lambda^2 - 5\lambda\) — ดึง \(\lambda\) ออกเป็นตัวประกอบร่วม:
        \[ \det(A - \lambda I_2) = (1-\lambda)(4-\lambda) - 4 = \lambda^2 - 5\lambda + 4 - 4 = \lambda^2 - 5\lambda = \lambda(\lambda - 5) = 0 \;\Longrightarrow\; \lambda = 0, \; 5 \]
        (ผลคูณเป็นศูนย์เมื่อตัวใดตัวหนึ่งเป็นศูนย์ → \(\lambda = 0\) หรือ \(\lambda = 5\)) — \(\lambda = 0\) ได้เพราะ \(\det A = 1\cdot4 - (-1)(-4) = 0\) พอดี — ระบบนี้มี "สมดุลคงตัว"</li>
        <li><span class="step-t">หา eigenvector ของ \(\lambda = 5\)</span> ลบ 5 ที่ทแยง: \(1 \to -4\), \(4 \to -1\) — สังเกตว่าแถวล่าง \((-4, -1)\) ซ้ำกับแถวบน จึงเหลือสมการเดียว \(-4x_1 - x_2 = 0\) ย้ายข้างให้สวย: \(4x_1 + x_2 = 0 \Rightarrow x_2 = -4x_1\) เลือก \(x_1 = 1\) → \(x_2 = -4\):
        \[ A - 5I_2 = \begin{bmatrix} -4 & -1\\ -4 & -1 \end{bmatrix} \;\Longrightarrow\; 4x_1 + x_2 = 0 \;\Longrightarrow\; \vec{v}_1 = \begin{bmatrix} 1\\ -4 \end{bmatrix} \]</li>
        <li><span class="step-t">หา eigenvector ของ \(\lambda = 0\)</span> ลบ \(0\cdot I\) ก็คือไม่ลบอะไรเลย \(A - 0I_2 = A\) — แถวบนบอก \(x_1 - x_2 = 0 \Rightarrow x_1 = x_2\) เลือก \(x_1 = 1\) → \(x_2 = 1\):
        \[ A - 0I_2 = A \;\Longrightarrow\; x_1 - x_2 = 0 \;\Longrightarrow\; \vec{v}_2 = \begin{bmatrix} 1\\ 1 \end{bmatrix} \]
        (เวกเตอร์ \((1, 1)^T\) พิเศษ: \(A\vec{v}_2 = \vec{0}\) — เป็นจุดสมดุลที่การแปลงพาไปหยุดนิ่ง)</li>
        <li><span class="step-t">ผลเฉลยทั่วไป</span> แต่ละ eigenpair ให้พจน์ \(C_ie^{\lambda_i t}\vec{v}_i\) — จับคู่ให้ถูกตัว: \(\lambda_1 = 5\) คู่กับ \(\vec{v}_1 = (1, -4)^T\), \(\lambda_2 = 0\) คู่กับ \(\vec{v}_2 = (1, 1)^T\) โดย \(e^{0\cdot t} = e^0 = 1\) (จำนวนใดยกกำลังศูนย์ได้ 1) พจน์ที่สองจึงเหลือแค่ค่าคงตัว \(C_2\begin{bmatrix} 1\\ 1 \end{bmatrix}\):
        \[ \vec{x}(t) = C_1e^{5t}\begin{bmatrix} 1\\ -4 \end{bmatrix} + C_2e^{0\cdot t}\begin{bmatrix} 1\\ 1 \end{bmatrix} = C_1e^{5t}\begin{bmatrix} 1\\ -4 \end{bmatrix} + C_2\begin{bmatrix} 1\\ 1 \end{bmatrix} \qquad (C_1, C_2 \in \mathbb{R}) \]</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> \(A(1,-4)^T = (1 + 4,\; -4 - 16)^T = (5, -20)^T = 5(1, -4)^T\) ✓ (ช่องแรก: \(1(1) + (-1)(-4) = 1 + 4 = 5\), ช่องสอง: \(-4(1) + 4(-4) = -4 - 16 = -20\)) และ \(A(1,1)^T = (0, 0)^T = 0\cdot(1,1)^T\) ✓ — สรุปคำตอบ: \(\vec{x}(t) = C_1e^{5t}(1, -4)^T + C_2(1, 1)^T\) เมื่อ \(C_1, C_2\) เป็นค่าคงตัวใด ๆ (พจน์ \(e^{5t}\) โตขึ้นเรื่อย ๆ ส่วนพจน์ \(C_2(1,1)^T\) คงตัวเป็นจุดสมดุล)</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2</span><span class="tag easy">ง่าย</span><span class="ex-title">ตรวจว่าฟังก์ชันเวกเตอร์เป็นผลเฉลยหรือไม่</span></div>
    <div class="ex-body">
      <div class="ex-q">กำหนดระบบ \(\vec{x}\,{}' = A\vec{x}\) เมื่อ \(A = \begin{bmatrix} 2 & 1\\ 1 & 2 \end{bmatrix}\) จงตรวจว่า \(\vec{x}(t) = e^{3t}\begin{bmatrix} 1\\ 1 \end{bmatrix}\) เป็นผลเฉลยของระบบหรือไม่</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — หาอนุพันธ์ฝั่งซ้าย คูณ \(A\) ฝั่งขวา แล้วเทียบกันทุก \(t\) กลยุทธ์ของข้อนี้: นิยามของ "ผลเฉลย" คือฟังก์ชันที่ทำให้สมการจริง — การตรวจจึงเป็นงานสองฝั่ง: ฝั่งซ้ายหาอนุพันธ์ (ใช้กฎลูกโซ่ \(d/dt\,e^{kt} = ke^{kt}\)) ฝั่งขวาแค่คูณเมทริกซ์กับเวกเตอร์ แล้ววางเทียบกันทีละช่อง ถ้าเท่ากันทุกช่องทุก \(t\) ก็ตอบว่าใช่</div>
      <ol class="steps">
        <li><span class="step-t">ฝั่งซ้าย</span> หาอนุพันธ์เทียบ \(t\) — เวกเตอร์ \(\begin{bmatrix} 1\\ 1 \end{bmatrix}\) เป็นค่าคงตัว (ไม่มี \(t\)) อนุพันธ์จึงเกิดกับ \(e^{3t}\) เท่านั้น ใช้กฎลูกโซ่: อนุพันธ์ของ \(e^{3t}\) คือ \(3e^{3t}\) (คูณด้วยอนุพันธ์ภายใน ซึ่งคือ 3):
        \[ \vec{x}\,{}'(t) = 3e^{3t}\begin{bmatrix} 1\\ 1 \end{bmatrix} \]</li>
        <li><span class="step-t">ฝั่งขวา</span> คูณ \(A\) กับเวกเตอร์: ช่องบน = \(2(1) + 1(1) = 2 + 1 = 3\), ช่องล่าง = \(1(1) + 2(1) = 1 + 2 = 3\) — สังเกตว่า \(e^{3t}\) เป็นสเกลาร์ ดึงออกหน้าเมทริกซ์ได้เลย:
        \[ A\vec{x}(t) = e^{3t}\begin{bmatrix} 2 & 1\\ 1 & 2 \end{bmatrix}\begin{bmatrix} 1\\ 1 \end{bmatrix} = e^{3t}\begin{bmatrix} 3\\ 3 \end{bmatrix} = 3e^{3t}\begin{bmatrix} 1\\ 1 \end{bmatrix} \]</li>
        <li><span class="step-t">สรุป</span> ฝั่งซ้ายได้ \(3e^{3t}\begin{bmatrix} 1\\ 1 \end{bmatrix}\) ฝั่งขวาก็ได้ \(3e^{3t}\begin{bmatrix} 1\\ 1 \end{bmatrix}\) — เท่ากันทุกช่องและทุก \(t\) → <strong>เป็นผลเฉลย</strong> — <em>เพราะ</em>\((1,1)^T\) เป็น eigenvector ของ \(A\) กับ \(\lambda = 3\) พอดี (จากตัวอย่าง 1 ของหัวข้อ 3.2: \(A\vec{v} = 3\vec{v}\)) เมื่อเอามาคูณ \(e^{3t}\) สองฝั่งจึงตรงกันโดยโครงสร้าง ไม่ใช่เรื่องบังเอิญ — สรุปคำตอบ: \(\vec{x}(t) = e^{3t}(1, 1)^T\) เป็นผลเฉลยของระบบ (และตรวจเพิ่มที่ \(t = 0\): \(\vec{x}(0) = (1,1)^T\), \(\vec{x}\,{}'(0) = (3,3)^T\), \(A\vec{x}(0) = (3,3)^T\) ✓)</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3</span><span class="tag hard">ยาก</span><span class="ex-title">ผลเฉลยทั่วไป + ผลเฉลยเฉพาะ 2 ตัวแปร</span></div>
    <div class="ex-body">
      <div class="ex-q">จงหาผลเฉลยทั่วไปของระบบ
      \[ \begin{aligned} x_1' &= x_1 + 2x_2\\ x_2' &= 4x_1 + 3x_2 \end{aligned} \]
      และหาผลเฉลยเฉพาะเมื่อ \(x_1(0) = 2,\; x_2(0) = 1\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — eigenpair → ผลเฉลยทั่วไป → แทน \(t = 0\) → แก้หา \(C_1, C_2\) → แทนกลับ กลยุทธ์ของข้อนี้: ครึ่งแรกคือสูตรเดิมของหัวข้อ (หา eigenpair แล้วเขียนพจน์ \(C_ie^{\lambda_i t}\vec{v}_i\)) ครึ่งหลังคือการ "ล็อก" คำตอบให้ตรงกับจุดเริ่มต้น: แทน \(t = 0\) ทำให้ทุก \(e^{\lambda\cdot 0} = 1\) หายไป เหลือระบบเชิงเส้นธรรมดา \(C_1\vec{v}_1 + C_2\vec{v}_2 = \vec{x}(0)\) ที่แก้หาค่าคงตัวได้ทันที</div>
      <ol class="steps">
        <li><span class="step-t">หาค่าลักษณะเฉพาะ</span> det = \((1-\lambda)(3-\lambda) - (2)(4)\) — กระจาย: \(3 - \lambda - 3\lambda + \lambda^2 = \lambda^2 - 4\lambda + 3\) แล้วลบ 8: \(3 - 8 = -5\) — แยกตัวประกอบ: หาสองจำนวนคูณกันได้ \(-5\) บวกกันได้ \(-4\) → คือ \(-5\) กับ \(1\) (ทดลองแทน \(\lambda = 5\): \(25 - 20 - 5 = 0\) ✓):
        \[ \det(A - \lambda I_2) = (1-\lambda)(3-\lambda) - 8 = \lambda^2 - 4\lambda - 5 = (\lambda - 5)(\lambda + 1) = 0 \;\Longrightarrow\; \lambda = 5, \; -1 \]</li>
        <li><span class="step-t">หา eigenvectors</span> กรณี \(\lambda = 5\): ลบ 5 ที่ทแยง → \(A - 5I_2 = \begin{bmatrix} -4 & 2\\ 4 & -2 \end{bmatrix}\) (ช่อง \(1 \to -4\), \(3 \to -2\)) ใช้ \(R_2 + R_1\) (\(4 + (-4) = 0\), \(-2 + 2 = 0\)) ได้แถวศูนย์ สมการ \(-4x_1 + 2x_2 = 0 \Rightarrow 2x_2 = 4x_1 \Rightarrow x_2 = 2x_1\) เลือก \(x_1 = 1\) → \(\vec{v}_1 = (1, 2)^T\); กรณี \(\lambda = -1\): <em>บวก</em> 1 ที่ทแยง → \(A + I_2 = \begin{bmatrix} 2 & 2\\ 4 & 4 \end{bmatrix}\) ใช้ \(R_2 - 2R_1\) ได้แถวศูนย์ สมการ \(2x_1 + 2x_2 = 0 \Rightarrow x_1 = -x_2\) เลือก \(x_2 = -1\) → \(\vec{v}_2 = (1, -1)^T\)</li>
        <li><span class="step-t">ผลเฉลยทั่วไป</span> แต่ละ eigenpair ให้พจน์หนึ่งพจน์ โดยจับคู่ \(\lambda = 5\) กับ \((1, 2)^T\) และ \(\lambda = -1\) กับ \((1, -1)^T\) (พจน์ \(e^{-t}\) จะเล็กลงเรื่อย ๆ เมื่อ \(t\) โต เพราะ \(e^{-t}\) คือการหารด้วย \(e^t\)):
        \[ \vec{x}(t) = C_1e^{5t}\begin{bmatrix} 1\\ 2 \end{bmatrix} + C_2e^{-t}\begin{bmatrix} 1\\ -1 \end{bmatrix} \]</li>
        <li><span class="step-t">แทน \(t = 0\) เทียบเงื่อนไขเริ่มต้น</span> แทน \(t = 0\): \(e^{5\cdot0} = e^0 = 1\) และ \(e^{-0} = 1\) พจน์เอกซ์โพเนนเชียลหายหมด เหลือ \(C_1(1, 2)^T + C_2(1, -1)^T = (C_1 + C_2,\; 2C_1 - C_2)\) ให้เท่ากับ \(\vec{x}(0) = (2, 1)^T\) เทียบทีละช่อง:
        \[ \vec{x}(0) = C_1\begin{bmatrix} 1\\ 2 \end{bmatrix} + C_2\begin{bmatrix} 1\\ -1 \end{bmatrix} = \begin{bmatrix} 2\\ 1 \end{bmatrix} \;\Longrightarrow\; \begin{aligned} C_1 + C_2 &= 2\\ 2C_1 - C_2 &= 1 \end{aligned} \]</li>
        <li><span class="step-t">แก้ระบบ</span> บวกสองสมการเข้าหากัน (เลือกบวกเพราะ \(+C_2\) กับ \(-C_2\) หักล้างกันหาย): \((C_1 + C_2) + (2C_1 - C_2) = 2 + 1 \Rightarrow 3C_1 = 3 \Rightarrow C_1 = 1\) แล้วแทนกลับสมการแรก: \(1 + C_2 = 2 \Rightarrow C_2 = 1\)</li>
        <li><span class="step-t">ผลเฉลยเฉพาะ</span> แทน \(C_1 = 1, C_2 = 1\) กลับสู่ผลเฉลยทั่วไป แล้วกระจายเป็นสมการสเกลาร์: พจน์แรก \(1\cdot e^{5t}(1, 2)^T = (e^{5t},\; 2e^{5t})\), พจน์สอง \(1\cdot e^{-t}(1, -1)^T = (e^{-t},\; -e^{-t})\):
        \[ \vec{x}(t) = e^{5t}\begin{bmatrix} 1\\ 2 \end{bmatrix} + e^{-t}\begin{bmatrix} 1\\ -1 \end{bmatrix} \qquad \text{หรือกระจาย: } x_1(t) = e^{5t} + e^{-t}, \;\; x_2(t) = 2e^{5t} - e^{-t} \]</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> \(t = 0\): \(x_1(0) = e^0 + e^0 = 1 + 1 = 2\) ✓, \(x_2(0) = 2 - 1 = 1\) ✓ และเช็กสมการแรกที่ \(t = 0\): LHS \(x_1'(t) = 5e^{5t} - e^{-t}\) (อนุพันธ์ของ \(e^{5t}\) คือ \(5e^{5t}\), ของ \(e^{-t}\) คือ \(-e^{-t}\)) จึงได้ \(x_1'(0) = 5 - 1 = 4\); RHS \(x_1(0) + 2x_2(0) = 2 + 2 = 4\) ✓ — สรุปคำตอบ: \(\vec{x}(t) = e^{5t}(1, 2)^T + e^{-t}(1, -1)^T\) หรือ \(x_1(t) = e^{5t} + e^{-t},\; x_2(t) = 2e^{5t} - e^{-t}\)</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 4</span><span class="tag hard">ยาก</span><span class="ex-title">3×3 ผลเฉลยเฉพาะ (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">จงหาผลเฉลยเฉพาะของระบบสมการเชิงอนุพันธ์
      \[ \begin{aligned} x_1' &= 5x_1 - 6x_2 - 6x_3\\ x_2' &= -x_1 + 4x_2 + 2x_3\\ x_3' &= 3x_1 - 6x_2 - 4x_3 \end{aligned} \]
      เมื่อ \(x_1(0) = 4,\; x_2(0) = 2,\; x_3(0) = -1\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — ระบบนี้มี \(A\) ที่ diagonalizable ด้วย \(D = \operatorname{diag}(1, 2, 2)\), \(P = \begin{bmatrix} 3 & 2 & 2\\ -1 & 1 & 0\\ 3 & 0 & 1 \end{bmatrix}\) — เขียนผลเฉลยทั่วไปก่อน แล้วแก้หา \(C\) จากเงื่อนไขเริ่มต้น กลยุทธ์ของข้อนี้: โจทย์ให้ eigenpair มาพร้อมแล้ว (ค่าซ้ำ \(\lambda = 2\) แต่ได้เวกเตอร์อิสระ 2 ตัว จึงใช้ทฤษฎีบท 3.3.1 ได้) งานที่เหลือคือการแทน \(t = 0\) แล้วแก้ระบบ \(3\times3\) หา \(C_1, C_2, C_3\) — เทคนิคคือเลือกสมการที่มีตัวแปรน้อยที่สุดไล่แทนค่าก่อน</div>
      <ol class="steps">
        <li><span class="step-t">รูปเมทริกซ์และ eigenpair</span> อ่านสัมประสิทธิ์ของแต่ละสมการเป็นแถวของ \(A\) แล้วแก้ \((A - \lambda I)\vec{x} = \vec{0}\) แต่ละค่าจะได้ eigenpair — ทดสอบยืนยันด้วยเลขจริง: \(A\vec{v}_1 = A(3,-1,3)^T\): ช่องแรก = \(5(3) + (-6)(-1) + (-6)(3) = 15 + 6 - 18 = 3\), ช่องสอง = \(-1(3) + 4(-1) + 2(3) = -3 - 4 + 6 = -1\), ช่องสาม = \(3(3) + (-6)(-1) + (-4)(3) = 9 + 6 - 12 = 3\) → ได้ \((3, -1, 3)^T = 1\cdot\vec{v}_1\) ✓ สมนัยกับ \(\lambda = 1\) และสำหรับ \(\lambda = 2\) ที่ซ้ำ: \(A\vec{v}_2 = A(2,1,0)^T = (10 - 6,\; -2 + 4,\; 6 - 6)^T = (4, 2, 0)^T = 2\vec{v}_2\) ✓, \(A\vec{v}_3 = A(2,0,1)^T = (10 - 6,\; -2 + 2,\; 6 - 4)^T = (4, 0, 2)^T = 2\vec{v}_3\) ✓
        \[ A = \begin{bmatrix} 5 & -6 & -6\\ -1 & 4 & 2\\ 3 & -6 & -4 \end{bmatrix}, \qquad \lambda = 1, 2, 2 \]
        \[ \vec{v}_1 = \begin{bmatrix} 3\\ -1\\ 3 \end{bmatrix} \;(\lambda = 1), \qquad \vec{v}_2 = \begin{bmatrix} 2\\ 1\\ 0 \end{bmatrix}, \; \vec{v}_3 = \begin{bmatrix} 2\\ 0\\ 1 \end{bmatrix} \;(\lambda = 2 \text{ ซ้ำ แต่ได้ 2 เวกเตอร์อิสระ} \Rightarrow \text{diagonalizable}) \]
        (<em>เพราะอะไรถึง diagonalizable ได้</em>: \(\dim E_2 = 2\) เท่ากับจำนวนครั้งที่ \(\lambda = 2\) ซ้ำพอดี — เวกเตอร์อิสระรวมได้ \(1 + 2 = 3\) ตัวครบ \(n = 3\) จึงใช้ทฤษฎีบท 3.3.1 ได้)</li>
        <li><span class="step-t">ผลเฉลยทั่วไป</span> แต่ละ eigenpair ให้พจน์ \(C_ie^{\lambda_i t}\vec{v}_i\) — สังเกตว่า \(\vec{v}_2\) กับ \(\vec{v}_3\) สมนัยกับ \(\lambda = 2\) ตัวเดียวกัน พจน์ของทั้งคู่จึงมี \(e^{2t}\) เหมือนกัน (คู่ละคนละ \(C\)):
        \[ \vec{x}(t) = C_1e^{t}\begin{bmatrix} 3\\ -1\\ 3 \end{bmatrix} + C_2e^{2t}\begin{bmatrix} 2\\ 1\\ 0 \end{bmatrix} + C_3e^{2t}\begin{bmatrix} 2\\ 0\\ 1 \end{bmatrix} \]</li>
        <li><span class="step-t">แทน \(t = 0\) เทียบเงื่อนไขเริ่มต้น</span> ทุก \(e^{\lambda\cdot0} = e^0 = 1\) หายหมด เหลือการรวมเชิงเส้นของสามเวกเตอร์ให้ได้ \(\vec{x}(0) = (4, 2, -1)^T\) เทียบทีละช่อง: ช่องแรก \(3C_1 + 2C_2 + 2C_3 = 4\), ช่องสอง \(-C_1 + C_2 + 0\cdot C_3 = 2\), ช่องสาม \(3C_1 + 0\cdot C_2 + C_3 = -1\):
        \[ C_1\begin{bmatrix} 3\\ -1\\ 3 \end{bmatrix} + C_2\begin{bmatrix} 2\\ 1\\ 0 \end{bmatrix} + C_3\begin{bmatrix} 2\\ 0\\ 1 \end{bmatrix} = \begin{bmatrix} 4\\ 2\\ -1 \end{bmatrix} \;\Longrightarrow\; \begin{aligned} 3C_1 + 2C_2 + 2C_3 &= 4\\ -C_1 + C_2 &= 2\\ 3C_1 \phantom{+2C_2} + C_3 &= -1 \end{aligned} \]</li>
        <li><span class="step-t">แก้ระบบ (จากสมการที่ 2 และ 3 แทนในสมการที่ 1)</span> สมการที่ 2 มี \(C_2\) เดี่ยว ๆ: \(C_2 = 2 + C_1\) (ย้ายข้าง \(-C_1\)); สมการที่ 3 มี \(C_3\) เดี่ยว ๆ: \(C_3 = -1 - 3C_1\) — แทนทั้งคู่ลงสมการที่ 1 (คูณกระจายระวังเครื่องหมาย: \(2(2 + C_1) = 4 + 2C_1\), \(2(-1 - 3C_1) = -2 - 6C_1\)):
        \[ 3C_1 + 2(2 + C_1) + 2(-1 - 3C_1) = 4 \;\Longrightarrow\; 3C_1 + 4 + 2C_1 - 2 - 6C_1 = 4 \;\Longrightarrow\; -C_1 = 2 \;\Longrightarrow\; C_1 = -2 \]
        ดังนั้น \(C_2 = 2 + (-2) = 0\), \(C_3 = -1 - 3(-2) = -1 + 6 = 5\) (ลบซ้อนลบ = บวก)</li>
        <li><span class="step-t">ผลเฉลยเฉพาะ</span> แทน \(C_1 = -2, C_2 = 0, C_3 = 5\) กลับ — พจน์ \(C_2\) เป็นศูนย์จึงหายไปทั้งพจน์ แล้วกระจายเป็นสมการสเกลาร์: พจน์แรก \(-2e^t(3, -1, 3)^T = (-6e^t,\; 2e^t,\; -6e^t)\), พจน์สุดท้าย \(5e^{2t}(2, 0, 1)^T = (10e^{2t},\; 0,\; 5e^{2t})\):
        \[ \vec{x}(t) = -2e^{t}\begin{bmatrix} 3\\ -1\\ 3 \end{bmatrix} + 5e^{2t}\begin{bmatrix} 2\\ 0\\ 1 \end{bmatrix} \qquad \text{หรือ} \qquad \begin{aligned} x_1(t) &= -6e^t + 10e^{2t}\\ x_2(t) &= 2e^t\\ x_3(t) &= -6e^t + 5e^{2t} \end{aligned} \]</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> \(t = 0\): \((x_1, x_2, x_3) = (-6+10, 2, -6+5) = (4, 2, -1)\) ✓ ตรงเงื่อนไขเริ่มต้นทุกช่อง และเช็กสมการที่ 2 ที่ \(t = 0\): LHS \(x_2'(t) = 2e^t\) จึงได้ \(x_2'(0) = 2\); RHS \(-x_1(0) + 4x_2(0) + 2x_3(0) = -4 + 8 - 2 = 2\) ✓ — สรุปคำตอบ: \(x_1(t) = -6e^t + 10e^{2t},\; x_2(t) = 2e^t,\; x_3(t) = -6e^t + 5e^{2t}\)</div>
    </div>
  </article>
</section>

  <section class="block" id="textbook">
    <h2><span class="h2-dot">📚</span> ตัวอย่างจากตำรา (พีชคณิต.pdf)</h2>
    <p class="page-sub">โจทย์ทุกข้อคัดมาตรงจากตำราประกอบการสอน โดยเรียงจากง่ายไปยาก — ใต้โจทย์แต่ละข้อมี "อธิบายโจทย์ง่าย ๆ" ช่วยให้เห็นว่าโจทย์ถามอะไรก่อนลงมือทำ</p>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">ท่าพิเศษ: ทฤษฎีบท 3.3.1</span><span class="tag book">จากตำรา</span><span class="tag easy">ง่าย</span><span class="ex-title">สูตรผลเฉลยทั่วไปของ \(\vec{x}\,{}' = A\vec{x}\) — จำท่านี้ให้ขึ้นใจ</span></div>
      <div class="ex-body">
        <div class="ex-q">ทฤษฎีบท 3.3.1 (ในตำรา): สำหรับระบบสมการเชิงอนุพันธ์ในรูป \(\vec{x}\,{}' = A\vec{x}\) เมื่อ \(A\) เป็นเมทริกซ์จัตุรัสขนาด \(n\) ซึ่งสามารถแปลงเป็นทแยงมุมได้ ถ้า \(\vec{v}_i\) เป็นเวกเตอร์ลักษณะเฉพาะที่สมนัยกับค่าลักษณะเฉพาะ \(\lambda_i\), \(i = 1, 2, \dots, n\) แล้วผลเฉลยของระบบสมการเชิงอนุพันธ์นี้อยู่ในรูป</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — การ์ดนี้ไม่ใช่โจทย์ แต่เป็น "ท่าพิเศษ" ที่ตำราสรุปไว้: ทุก eigenpair คู่หนึ่ง \((\lambda_i, \vec{v}_i)\) ให้พจน์หนึ่งพจน์ของคำตอบคือ \(C_ie^{\lambda_i t}\vec{v}_i\) — ผลเฉลยทั่วไปคือผลรวมของทุกพจน์ โดย \(C_i\) เป็นค่าคงตัวที่จะถูกล็อกโดยเงื่อนไขเริ่มต้น (เทียบกับสมการเดี่ยว \(x' = ax\) ที่ผลเฉลยคือ \(x = Ce^{at}\) — ทฤษฎีบทนี้คือรุ่นเวกเตอร์ของมัน)</div>
        <ol class="steps">
          <li><span class="step-t">สูตรที่ต้องจำ</span>
          \[ \vec{x}(t) = C_1e^{\lambda_1 t}\vec{v}_1 + C_2e^{\lambda_2 t}\vec{v}_2 + \cdots + C_ne^{\lambda_n t}\vec{v}_n \qquad (C_1, \dots, C_n \text{ เป็นจำนวนจริง}) \]
          เงื่อนไขในการใช้: \(A\) แปลงเป็นทแยงมุมได้ (มีเวกเตอร์ลักษณะเฉพาะอิสระครบ \(n\) ตัว)</li>
          <li><span class="step-t">ทำไมพจน์ \(e^{\lambda t}\vec{v}\) ถึงใช้ได้</span> แทนกลับแล้วเทียบ: ฝั่งซ้าย \(\vec{x}\,{}' = \lambda e^{\lambda t}\vec{v}\) (กฎลูกโซ่: อนุพันธ์ของ \(e^{\lambda t}\) คือ \(\lambda e^{\lambda t}\)) ฝั่งขวา \(A\vec{x} = e^{\lambda t}A\vec{v} = e^{\lambda t}\lambda\vec{v}\) เพราะ \(A\vec{v} = \lambda\vec{v}\) — สองฝั่งตรงกันโดยโครงสร้าง ความรู้ 3.2 จึงจ่ายคืนทันที</li>
          <li><span class="step-t">ลำดับการทำโจทย์</span> (1) เขียนระบบเป็น \(\vec{x}\,{}' = A\vec{x}\) (2) หา eigenpair ครบ \(n\) คู่ (งานของ 3.2) (3) เขียนผลรวมพจน์ \(C_ie^{\lambda_i t}\vec{v}_i\) (4) ถ้ามีเงื่อนไขเริ่มต้น \(\vec{x}(0)\) ให้แทน \(t = 0\) (ทุก \(e^{\lambda \cdot 0} = 1\)) แก้ระบบเชิงเส้นหา \(C_i\) (5) ตรวจคำตอบที่ \(t = 0\) กับอย่างน้อยหนึ่งสมการ</li>
          <li><span class="step-t">ระวังจับคู่ผิด</span> \(e^{\lambda_i t}\) ต้องคู่กับ \(\vec{v}_i\) ที่สมนัยกันเท่านั้น — ถ้า \(\lambda\) ซ้ำแต่ได้เวกเตอร์อิสระหลายตัว (เช่น \(\lambda = 2\) ให้ \(\vec{v}_2, \vec{v}_3\)) ให้เขียนพจน์เท่าจำนวนเวกเตอร์โดยใช้ \(e^{2t}\) ซ้ำ</li>
        </ol>
        <div class="verify"><span class="lbl">สรุปคำตอบ:</span> จำสั้น ๆ ว่า "eigenpair → พจน์" — ค่าลักษณะเฉพาะขึ้นเป็นเลขชี้กำลังของ \(e\), เวกเตอร์ลักษณะเฉพาะคูณหน้า, ค่าคงตัว \(C\) มาจากเงื่อนไขเริ่มต้น</div>
      </div>
    </article>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3.3.1</span><span class="tag book">จากตำรา</span><span class="tag easy">ง่าย</span><span class="ex-title">ผลเฉลยทั่วไปของระบบ \(2 \times 2\)</span></div>
      <div class="ex-body">
        <div class="ex-q">จงหาผลเฉลยทั่วไปของระบบสมการเชิงอนุพันธ์
        \[ \begin{aligned} x_1' &= x_1 - x_2\\ x_2' &= 2x_1 + 4x_2 \end{aligned} \]</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — โจทย์ให้ระบบสองสมการแล้วถามหา "คำตอบทั้งตระกูล" (ผลเฉลยทั่วไป) วิธีคือทำตามท่าพิเศษด้านบนทีละขั้น: อ่านสัมประสิทธิ์เป็นเมทริกซ์ \(A\) → หาค่าลักษณะเฉพาะจาก \(\det(A - \lambda I) = 0\) → หาเวกเตอร์ลักษณะเฉพาะทีละค่า → จับคู่เข้าสูตร \(C_1e^{\lambda_1 t}\vec{v}_1 + C_2e^{\lambda_2 t}\vec{v}_2\)</div>
        <ol class="steps">
          <li><span class="step-t">รูปเมทริกซ์และสมการลักษณะเฉพาะ</span> ตัวเลขหน้า \(x_1, x_2\) ของแต่ละสมการ = แถวของ \(A\) — det = \((1 - \lambda)(4 - \lambda) - (-1)(2)\) — กระจาย: \(4 - 5\lambda + \lambda^2\) แล้วลบด้วย \(-2\) คือบวก 2:
          \[ \det(A - \lambda I_2) = (1 - \lambda)(4 - \lambda) + 2 = \lambda^2 - 5\lambda + 6 = (\lambda - 2)(\lambda - 3) = 0 \;\Longrightarrow\; \lambda = 2, 3 \]</li>
          <li><span class="step-t">เวกเตอร์ลักษณะเฉพาะของ \(\lambda = 2\)</span> ลบ 2 ที่ทแยง → \(\begin{bmatrix} -1 & -1\\ 2 & 2 \end{bmatrix}\) — แถวล่างเป็น \(-2\) เท่าของแถวบน เหลือสมการ \(x_1 + x_2 = 0 \Rightarrow x_1 = -x_2\) เลือก \(x_2 = 1\):
          \[ E_2 = \operatorname{Span}\left\{ \begin{bmatrix} -1\\ 1 \end{bmatrix} \right\} \]</li>
          <li><span class="step-t">เวกเตอร์ลักษณะเฉพาะของ \(\lambda = 3\)</span> ลบ 3 ที่ทแยง → \(\begin{bmatrix} -2 & -1\\ 2 & 1 \end{bmatrix}\) — แถวล่างเป็น \(-1\) เท่าของแถวบน เหลือสมการ \(2x_1 + x_2 = 0 \Rightarrow x_2 = -2x_1\) เลือก \(x_1 = -1\) ได้ \(x_2 = 2\) (หรือ \(x_1 = 1, x_2 = -2\) — สเกลาร์เท่ากัน):
          \[ E_3 = \operatorname{Span}\left\{ \begin{bmatrix} -1\\ 2 \end{bmatrix} \right\} \]</li>
          <li><span class="step-t">ประกอบผลเฉลยทั่วไป</span> จับคู่ \(\lambda = 2\) กับ \((-1, 1)^T\) และ \(\lambda = 3\) กับ \((-1, 2)^T\) — ตำรายังเขียนอีกรูปด้วย \(P = \begin{bmatrix} -1 & -1\\ 1 & 2 \end{bmatrix}\), \(D = \operatorname{diag}(2, 3)\): \(\vec{x} = P\begin{bmatrix} e^{2t} & 0\\ 0 & e^{3t} \end{bmatrix}P^{-1}\vec{c}\) ซึ่งกระจายแล้วได้รูปเดียวกัน:
          \[ \begin{bmatrix} x_1\\ x_2 \end{bmatrix} = C_1e^{2t}\begin{bmatrix} -1\\ 1 \end{bmatrix} + C_2e^{3t}\begin{bmatrix} -1\\ 2 \end{bmatrix} \qquad (C_1, C_2 \text{ เป็นจำนวนจริง}) \]</li>
        </ol>
        <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(\vec{x}(t) = C_1e^{2t}(-1, 1)^T + C_2e^{3t}(-1, 2)^T\) — ตรงตามตำรา (ตรวจ: \(A(-1, 1)^T = (-1 - 1,\; -2 + 4)^T = (-2, 2)^T = 2(-1, 1)^T\) ✓ และ \(A(-1, 2)^T = (-1 - 2,\; -2 + 8)^T = (-3, 6)^T = 3(-1, 2)^T\) ✓)</div>
      </div>
    </article>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">แบบฝึกหัด 3.3 ข้อ 1 (ก),(ข)</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">ผลเฉลยทั่วไป — ข้อ ก เจอ \(\lambda = 0\) / ข้อ ข เจอรากอตรภาค</span></div>
      <div class="ex-body">
        <div class="ex-q">จงหาผลเฉลยทั่วไปของระบบสมการเชิงอนุพันธ์ต่อไปนี้
        \[ \text{(ก)}\;\; \begin{aligned} x_1' &= x_1 - x_2\\ x_2' &= -4x_1 + 4x_2 \end{aligned} \qquad\qquad
        \text{(ข)}\;\; \begin{aligned} x_1' &= 3x_1 + x_2\\ x_2' &= -2x_1 - x_2 \end{aligned} \]</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — ท่าเดียวกับตัวอย่าง 3.3.1 สองรอบ แต่ตั้งใจโยนสองสถานการณ์ให้เจอ: ข้อ (ก) แยกตัวประกอบได้ \(\lambda(\lambda - 5)\) จึงมี \(\lambda = 0\) — อย่าตกใจ แค่พจน์ \(e^{0 \cdot t} = 1\) ทำให้เกิด "จุดสมดุลคงตัว" · ข้อ (ข) แยกตัวประกอบด้วยจำนวนตรงไม่ได้ ต้องใช้สูตรกำลังสองได้รากอตรภาค \(\lambda = 1 \pm \sqrt{2}\) — วิธีทำไม่เปลี่ยน เลขเปลี่ยนเท่านั้น</div>
        <ol class="steps">
          <li><span class="step-t">(ก) ค่าลักษณะเฉพาะ</span> \(A = \begin{bmatrix} 1 & -1\\ -4 & 4 \end{bmatrix}\) — det = \((1 - \lambda)(4 - \lambda) - (-1)(-4)\) — กระจาย: \(4 - 5\lambda + \lambda^2\) และ \((-1)(-4) = 4\) (ลบคูณลบได้บวก) จึงได้ \(\lambda^2 - 5\lambda + 4 - 4 = \lambda^2 - 5\lambda = \lambda(\lambda - 5) = 0 \Rightarrow \lambda = 0, 5\) (สังเกต \(\det A = 0\) จึงมี \(\lambda = 0\) เสมอ)</li>
          <li><span class="step-t">(ก) เวกเตอร์ลักษณะเฉพาะ</span> \(\lambda = 5\): \(A - 5I_2 = \begin{bmatrix} -4 & -1\\ -4 & -1 \end{bmatrix}\) → \(4x_1 + x_2 = 0 \Rightarrow x_2 = -4x_1\) → \((1, -4)^T\) · \(\lambda = 0\): \(A - 0I_2 = A\) → \(x_1 - x_2 = 0\) → \((1, 1)^T\) (ตรวจ: \(A(1,1)^T = (0, 0)^T = 0 \cdot (1,1)^T\) ✓ — ทิศที่ถูก "ยุบเป็นศูนย์" = จุดสมดุล):
          \[ \vec{y} = C_1e^{5t}\begin{bmatrix} 1\\ -4 \end{bmatrix} + C_2e^{0 \cdot t}\begin{bmatrix} 1\\ 1 \end{bmatrix} = C_1e^{5t}\begin{bmatrix} 1\\ -4 \end{bmatrix} + C_2\begin{bmatrix} 1\\ 1 \end{bmatrix} \]</li>
          <li><span class="step-t">(ข) ค่าลักษณะเฉพาะ</span> \(A = \begin{bmatrix} 3 & 1\\ -2 & -1 \end{bmatrix}\) — trace \(= 3 + (-1) = 2\), det \(= (3)(-1) - (1)(-2) = -3 + 2 = -1\) → \(\lambda^2 - 2\lambda - 1 = 0\) แยกตัวประกอบตรงไม่ได้ ใช้สูตร \(\lambda = \tfrac{2 \pm \sqrt{4 + 4}}{2} = 1 \pm \sqrt{2}\)</li>
          <li><span class="step-t">(ข) เวกเตอร์ลักษณะเฉพาะ</span> \(\lambda = 1 + \sqrt{2}\): \(A - \lambda I_2 = \begin{bmatrix} 2 - \sqrt{2} & 1\\ -2 & -2 - \sqrt{2} \end{bmatrix}\) — แถวบน: \((2 - \sqrt{2})x_1 + x_2 = 0 \Rightarrow x_2 = (\sqrt{2} - 2)x_1\) → \((1, -2 + \sqrt{2})^T\) · เช่นเดียวกัน \(\lambda = 1 - \sqrt{2}\) ให้ \((1, -2 - \sqrt{2})^T\) (ตรวจตัวเลข: \((2 - 1.414) = 0.586\) และ \(\sqrt{2} - 2 = -0.586\) สอดคล้อง ✓):
          \[ \vec{y} = C_1e^{(1 + \sqrt{2})t}\begin{bmatrix} 1\\ -2 + \sqrt{2} \end{bmatrix} + C_2e^{(1 - \sqrt{2})t}\begin{bmatrix} 1\\ -2 - \sqrt{2} \end{bmatrix} \]</li>
        </ol>
        <div class="verify"><span class="lbl">สรุปคำตอบ:</span> (ก) \(\vec{y} = C_1e^{5t}(1, -4)^T + C_2e^{0 \cdot t}(1, 1)^T\) · (ข) \(\vec{y} = C_1e^{(1 + \sqrt{2})t}(1, -2 + \sqrt{2})^T + C_2e^{(1 - \sqrt{2})t}(1, -2 - \sqrt{2})^T\) — ตรงกับคำตอบท้ายบทของตำรา</div>
      </div>
    </article>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3.3.2</span><span class="tag book">จากตำรา</span><span class="tag hard">ยาก</span><span class="ex-title">ผลเฉลยเฉพาะ \(3 \times 3\) จากเงื่อนไขเริ่มต้น</span></div>
      <div class="ex-body">
        <div class="ex-q">จงหาผลเฉลยเฉพาะของระบบสมการเชิงอนุพันธ์ \(\vec{x}\,{}' = A\vec{x}\) เมื่อ
        \[ A = \begin{bmatrix} 5 & -6 & -6\\ -1 & 4 & 2\\ 3 & -6 & -4 \end{bmatrix} \]
        โดยมีเงื่อนไขเริ่มต้น \(x_1(0) = 4,\; x_2(0) = 2,\; x_3(0) = -1\)</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — เมทริกซ์ \(A\) ตัวนี้คือตัวเดียวกับตัวอย่าง 3.2.3 (ก) และ 3.2.5 (ก) ที่เรามี eigenpair ครบแล้ว (ตำราตั้งใจเชื่อมสามข้อนี้): \(\lambda = 1, 2, 2\) กับเวกเตอร์ \((3, -1, 3)^T, (2, 1, 0)^T, (2, 0, 1)^T\) — งานของข้อนี้จึงเริ่มที่ "เขียนผลเฉลยทั่วไป" แล้วแทน \(t = 0\) แก้ระบบ \(3 \times 3\) หาค่า \(C_1, C_2, C_3\) — เทคนิคคือเริ่มจากสมการที่มีตัวแปรน้อยที่สุด</div>
        <ol class="steps">
          <li><span class="step-t">ผลเฉลยทั่วไปจาก eigenpair ที่มีอยู่</span> จากตัวอย่าง 3.2.5 (ก): \(D = \operatorname{diag}(1, 2, 2)\), \(P = \begin{bmatrix} 3 & 2 & 2\\ -1 & 1 & 0\\ 3 & 0 & 1 \end{bmatrix}\) — โดยทฤษฎีบท 3.3.1:
          \[ \begin{bmatrix} x_1\\ x_2\\ x_3 \end{bmatrix} = C_1e^{t}\begin{bmatrix} 3\\ -1\\ 3 \end{bmatrix} + C_2e^{2t}\begin{bmatrix} 2\\ 1\\ 0 \end{bmatrix} + C_3e^{2t}\begin{bmatrix} 2\\ 0\\ 1 \end{bmatrix} \]
          (สังเกตพจน์สองกับสามมี \(e^{2t}\) เหมือนกัน เพราะสมนัยกับ \(\lambda = 2\) ตัวเดียวกัน)</li>
          <li><span class="step-t">แทน \(t = 0\) เทียบเงื่อนไขเริ่มต้น</span> ทุก \(e^{\lambda \cdot 0} = 1\) หายหมด เหลือระบบเชิงเส้น \(C_1(3, -1, 3)^T + C_2(2, 1, 0)^T + C_3(2, 0, 1)^T = (4, 2, -1)^T\) เทียบทีละช่อง:
          \[ \begin{aligned} 3C_1 + 2C_2 + 2C_3 &= 4\\ -C_1 + C_2 &= 2\\ 3C_1 + C_3 &= -1 \end{aligned} \]</li>
          <li><span class="step-t">แก้ระบบ</span> สมการที่ 2 ให้ \(C_2 = 2 + C_1\) (ย้าย \(-C_1\) ข้ามไปเป็น \(+C_1\)) · สมการที่ 3 ให้ \(C_3 = -1 - 3C_1\) · แทนทั้งคู่ลงสมการที่ 1 (กระจายระวังเครื่องหมาย: \(2(2 + C_1) = 4 + 2C_1\), \(2(-1 - 3C_1) = -2 - 6C_1\)):
          \[ 3C_1 + 4 + 2C_1 - 2 - 6C_1 = 4 \;\Longrightarrow\; -C_1 + 2 = 4 \;\Longrightarrow\; C_1 = -2 \]
          ดังนั้น \(C_2 = 2 + (-2) = 0\) และ \(C_3 = -1 - 3(-2) = -1 + 6 = 5\)</li>
          <li><span class="step-t">ผลเฉลยเฉพาะ</span> พจน์ \(C_2 = 0\) หายไปทั้งพจน์:
          \[ \begin{bmatrix} x_1\\ x_2\\ x_3 \end{bmatrix} = -2e^{t}\begin{bmatrix} 3\\ -1\\ 3 \end{bmatrix} + 5e^{2t}\begin{bmatrix} 2\\ 0\\ 1 \end{bmatrix} \]</li>
        </ol>
        <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(\vec{x}(t) = -2e^{t}(3, -1, 3)^T + 5e^{2t}(2, 0, 1)^T\) — ตรงตามตำรา (ตรวจ \(t = 0\): \((-6 + 10,\; 2 + 0,\; -6 + 5)^T = (4, 2, -1)^T\) ✓ ตรงเงื่อนไขเริ่มต้นทุกช่อง และตรวจสมการที่ 2 ที่ \(t = 0\): LHS \(x_2'(0) = 2\), RHS \(-4 + 8 - 2 = 2\) ✓)</div>
      </div>
    </article>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">แบบฝึกหัด 3.3 ข้อ 2 (ก)</span><span class="tag book">จากตำรา</span><span class="tag hard">ยาก</span><span class="ex-title">ผลเฉลยเฉพาะ \(3 \times 3\) — ทำเองครบทุกขั้น</span></div>
      <div class="ex-body">
        <div class="ex-q">จงหาผลเฉลยเฉพาะของระบบสมการเชิงอนุพันธ์
        \[ \begin{aligned} x_1' &= x_1 - 3x_2 + 2x_3\\ x_2' &= -x_2\\ x_3' &= -x_2 - 2x_3 \end{aligned} \]
        เมื่อ \(x_1(0) = -3,\; x_2(0) = 0,\; x_3(0) = 3\)</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — โจทย์เต็มรูป: ไม่มีใครให้ eigenpair มาล่วงหน้า ต้องหาเองทั้งหมดแล้วปิดท้ายด้วยเงื่อนไขเริ่มต้น — ข้อดีคือ \(A\) มีหลักแรกเกือบโล่ง (\(x_1\) ไม่ปรากฏในสองสมการล่าง) ทำให้ \(\det(A - \lambda I)\) กระจายตามหลักแรกได้ง่าย</div>
        <ol class="steps">
          <li><span class="step-t">รูปเมทริกซ์และค่าลักษณะเฉพาะ</span> \(A = \begin{bmatrix} 1 & -3 & 2\\ 0 & -1 & 0\\ 0 & -1 & -2 \end{bmatrix}\) — กระจายโคแฟกเตอร์ตาม<em>หลักแรก</em> (ช่อง \(2, 3\) ของแถวล่างเป็นศูนย์ จึงเหลือพจน์เดียว):
          \[ \det(A - \lambda I_3) = (1 - \lambda)\begin{vmatrix} -1 - \lambda & 0\\ -1 & -2 - \lambda \end{vmatrix} = (1 - \lambda)(-1 - \lambda)(-2 - \lambda) = 0 \;\Longrightarrow\; \lambda = 1, -1, -2 \]</li>
          <li><span class="step-t">เวกเตอร์ลักษณะเฉพาะทีละค่า</span> \(\lambda = 1\): \(A - I_3 = \begin{bmatrix} 0 & -3 & 2\\ 0 & -2 & 0\\ 0 & -1 & -2 \end{bmatrix}\) — แถวกลาง \(-2x_2 = 0 \Rightarrow x_2 = 0\) แล้วแถวล่าง \(-2x_3 = 0 \Rightarrow x_3 = 0\) เหลือ \(x_1\) เสรี → \((1, 0, 0)^T\) · \(\lambda = -2\): \(A + 2I_3 = \begin{bmatrix} 3 & -3 & 2\\ 0 & 1 & 0\\ 0 & -1 & 0 \end{bmatrix}\) — แถวกลาง \(x_2 = 0\) แล้วแถวบน \(3x_1 + 2x_3 = 0 \Rightarrow x_1 = -\tfrac{2}{3}x_3\) เลือก \(x_3 = -3\) (ทำให้เศษส่วนหาย ได้ \(x_1 = 2\)) → \((2, 0, -3)^T\) · \(\lambda = -1\): \(A + I_3 = \begin{bmatrix} 2 & -3 & 2\\ 0 & 0 & 0\\ 0 & -1 & -1 \end{bmatrix}\) — แถวล่าง \(-x_2 - x_3 = 0 \Rightarrow x_2 = -x_3\) แล้วแถวบน \(2x_1 - 3(-x_3) + 2x_3 = 2x_1 + 5x_3 = 0 \Rightarrow x_1 = -\tfrac{5}{2}x_3\) เลือก \(x_3 = 2\) → \((-5, -2, 2)^T\)</li>
          <li><span class="step-t">ผลเฉลยทั่วไปแล้วแทน \(t = 0\)</span> จับคู่ \(\lambda = 1 \to (1, 0, 0)^T\), \(\lambda = -2 \to (2, 0, -3)^T\), \(\lambda = -1 \to (-5, -2, 2)^T\):
          \[ \vec{x}(t) = C_1e^{t}\begin{bmatrix} 1\\ 0\\ 0 \end{bmatrix} + C_2e^{-2t}\begin{bmatrix} 2\\ 0\\ -3 \end{bmatrix} + C_3e^{-t}\begin{bmatrix} -5\\ -2\\ 2 \end{bmatrix} \]
          แทน \(t = 0\) เทียบ \(\vec{x}(0) = (-3, 0, 3)^T\) เทียบทีละช่อง: ช่องกลาง \(-2C_3 = 0 \Rightarrow C_3 = 0\) · ช่องล่าง \(-3C_2 + 2C_3 = 3 \Rightarrow -3C_2 = 3 \Rightarrow C_2 = -1\) · ช่องบน \(C_1 + 2C_2 - 5C_3 = -3 \Rightarrow C_1 - 2 = -3 \Rightarrow C_1 = -1\)</li>
          <li><span class="step-t">ผลเฉลยเฉพาะ</span> พจน์ \(C_3 = 0\) หายไปทั้งพจน์ แล้วกระจายเป็นสมการสเกลาร์:
          \[ \vec{x}(t) = -e^{t}\begin{bmatrix} 1\\ 0\\ 0 \end{bmatrix} - e^{-2t}\begin{bmatrix} 2\\ 0\\ -3 \end{bmatrix} \qquad \text{หรือ} \qquad x_1(t) = -e^{t} - 2e^{-2t}, \;\; x_2(t) = 0, \;\; x_3(t) = 3e^{-2t} \]</li>
        </ol>
        <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(\vec{x}(t) = -e^{t}(1, 0, 0)^T - e^{-2t}(2, 0, -3)^T\) โดย \(C_1 = -1, C_2 = -1, C_3 = 0\) — ตรงกับคำตอบท้ายบทของตำรา (ตรวจ \(t = 0\): \((-1 - 2, 0, 3)^T = (-3, 0, 3)^T\) ✓ และสมการที่ 2: LHS \(x_2'(t) = 0\), RHS \(-x_2(t) = 0\) ✓)</div>
      </div>
    </article>
  </section>

  <section class="block" id="apply">
    <h2><span class="h2-dot">🌍</span> เอาไปใช้ทำอะไร — โจทย์ประยุกต์</h2>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">🐟 บ่อเพาะพันธุ์ปลา 2 บ่อ — อัตราโตเชื่อมกัน</span><span class="tag app">ใช้จริง</span><span class="tag mid">กลาง</span><span class="ex-title">ระยะยาว ทั้งระบบล็อกอยู่ในทิศเวกเตอร์ลักษณะเฉพาะของ \(\lambda\) ใหญ่สุด</span></div>
      <div class="ex-body">
        <div class="ex-q">ฟาร์มมีบ่อเพาะพันธุ์ 2 บ่อเชื่อมกันด้วยรางน้ำ ปลาว่ายข้ามไปมาและช่วยเสริมกัน ทำให้อัตราการเปลี่ยนแปลงของแต่ละบ่อขึ้นกับปริมาณปลาทั้งสองบ่อ (หน่วย: ร้อยตัว) โดยประมาณ
        \[ \begin{aligned} x_1' &= 3x_1 + x_2\\ x_2' &= x_1 + 3x_2 \end{aligned} \]
        วันนี้บ่อ 1 มีปลา 10 หน่วย บ่อ 2 มี 2 หน่วย จงหาปริมาณปลาแต่ละบ่อเมื่อเวลา \(t\) ผ่านไป แล้วบอกว่าระยะยาวสองบ่อจะเป็นอย่างไร</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — โจทย์ให้ระบบ \(\vec{x}\,{}' = A\vec{x}\) พร้อมเงื่อนไขเริ่มต้น — ทำตามสูตรของหัวข้อนี้ทีเดียวจบ: หา eigenpair ของ \(A\), แตก \(\vec{x}(0)\) เป็นผสมของเวกเตอร์ลักษณะเฉพาะ แล้วอ่านพฤติกรรมระยะยาวจาก \(\lambda\) ที่ใหญ่สุด (พจน์ \(e^{\lambda t}\) ที่ \(\lambda\) ใหญ่จะโตเร็วกว่าจนเหลือครองเกม)</div>
        <ol class="steps">
          <li><span class="step-t">หาค่าลักษณะเฉพาะ</span> \(A = \begin{bmatrix} 3 & 1\\ 1 & 3 \end{bmatrix}\) — det = \((3 - \lambda)^2 - 1 = \lambda^2 - 6\lambda + 8 = (\lambda - 2)(\lambda - 4) = 0 \Rightarrow \lambda = 2, 4\)</li>
          <li><span class="step-t">เวกเตอร์ลักษณะเฉพาะ</span> \(\lambda = 4\): \(A - 4I_2 = \begin{bmatrix} -1 & 1\\ 1 & -1 \end{bmatrix}\) → \(x_1 = x_2\) → \((1, 1)^T\) ("โหมดบวก": สองบ่อโตพร้อมกัน) · \(\lambda = 2\): \(A - 2I_2 = \begin{bmatrix} 1 & 1\\ 1 & 1 \end{bmatrix}\) → \(x_1 = -x_2\) → \((1, -1)^T\) ("โหมดต่าง": สองบ่อแย่งกัน)</li>
          <li><span class="step-t">แตก \(\vec{x}(0) = (10, 2)^T\) แล้วเขียนผลเฉลย</span> แก้ \(a(1, 1)^T + b(1, -1)^T = (10, 2)^T\): \(a + b = 10\), \(a - b = 2\) → บวกสองสมการ \(2a = 12 \Rightarrow a = 6\), \(b = 4\):
          \[ \vec{x}(t) = 6e^{4t}\begin{bmatrix} 1\\ 1 \end{bmatrix} + 4e^{2t}\begin{bmatrix} 1\\ -1 \end{bmatrix} \]
          (ตรวจ \(t = 0\): \(6 + 4 = 10\), \(6 - 4 = 2\) ✓ และแทนกลับสมการแรกที่ \(t = 0\): LHS \(x_1'(0) = 6(4) + 4(2) = 32\), RHS \(3(10) + 2 = 32\) ✓)</li>
          <li><span class="step-t">อ่านพฤติกรรมระยะยาว</span> พจน์ \(e^{4t}\) โตเร็วกว่า \(e^{2t}\) มาก เมื่อ \(t\) ใหญ่ \(\vec{x}(t) \approx 6e^{4t}(1, 1)^T\) — สัดส่วนปลาสองบ่อเข้าใกล้ \(1:1\) (ที่ \(t = 1\) สัดส่วนแล้วเป็น \(1.20\), ที่ \(t = 2\) เป็น \(1.02\)) และทั้งฟาร์มโตด้วยอัตรา \(e^{4t}\) เท่ากันหมด — "ความต่าง" ระหว่างบ่อ (โหมด \(e^{2t}\)) สัมพัทธ์เล็กลงจนมองแทบไม่เห็น</li>
        </ol>
        <div class="verify"><span class="lbl">เห็นไหมว่า...</span> ระบบที่อัตราเติบโตเชื่อมกัน (ประชากรหลายกลุ่ม วงจรไฟฟ้า การแพร่ความร้อนระหว่างจุด) ระยะยาวมักล็อกอยู่ในทิศเวกเตอร์ลักษณะเฉพาะของค่าลักษณะเฉพาะที่ใหญ่สุด — นี่คือเหตุผลที่วิศวกรและนักนิเวศจ่ายเวลาไปกับการหา eigenpair ของ \(\lambda\) สูงสุด เพราะตัวเดียวบอกอนาคตทั้งระบบ</div>
      </div>
    </article>

    <article class="ex-card">
      <div class="ex-head"><span class="ex-badge">💊 ยา 2 ช่อง: ลำไส้ → กระแสเลือด</span><span class="tag app">ใช้จริง</span><span class="tag hard">ยาก</span><span class="ex-title">คำนวณจังหวะยา: ความเข้มพีคเกิดตอนไหน</span></div>
      <div class="ex-body">
        <div class="ex-q">หลังกินยาแคปซูล ยาจะอยู่ 2 ช่อง: ในลำไส้ (\(x_1\)) และในกระแสเลือด (\(x_2\)) — ลำไส้ดูดซึมยาเข้าเลือดด้วยอัตราสัมพัทธ์ 2 ต่อชั่วโมง (\(x_1' = -2x_1\)) และเลือดได้รับยาจากลำไส้ \(2x_1\) ขณะที่ไตขับยาออกด้วยอัตรา 1 (\(x_2' = 2x_1 - x_2\)) กินยา 10 หน่วย (เริ่มที่ \(x_1(0) = 10, x_2(0) = 0\)) จงหา \(x_1(t), x_2(t)\) และหาว่าความเข้มยาในเลือดพีคเมื่อใด เท่ากับเท่าไร</div>
        <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — โจทย์สองชั้น: ชั้นแรกแก้ระบบ \(\vec{x}\,{}' = A\vec{x}\) ด้วย eigenpair ตามสูตร (เมทริกซ์เป็นสามเหลี่ยม อ่าน \(\lambda\) จากทแยงได้เลย) ชั้นที่สองคือคำถามจริงของเภสัชกร: "ความเข้มยาในเลือดพีคเมื่อไร" — คือการหาจุดสูงสุดของ \(x_2(t)\) โดยตั้ง \(x_2'(t) = 0\)</div>
        <ol class="steps">
          <li><span class="step-t">ค่าลักษณะเฉพาะ</span> \(A = \begin{bmatrix} -2 & 0\\ 2 & -1 \end{bmatrix}\) เป็นเมทริกซ์สามเหลี่ยม → อ่านจากทแยง: \(\lambda = -2, -1\) (สองค่าติดลบแปลว่าทุกอย่างรีดลงสู่ศูนย์ — ยาถูกขับออกหมดในที่สุด สมเหตุสมผล)</li>
          <li><span class="step-t">เวกเตอร์ลักษณะเฉพาะ</span> \(\lambda = -2\): \(A + 2I_2 = \begin{bmatrix} 0 & 0\\ 2 & 1 \end{bmatrix}\) → \(2x_1 + x_2 = 0 \Rightarrow x_2 = -2x_1\) → \((1, -2)^T\) · \(\lambda = -1\): \(A + I_2 = \begin{bmatrix} -1 & 0\\ 2 & 0 \end{bmatrix}\) → \(x_1 = 0\) → \((0, 1)^T\) (ตรวจ: \(A(1, -2)^T = (-2, 2 + 2)^T = (-2, 4)^T = -2(1, -2)^T\) ✓)</li>
          <li><span class="step-t">ใส่เงื่อนไขเริ่มต้น \(\vec{x}(0) = (10, 0)^T\)</span> แก้ \(C_1(1, -2)^T + C_2(0, 1)^T = (10, 0)^T\): ช่องบน \(C_1 = 10\) · ช่องล่าง \(-2(10) + C_2 = 0 \Rightarrow C_2 = 20\):
          \[ \vec{x}(t) = 10e^{-2t}\begin{bmatrix} 1\\ -2 \end{bmatrix} + 20e^{-t}\begin{bmatrix} 0\\ 1 \end{bmatrix} \;\Longrightarrow\; x_1(t) = 10e^{-2t}, \;\; x_2(t) = -20e^{-2t} + 20e^{-t} = 20\left(e^{-t} - e^{-2t}\right) \]</li>
          <li><span class="step-t">หาจังหวะพีค</span> อนุพันธ์ \(x_2'(t) = -20e^{-t} + 40e^{-2t}\) (อนุพันธ์ของ \(-20e^{-2t}\) คือ \(+40e^{-2t}\) เพราะลบคูณลบ) ตั้งเป็นศูนย์: \(40e^{-2t} = 20e^{-t} \Rightarrow 2e^{-2t} = e^{-t} \Rightarrow 2 = e^{t} \Rightarrow t = \ln 2 \approx 0.69\) ชั่วโมง — แทนกลับ: \(x_2(\ln 2) = 20\left(\tfrac{1}{2} - \tfrac{1}{4}\right) = 5\) หน่วย (ตรวจแทนตัวเลข \(t = 0.693\): \(20(e^{-0.693} - e^{-1.386}) = 20(0.5 - 0.25) = 5\) ✓)</li>
        </ol>
        <div class="verify"><span class="lbl">เห็นไหมว่า...</span> สูตรที่เภสัชกรรมใช้จริง (two-compartment model) คือระบบ \(\vec{x}\,{}' = A\vec{x}\) แบบนี้เป๊ะ ๆ แค่มีหลายช่องและค่าอัตราจากข้อมูลจริง — คำถาม "กี่ชั่วโมงยาออกฤทธิ์สูงสุด" "ควรกินซ้ำเมื่อไร" ตอบได้ด้วย eigenpair และการตั้งอนุพันธ์เป็นศูนย์ แบบที่คุณเพิ่งทำ</div>
      </div>
    </article>
  </section>

  <section class="block" id="recipe">
  <h2><span class="h2-dot">⚡</span> สูตรสำเร็จ — ท่าที่ใช้ทำโจทย์หัวข้อนี้</h2>
  <div class="recipe">
    <div class="recipe-head">🪜 ท่าหลัก: แก้ \(\vec{x}\,{}' = A\vec{x}\) ด้วยค่าลักษณะเฉพาะ</div>
    <div class="recipe-body">
      <ol>
        <li>เขียนระบบให้อยู่ในรูป \(\vec{x}\,{}' = A\vec{x}\)</li>
        <li>หาค่าลักษณะเฉพาะ: \(\det(A - \lambda I) = 0\)</li>
        <li>หา eigenvectors: แก้ \((A - \lambda I)\vec{x} = \vec{0}\) ทีละค่า (ต้องได้อิสระครบ \(n\) ตัว ไม่งั้นทฤษฎีบท 3.3.1 ใช้ไม่ได้)</li>
        <li><strong>ผลเฉลยทั่วไป:</strong> \(\vec{x}(t) = C_1e^{\lambda_1 t}\vec{v}_1 + \cdots + C_ne^{\lambda_n t}\vec{v}_n\) (จับคู่ \(\lambda\) กับ \(\vec{v}\) ให้ถูกตัว)</li>
        <li><strong>ผลเฉลยเฉพาะ:</strong> แทน \(t = 0\) → แก้ระบบ \(P\vec{C} = \vec{x}(0)\) → แทนค่า \(C\) กลับ</li>
        <li>ตรวจเสมอ: \(\vec{x}(0)\) ตรงเงื่อนไข + แทนกลับอย่างน้อย 1 สมการที่ \(t = 0\)</li>
      </ol>
    </div>
  </div>
  <div class="key-grid">
    <div class="key-card"><div class="k-title">ท่า: จำโครงผลเฉลย</div>แต่ละ eigenpair ให้พจน์ \(e^{\lambda t}\vec{v}\) — ค่า \(\lambda\) ขึ้นเป็นเลขชี้กำลัง เวกเตอร์คูณหน้า ค่า \(C\) มาจากเงื่อนไข</div>
    <div class="key-card"><div class="k-title">ท่า: \(\lambda = 0\)</div>พจน์ \(e^{0\cdot t}\vec{v} = \vec{v}\) คงตัว (สมดุล) — เกิดเมื่อ \(\det A = 0\) อย่าตกใจเจอ \(\lambda = 0\)</div>
    <div class="key-card"><div class="k-title">ท่า: \(\lambda\) ซ้ำ</div>ถ้า \(\lambda\) ซ้ำแต่ \(E_\lambda\) มีมิติพอ (A diagonalizable) ก็เขียนพจน์เท่าจำนวนเวกเตอร์อิสระตามปกติ</div>
    <div class="key-card"><div class="k-title">ท่า: เช็กพฤติกรรม</div>\(\lambda &gt; 0\) พจน์บวมขึ้นเรื่อย ๆ / \(\lambda &lt; 0\) รีดลงสู่ศูนย์ / \(\lambda = 0\) คงตัว — ใช้ตรวจความเข้าใจเชิงคุณภาพ</div>
  </div>
</section>

<section class="block" id="practice">
  <h2><span class="h2-dot">🏋️</span> โจทย์ซ้อมมือ (6 ข้อ)</h2>
  <p class="small">ลองทำเองก่อน แล้วค่อยกดเปิดคำใบ้ → เฉลยทีละขั้น เมื่อทำได้แล้วติ๊ก ✓ เพื่อบันทึกความคืบหน้า</p>

  <article class="pr-card" data-pkey="p3-3-1">
    <div class="pr-head"><span class="pr-num">ข้อ 1</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาผลเฉลยทั่วไปของระบบสมการเชิงอนุพันธ์
      \[ \begin{aligned} x_1' &= 4x_1 + x_2\\ x_2' &= 2x_1 + 3x_2 \end{aligned} \]</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(A = \begin{bmatrix} 4 & 1\\ 2 & 3 \end{bmatrix}\): \(\lambda^2 - 7\lambda + 10 = 0\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> eigenpair → ผลเฉลยทั่วไป กลยุทธ์ของข้อนี้: อ่านสัมประสิทธิ์จากสองสมการเป็นเมทริกซ์ \(A\) ก่อน จากนั้นคืองานเดิมของ 3.2 ทั้งหมด — แก้ \(\det(A - \lambda I) = 0\) หาค่าลักษณะเฉพาะ, แก้ \((A - \lambda I)\vec{x} = \vec{0}\) หาเวกเตอร์ แล้วจับคู่เข้าสูตร \(C_ie^{\lambda_i t}\vec{v}_i\) ให้ตรงตัว</p>
      <ol class="steps">
        <li><span class="step-t">ค่าลักษณะเฉพาะ</span> det = \((4-\lambda)(3-\lambda) - (1)(2)\) — กระจาย: \(12 - 4\lambda - 3\lambda + \lambda^2 = \lambda^2 - 7\lambda + 12\) แล้วลบ 2: \(12 - 2 = 10\) — หาสองจำนวนคูณกันได้ 10 บวกกันได้ \(-7\) → คือ \(-5\) กับ \(-2\) (ทดลองแทน \(\lambda = 5\): \(25 - 35 + 10 = 0\) ✓):
        \[ \det(A - \lambda I_2) = (4-\lambda)(3-\lambda) - 2 = \lambda^2 - 7\lambda + 10 = (\lambda - 5)(\lambda - 2) = 0 \;\Longrightarrow\; \lambda = 5, 2 \]</li>
        <li><span class="step-t">eigenvector ของ \(\lambda = 5\)</span> ลบ 5 ที่ทแยง: \(4 \to -1\), \(3 \to -2\) — แถวล่าง \((2, -2)\) เป็น \(-2\) เท่าของแถวบน \((-1, 1)\) จึงเหลือสมการเดียว \(-x_1 + x_2 = 0 \Rightarrow x_2 = x_1\) เลือก \(x_1 = 1\):
        \[ A - 5I_2 = \begin{bmatrix} -1 & 1\\ 2 & -2 \end{bmatrix} \;\Longrightarrow\; x_1 = x_2 \;\Longrightarrow\; \vec{v}_1 = \begin{bmatrix} 1\\ 1 \end{bmatrix} \]</li>
        <li><span class="step-t">eigenvector ของ \(\lambda = 2\)</span> ลบ 2 ที่ทแยง: \(4 \to 2\), \(3 \to 1\) — สองแถวเหมือนกันพอดี เหลือสมการเดียว \(2x_1 + x_2 = 0 \Rightarrow x_2 = -2x_1\) เลือก \(x_1 = 1\) → \(x_2 = -2\):
        \[ A - 2I_2 = \begin{bmatrix} 2 & 1\\ 2 & 1 \end{bmatrix} \;\Longrightarrow\; 2x_1 + x_2 = 0 \;\Longrightarrow\; \vec{v}_2 = \begin{bmatrix} 1\\ -2 \end{bmatrix} \]</li>
        <li><span class="step-t">ผลเฉลยทั่วไปและการตรวจ</span> จับคู่ \(\lambda = 5\) กับ \((1, 1)^T\) และ \(\lambda = 2\) กับ \((1, -2)^T\):
        \[ \vec{x}(t) = C_1e^{5t}\begin{bmatrix} 1\\ 1 \end{bmatrix} + C_2e^{2t}\begin{bmatrix} 1\\ -2 \end{bmatrix} \qquad (C_1, C_2 \in \mathbb{R}) \]
        ตรวจด้วยเลขจริง: \(A(1,1)^T = (4 + 1,\; 2 + 3)^T = (5, 5)^T = 5(1,1)^T\) ✓ และ \(A(1,-2)^T = (4(1) + 1(-2),\; 2(1) + 3(-2))^T = (2, -4)^T = 2(1,-2)^T\) ✓ — สรุปคำตอบ: \(\vec{x}(t) = C_1e^{5t}(1, 1)^T + C_2e^{2t}(1, -2)^T\) เมื่อ \(C_1, C_2\) เป็นค่าคงตัวใด ๆ</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p3-3-2">
    <div class="pr-head"><span class="pr-num">ข้อ 2</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาผลเฉลยเฉพาะของระบบ
      \[ \begin{aligned} x_1' &= 3x_1 - 2x_2\\ x_2' &= 2x_1 - 2x_2 \end{aligned} \]
      เมื่อ \(x_1(0) = 3,\; x_2(0) = 0\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(\lambda = 2, -1\) / เวกเตอร์: \(\vec{v}_1 = (2,1)^T\), \(\vec{v}_2 = (1,2)^T\) / แก้ \(2C_1 + C_2 = 3,\; C_1 + 2C_2 = 0\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ผลเฉลยทั่วไปก่อน แล้วใช้เงื่อนไขเริ่มต้น กลยุทธ์ของข้อนี้: แก้ eigenpair ตามปกติ (ระวังเครื่องหมายของช่อง \(-2\) ตอนคิด det และระวังตอน "ลบ \(-1\) ที่ทแยง" ต้องกลายเป็นการบวก 1) จากนั้นแทน \(t = 0\) ให้ระบบหา \(C_1, C_2\) — ระบบนี้มีเศษส่วนระหว่างทาง ให้ใจเย็นไล่ทีละบรรทัด</p>
      <ol class="steps">
        <li><span class="step-t">ค่าลักษณะเฉพาะ</span> det = \((3-\lambda)(-2-\lambda) - (-2)(2)\) — กระจาย: \(-6 - 3\lambda + 2\lambda + \lambda^2 = \lambda^2 - \lambda - 6\) แล้วลบด้วย \((-2)(2) = -4\) ซึ่งเท่ากับบวก 4: \(-6 + 4 = -2\) — หาสองจำนวนคูณกันได้ \(-2\) บวกกันได้ \(-1\) → คือ \(-2\) กับ \(1\) (ทดลองแทน \(\lambda = 2\): \(4 - 2 - 2 = 0\) ✓):
        \[ \det(A - \lambda I_2) = (3-\lambda)(-2-\lambda) + 4 = \lambda^2 - \lambda - 2 = (\lambda - 2)(\lambda + 1) = 0 \;\Longrightarrow\; \lambda = 2, -1 \]</li>
        <li><span class="step-t">eigenvectors</span> กรณี \(\lambda = 2\): ลบ 2 ที่ทแยง → \(A - 2I_2 = \begin{bmatrix} 1 & -2\\ 2 & -4 \end{bmatrix}\) (ช่อง \(3 \to 1\), \(-2 \to -4\)) แถวล่างเป็น 2 เท่าของแถวบน สมการ \(x_1 - 2x_2 = 0 \Rightarrow x_1 = 2x_2\) เลือก \(x_2 = 1\) → \(\vec{v}_1 = (2, 1)^T\); กรณี \(\lambda = -1\): <em>บวก</em> 1 ที่ทแยง (ลบด้วย \(-1\) = บวก 1) → \(A + I_2 = \begin{bmatrix} 4 & -2\\ 2 & -1 \end{bmatrix}\) แถวล่างเป็นครึ่งหนึ่งของแถวบน สมการ \(4x_1 - 2x_2 = 0 \Rightarrow 2x_1 = x_2\) เลือก \(x_1 = 1\) → \(\vec{v}_2 = (1, 2)^T\)</li>
        <li><span class="step-t">ผลเฉลยทั่วไปและแทน \(t = 0\)</span> จับคู่ \(\lambda = 2\) กับ \((2, 1)^T\), \(\lambda = -1\) กับ \((1, 2)^T\) — แทน \(t = 0\): ทุก \(e^0 = 1\) หายหมด เหลือ \(C_1(2, 1)^T + C_2(1, 2)^T = (3, 0)^T\) เทียบทีละช่อง:
        \[ \vec{x}(t) = C_1e^{2t}\begin{bmatrix} 2\\ 1 \end{bmatrix} + C_2e^{-t}\begin{bmatrix} 1\\ 2 \end{bmatrix}, \qquad C_1\begin{bmatrix} 2\\ 1 \end{bmatrix} + C_2\begin{bmatrix} 1\\ 2 \end{bmatrix} = \begin{bmatrix} 3\\ 0 \end{bmatrix} \]</li>
        <li><span class="step-t">แก้หา \(C\)</span> สมการสองช่อง: \(2C_1 + C_2 = 3\) และ \(C_1 + 2C_2 = 0\) — จากสมการที่สอง: \(2C_2 = -C_1 \Rightarrow C_2 = -\tfrac{C_1}{2}\) (หารด้วย 2 ทั้งสองฝั่ง) แทนลงสมการแรก: \(2C_1 - \tfrac{C_1}{2} = 3 \Rightarrow \tfrac{4C_1}{2} - \tfrac{C_1}{2} = \tfrac{3C_1}{2} = 3 \Rightarrow 3C_1 = 6 \Rightarrow C_1 = 2\) แล้ว \(C_2 = -\tfrac{2}{2} = -1\)</li>
        <li><span class="step-t">ผลเฉลยเฉพาะ</span> แทน \(C_1 = 2, C_2 = -1\): พจน์แรก \(2e^{2t}(2, 1)^T = (4e^{2t},\; 2e^{2t})\), พจน์สอง \(-e^{-t}(1, 2)^T = (-e^{-t},\; -2e^{-t})\):
        \[ \vec{x}(t) = 2e^{2t}\begin{bmatrix} 2\\ 1 \end{bmatrix} - e^{-t}\begin{bmatrix} 1\\ 2 \end{bmatrix} \qquad \text{หรือ} \qquad x_1(t) = 4e^{2t} - e^{-t}, \;\; x_2(t) = 2e^{2t} - 2e^{-t} \]</li>
        <li><span class="step-t">ตรวจคำตอบและสรุป</span> \(t = 0\): \(x_1(0) = 4 - 1 = 3\) ✓, \(x_2(0) = 2 - 2 = 0\) ✓ ตรงเงื่อนไข และสมการที่ 1 ที่ \(t = 0\): LHS \(x_1'(t) = 8e^{2t} + e^{-t}\) (อนุพันธ์ \(4e^{2t}\) คือ \(8e^{2t}\), อนุพันธ์ของ \(-e^{-t}\) คือ \(+e^{-t}\) เพราะลบคูณลบ) จึงได้ \(x_1'(0) = 8 + 1 = 9\); RHS \(= 3x_1(0) - 2x_2(0) = 3(3) - 2(0) = 9\) ✓ — สรุปคำตอบ: \(x_1(t) = 4e^{2t} - e^{-t},\; x_2(t) = 2e^{2t} - 2e^{-t}\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p3-3-3">
    <div class="pr-head"><span class="pr-num">ข้อ 3</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาผลเฉลยทั่วไปของระบบ
      \[ \begin{aligned} x_1' &= x_1 - x_2 - x_3\\ x_2' &= \phantom{x_1 -{}} x_2 + 3x_3\\ x_3' &= \phantom{x_1 -{}} 3x_2 + x_3 \end{aligned} \]</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(A = \begin{bmatrix} 1 & -1 & -1\\ 0 & 1 & 3\\ 0 & 3 & 1 \end{bmatrix}\) มี \(\lambda = 4, -2, 1\) / เวกเตอร์: \((2,-3,-3)^T, (0,1,-1)^T, (1,0,0)^T\) ตามลำดับ</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> สังเกตว่า \(x_1\) ไม่ปรากฏในสองสมการล่าง — ลดรูปสองสมการล่างก่อนได้ กลยุทธ์ของข้อนี้: โครงสมการแบบบล็อกช่วยให้หาค่าลักษณะเฉพาะได้เร็ว (แก้บล็อก \(2\times2\) ล่างก่อน แล้วคูณต่อด้วยปัจจัยของ \(x_1\)) ส่วน eigenvector แต่ละตัวแก้ \((A - \lambda I)\vec{x} = \vec{0}\) ทีละค่า — เมื่อได้ครบ 3 คู่ก็ประกอบเป็นผลเฉลยทั่วไป จบด้วยการทดสอบ \(A\vec{v} = \lambda\vec{v}\)</p>
      <ol class="steps">
        <li><span class="step-t">ค่าลักษณะเฉพาะ</span> บล็อกล่าง \(\begin{bmatrix} 1 & 3\\ 3 & 1 \end{bmatrix}\) (จากสองสมการล่างที่ไม่มี \(x_1\)) มี trace \(= 2\), det \(= 1 - 9 = -8\) → \(\lambda^2 - 2\lambda - 8 = (\lambda - 4)(\lambda + 2)\) ให้ \(\lambda = 4, -2\) — ค่าที่เหลือมาจากปัจจัย \((1 - \lambda)\) ของ \(x_1\) รวมเป็น (แยกผลต่างกำลังสอง: \((1-\lambda)^2 - 9 = (1-\lambda-3)(1-\lambda+3) = (-2-\lambda)(4-\lambda)\)):
        \[ \det(A - \lambda I_3) = (1 - \lambda)\big[(1-\lambda)^2 - 9\big] = (1-\lambda)(\lambda - 4)(\lambda + 2) = 0 \;\Longrightarrow\; \lambda = 1, 4, -2 \]</li>
        <li><span class="step-t">eigenvector ของ \(\lambda = 4\)</span> ลบ 4 ที่ทแยง: \(1 \to -3\) ทั้งแถวบนและแถวกลาง, \(1 \to -3\) ที่แถวล่าง — แถวที่ 2, 3 (สองสมการล่าง) ให้ \(-3x_2 + 3x_3 = 0\) และ \(3x_2 - 3x_3 = 0\) ซึ่งบอกเรื่องเดียวกัน \(x_2 = x_3\); แถวที่ 1 ให้ \(-3x_1 - x_2 - x_3 = 0 \Rightarrow -3x_1 = x_2 + x_3 = 2x_2 \Rightarrow x_1 = -\tfrac{2}{3}x_2\) — เลือก \(x_2 = -3\) (ตัวคูณที่ทำให้เศษส่วน \(\tfrac{2}{3}\) หาย: \(x_1 = -\tfrac{2}{3}(-3) = 2\)) ได้ \(x_3 = x_2 = -3\):
        \(\vec{v}_1 = (2, -3, -3)^T\)</li>
        <li><span class="step-t">eigenvector ของ \(\lambda = -2\)</span> <em>บวก</em> 2 ที่ทแยง (ลบด้วย \(-2\) = บวก 2): \(1 \to 3\) ทุกแถว — แถวที่ 2 ให้ \(3x_2 + 3x_3 = 0 \Rightarrow x_2 = -x_3\); แถวที่ 1 ให้ \(3x_1 - x_2 - x_3 = 0 \Rightarrow 3x_1 = x_2 + x_3 = (-x_3) + x_3 = 0 \Rightarrow x_1 = 0\) เลือก \(x_3 = -1\) → \(x_2 = 1\):
        \(\vec{v}_2 = (0, 1, -1)^T\)</li>
        <li><span class="step-t">eigenvector ของ \(\lambda = 1\)</span> ลบ 1 ที่ทแยง: ทแยงกลายเป็น \(0, 0, 0\) — แถวที่ 3 ให้ \(3x_2 = 0 \Rightarrow x_2 = 0\), แถวที่ 2 ให้ \(3x_3 = 0 \Rightarrow x_3 = 0\) (แถวที่ 1 \(-x_2 - x_3 = 0\) ให้ข้อมูลซ้ำ) เหลือ \(x_1\) เสรี เลือก \(x_1 = 1\):
        \[ A - I_3 = \begin{bmatrix} 0 & -1 & -1\\ 0 & 0 & 3\\ 0 & 3 & 0 \end{bmatrix} \;\Longrightarrow\; x_2 = 0, x_3 = 0, x_1 \text{ เสรี} \;\Longrightarrow\; \vec{v}_3 = (1, 0, 0)^T \]</li>
        <li><span class="step-t">ผลเฉลยทั่วไป</span> จับคู่ให้ถูกตัว: \(\lambda = 4\) กับ \((2, -3, -3)^T\), \(\lambda = -2\) กับ \((0, 1, -1)^T\), \(\lambda = 1\) กับ \((1, 0, 0)^T\):
        \[ \vec{x}(t) = C_1e^{4t}\begin{bmatrix} 2\\ -3\\ -3 \end{bmatrix} + C_2e^{-2t}\begin{bmatrix} 0\\ 1\\ -1 \end{bmatrix} + C_3e^{t}\begin{bmatrix} 1\\ 0\\ 0 \end{bmatrix} \qquad (C_1, C_2, C_3 \in \mathbb{R}) \]</li>
        <li><span class="step-t">ตรวจคำตอบและสรุป</span> ทดสอบด้วยเลขจริง: \(A(2,-3,-3)^T\): ช่องแรก = \(1(2) + (-1)(-3) + (-1)(-3) = 2 + 3 + 3 = 8\), ช่องสอง = \(0(2) + 1(-3) + 3(-3) = -3 - 9 = -12\), ช่องสาม = \(0(2) + 3(-3) + 1(-3) = -9 - 3 = -12\) → \((8, -12, -12)^T = 4(2,-3,-3)^T\) ✓ — สรุปคำตอบ: \(\vec{x}(t) = C_1e^{4t}(2, -3, -3)^T + C_2e^{-2t}(0, 1, -1)^T + C_3e^{t}(1, 0, 0)^T\) เมื่อ \(C_1, C_2, C_3\) เป็นค่าคงตัวใด ๆ</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p3-3-4">
    <div class="pr-head"><span class="pr-num">ข้อ 4</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>อาจารย์ต้องการใช้ทฤษฎีบท 3.3.1 กับระบบ \(\vec{x}\,{}' = A\vec{x}\) เมื่อ \(A = \begin{bmatrix} 1 & 1\\ 0 & 1 \end{bmatrix}\) จงตรวจสอบว่าทฤษฎีบทนี้ใช้ได้กับ \(A\) นี้หรือไม่ พร้อมเหตุผล</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">หาค่าลักษณะเฉพาะก่อน แล้วนับว่าได้เวกเตอร์ลักษณะเฉพาะอิสระกี่ตัว (เทียบกับเงื่อนไขของทฤษฎีบท 3.3.1 ที่ต้องมี \(n\) ตัว)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ทฤษฎีบท 3.3.1 กำหนดว่า \(A\) ต้องแปลงเป็นทแยงมุมได้ กลยุทธ์ของข้อนี้: โจทย์ไม่ได้ขอผลเฉลย แต่ขอ "ตรวจสิทธิ์การใช้สูตร" — ขั้นตอนจึงเป็นแบบเดียวกับการเช็ก diagonalizable ใน 3.2: หาค่าลักษณะเฉพาะจากเมทริกซ์สามเหลี่ยม (อ่านทแยงได้เลย) แล้วนับว่าค่าที่ซ้ำให้ eigenvector อิสระกี่ตัว เทียบกับเงื่อนไข \(n\) ตัวของทฤษฎีบท</p>
      <ol class="steps">
        <li><span class="step-t">ค่าลักษณะเฉพาะ</span> \(A\) สามเหลี่ยมบน (ใต้ทแยงเป็นศูนย์หมด) → det คือผลคูณของทแยง → \(\det(A - \lambda I_2) = (1-\lambda)(1-\lambda) = (1-\lambda)^2 = 0 \Rightarrow \lambda = 1\) ซ้ำ 2 ครั้ง (ค่าลักษณะเฉพาะของเมทริกซ์สามเหลี่ยม = เลขบนทแยงมุมหลักเสมอ) — ค่าซ้ำเป็นสัญญาณเตือนให้ต้องนับเวกเตอร์จริง</li>
        <li><span class="step-t">นับ \(E_1\)</span> ลบ 1 ที่ทแยง: ทั้งสองช่องทแยง \(1 \to 0\) (ช่อง 1 เหนือทแยงคงเดิม) — แถวบนบอก \(x_2 = 0\) เท่านั้น \(x_1\) ไม่ถูกผูก (เสรี) เลือก \(x_1 = 1\) ได้เวกเตอร์ฐานเพียงตัวเดียว:
        \[ A - I_2 = \begin{bmatrix} 0 & 1\\ 0 & 0 \end{bmatrix} \;\Longrightarrow\; x_2 = 0 \;\Longrightarrow\; E_1 = \operatorname{Span}\{(1,0)^T\}, \; \dim = 1 \]</li>
        <li><span class="step-t">สรุป</span> ได้ eigenvector อิสระเพียง 1 ตัว &lt; 2 → \(A\) <strong>แปลงเป็นทแยงมุมไม่ได้</strong> (<em>เพราะ</em>\(\lambda = 1\) ซ้ำ 2 ครั้งแต่ \(\dim E_1 = 1\) ไม่เท่ากับจำนวนครั้งที่ซ้ำ เวกเตอร์อิสระรวมได้ไม่ครบ \(n = 2\)) → ทฤษฎีบท 3.3.1 ใช้กับระบบนี้ไม่ได้ (ผลเฉลยจริง ๆ มีพจน์ \(te^t\) ปนอยู่ ซึ่งอยู่นอกขอบเขตของสูตรนี้) — สรุปคำตอบ: ใช้ทฤษฎีบท 3.3.1 กับ \(A\) นี้ไม่ได้ เพราะ \(A\) ไม่มี eigenvector อิสระครบ 2 ตัว</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p3-3-5">
    <div class="pr-head"><span class="pr-num">ข้อ 5</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาผลเฉลยเฉพาะของระบบ
      \[ \begin{aligned} x_1' &= x_1\\ x_2' &= -2x_2 + x_3\\ x_3' &= \phantom{-2x_2 +{}} x_3 \end{aligned} \]
      เมื่อ \(x_1(0) = 2,\; x_2(0) = 7,\; x_3(0) = 15\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(A\) สามเหลี่ยม → \(\lambda = 1, -2, 1\) / \(E_1 = \operatorname{Span}\{(1,0,0)^T, (0,1,3)^T\}\) (มีมิติ 2 พอ), \(E_{-2} = \operatorname{Span}\{(0,1,0)^T\}\) / แก้ \(C_1 = 2, C_2 = 5, C_3 = 2\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> \(\lambda\) ซ้ำแต่เช็กว่า diagonalizable ก่อน แล้วทำตามสูตรปกติ กลยุทธ์ของข้อนี้: \(A\) เป็นสามเหลี่ยมจึงอ่านค่าลักษณะเฉพาะจากทแยงได้ทันที — เจอค่าซ้ำอย่าเพิ่งตกใจ ให้ไปนับเวกเตอร์อิสระของค่าที่ซ้ำ: ถ้า \(\dim E_1 = 2\) เท่ากับจำนวนครั้งซ้ำพอดี ก็ใช้ทฤษฎีบท 3.3.1 ได้ตามปกติ จบด้วยการแทน \(t = 0\) แก้หา \(C\) และตรวจสมการอย่างน้อยหนึ่งสมการ</p>
      <ol class="steps">
        <li><span class="step-t">ค่าลักษณะเฉพาะ</span> สามเหลี่ยมบน → det คือผลคูณทแยง → \(\det(A - \lambda I_3) = (1-\lambda)(-2-\lambda)(1-\lambda)\) → อ่านรากจากแต่ละปัจจัยได้ \(\lambda = 1, -2, 1\) (\(\lambda = 1\) ซ้ำ 2 ครั้ง — ค่าลักษณะเฉพาะของเมทริกซ์สามเหลี่ยม = เลขบนทแยงมุมหลัก \((1, -2, 1)\) เสมอ)</li>
        <li><span class="step-t">เช็ก \(E_1\)</span> ลบ 1 ที่ทแยง: \(1 \to 0\), \(-2 \to -3\), \(1 \to 0\) — แถวบนกับแถวล่างเป็นศูนย์หมด (ตัวแปร \(x_1\) จึงเสรี) เหลือแถวกลางบอก \(-3x_2 + x_3 = 0 \Rightarrow x_3 = 3x_2\) — ให้ \(x_2 = 0\) → \((1, 0, 0)^T\); ให้ \(x_2 = 1\) → \(x_3 = 3\) → \((0, 1, 3)^T\):
        \[ A - I_3 = \begin{bmatrix} 0 & 0 & 0\\ 0 & -3 & 1\\ 0 & 0 & 0 \end{bmatrix} \;\Longrightarrow\; x_3 = 3x_2 \;\Longrightarrow\; E_1 = \operatorname{Span}\{(1,0,0)^T, (0,1,3)^T\}, \dim = 2 \checkmark \]
        (<em>เพราะอะไรถึงผ่าน</em>: \(\dim E_1 = 2\) เท่ากับจำนวนครั้งที่ \(\lambda = 1\) ซ้ำพอดี)</li>
        <li><span class="step-t">eigenvector ของ \(\lambda = -2\)</span> <em>บวก</em> 2 ที่ทแยง (ลบด้วย \(-2\) = บวก 2): \(1 \to 3\), \(-2 \to 0\), \(1 \to 3\) — แถวบน: \(3x_1 = 0 \Rightarrow x_1 = 0\); แถวกลาง: \(x_3 = 0\); แถวล่าง: \(3x_3 = 0\) (ซ้ำข้อมูลแถวกลาง) เหลือ \(x_2\) เสรี เลือก \(x_2 = 1\):
        \[ A + 2I_3 = \begin{bmatrix} 3 & 0 & 0\\ 0 & 0 & 1\\ 0 & 0 & 3 \end{bmatrix} \;\Longrightarrow\; x_1 = 0, x_3 = 0 \;\Longrightarrow\; \vec{v} = (0, 1, 0)^T \]
        รวมได้ \(2 + 1 = 3\) เวกเตอร์อิสระครบ \(n = 3\) → diagonalizable → ใช้ทฤษฎีบท 3.3.1 ได้</li>
        <li><span class="step-t">ผลเฉลยทั่วไปและแทน \(t = 0\)</span> จับคู่: \(\lambda = 1\) ให้พจน์สองพจน์ (เวกเตอร์คนละตัว), \(\lambda = -2\) ให้หนึ่งพจน์ — แทน \(t = 0\): \(e^0 = e^{-2\cdot0} = 1\) หายหมด รวมพจน์ที่สองกับสามเข้าด้วยกัน (ทั้งคู่มีช่องกลาง) จะเห็นว่า \(\vec{x}(0) = (C_1,\; C_2 + C_3,\; 3C_2)\) เทียบกับ \((2, 7, 15)^T\):
        \[ \vec{x}(t) = C_1e^{t}\begin{bmatrix} 1\\ 0\\ 0 \end{bmatrix} + C_2e^{t}\begin{bmatrix} 0\\ 1\\ 3 \end{bmatrix} + C_3e^{-2t}\begin{bmatrix} 0\\ 1\\ 0 \end{bmatrix} \]
        \[ \vec{x}(0) = C_1\begin{bmatrix} 1\\ 0\\ 0 \end{bmatrix} + (C_2 + C_3)\begin{bmatrix} 0\\ 1\\ 0 \end{bmatrix} + 3C_2\begin{bmatrix} 0\\ 0\\ 1 \end{bmatrix} = \begin{bmatrix} 2\\ 7\\ 15 \end{bmatrix} \]</li>
        <li><span class="step-t">แก้หา \(C\)</span> อ่านจากง่ายไปยาก: ช่องบนให้ \(C_1 = 2\) ทันที; ช่องล่างให้ \(3C_2 = 15 \Rightarrow C_2 = 15 \div 3 = 5\); ช่องกลางให้ \(C_2 + C_3 = 7 \Rightarrow 5 + C_3 = 7 \Rightarrow C_3 = 2\)</li>
        <li><span class="step-t">ผลเฉลยเฉพาะและการตรวจ</span> แทน \(C_1 = 2, C_2 = 5, C_3 = 2\) กลับ แล้วกระจาย: พจน์ \(5e^t(0, 1, 3)^T\) ให้ช่องล่าง \(5\cdot3e^t = 15e^t\) พอดี:
        \[ \vec{x}(t) = 2e^{t}\begin{bmatrix} 1\\ 0\\ 0 \end{bmatrix} + 5e^{t}\begin{bmatrix} 0\\ 1\\ 3 \end{bmatrix} + 2e^{-2t}\begin{bmatrix} 0\\ 1\\ 0 \end{bmatrix} \qquad \text{หรือ} \qquad \begin{aligned} x_1(t) &= 2e^t\\ x_2(t) &= 5e^t + 2e^{-2t}\\ x_3(t) &= 15e^t \end{aligned} \]
        ตรวจ: \(t = 0\): \((x_1, x_2, x_3) = (2, 5 + 2, 15) = (2, 7, 15)\) ✓ และสมการที่ 3 ที่ \(t = 0\): LHS \(x_3'(t) = 15e^t\) จึงได้ \(x_3'(0) = 15\); RHS \(x_3(0) = 15\) ✓ — สรุปคำตอบ: \(x_1(t) = 2e^t,\; x_2(t) = 5e^t + 2e^{-2t},\; x_3(t) = 15e^t\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p3-3-6">
    <div class="pr-head"><span class="pr-num">ข้อ 6</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>กำหนดว่า \(\vec{x}(t) = e^{2t}\begin{bmatrix} 1\\ 1 \end{bmatrix} + e^{-t}\begin{bmatrix} 1\\ -2 \end{bmatrix}\) เป็นผลเฉลยของระบบ \(\vec{x}\,{}' = A\vec{x}\) เมื่อ \(A\) เป็น \(2\times2\) จงหาเมทริกซ์ \(A\) และเขียนระบบสมการที่สอดคล้อง</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">จากรูปผลเฉลยแปลว่า \((2, (1,1)^T)\) และ \((-1, (1,-2)^T)\) เป็น eigenpair ของ \(A\) → \(A = PDP^{-1}\) เมื่อ \(P = \begin{bmatrix} 1 & 1\\ 1 & -2 \end{bmatrix}\), \(D = \operatorname{diag}(2, -1)\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> อ่าน eigenpair จากรูปผลเฉลย แล้วสร้าง \(A\) ย้อนกลับด้วย \(A = PDP^{-1}\) กลยุทธ์ของข้อนี้: โจทย์ให้ "คำตอบ" มาแล้วให้เดา "โจทย์" — แต่ไม่ต้องเดาจริง ๆ เพราะรูป \(C_ie^{\lambda_i t}\vec{v}_i\) สามารถอ่านย้อนได้ตรง ๆ: เลขชี้กำลังคือค่าลักษณะเฉพาะ เวกเตอร์หน้าคือ eigenvector พอได้ครบสองคู่ก็ประกอบ \(P, D\) แล้วคูณกลับเพื่อฟื้นเมทริกซ์ \(A\) (เหมือนขั้น "ตีความ" ของ 3.1 แต่ย้อนทิศ)</p>
      <ol class="steps">
        <li><span class="step-t">อ่าน eigenpair</span> รูปผลเฉลยแต่ละพจน์คือ \(e^{\lambda t}\vec{v}\) — พจน์ \(e^{2t}(1,1)^T\): เลขชี้กำลัง 2 บอก \(\lambda_1 = 2\) เวกเตอร์หน้าบอก \(\vec{v}_1 = (1,1)^T\); พจน์ \(e^{-t}(1,-2)^T\): เลขชี้กำลัง \(-1\) บอก \(\lambda_2 = -1\), \(\vec{v}_2 = (1,-2)^T\) (<em>เพราะ</em>ทฤษฎีบท 3.3.1 บอกว่าพจน์ของผลเฉลยมาจาก eigenpair เสมอ จึงอ่านกลับได้) — ตรวจด้วยว่าสองเวกเตอร์ไม่ขนานกัน (อัตราส่วน \(1/1 \neq 1/(-2)\)) จึงเป็นอิสระและสร้างฐานหลักได้</li>
        <li><span class="step-t">เขียน \(P, D\) และ \(P^{-1}\)</span> เรียง \(\vec{v}_1, \vec{v}_2\) เป็นหลักของ \(P\) และ \(\lambda_1, \lambda_2\) บนทแยงของ \(D\) ตามลำดับเดียวกัน — หา \(P^{-1}\): det \(= (1)(-2) - (1)(1) = -2 - 1 = -3\) สลับทแยง เปลี่ยนเครื่องหมายตัวนอก (\(-2 \to -2\), \(1 \to -1\)) แล้วหารด้วย \(-3\): \(\frac{-2}{-3} = \tfrac{2}{3}\), \(\frac{-1}{-3} = \tfrac{1}{3}\), \(\frac{1}{-3} = -\tfrac{1}{3}\) (ลบหารลบได้บวก):
        \[ P = \begin{bmatrix} 1 & 1\\ 1 & -2 \end{bmatrix}, \quad D = \begin{bmatrix} 2 & 0\\ 0 & -1 \end{bmatrix}, \quad \det P = -3 \;\Longrightarrow\; P^{-1} = \frac{1}{-3}\begin{bmatrix} -2 & -1\\ -1 & 1 \end{bmatrix} = \begin{bmatrix} \tfrac{2}{3} & \tfrac{1}{3}\\ \tfrac{1}{3} & -\tfrac{1}{3} \end{bmatrix} \]</li>
        <li><span class="step-t">คำนวณ \(A = PDP^{-1}\)</span> คูณทีละคู่จากซ้าย: \(PD\) = คูณหลักแรกของ \(P\) ด้วย 2 และหลักสองด้วย \(-1\): \(\begin{bmatrix} 2(1) & 1(-1)\\ 2(1) & (-2)(-1) \end{bmatrix} = \begin{bmatrix} 2 & -1\\ 2 & 2 \end{bmatrix}\) แล้วคูณต่อด้วย \(P^{-1}\): ช่องซ้ายบน = \((2, -1)\cdot(\tfrac{2}{3}, \tfrac{1}{3}) = \tfrac{4}{3} - \tfrac{1}{3} = 1\), ช่องขวาบน = \((2, -1)\cdot(\tfrac{1}{3}, -\tfrac{1}{3}) = \tfrac{2}{3} + \tfrac{1}{3} = 1\), ช่องซ้ายล่าง = \((2, 2)\cdot(\tfrac{2}{3}, \tfrac{1}{3}) = \tfrac{4}{3} + \tfrac{2}{3} = 2\), ช่องขวาล่าง = \((2, 2)\cdot(\tfrac{1}{3}, -\tfrac{1}{3}) = \tfrac{2}{3} - \tfrac{2}{3} = 0\):
        \[ PD = \begin{bmatrix} 1 & 1\\ 1 & -2 \end{bmatrix}\begin{bmatrix} 2 & 0\\ 0 & -1 \end{bmatrix} = \begin{bmatrix} 2 & -1\\ 2 & 2 \end{bmatrix} \]
        \[ A = \begin{bmatrix} 2 & -1\\ 2 & 2 \end{bmatrix}\begin{bmatrix} \tfrac{2}{3} & \tfrac{1}{3}\\ \tfrac{1}{3} & -\tfrac{1}{3} \end{bmatrix} = \begin{bmatrix} \tfrac{4}{3} - \tfrac{1}{3} & \tfrac{2}{3} + \tfrac{1}{3}\\[2pt] \tfrac{4}{3} + \tfrac{2}{3} & \tfrac{2}{3} - \tfrac{2}{3} \end{bmatrix} = \begin{bmatrix} 1 & 1\\ 2 & 0 \end{bmatrix} \]</li>
        <li><span class="step-t">ตรวจคำตอบ</span> ทดสอบว่า \(A\) ที่สร้างมาเจอ eigenpair ที่อ่านมาจริง: \(A(1,1)^T = (1(1) + 1(1),\; 2(1) + 0(1))^T = (2, 2)^T = 2(1,1)^T\) ✓ และ \(A(1,-2)^T = (1(1) + 1(-2),\; 2(1) + 0(-2))^T = (-1, 2)^T = -1\cdot(1,-2)^T\) ✓ (ช่องสอง: \(-1\) คูณ \(-2\) ได้ \(+2\) เพราะลบคูณลบได้บวก) ทั้งคู่ตรงกับ \(\lambda_1 = 2, \lambda_2 = -1\)</li>
        <li><span class="step-t">ระบบที่สอดคล้อง</span> อ่านเมทริกซ์ \(A = \begin{bmatrix} 1 & 1\\ 2 & 0 \end{bmatrix}\) กลับเป็นระบบสมการ: แถวบนให้ \(x_1' = 1\cdot x_1 + 1\cdot x_2\), แถวล่างให้ \(x_2' = 2\cdot x_1 + 0\cdot x_2\):
        \[ \begin{aligned} x_1' &= x_1 + x_2\\ x_2' &= 2x_1 \phantom{+ x_2} \end{aligned} \]
        — สรุปคำตอบ: \(A = \begin{bmatrix} 1 & 1\\ 2 & 0 \end{bmatrix}\) และระบบที่สอดคล้องคือ \(x_1' = x_1 + x_2,\; x_2' = 2x_1\) (ตรวจซ้ำ: ผลเฉลยที่โจทย์ให้ก็เขียนได้เป็น \(C_1 = 1, C_2 = 1\) ของระบบนี้ ✓)</li>
      </ol>
    </div></details>
  </article>
</section>
