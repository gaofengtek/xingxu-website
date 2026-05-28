# 星旭官网全站优化实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 全站5页面向"科技感+企业大气"方向优化：Hero叠加玻璃卡片+轮播、首页新增场景方案/数据亮点、全站视觉统一、动效交互升级、导航页脚重设计

**Architecture:** 纯静态 HTML/CSS/JS，不改技术栈。CSS 新增全局设计系统（玻璃拟态、滚动揭示、数字动画），JS 新增导航透明切换 + IntersectionObserver 驱动动效，HTML 首页重组 + 子页统一

**Tech Stack:** HTML5 + CSS3 (custom properties, backdrop-filter, animations) + Vanilla JS (IntersectionObserver, scroll events)

**Source spec:** `docs/superpowers/specs/2026-05-28-xingxu-website-redesign.md`

---

### Task 1: CSS 全局设计系统升级

**Files:**
- Modify: `css/style.css` (重写全局部分)

- [ ] **Step 1: 更新 CSS 变量和全局样式**

将 `css/style.css` 中 `:root` 和全局重置部分替换为：

```css
/* === CSS 变量 === */
:root {
  --color-primary: #1A237E;
  --color-primary-light: #283593;
  --color-accent: #FF8F00;
  --color-accent-light: #FFB300;
  --color-bg: #F5F7FA;
  --color-white: #FFFFFF;
  --color-text: #333333;
  --color-text-light: #666666;
  --color-border: #E0E0E0;
  --font-zh: "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif;
  --font-en: "Segoe UI", system-ui, -apple-system, sans-serif;
  --max-width: 1200px;
  --nav-height: 80px;
  --shadow-sm: 0 2px 12px rgba(0,0,0,0.06);
  --shadow-md: 0 8px 28px rgba(0,0,0,0.1);
  --shadow-lg: 0 16px 48px rgba(0,0,0,0.12);
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --glass-bg: rgba(0,0,0,0.35);
  --glass-border: rgba(255,255,255,0.12);
  --glass-blur: 20px;
  --transition-fast: 0.2s ease;
  --transition-smooth: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

- [ ] **Step 2: 在全局重置后添加通用动画和工具类**

在 `body` 样式块之后、`.container` 之前插入：

```css
/* === 滚动揭示动画 === */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* === 玻璃拟态卡片 === */
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
}

/* === 导航透明模式 === */
.navbar.transparent {
  background: transparent;
  border-bottom-color: transparent;
}
.navbar.transparent .nav-links a { color: #fff; }
.navbar.transparent .nav-links a:hover,
.navbar.transparent .nav-links a.active { color: #fff; border-bottom-color: var(--color-accent); }
.navbar.transparent .nav-logo span { color: #fff; }
.navbar.transparent .nav-toggle { color: #fff; }
.navbar.solid {
  background: #fff;
  border-bottom-color: var(--color-border);
  box-shadow: var(--shadow-sm);
}

/* === 数字增长 === */
.stat-number { font-size: 2.2rem; font-weight: 800; color: var(--color-accent); }

/* === 场景卡片 === */
.scene-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.scene-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: 32px 24px;
  text-align: center;
  transition: transform var(--transition-smooth), box-shadow var(--transition-smooth);
  position: relative;
  overflow: hidden;
}
.scene-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
}
.scene-card.s1::before { background: var(--color-primary); }
.scene-card.s2::before { background: var(--color-accent); }
.scene-card.s3::before { background: var(--color-primary-light); }
.scene-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); }
.scene-icon { font-size: 2.2rem; margin-bottom: 12px; }

/* === 数据亮点区 === */
.stats-section {
  background: linear-gradient(135deg, var(--color-primary) 0%, #0d1b2a 100%);
  padding: 48px 0;
}
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; text-align: center; }
.stat-item {}
.stat-label { color: rgba(255,255,255,0.65); font-size: 0.85rem; margin-top: 4px; }

