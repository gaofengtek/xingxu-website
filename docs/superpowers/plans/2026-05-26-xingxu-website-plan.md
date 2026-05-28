# 星旭新能源企业官网 · 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建星旭新能源 4 页静态品牌展示官网，含 Logo、响应式布局和在线留言表单。

**Architecture:** 纯静态 HTML/CSS/JS，单文件 CSS 供所有页面共享，无框架依赖。4 个独立 HTML 页面 + 1 个共享样式表 + 1 个 Logo SVG。CSS 变量管理配色，Flexbox/Grid 布局，@media 断点适配移动端。

**Tech Stack:** HTML5, CSS3 (变量 + Flexbox + Grid + 媒体查询), 原生 JavaScript (表单验证), SVG (Logo)

---

## 文件结构

```
D:/claude/company-website/
├── css/
│   └── style.css          ← 全局样式（所有页面共享）
├── js/
│   └── main.js            ← 导航菜单切换 + 表单验证
├── images/
│   └── logo.svg           ← F2 旭日 Logo SVG
├── index.html             ← 首页
├── products.html          ← 产品服务
├── about.html             ← 关于我们
├── contact.html           ← 联系我们
└── favicon.svg            ← 浏览器标签图标（迷你Logo）
```

---

### Task 1: 项目脚手架 + 全局样式

**Files:**
- Create: `css/style.css`

- [ ] **Step 1: 创建 CSS 变量和全局重置**

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
  --nav-height: 64px;
}

/* === 全局重置 === */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-zh);
  color: var(--color-text);
  background: var(--color-bg);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a { color: var(--color-primary); text-decoration: none; }
a:hover { color: var(--color-accent); }

img { max-width: 100%; height: auto; display: block; }

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;
}
```

- [ ] **Step 2: 添加排版样式**

```css
/* === 排版 === */
h1, h2, h3, h4 { color: var(--color-primary); line-height: 1.3; }
h1 { font-size: 2rem; }
h2 { font-size: 1.6rem; margin-bottom: 16px; }
h3 { font-size: 1.2rem; margin-bottom: 8px; }
p { margin-bottom: 12px; color: var(--color-text-light); }

.section {
  padding: 60px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
}
.section-title h2 { margin-bottom: 8px; }
.section-title p { font-size: 1.05rem; }
```

- [ ] **Step 3: 添加导航栏样式**

```css
/* === 导航栏 === */
.navbar {
  background: var(--color-white);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--nav-height);
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-logo img { height: 40px; }

.nav-logo span {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--color-primary);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 32px;
}

.nav-links a {
  color: var(--color-text);
  font-size: 0.95rem;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-accent);
}

/* 移动端汉堡菜单 */
.nav-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: absolute;
    top: var(--nav-height);
    left: 0;
    right: 0;
    background: var(--color-white);
    flex-direction: column;
    gap: 0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  .nav-links.open { display: flex; }
  .nav-links a {
    padding: 14px 20px;
    border-bottom: 1px solid var(--color-border);
  }
  .nav-toggle { display: block; }
}
```

- [ ] **Step 4: 添加页脚样式**

```css
/* === 页脚 === */
.footer {
  background: var(--color-primary);
  color: rgba(255,255,255,0.8);
  padding: 30px 0;
  text-align: center;
  font-size: 0.85rem;
}

.footer a {
  color: rgba(255,255,255,0.9);
  text-decoration: underline;
}

.footer .beian { margin-top: 8px; }
```

- [ ] **Step 5: 添加按钮和卡片样式**

```css
/* === 按钮 === */
.btn {
  display: inline-block;
  padding: 12px 28px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: var(--color-accent);
  color: var(--color-white);
}
.btn-primary:hover { background: #E67E00; }

.btn-outline {
  background: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-white);
}
.btn-outline:hover { background: rgba(255,255,255,0.1); }

/* === 卡片 === */
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  background: var(--color-white);
  border-radius: 8px;
  padding: 32px 24px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.card h3 { margin-bottom: 12px; }

@media (max-width: 768px) {
  .cards { grid-template-columns: 1fr; }
}
```

- [ ] **Step 6: 添加表单样式**

```css
/* === 表单 === */
.form-group { margin-bottom: 20px; }

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
  color: var(--color-text);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 0.95rem;
  font-family: var(--font-zh);
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.form-group textarea { resize: vertical; min-height: 120px; }

