<!-- meta
title: 5.2 การแปลงเชิงเส้น
ch: 5
section: 5.2
page: ch5-2.html
-->

<div class="crumb">บทที่ 5 · แนวคิดเชิงนามธรรมของพีชคณิตเชิงเส้น</div>
<h1 class="page-title">5.2 การแปลงเชิงเส้น</h1>
<p class="page-sub">การแปลงเชิงเส้นบนปริภูมินามธรรม — อนุพันธ์ การแทนค่า การสลับเปลี่ยน ล้วนเป็นการแปลงเชิงเส้น
เราจะเรียนการนิยาม \(T\) ด้วยฐานหลัก และเครื่องมือสำคัญ <strong>เคอร์เนล (ker T)</strong> และ <strong>เรนจ์ (range T)</strong> พร้อมทฤษฎีบทแรงก์</p>

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
      <li>ตรวจว่าฟังก์ชันระหว่างปริภูมินามธรรม (พหุนาม เมทริกซ์ ฟังก์ชัน) เป็นการแปลงเชิงเส้นหรือไม่</li>
      <li>ใช้ทฤษฎีบท 5.2.1: กำหนดค่า \(T\) บนฐานหลักเพียงพอสำหรับนิยาม \(T\) ทั้งหมด และหา \(T(\vec{x})\) จากข้อมูลบนฐานหลัก</li>
      <li>หา \(\ker T\) และ \(\operatorname{range} T\) และเข้าใจว่าทั้งคู่เป็นปริภูมิย่อย</li>
      <li>ใช้ทฤษฎีบทแรงก์: \(\dim V = \operatorname{rank} T + \operatorname{nullity} T\) และเชื่อมกับสมบัติ 1-1/ทั่วถึง</li>
    </ul>
  </div>
</section>

<section class="block" id="lesson">
  <h2><span class="h2-dot">📖</span> บทเรียน</h2>

  <h3>1) การแปลงเชิงเส้นบนปริภูมินามธรรม</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม</div>
    <p>\(T: V \to W\) เป็น<strong>การแปลงเชิงเส้น</strong> เมื่อ \(T(\vec{u} + \vec{v}) = T(\vec{u}) + T(\vec{v})\) และ \(T(c\vec{u}) = cT(\vec{u})\) ทุก \(\vec{u}, \vec{v} \in V\), \(c \in \mathbb{F}\) — และจะได้ \(T(\vec{0}_V) = \vec{0}_W\), \(T(-\vec{v}) = -T(\vec{v})\) ตามมา</p>
  </div>
  <div class="box box-idea">
    <div class="box-title">💡 ตัวอย่างที่ต้องคุ้น (ตามตำรา)</div>
    <p><strong>เป็นเชิงเส้น:</strong> การอนุพันธ์ \(D(f) = f'\), การแทนค่า \(T(p) = p(1)\), \(T(A) = A^T\), \(T(A) = \operatorname{tr} A\), การหาลิมิตของลำดับ</p>
    <p><strong>ไม่เชิงเส้น:</strong> \(T(A) = \det A\) (เพราะ \(\det(A+B) \neq \det A + \det B\)), \(T(\vec{x}) = \|\vec{x}\|\) (\(T(2\vec{x}) = 2T(\vec{x})\) พัง), \(T(A) = a^2 + b^2\), \(T(f) = 1 + f(x)\) (ไม่ส่งศูนย์ไปศูนย์)</p>
  </div>

  <h3>2) นิยาม \(T\) ด้วยฐานหลัก</h3>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 5.2.1</div>
    <p>ให้ \(B = \{\vec{v}_1, \dots, \vec{v}_n\}\) เป็นฐานหลักของ \(V\) การกำหนดค่าของ \(T\) บน \(\vec{v}_1, \dots, \vec{v}_n\) อย่างละอัน จะมีการแปลงเชิงเส้น<strong>เพียงอันเดียว</strong>ที่สอดคล้อง — เพราะเวกเตอร์ใด ๆ \(\vec{x} = c_1\vec{v}_1 + \cdots + c_n\vec{v}_n\) บังคับให้</p>
    \[ T(\vec{x}) = c_1T(\vec{v}_1) + \cdots + c_nT(\vec{v}_n) \]
    <p>ท่าทำโจทย์: เขียน \(\vec{x}\) เป็นรวมเชิงเส้นของฐานหลัก (เทียบสัมประสิทธิ์) แล้ว "ดึง \(T\) เข้าไป"</p>
  </div>

  <h3>3) เคอร์เนลและเรนจ์</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม</div>
    <p>• <strong>เคอร์เนล:</strong> \(\ker T = \{\vec{v} \in V : T(\vec{v}) = \vec{0}_W\}\) — เป็นปริภูมิย่อยของ \(V\) (ทฤษฎีบท 5.2.3) เทียบเท่ากับ \(\operatorname{Nul} A\)</p>
    <p>• <strong>เรนจ์:</strong> \(\operatorname{range} T = \{T(\vec{v}) : \vec{v} \in V\}\) — เป็นปริภูมิย่อยของ \(W\) เทียบเท่ากับ \(\operatorname{Col} A\)</p>
    <p>• <strong>โนลลิตี</strong> (nullity T) = \(\dim \ker T\), <strong>แรงก์</strong> (rank T) = \(\dim \operatorname{range} T\)</p>
  </div>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบทแรงก์ (5.2.6) และเกณฑ์ 1-1/ทั่วถึง</div>
    <p>เมื่อ \(V\) มีมิติจำกัด: \(\dim V = \operatorname{rank} T + \operatorname{nullity} T\) และ:</p>
    <p>• \(T\) <strong>1-1</strong> ⇔ \(\ker T = \{\vec{0}_V\}\) ⇔ nullity = 0</p>
    <p>• \(T\) <strong>ทั่วถึง</strong> ไป \(W\) ⇔ \(\operatorname{range} T = W\) ⇔ rank = \(\dim W\)</p>
    <p>เมื่อ \(\dim V = \dim W = n\): 1-1 ⟺ ทั่วถึง ⟺ หาตัวผกผันได้ (เหมือน IMT ในรูปนามธรรม)</p>
  </div>
</section>