/* === Hero 玻璃卡片 === */
.hero-glass {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 48px 56px;
}
.hero-glass h1 { color: #fff; font-size: 2.6rem; font-weight: 800; margin-bottom: 12px; }
.hero-glass p { color: rgba(255,255,255,0.75); font-size: 1.1rem; max-width: 560px; margin: 0 auto 28px; }
.hero-actions { display: flex; gap: 14px; justify-content: center; }

/* === 标语轮播 === */
.tagline-dots { display: flex; gap: 20px; justify-content: center; margin-top: 18px; }
.tagline-dot {
  color: rgba(255,255,255,0.4);
  font-size: 0.78rem;
  cursor: pointer;
  transition: color 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.tagline-dot::before {
  content: '';
  display: block;
  width: 40px;
  height: 2px;
  background: rgba(255,255,255,0.2);
  transition: background 0.3s, width 0.3s;
}
.tagline-dot.active { color: #fff; }
.tagline-dot.active::before { background: var(--color-accent); width: 60px; }

/* === 页脚 === */
.footer-new {
  background: #0d1b2a;
  color: rgba(255,255,255,0.5);
  padding: 48px 0 24px;
  font-size: 0.82rem;
}
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 32px; }
.footer-grid h4 { color: #fff; font-size: 0.9rem; margin-bottom: 14px; }
.footer-grid a { color: rgba(255,255,255,0.5); transition: color 0.2s; }
.footer-grid a:hover { color: var(--color-accent); }
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  margin-top: 32px;
  padding-top: 16px;
  text-align: center;
  font-size: 0.72rem;
  color: rgba(255,255,255,0.3);
}

/* === 响应式 === */
@media (max-width: 768px) {
  .scene-cards { grid-template-columns: 1fr; }
  .stats-grid { grid-template-columns: 1fr 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .hero-glass { padding: 28px 20px; }
  .hero-glass h1 { font-size: 1.8rem; }
}
```

- [ ] **Step 3: Commit**

```bash
cd D:/claude/company-website && git add css/style.css && git commit -m "feat: CSS全局设计系统升级 — 玻璃拟态、滚动揭示、导航透明、数据亮点"
```

---

### Task 2: 导航栏透明→实色切换

**Files:**
- Modify: `js/main.js` (追加导航滚动逻辑)
- Modify: `css/style.css` (确保透明模式样式完整)

- [ ] **Step 1: 在 main.js 中追加导航滚动监听**

在 `js/main.js` 的 `DOMContentLoaded` 回调末尾追加（在最后一个 `}` 之前）：

```js
  // 导航栏透明→实色切换
  var navbar = document.querySelector('.navbar');
  var hero = document.querySelector('.hero');
  if (navbar && hero) {
    var heroBottom = hero.offsetTop + hero.offsetHeight - navbar.offsetHeight;
    function updateNav() {
      if (window.scrollY > heroBottom) {
        navbar.classList.add('solid');
        navbar.classList.remove('transparent');
      } else {
        navbar.classList.add('transparent');
        navbar.classList.remove('solid');
      }
    }
    navbar.classList.add('transparent');
    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
  }
```

- [ ] **Step 2: 提交**

```bash
cd D:/claude/company-website && git add js/main.js && git commit -m "feat: 导航栏透明→实色滚动切换"
```

---

### Task 3: 首页 Hero 升级 — 玻璃卡片 + 标语轮播

**Files:**
- Modify: `index.html` (Hero 区域)
- CSS 已在前置任务中添加

- [ ] **Step 1: 替换 Hero 区域 HTML**

将 `index.html` 中 `<section class="hero">...</section>` 替换为：

```html
<section class="hero">
  <video class="hero-video" autoplay loop muted playsinline>
    <source src="hero.mp4" type="video/mp4">
  </video>
  <div class="hero-glass">
    <div class="glass-card" style="padding: 48px 56px;">
      <h1>新能源仿真技术引领者</h1>
      <p>专注新能源 · 电力系统 · 氢能仿真研究与教学系统研发</p>
      <div class="hero-actions">
        <a href="contact.html" class="btn btn-primary" style="padding: 14px 36px; font-size: 1rem;">联系我们</a>
        <a href="products.html" class="btn btn-outline" style="padding: 14px 36px; font-size: 1rem;">了解更多</a>
      </div>
    </div>
    <div class="tagline-dots">
      <span class="tagline-dot active">七大领域覆盖</span>
      <span class="tagline-dot">教学培训系统</span>
      <span class="tagline-dot">技术咨询服务</span>
    </div>
  </div>
</section>
```

- [ ] **Step 2: 在 CSS 中确保 hero-glass 响应式已在 Task 1 添加**

验证 `@media (max-width: 768px)` 中包含 `.hero-glass` 的响应式规则。

- [ ] **Step 3: 提交**

```bash
cd D:/claude/company-website && git add index.html && git commit -m "feat: Hero区域升级 — 玻璃拟态卡片+标语轮播"
```

---

### Task 4: 首页新增场景化解决方案

**Files:**
- Modify: `index.html` (在 Hero 和核心业务之间插入)

- [ ] **Step 1: 在 Hero section 之后、核心业务 section 之前插入新 section**

```html
<!-- 场景化解决方案 -->
<section class="section reveal">
  <div class="container">
    <div class="section-title">
      <h2>场景化解决方案</h2>
      <p>针对不同客户需求，提供定制化仿真与教学服务</p>
    </div>
    <div class="scene-cards">
      <div class="scene-card s1">
        <div class="scene-icon">&#127891;</div>
        <h3>高校教学</h3>
        <p>仿真模型库 + 在线实验平台 + 课程资源包，覆盖新能源、氢能、储能等专业方向，支撑全套数字化教学</p>
      </div>
      <div class="scene-card s2">
        <div class="scene-icon">&#128300;</div>
        <h3>科研院所</h3>
        <p>定制化建模服务 + 多能耦合仿真测试，提供从模型搭建到数据验证的全流程技术支撑</p>
      </div>
      <div class="scene-card s3">
        <div class="scene-icon">&#127970;</div>
        <h3>能源企业</h3>
        <p>运行效能评估 + 智能控制策略开发 + 节能方案设计，助力企业实现高效运维与节能减排目标</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: 提交**

```bash
cd D:/claude/company-website && git add index.html && git commit -m "feat: 首页新增场景化解决方案模块"
```

---

### Task 5: 首页新增数据亮点 + 数字增长动画

**Files:**
- Modify: `index.html` (插入数据亮点 section)
- Modify: `js/main.js` (追加数字增长动画)

- [ ] **Step 1: 在场景方案之后、核心业务之前插入数据亮点 section**

```html
<!-- 数据亮点 -->
<section class="stats-section reveal">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-number" data-target="7">0</div>
        <div class="stat-label">覆盖技术领域</div>
      </div>
      <div class="stat-item">
        <div class="stat-number" data-target="10">0</div>
        <div class="stat-label">年研发经验</div>
      </div>
      <div class="stat-item">
        <div class="stat-number" data-target="100">0</div>
        <div class="stat-label">仿真模型积累</div>
      </div>
      <div class="stat-item">
        <div class="stat-number" data-target="3">0</div>
        <div class="stat-label">核心业务板块</div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: 在 main.js 末尾追加数字增长动画逻辑**

```js
  // 数字增长动画
  var statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (statNumbers.length > 0) {
    var statsAnimated = false;
    var statsSection = document.querySelector('.stats-section');
    var statsObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !statsAnimated) {
          statsAnimated = true;
          statNumbers.forEach(function(el) {
            var target = parseInt(el.getAttribute('data-target'), 10);
            var duration = 1500;
            var start = 0;
            var startTime = null;
            function step(timestamp) {
              if (!startTime) startTime = timestamp;
              var progress = Math.min((timestamp - startTime) / duration, 1);
              var eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.floor(eased * target);
              if (progress < 1) requestAnimationFrame(step);
              else el.textContent = target + (target === 3 ? '' : '+');
            }
            requestAnimationFrame(step);
          });
        }
      });
    }, { threshold: 0.4 });
    if (statsSection) statsObserver.observe(statsSection);
  }