.form-error { color: #D32F2F; font-size: 0.85rem; margin-top: 4px; display: none; }
```

- [ ] **Step 7: 添加 Hero 和工具类**

```css
/* === Hero 区 === */
.hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: var(--color-white);
  text-align: center;
  padding: 100px 0 80px;
}

.hero h1 {
  color: var(--color-white);
  font-size: 2.4rem;
  margin-bottom: 16px;
}

.hero p {
  color: rgba(255,255,255,0.85);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 32px;
}

/* === 工具类 === */
.text-center { text-align: center; }
.mt-20 { margin-top: 20px; }
.mt-40 { margin-top: 40px; }
```

- [ ] **Step 8: 提交**

```bash
cd D:/claude/company-website
git add css/style.css
git commit -m "feat: 添加全局样式表（配色/排版/导航/卡片/表单/响应式）"
```

---

### Task 2: Logo SVG + Favicon

**Files:**
- Create: `images/logo.svg`
- Create: `favicon.svg`

- [ ] **Step 1: 创建 Logo SVG（F2 旭日方案）**

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="72" viewBox="0 0 300 72">
  <defs>
    <linearGradient id="sunGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FF8F00"/>
      <stop offset="100%" stop-color="#E65100"/>
    </linearGradient>
  </defs>
  <!-- 地平线 -->
  <rect x="30" y="52" width="50" height="2" rx="1" fill="#1A237E" opacity="0.5"/>
  <!-- 太阳 -->
  <circle cx="55" cy="44" r="14" fill="url(#sunGrad)" opacity="0.92"/>
  <!-- 三道光芒 -->
  <line x1="55" y1="28" x2="55" y2="23" stroke="#FF8F00" stroke-width="2.2" stroke-linecap="round"/>
  <line x1="66" y1="32" x2="70" y2="28" stroke="#FF8F00" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="44" y1="32" x2="40" y2="28" stroke="#FF8F00" stroke-width="1.8" stroke-linecap="round"/>
  <!-- 公司名 -->
  <text x="82" y="36" font-family="Microsoft YaHei, PingFang SC, sans-serif" font-size="22" font-weight="900" fill="#1A237E">星旭新能源</text>
  <text x="85" y="54" font-family="Segoe UI, system-ui, sans-serif" font-size="10" fill="#666666" letter-spacing="2">XINGXU NEW ENERGY</text>
</svg>
```

- [ ] **Step 2: 创建 Favicon（迷你太阳图标）**

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="10" fill="#FF8F00"/>
  <line x1="16" y1="4" x2="16" y2="1" stroke="#FF8F00" stroke-width="2" stroke-linecap="round"/>
  <line x1="23" y1="8" x2="24.5" y2="5.5" stroke="#FF8F00" stroke-width="2" stroke-linecap="round"/>
  <line x1="9" y1="8" x2="7.5" y2="5.5" stroke="#FF8F00" stroke-width="2" stroke-linecap="round"/>