<section class="block" id="examples">
  <h2><span class="h2-dot">✏️</span> ตัวอย่างโจทย์</h2>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 1</span><span class="tag easy">ง่าย</span><span class="ex-title">ตรวจการแปลงเชิงเส้นบน \(M_2(\mathbb{R})\) (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">จงพิจารณาว่าฟังก์ชันต่อไปนี้เป็นการแปลงเชิงเส้นจาก \(M_2(\mathbb{R})\) ไปยัง \(\mathbb{R}\) หรือไม่<br>
      (ก) \(T\left(\begin{bmatrix} a & b\\ c & d \end{bmatrix}\right) = a + c - 2d\) &nbsp; (ข) \(T\left(\begin{bmatrix} a & b\\ c & d \end{bmatrix}\right) = a^2 + b^2\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — เอกพันธ์เชิงเส้นในสมาชิก → linear / กำลังสอง → หาตัวอย่างค้าน
      กลยุทธ์ของข้อนี้: นิยามการแปลงเชิงเส้นต้องผ่านสองสมบัติ \(T(\vec{u} + \vec{v}) = T(\vec{u}) + T(\vec{v})\) และ \(T(c\vec{u}) = cT(\vec{u})\) (รวบเป็นข้อเดียวได้: \(T(A + kB) = T(A) + kT(B)\)) — ถ้าสูตรของ \(T\) เป็น "ผลรวมของ (ค่าคงที่)×(สมาชิก)" จะผ่านแน่ เพราะการบวก/คูณสเกลาร์ของเมทริกซ์กระทำต่อสมาชิกทีละช่อง ส่วนสูตรที่มี<em>กำลังสองของสมาชิก</em>มักพัง และวิธีแสดงว่าพังคือหาเมทริกซ์ตัวอย่าง<em>หนึ่งตัว</em>แล้วเทียบ \(T(2A)\) กับ \(2T(A)\) ให้เห็นความไม่เท่ากัน</div>
      <ol class="steps">
        <li><span class="step-t">(ก) ตรวจตามนิยาม: จับ \(A, B\) ทั่วไปแล้วคำนวณ \(T(A + kB)\)</span> ให้ \(A = \begin{bmatrix} a & b\\ c & d \end{bmatrix}\), \(B = \begin{bmatrix} a' & b'\\ c' & d' \end{bmatrix}\) และ \(k \in \mathbb{R}\) เพราะการบวก/คูณสเกลาร์ของเมทริกซ์ทำทีละช่อง:
        \[ A + kB = \begin{bmatrix} a + ka' & b + kb'\\ c + kc' & d + kd' \end{bmatrix} \]
        แทนลงในสูตร \(T\left(\begin{bmatrix} a & b\\ c & d \end{bmatrix}\right) = a + c - 2d\) แล้วกระจายทีละพจน์:
        \[ T(A + kB) = (a + ka') + (c + kc') - 2(d + kd') = (a + c - 2d) + k(a' + c' - 2d') = T(A) + kT(B) \;\checkmark \]
        เพราะสูตรของ \(T\) เป็นผลรวมของ (ค่าคงที่)×(สมาชิก) ทำให้แยกส่วน \(A\) กับ \(B\) ออกจากกันได้สมบูรณ์ → ผ่านทั้งสมบัติการบวกและสเกลาร์ → <strong>(ก) เป็นการแปลงเชิงเส้น</strong></li>
        <li><span class="step-t">(ข) หาตัวอย่างค้านสมบัติ \(T(kA) = kT(A)\)</span> สูตร \(T\left(\begin{bmatrix} a & b\\ c & d \end{bmatrix}\right) = a^2 + b^2\) มี<em>กำลังสอง</em>ซึ่งไม่เชิงเส้น ลองด้วยเมทริกซ์ง่าย ๆ ตัวเดียว:
        \[ A = \begin{bmatrix} 1 & 0\\ 0 & 0 \end{bmatrix} \;\Rightarrow\; T(A) = 1^2 + 0^2 = 1 \]
        แต่ \(2A = \begin{bmatrix} 2 & 0\\ 0 & 0 \end{bmatrix}\) ให้ \(T(2A) = 2^2 + 0 = 4 \neq 2 = 2T(A)\) ✗ (จุดที่พัง: ยกกำลังสองทำให้ \((2a)^2 = 4a^2\) ไม่ใช่ \(2a^2\) — ตัวประกอบ \(k\) ถูกยกกำลังกลายเป็น \(k^2\)) → <strong>(ข) ไม่เป็นการแปลงเชิงเส้น</strong></li>
        <li><span class="step-t">สรุป</span> (ก) เป็นการแปลงเชิงเส้น เพราะ \(T(A + kB) = T(A) + kT(B)\) จริงสำหรับ \(A, B, k\) ทุกกรณี (ข) ไม่เป็นการแปลงเชิงเส้น เพราะสมบัติเอกพันธ์พังที่ \(A = \begin{bmatrix} 1 & 0\\ 0 & 0 \end{bmatrix}\) ตัวเดียวก็เพียงพอ (สมบัติต้องจริงกับเมทริกซ์ทุกตัว ตัวค้านหนึ่งตัวจบ)</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2</span><span class="tag hard">ยาก</span><span class="ex-title">หา \(T(\vec{x})\) จากค่าบนฐานหลัก (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(T: \mathbb{R}_2[x] \to \mathbb{R}[x]\) เป็นการแปลงเชิงเส้นซึ่ง \(T(x+1) = x\), \(T(x-1) = 1\) และ \(T(x^2) = -x^2\) จงหา \(T(2 + 3x - x^2)\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — เขียน \(2 + 3x - x^2\) เป็นการรวมเชิงเส้นของ \(x+1, x-1, x^2\) (เทียบสัมประสิทธิ์) แล้วดึง \(T\) เข้าไป
      กลยุทธ์ของข้อนี้คือทฤษฎีบท 5.2.1: เราไม่รู้สูตรลับของ \(T\) เลย รู้แค่ค่าของมันบนสามเวกเตอร์ \(x+1, x-1, x^2\) ซึ่งเป็น<em>ฐานหลัก</em>ของ \(\mathbb{R}_2[x]\) (อิสระและแผ่ทั่ว เพราะ \(\dim \mathbb{R}_2[x] = 3\) พอดี) — เมื่อเป็นฐานหลัก ทุกพหุนามจะเขียนเป็นรวมเชิงเส้นได้แบบเดียว และความเป็นเชิงเส้นบังคับว่า \(T\) ของรวมเชิงเส้น = รวมเชิงเส้นของ \(T\) ดังนั้นแค่หาน้ำหนัก (สัมประสิทธิ์รวมเชิงเส้น) ให้เจอ ก็ดึงค่า \(T\) ที่โจทย์ให้มาประกอบได้ทันที</div>
      <ol class="steps">
        <li><span class="step-t">ตั้งสมการหาน้ำหนักแล้วกระจาย</span> ต้องการเขียน \(2 + 3x - x^2 = \alpha(x+1) + \beta(x-1) + \gamma x^2\) กระจายฝั่งขวาทีละวงเล็บ: \(\alpha x + \alpha + \beta x - \beta + \gamma x^2\) แล้วจัดกลุ่มตามดีกรี (คงตัว: \(\alpha\) กับ \(-\beta\) พจน์ \(x\): \(\alpha\) กับ \(\beta\)):
        \[ \text{ฝั่งขวา} = (\alpha - \beta) + (\alpha + \beta)x + \gamma x^2 \]</li>
        <li><span class="step-t">เทียบสัมประสิทธิ์ทีละดีกรีแล้วแก้ระบบ</span> พหุนามเท่ากัน ⇔ สัมประสิทธิ์ทุกดีกรีเท่ากัน:
        \[ \text{คงตัว: } \alpha - \beta = 2, \qquad x\text{: } \alpha + \beta = 3, \qquad x^2\text{: } \gamma = -1 \]
        แก้ด้วยการบวกสองสมการแรกเข้าด้วยกัน (ตัว \(\beta\) หักล้างกัน): \(2\alpha = 2 + 3 = 5 \Rightarrow \alpha = \tfrac52\) แล้วแทนย้อน: \(\beta = 3 - \tfrac52 = \tfrac{6-5}{2} = \tfrac12\) — สรุป \(\alpha = \tfrac52, \; \beta = \tfrac12, \; \gamma = -1\)</li>
        <li><span class="step-t">ดึง \(T\) เข้าไป (อ้างทฤษฎีบท 5.2.1 + ความเป็นเชิงเส้น)</span> เพราะ \(T\) เชิงเส้น น้ำหนักอยู่นอก \(T\) ได้:
        \[ T(2 + 3x - x^2) = T\!\left(\tfrac52(x+1) + \tfrac12(x-1) - x^2\right) = \tfrac52\,T(x+1) + \tfrac12\,T(x-1) - T(x^2) \]
        แทนค่าที่โจทย์ให้ \(T(x+1) = x\), \(T(x-1) = 1\), \(T(x^2) = -x^2\):
        \[ T(2 + 3x - x^2) = \tfrac52 x + \tfrac12 (1) - (-x^2) = \tfrac52 x + \tfrac12 + x^2 \]</li>
        <li><span class="step-t">สรุป</span>
        \[ T(2 + 3x - x^2) = \frac{1}{2} + \frac{5}{2}x + x^2 \]
        เขียนในรูปพิกัด: คำตอบคือพหุนามที่มีเวกเตอร์สัมประสิทธิ์ \(\left(\tfrac12, \tfrac52, 1\right)\) = (ค่าคงตัว, สัมประสิทธิ์ \(x\), สัมประสิทธิ์ \(x^2\)) — ตรวจคำตอบยืนยันด้วยน้ำหนักย้อนด้านล่างแล้ว ✓</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> ตรวจน้ำหนักย้อน: \(\tfrac52(x+1) + \tfrac12(x-1) - x^2 = (\tfrac52 - \tfrac12) + (\tfrac52 + \tfrac12)x - x^2 = 2 + 3x - x^2\) ✓</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3</span><span class="tag hard">ยาก</span><span class="ex-title">เคอร์เนลและเรนจ์ของการแทนค่า</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(T: \mathbb{R}_2[x] \to \mathbb{R}\) กำหนดโดย \(T(p) = p(1)\) จงหา \(\ker T\) และ \(\operatorname{range} T\) พร้อมทั้งตรวจทฤษฎีบทแรงก์</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — \(\ker T\) = พหุนามที่ราก 1 → เขียนเป็น Span / range = ค่าที่เป็นไปได้ทั้งหมด
      กลยุทธ์ของข้อนี้: <strong>เคอร์เนล (kernel)</strong> นิยามว่า \(\ker T = \{\vec{v} \in V : T(\vec{v}) = \vec{0}\}\) คือเวกเตอร์ทั้งหมดที่ถูกส่งไปศูนย์ — สำหรับการแทนค่า \(T(p) = p(1)\) แปลว่าพหุนามที่มี 1 เป็นราก · <strong>เรนจ์ (range)</strong> นิยามว่า \(\operatorname{range} T = \{T(\vec{v}) : \vec{v} \in V\}\) คือค่าผลลัพธ์ทั้งหมดที่ \(T\) ให้ได้ — ที่นี่ผลลัพธ์เป็นจำนวนจริง จึงต้องถามว่า "จำนวนไหนเกิดขึ้นได้บ้าง" · จบด้วย<strong>ทฤษฎีบทแรงก์</strong>: \(\dim V = \operatorname{rank} T + \operatorname{nullity} T\) เป็นการตรวจความสอดคล้องของคำตอบทั้งสองส่วน</div>
      <ol class="steps">
        <li><span class="step-t">หา \(\ker T\): แปลงเงื่อนไขเป็นสมการสัมประสิทธิ์</span> \(\ker T = \{p : T(p) = 0\} = \{p : p(1) = 0\}\) เขียน \(p = a + bx + cx^2\) (พิกัด \((a, b, c)\) = ค่าคงตัว, สัมประสิทธิ์ \(x\), สัมประสิทธิ์ \(x^2\)) แทน \(x = 1\): \(p(1) = a + b + c = 0 \Rightarrow a = -b - c\) → แทนกลับและจัดกลุ่มตาม \(b\), \(c\):
        \[ p = (-b - c) + bx + cx^2 = b(x - 1) + c(x^2 - 1) \;\Longrightarrow\; \ker T = \operatorname{Span}\{x - 1,\; x^2 - 1\} \]
        สองเวกเตอร์นี้อิสระกัน (มีเพียง \(x^2 - 1\) ตัวเดียวที่มีพจน์ \(x^2\)) → เป็นฐานหลักของเคอร์เนล → \(\operatorname{nullity} T = 2\) (<strong>โนลลิตี</strong> = มิติของเคอร์เนล)</li>
        <li><span class="step-t">หา \(\operatorname{range} T\): ถามว่าค่าอะไรเกิดขึ้นได้</span> ผลลัพธ์ของ \(T\) คือ \(p(1)\) ซึ่งเป็นจำนวนจริง — ได้ครบทุกจำนวนจริงหรือไม่? ได้ เพราะสำหรับ \(k \in \mathbb{R}\) ใด ๆ เลือกพหุนามคงตัว \(p(x) = k\) (พิกัด \(a = k, b = c = 0\)) แล้ว \(T(p) = p(1) = k\) → ทุกจำนวนจริงเกิดขึ้นได้จริง
        \[ \operatorname{range} T = \mathbb{R}, \qquad \operatorname{rank} T = \dim \mathbb{R} = 1 \]
        (<strong>แรงก์</strong> = มิติของเรนจ์ — ปลายทางคือ \(\mathbb{R}\) มีมิติ 1)</li>
        <li><span class="step-t">ตรวจทฤษฎีบทแรงก์และตอบ 1-1 / ทั่วถึง</span>
        \[ \dim \mathbb{R}_2[x] = 3 = \operatorname{rank} T + \operatorname{nullity} T = 1 + 2 \;\checkmark \]
        (มิติของต้นทาง = แรงก์ + โนลลิตี เสมอ) — \(T\) <strong>ทั่วถึง</strong> เพราะ \(\operatorname{rank} T = 1 = \dim \mathbb{R}\) (เรนจ์ครอบคลุมปลายทางทั้งหมด) แต่<strong>ไม่ 1-1</strong> เพราะ nullity = 2 &gt; 0 (มีพหุนามไม่ศูนย์ต่างกันหลายตัว เช่น \(x - 1\) กับ \(x^2 - 1\) ที่ถูกส่งไป 0 เหมือนกัน) — สรุปคำตอบเต็ม: \(\ker T = \operatorname{Span}\{x - 1, x^2 - 1\}\) (โนลลิตี 2), \(\operatorname{range} T = \mathbb{R}\) (แรงก์ 1), ทั่วถึงแต่ไม่ 1-1</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 4</span><span class="tag hard">ยาก</span><span class="ex-title">เคอร์เนลและเรนจ์ของการอนุพันธ์</span></div>
    <div class="ex-body">
      <div class="ex-q">กำหนด \(D: C^1(-\infty, \infty) \to \mathbb{R}^{\mathbb{R}}\) โดย \(D(f) = f'\) จงแสดงว่า \(D\) เป็นการแปลงเชิงเส้น แล้วหา \(\ker D\) และ \(\operatorname{range} D\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — สมบัติอนุพันธ์ \((f + cg)' = f' + cg'\) → linear; เคอร์เนล = ฟังก์ชันที่อนุพันธ์เป็นศูนย์ = ค่าคงตัว
      กลยุทธ์ของข้อนี้: อนุพันธ์คือ "การแปลงเชิงเส้นที่คุ้นเคยที่สุดจากแคลคูลัส" เพราะกฎผลบวกและกฎค่าคงที่คูณของอนุพันธ์ตรงกับนิยามการแปลงเชิงเส้นเป๊ะ ๆ · การหา<strong>เคอร์เนล</strong>คือถามย้อนว่า "ฟังก์ชันใดที่อนุพันธ์เป็นศูนย์ทุกจุด?" (คำตอบจากแคลคูลัส: ฟังก์ชันค่าคงตัว — กราฟเส้นแนวนอน) · การหา<strong>เรนจ์</strong>คือถามว่า "ฟังก์ชันใดเป็นอนุพันธ์ของใครบางคนได้?" (คำตอบ: ทุกฟังก์ชัน เพราะหาปฏิยานุพันธ์ได้เสมอ)</div>
      <ol class="steps">
        <li><span class="step-t">แสดงว่า \(D\) เป็นเชิงเส้น</span> จากกฎอนุพันธ์ในแคลคูลัส (กฎผลบวก + กฎค่าคงที่คูณ): \((f + cg)' = f' + cg'\) สำหรับฟังก์ชันที่อนุพันธ์ได้ใด ๆ และค่าคงที่ \(c\) ดังนั้น
        \[ D(f + cg) = (f + cg)' = f' + cg' = D(f) + cD(g) \;\checkmark \]
        เพราะสมการนี้ตรงกับนิยามการแปลงเชิงเส้นพอดี (รวบสมบัติการบวกและการคูณสเกลาร์ไว้ในบรรทัดเดียว) → \(D\) เป็นการแปลงเชิงเส้น</li>
        <li><span class="step-t">หา \(\ker D\)</span> ตามนิยาม: \(\ker D = \{f : D(f) = \vec{0}\} = \{f : f'(x) = 0 \text{ ทุก } x\}\) — จากแคลคูลัส ฟังก์ชันที่อนุพันธ์เป็นศูนย์บนช่วงจริงทั้งช่วงคือฟังก์ชันค่าคงตัว \(f(x) = c\) (เพราะไม่ลู่ขึ้นไม่ลู่ลงเลย):
        \[ \ker D = \{f : f(x) = c\} = \operatorname{Span}\{1\} \;\text{(มีมิติ 1)} \]
        (ทุกค่าคงตัว \(c\) เขียนเป็น \(c \cdot 1\) ได้ → ฐานหลักคือฟังก์ชันคงตัว \(1\) → โนลลิตี 1)</li>
        <li><span class="step-t">หา \(\operatorname{range} D\)</span> ถามว่าฟังก์ชันใด \(g\) เป็น "อนุพันธ์ของใครบางคน" ได้ — ตอบ: ทุกฟังก์ชัน เพราะหาปฏิยานุพันธ์ได้เสมอ เช่น \(f(x) = \int_0^x g(t)\,dt\) ซึ่ง \(D(f) = f' = g\) (ทฤษฎีบทหลักของแคลคูลัส) → ทุก \(g \in \mathbb{R}^{\mathbb{R}}\) ถูกยิงมาจากบาง \(f\) เสมอ:
        \[ \operatorname{range} D = \mathbb{R}^{\mathbb{R}} \]
        → \(D\) <strong>ทั่วถึง</strong> (เรนจ์ครอบคลุมปลายทางทั้งหมด) แต่<strong>ไม่ 1-1</strong> เพราะเคอร์เนลไม่ชัด (มีฟังก์ชันค่าคงตัวที่ไม่ใช่ศูนย์ เช่น \(f(x) = 5\) ถูกส่งไปศูนย์เหมือนฟังก์ชันศูนย์) — สรุปคำตอบเต็ม: \(D\) เป็นการแปลงเชิงเส้น, \(\ker D\) = ฟังก์ชันค่าคงตัวทั้งหมด (มิติ 1), \(\operatorname{range} D = \mathbb{R}^{\mathbb{R}}\) (ทั่วถึง)</li>
      </ol>
    </div>
  </article>
</section>

<section class="block" id="textbook">
  <h2><span class="h2-dot">📚</span> ตัวอย่างจากตำรา (พีชคณิต.pdf)</h2>
  <p class="page-sub">โจทย์ทุกข้อคัดมาตรงจากตำราประกอบการสอน โดยเรียงจากง่ายไปยาก — ใต้โจทย์แต่ละข้อมี "อธิบายโจทย์ง่าย ๆ" ช่วยให้เห็นว่าโจทย์ถามอะไรก่อนลงมือทำ</p>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5.2.1 (1, 3, 4, 6)</span><span class="tag book">จากตำรา</span><span class="tag easy">ง่าย</span><span class="ex-title">สี่การแปลงที่เป็นเชิงเส้น — ตรวจด้วยนิยามข้อเดียว</span></div>
    <div class="ex-body">
      <div class="ex-q">จงแสดงว่าการแปลงต่อไปนี้เป็นการแปลงเชิงเส้น
      (1) \(T: \mathbb{F}^n \to \mathbb{F}^{n-1}\) โดย \(T(x_1, x_2, \dots, x_n) = (x_2, x_3, \dots, x_n)\)
      (3) \(T: \mathbb{F}[x] \to \mathbb{F}\) โดย \(T(p(x)) = p(1)\)
      (4) \(T: M_{m,n}(\mathbb{F}) \to M_{n,m}(\mathbb{F})\) โดย \(T(A) = A^{T}\)
      (6) \(D: C^1(-\infty, \infty) \to \mathbb{R}^{\mathbb{R}}\) โดย \(D(f) = f'\)</div>
      <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — นิยามการแปลงเชิงเส้นรวบเป็นข้อเดียวได้: \(T(\vec{u} + c\vec{v}) = T(\vec{u}) + cT(\vec{v})\) ทุก \(\vec{u}, \vec{v}\), ทุก \(c\) — สาระสำคัญคือ "การบวกและการคูณสเกลาร์เกิดก่อนหรือหลัง \(T\) ก็ได้ผลเดียวกัน" ของทั้งสี่ข้อมีสูตรที่กระจายการบวก/สเกลาร์ได้สะอาด จึงเช็กทีละข้อได้สั้น ๆ</div>
      <ol class="steps">
        <li><span class="step-t">(1) เลื่อนหน้าต่างทิ้งพจน์แรก</span> \(T(\vec{u} + c\vec{v}) = (u_2 + cv_2, \dots, u_n + cv_n) = (u_2, \dots, u_n) + c(v_2, \dots, v_n) = T(\vec{u}) + cT(\vec{v})\) ✓ — <em>เพราะ</em>การ "ทิ้งพจน์แรก" ไม่ได้แตะต้องการบวก/คูณสเกลาร์ของพจน์ที่เหลือเลย</li>
        <li><span class="step-t">(3) การแทนค่ากระจายได้</span> \(T(p + cq) = (p + cq)(1) = p(1) + cq(1) = T(p) + cT(q)\) ✓ — สมบัติเดียวกับที่ทำให้ \(\{p : p(1) = 0\}\) เป็นปริภูมิย่อยในหัวข้อ 5.1 (การแทนค่าที่จุดเดียวเป็นสิ่งที่ "เชิงเส้นตลอดกาล")</li>
        <li><span class="step-t">(4) ทรานสโพสไม่บิดการบวก</span> \((A + cB)^T = A^T + cB^T\) ✓ — <em>เพราะ</em>ทรานสโพสแค่สลับแถวกับหลัก สมาชิกแต่ละตัวยังคงเป็น \(a_{ij} + cb_{ij}\) ไม่มีการคูณระหว่างสมาชิกเกิดขึ้น</li>
        <li><span class="step-t">(6) อนุพันธ์คือการแปลงเชิงเส้นตัวเก่ง</span> \((f + cg)' = f' + cg'\) ตามกฎผลบวกและกฎค่าคงที่คูณของแคลคูลัส ✓ — ตัวอย่างจริง: \(D(x^2 + 3\sin x) = 2x + 3\cos x = D(x^2) + 3D(\sin x)\) พอดี → <strong>\(D\) เป็นการแปลงเชิงเส้น</strong></li>
        <li><span class="step-t">สังเกตข้อที่ไม่ได้ยกมา</span> ข้อ (2) อ่านสัมประสิทธิ์พหุนามออกเป็นเวกเตอร์ และข้อ (5) ลิมิตของลำดับ \(T((a_n)) = \lim_{n \to \infty} a_n\) ก็เป็นเชิงเส้นด้วยเหตุผลแบบเดียวกัน (ลิมิตของผลบวก = ผลบวกลิมิต, ลิมิตของ \(c\) เท่า = \(c\) เท่าของลิมิต)</li>
      </ol>
      <div class="verify"><span class="lbl">สรุปคำตอบ:</span> ทั้งสี่ข้อเป็นการแปลงเชิงเส้น เพราะ \(T(\vec{u} + c\vec{v}) = T(\vec{u}) + cT(\vec{v})\) จริงทุกกรณี — และข้อ (3) ชี้ว่าปลายทางเป็นแค่สเกลาร์ (ฟังก์ชันนัลเชิงเส้น) ก็ยังนับเป็นการแปลงเชิงเส้น</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5.2.1 (7, 8)</span><span class="tag book">จากตำรา</span><span class="tag easy">ง่าย</span><span class="ex-title">สองตัวไม่ผ่าน — det และนอร์ม</span></div>
    <div class="ex-body">
      <div class="ex-q">จงแสดงว่า
      (7) \(T: M_2(\mathbb{R}) \to \mathbb{R}\) โดย \(T(A) = \det A\) สำหรับทุกๆ \(2 \times 2\) เมทริกซ์ \(A\)
      (8) \(T: \mathbb{R}^n \to \mathbb{R}\) โดย \(T(\vec{x}) = \|\vec{x}\|\) สำหรับทุกๆ \(\vec{x} \in \mathbb{R}^n\)
      ไม่เป็นการแปลงเชิงเส้น</div>
      <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — แสดงว่า "ไม่เชิงเส้น" ทำด้วย<em>ตัวอย่างค้านหนึ่งตัว</em> — เลือกเวกเตอร์ง่าย ๆ ที่ \(T(\vec{u} + \vec{v}) \neq T(\vec{u}) + T(\vec{v})\) หรือ \(T(c\vec{v}) \neq cT(\vec{v})\) ให้เห็นชัดกับตา แล้วจบทันที (สมบัติต้องจริงกับทุกตัว ตัวค้านเดียวพอ)</div>
      <ol class="steps">
        <li><span class="step-t">(7) ใช้เมทริกซ์เอกลักษณ์สองตัว</span> \(\det(I_2 + I_2) = \det(2I_2) = 4\) แต่ \(\det I_2 + \det I_2 = 1 + 1 = 2\) — \(4 \neq 2\) ✗ (สมบัติจริงของดีเทอร์มิแนนต์คือ \(\det(AB) = \det A \cdot \det B\) ซึ่งเป็นการ<em>คูณ</em> ไม่ใช่การบวก — ตรงนี้แหละที่คนเข้าใจผิดบ่อย)</li>
        <li><span class="step-t">(7) ทางเลือกอื่น: ดีเทอร์มิแนนต์ศูนย์สองตัวรวมกันไม่ศูนย์</span> \(A = \begin{bmatrix} 1 & 0\\ 0 & 0 \end{bmatrix},\; B = \begin{bmatrix} 0 & 0\\ 0 & 1 \end{bmatrix}\): \(\det A = \det B = 0\) แต่ \(\det(A + B) = \det I_2 = 1 \neq 0 + 0\) ✗ — "พื้นที่ศูนย์" สองทิศต่างกัน รวมกันได้พื้นที่ 1</li>
        <li><span class="step-t">(8) ความยาวลบสัญลักษณ์ไม่ได้</span> \(T(-\vec{x}) = \|-\vec{x}\| = \|\vec{x}\|\) แต่ถ้า \(T\) เชิงเส้นต้องได้ \(T(-\vec{x}) = -T(\vec{x})\) — ตัวค้าน: \(\vec{x} = (3, 0)\): \(T(-(3, 0)) = 3\) แต่ \(-T((3, 0)) = -3\) ✗ (หรือดูที่การบวก: \(\|(1, 0) + (0, 1)\| = \sqrt{2}\) แต่ \(1 + 1 = 2\) — อสมการอิงรูปสามเหลี่ยมเป็น "น้อยกว่า" ไม่ใช่ "เท่ากับ")</li>
        <li><span class="step-t">บทเรียนร่วม</span> สูตรที่มี det, นอร์ม, กำลังสองของสมาชิก หรือ "+ ค่าคงที่" ล้วนไม่เชิงเส้น — ทดสอบเร็วด้วย \(T(\vec{0}) = \vec{0}\) หรือ \(T(2\vec{v}) = 2T(\vec{v})\) ไว้เสมอ</li>
      </ol>
      <div class="verify"><span class="lbl">สรุปคำตอบ:</span> (7) ไม่เป็น เพราะ \(\det(A + B) \neq \det A + \det B\) (ตัวอย่าง: \(4 \neq 2\)) · (8) ไม่เป็น เพราะสมบัติเอกพันธ์ \(T(-\vec{x}) = -T(\vec{x})\) พังที่ \(\vec{x} = (3, 0)\)</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ลองทำ 5.2.1 ข้อ 1</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">ฟังก์ชันจาก \(M_2(\mathbb{R})\) ไป \(\mathbb{R}\) เป็นเชิงเส้นหรือไม่</span></div>
    <div class="ex-body">
      <div class="ex-q">จงพิจารณาว่าฟังก์ชันที่กำหนดให้ต่อไปนี้เป็นการแปลงเชิงเส้นจาก \(M_2(\mathbb{R})\) ไปยัง \(\mathbb{R}\) หรือไม่ เพราะเหตุใด
      (ก) \(T\left(\begin{bmatrix} a & b\\ c & d \end{bmatrix}\right) = a + c - 2d\) &nbsp;&nbsp; (ข) \(T\left(\begin{bmatrix} a & b\\ c & d \end{bmatrix}\right) = a^2 + b^2\)</div>
      <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — ข้อ (ก) สูตรเป็น "ผลรวมของ (ค่าคงที่)×(สมาชิก)" → มักเชิงเส้น ตรวจตามนิยามด้วยเมทริกซ์ทั่วไปสองตัว · ข้อ (ข) มี<em>กำลังสอง</em>ของสมาชิก → ลองตัวค้าน \(T(2A)\) เทียบ \(2T(A)\) ก่อนเป็นอย่างแรก</div>
      <ol class="steps">
        <li><span class="step-t">(ก) เขียน \(A + kB\) ทีละช่อง</span> ให้ \(A = \begin{bmatrix} a & b\\ c & d \end{bmatrix},\; B = \begin{bmatrix} a' & b'\\ c' & d' \end{bmatrix},\; k \in \mathbb{R}\): \(A + kB = \begin{bmatrix} a + ka' & b + kb'\\ c + kc' & d + kd' \end{bmatrix}\) (การบวก/คูณสเกลาร์ของเมทริกซ์ทำทีละช่อง)</li>
        <li><span class="step-t">(ก) แทนในสูตรแล้วแยกส่วน</span> \(T(A + kB) = (a + ka') + (c + kc') - 2(d + kd') = (a + c - 2d) + k(a' + c' - 2d') = T(A) + kT(B)\) ✓ — <em>เพราะ</em>สูตรรวมสมาชิกเชิงเส้น ทำให้ส่วนของ \(A\) กับส่วนของ \(B\) แยกออกจากกันสมบูรณ์ → <strong>(ก) เป็นการแปลงเชิงเส้น</strong></li>
        <li><span class="step-t">(ข) หาตัวค้าน</span> \(A = \begin{bmatrix} 1 & 0\\ 0 & 0 \end{bmatrix}\): \(T(A) = 1^2 + 0^2 = 1\) แต่ \(T(2A) = 2^2 + 0 = 4 \neq 2 = 2T(A)\) ✗ (จุดพัง: \((2a)^2 = 4a^2\) ไม่ใช่ \(2a^2\) — สเกลาร์ถูกยกกำลังตามไปด้วย) → <strong>(ข) ไม่เป็นการแปลงเชิงเส้น</strong></li>
        <li><span class="step-t">สังเกต</span> ปลายทางเป็นแค่จำนวนจริง \(\mathbb{R}\) ก็ต้องผ่านนิยามเดียวกันทุกอย่าง — ฟังก์ชันนัลเชิงเส้น (linear functional) ก็คือการแปลงเชิงเส้นที่ปลายทางเป็น \(\mathbb{F}\) นั่นเอง</li>
      </ol>
      <div class="verify"><span class="lbl">สรุปคำตอบ:</span> (ก) เป็นการแปลงเชิงเส้น เพราะ \(T(A + kB) = T(A) + kT(B)\) · (ข) ไม่เป็น เพราะสมบัติเอกพันธ์พังที่ \(A = \begin{bmatrix} 1 & 0\\ 0 & 0 \end{bmatrix}\) (\(4 \neq 2\))</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5.2.2 ข้อ 1</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">หาสูตร \(T: \mathbb{R}^3 \to \mathbb{R}_4[x]\) จากค่าบนฐานหลัก</span></div>
    <div class="ex-body">
      <div class="ex-q">จงหาสูตรของการแปลงเชิงเส้น \(T\) ซึ่งสอดคล้องเงื่อนไขที่กำหนดให้: \(T: \mathbb{R}^3 \to \mathbb{R}_4[x]\) โดยที่ \(T(1, 0, 0) = 1 + x\), \(T(1, 1, 1) = 2 + x^3\) และ \(T(0, 1, 0) = x^4 + 3x + 1\)</div>
      <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — <strong>ทฤษฎีบท 5.2.1</strong>: รู้ค่า \(T\) บนฐานหลัก = รู้ \(T\) ทั้งปริภูมิ — ขั้นแรกตรวจว่าสามเวกเตอร์ที่โจทย์ให้เป็นฐานหลักของ \(\mathbb{R}^3\) จริง จากนั้นเขียน \((a, b, c)\) เป็นรวมเชิงเส้นของสามตัวนั้น (เทียบพิกัด) แล้ว "ดึง \(T\) เข้าไป" ตามความเป็นเชิงเส้น</div>
      <ol class="steps">
        <li><span class="step-t">ตรวจว่าเป็นฐานหลัก</span> เวกเตอร์ 3 ตัวเป็นหลักของเมทริกซ์: \(\det\begin{bmatrix} 1 & 1 & 0\\ 0 & 1 & 1\\ 0 & 1 & 0 \end{bmatrix} = 1(0 - 1) - 1(0 - 0) + 0 = -1 \neq 0\) → อิสระ 3 ตัวในมิติ 3 → เป็นฐานหลัก (ข้อมูลที่โจทย์ให้จึงพอนิยาม \(T\) ได้ทั้งปริภูมิ และมี \(T\) ที่สอดคล้อง<em>อันเดียว</em>)</li>
        <li><span class="step-t">แก้น้ำหนัก</span> \((a, b, c) = \alpha(1, 0, 0) + \beta(1, 1, 1) + \gamma(0, 1, 0) = (\alpha + \beta,\; \beta + \gamma,\; \beta)\) เทียบทีละตำแหน่ง: \(\beta = c\) (จากตำแหน่งที่สาม) → \(\alpha = a - c\), \(\gamma = b - c\) — ไล่แก้จากตำแหน่งที่ให้ข้อมูลตรงที่สุดก่อน</li>
        <li><span class="step-t">ดึง \(T\) เข้าไป</span> ตามความเป็นเชิงเส้น:
        \[ T(a, b, c) = (a - c)\,T(1, 0, 0) + c\,T(1, 1, 1) + (b - c)\,T(0, 1, 0) = (a - c)(1 + x) + c(2 + x^3) + (b - c)(x^4 + 3x + 1) \]</li>
        <li><span class="step-t">รวมพจน์รายดีกรี</span> คงตัว: \((a - c) + 2c + (b - c) = a + b\) · พจน์ \(x\): \((a - c) + 3(b - c) = a + 3b - 4c\) · พจน์ \(x^3\): \(c\) · พจน์ \(x^4\): \(b - c\) — ไม่มีพจน์ \(x^2\) ซึ่งไม่ผิด เพราะปลายทาง \(\mathbb{R}_4[x]\) มีมิติ 5 ไม่จำเป็นต้องใช้ครบทุกดีกรี
        \[ T(a, b, c) = (a + b) + (a + 3b - 4c)\,x + c\,x^3 + (b - c)\,x^4 \]</li>
        <li><span class="step-t">ตรวจย้อนทั้งสามเงื่อนไข (ตรวจด้วย python3 แล้ว)</span> \(T(1, 0, 0) = 1 + 1x\) ✓ · \(T(1, 1, 1) = 2 + 0x + 1x^3 + 0x^4 = 2 + x^3\) ✓ · \(T(0, 1, 0) = 1 + 3x + 0 + 1x^4 = 1 + 3x + x^4\) ✓</li>
      </ol>
      <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(T(a, b, c) = (a + b) + (a + 3b - 4c)x + cx^3 + (b - c)x^4\) — และตามทฤษฎีบท 5.2.1 การแปลงที่สอดคล้องเงื่อนไขเหล่านี้มีเพียงอันเดียวเท่านั้น</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5.2.4 (เลือก 1, 3, 4)</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">เคอร์เนลและเรนจ์ของสามการแปลงจาก 5.2.1</span></div>
    <div class="ex-body">
      <div class="ex-q">จงหาเคอร์เนลและเรนจ์ของการแปลงเชิงเส้นในตัวอย่าง 5.2.1 (เลือกข้อ 1, 3 และ 4)
      (1) \(T(x_1, \dots, x_n) = (x_2, \dots, x_n)\) &nbsp;&nbsp; (3) \(T(p(x)) = p(1)\) &nbsp;&nbsp; (4) \(T(A) = A^{T}\)</div>
      <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — <strong>เคอร์เนล</strong> = แก้สมการ \(T(\vec{v}) = \vec{0}\) · <strong>เรนจ์</strong> = ถามว่าค่าผลลัพธ์ใดเกิดขึ้นได้ — ทั้งคู่เป็นปริภูมิย่อย (ทฤษฎีบท 5.2.3 และ 5.2.4) และเมื่อมิติจำกัด <strong>ทฤษฎีบทแรงก์</strong> \(\dim V = \operatorname{rank} T + \operatorname{nullity} T\) คือเครื่องตรวจว่าคำตอบสองส่วนสอดคล้องกันเสมอ</div>
      <ol class="steps">
        <li><span class="step-t">(1) เคอร์เนล: พิกัดไหนถูกทิ้ง</span> \(T(x_1, \dots, x_n) = (x_2, \dots, x_n) = \vec{0}\) บังคับ \(x_2 = \cdots = x_n = 0\) เหลือ \(x_1\) อิสระเพียงตัวเดียว → \(\ker T = \{(a, 0, \dots, 0) : a \in \mathbb{F}\} = \operatorname{Span}\{\vec{e}_1\}\), nullity \(T = 1\) (ตัวที่ \(T\) ทิ้งคือตัวที่รอดเข้าเคอร์เนล — บทเรียนสำคัญ)</li>
        <li><span class="step-t">(1) เรนจ์: ค่าอะไรเกิดขึ้นได้</span> เวกเตอร์ \((y_1, \dots, y_{n-1})\) ใด ๆ เกิดจาก \(T(0, y_1, \dots, y_{n-1})\) → \(\operatorname{range} T = \mathbb{F}^{n-1}\) ทั้งปริภูมิ, rank \(T = n - 1\) ตรวจทฤษฎีบทแรงก์: \(n = 1 + (n - 1)\) ✓ → <strong>ทั่วถึงแต่ไม่ 1-1</strong> (สมาชิกเคอร์เนลทุกตัวถูกยิงไป 0 เหมือนกัน)</li>
        <li><span class="step-t">(3) เคอร์เนล: พหุนามที่มี 1 เป็นราก</span> \(\ker T = \{p : p(1) = 0\} = \{q(x)(x - 1) : q \in \mathbb{F}[x]\}\) (ทฤษฎีบทตัวประกอบ) ฐานหลัก \(\{x - 1,\; x^2 - x,\; x^3 - x^2, \dots\}\) ไม่จำกัดจำนวน → nullity ไม่จำกัด (ที่นี่ \(V = \mathbb{F}[x]\) มีมิติไม่จำกัด ทฤษฎีบทแรงก์จึงใช้ตรง ๆ ไม่ได้ — โจทย์ของตำรายังตอบได้เพราะถามเฉพาะเซต)</li>
        <li><span class="step-t">(3) เรนจ์: จำนวนใดเกิดขึ้นได้</span> จำนวน \(k \in \mathbb{F}\) ใด ๆ เกิดจากพหุนามคงตัว \(p = k\) ที่ให้ \(p(1) = k\) → \(\operatorname{range} T = \mathbb{F}\), rank \(T = 1\) → <strong>ทั่วถึงแต่ไม่ 1-1</strong> (เช่น \(x - 1\) กับ \(x^2 - 1\) ถูกส่งไป 0 ทั้งคู่)</li>
        <li><span class="step-t">(4) ทรานสโพสเกือบสมบูรณ์แบบ</span> \(\ker T = \{A : A^T = 0\} = \{0\}\) (ทรานสโพสเป็นศูนย์ทุกช่อง = ตัวมันเองเป็นศูนย์ทุกช่อง) → nullity 0 → <strong>1-1</strong> · เรนจ์: เมทริกซ์ \(B \in M_{n,m}\) ใด ๆ คือ \(T(B^T)\) → \(\operatorname{range} T = M_{n,m}\) ทั้งปริภูมิ → <strong>ทั่วถึง</strong> ตรวจ: \(mn = 0 + mn\) ✓ — \(T\) 1-1 และทั่วถึง (มีตัวผกผัน: ทรานสโพสซ้ำอีกครั้ง \((A^T)^T = A\))</li>
      </ol>
      <div class="verify"><span class="lbl">สรุปคำตอบ:</span> (1) \(\ker T = \operatorname{Span}\{\vec{e}_1\}\), \(\operatorname{range} T = \mathbb{F}^{n-1}\) · (3) \(\ker T = \{p : p(1) = 0\}\) (มิติไม่จำกัด), \(\operatorname{range} T = \mathbb{F}\) · (4) \(\ker T = \{0\}\), \(\operatorname{range} T = M_{n,m}\) — และการตอบ 1-1/ทั่วถึงใช้ทฤษฎีบท 5.2.4(ข) กับบทแทรก 5.2.5</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5.2.3</span><span class="tag book">จากตำรา</span><span class="tag hard">ยาก</span><span class="ex-title">หา \(T(2 + 3x - x^2)\) จากค่าบนฐานหลักที่แปลกตา</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(T: \mathbb{R}_2[x] \to \mathbb{R}[x]\) เป็นการแปลงเชิงเส้น ซึ่ง \(T(x + 1) = x\), \(T(x - 1) = 1\) และ \(T(x^2) = -x^2\) จงหา \(T(2 + 3x - x^2)\)</div>
      <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — ตามทฤษฎีบท 5.2.1 เราไม่รู้สูตรลับของ \(T\) เลย รู้แค่ค่าบนสามเวกเตอร์ \(x + 1, x - 1, x^2\) ซึ่งเป็น<em>ฐานหลัก</em>ของ \(\mathbb{R}_2[x]\) (อิสระ 3 ตัว = \(\dim 3\) พอดี) — งานจึงมีสองขั้น: แตก \(2 + 3x - x^2\) เป็นรวมเชิงเส้นของสามตัวนี้ก่อน (เทียบสัมประสิทธิ์) แล้วจึงดึง \(T\) เข้าไป</div>
      <ol class="steps">
        <li><span class="step-t">ตั้งสมการน้ำหนักแล้วกระจาย</span> ต้องการ \(2 + 3x - x^2 = \alpha(x + 1) + \beta(x - 1) + \gamma x^2\) กระจายฝั่งขวา: \((\alpha - \beta) + (\alpha + \beta)x + \gamma x^2\) (คงตัวมาจาก \(\alpha\) กับ \(-\beta\) พจน์ \(x\) มาจาก \(\alpha\) กับ \(\beta\))</li>
        <li><span class="step-t">เทียบสัมประสิทธิ์แล้วแก้</span> คงตัว: \(\alpha - \beta = 2\) · พจน์ \(x\): \(\alpha + \beta = 3\) · พจน์ \(x^2\): \(\gamma = -1\) — บวกสองสมการแรกเข้าด้วยกัน (\(\beta\) หักล้าง): \(2\alpha = 5 \Rightarrow \alpha = \tfrac52\), \(\beta = 3 - \tfrac52 = \tfrac12\)</li>
        <li><span class="step-t">ดึง \(T\) เข้าไป</span> โดยความเป็นเชิงเส้น:
        \[ T(2 + 3x - x^2) = \tfrac52\,T(x + 1) + \tfrac12\,T(x - 1) - T(x^2) = \tfrac52 x + \tfrac12 - (-x^2) = x^2 + \tfrac52 x + \tfrac12 \]</li>
        <li><span class="step-t">ตรวจน้ำหนักย้อน</span> \(\tfrac52(x + 1) + \tfrac12(x - 1) - x^2 = (\tfrac52 - \tfrac12) + (\tfrac52 + \tfrac12)x - x^2 = 2 + 3x - x^2\) ✓ กลับมาได้ตรงเดิม</li>
      </ol>
      <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(T(2 + 3x - x^2) = x^2 + \tfrac{5}{2}x + \tfrac{1}{2}\) — ตรงกับที่เราแก้เองไว้ใน "ตัวอย่าง 2" ด้านบน ยืนยันว่าวิธีเดียวกันให้คำตอบเดียวกัน</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5.2.5</span><span class="tag book">จากตำรา</span><span class="tag hard">ยาก</span><span class="ex-title">เคอร์เนล เรนจ์ นูลลิตี และแรงก์ของ \(T(a + bx + cx^2) = (a+b,\; b+c,\; 0)\)</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(T: \mathbb{R}_2[x] \to \mathbb{R}^3\) เป็นการแปลงเชิงเส้น ซึ่งกำหนดโดย \(T(a + bx + cx^2) = (a + b,\; b + c,\; 0)\) จงหาฐานหลักสำหรับเคอร์เนลของ \(T\) และฐานหลักสำหรับเรนจ์ของ \(T\) พร้อมทั้งบอก nullity \(T\) และ rank \(T\)</div>
      <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — เคอร์เนล = แก้ \(T = \vec{0}\) ด้วยการเทียบสมการทีละพิกัด · เรนจ์ = รูปที่ผลลัพธ์ \((a+b,\; b+c,\; 0)\) เข้าได้ทั้งหมด — สังเกตตั้งแต่แรกว่าพิกัดที่สามล็อกเป็น 0 ตลอด จึงคาดได้ว่าเรนจ์ไม่เต็ม \(\mathbb{R}^3\) — ปิดท้ายตรวจทุกอย่างด้วยทฤษฎีบทแรงก์</div>
      <ol class="steps">
        <li><span class="step-t">เคอร์เนล: แก้สองสมการ</span> \(T = \vec{0}\) ให้ \(a + b = 0\) และ \(b + c = 0\) (พิกัดที่สาม \(0 = 0\) ไม่บังคับอะไร) → \(a = -b\), \(c = -b\) → \(p = -b + bx - bx^2 = b(-1 + x - x^2)\) โดย \(b \in \mathbb{R}\)
        \[ \ker T = \operatorname{Span}\{-1 + x - x^2\} \qquad \text{nullity } T = 1 \]
        (ตรวจ: \(T(-1 + x - x^2) = (-1 + 1,\; 1 - 1,\; 0) = (0, 0, 0)\) ✓)</li>
        <li><span class="step-t">เรนจ์: พิกัดไหนล็อก</span> ผลลัพธ์มีรูป \((u, v, 0)\) โดย \(u = a + b\), \(v = b + c\) — ให้ค่า \(u, v\) ใด ๆ เลือก \(b = 0,\; a = u,\; c = v\) ก็ได้ตรง → เรนจ์ = ระนาบ \(z = 0\)
        \[ \operatorname{range} T = \operatorname{Span}\{(1, 0, 0)^T,\; (0, 1, 0)^T\} \qquad \text{rank } T = 2 \]</li>
        <li><span class="step-t">มุมเสริม: ภาพของฐานหลักมาตรฐาน</span> \(T(1) = (1, 0, 0)^T\), \(T(x) = (1, 1, 0)^T\), \(T(x^2) = (0, 1, 0)^T\) — สามตัวนี้แผ่เรนจ์ แต่ \(T(x) = T(1) + T(x^2)\) (ตรวจ: \((1,1,0) = (1,0,0) + (0,1,0)\) ✓) จึงเหลืออิสระ 2 ตัว → rank 2 สอดคล้องกัน</li>
        <li><span class="step-t">ตรวจทฤษฎีบทแรงก์และตอบ 1-1/ทั่วถึง</span>
        \[ \dim \mathbb{R}_2[x] = 3 = \operatorname{rank} T + \operatorname{nullity} T = 2 + 1 \;\checkmark \]
        → \(T\) <strong>ไม่ 1-1</strong> (nullity \(= 1 &gt; 0\) — เช่น \(-1 + x - x^2\) กับพหุนามศูนย์ถูกส่งไป \((0,0,0)\) เหมือนกัน) และ<strong>ไม่ทั่วถึง</strong> (rank \(2 &lt; 3\) — เวกเตอร์ \((0, 0, 1)^T\) ไม่มีใครยิงมาถึง)</li>
      </ol>
      <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(\ker T = \operatorname{Span}\{-1 + x - x^2\}\) (nullity 1) · \(\operatorname{range} T = \operatorname{Span}\{(1,0,0)^T, (0,1,0)^T\}\) (rank 2) — ไม่ 1-1 และไม่ทั่วถึง ตรวจทฤษฎีบทแรงก์ \(2 + 1 = 3\) ✓</div>
    </div>
  </article>
</section>

<section class="block" id="apply">
  <h2><span class="h2-dot">🌍</span> เอาไปใช้ทำอะไร — โจทย์ประยุกต์</h2>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">🎢 ความเร็วจากกล้องติดตาม</span><span class="tag app">ใช้จริง</span><span class="tag easy">ง่าย</span><span class="ex-title">อนุพันธ์ \(D(f) = f'\) เป็นการแปลงเชิงเส้น — และ kernel คือ "ความเร็วศูนย์"</span></div>
    <div class="ex-body">
      <div class="ex-q">กล้องติดตามรถบันไดเลื่อนบันทึกตำแหน่งได้ \(s(t) = 5t - t^2\) เมตร (เมื่อ \(t\) วินาที) จงหาอัตราเร็วที่ \(t = 2\) วินาที และอธิบายว่าการเคลื่อนที่แบบใดที่เครื่องวัดความเร็วให้ 0 ตลอดเวลา</div>
      <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — อัตราเร็วคืออนุพันธ์ \(v = D(s) = s'\) ซึ่งเป็น<em>การแปลงเชิงเส้น</em> (กฎผลบวกและกฎค่าคงที่คูณของแคลคูลัส = นิยามการแปลงเชิงเส้นพอดี) — คำถามที่สองคือหา \(\ker D\): ฟังก์ชันตำแหน่งแบบใดที่อนุพันธ์เป็นศูนย์ทุกจุด</div>
      <ol class="steps">
        <li><span class="step-t">อนุพันธ์ทีละพจน์ (ความเป็นเชิงเส้นในการกระทำจริง)</span> \(v(t) = D(s)(t) = D(5t - t^2) = 5D(t) - D(t^2) = 5 - 2t\) เมตร/วินาที — การกระจายทีละพจน์ได้เลย<em>เพราะ</em>\(D\) เชิงเส้น</li>
        <li><span class="step-t">แทนเวลา</span> ที่ \(t = 2\): \(v(2) = 5 - 4 = 1\) เมตร/วินาที — กำลังขึ้นช้า ๆ</li>
        <li><span class="step-t">หา \(\ker D\)</span> ฟังก์ชันที่ \(s'(t) = 0\) ทุก \(t\) คือฟังก์ชันคงตัว \(s(t) = C\) (กราฟเส้นแนวนอน) — จอดนิ่ง แต่จอด "ที่ไหนก็ได้" เพราะ \(C\) ใด ๆ ก็ได้ → \(\ker D = \operatorname{Span}\{1\}\), nullity = 1</li>
        <li><span class="step-t">ตีความด้วยทฤษฎีบทแรงก์</span> จากอัตราเร็วอย่างเดียวหาตำแหน่งสมบูรณ์ไม่ได้ <em>เพราะ</em>เคอร์เนลมีมิติ 1 — ขาด "ค่าเริ่มต้น" \(s(0)\) เพียงค่าเดียวเท่านั้นเอง (นี่คือเหตุผลที่ระบบนำทางต้องตั้งจุดเริ่มต้นก่อนนับระยะ)</li>
      </ol>
      <div class="verify"><span class="lbl">เห็นไหมว่า...</span> "ความเร็ว 0 = จอด แต่ไม่รู้จอดที่ไหน" คือ nullity ของการอนุพันธ์ในฉบับชีวิตจริง — และความจริงที่ \(D\) เป็นเชิงเส้นคือเหตุผลที่ซอฟต์แวร์ประมวลผลสัญญาณ (เซนเซอร์วัดการสั่น อุปกรณ์วัดความเร่ง) กล้าอนุพันธ์ข้อมูลที่เป็นผลรวมของหลายสัญญาณพร้อมกัน เพราะอนุพันธ์ของผลรวม = ผลรวมของอนุพันธ์เสมอ</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">🖼️ ขอบภาพในกล้องมือถือ</span><span class="tag app">ใช้จริง</span><span class="tag mid">กลาง</span><span class="ex-title">อนุพันธ์เชิงตัวเลข — ขอบอยู่ที่ค่าใหญ่ kernel คือพื้นเรียบ</span></div>
    <div class="ex-body">
      <div class="ex-q">ภาพขาวดำแถวหนึ่งมีค่าความสว่าง 6 พิกเซล \(\vec{x} = (10, 10, 10, 90, 90, 90)\) กล้องใช้การแปลง \(\Delta: \mathbb{R}^6 \to \mathbb{R}^5\) โดย \(\Delta(x_1, \dots, x_6) = (x_2 - x_1,\; x_3 - x_2,\; \dots,\; x_6 - x_5)\) (อนุพันธ์เชิงตัวเลข) จงหา \(\Delta(\vec{x})\) บอกว่า "ขอบ" อยู่ตำแหน่งใด แล้วพิจารณาว่า \(\ker \Delta\) คือเวกเตอร์หน้าตาอย่างไร</div>
      <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — ขอบภาพ = จุดที่ความสว่างเปลี่ยนเร็ว = ตำแหน่งที่ค่า "อนุพันธ์" ใหญ่ — \(\Delta\) เป็นการแปลงเชิงเส้น (ผลต่างคือการบวกด้วยเวกเตอร์ลบ) ส่วนเคอร์เนลคือสัญญาณที่ผลต่างเป็นศูนย์ทุกช่อง = ค่าเท่ากันหมด = ภาพเรียบ</div>
      <ol class="steps">
        <li><span class="step-t">คำนวณทีละช่อง</span> \(10 - 10 = 0,\; 10 - 10 = 0,\; 90 - 10 = 80,\; 90 - 90 = 0,\; 90 - 90 = 0\) → \(\Delta(\vec{x}) = (0, 0, 80, 0, 0)\) — ค่า 80 โผล่ที่ช่องที่ 3 แปลว่าขอบอยู่ "ระหว่างพิกเซลที่ 3 กับ 4" พอดี (จุดกระโดดของความสว่าง)</li>
        <li><span class="step-t">\(\Delta\) เป็นเชิงเส้นจริงไหม</span> ช่องใด ๆ ของ \(\Delta(\vec{u} + c\vec{v})\) คือ \((u_{i+1} + cv_{i+1}) - (u_i + cv_i) = (u_{i+1} - u_i) + c(v_{i+1} - v_i)\) = ช่องเดียวกันของ \(\Delta(\vec{u}) + c\Delta(\vec{v})\) ✓ — จริง ๆ เขียน \(\Delta\) เป็นเมทริกซ์ที่มี \(-1\) กับ \(1\) คู่กันตามทแยงได้เลย</li>
        <li><span class="step-t">หา \(\ker \Delta\)</span> \(\Delta(\vec{x}) = \vec{0}\) หมายถึง \(x_1 = x_2 = \cdots = x_6\) — สัญญาณคงตัว = ภาพสีเดียวทั้งแถว (ค่าสว่างใด ๆ ก็ได้ ไม่ว่า 10 หรือ 90 หรือ 255) → \(\ker \Delta = \operatorname{Span}\{(1,1,1,1,1,1)^T\}\), nullity = 1</li>
        <li><span class="step-t">ตีความ</span> edge detector "ลบทิ้ง" พื้นหลังเรียบโดยอัตโนมัติ<em>เพราะ</em>พื้นเรียบทุกแบบอยู่ในเคอร์เนล — เหมือนการอนุพันธ์ที่เหยียบฟังก์ชันคงตัวให้เป็นศูนย์ ส่วนข้อมูลที่เปลี่ยนแปลงถูกขยายให้เห็นชัด (80 โผล่มาจากที่ไหนไม่รู้ในตอนแรก กลายเป็นสัญญาณเดียวที่เหลือ)</li>
      </ol>
      <div class="verify"><span class="lbl">เห็นไหมว่า...</span> โหมดสแกนเอกสาร/จับใบหน้าในมือถือของคุณทำงานบนหลักนี้ทั้งหมด: อนุพันธ์เชิงตัวเลข = การแปลงเชิงเส้นที่พื้นเรียบหายไปในเคอร์เนล (nullity 1 บอกด้วยว่า "ภาพสีเดียวทุกแบบ" มีมิติเดียว จึงตัดทิ้งได้ไม่เสียขอบ) และแนวคิดเดียวกันนี้ขยายเป็น Sobel/Prewitt filter ที่ทำงานสองมิติในกล้องจริง</div>
    </div>
  </article>
</section>

<section class="block" id="recipe">
  <h2><span class="h2-dot">⚡</span> สูตรสำเร็จ — ท่าที่ใช้ทำโจทย์หัวข้อนี้</h2>
  <div class="recipe">
    <div class="recipe-head">🪜 ท่าหลัก: หา ker T, range T และใช้ทฤษฎีบทแรงก์</div>
    <div class="recipe-body">
      <ol>
        <li><strong>ตรวจเชิงเส้น:</strong> \(T(\vec{0}) = \vec{0}\) ก่อน (ฟังก์ชันมี "+1", กำลังสอง, |·|, det มักพังตรงนี้) แล้วเช็กการกระจาย</li>
        <li><strong>หา \(T(\vec{x})\) จากฐานหลัก:</strong> เขียน \(\vec{x} = \sum c_i\vec{v}_i\) (เทียบสัมประสิทธิ์) → \(T(\vec{x}) = \sum c_i T(\vec{v}_i)\)</li>
        <li><strong>\(\ker T\):</strong> แก้เงื่อนไข \(T(\vec{x}) = \vec{0}\) (เทียบสัมประสิทธิ์ในพหุนาม/สมาชิกเมทริกซ์) → เขียนเป็น Span → nullity</li>
        <li><strong>\(\operatorname{range} T\):</strong> หาว่าค่าออกมาได้รูปแบบใด → Span ของ \(T(\vec{v}_i)\) (ฐานหลักพอ) → rank</li>
        <li>ตรวจ: \(\dim V = \operatorname{rank} + \operatorname{nullity}\) และตอบ 1-1/ทั่วถึงจาก nullity/rank</li>
      </ol>
    </div>
  </div>
  <div class="key-grid">
    <div class="key-card"><div class="k-title">ท่า: ไม่เชิงเส้นที่พบบ่อย</div>\(\det\), \(\operatorname{tr}\)? (tr เป็นเชิงเส้นนะ!) — จำ: det ไม่เชิงเส้น, tr เชิงเส้น, นอร์มไม่เชิงเส้น, +ค่าคงตัวไม่เชิงเส้น</div>
    <div class="key-card"><div class="k-title">ท่า: เทียบสัมประสิทธิ์</div>สมการพหุนาม = ระบบเชิงเส้นของสัมประสิทธิ์แต่ละดีกรี — เครื่องมือแก้ทุกโจทย์ของ \(\mathbb{F}_n[x]\)</div>
    <div class="key-card"><div class="k-title">ท่า: แรงก์ใช้ตอบไว</div>rank + nullity = \(\dim V\) เสมอ — รู้อันหนึ่งได้อีกอันทันทีแม้ไม่คำนวณเคอร์เนล</div>
    <div class="key-card"><div class="k-title">ท่า: เทียบกับเมทริกซ์</div>\(\ker T \leftrightarrow \operatorname{Nul} A\), \(\operatorname{range} T \leftrightarrow \operatorname{Col} A\) — อ่านซ้ำหัวข้อ 2.2/2.1 ได้เลย</div>
  </div>
</section>

<section class="block" id="practice">
  <h2><span class="h2-dot">🏋️</span> โจทย์ซ้อมมือ (6 ข้อ)</h2>
  <p class="small">ลองทำเองก่อน แล้วค่อยกดเปิดคำใบ้ → เฉลยทีละขั้น เมื่อทำได้แล้วติ๊ก ✓ เพื่อบันทึกความคืบหน้า</p>

  <article class="pr-card" data-pkey="p5-2-1">
    <div class="pr-head"><span class="pr-num">ข้อ 1</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงพิจารณาว่า \(T: M_2(\mathbb{R}) \to \mathbb{R}\) กำหนดโดย \(T\left(\begin{bmatrix} a & b\\ c & d \end{bmatrix}\right) = \operatorname{tr} A = a + d\) เป็นการแปลงเชิงเส้นหรือไม่</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">สมบัติของ trace: \(\operatorname{tr}(A + kB) = \operatorname{tr} A + k\operatorname{tr} B\) — เช็กสองสมบัติตามนิยาม</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> เช็กสมบัติการบวกและการคูณสเกลาร์ตามนิยาม — <strong>เทรซ (trace)</strong> นิยามว่า \(\operatorname{tr} A\) = ผลบวกของสมาชิกบนเส้นทแยงมุมหลัก ที่นี่ \(\operatorname{tr}\begin{bmatrix} a & b\\ c & d \end{bmatrix} = a + d\) — เคล็ดลับจำง่าย: สูตรที่เป็น "ผลรวมของ (ค่าคงที่)×(สมาชิก)" แบบนี้มักเชิงเส้นเสมอ เพราะการบวก/คูณสเกลาร์ของเมทริกซ์กระทำต่อสมาชิกทีละช่อง</p>
      <ol class="steps">
        <li><span class="step-t">เช็กสมบัติการบวก: \(\operatorname{tr}(A + B) = \operatorname{tr} A + \operatorname{tr} B\)?</span> ให้ \(A = \begin{bmatrix} a_{11} & a_{12}\\ a_{21} & a_{22} \end{bmatrix}\) และ \(B = \begin{bmatrix} b_{11} & b_{12}\\ b_{21} & b_{22} \end{bmatrix}\) ผลบวก \(A + B\) มีสมาชิกทแยงเป็น \((a_{11} + b_{11})\) และ \((a_{22} + b_{22})\) ดังนั้น
        \[ \operatorname{tr}(A + B) = (a_{11} + b_{11}) + (a_{22} + b_{22}) = (a_{11} + a_{22}) + (b_{11} + b_{22}) = \operatorname{tr} A + \operatorname{tr} B \;\checkmark \]
        (เพียงจัดกลุ่มใหม่: พจน์ของ \(A\) รวมกันเป็น \(\operatorname{tr} A\) พจน์ของ \(B\) รวมกันเป็น \(\operatorname{tr} B\))</li>
        <li><span class="step-t">เช็กสมบัติสเกลาร์: \(\operatorname{tr}(kA) = k\operatorname{tr} A\)?</span> \(kA\) มีสมาชิกทแยงเป็น \(ka_{11}\) และ \(ka_{22}\) ดังนั้น
        \[ \operatorname{tr}(kA) = ka_{11} + ka_{22} = k(a_{11} + a_{22}) = k\operatorname{tr} A \;\checkmark \]
        (แยกตัวประกอบ \(k\) ออกจากทั้งสองพจน์ได้)</li>
        <li><span class="step-t">สรุป</span> ผ่านทั้งสองสมบัติของนิยาม → <strong>\(T\) เป็นการแปลงเชิงเส้น</strong> (และเป็น "ฟังก์ชันนัลเชิงเส้น — linear functional" คือการแปลงเชิงเส้นที่ปลายทางเป็นสเกลาร์ \(\mathbb{R}\)) — ตรวจด้วยตัวเลขจริง: \(A = \begin{bmatrix} 2 & 9\\ 9 & 3 \end{bmatrix}\) มี \(\operatorname{tr} A = 2 + 3 = 5\) และ \(\operatorname{tr}(2A) = 4 + 6 = 10 = 2 \times 5\) ✓</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p5-2-2">
    <div class="pr-head"><span class="pr-num">ข้อ 2</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงพิจารณาว่า \(T: \mathbb{R}_2[x] \to \mathbb{R}_2[x]\) กำหนดโดย \(T(a_0 + a_1x + a_2x^2) = (a_0 + 1) + (a_1 + 1)x + (a_2 + 1)x^2\) เป็นการแปลงเชิงเส้นหรือไม่</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">ลอง \(T(\vec{0})\) — พหุนามศูนย์ \(0 + 0x + 0x^2\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> การแปลงเชิงเส้นต้องส่ง \(\vec{0}\) ไป \(\vec{0}\) เสมอ — เหตุผล: จากความเป็นเชิงเส้น \(T(\vec{0}) = T(\vec{0} + \vec{0}) = T(\vec{0}) + T(\vec{0})\) แล้วตัด \(T(\vec{0})\) ทั้งสองข้าง ได้ \(\vec{0} = T(\vec{0})\) — เมื่อสูตรมีการ "บวกค่าคงที่" แบบนี้ ให้ลองแทน \(\vec{0}\) ก่อนเป็นอย่างแรก จะเร็วกว่าเช็กสมบัติเต็มสองข้อ</p>
      <ol class="steps">
        <li><span class="step-t">หาเวกเตอร์ศูนย์ของ \(\mathbb{R}_2[x]\) แล้วแทนลงในสูตร</span> เวกเตอร์ศูนย์คือพหุนามศูนย์ \(0 + 0x + 0x^2\) (สัมประสิทธิ์ทุกตัวเป็นศูนย์ คือ \(a_0 = a_1 = a_2 = 0\)) แทนลงในสูตร \(T(a_0 + a_1x + a_2x^2) = (a_0 + 1) + (a_1 + 1)x + (a_2 + 1)x^2\):
        \[ T(0 + 0x + 0x^2) = (0 + 1) + (0 + 1)x + (0 + 1)x^2 = 1 + x + x^2 \neq \vec{0} \]
        ✗ (พหุนามศูนย์เข้าไป แต่ออกมาเป็น \(1 + x + x^2\) ซึ่งไม่ใช่พหุนามศูนย์)</li>
        <li><span class="step-t">สรุป</span> \(T(\vec{0}_V) = 1 + x + x^2 \neq \vec{0}_W\) → <strong>\(T\) ไม่เป็นการแปลงเชิงเส้น</strong> (เพราะการแปลงเชิงเส้นทุกตัวต้องส่งศูนย์ไปศูนย์ — ขัดข้อบังคับนี้ที่จุดเดียวก็สรุปได้) — จุดพังคลาสสิกคือการ "บวก 1" ทุกสัมประสิทธิ์ ซึ่งทำให้พหุนามศูนย์กลายเป็น \(1 + x + x^2\) ทันที</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p5-2-3">
    <div class="pr-head"><span class="pr-num">ข้อ 3</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(T: \mathbb{R}_1[x] \to \mathbb{R}^3\) เป็นการแปลงเชิงเส้นซึ่ง \(T(2 - x) = (1, -1, 1)^T\) และ \(T(1 + x) = (0, 1, 0)^T\) จงหา \(T(-1 + 2x)\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">แก้ \(-1 + 2x = \alpha(2 - x) + \beta(1 + x)\): \(2\alpha + \beta = -1\), \(-\alpha + \beta = 2\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> เขียนเป็นรวมเชิงเส้นของเวกเตอร์ที่รู้ค่า แล้วดึง \(T\) เข้าไป — กลยุทธ์เดียวกับตัวอย่าง 2 (ทฤษฎีบท 5.2.1): เรารู้ค่า \(T\) บน \(2 - x\) และ \(1 + x\) ซึ่งเป็นฐานหลักของ \(\mathbb{R}_1[x]\) (สองตัวอิสระกันเพราะไม่ใช่สเกลาร์ของกันและกัน และ \(\dim \mathbb{R}_1[x] = 2\) พอดี) งานจึงมีสองขั้น: แก้หาน้ำหนัก \(\alpha, \beta\) แล้วใช้ความเป็นเชิงเส้นดึง \(T\) ออก</p>
      <ol class="steps">
        <li><span class="step-t">ตั้งสมการและเทียบสัมประสิทธิ์</span> ต้องการ \(-1 + 2x = \alpha(2 - x) + \beta(1 + x)\) กระจายฝั่งขวา: \((2\alpha + \beta) + (-\alpha + \beta)x\) เทียบสัมประสิทธิ์กับ \(-1 + 2x\) (พิกัดของ \(-1 + 2x\) คือ (คงตัว, สัมประสิทธิ์ \(x\)) \(= (-1, 2)\)):
        \[ \text{คงตัว: } 2\alpha + \beta = -1, \qquad x\text{: } -\alpha + \beta = 2 \]
        ลบสมการที่สองออกจากสมการแรก (ตัว \(\beta\) หายไป): \(2\alpha - (-\alpha) = -1 - 2 \Rightarrow 3\alpha = -3 \Rightarrow \alpha = -1\) แทนย้อน: \(-(-1) + \beta = 2 \Rightarrow 1 + \beta = 2 \Rightarrow \beta = 1\)
        \[ -1 + 2x = -(2 - x) + (1 + x) \]
        (ตรวจน้ำหนักย้อน: \(-(2 - x) + (1 + x) = -2 + x + 1 + x = -1 + 2x\) ✓ กลับมาได้ตรงเดิม)</li>
        <li><span class="step-t">ดึง \(T\) เข้าไป</span> โดยความเป็นเชิงเส้น \(T(\alpha\vec{u} + \beta\vec{w}) = \alpha T(\vec{u}) + \beta T(\vec{w})\):
        \[ T(-1 + 2x) = -T(2 - x) + T(1 + x) = -(1, -1, 1)^T + (0, 1, 0)^T \]
        ลบแบบตำแหน่งต่อตำแหน่ง: ตำแหน่งแรก \(0 - 1 = -1\) ตำแหน่งที่สอง \(1 - (-1) = 2\) ตำแหน่งที่สาม \(0 - 1 = -1\) — สรุป
        \[ T(-1 + 2x) = (-1, 2, -1)^T \]</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p5-2-4">
    <div class="pr-head"><span class="pr-num">ข้อ 4</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(T: M_2(\mathbb{R}) \to M_2(\mathbb{R})\) กำหนดโดย \(T(A) = A - A^T\) จงหา \(\ker T\) และ \(\operatorname{range} T\) พร้อมทั้งตรวจทฤษฎีบทแรงก์</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(T(A) = 0\) ⇔ \(A^T = A\) (สมมาตร) มีมิติ 3 / ผลลัพธ์ \(T(A)\) เป็นเมทริกซ์แอนติสมมาตร (\(B^T = -B\)) มีมิติ 1</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> แปลเงื่อนไข \(T(A) = \vec{0}\) เป็นสมบัติของ \(A\) — สำหรับ \(\ker T\) แก้สมการ \(A - A^T = 0\) จะได้เงื่อนไข "สมมาตร" (\(A^T = A\) — สมาชิกกระจกข้ามเส้นทแยงเท่ากัน) · สำหรับ \(\operatorname{range} T\) ให้สังเกตสมบัติพิเศษของผลลัพธ์ก่อนว่า "ทรานสโพสแล้วกลายเป็นตัวลบ" (เมทริกซ์แอนติสมมาตร) แล้วจึงนับมิติ · ปิดท้ายตรวจด้วยทฤษฎีบทแรงก์ \(\dim M_2(\mathbb{R}) = 4 = \operatorname{rank} + \operatorname{nullity}\)</p>
      <ol class="steps">
        <li><span class="step-t">หา \(\ker T\): แก้ \(T(A) = \vec{0}\)</span> \(T(A) = A - A^T = 0 \Leftrightarrow A = A^T\) (ย้ายข้าง \(A^T\)) → เคอร์เนลคือเซตของ<em>เมทริกซ์สมมาตร</em> ซึ่งมีรูป \(\begin{bmatrix} a & b\\ b & d \end{bmatrix}\) (สมาชิกตำแหน่ง (1,2) ต้องเท่ากับตำแหน่ง (2,1) จึงใช้ \(b\) ร่วมกัน) — แยกพารามิเตอร์เหมือนตัวอย่าง 4 ของหน้า 5.1:
        \[ \begin{bmatrix} a & b\\ b & d \end{bmatrix} = a\begin{bmatrix} 1 & 0\\ 0 & 0 \end{bmatrix} + b\begin{bmatrix} 0 & 1\\ 1 & 0 \end{bmatrix} + d\begin{bmatrix} 0 & 0\\ 0 & 1 \end{bmatrix} \]
        สามเมทริกซ์นี้อิสระกัน (แต่ละตัวมี 1 คนละตำแหน่ง) →
        \[ \ker T = \left\{ \begin{bmatrix} a & b\\ b & d \end{bmatrix} \right\} = \operatorname{Span}\left\{ \begin{bmatrix} 1 & 0\\ 0 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 1\\ 1 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 0\\ 0 & 1 \end{bmatrix} \right\}, \;\; \operatorname{nullity} T = 3 \]</li>
        <li><span class="step-t">หา \(\operatorname{range} T\): สังเกตสมบัติของผลลัพธ์ก่อน</span> ทรานสโพสของผลลัพธ์: \(T(A)^T = (A - A^T)^T = A^T - (A^T)^T = A^T - A = -(A - A^T) = -T(A)\) (ใช้สมบัติ \((A - B)^T = A^T - B^T\) และ \((A^T)^T = A\)) → ผลลัพธ์ทุกตัวเป็น<em>เมทริกซ์แอนติสมมาตร</em> (\(B^T = -B\)) ซึ่งใน \(2\times2\) มีได้รูป \(\begin{bmatrix} 0 & x\\ -x & 0 \end{bmatrix}\) เท่านั้น (เพราะเส้นทแยงต้องเท่ากับลบของตัวเอง: \(a = -a \Rightarrow a = 0\)) — และทุกตัวแบบนี้เกิดขึ้นจริง เพราะ
        \[ T\left(\begin{bmatrix} 0 & x/2\\ -x/2 & 0 \end{bmatrix}\right) = \begin{bmatrix} 0 & x/2\\ -x/2 & 0 \end{bmatrix} - \begin{bmatrix} 0 & -x/2\\ x/2 & 0 \end{bmatrix} = \begin{bmatrix} 0 & x\\ -x & 0 \end{bmatrix} \;\checkmark \]
        (ตำแหน่ง (1,2): \(\tfrac{x}{2} - \left(-\tfrac{x}{2}\right) = \tfrac{x}{2} + \tfrac{x}{2} = x\) ✓) → เรนจ์ครอบคลุมแอนติสมมาตรทั้งหมด:
        \[ \operatorname{range} T = \operatorname{Span}\left\{ \begin{bmatrix} 0 & 1\\ -1 & 0 \end{bmatrix} \right\}, \;\; \operatorname{rank} T = 1 \]</li>
        <li><span class="step-t">ตรวจทฤษฎีบทแรงก์และสรุป</span>
        \[ \dim M_2(\mathbb{R}) = 4 = \operatorname{rank} T + \operatorname{nullity} T = 1 + 3 \;\checkmark \]
        สมเหตุสมผล (ข้อเท็จจริงเสริม: เมทริกซ์ทุกตัวแตกได้เป็น "สมมาตร + แอนติสมมาตร" พอดี \(3 + 1 = 4\) มิติ) — สรุปคำตอบเต็ม: \(\ker T\) = เมทริกซ์สมมาตรทั้งหมด (โนลลิตี 3), \(\operatorname{range} T\) = เมทริกซ์แอนติสมมาตรทั้งหมด (แรงก์ 1)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p5-2-5">
    <div class="pr-head"><span class="pr-num">ข้อ 5</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(T: \mathbb{R}_2[x] \to \mathbb{R}^2\) กำหนดโดย \(T(p) = (p(0), p(1))^T\) จงแสดงว่า \(T\) เป็นการแปลงเชิงเส้น หา \(\ker T\) และตอบว่า \(T\) ทั่วถึงหรือไม่</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(\ker T\): \(p(0) = 0 \Rightarrow a_0 = 0\); \(p(1) = 0 \Rightarrow a_0 + a_1 + a_2 = 0\) → สองเงื่อนไข สามสัมประสิทธิ์ → nullity 1 / ทั่วถึง: \(x\) ส่งไป \((0,1)\), \(1 - x\) ส่งไป \((1, 0)\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> แปลงเงื่อนไขการแทนค่าเป็นระบบสมการสัมประสิทธิ์ — การแทนค่า \(p \mapsto (p(0), p(1))^T\) แต่ละพิกัดกระจายผ่านการบวก/คูณสเกลาร์ (จึงเชิงเส้น) · เคอร์เนลคือพหุนามที่มี<em>ทั้ง</em> 0 <em>และ</em> 1 เป็นราก ซึ่งให้สมการสัมประสิทธิ์สองสมการ · คำถาม "ทั่วถึงหรือไม่" ใช้ทฤษฎีบทแรงก์ตอบได้ทันทีเมื่อรู้โนลลิตีแล้ว</p>
      <ol class="steps">
        <li><span class="step-t">แสดงว่า \(T\) เป็นเชิงเส้น</span> การแทนค่ากระจายผ่านการบวก/สเกลาร์: \((p + cq)(0) = p(0) + cq(0)\) และ \((p + cq)(1) = p(1) + cq(1)\) ดังนั้น
        \[ T(p + cq) = ((p+cq)(0), (p+cq)(1)) = (p(0) + cq(0), p(1) + cq(1)) = T(p) + cT(q) \;\checkmark \]
        (เพราะแต่ละพิกัดของ \(T\) คือการแทนค่า ซึ่งเป็นสมบัติเชิงเส้นที่คุ้นจากหน้า 5.1) → \(T\) เป็นการแปลงเชิงเส้น</li>
        <li><span class="step-t">หา \(\ker T\): บังคับให้ทั้งสองค่าเป็นศูนย์</span> เขียน \(p = a_0 + a_1x + a_2x^2\) (พิกัด = ค่าคงตัว, สัมประสิทธิ์ \(x\), สัมประสิทธิ์ \(x^2\)) เงื่อนไขแรก แทน \(x = 0\): ทุกพจน์ที่มี \(x\) ดับไป \(p(0) = a_0 = 0\) · เงื่อนไขที่สอง แทน \(x = 1\): \(p(1) = a_0 + a_1 + a_2 = 0\) — เมื่อรู้ว่า \(a_0 = 0\) แล้ว เหลือ \(a_1 + a_2 = 0 \Rightarrow a_1 = -a_2\) → แทนกลับและแยกตัวประกอบ:
        \[ p = 0 + (-a_2)x + a_2x^2 = a_2(x^2 - x) \;\Longrightarrow\; \ker T = \operatorname{Span}\{x^2 - x\}, \;\; \operatorname{nullity} T = 1 \]
        (ตรวจ: \((x^2 - x)(0) = 0\) ✓ และ \((x^2 - x)(1) = 1 - 1 = 0\) ✓ — พารามิเตอร์เหลือ \(a_2\) ตัวเดียว → มิติ 1)</li>
        <li><span class="step-t">ตอบว่าทั่วถึงหรือไม่ ด้วยทฤษฎีบทแรงก์</span> \(\operatorname{rank} T = \dim \mathbb{R}_2[x] - \operatorname{nullity} T = 3 - 1 = 2 = \dim \mathbb{R}^2\) → เรนจ์มีมิติเท่าปลายทาง → <strong>ทั่วถึง</strong> (ให้เห็นภาพ: \(T(x) = (x(0), x(1))^T = (0, 1)^T\) และ \(T(1 - x) = (1 - 0, 1 - 1)^T = (1, 0)^T\) — เวกเตอร์มาตรฐานของ \(\mathbb{R}^2\) ถูกยิงมาจากพหุนามจริง ๆ) — แต่<strong>ไม่ 1-1</strong> เพราะ nullity \(= 1 &gt; 0\) (เช่น \(x^2 - x\) กับพหุนามศูนย์ถูกส่งไป \((0,0)\) เหมือนกัน) — สรุปคำตอบเต็ม: \(T\) เชิงเส้น, \(\ker T = \operatorname{Span}\{x^2 - x\}\), ทั่วถึงแต่ไม่ 1-1</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p5-2-6">
    <div class="pr-head"><span class="pr-num">ข้อ 6</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(T: \mathbb{R}_2[x] \to \mathbb{R}_2[x]\) กำหนดโดย \(T(p) = p'\) (อนุพันธ์) จงหา \(\ker T\), \(\operatorname{range} T\) และตอบว่า \(T\) มีสมบัติ 1-1 และทั่วถึงหรือไม่</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(T(a_0 + a_1x + a_2x^2) = a_1 + 2a_2x\) — เคอร์เนล: \(a_1 = a_2 = 0\) / ผลลัพธ์เป็นดีกรี ≤ 1 เท่านั้น</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> อนุพันธ์ลดดีกรีลง 1 → พจน์คงตัวหาย — เขียนสูตรอนุพันธ์ในรูปสัมประสิทธิ์ก่อน \(T(a_0 + a_1x + a_2x^2) = a_1 + 2a_2x\) จะเห็นทันทีสองอย่าง: \(a_0\) หายไปเลย (นี่คือที่มาของเคอร์เนล) และพจน์ \(x^2\) ไม่มีทางเกิดขึ้นในผลลัพธ์ (นี่คือข้อจำกัดของเรนจ์)</p>
      <ol class="steps">
        <li><span class="step-t">หา \(\ker T\)</span> \(T(a_0 + a_1x + a_2x^2) = a_1 + 2a_2x\) ต้องการให้เท่ากับพหุนามศูนย์ \(= 0 + 0x\) เทียบสัมประสิทธิ์ทีละดีกรี: คงตัว \(a_1 = 0\) พจน์ \(x\): \(2a_2 = 0 \Rightarrow a_2 = 0\) — เหลือ \(a_0\) อิสระเท่านั้น (ค่าคงตัวใด ๆ ก็มีอนุพันธ์เป็นศูนย์):
        \[ \ker T = \operatorname{Span}\{1\} \;\text{(ค่าคงตัว)}, \;\; \operatorname{nullity} T = 1 \;\Longrightarrow\; T \text{ ไม่ 1-1} \]
        (อ้างเกณฑ์ 1-1: \(T\) 1-1 ⇔ \(\ker T = \{\vec{0}\}\) — ที่นี่เคอร์เนลมีค่าคงตัวทุกค่า เช่น \(T(7) = 0\) แต่ \(7 \neq \vec{0}\) จึงไม่ 1-1)</li>
        <li><span class="step-t">หา \(\operatorname{range} T\)</span> ผลลัพธ์ \(a_1 + 2a_2x\) เป็นพหุนามดีกรี ≤ 1 เสมอ (ไม่มี \(x^2\) เพราะอนุพันธ์ลดดีกรี) — แล้วได้ครบทุกดีกรี ≤ 1 หรือไม่? ได้ เพราะเลือกสัมประสิทธิ์ให้ตรงได้เสมอ (ต้องการ \(b_0 + b_1x\)? เลือก \(a_1 = b_0\) และ \(a_2 = \tfrac{b_1}{2}\))
        \[ \operatorname{range} T = \operatorname{Span}\{1, x\} = \mathbb{R}_1[x], \;\; \operatorname{rank} T = 2 \;\Longrightarrow\; T \text{ ไม่ทั่วถึง } \mathbb{R}_2[x] \]
        (เพราะ \(\operatorname{rank} T = 2 \neq 3 = \dim \mathbb{R}_2[x]\) — เรนจ์ไม่ครอบคลุมปลายทาง พหุนามดีกรี 2 ทั้งหมดตกหล่น)</li>
        <li><span class="step-t">ตรวจทฤษฎีบทแรงก์และสรุป</span>
        \(3 = \dim \mathbb{R}_2[x] = \operatorname{rank} T + \operatorname{nullity} T = 2 + 1\) ✓ — และสอดคล้องกับหลัก "มิติเท่ากัน": เมื่อ \(T: V \to V\) มีมิติต้นทางเท่าปลายทาง จะ 1-1 ก็ต่อเมื่อทั่วถึง — ที่นี่ไม่ 1-1 จึงไม่ทั่วถึง (เหมือนข้อสรุปในหัวข้อ 2.1) — สรุปคำตอบเต็ม: \(\ker T = \operatorname{Span}\{1\}\) (โนลลิตี 1), \(\operatorname{range} T = \mathbb{R}_1[x]\) (แรงก์ 2), \(T\) ไม่ 1-1 และไม่ทั่วถึง</li>
      </ol>
    </div></details>
  </article>
</section>