```

- [ ] **Step 3: 提交**

```bash
cd D:/claude/company-website && git add index.html js/main.js && git commit -m "feat: 数据亮点模块+数字增长动画"
```

---

### Task 6: 首页核心业务卡片 + 滚动揭示动画

**Files:**
- Modify: `index.html` (核心业务 section 添加 reveal 类和增强结构)
- Modify: `js/main.js` (追加 IntersectionObserver 驱动滚动揭示)

- [ ] **Step 1: 为核心业务 section 添加 reveal class**

将 `index.html` 中核心业务 `<section class="section">` 改为 `<section class="section reveal">`。

- [ ] **Step 2: 在 main.js 末尾追加滚动揭示逻辑**

```js
  // 通用滚动揭示动画
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    var revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function(el) { revealObserver.observe(el); });
  }
```

- [ ] **Step 3: 提交**

```bash
cd D:/claude/company-website && git add index.html js/main.js && git commit -m "feat: 滚动揭示动画+核心业务卡片增强"
```

---

### Task 7: 统一页脚 — 所有页面

**Files:**
- Modify: `index.html`, `news.html`, `products.html`, `about.html`, `contact.html` (替换 footer)

- [ ] **Step 1: 替换所有页面的 footer**

将每个页面中的：
```html
<footer class="footer">
  <div class="container">
    <p>&copy; 2026 西安星旭新能源科技有限公司</p>
  </div>