</svg>
```

- [ ] **Step 3: 提交**

```bash
cd D:/claude/company-website
git add images/logo.svg favicon.svg
git commit -m "feat: 添加 F2 旭日 Logo SVG 和 Favicon"
```

---

### Task 3: 首页 index.html

**Files:**
- Create: `index.html`

- [ ] **Step 1: 创建首页 HTML 结构**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="西安星旭新能源科技有限公司 — 新能源仿真模型库、教学培训系统、技术咨询服务">
  <title>星旭新能源 — 新能源仿真技术引领者</title>
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

<!-- 导航栏 -->
<nav class="navbar">
  <div class="container">
    <a href="index.html" class="nav-logo">
      <img src="images/logo.svg" alt="星旭新能源">
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="菜单">&#9776;</button>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html" class="active">首页</a></li>
      <li><a href="products.html">产品服务</a></li>
      <li><a href="about.html">关于我们</a></li>
      <li><a href="contact.html">联系我们</a></li>
    </ul>
  </div>
</nav>

<!-- Hero -->
<section class="hero">
  <div class="container">
    <h1>新能源仿真技术引领者</h1>
    <p>专注新能源 · 电力系统 · 氢能仿真研究与教学系统研发，为高校和能源企业提供高水平数字化解决方案</p>
    <a href="contact.html" class="btn btn-primary">联系我们</a>
  </div>
</section>

<!-- 核心业务 -->
<section class="section">
  <div class="container">
    <div class="section-title">
      <h2>核心业务</h2>
      <p>三大业务板块，覆盖新能源仿真全链条</p>
    </div>
    <div class="cards">
      <div class="card">
        <div class="card-icon">&#128300;</div>
        <h3>仿真模型库</h3>
        <p>覆盖新能源、电力系统、电力电子、综合能源、绿氢能源、能源化工、火电机组七大领域，提供高精度 MATLAB/Simulink 仿真模型</p>
      </div>
      <div class="card">
        <div class="card-icon">&#127891;</div>
        <h3>教学培训系统</h3>
        <p>面向高校新能源、氢能等专业方向，从理论教学到仿真实验的全套数字化教学平台，含课程资源包与实验指导</p>
      </div>
      <div class="card">
        <div class="card-icon">&#9881;</div>
        <h3>技术咨询服务</h3>
        <p>多能耦合项目仿真测试、运行效能评估、智能控制策略开发、节能方案设计与验证</p>
      </div>
    </div>
  </div>
</section>

<!-- 领域覆盖 -->
<section class="section" style="background: var(--color-white);">
  <div class="container">
    <div class="section-title">
      <h2>覆盖领域</h2>
      <p>七大技术方向，全面支撑能源转型与新型电力系统建设</p>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;">
      <span style="background: var(--color-bg); padding: 8px 20px; border-radius: 20px; font-size: 0.95rem;">新能源发电</span>
      <span style="background: var(--color-bg); padding: 8px 20px; border-radius: 20px; font-size: 0.95rem;">电力系统</span>
      <span style="background: var(--color-bg); padding: 8px 20px; border-radius: 20px; font-size: 0.95rem;">电力电子</span>
      <span style="background: var(--color-bg); padding: 8px 20px; border-radius: 20px; font-size: 0.95rem;">综合能源</span>
      <span style="background: var(--color-bg); padding: 8px 20px; border-radius: 20px; font-size: 0.95rem;">绿氢能源</span>
      <span style="background: var(--color-bg); padding: 8px 20px; border-radius: 20px; font-size: 0.95rem;">能源化工</span>
      <span style="background: var(--color-bg); padding: 8px 20px; border-radius: 20px; font-size: 0.95rem;">火电机组</span>
    </div>
  </div>
</section>

<!-- 页脚 -->
<footer class="footer">
  <div class="container">
    <p>&copy; 2026 西安星旭新能源科技有限公司</p>
    <p class="beian">
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">陕ICP备XXXXXXXX号</a>
      &nbsp;|&nbsp;
      陕公网安备 XXXXXXXXXXXX号
    </p>
  </div>
</footer>

<script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: 在浏览器打开验证**

```
用浏览器打开 D:/claude/company-website/index.html，确认：
- 导航栏 Logo + 4 个链接正常显示
- Hero 区文字和按钮正常
- 3 张业务卡片排列正确
- 7 个领域标签显示
- 页脚版权和备案号显示
```

- [ ] **Step 3: 提交**

```bash
cd D:/claude/company-website
git add index.html
git commit -m "feat: 添加首页（Hero + 三大业务卡片 + 七大领域标签）"
```

---

### Task 4: 产品服务页 products.html

**Files:**
- Create: `products.html`

- [ ] **Step 1: 创建产品服务页**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="星旭新能源产品服务 — 仿真模型库、教学培训系统、技术咨询服务">
  <title>产品服务 — 星旭新能源</title>
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

<nav class="navbar">
  <div class="container">
    <a href="index.html" class="nav-logo">
      <img src="images/logo.svg" alt="星旭新能源">
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="菜单">&#9776;</button>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">首页</a></li>
      <li><a href="products.html" class="active">产品服务</a></li>
      <li><a href="about.html">关于我们</a></li>
      <li><a href="contact.html">联系我们</a></li>
    </ul>
  </div>
</nav>

<!-- 页面头部 -->
<section class="hero" style="padding: 60px 0;">
  <div class="container">
    <h1>产品服务</h1>
    <p>覆盖新能源全技术链条的仿真与教学解决方案</p>
  </div>
</section>

<!-- 仿真模型库 -->
<section class="section">
  <div class="container" style="max-width: 900px;">
    <div style="background: var(--color-white); border-radius: 8px; padding: 40px; margin-bottom: 32px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
      <h2 style="color: var(--color-accent); font-size: 1.4rem; margin-bottom: 16px;">&#128300; 仿真模型库</h2>
      <p>提供高精度 MATLAB/Simulink 仿真模型，覆盖以下七大领域：</p>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 20px 0;">
        <div style="padding: 10px 14px; background: var(--color-bg); border-radius: 4px;">&#8226; 新能源发电（光伏 / 风电）</div>
        <div style="padding: 10px 14px; background: var(--color-bg); border-radius: 4px;">&#8226; 电力系统分析与仿真</div>
        <div style="padding: 10px 14px; background: var(--color-bg); border-radius: 4px;">&#8226; 电力电子变换器建模</div>
        <div style="padding: 10px 14px; background: var(--color-bg); border-radius: 4px;">&#8226; 综合能源系统</div>
        <div style="padding: 10px 14px; background: var(--color-bg); border-radius: 4px;">&#8226; 绿氢制备与应用仿真</div>
        <div style="padding: 10px 14px; background: var(--color-bg); border-radius: 4px;">&#8226; 能源化工过程仿真</div>
        <div style="padding: 10px 14px; background: var(--color-bg); border-radius: 4px;">&#8226; 火电机组仿真</div>
      </div>
      <p>所有模型支持二次开发和系统集成，附带详细使用文档和示例工程。</p>
    </div>

    <!-- 教学培训系统 -->
    <div style="background: var(--color-white); border-radius: 8px; padding: 40px; margin-bottom: 32px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
      <h2 style="color: var(--color-accent); font-size: 1.4rem; margin-bottom: 16px;">&#127891; 教学培训系统</h2>
      <p>面向高校新能源、氢能、储能等专业方向，提供从理论教学到仿真实验的全套数字化教学平台。</p>
      <div style="margin: 20px 0;">
        <p><strong>核心模块：</strong></p>
        <p>&#8226; 课程资源包：PPT课件、教学大纲、考核题库</p>
        <p>&#8226; 仿真实验平台：基于 MATLAB/Simulink 的在线仿真环境</p>
        <p>&#8226; 实验指导书：配套实验操作手册和数据分析指南</p>
        <p>&#8226; 教师培训：系统使用培训和定制化教学方案设计</p>
      </div>
    </div>

    <!-- 技术咨询 -->
    <div style="background: var(--color-white); border-radius: 8px; padding: 40px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
      <h2 style="color: var(--color-accent); font-size: 1.4rem; margin-bottom: 16px;">&#9881; 技术咨询服务</h2>
      <p>依托10余年仿真研发经验，为能源企业提供专业的技术咨询和项目支撑。</p>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 20px 0;">
        <div style="padding: 10px 14px; background: var(--color-bg); border-radius: 4px;">&#8226; 多能耦合项目仿真测试</div>
        <div style="padding: 10px 14px; background: var(--color-bg); border-radius: 4px;">&#8226; 运行效能评估</div>
        <div style="padding: 10px 14px; background: var(--color-bg); border-radius: 4px;">&#8226; 智能控制策略开发</div>
        <div style="padding: 10px 14px; background: var(--color-bg); border-radius: 4px;">&#8226; 节能方案设计与验证</div>
      </div>
    </div>
  </div>
</section>

<footer class="footer">
  <div class="container">
    <p>&copy; 2026 西安星旭新能源科技有限公司</p>
    <p class="beian">
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">陕ICP备XXXXXXXX号</a>
      &nbsp;|&nbsp;
      陕公网安备 XXXXXXXXXXXX号
    </p>
  </div>
</footer>

<script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: 浏览器验证**

```
浏览器打开 products.html，确认三个服务板块排版正常，领域列表和功能要点清晰
```

- [ ] **Step 3: 提交**

```bash
cd D:/claude/company-website
git add products.html
git commit -m "feat: 添加产品服务页（仿真模型库 + 教学培训 + 技术咨询）"
```

---

### Task 5: 关于我们页 about.html

**Files:**
- Create: `about.html`

- [ ] **Step 1: 创建关于我们页**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="了解星旭新能源 — 公司简介、团队背景与资质证照">
  <title>关于我们 — 星旭新能源</title>
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

<nav class="navbar">
  <div class="container">
    <a href="index.html" class="nav-logo">
      <img src="images/logo.svg" alt="星旭新能源">
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="菜单">&#9776;</button>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">首页</a></li>
      <li><a href="products.html">产品服务</a></li>
      <li><a href="about.html" class="active">关于我们</a></li>
      <li><a href="contact.html">联系我们</a></li>
    </ul>
  </div>
</nav>

<section class="hero" style="padding: 60px 0;">
  <div class="container">
    <h1>关于我们</h1>
    <p>专业 · 创新 · 务实</p>
  </div>
</section>

<section class="section">
  <div class="container" style="max-width: 800px;">

    <!-- 公司简介 -->
    <div style="background: var(--color-white); border-radius: 8px; padding: 40px; margin-bottom: 32px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
      <h2 style="margin-bottom: 20px;">公司简介</h2>
      <p>西安星旭新能源科技有限公司成立于2026年，位于陕西省西安市未央区，是一家专注于新能源仿真技术与数字化教学解决方案的科技企业。</p>
      <p>公司致力于为高校、科研院所和能源企业提供高水平的仿真模型库、教学培训系统和技术咨询服务。凭借深厚的技术积累和行业经验，我们助力客户在新能源发电、电力系统、综合能源、氢能等领域实现高效研发与人才培养。</p>
      <p>经营范围涵盖：软件销售与开发、人工智能基础及应用软件开发、新兴能源技术研发、电力行业高效节能技术研发、储能技术服务、在线能源监测、合同能源管理、智能控制系统集成、信息系统集成服务等。</p>
    </div>

    <!-- 团队 -->
    <div style="background: var(--color-white); border-radius: 8px; padding: 40px; margin-bottom: 32px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
      <h2 style="margin-bottom: 20px;">团队</h2>
      <p>核心团队成员从事新能源、电力系统、电力电子、综合能源、绿氢能源仿真研究工作<strong>10余年</strong>，深度参与多项多能耦合项目仿真测试研究开发实施，具备丰富的新能源教学系统研发经验。</p>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px;">
        <div style="padding: 12px 16px; background: var(--color-bg); border-radius: 4px; border-left: 3px solid var(--color-accent);">新能源发电系统建模</div>
        <div style="padding: 12px 16px; background: var(--color-bg); border-radius: 4px; border-left: 3px solid var(--color-accent);">电力系统分析与仿真</div>
        <div style="padding: 12px 16px; background: var(--color-bg); border-radius: 4px; border-left: 3px solid var(--color-accent);">电力电子变换器建模</div>
        <div style="padding: 12px 16px; background: var(--color-bg); border-radius: 4px; border-left: 3px solid var(--color-accent);">综合能源系统仿真</div>
        <div style="padding: 12px 16px; background: var(--color-bg); border-radius: 4px; border-left: 3px solid var(--color-accent);">绿氢制备与应用仿真</div>
        <div style="padding: 12px 16px; background: var(--color-bg); border-radius: 4px; border-left: 3px solid var(--color-accent);">教学培训系统研发</div>
      </div>
    </div>

    <!-- 资质证照（占位） -->
    <div style="background: var(--color-white); border-radius: 8px; padding: 40px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
      <h2 style="margin-bottom: 20px;">资质证照</h2>
      <div style="padding: 60px 40px; text-align: center; border: 2px dashed var(--color-border); border-radius: 8px; color: var(--color-text-light);">
        <p>营业执照 · 统一社会信用代码</p>
        <p style="font-size: 1.1rem; font-weight: bold; color: var(--color-text);">91610112MAKCD78PXF</p>
        <p style="margin-top: 8px; font-size: 0.85rem;">登记机关：西安市未央区行政审批服务局</p>
      </div>
    </div>

  </div>
</section>

<footer class="footer">
  <div class="container">
    <p>&copy; 2026 西安星旭新能源科技有限公司</p>
    <p class="beian">
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">陕ICP备XXXXXXXX号</a>
      &nbsp;|&nbsp;
      陕公网安备 XXXXXXXXXXXX号
    </p>
  </div>
</footer>

<script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: 浏览器验证**

```
浏览器打开 about.html，确认公司简介、团队能力标签、资质证照区块正常
```

- [ ] **Step 3: 提交**

```bash
cd D:/claude/company-website
git add about.html
git commit -m "feat: 添加关于我们页（公司简介 + 团队 + 资质）"
```

---

### Task 6: 联系我们页 contact.html

**Files:**
- Create: `contact.html`

- [ ] **Step 1: 创建联系我们页**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="联系星旭新能源 — 商务合作与技术咨询">
  <title>联系我们 — 星旭新能源</title>
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

<nav class="navbar">
  <div class="container">
    <a href="index.html" class="nav-logo">
      <img src="images/logo.svg" alt="星旭新能源">
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="菜单">&#9776;</button>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">首页</a></li>
      <li><a href="products.html">产品服务</a></li>
      <li><a href="about.html">关于我们</a></li>
      <li><a href="contact.html" class="active">联系我们</a></li>
    </ul>
  </div>
</nav>

<section class="hero" style="padding: 60px 0;">
  <div class="container">
    <h1>联系我们</h1>
    <p>期待与您的合作</p>
  </div>
</section>

<section class="section">
  <div class="container">

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; max-width: 900px; margin: 0 auto;">

      <!-- 左侧：公司信息 -->
      <div style="background: var(--color-white); border-radius: 8px; padding: 32px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
        <h3 style="margin-bottom: 20px;">公司信息</h3>
        <div style="margin-bottom: 16px;">
          <strong>公司名称</strong>
          <p style="margin-top: 4px;">西安星旭新能源科技有限公司</p>
        </div>
        <div style="margin-bottom: 16px;">
          <strong>地址</strong>
          <p style="margin-top: 4px;">陕西省西安市未央区北辰路<br>绿地创海大厦2208-V378室</p>
        </div>
        <div style="margin-bottom: 16px;">
          <strong>统一社会信用代码</strong>
          <p style="margin-top: 4px; font-family: var(--font-en);">91610112MAKCD78PXF</p>
        </div>
      </div>

      <!-- 右侧：留言表单 -->
      <div style="background: var(--color-white); border-radius: 8px; padding: 32px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
        <h3 style="margin-bottom: 20px;">在线留言</h3>
        <form id="contactForm" novalidate>
          <div class="form-group">
            <label for="name">姓名 <span style="color: #D32F2F;">*</span></label>
            <input type="text" id="name" name="name" required placeholder="请输入您的姓名">
            <span class="form-error" id="nameError">请输入姓名</span>
          </div>
          <div class="form-group">
            <label for="email">邮箱 <span style="color: #D32F2F;">*</span></label>
            <input type="email" id="email" name="email" required placeholder="请输入您的邮箱">
            <span class="form-error" id="emailError">请输入有效的邮箱地址</span>
          </div>
          <div class="form-group">
            <label for="phone">电话</label>
            <input type="tel" id="phone" name="phone" placeholder="请输入您的电话（选填）">
          </div>
          <div class="form-group">
            <label for="message">留言内容 <span style="color: #D32F2F;">*</span></label>
            <textarea id="message" name="message" required placeholder="请输入您想了解的内容..."></textarea>
            <span class="form-error" id="messageError">请输入留言内容</span>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%;">提交留言</button>
        </form>
        <p id="formSuccess" style="display: none; color: #2E7D32; text-align: center; margin-top: 16px;">&#10004; 留言已提交，我们会尽快与您联系！</p>
      </div>

    </div>
  </div>
</section>

<footer class="footer">
  <div class="container">
    <p>&copy; 2026 西安星旭新能源科技有限公司</p>
    <p class="beian">
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">陕ICP备XXXXXXXX号</a>
      &nbsp;|&nbsp;
      陕公网安备 XXXXXXXXXXXX号
    </p>
  </div>
</footer>

<script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: 浏览器验证**

```
浏览器打开 contact.html，确认公司信息+表单排版（桌面端两栏、移动端一栏），表单字段完整
```

- [ ] **Step 3: 提交**

```bash
cd D:/claude/company-website
git add contact.html
git commit -m "feat: 添加联系我们页（公司信息 + 在线留言表单）"
```

---

### Task 7: JavaScript 交互

**Files:**
- Create: `js/main.js`

- [ ] **Step 1: 创建 JS 文件（导航切换 + 表单验证）**

```javascript
// 移动端导航菜单切换
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // 联系我们表单验证与提交
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var valid = true;
      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var message = document.getElementById('message');

      // 清除之前的错误
      clearErrors();

      // 验证姓名
      if (!name.value.trim()) {
        showError('nameError', '请输入姓名');
        valid = false;
      }

      // 验证邮箱
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
        showError('emailError', '请输入有效的邮箱地址');
        valid = false;
      }

      // 验证留言内容
      if (!message.value.trim()) {
        showError('messageError', '请输入留言内容');
        valid = false;
      }

      if (valid) {
        // 显示成功提示（表单内容留待后端对接）
        form.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
      }
    });
  }

  function showError(id, text) {
    var el = document.getElementById(id);
    if (el) {
      el.textContent = text;
      el.style.display = 'block';
    }
  }

  function clearErrors() {
    var errors = document.querySelectorAll('.form-error');
    for (var i = 0; i < errors.length; i++) {
      errors[i].style.display = 'none';
    }
  }
});
```

- [ ] **Step 2: 浏览器验证表单交互**

```
打开 contact.html，测试：
- 空提交 → 显示错误提示
- 无效邮箱 → 显示邮箱错误
- 填写完整 → 提交成功提示出现
```

- [ ] **Step 3: 浏览器验证移动端菜单**

```
调整浏览器窗口宽度小于 768px：
- 导航链接隐藏，汉堡按钮出现
- 点击按钮 → 菜单展开
- 再次点击 → 菜单收起
```

- [ ] **Step 4: 提交**

```bash
cd D:/claude/company-website
git add js/main.js
git commit -m "feat: 添加 JS 交互（导航菜单切换 + 表单验证提交）"
```

---

### Task 8: 整体联调 + 跨浏览器检查

- [ ] **Step 1: 逐页检查**

```
按以下顺序在浏览器中浏览所有页面，确认：

