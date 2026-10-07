<!-- meta
title: 5.3 ปริภูมิผลคูณภายใน
ch: 5
section: 5.3
page: ch5-3.html
-->

<div class="crumb">บทที่ 5 · แนวคิดเชิงนามธรรมของพีชคณิตเชิงเส้น</div>
<h1 class="page-title">5.3 ปริภูมิผลคูณภายใน</h1>
<p class="page-sub">ปิดท้ายวิชา — ใส่ "ผลคูณจุด" ให้ปริภูมิพหุนามและฟังก์ชันผ่าน<strong>อินทิกรัล</strong>
\(\langle f, g\rangle = \int f g\) แล้วทุกอย่างเรื่องความยาว การตั้งฉาก และกราม-ชมิดต์จากบทที่ 4 ใช้ได้อีกครั้ง</p>

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
      <li>คำนวณ \(\langle p, q\rangle = \int_a^b p(x)q(x)\,dx\) บน \(\mathbb{F}_n[x]\) และ \(\|f\| = \sqrt{\langle f, f\rangle}\) บนปริภูมิฟังก์ชัน</li>
      <li>ตรวจว่าเซตของฟังก์ชัน/พหุนามตั้งฉากกันหรือไม่ ภายใต้ผลคูณภายในที่กำหนด</li>
      <li>ใช้กระบวนการกราม-ชมิดต์สร้างฐานหลักเชิงตั้งฉากของ \(\mathbb{F}_n[x]\)</li>
      <li>ใช้ทฤษฎีบท 4.1.3 ในรูปนามธรรม: เขียน \(\vec{y} = \sum \frac{\langle \vec{y}, \vec{u}_i\rangle}{\langle \vec{u}_i, \vec{u}_i\rangle}\vec{u}_i\) และหาการประมาณที่ดีสุด</li>
    </ul>
  </div>
</section>

<section class="block" id="lesson">
  <h2><span class="h2-dot">📖</span> บทเรียน</h2>

  <h3>1) ปริภูมิผลคูณภายใน (inner product space)</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม (โดยสรุป)</div>
    <p><strong>ผลคูณภายใน</strong>บน \(V\) คือฟังก์ชัน \(\langle \cdot, \cdot\rangle : V \times V \to \mathbb{F}\) ที่เป็นเชิงเส้นในแต่ละตัวแปร สลับที่ได้ และ \(\langle \vec{v}, \vec{v}\rangle \geq 0\) (เป็นศูนย์เมื่อ \(\vec{v} = \vec{0}\)) — เมื่อมีแล้ว \(V\) เป็น<strong>ปริภูมิผลคูณภายใน</strong></p>
    <p>ความยาว: \(\|f\| = \sqrt{\langle f, f\rangle}\), ระยะทาง: \(\|f - g\|\), ตั้งฉาก: \(\langle f, g\rangle = 0\) — นิยามเหมือนบทที่ 4 ทุกประการ เปลี่ยน \(\vec{u}\cdot\vec{v}\) เป็น \(\langle f, g\rangle\)</p>
  </div>
  <div class="box box-idea">
    <div class="box-title">💡 ผลคูณภายในที่พบบ่อยที่สุดในโจทย์</div>
    <p>• บน \(\mathbb{F}_n[x]\): \(\langle p, q\rangle = \displaystyle\int_0^1 p(x)q(x)\,dx\) (หรือ \(\int_{-1}^{1}\) แล้วแต่โจทย์)</p>
    <p>• บนปริภูมิฟังก์ชัน: \(\langle f, g\rangle = \displaystyle\int_a^b f(x)g(x)\,dx\)</p>
    <p>• บน \(M_{m,n}\): \(\langle A, B\rangle = \sum_{i,j} a_{ij}b_{ij}\) (Frobenius)</p>
    <p>— ทั้งหมดเป็น "ผลคูณจุดแบบอินทิกรัล" และทฤษฎีบททั้งหมดของบทที่ 4 (ทฤษฎีบท 4.1.2–4.1.5, กราม-ชมิดต์ 4.2.3, การฉาย 4.2.2) ยังใช้ได้ (ทฤษฎีบท 5.3.1–5.3.5)</p>
  </div>

  <h3>2) เครื่องมือที่ใช้ซ้ำจากบทที่ 4</h3>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 5.3.4 — กราม-ชมิดต์ (รูปนามธรรม)</div>
    \[ \vec{v}_1 = \vec{x}_1, \qquad \vec{v}_2 = \vec{x}_2 - \frac{\langle \vec{x}_2, \vec{v}_1\rangle}{\langle \vec{v}_1, \vec{v}_1\rangle}\vec{v}_1, \qquad \vec{v}_3 = \vec{x}_3 - \frac{\langle \vec{x}_3, \vec{v}_1\rangle}{\langle \vec{v}_1, \vec{v}_1\rangle}\vec{v}_1 - \frac{\langle \vec{x}_3, \vec{v}_2\rangle}{\langle \vec{v}_2, \vec{v}_2\rangle}\vec{v}_2, \;\dots \]
    <p>และทฤษฎีบท 4.1.3: เมื่อ \(\{\vec{u}_1, \dots, \vec{u}_p\}\) เป็นฐานหลักเชิงตั้งฉากของ \(H\): \(\vec{y} = \sum_i \frac{\langle \vec{y}, \vec{u}_i\rangle}{\langle \vec{u}_i, \vec{u}_i\rangle}\vec{u}_i\) — รวมถึงการฉายและการประมาณที่ดีสุด</p>
  </div>

  <div class="box box-warn">
    <div class="box-title">⚠️ ระวังของใหม่ในหัวข้อนี้</div>
    <p>• ค่า \(\langle f, g\rangle\) เป็น<em>จำนวนจริง</em>ที่มาจากอินทิกรัล — คำนวณอินทิกรัลให้ถูกก่อนเสมอ ส่วนใหญ่เป็นพหุนามธรรมดา</p>
    <p>• \(\|f\| = \sqrt{\langle f, f\rangle}\) อาจเป็นรากที่ไม่ลงตัว — ปรับเป็นหนึ่งหน่วยโดยหารด้วยค่านี้ (เหมือนเดิม)</p>
    <p>• ฟังก์ชันคู่ตรงข้ามเช่น \(x\) กับ \(x^3\) บนช่วงสมมาตร \([-1,1]\) ตั้งฉากกันโดยอัตโนมัติ (อินทิกรัลของฟังก์ชันคี่ = 0)</p>
  </div>
</section>