</footer>
```

替换为：

```html
<footer class="footer-new">
  <div class="container">
    <div class="footer-grid">
      <div>
        <h4>西安星旭新能源科技有限公司</h4>
        <p>专注新能源仿真技术与数字化教学解决方案，为高校、科研院所和能源企业提供高水平仿真模型库、教学培训系统和技术咨询服务。</p>
      </div>
      <div>
        <h4>快速链接</h4>
        <p><a href="products.html">产品服务</a></p>
        <p><a href="news.html">科技动态</a></p>
        <p><a href="about.html">关于我们</a></p>
        <p><a href="contact.html">联系我们</a></p>
      </div>
      <div>
        <h4>联系方式</h4>
        <p>西安市未央区北辰路<br>绿地创海大厦2208-V378室</p>
        <p style="margin-top:8px;">xingxutek.com</p>
      </div>
      <div>
        <h4>备案信息</h4>
        <p>ICP备案号（办理中）</p>
        <p>公安备案号（办理中）</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 西安星旭新能源科技有限公司 保留所有权利</p>
    </div>
  </div>
</footer>
```

- [ ] **Step 2: 提交**

```bash
cd D:/claude/company-website && git add index.html news.html products.html about.html contact.html && git commit -m "feat: 全站页脚升级为四栏深色布局"
```

---

### Task 8: 子页面视觉统一

**Files:**
- Modify: `news.html`, `products.html`, `about.html`, `contact.html`
- Modify: `css/style.css`

- [ ] **Step 1: 统一 hero-sub 样式**

确保 `css/style.css` 中 `.hero-sub` 样式完整：

```css
.hero-sub {
  background: linear-gradient(135deg, var(--color-primary) 0%, #0d1b2a 100%);
  color: var(--color-white);
  text-align: center;
  padding: 72px 0;
  position: relative;
  overflow: hidden;
}
.hero-sub::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(255,143,0,0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(40,53,147,0.3) 0%, transparent 50%);
  pointer-events: none;
}
.hero-sub h1 { color: var(--color-white); font-size: 2.2rem; position: relative; }
.hero-sub p { color: rgba(255,255,255,0.75); font-size: 1.05rem; max-width: 600px; margin: 8px auto 0; position: relative; }
```

- [ ] **Step 2: 为子页面核心内容添加 reveal class**

在每个子页面的主内容 section 上添加 `reveal` class：
- `news.html`: `<section class="section news-section reveal">`
- `products.html`: `<section class="section reveal">`
- `about.html`: `<section class="section reveal">`
- `contact.html`: `<section class="section reveal">`

- [ ] **Step 3: 优化科技动态卡片 hover 效果**

在 CSS 中替换 `.news-col:hover` 规则，增加过渡：

```css
.news-col {
  transition: transform var(--transition-smooth), box-shadow var(--transition-smooth);
}
.news-col:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
}
```

- [ ] **Step 4: 提交**

```bash
cd D:/claude/company-website && git add css/style.css news.html products.html about.html contact.html && git commit -m "feat: 子页面视觉统一 — hero-sub增强+滚动揭示"
```

---

### Task 9: 响应式调整与最终审查

**Files:**
- Modify: `css/style.css` (补充响应式)

- [ ] **Step 1: 确认 CSS 中已有完整响应式规则**

检查 `@media (max-width: 768px)` 块包含：

```css
@media (max-width: 768px) {
  .cards { grid-template-columns: 1fr; }
  .scene-cards { grid-template-columns: 1fr; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .news-grid { grid-template-columns: 1fr; }
  .grid-2 { grid-template-columns: 1fr; }
  .contact-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .hero { height: 360px; }
  .hero-glass { padding: 28px 20px; }
  .hero-glass h1 { font-size: 1.8rem; }
  .hero-glass .glass-card { padding: 28px 20px !important; }
  .nav-inner { padding: 0 20px; }
  .stat-number { font-size: 1.6rem; }
}
```

- [ ] **Step 2: 提交**

```bash
cd D:/claude/company-website && git add css/style.css && git commit -m "fix: 响应式布局完善"
```

---

### Task 10: 验证与 Git Push

- [ ] **Step 1: 检查所有文件完整性**

```bash
cd D:/claude/company-website && git status && git log --oneline -12
```

- [ ] **Step 2: 推送到远程**

```bash
cd D:/claude/company-website && git push origin master
```