首页 (index.html)：
  [ ] Logo 正常显示
  [ ] 导航 4 个链接可点击跳转
  [ ] Hero 区标题和 CTA 按钮正常
  [ ] 3 张业务卡片排列正常
  [ ] 7 个领域标签显示
  [ ] 页脚链接可点击

产品服务 (products.html)：
  [ ] 三个业务板块排版正确
  [ ] 领域列表网格正常

关于我们 (about.html)：
  [ ] 公司简介段落正常
  [ ] 团队能力标签 6 项显示
  [ ] 营业执照编号区块显示

联系我们 (contact.html)：
  [ ] 公司信息 + 表单两栏布局
  [ ] 表单验证正常
  [ ] 提交成功提示正常
```

- [ ] **Step 2: 移动端检查**

```
将浏览器宽度调至 375px（iPhone）：
  [ ] 导航变为汉堡菜单
  [ ] 所有页面单栏布局
  [ ] Hero 文字不溢出
  [ ] 卡片纵向堆叠
  [ ] 表单占满宽度
```

- [ ] **Step 3: 修复发现的问题**

```
根据检查结果修复 CSS 或 HTML 问题
```

- [ ] **Step 4: 提交**

```bash
cd D:/claude/company-website
git add -A
git commit -m "fix: 联调修复跨页面一致性和响应式问题"
```

---

### Task 9: 补充备案占位 + 确认上线前清单

- [ ] **Step 1: 确认所有待办项清单**

```bash
上线前清单确认：
  [ ] 域名 xingxutek.com 已注册
  [ ] 联系方式（邮箱、电话）已补充
  [ ] ICP 备案号已获取，更新页脚
  [ ] 公安备案号已获取，更新页脚
  [ ] 服务器部署完成
  [ ] SSL 证书配置完成
```

- [ ] **Step 2: 提交最终版本**

```bash
cd D:/claude/company-website
git add -A
git commit -m "chore: 确认上线前清单，完成初始开发版本"
```