<section class="block" id="examples">
  <h2><span class="h2-dot">✏️</span> ตัวอย่างโจทย์</h2>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 1</span><span class="tag easy">ง่าย</span><span class="ex-title">คำนวณผลคูณภายในแบบอินทิกรัล</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(\mathbb{R}_1[x]\) มีผลคูณภายใน \(\langle p, q\rangle = \int_0^1 p(x)q(x)\,dx\) จงหา \(\langle 1 + x, 1 - x\rangle\) และ \(\|1 + x\|\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — คูณพหุนามก่อน แล้วอินทิกรัตทีละพจน์
      กลยุทธ์ของข้อนี้: <strong>ผลคูณภายใน (inner product)</strong> บนหัวข้อนี้นิยามด้วยอินทิกรัล \(\langle p, q\rangle = \int_0^1 p(x)q(x)\,dx\) — แปลว่า "เอาสองพหุนามมาคูณกันตามปกติให้เหลือตัวเดียว แล้วอินทิกรัลตัวเดียวนั้น" · ส่วน<strong>นอร์ม (ความยาว)</strong> นิยามว่า \(\|f\| = \sqrt{\langle f, f\rangle}\) จึงต้องคำนวณ \(\langle 1+x, 1+x\rangle\) (คูณตัวเอง) ก่อน แล้วค่อยถอดรากทีหลัง — ทุกการอินทิกรัลพจน์ \(x^k\) ใช้สูตร \(\int_0^1 x^k\,dx = \tfrac{1}{k+1}\)</div>
      <ol class="steps">
        <li><span class="step-t">คูณพหุนามให้เหลือตัวเดียวก่อน</span> \((1+x)(1-x) = 1 - x + x - x^2 = 1 - x^2\) (สูตรผลต่างกำลังสอง \(a^2 - b^2 = (a-b)(a+b)\) — พจน์ \(x\) หักล้างกันพอดี) แล้วเขียนนิยามออกมาเต็ม:
        \[ \langle 1+x, 1-x\rangle = \int_0^1 (1+x)(1-x)\,dx = \int_0^1 (1 - x^2)\,dx = \left[x - \frac{x^3}{3}\right]_0^1 = 1 - \frac13 = \frac23 \]
        (ปฏิยานุพันธ์: \(\int 1\,dx = x\) และ \(\int x^2\,dx = \tfrac{x^3}{3}\) จากสูตร \(\tfrac{x^{k+1}}{k+1}\); แทนขอบบน \(x = 1\): \(1 - \tfrac{1^3}{3} = 1 - \tfrac13\) และขอบล่าง \(x = 0\) ให้ 0 — รวมเศษด้วยตัวส่วนร่วม 3: \(\tfrac{3-1}{3} = \tfrac23\))</li>
        <li><span class="step-t">นอร์ม: คูณตัวเองก่อนแล้วอินทิกรัล</span> ตามนิยาม \(\|1+x\|^2 = \langle 1+x, 1+x\rangle = \int_0^1 (1+x)^2\,dx\) กระจายกำลังสอง \((1+x)^2 = 1 + 2x + x^2\):
        \[ \|1+x\|^2 = \langle 1+x, 1+x\rangle = \int_0^1 (1 + 2x + x^2)\,dx = 1 + 1 + \frac13 = \frac73 \]
        (ปฏิยานุพันธ์: \(x + x^2 + \tfrac{x^3}{3}\) แทนขอบ \(x = 1\) ได้ \(1 + 1 + \tfrac13\) ขอบ \(x = 0\) ให้ 0 — รวมเศษ: \(2 + \tfrac13 = \tfrac{6+1}{3} = \tfrac73\))</li>
        <li><span class="step-t">ถอดรากและสรุป</span>
        \[ \|1+x\| = \sqrt{\frac73} \]
        คำตอบเต็ม: \(\langle 1+x, 1-x\rangle = \tfrac23\) และ \(\|1+x\| = \sqrt{\tfrac73}\) (ตรวจความสมเหตุสมผล: \(\tfrac23\) เป็นบวก และนอร์มเป็นบวก — ตรงตามสมบัติ \(\langle f, f\rangle \geq 0\) ของผลคูณภายใน)</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2</span><span class="tag easy">ง่าย</span><span class="ex-title">ความตั้งฉากบนช่วงสมมาตร</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ปริภูมิฟังก์ชันมีผลคูณภายใน \(\langle f, g\rangle = \int_{-1}^{1} f(x)g(x)\,dx\) จงแสดงว่า \(\{1, x, 3x^2 - 1\}\) เป็นเซตเชิงตั้งฉาก</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — จุดทุกคู่ต้องได้ 0 (ใช้ความคี่/คู่ของฟังก์ชันช่วยได้)
      กลยุทธ์ของข้อนี้: <strong>ตั้งฉาก (orthogonal)</strong> นิยามว่า \(\langle f, g\rangle = 0\) — เซต 3 สมาชิกต้องเช็ก 3 คู่: \(\langle 1, x\rangle\), \(\langle 1, 3x^2-1\rangle\), \(\langle x, 3x^2-1\rangle\) · ทางลัด: ฟังก์ชัน<em>คี่</em> (\(f(-x) = -f(x)\) เช่น \(x, x^3\)) อินทิกรัลบนช่วงสมมาตร \([-1, 1]\) เป็นศูนย์เสมอ เพราะพื้นที่ฝั่งซ้าย \([-1,0]\) เป็นลบเท่ากับฝั่งขวา \([0,1]\) ที่เป็นบวกพอดี — ใช้ทางลัดนี้ย่อการคำนวณได้ แต่ควรคำนวณให้ดูจริงอย่างน้อยหนึ่งคู่</div>
      <ol class="steps">
        <li><span class="step-t">\(\langle 1, x\rangle\): คู่กับคี่</span>
        \[ \langle 1, x\rangle = \int_{-1}^1 1\cdot x\,dx = \left[\frac{x^2}{2}\right]_{-1}^1 = \frac{1^2}{2} - \frac{(-1)^2}{2} = \frac12 - \frac12 = 0 \;\checkmark \]
        (ทางลัดอธิบายได้ว่าทำไมเป็นศูนย์: \(x\) เป็นฟังก์ชันคี่เพราะ \((-x) = -(x)\) ปฏิยานุพันธ์ \(\tfrac{x^2}{2}\) จึงให้ค่าเท่ากันที่ขอบ \(\pm1\) พอดี — พื้นที่ลบซ้ายหักล้างพื้นที่บวกขวา)</li>
        <li><span class="step-t">\(\langle 1, 3x^2-1\rangle\): คู่กับคู่ ต้องคำนวณจริง</span> ปฏิยานุพันธ์ของ \(3x^2 - 1\) คือ \(3\cdot\tfrac{x^3}{3} - x = x^3 - x\) แล้วแทนขอบ:
        \[ \int_{-1}^1 (3x^2 - 1)\,dx = \left[x^3 - x\right]_{-1}^{1} = (1-1) - (-1+1) = 0 \;\checkmark \]
        (แทนขอบบน \(x = 1\): \(1^3 - 1 = 0\) แทนขอบล่าง \(x = -1\): \((-1)^3 - (-1) = -1 + 1 = 0\) — ลบกันได้ศูนย์)</li>
        <li><span class="step-t">\(\langle x, 3x^2-1\rangle\): คี่ × คู่ = คี่ → 0 ทันที</span> กระจาย \(x(3x^2 - 1) = 3x^3 - x\) ทุกพจน์เป็นฟังก์ชันคี่ (ยกกำลังคี่) ผลคูณของฟังก์ชันคี่กับฟังก์ชันคู่เป็นฟังก์ชันคี่ ดังนั้น
        \[ \int_{-1}^1 (3x^3 - x)\,dx = 0 \;\checkmark \]
        (อยากเห็นเลขจริง: ปฏิยานุพันธ์ \(\tfrac{3x^4}{4} - \tfrac{x^2}{2}\) แทนขอบ \(\pm1\): \((\tfrac34 - \tfrac12) - (\tfrac34 - \tfrac12) = 0\) — ปฏิยานุพันธ์เป็นฟังก์ชันคู่ ค่าที่ขอบสองฝั่งจึงเท่ากันพอดี)</li>
        <li><span class="step-t">สรุป</span> ทุกคู่ให้ \(\langle \cdot, \cdot\rangle = 0\) → <strong>เซตเชิงตั้งฉาก</strong> — โบนัส: เซตเชิงตั้งฉากที่ไม่มีเวกเตอร์ศูนย์เป็นอิสระเชิงเส้นเสมอ (เพราะถ้ารวมเชิงเส้นเป็นศูนย์ จุดด้วย \(\langle \vec{v}, \cdot\rangle\) ทีละตัว จะได้ สัมประสิทธิ์ \(\times \langle \vec{v}, \vec{v}\rangle = 0\) บังคับสัมประสิทธิ์เป็นศูนย์) และมี 3 สมาชิก = \(\dim \mathbb{R}_2[x] = 3\) พอดี → ยังเป็น<em>ฐานหลักเชิงตั้งฉาก</em>ของ \(\mathbb{R}_2[x]\) อีกด้วย (ตระกูลเดียวกับพหุนามเลอช็องดร์ \(\{1, x, \tfrac12(3x^2-1), \dots\}\))</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3</span><span class="tag hard">ยาก</span><span class="ex-title">กราม-ชมิดต์บน \(\mathbb{R}_1[x]\) ด้วย \(\int_0^1\)</span></div>
    <div class="ex-body">
      <div class="ex-q">จงใช้กระบวนการกราม-ชมิดต์สร้างฐานหลักเชิงตั้งฉากปรกติของ \(\mathbb{R}_1[x]\) เมื่อผลคูณภายในคือ \(\langle p, q\rangle = \int_0^1 p(x)q(x)\,dx\) โดยเริ่มจากฐานหลักมาตรฐาน \(\{1, x\}\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — \(\vec{v}_1 = 1\); \(\vec{v}_2 = x\) ลบส่วนฉายบน \(\vec{v}_1\) — คำนวณอินทิกรัลทีละตัว
      กลยุทธ์ของข้อนี้: <strong>กระบวนการกราม-ชมิดต์ (Gram–Schmidt)</strong> ทำสองอย่าง: (1) ลดทอนทีละตัว — เวกเตอร์ใหม่ = เวกเตอร์เดิมลบ "ส่วนที่ทับทิศทางเดิม" (ส่วนฉาย) ออก เหลือแต่ส่วนที่ตั้งฉากกับของเก่าทั้งหมด (2) จบด้วยการปรับหนึ่งหน่วย — หารด้วยความยาว \(\|f\| = \sqrt{\langle f, f\rangle}\) — ทุกการวัดในสูตรคืออินทิกรัล \(\langle p, q\rangle = \int_0^1 p(x)q(x)\,dx\) จึงต้องคำนวณอินทิกรัลให้เป๊ะทีละตัว</div>
      <ol class="steps">
        <li><span class="step-t">ตั้ง \(\vec{v}_1 = 1\) และวัดความยาวกำลังสองไว้ก่อน</span> ตัวแรกไม่ต้องแก้อะไร: \(\vec{v}_1 = 1\) — แต่สูตรขั้นถัดไปต้องใช้ \(\langle \vec{v}_1, \vec{v}_1\rangle\) จึงคำนวณเตรียมไว้:
        \[ \langle \vec{v}_1, \vec{v}_1\rangle = \int_0^1 1\,dx = \left[x\right]_0^1 = 1 - 0 = 1 \]</li>
        <li><span class="step-t">ลบส่วนฉายออกจาก \(x\)</span> ก่อนอื่นวัด \(\langle x, 1\rangle\) ด้วยสูตร \(\int x\,dx = \tfrac{x^2}{2}\):
        \[ \langle x, 1\rangle = \int_0^1 x\,dx = \tfrac12 \]
        แล้วแทนสูตรกราม-ชมิดต์ \(\vec{v}_2 = \vec{x}_2 - \frac{\langle \vec{x}_2, \vec{v}_1\rangle}{\langle \vec{v}_1, \vec{v}_1\rangle}\vec{v}_1\) (เหตุผล: พจน์ที่ลบออกคือส่วนของ \(x\) ที่ชี้ทางเดียวกับ \(\vec{v}_1 = 1\) พอลบแล้วที่เหลือจึงตั้งฉากกับ \(\vec{v}_1\) พอดี):
        \[ \vec{v}_2 = x - \frac{\langle x, 1\rangle}{\langle 1, 1\rangle}\cdot 1 = x - \frac{1}{2} \]</li>
        <li><span class="step-t">ปรับหนึ่งหน่วยทั้งสองตัว</span> \(\|\vec{v}_1\| = \sqrt{1} = 1\) (จากขั้น 1) — สำหรับ \(\vec{v}_2\): กระจาย \((x - \tfrac12)^2 = x^2 - x + \tfrac14\) (ใช้ \((a-b)^2 = a^2 - 2ab + b^2\)) แล้วอินทิกรัลทีละพจน์:
        \[ \|\vec{v}_2\|^2 = \int_0^1 \left(x - \tfrac12\right)^2\,dx = \int_0^1 \left(x^2 - x + \frac14\right)dx = \frac13 - \frac12 + \frac14 \]
        รวมเศษด้วยตัวส่วนร่วม 12: \(\tfrac{4}{12} - \tfrac{6}{12} + \tfrac{3}{12} = \tfrac{4 - 6 + 3}{12} = \tfrac{1}{12}\) → \(\|\vec{v}_2\| = \sqrt{\tfrac{1}{12}} = \tfrac{1}{\sqrt{12}} = \tfrac{1}{2\sqrt3}\) (เพราะ \(12 = 4 \times 3\) ดึง 4 ออกจากรากได้ 2) — ปรับหนึ่งหน่วย = หารด้วยความยาวตัวเอง:
        \[ \vec{u}_1 = 1, \qquad \vec{u}_2 = 2\sqrt{3}\left(x - \frac12\right) = \sqrt{3}(2x - 1) \]
        เป็นฐานหลักเชิงตั้งฉากปรกติ (<strong>orthonormal</strong> = ตั้งฉากกัน + ยาว 1 ทุกตัว) ของ \(\mathbb{R}_1[x]\) — ตรวจคำตอบเต็มอยู่ในแถบ "ตรวจคำตอบ" ด้านล่างแล้ว</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> \(\langle \vec{u}_1, \vec{u}_2\rangle = \int_0^1 \sqrt3(2x-1)\,dx = \sqrt3(1 - 1) = 0\) ✓ และ \(\|\vec{u}_2\|^2 = 3\int_0^1 (2x-1)^2\,dx = 3\cdot\tfrac13 = 1\) ✓</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 4</span><span class="tag hard">ยาก</span><span class="ex-title">การฉาย/ประมาณที่ดีสุดของ \(x^2\) บนพหุนามดีกรี ≤ 1</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(H = \operatorname{Span}\{1, x - \tfrac12\}\) ใน \(\mathbb{R}_2[x]\) ด้วยผลคูณภายใน \(\langle p, q\rangle = \int_0^1 p(x)q(x)\,dx\) จงหา \(\operatorname{proj}_H x^2\) (การประมาณที่ดีสุดของ \(x^2\) ด้วยพหุนามดีกรีไม่เกิน 1)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — ฐานหลักเชิงตั้งฉากพร้อมแล้ว (จากตัวอย่าง 3) → น้ำหนัก = \(\frac{\langle \vec{y}, \vec{u}_i\rangle}{\langle \vec{u}_i, \vec{u}_i\rangle}\) ทีละตัว
      กลยุทธ์ของข้อนี้: <strong>การฉาย (projection)</strong> ของ \(\vec{y}\) ลงบนปริภูมิย่อยที่มีฐานหลักเชิงตั้งฉาก ทำตรงตามทฤษฎีบท 4.1.3: \(\operatorname{proj}_H \vec{y} = \sum_i \frac{\langle \vec{y}, \vec{u}_i\rangle}{\langle \vec{u}_i, \vec{u}_i\rangle}\vec{u}_i\) — คือหาน้ำหนัก "\(\vec{y}\) มีส่วนทับทิศทาง \(\vec{u}_i\) เท่าไร" ทีละตัวแล้วนำมารวมกัน · ฐานหลักที่ใช้คือ \(\{1, x - \tfrac12\}\) ซึ่ง<em>ตั้งฉากกันแล้ว</em>จากตัวอย่าง 3 (เวอร์ชันก่อนปรับหนึ่งหน่วย — ใช้แบบไม่ปรับก็ได้ เพราะสูตรมีตัวหาร \(\langle \vec{u}_i, \vec{u}_i\rangle\) คอยชดเชย) จึงไม่ต้องกราม-ชมิดต์ใหม่</div>
      <ol class="steps">
        <li><span class="step-t">เตรียมค่าที่ต้องใช้</span> จากตัวอย่าง 3: \(\vec{v}_1 = 1\) ตั้งฉากกับ \(\vec{v}_2 = x - \tfrac12\) แล้ว — ค่าที่ต้องใช้มีสองตัว: \(\langle 1, 1\rangle = \int_0^1 1\,dx = 1\) และ \(\langle \vec{u}_2, \vec{u}_2\rangle = \langle x - \tfrac12, x - \tfrac12\rangle = \tfrac{1}{12}\) (คำนวณจาก \(\int_0^1 (x^2 - x + \tfrac14)\,dx = \tfrac{4-6+3}{12}\))</li>
        <li><span class="step-t">น้ำหนักที่ \(\vec{u}_1 = 1\)</span> ใช้นิยามผลคูณภายในแบบอินทิกรัล โดยพจน์ \(x^2\) ใช้สูตร \(\int_0^1 x^2\,dx = \tfrac{x^3}{3}\Big|_0^1 = \tfrac{1^3}{3} - \tfrac{0}{3}\):
        \[ \frac{\langle x^2, 1\rangle}{\langle 1, 1\rangle} = \frac{\int_0^1 x^2\,dx}{1} = \frac{1}{3} \]
        (ตีความ: \(x^2\) มี "ส่วนค่าคงตัว" เฉลี่ยอยู่เท่ากับ \(\tfrac13\))</li>
        <li><span class="step-t">น้ำหนักที่ \(\vec{u}_2 = x - \tfrac12\)</span> กระจายก่อน: \(x^2(x - \tfrac12) = x^3 - \tfrac{x^2}{2}\) ปฏิยานุพันธ์: \(\tfrac{x^4}{4} - \tfrac{x^3}{6}\) แทนขอบ \([0,1]\): \(\tfrac{1^4}{4} - \tfrac{1^3}{6} = \tfrac{3}{12} - \tfrac{2}{12} = \tfrac{1}{12}\) (รวมเศษด้วยตัวส่วนร่วม 12)
        \[ \langle x^2, x - \tfrac12\rangle = \int_0^1 \left(x^3 - \frac{x^2}{2}\right)dx = \frac14 - \frac16 = \frac{1}{12}, \qquad \langle \vec{u}_2, \vec{u}_2\rangle = \frac{1}{12} \;\Longrightarrow\; \text{น้ำหนัก} = \frac{1/12}{1/12} = 1 \]
        (หารเศษส่วนเท่ากันได้ 1 พอดี — แปลว่า \(x^2\) มีส่วนทับ \((x - \tfrac12)\) หนึ่งหน่วยพอดี)</li>
        <li><span class="step-t">ประกอบการฉายและสรุป</span> เอาน้ำหนักคูณฐานหลักแล้วรวม:
        \[ \operatorname{proj}_H x^2 = \frac13\cdot 1 + 1\cdot\left(x - \frac12\right) = \frac13 + x - \frac12 = x - \frac{1}{6} \]
        (รวมค่าคงตัว: \(\tfrac13 - \tfrac12 = \tfrac{2-3}{6} = -\tfrac16\)) — สรุปคำตอบเต็ม: \(\operatorname{proj}_H x^2 = x - \tfrac16\) คือพหุนามดีกรี ≤ 1 ที่ประมาณ \(x^2\) ได้ดีที่สุด — ตรวจคำตอบด้วยเศษตกค้างตั้งฉากกับฐานหลักอยู่ในแถบ "ตรวจคำตอบ" ด้านล่างแล้ว</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> เศษตกค้าง \(x^2 - (x - \tfrac16) = x^2 - x + \tfrac16\) ต้องตั้งฉากกับฐานหลัก: \(\int_0^1 (x^2 - x + \tfrac16)\,dx = \tfrac13 - \tfrac12 + \tfrac16 = 0\) ✓ และ \(\int_0^1 (x^2 - x + \tfrac16)(x - \tfrac12)\,dx = 0\) ✓</div>
    </div>
  </article>
</section>

<section class="block" id="textbook">
  <h2><span class="h2-dot">📚</span> ตัวอย่างจากตำรา (พีชคณิต.pdf)</h2>
  <p class="page-sub">โจทย์ทุกข้อคัดมาตรงจากตำราประกอบการสอน โดยเรียงจากง่ายไปยาก — ใต้โจทย์แต่ละข้อมี "อธิบายโจทย์ง่าย ๆ" ช่วยให้เห็นว่าโจทย์ถามอะไรก่อนลงมือทำ</p>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5.3.1 (1, 2)</span><span class="tag book">จากตำรา</span><span class="tag easy">ง่าย</span><span class="ex-title">ผลคูณภายในมาตรฐานและแบบถ่วงน้ำหนัก</span></div>
    <div class="ex-body">
      <div class="ex-q">จงแสดงว่าการกำหนดต่อไปนี้เป็นผลคูณภายใน
      (1) บน \(V = \mathbb{F}^n\): \(\langle \vec{u}, \vec{v}\rangle = \displaystyle\sum_{i=1}^{n} u_i \bar{v}_i\) สำหรับ \(\vec{u} = (u_1, \dots, u_n)\) และ \(\vec{v} = (v_1, \dots, v_n)\) (ผลคูณภายในมาตรฐาน)
      (2) บน \(V = \mathbb{R}^n\): \(\langle \vec{u}, \vec{v}\rangle = \displaystyle\sum_{i=1}^{n} a_i u_i v_i\) เมื่อ \(a_1, a_2, \dots, a_n\) เป็นจำนวนจริงบวก (ผลคูณภายในถ่วงน้ำหนัก)</div>
      <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — ผลคูณภายในต้องผ่านสมบัติ 4 ข้อ: \(\langle \vec{u}, \vec{u}\rangle \geq 0\) (เท่ากับ 0 เมื่อ \(\vec{u} = \vec{0}\) เท่านั้น), เชิงเส้นในตัวแปรแรก, สลับที่พร้อมสังยุค \(\langle \vec{v}, \vec{w}\rangle = \overline{\langle \vec{w}, \vec{v}\rangle}\) — ทั้งสองสูตรเป็น "ผลรวมของพจน์รายตำแหน่ง" จึงตรวจทีละพจน์แล้วรวมกันได้</div>
      <ol class="steps">
        <li><span class="step-t">(1) เอกภาพบวก</span> \(\langle \vec{u}, \vec{u}\rangle = \sum u_i \bar{u}_i = \sum |u_i|^2 \geq 0\) และเท่ากับ 0 เมื่อทุก \(|u_i|^2 = 0\) คือ \(\vec{u} = \vec{0}\) ✓ (ถ้า \(\mathbb{F} = \mathbb{R}\) ตัวสังยุคหายไป เหลือผลคูณจุดธรรมดาของบทที่ 4)</li>
        <li><span class="step-t">(1) เชิงเส้นและสลับที่</span> \(\langle c\vec{u} + \vec{w}, \vec{v}\rangle = \sum (cu_i + w_i)\bar{v}_i = c\langle \vec{u}, \vec{v}\rangle + \langle \vec{w}, \vec{v}\rangle\) ✓ · การสลับที่: \(\langle \vec{v}, \vec{u}\rangle = \sum v_i \bar{u}_i = \overline{\sum u_i \bar{v}_i} = \overline{\langle \vec{u}, \vec{v}\rangle}\) ✓ (<em>เพราะ</em>สังยุคของผลรวม = ผลรวมของสังยุค)</li>
        <li><span class="step-t">(2) ทุกข้อเหมือนเดิม ยกเว้นจุดชี้ขาด</span> \(\langle \vec{u}, \vec{u}\rangle = \sum a_i u_i^2\) เป็นศูนย์ได้ต่อเมื่อ \(u_i = 0\) ทุกตัว<em>เพราะ</em>\(a_i &gt; 0\) ทุกตัว (ถ้าเผลอใช้น้ำหนักติดลบสักตัว เช่น \(a_2 = -1\) บน \(\mathbb{R}^2\) จะได้ \(\langle (0,1), (0,1)\rangle = -1 &lt; 0\) พังทันที — ความบวกของน้ำหนักจึงไม่ใช่ของแต่ง) — สมบัติเชิงเส้นและสลับที่ผ่านเพราะทุกพจน์เป็น (พจน์ของ \(\vec{u}\))×(พจน์ของ \(\vec{v}\)) สมมาตรกัน</li>
        <li><span class="step-t">ตัวเลขจริงของข้อ (2)</span> บน \(\mathbb{R}^2\) ด้วย \(a_1 = 1, a_2 = 4\): \(\langle (1, 2), (3, -1)\rangle = 1(1)(3) + 4(2)(-1) = 3 - 8 = -5\) (ติดลบได้ — เพราะไม่ใช่ \(\langle \vec{u}, \vec{u}\rangle\)) และ \(\langle (1, 2), (1, 2)\rangle = 1 + 16 = 17 &gt; 0\) ✓</li>
      </ol>
      <div class="verify"><span class="lbl">สรุปคำตอบ:</span> ทั้งสองสูตรเป็นผลคูณภายใน — ข้อ (1) คือผลคูณจุดของบทที่ 4 พร้อมสังยุค และข้อ (2) แสดงว่าน้ำหนักบวกใด ๆ ก็สร้างผลคูณภายในใหม่ได้เสมอ</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5.3.1 (3)</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">ผลคูณภายในแบบอินทิกรัล \(\int_a^b f(x)g(x)\,dx\)</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(V = C^0[a, b]\) เป็นเซตของฟังก์ชันค่าจริงที่ต่อเนื่องบน \([a, b]\) ทั้งหมด ซึ่งเซตนี้เป็นปริภูมิย่อยของ \(\mathbb{R}^{\mathbb{R}}\) และสำหรับฟังก์ชันต่อเนื่อง \(f\) และ \(g\) ใน \(C^0[a, b]\) เรากำหนด \(\langle f, g\rangle = \displaystyle\int_a^b f(x)g(x)\,dx\) จงแสดงว่า \(\langle \cdot, \cdot\rangle\) เป็นผลคูณภายในสำหรับ \(C^0[a, b]\)</div>
      <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — ทิศทางเดิมทุกอย่าง แค่เปลี่ยน "ผลรวมรายตำแหน่ง" เป็น "อินทิกรัล" — สมบัติเชิงเส้นและการสลับที่มาจากสมบัติของอินทิกรัลตรง ๆ จุดที่ต้องพิสูจน์พิเศษคือ "อินทิกรัลของ \(f^2\) เป็นศูนย์ ⇒ \(f\) เป็นศูนย์" ซึ่ง<em>ความต่อเนื่อง</em>เป็นกุญแจ</div>
      <ol class="steps">
        <li><span class="step-t">เอกภาพบวก (ครึ่งแรกง่าย)</span> \(\langle f, f\rangle = \int_a^b f(x)^2\,dx \geq 0\) เพราะ \(f^2 \geq 0\) ทุกจุด (กำลังสองไม่ติดลบ) ✓</li>
        <li><span class="step-t">ครึ่งหลังใช้ความต่อเนื่อง</span> ถ้า \(\int_a^b f^2 = 0\) แต่ยังมีจุด \(x_0\) ที่ \(f(x_0) = c \neq 0\) ละก็ โดยความต่อเนื่องจะมีช่วงรอบ \(x_0\) กว้างพอที่ \(f^2 &gt; \tfrac{c^2}{2} &gt; 0\) ตลอดช่วงย่อยนั้น → อินทิกรัลช่วงย่อยเป็นบวก และส่วนที่เหลือไม่ติดลบ → \(\int_a^b f^2 &gt; 0\) ขัดกับสมมติฐาน → ไม่มีจุดให้ค่าไม่ศูนย์ → \(f \equiv 0\) ✓ (จุดนี้แหละที่ทำให้ต้องทำงานบน \(C^0\) ไม่ใช่ฟังก์ชันใด ๆ)</li>
        <li><span class="step-t">เชิงเส้นและสลับที่</span> \(\int_a^b (cf + h)g\,dx = c\int_a^b fg\,dx + \int_a^b hg\,dx\) ✓ และ \(fg = gf\) ทุกจุดทำให้ \(\langle f, g\rangle = \langle g, f\rangle\) ✓ (ฟีลด์เป็นจำนวนจริงจึงไม่ต้องใช้สังยุค)</li>
        <li><span class="step-t">ตัวเลขให้เห็นว่าใช้งานได้จริง</span> \(\langle x, 1 - x\rangle = \int_0^1 x(1 - x)\,dx = \int_0^1 (x - x^2)\,dx = \tfrac12 - \tfrac13 = \tfrac16\) · \(\|x\| = \sqrt{\int_0^1 x^2\,dx} = \tfrac{1}{\sqrt3}\) — ความยาวของ "เวกเตอร์ฟังก์ชัน" คำนวณได้เป็นตัวเลขจริง</li>
      </ol>
      <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(\langle f, g\rangle = \int_a^b f(x)g(x)\,dx\) เป็นผลคูณภายในบน \(C^0[a, b]\) — ผลคูณภายในแบบอินทิกรัลนี้คือเวทีหลักของหัวข้อ 5.3 ทั้งหมด (พหุนาม ฟังก์ชันตรีโกณ และกราม-ชมิดต์)</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5.3.2</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">สูตรคล้ายกันมาก แต่จบคนละทาง</span></div>
    <div class="ex-body">
      <div class="ex-q">จงพิจารณาว่าการกำหนดต่อไปนี้เป็นผลคูณภายในบน \(\mathbb{R}^3\) หรือไม่ เพราะเหตุใด
      (ก) \(\langle (x_1, x_2, x_3), (y_1, y_2, y_3)\rangle = x_1y_1 - x_2y_2 + 2x_3y_3\)
      (ข) \(\langle (x_1, x_2, x_3), (y_1, y_2, y_3)\rangle = x_1y_1 - x_1y_3 - x_3y_1 + x_2y_2 + 2x_3y_3\)</div>
      <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — สองสูตรหน้าตาใกล้กันแต่จบคนละแบบ — ข้อ (ก) มี<em>น้ำหนักลบ</em> (\(-x_2y_2\)) ให้ยิงด้วยเวกเตอร์เดียวที่ตำแหน่งนั้นเป็น 1 · ข้อ (ข) มี<em>พจน์ไขว้</em> \(x_1y_3\) ให้ลองจัดรูปเป็นกำลังสอง แล้วดูว่าเอกภาพบวกรอดหรือไม่</div>
      <ol class="steps">
        <li><span class="step-t">(ก) ยิงด้วยตัวค้านตัวเดียว</span> เลือก \(\vec{v} = (0, 1, 0)\): \(\langle \vec{v}, \vec{v}\rangle = 0 - 1 + 0 = -1 &lt; 0\) ล้มสมบัติที่ 1 (\(\langle \vec{u}, \vec{u}\rangle \geq 0\)) ทันที ✗ — <em>เพราะ</em>น้ำหนัก \(-1\) ทำให้ "ความยาวกำลังสอง" ติดลบได้ → <strong>ไม่เป็นผลคูณภายใน</strong></li>
        <li><span class="step-t">(ข) จัดรูปพจน์ไขว้เป็นผลคูณของผลต่าง</span> \(x_1y_1 - x_1y_3 - x_3y_1 + x_3y_3 = (x_1 - x_3)(y_1 - y_3)\) พอดี ดังนั้น
        \[ \langle \vec{x}, \vec{y}\rangle = (x_1 - x_3)(y_1 - y_3) + x_2y_2 + x_3y_3 \]
        (ขยายกลับ: \(x_1y_1 - x_1y_3 - x_3y_1 + x_3y_3 + x_2y_2 + x_3y_3\) = ตรงกับสูตรเดิมทุกพจน์)</li>
        <li><span class="step-t">(ข) เอกภาพบวกผ่านสวยงาม</span> \(\langle \vec{x}, \vec{x}\rangle = (x_1 - x_3)^2 + x_2^2 + x_3^2 \geq 0\) และเท่ากับ 0 ⇔ \(x_1 = x_3,\; x_2 = 0,\; x_3 = 0\) ⇔ \(\vec{x} = \vec{0}\) ✓ (ตรวจความเท่ากันของสองรูปด้วย python3: สุ่ม 1000 จุดตรงทุกจุด)</li>
        <li><span class="step-t">(ข) เชิงเส้นและสลับที่</span> ทุกพจน์เป็น "(พจน์ของ \(x\))×(พจน์ของ \(y\))" จึงกระจายและดึงสเกลาร์ออกได้ ✓ และสลับ \(x \leftrightarrow y\) ได้สูตรเดิม (ทุกพจน์สมมาตร) ✓ → <strong>เป็นผลคูณภายใน</strong></li>
      </ol>
      <div class="verify"><span class="lbl">สรุปคำตอบ:</span> (ก) ไม่เป็นผลคูณภายใน เพราะ \(\langle (0,1,0), (0,1,0)\rangle = -1 &lt; 0\) · (ข) เป็นผลคูณภายใน เพราะจัดรูปเป็น \((x_1 - x_3)(y_1 - y_3) + x_2y_2 + x_3y_3\) ทำให้เอกภาพบวกเห็นชัดเป็นผลรวมกำลังสอง</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5.3.3</span><span class="tag book">จากตำรา</span><span class="tag mid">กลาง</span><span class="ex-title">ผลคูณภายในมาตรฐานบน \(\mathbb{C}^3\) — ห้ามลืมสังยุค</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(\vec{x} = (2,\; 1 + i,\; i)\) และ \(\vec{y} = (2 - i,\; 1,\; 1 + 2i)\) โดยการใช้ผลคูณภายในมาตรฐาน จงหา \(\langle \vec{x}, \vec{y}\rangle\), \(\|\vec{x}\|\), \(\|\vec{y}\|\) และ \(\|\vec{x} - \vec{y}\|\)</div>
      <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — ผลคูณภายในมาตรฐานบน \(\mathbb{C}^3\) คือ \(\langle \vec{x}, \vec{y}\rangle = \sum x_i \bar{y}_i\) — <em>สังยุคฝั่งที่สองเสมอ</em> (ลืมแล้วคำตอบผิดทันที) ส่วนนอร์ม \(\|\vec{x}\| = \sqrt{\sum |x_i|^2}\) ใช้ \(|a + bi|^2 = a^2 + b^2\) รายตำแหน่ง</div>
      <ol class="steps">
        <li><span class="step-t">สังยุคของ \(\vec{y}\) ก่อน</span> \(\bar{\vec{y}} = (\overline{2 - i},\; \bar{1},\; \overline{1 + 2i}) = (2 + i,\; 1,\; 1 - 2i)\) (สลับเครื่องหมายส่วนจินตภาพ)</li>
        <li><span class="step-t">คูณรายตำแหน่งแล้วรวม</span>
        \[ \langle \vec{x}, \vec{y}\rangle = 2(2 + i) + (1 + i)(1) + i(1 - 2i) = (4 + 2i) + (1 + i) + (i + 2) = 7 + 4i \]
        (พจน์ที่สาม: \(i(1 - 2i) = i - 2i^2 = i + 2\)) — <em>กับดัก:</em> ถ้าลืมสังยุคจะได้ \(2(2 - i) + (1 + i) + i(1 + 2i) = 3\) ซึ่งผิด ค่าที่ถูกคือ \(7 + 4i\)</li>
        <li><span class="step-t">นอร์มของสองเวกเตอร์</span> \(\|\vec{x}\|^2 = 2^2 + |1 + i|^2 + |i|^2 = 4 + 2 + 1 = 7 \Rightarrow \|\vec{x}\| = \sqrt7\) · \(\|\vec{y}\|^2 = |2 - i|^2 + 1 + |1 + 2i|^2 = (4 + 1) + 1 + (1 + 4) = 11 \Rightarrow \|\vec{y}\| = \sqrt{11}\) (ตรวจด้วย python3/numpy: \(\langle \vec{x}, \vec{y}\rangle = 7 + 4i\) ตรงพอดี)</li>
        <li><span class="step-t">ระยะทาง</span> \(\vec{x} - \vec{y} = (2 - (2 - i),\; 1 + i - 1,\; i - (1 + 2i)) = (i,\; i,\; -1 - i)\) → \(\|\vec{x} - \vec{y}\|^2 = |i|^2 + |i|^2 + |-1 - i|^2 = 1 + 1 + 2 = 4 \Rightarrow \|\vec{x} - \vec{y}\| = 2\) — สังเกตว่า \(\langle \vec{x}, \vec{y}\rangle\) เป็นจำนวนเชิงซ้อนได้ แต่นอร์มเป็นจำนวนจริงบวกเสมอ</li>
      </ol>
      <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(\langle \vec{x}, \vec{y}\rangle = 7 + 4i\), \(\|\vec{x}\| = \sqrt7\), \(\|\vec{y}\| = \sqrt{11}\), \(\|\vec{x} - \vec{y}\| = 2\) — ตรวจด้วย python3 (np.vdot) ตรงทุกค่า</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5.3.4</span><span class="tag book">จากตำรา</span><span class="tag hard">ยาก</span><span class="ex-title">กราม-ชมิดต์ด้วยผลคูณภายในถ่วงน้ำหนัก</span></div>
    <div class="ex-body">
      <div class="ex-q">กำหนดผลคูณภายในบน \(\mathbb{R}^3\) โดย \(\langle \vec{u}, \vec{v}\rangle = u_1v_1 + 2u_2v_2 + 3u_3v_3\) สำหรับทุกๆ \(\vec{u} = (u_1, u_2, u_3)\) และ \(\vec{v} = (v_1, v_2, v_3)\) ใน \(\mathbb{R}^3\) จงใช้กระบวนการกราม-ชมิดต์สร้างฐานหลักเชิงตั้งฉากปรกติสำหรับ \(H = \operatorname{Span}\{(1, 1, 1), (1, 1, 0)\}\)</div>
      <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — สูตรกราม-ชมิดต์เดิมของบทที่ 4 ใช้ได้เลย แค่เปลี่ยน "เครื่องวัด" เป็น \(\langle \vec{u}, \vec{v}\rangle = u_1v_1 + 2u_2v_2 + 3u_3v_3\) — ขั้นแรก \(\vec{v}_1 = \vec{x}_1\) ขั้นสองลบส่วนฉายของ \(\vec{x}_2\) ออก จบด้วยการปรับหนึ่งหน่วย — ระวัง: น้ำหนัก 2 กับ 3 ทำให้ทุกตัวเลขต่างจากผลคูณจุดธรรมดา</div>
      <ol class="steps">
        <li><span class="step-t">ตั้ง \(\vec{v}_1\) และวัดความยาวกำลังสองไว้ก่อน</span> \(\vec{v}_1 = (1, 1, 1)\) และ \(\langle \vec{v}_1, \vec{v}_1\rangle = 1(1)(1) + 2(1)(1) + 3(1)(1) = 6\) (ไม่ใช่ 3 แบบผลคูณจุด — เพราะน้ำหนัก 2, 3 เพิ่มเข้ามา)</li>
        <li><span class="step-t">ลบส่วนฉายของ \(\vec{x}_2 = (1, 1, 0)\) ออก</span> วัดก่อน: \(\langle \vec{x}_2, \vec{v}_1\rangle = 1(1)(1) + 2(1)(1) + 3(0)(1) = 3\) แล้วแทนสูตร:
        \[ \vec{v}_2 = \vec{x}_2 - \frac{\langle \vec{x}_2, \vec{v}_1\rangle}{\langle \vec{v}_1, \vec{v}_1\rangle}\vec{v}_1 = (1, 1, 0) - \frac{3}{6}(1, 1, 1) = \left(\tfrac12,\; \tfrac12,\; -\tfrac12\right) \]
        (พจน์ที่ลบออกคือส่วนของ \(\vec{x}_2\) ที่ทับทิศทาง \(\vec{v}_1\) ภายใต้เครื่องวัดใหม่ — พอลบแล้วที่เหลือจึงตั้งฉากกับ \(\vec{v}_1\))</li>
        <li><span class="step-t">ตรวจตั้งฉาก (คูณ 2 ให้เลขสวย)</span> ใช้ \((1, 1, -1)\) แทน (การคูณสเกลาร์ไม่ทำลายความตั้งฉาก): \(\langle (1, 1, -1), (1, 1, 1)\rangle = 1(1)(1) + 2(1)(1) + 3(-1)(1) = 1 + 2 - 3 = 0\) ✓</li>
        <li><span class="step-t">ปรับหนึ่งหน่วย</span> \(\|(1, 1, 1)\|^2 = 6\) และ \(\|(1, 1, -1)\|^2 = 1(1) + 2(1) + 3(1) = 6\) →
        \[ \vec{u}_1 = \frac{(1, 1, 1)}{\sqrt6}, \qquad \vec{u}_2 = \frac{(1, 1, -1)}{\sqrt6} \]</li>
      </ol>
      <div class="verify"><span class="lbl">สรุปคำตอบ:</span> ฐานหลักเชิงตั้งฉากปรกติของ \(H\) คือ \(\{\tfrac{1}{\sqrt6}(1, 1, 1)^T,\; \tfrac{1}{\sqrt6}(1, 1, -1)^T\}\) — สังเกตว่าสองเวกเตอร์ต้นฉบับหน้าตาใกล้กันมาก แต่น้ำหนัก 2, 3 ทำให้ส่วนฉายที่ต้องลบคือ \(\tfrac{3}{6}\) ไม่ใช่ \(\tfrac{2}{3}\) แบบผลคูณจุดธรรมดา</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5.3.5</span><span class="tag book">จากตำรา</span><span class="tag hard">ยาก</span><span class="ex-title">กราม-ชมิดต์บนฟังก์ชันจริง (มี \(\sqrt{x}\) ด้วย)</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(W = \operatorname{Span}\{1 - x,\; 1 + x,\; \sqrt{x}\}\) เป็นปริภูมิย่อยของ \(C^0[0, 1]\) จงใช้กระบวนการกราม-ชมิดต์สร้างฐานหลักเชิงตั้งฉากปรกติสำหรับ \(W\) โดยใช้ผลคูณภายใน \(\langle f, g\rangle = \displaystyle\int_0^1 f(x)g(x)\,dx\) จากตัวอย่าง 5.3.1</div>
      <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — ครั้งแรกที่กราม-ชมิดต์ทำงานบนฟังก์ชันจริง ๆ และมีราก \(\sqrt{x}\) ปนมาด้วย — ขั้นตอนเดิมทุกอย่าง: ตั้ง \(\vec{v}_1 = \vec{x}_1\), ลบส่วนฉายทีละตัว, ปรับหนึ่งหน่วย ทุกการวัดคืออินทิกรัล ใช้สูตร \(\int_0^1 x^k\,dx = \tfrac{1}{k+1}\) (พจน์ \(x^{1/2}\) ให้ \(\tfrac{2}{3}\)) — ตัวเลขทุกตัวตรวจด้วย python3 แล้ว</div>
      <ol class="steps">
        <li><span class="step-t">ตั้ง \(\vec{v}_1 = 1 - x\) และวัดค่าที่ต้องใช้</span> \(\langle \vec{v}_1, \vec{v}_1\rangle = \int_0^1 (1 - x)^2\,dx = \int_0^1 (1 - 2x + x^2)\,dx = 1 - 1 + \tfrac13 = \tfrac13\) · \(\langle 1 + x,\, 1 - x\rangle = \int_0^1 (1 - x^2)\,dx = 1 - \tfrac13 = \tfrac23\) (ใช้ผลต่างกำลังสอง \((1+x)(1-x) = 1 - x^2\))</li>
        <li><span class="step-t">ลบส่วนฉายจาก \(1 + x\)</span> หารเศษส่วน: \(\tfrac{2/3}{1/3} = 2\):
        \[ \vec{v}_2 = (1 + x) - 2(1 - x) = 3x - 1 \]
        ตรวจตั้งฉาก: \(\int_0^1 (3x - 1)(1 - x)\,dx = \int_0^1 (-3x^2 + 4x - 1)\,dx = -1 + 2 - 1 = 0\) ✓ และ \(\|\vec{v}_2\|^2 = \int_0^1 (3x - 1)^2\,dx = 3 - 3 + 1 = 1\) — ยาว 1 พอดี ไม่ต้องปรับ</li>
        <li><span class="step-t">ลบส่วนฉายสองส่วนออกจาก \(\sqrt{x}\)</span> \(\langle \sqrt{x},\, 1 - x\rangle = \int_0^1 (x^{1/2} - x^{3/2})\,dx = \tfrac23 - \tfrac25 = \tfrac{4}{15}\) · \(\langle \sqrt{x},\, 3x - 1\rangle = \int_0^1 (3x^{3/2} - x^{1/2})\,dx = \tfrac{6}{5} - \tfrac{2}{3} = \tfrac{8}{15}\)
        \[ \vec{v}_3 = \sqrt{x} - \frac{4/15}{1/3}(1 - x) - \frac{8/15}{1}(3x - 1) = \sqrt{x} - \tfrac45(1 - x) - \tfrac{8}{15}(3x - 1) = \sqrt{x} - \tfrac45 x - \tfrac{4}{15} \]</li>
        <li><span class="step-t">ปรับหนึ่งหน่วยตัวสุดท้าย</span> คูณ 15 ให้เลขสวย ได้ \(15\sqrt{x} - 12x - 4\) แล้วขยายกำลังสอง: \((15\sqrt{x} - 12x - 4)^2 = 225x + 144x^2 + 16 - 360x^{3/2} - 120x^{1/2} + 96x\) อินทิกรัลทีละพจน์: \(\tfrac{225}{2} + 48 + 16 - 144 - 80 + 48 = \tfrac12\) → ฐานหลักเชิงตั้งฉากปรกติ:
        \[ \vec{u}_1 = \sqrt3\,(1 - x), \qquad \vec{u}_2 = 3x - 1, \qquad \vec{u}_3 = \sqrt2\,\left(15\sqrt{x} - 12x - 4\right) \]</li>
      </ol>
      <div class="verify"><span class="lbl">สรุปคำตอบ:</span> \(\{\sqrt3(1 - x),\; 3x - 1,\; \sqrt2\,(15\sqrt{x} - 12x - 4)\}\) เป็นฐานหลักเชิงตั้งฉากปรกติของ \(W\) — ตรวจด้วย python3 (อินทิกรัลเชิงตัวเลข): ทุกคู่ให้ 0 และทุกตัวยาว 1 ✓ แม้สมาชิกตัวที่สามหน้าตาแปลกตา กระบวนการก็จัดการได้เหมือนเวกเตอร์ธรรมดา</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ลองทำ 5.3.1</span><span class="tag book">จากตำรา</span><span class="tag easy">ง่าย</span><span class="ex-title">\(\langle p, q\rangle = p(1)q(1)\) เป็นผลคูณภายในหรือไม่ — ลองก่อนดูเฉลย</span></div>
    <div class="ex-body">
      <div class="ex-q">จงพิจารณาว่าการกำหนด \(\langle p(x), q(x)\rangle = p(1)q(1)\) สำหรับทุกๆ \(p(x), q(x) \in \mathbb{R}[x]\) เป็นผลคูณภายในบน \(\mathbb{R}[x]\) หรือไม่ เพราะเหตุใด</div>
      <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — เช็กสมบัติที่ 1 ก่อนเป็นประจำ: \(\langle p, p\rangle \geq 0\) และเท่ากับ 0 <em>เฉพาะ</em> \(p = \vec{0}\) — การแทนค่าที่จุดเดียว "บีบ" พหุนามทั้งตัวให้เหลือตัวเลขเดียว มักมีพหุนามไม่ศูนย์ที่หลุดไปเป็น 0 ได้</div>
      <ol class="steps">
        <li><span class="step-t">สมบัติอื่นดูผ่านหมด</span> เชิงเส้น ✓ สลับที่ ✓ และ \(\langle p, p\rangle = p(1)^2 \geq 0\) ✓ (กำลังสองไม่ติดลบ) — ดูเหมือนผ่านทุกข้อ</li>
        <li><span class="step-t">แต่จุดตายอยู่ที่ "เฉพาะ \(p = \vec{0}\)"</span> เลือก \(p(x) = x - 1 \neq \vec{0}\) (พหุนามไม่ศูนย์ มีดีกรี 1) แต่ \(p(1) = 0\) → \(\langle p, p\rangle = 0 \cdot 0 = 0\) — พหุนาม<em>ไม่ศูนย์</em>มี "ความยาวกำลังสอง" เป็นศูนย์ ✗</li>
        <li><span class="step-t">สาเหตุเชิงลึก</span> พหุนามที่ถูกบีบไป 0 คือทุกตัวที่มี 1 เป็นราก ได้แก่ \((x - 1)q(x)\) ทุกตัว — ผลคูณภายในจริงต้องแยกแยะเวกเตอร์ไม่ศูนย์ทุกตัวออกจากศูนย์ แต่การแทนค่าจุดเดียวทำไม่ได้ (ต่างจาก \(\int_0^1 f^2\,dx\) ที่<em>ความต่อเนื่อง</em>ช่วยกันไว้ตามที่พิสูจน์ในตัวอย่าง 5.3.1(3))</li>
        <li><span class="step-t">สรุป</span> ล้มสมบัติที่ 1 ที่ข้อ "เท่ากับ 0 เฉพาะตัวศูนย์" → <strong>ไม่เป็นผลคูณภายในบน \(\mathbb{R}[x]\)</strong></li>
      </ol>
      <div class="verify"><span class="lbl">สรุปคำตอบ:</span> ไม่เป็นผลคูณภายใน — เพราะ \(p(x) = x - 1 \neq \vec{0}\) แต่ \(\langle p, p\rangle = p(1)^2 = 0\) ขัดสมบัติ \(\langle \vec{v}, \vec{v}\rangle = 0\) ก็ต่อเมื่อ \(\vec{v} = \vec{0}\)</div>
    </div>
  </article>
</section>

<section class="block" id="apply">
  <h2><span class="h2-dot">🌍</span> เอาไปใช้ทำอะไร — โจทย์ประยุกต์</h2>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">🎤 จับเพลงจากเสียงตัวอย่าง</span><span class="tag app">ใช้จริง</span><span class="tag mid">กลาง</span><span class="ex-title">ความคล้ายสัญญาณด้วยผลคูณภายในแบบอินทิกรัล</span></div>
    <div class="ex-body">
      <div class="ex-q">แอปจับเพลงวัดความคล้ายของสัญญาณเสียงสองช่วงด้วย "มุมโคไซน์" ในปริภูมิฟังก์ชัน: \(\cos\theta = \dfrac{\langle f, g\rangle}{\|f\|\,\|g\|}\) เมื่อ \(\langle f, g\rangle = \int_0^{2\pi} f(t)g(t)\,dt\) ให้เสียงตัวอย่าง \(f(t) = \sin t\) ในคลังมี \(g(t) = \sin t + 0.1\sin 3t\) (เพลงเดิมเสียงรบกวนเบา ๆ) และ \(h(t) = \sin 2t\) (เพลงละเมลด) จงหา \(\cos\theta\) ของ \(f\) กับ \(g\) และของ \(f\) กับ \(h\) เพื่อบอกว่าเสียงตัวอย่างตรงกับเพลงไหน</div>
      <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — เสียงคือฟังก์ชันของเวลา และ "ความคล้าย" ของฟังก์ชันสองตัววัดด้วยผลคูณภายใน \(\int fg\) หารด้วยความยาวสองตัว (สูตรเดียวกับ cosine similarity ในบทที่ 4 แต่เปลี่ยนผลรวมเป็นอินทิกรัล) — เคล็ดลับ: คลื่นไซน์ความถี่ต่างกัน<em>ตั้งฉากกัน</em>บนช่วง \([0, 2\pi]\) ทำให้พจน์ไขว้ดับหายไปเอง</div>
      <ol class="steps">
        <li><span class="step-t">ค่าพื้นฐานที่ใช้ซ้ำ</span> \(\int_0^{2\pi} \sin^2 t\,dt = \pi\) (ครึ่งช่วงบวกครึ่งช่วงลบเฉลี่ยได้ \(\tfrac12\) ตลอด) และ \(\int_0^{2\pi} \sin t \sin 3t\,dt = \int_0^{2\pi} \sin t \sin 2t\,dt = 0\) — <em>เพราะ</em>ผลคูณไซน์สองความถี่ต่างกันลงเอยด้วยสูตรผลคูณเป็นผลบวกของ \(\cos\) ที่วนครบวงอยู่แล้ว (ตั้งฉากโดยอัตโนมัติ)</li>
        <li><span class="step-t">\(f\) กับ \(g\): แทบเป็นตัวเดียวกัน</span> \(\langle f, g\rangle = \int \sin t(\sin t + 0.1\sin 3t)\,dt = \pi + 0.1(0) = \pi\) · \(\|f\|^2 = \pi\), \(\|g\|^2 = \pi + 0.01\pi = 1.01\pi\) → \(\cos\theta = \dfrac{\pi}{\sqrt{\pi}\sqrt{1.01\pi}} = \dfrac{1}{\sqrt{1.01}} \approx 0.995\) — เกือบ 1 สุด ๆ</li>
        <li><span class="step-t">\(f\) กับ \(h\): ตั้งฉากกัน = ไม่คล้ายเลย</span> \(\langle f, h\rangle = \int_0^{2\pi} \sin t \sin 2t\,dt = 0\) → \(\cos\theta = 0\) — แม้ทั้งคู่เป็น "เสียงไซน์" เหมือนกัน แต่ความถี่ต่างกันทำให้ตั้งฉากกันสนิท (ตรวจด้วย python3: \(\pi \approx 3.1416\), \(0.995\), \(0\) ✓)</li>
        <li><span class="step-t">ตัดสิน</span> \(0.995 \gg 0\) → เสียงตัวอย่างตรงกับ \(g\) (เพลงเดิม + เสียงรบกวน) ไม่ใช่ \(h\) — ระบบจัดอันดับเพลงเลือกค่า \(\cos\theta\) สูงสุดทันที</li>
      </ol>
      <div class="verify"><span class="lbl">เห็นไหมว่า...</span> แอปจับเพลง ระบบจับคู่เสียงพูด และการค้นหาคลิปซ้ำในคลังวิดีโอ ล้วนวัด "ความคล้ายสัญญาณ" ด้วยผลคูณภายในบนปริภูมิฟังก์ชัน — และความตั้งฉากของคลื่นไซน์ความถี่ต่างกัน (ที่มาจากอินทิกรัลเป็นศูนย์) คือเหตุผลที่ระบบแยกเสียงต่ำ/เสียงสูงออกจากกันได้แม่นยำ</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">🎵 บีบอัดเสียง MP3</span><span class="tag app">ใช้จริง</span><span class="tag mid">กลาง</span><span class="ex-title">Fourier ตั้งฉาก — เก็บสัมประสิทธิ์ใหญ่ ทิ้งตัวเล็ก</span></div>
    <div class="ex-body">
      <div class="ex-q">เสียง 1 วินาทีแบบดิจิทัลคือฟังก์ชันที่มีค่าเป็นหมื่นจุด เครื่องเล่นเพลงบีบอัดโดย "ฉาย" สัญญาณลงบนฐานหลักเชิงตั้งฉากของคลื่นไซน์ (รากฐานของ Fourier) แล้วเก็บเฉพาะสัมประสิทธิ์ที่ใหญ่ ให้สัญญาณ \(f(t) = 3\sin t + 0.05\sin 2t\) บน \([0, 2\pi]\) จงหาสัมประสิทธิ์ของแต่ละความถี่ และแสดงว่าทำไมตัด \(\sin 2t\) ทิ้งได้แทบไม่เสียเสียง</div>
      <div class="approach"><span class="lbl">อธิบายโจทย์ง่าย ๆ</span> — การฉายบนฐานหลักเชิงตั้งฉากใช้สูตรทฤษฎีบท 4.1.3: น้ำหนักแต่ละตัว = \(\tfrac{\langle f, \text{ฐาน}\rangle}{\langle \text{ฐาน}, \text{ฐาน}\rangle}\) — ที่นี่ "ฐาน" คือคลื่นไซน์ความถี่ต่าง ๆ ซึ่งตั้งฉากกันเองตามอินทิกรัล จึงถอดสัมประสิทธิ์ทีละตัวได้โดยไม่ต้องแก้ระบบสมการใหญ่</div>
      <ol class="steps">
        <li><span class="step-t">เช็กความตั้งฉากของฐานหลักก่อน</span> \(\langle \sin t, \sin 2t\rangle = \int_0^{2\pi} \sin t \sin 2t\,dt = 0\) ✓ และ \(\|\sin kt\|^2 = \int_0^{2\pi} \sin^2 kt\,dt = \pi\) ทุก \(k\) — คลื่นไซน์ความถี่ต่างกันเป็น<em>ฐานหลักเชิงตั้งฉาก</em>ที่วัดความยาวเท่ากันทุกตัว</li>
        <li><span class="step-t">ถอดสัมประสิทธิ์ความถี่ที่ 1</span> \(\langle f, \sin t\rangle = \int (3\sin t + 0.05\sin 2t)\sin t\,dt = 3\pi + 0.05(0) = 3\pi\) → น้ำหนัก = \(\tfrac{3\pi}{\pi} = 3\) (พจน์ \(\sin 2t\) หายไปเพราะตั้งฉากกับ \(\sin t\) — ไม่รบกวนการวัดเลย)</li>
        <li><span class="step-t">ถอดสัมประสิทธิ์ความถี่ที่ 2</span> \(\langle f, \sin 2t\rangle = 3(0) + 0.05\pi = 0.05\pi\) → น้ำหนัก = \(\tfrac{0.05\pi}{\pi} = 0.05\)</li>
        <li><span class="step-t">เทียบพลังงานแล้วตัดสินใจ</span> ส่วนของความถี่ที่ 2 ในพลังงานรวม: \(\tfrac{(0.05)^2}{3^2 + (0.05)^2} = \tfrac{0.0025}{9.0025} \approx 0.03\%\) — ตัดทิ้งได้เพราะหูมนุษย์แยกความต่างระดับนี้ไม่ออก (ตรวจด้วย python3: \(3\pi \approx 9.4248\), \(0.05\pi \approx 0.1571\), \(0.03\%\) ✓) — เก็บแค่เลข "3" แทนข้อมูลหมื่นจุด = บีบอัดมหาศาล</li>
      </ol>
      <div class="verify"><span class="lbl">เห็นไหมว่า...</span> MP3/AAC/JPEG ทั้งหมดคือสูตรเดียวกัน: "ฉายลงฐานหลักเชิงตั้งฉาก → เก็บสัมประสิทธิ์ใหญ่ → ทิ้งตัวเล็ก" — และความตั้งฉากคือสิ่งที่ทำให้ทั้งหมดเป็นไปได้ เพราะถอดสัมประสิทธิ์แต่ละตัวได้ด้วยผลคูณภายในจุดเดียว \(\tfrac{\langle f, \vec{u}\rangle}{\|\vec{u}\|^2}\) โดยสมาชิกฐานอื่นไม่รบกวนเลย</div>
    </div>
  </article>
</section>

<section class="block" id="recipe">
  <h2><span class="h2-dot">⚡</span> สูตรสำเร็จ — ท่าที่ใช้ทำโจทย์หัวข้อนี้</h2>
  <div class="recipe">
    <div class="recipe-head">🪜 ท่าหลัก: ทำงานกับ \(\langle f, g\rangle = \int f g\)</div>
    <div class="recipe-body">
      <ol>
        <li><strong>คำนวณ \(\langle f, g\rangle\):</strong> คูณฟังก์ชัน → กระจาย → อินทิกรัลทีละพจน์ (ระวังช่วง: \([0,1]\) หรือ \([-1,1]\))</li>
        <li><strong>เช็กตั้งฉาก:</strong> จุดทุกคู่ = 0 / ใช้ทางลัด: คี่ × คู่บนช่วงสมมาตร = 0 ทันที</li>
        <li><strong>กราม-ชมิดต์:</strong> สูตรเดิมของบทที่ 4 เปลี่ยนจุดเป็นวงเล็บ — คูณสเกลาร์เก็บเลขสวยได้</li>
        <li><strong>ฉาย/ประมาณที่ดีสุด:</strong> น้ำหนัก \(\frac{\langle \vec{y}, \vec{u}_i\rangle}{\langle \vec{u}_i, \vec{u}_i\rangle}\) ทีละตัว → รวม → ตรวจด้วยเศษตกค้างตั้งฉากกับฐานหลัก</li>
        <li><strong>หนึ่งหน่วย:</strong> หารด้วย \(\|f\| = \sqrt{\langle f, f\rangle}\)</li>
      </ol>
    </div>
  </div>
  <div class="key-grid">
    <div class="key-card"><div class="k-title">ท่า: อินทิกรัลพหุนามเร็ว</div>\(\int_0^1 x^n dx = \tfrac{1}{n+1}\) — ทุกการคำนวณในหัวข้อนี้วนอยู่แค่สูตรนี้</div>
    <div class="key-card"><div class="k-title">ท่า: ช่วงสมมาตร</div>\(\int_{-1}^1 \text{คี่} = 0\) — เวกเตอร์คี่ตั้งฉากกับเวกเตอร์คู่โดยอัตโนมัติ</div>
    <div class="key-card"><div class="k-title">ท่า: โปลินอมอร์ธอโกนอล</div>ฐานที่ได้จาก \(\int_{-1}^1\) คือพหุนามเลอช็องดร์ \(\{1, x, \tfrac12(3x^2-1), \dots\}\) — โจทย์ชอบอ้างถึง</div>
    <div class="key-card"><div class="k-title">ท่า: เชื่อมกับบทที่ 4</div>ทุกทฤษฎีบท (4.1.2–4.1.5, 4.2.2–4.2.3, 4.3.1) ใช้ได้กับปริภูมิผลคูณภายในใด ๆ — แค่เปลี่ยนจุดเป็นวงเล็บ</div>
  </div>
</section>

<section class="block" id="practice">
  <h2><span class="h2-dot">🏋️</span> โจทย์ซ้อมมือ (6 ข้อ)</h2>
  <p class="small">ลองทำเองก่อน แล้วค่อยกดเปิดคำใบ้ → เฉลยทีละขั้น เมื่อทำได้แล้วติ๊ก ✓ เพื่อบันทึกความคืบหน้า</p>

  <article class="pr-card" data-pkey="p5-3-1">
    <div class="pr-head"><span class="pr-num">ข้อ 1</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(\langle p, q\rangle = \int_0^1 p(x)q(x)\,dx\) บน \(\mathbb{R}_1[x]\) จงหา \(\langle 2x, 1 + x\rangle\) และ \(\|2x\|\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(\langle 2x, 1+x\rangle = \int_0^1 (2x + 2x^2)\,dx\) / \(\|2x\|^2 = \int_0^1 4x^2\,dx\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> คูณแล้วอินทิกรัล — นิยาม \(\langle p, q\rangle = \int_0^1 p(x)q(x)\,dx\) บังคับให้คูณพหุนามสองตัวเข้าด้วยกันก่อนเสมอ ส่วน \(\|2x\|\) ต้องใช้นิยามนอร์ม \(\|f\| = \sqrt{\langle f, f\rangle}\) คือคูณ \(2x\) กับตัวเอง อินทิกรัล แล้วถอดรากทีหลัง</p>
      <ol class="steps">
        <li><span class="step-t">ผลคูณภายใน: คูณก่อน แล้วอินทิกรัลทีละพจน์</span> \(2x \cdot (1 + x) = 2x + 2x^2\) — ปฏิยานุพันธ์: \(\int 2x\,dx = x^2\) และ \(\int 2x^2\,dx = \tfrac{2x^3}{3}\) แทนขอบ \([0,1]\):
        \[ \langle 2x, 1+x\rangle = \int_0^1 (2x + 2x^2)\,dx = \left[x^2 + \frac{2x^3}{3}\right]_0^1 = 1 + \frac23 = \frac53 \]
        (แทนขอบบน \(x = 1\): \(1^2 + \tfrac{2 \cdot 1}{3} = 1 + \tfrac23\) ขอบล่าง \(x = 0\) ให้ 0 — รวมเศษด้วยตัวส่วนร่วม 3: \(\tfrac{3+2}{3} = \tfrac53\))</li>
        <li><span class="step-t">นอร์ม: คูณตัวเอง อินทิกรัล แล้วถอดราก</span> \(\|2x\|^2 = \langle 2x, 2x\rangle = \int_0^1 4x^2\,dx\) — ปฏิยานุพันธ์ของ \(4x^2\) คือ \(\tfrac{4x^3}{3}\):
        \[ \|2x\|^2 = \int_0^1 4x^2\,dx = \left[\frac{4x^3}{3}\right]_0^1 = \frac43 \;\Rightarrow\; \|2x\| = \sqrt{\frac43} = \frac{2}{\sqrt3} \]
        (ถอดรากทีละตัวประกอบ: \(\sqrt{4} = 2\) ส่วน \(\sqrt3\) อยู่ในรากต่อไป) — สรุปคำตอบเต็ม: \(\langle 2x, 1+x\rangle = \tfrac53\) และ \(\|2x\| = \tfrac{2}{\sqrt3}\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p5-3-2">
    <div class="pr-head"><span class="pr-num">ข้อ 2</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ปริภูมิฟังก์ชันมีผลคูณภายใน \(\langle f, g\rangle = \int_{-1}^{1} f(x)g(x)\,dx\) จงตรวจว่า \(f(x) = x^2\) กับ \(g(x) = x\) ตั้งฉากกันหรือไม่ และหา \(\|f\|\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(\langle x^2, x\rangle = \int_{-1}^1 x^3\,dx\) — ฟังก์ชันคี่บนช่วงสมมาตร</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ใช้ความคี่ของ \(x^3\) — <strong>ฟังก์ชันคี่</strong>คือฟังก์ชันที่ \(f(-x) = -f(x)\) เช่น \(x^3\) อินทิกรัลบนช่วงสมมาตร \([-1, 1]\) เป็นศูนย์เสมอ เพราะพื้นที่ฝั่งซ้าย \([-1, 0]\) เป็นลบเท่ากับพื้นที่ฝั่งขวา \([0, 1]\) ที่เป็นบวกพอดี · ส่วน \(\|x^2\|\) ต้องคูณตัวเองเป็น \(x^4\) (ฟังก์ชัน<em>คู่</em> — ฝั่งซ้ายขวาให้ค่าเท่ากัน) จึงได้ "สองเท่าของฝั่งขวา" ที่ต้องคำนวณจริง</p>
      <ol class="steps">
        <li><span class="step-t">ผลคูณภายใน: ตั้งฉากหรือไม่</span> \(\langle x^2, x\rangle = \int_{-1}^1 x^2 \cdot x\,dx = \int_{-1}^1 x^3\,dx\) — ผลคูณของฟังก์ชันคู่ (\(x^2\)) กับฟังก์ชันคี่ (\(x\)) เป็นฟังก์ชันคี่ เพราะ \((-x)^3 = -x^3\) ดังนั้น
        \[ \int_{-1}^1 x^3\,dx = 0 \;\Rightarrow\; \langle x^2, x\rangle = 0 \;\Rightarrow\; \textbf{ตั้งฉากกัน} \;\checkmark \]
        (ตรวจด้วยการแทนขอบจริง: ปฏิยานุพันธ์ \(\tfrac{x^4}{4}\) ที่ขอบ \(\pm1\) ให้ \(\tfrac14 - \tfrac14 = 0\) ✓)</li>
        <li><span class="step-t">นอร์มของ \(f(x) = x^2\)</span> \(\|x^2\|^2 = \langle x^2, x^2\rangle = \int_{-1}^1 x^4\,dx\) — ปฏิยานุพันธ์ของ \(x^4\) คือ \(\tfrac{x^5}{5}\) แทนขอบ:
        \[ \|x^2\|^2 = \int_{-1}^1 x^4\,dx = \left[\frac{x^5}{5}\right]_{-1}^1 = \frac{1}{5} - \frac{(-1)^5}{5} = \frac25 \;\Rightarrow\; \|x^2\| = \sqrt{\tfrac25} \]
        (สังเกต: \((-1)^5 = -1\) เพราะยกกำลังคี่ จึงได้ \(\tfrac15 + \tfrac15 = \tfrac25\) — สองเท่าของฝั่งขวา ตามความเป็นฟังก์ชันคู่ของ \(x^4\)) — สรุปคำตอบเต็ม: \(x^2\) กับ \(x\) ตั้งฉากกัน และ \(\|x^2\| = \sqrt{\tfrac25}\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p5-3-3">
    <div class="pr-head"><span class="pr-num">ข้อ 3</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงใช้กระบวนการกราม-ชมิดต์กับฐานหลักมาตรฐาน \(\{1, x\}\) ของ \(\mathbb{R}_1[x]\) เมื่อ \(\langle p, q\rangle = \int_{-1}^{1} p(x)q(x)\,dx\) แล้วปรับให้เป็นฐานหลักเชิงตั้งฉากปรกติ</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(\langle x, 1\rangle = \int_{-1}^1 x\,dx = 0\) — \(x\) ตั้งฉากกับ 1 อยู่แล้ว! เหลือแค่ปรับหนึ่งหน่วย</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> กราม-ชมิดต์อาจ "ไม่ต้องทำอะไรเลย" ถ้าฐานเดิมตั้งฉากกันแล้ว — ช่วงสมมาตร \([-1, 1]\) ทำให้ \(\langle x, 1\rangle = 0\) อัตโนมัติ (เพราะ \(x\) เป็นฟังก์ชันคี่) จึงเหลือแค่ปรับหนึ่งหน่วย — ระวังการอินทิกรัลบน \([-1,1]\) ให้ค่าต่างจาก \([0,1]\) เช่น \(\int_{-1}^1 x^2\,dx = \tfrac23\) ไม่ใช่ \(\tfrac13\) (ได้สองฝั่งบวกกัน)</p>
      <ol class="steps">
        <li><span class="step-t">ตั้ง \(\vec{v}_1 = 1\), หา \(\vec{v}_2\)</span> คำนวณส่วนฉายก่อน: \(\langle x, 1\rangle = \int_{-1}^1 x\,dx = \left[\tfrac{x^2}{2}\right]_{-1}^1 = \tfrac12 - \tfrac12 = 0\) (เพราะ \(x\) เป็นฟังก์ชันคี่บนช่วงสมมาตร) และ \(\langle 1, 1\rangle = \int_{-1}^1 1\,dx = 1 - (-1) = 2\):
        \[ \vec{v}_2 = x - \frac{\langle x, 1\rangle}{\langle 1, 1\rangle}\cdot 1 = x - \frac{0}{2} = x \]
        (\(\langle x, 1\rangle = 0\) เพราะ \(x\) เป็นฟังก์ชันคี่ — ช่วงสมมาตรช่วยให้เลขสวย: ไม่มีอะไรต้องลบเลย ฐานเดิมตั้งฉากกันอยู่แล้ว กราม-ชมิดต์จึง "ผ่าน" ไปเฉย ๆ)</li>
        <li><span class="step-t">ปรับหนึ่งหน่วย (หารด้วยนอร์มตัวเอง)</span> \(\|1\|^2 = \int_{-1}^1 1\,dx = 2 \Rightarrow \|1\| = \sqrt2\) · \(\|x\|^2 = \int_{-1}^1 x^2\,dx = \left[\tfrac{x^3}{3}\right]_{-1}^1 = \tfrac13 - \left(-\tfrac13\right) = \tfrac23 \Rightarrow \|x\| = \sqrt{\tfrac23}\):
        \[ \vec{u}_1 = \frac{1}{\sqrt2}, \qquad \vec{u}_2 = \frac{x}{\sqrt{2/3}} = \sqrt{\frac{3}{2}}\,x \]
        (หารด้วยราก = คูณด้วยรากกลับ: \(\tfrac{1}{\sqrt{2/3}} = \sqrt{\tfrac32}\))</li>
        <li><span class="step-t">ตรวจคำตอบ</span> \(\langle \vec{u}_1, \vec{u}_2\rangle = \tfrac{1}{\sqrt2}\sqrt{\tfrac32}\int_{-1}^1 x\,dx = (\text{ค่าคงที่}) \times 0 = 0\) ✓ และ \(\|\vec{u}_2\|^2 = \tfrac32\int_{-1}^1 x^2\,dx = \tfrac32\cdot\tfrac23 = 1\) ✓ (ฐานนี้คือพหุนามเลอช็องดร์สองตัวแรกแบบปรับหนึ่งหน่วย) — สรุปคำตอบเต็ม: ฐานหลักเชิงตั้งฉากปรกติคือ \(\{\tfrac{1}{\sqrt2},\; \sqrt{\tfrac32}\,x\}\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p5-3-4">
    <div class="pr-head"><span class="pr-num">ข้อ 4</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(H = \operatorname{Span}\{1, 2x - 1\}\) ใน \(\mathbb{R}_2[x]\) ด้วย \(\langle p, q\rangle = \int_0^1 p(x)q(x)\,dx\) (ฐานหลักเชิงตั้งฉาก — จากตัวอย่าง 3) จงหา \(\operatorname{proj}_H (1 + x^2)\) และ \(\operatorname{dist}((1+x^2), H)\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">น้ำหนัก 1: \(\tfrac{\langle 1+x^2, 1\rangle}{\langle 1,1\rangle} = \tfrac43\) / \(\langle 1+x^2, 2x-1\rangle = \int_0^1 (1+x^2)(2x-1)\,dx = \tfrac16\) และ \(\langle 2x-1, 2x-1\rangle = \tfrac13\) → น้ำหนัก = \(\tfrac{1/6}{1/3} = \tfrac12\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ฉายด้วยน้ำหนักทีละตัว — ฐานหลักเชิงตั้งฉาก \(\{1, 2x-1\}\) พร้อมใช้จากตัวอย่าง 3 (เวอร์ชันก่อนปรับหนึ่งหน่วยของ \(\sqrt3(2x-1)\) ก็ตั้งฉากเหมือนกัน) จึงใช้สูตรทฤษฎีบท 4.1.3 ได้ทันที · <strong>ระยะทาง (dist)</strong> = ความยาวของ "เศษตกค้าง" \(\vec{y} - \operatorname{proj}_H \vec{y}\) ซึ่งเป็นระยะที่สั้นที่สุดจาก \(\vec{y}\) ถึง \(H\) — ทุกอินทิกรัลในข้อนี้ใช้สูตร \(\int_0^1 x^k\,dx = \tfrac{1}{k+1}\) ทั้งหมด</p>
      <ol class="steps">
        <li><span class="step-t">คำนวณอินทิกรัลที่ต้องใช้ทั้งหมด 3 ตัว</span> กระจายทีละตัวก่อนอินทิกรัลเสมอ — (1) \(\langle 1+x^2, 1\rangle\): \((1+x^2)\cdot 1 = 1 + x^2\) ให้ \(\int_0^1 (1 + x^2)dx = \left[x + \tfrac{x^3}{3}\right]_0^1 = 1 + \tfrac13 = \tfrac43\) · (2) \(\langle 1+x^2, 2x-1\rangle\): \((1+x^2)(2x-1) = 2x - 1 + 2x^3 - x^2\) ให้ \(\int_0^1 (2x - 1 + 2x^3 - x^2)dx = \left[x^2 - x + \tfrac{x^4}{2} - \tfrac{x^3}{3}\right]_0^1 = 1 - 1 + \tfrac12 - \tfrac13 = \tfrac{3-2}{6} = \tfrac16\) · (3) \(\langle 2x-1, 2x-1\rangle\): \((2x-1)^2 = 4x^2 - 4x + 1\) ให้ \(\int_0^1 (4x^2 - 4x + 1)dx = \tfrac43 - 2 + 1 = \tfrac{4 - 6 + 3}{3} = \tfrac13\) ✓</li>
        <li><span class="step-t">หาน้ำหนักทั้งสอง</span> น้ำหนัก = อินทิกรัลตัวบนหารด้วยตัวล่าง (หารเศษส่วน = คูณด้วยส่วนกลับ: \(\tfrac{1/6}{1/3} = \tfrac16 \times \tfrac31 = \tfrac12\)):
        \[ \frac{\langle 1+x^2, 1\rangle}{\langle 1, 1\rangle} = \frac{1 + \tfrac13}{1} = \frac43, \qquad \frac{\langle 1+x^2, 2x-1\rangle}{\langle 2x-1, 2x-1\rangle} = \frac{\tfrac16}{\tfrac13} = \frac12 \]
        (\(\langle 2x-1, 2x-1\rangle = \int_0^1 (4x^2 - 4x + 1)\,dx = \tfrac43 - 2 + 1 = \tfrac13\) ✓ — รวมเศษด้วยตัวส่วนร่วม 3: \(\tfrac43 - \tfrac63 + \tfrac33 = \tfrac{4-6+3}{3}\))</li>
        <li><span class="step-t">ประกอบการฉาย</span> เอาน้ำหนักคูณฐานหลักแล้วรวม — พจน์ที่สอง: \(\tfrac12(2x - 1) = x - \tfrac12\):
        \[ \operatorname{proj}_H (1+x^2) = \frac43\cdot 1 + \frac12(2x - 1) = \frac{4}{3} + x - \frac12 = x + \frac{5}{6} \]
        (รวมค่าคงตัวด้วยตัวส่วนร่วม 6: \(\tfrac43 - \tfrac12 = \tfrac86 - \tfrac36 = \tfrac56\))</li>
        <li><span class="step-t">ระยะทาง: หาเศษตกค้างก่อน</span> \((1 + x^2) - (x + \tfrac56) = x^2 - x + \tfrac16\) (รวมค่าคงตัว: \(1 - \tfrac56 = \tfrac16\)) แล้วหาความยาว:
        \[ \operatorname{dist} = \left\| x^2 - x + \tfrac16 \right\| = \sqrt{\int_0^1 \left(x^2 - x + \tfrac16\right)^2 dx} = \sqrt{\frac{1}{180}} = \frac{1}{6\sqrt5} \]
        (\(\int_0^1 (x^2-x+\tfrac16)^2\,dx = \tfrac{1}{180}\) จากการกระจาย: \((x^2-x+\tfrac16)^2 = x^4 - 2x^3 + \tfrac43x^2 - \tfrac13x + \tfrac1{36}\) (ใช้ \((a+b+c)^2 = a^2+b^2+c^2+2ab+2ac+2bc\) กับ \(a = x^2, b = -x, c = \tfrac16\)) แล้วอินทิกรัลทีละพจน์: \(\tfrac15 - \tfrac12 + \tfrac{4}{9} - \tfrac16 + \tfrac1{36}\) — รวมเศษด้วยตัวส่วนร่วม 180: \(\tfrac{36 - 90 + 80 - 30 + 5}{180} = \tfrac{1}{180}\) · ถอดราก: \(\sqrt{180} = \sqrt{36 \times 5} = 6\sqrt5\))</li>
        <li><span class="step-t">ตรวจคำตอบ</span> เศษตกค้าง \(x^2 - x + \tfrac16\) ต้องตั้งฉากกับฐานหลักทั้งสองตัว — กับ \(1\): \(\int_0^1 (x^2 - x + \tfrac16)\,dx = \tfrac13 - \tfrac12 + \tfrac16 = \tfrac{2-3+1}{6} = 0\) ✓ · กับ \(2x-1\): แยกเป็นสามพจน์
        \(\int_0^1 x^2(2x-1)\,dx = \left[\tfrac{x^4}{2} - \tfrac{x^3}{3}\right]_0^1 = \tfrac12 - \tfrac13 = \tfrac16\) ลบด้วย \(\int_0^1 x(2x-1)\,dx = \left[\tfrac{2x^3}{3} - \tfrac{x^2}{2}\right]_0^1 = \tfrac23 - \tfrac12 = \tfrac16\) และบวก \(\tfrac16\int_0^1 (2x-1)\,dx = \tfrac16\left[x^2 - x\right]_0^1 = 0\):
        \[ \int_0^1 (x^2-x+\tfrac16)(2x-1) = \tfrac16 - \tfrac16 + 0 = 0 \;\checkmark \]
        (ความตั้งฉากของเศษตกค้างคือเครื่องหมายว่าการฉายถูกทิศทาง) — สรุปคำตอบเต็ม: \(\operatorname{proj}_H (1+x^2) = x + \tfrac56\) และ \(\operatorname{dist}((1+x^2), H) = \tfrac{1}{6\sqrt5}\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p5-3-5">
    <div class="pr-head"><span class="pr-num">ข้อ 5</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงยืนยันความไม่เท่ากันของโคชี-ชวาร์ตซ์ \(|\langle f, g\rangle| \leq \|f\|\,\|g\|\) ด้วย \(f(x) = x\), \(g(x) = 1 + x\) เมื่อ \(\langle f, g\rangle = \int_0^1 f(x)g(x)\,dx\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">ซ้าย: \(\langle x, 1+x\rangle = \tfrac56\) / ขวา: \(\|x\| = \tfrac{1}{\sqrt3}\), \(\|1+x\| = \sqrt{\tfrac73}\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> คำนวณสองฝั่งแล้วเทียบ — <strong>อสมการโคชี-ชวาร์ตซ์ (Cauchy–Schwarz)</strong> บอกว่า \(|\langle f, g\rangle| \leq \|f\|\,\|g\|\) เสมอ (ค่าสัมบูรณ์ของผลคูณภายในไม่เกินผลคูณของความยาวสองตัว) — ฝั่งซ้ายต้องอินทิกรัล \(\langle x, 1+x\rangle\) ฝั่งขวาต้องนอร์มสองตัว โดย \(\|1+x\|^2 = \tfrac73\) เป็นค่าเดียวกับตัวอย่าง 1 พอดี</p>
      <ol class="steps">
        <li><span class="step-t">ฝั่งซ้าย: \(|\langle x, 1+x\rangle|\)</span> คูณพหุนามก่อน: \(x(1+x) = x + x^2\) ปฏิยานุพันธ์: \(\tfrac{x^2}{2} + \tfrac{x^3}{3}\) แทนขอบ \([0,1]\):
        \[ |\langle x, 1+x\rangle| = \left|\int_0^1 (x + x^2)\,dx\right| = \left|\frac12 + \frac13\right| = \frac56 \approx 0.833 \]
        (รวมเศษด้วยตัวส่วนร่วม 6: \(\tfrac36 + \tfrac26 = \tfrac56\) · สัญลักษณ์ \(\approx\) อ่านว่า "ประมาณ")</li>
        <li><span class="step-t">ฝั่งขวา: นอร์มสองตัวคูณกัน</span> \(\|x\|^2 = \int_0^1 x^2\,dx = \tfrac13 \Rightarrow \|x\| = \sqrt{\tfrac13}\) · \(\|1+x\|^2 = \int_0^1 (1+x)^2\,dx = \tfrac73 \Rightarrow \|1+x\| = \sqrt{\tfrac73}\) (จากตัวอย่าง 1):
        \[ \|x\|\,\|1+x\| = \sqrt{\frac{7}{9}} = \frac{\sqrt7}{3} \approx 0.882 \]
        (รากของผลหาร = ผลหารของราก: \(\sqrt{7/9} = \tfrac{\sqrt7}{\sqrt9} = \tfrac{\sqrt7}{3}\) เพราะ \(\sqrt9 = 3\))</li>
        <li><span class="step-t">เทียบและสรุป</span> เทียบเป็นเศษส่วนเป๊ะ ๆ ได้ด้วยการยกกำลังสองทั้งสองฝั่ง: \(\left(\tfrac56\right)^2 = \tfrac{25}{36}\) กับ \(\left(\tfrac{\sqrt7}{3}\right)^2 = \tfrac79 = \tfrac{28}{36}\) — เพราะ \(\tfrac{25}{36} &lt; \tfrac{28}{36}\) จึงได้ \(\tfrac56 \approx 0.833 &lt; 0.882\) ✓ อสมการเป็นจริง (เส้นแบ่งสำคัญ: โคชี-ชวาร์ตซ์เป็นเท่ากับพอดีเมื่อ \(f, g\) สัดส่วนกัน — ที่นี่ \(1 + x\) ไม่ใช่ค่าคงตัวคูณ \(x\) จึงเป็น "น้อยกว่า" จริง ๆ) — สรุปคำตอบเต็ม: \(|\langle x, 1+x\rangle| = \tfrac56 \leq \|x\|\|1+x\| = \tfrac{\sqrt7}{3}\) ยืนยันอสมการโคชี-ชวาร์ตซ์ได้จริง</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p5-3-6">
    <div class="pr-head"><span class="pr-num">ข้อ 6</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงใช้กระบวนการกราม-ชมิดต์กับ \(\{1, x\}\) ของ \(\mathbb{R}_1[x]\) เมื่อ \(\langle p, q\rangle = \int_0^1 x\,p(x)q(x)\,dx\) (สังเกตว่ามีตัวคูณ \(x\) พิเศษ!) แล้วปรับให้เป็นฐานหลักเชิงตั้งฉากปรกติ</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(\langle p, q\rangle = \int_0^1 x\,p q\): \(\langle 1, 1\rangle = \tfrac12\), \(\langle x, 1\rangle = \tfrac13\), \(\langle x, x\rangle = \tfrac14\) → \(\vec{v}_2 = x - \tfrac23\) → ปรับหนึ่งหน่วยด้วย \(\|\vec{v}_2\|^2 = \int_0^1 x(x - \tfrac23)^2\,dx = \tfrac{1}{18}\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> สูตรเดิมทุกอย่าง แค่อินทิกรัลมี \(x\) นำหน้า — ผลคูณภายในนี้คือ \(\langle p, q\rangle = \int_0^1 x\,p(x)q(x)\,dx\) มี "น้ำหนักถ่วง" ด้วย \(x\) (ยิ่งใกล้ \(x = 1\) ยิ่งนับค่ามาก) ทุกอินทิกรัลจึงมีพจน์ \(x\) เพิ่มเข้าไปในตัวคูณ ขั้นตอนยังเดิม: ตั้ง \(\vec{v}_1 = 1\) → ลบส่วนฉายจาก \(x\) → ปรับหนึ่งหน่วย</p>
      <ol class="steps">
        <li><span class="step-t">ตั้ง \(\vec{v}_1 = 1\) และวัดอินทิกรัลที่ต้องใช้</span> อย่าลืมคูณด้วยน้ำหนัก \(x\) ก่อนเสมอ — \(\langle 1, 1\rangle = \int_0^1 x \cdot 1 \cdot 1\,dx = \int_0^1 x\,dx = \left[\tfrac{x^2}{2}\right]_0^1 = \tfrac12\) · \(\langle x, 1\rangle = \int_0^1 x \cdot x \cdot 1\,dx = \int_0^1 x^2\,dx = \left[\tfrac{x^3}{3}\right]_0^1 = \tfrac13\) (สังเกต: น้ำหนัก \(x\) ทำให้ \(\langle 1, 1\rangle = \tfrac12\) ไม่ใช่ 1 แบบที่เคยเห็นบนช่วง \([0,1]\) ปกติ)</li>
        <li><span class="step-t">ลบส่วนฉายจาก \(x\)</span> หารเศษส่วน = คูณด้วยส่วนกลับ: \(\tfrac{1/3}{1/2} = \tfrac13 \times \tfrac21 = \tfrac23\):
        \[ \vec{v}_2 = x - \frac{1/3}{1/2}\cdot 1 = x - \frac{2}{3} \]
        (เหตุผลที่ต้องลบ \(\tfrac23\) ไม่ใช่ \(\tfrac12\): น้ำหนัก \(x\) เน้นฝั่งขวาของช่วง จุด "ศูนย์ถ่วง" ของ \(x\) ภายใต้น้ำหนักนี้จึงอยู่ที่ \(\tfrac23\))</li>
        <li><span class="step-t">ปรับหนึ่งหน่วย: หานอร์มก่อน</span> \(\|\vec{v}_1\|^2 = \langle 1, 1\rangle = \tfrac12 \Rightarrow \|\vec{v}_1\| = \sqrt{\tfrac12}\) · สำหรับ \(\vec{v}_2\): กระจาย \(x\left(x - \tfrac23\right)^2 = x\left(x^2 - \tfrac43x + \tfrac49\right) = x^3 - \tfrac43x^2 + \tfrac49x\) แล้วอินทิกรัลทีละพจน์ด้วยสูตร \(\tfrac{1}{k+1}\): \(\tfrac14 - \tfrac43 \cdot \tfrac13 + \tfrac49 \cdot \tfrac12 = \tfrac14 - \tfrac49 + \tfrac29\) — รวมเศษด้วยตัวส่วนร่วม 36: \(\tfrac{9}{36} - \tfrac{16}{36} + \tfrac{8}{36} = \tfrac{9 - 16 + 8}{36} = \tfrac{1}{36}\)
        \[ \|\vec{v}_2\|^2 = \int_0^1 x\left(x - \tfrac23\right)^2\,dx = \int_0^1 \left(x^3 - \tfrac43x^2 + \tfrac49x\right)dx = \tfrac14 - \tfrac49 + \tfrac29 = \tfrac{9 - 16 + 8}{36} = \tfrac{1}{36} \]</li>
        <li><span class="step-t">ปรับหนึ่งหน่วยทั้งสองตัว</span> \(\vec{u}_1 = \tfrac{\vec{v}_1}{\|\vec{v}_1\|} = \tfrac{1}{\sqrt{1/2}} = \sqrt2\) (คูณด้วยรากกลับ: \(\tfrac{1}{\sqrt{1/2}} = \sqrt2\)) · \(\|\vec{v}_2\| = \sqrt{\tfrac{1}{36}} = \tfrac16 \Rightarrow \vec{u}_2 = 6\left(x - \tfrac23\right)\):
        \[ \vec{u}_1 = \sqrt{2}, \qquad \vec{u}_2 = 6\left(x - \frac23\right) = 6x - 4 \]</li>
        <li><span class="step-t">ตรวจคำตอบ</span> \(\langle \vec{u}_1, \vec{u}_2\rangle = \int_0^1 x\cdot 1\cdot(6x-4)\,dx = \int_0^1 (6x^2 - 4x)\,dx = \left[2x^3 - 2x^2\right]_0^1 = 2 - 2 = 0\) ✓ และ \(\|\vec{u}_2\|^2 = 36 \cdot \|\vec{v}_2\|^2 = 36 \cdot \tfrac{1}{36} = 1\) ✓ — สรุปคำตอบเต็ม: ฐานหลักเชิงตั้งฉากปรกติคือ \(\{\sqrt2,\; 6x - 4\}\) ภายใต้ผลคูณภายในถ่วงน้ำหนัก \(x\) (สูตรกราม-ชมิดต์เหมือนเดิมทุกอย่าง เปลี่ยนแค่ตัววัด)</li>
      </ol>
    </div></details>
  </article>
</section>
