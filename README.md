# 星旭新能源企业官网

**西安星旭新能源科技有限公司**官方网站，V1.0 初始发布版。

- 网址：https://xingxutek.com
- 仓库：https://github.com/gaofengtek/xingxu-website

---

## 项目简介

纯静态 HTML/CSS/JS 企业展示网站，面向高校、科研院所和能源企业，展示仿真模型库、教学培训系统、技术咨询服务三大业务板块。

---

## 文件结构

```
/
├── index.html                 # 首页
├── news.html                  # 科技动态（三栏卡片汇总）
├── news-company.html          # 公司动态列表
├── news-industry.html         # 行业前沿列表
├── news-standards.html        # 行业规范列表
├── products.html              # 产品服务
├── about.html                 # 关于我们
├── contact.html               # 联系我们
├── hero.mp4                   # 首页背景视频
├── favicon.svg                # 网站图标
├── CNAME                      # 自定义域名 xingxutek.com
├── .gitignore                 # Git 忽略规则
├── .nojekyll                  # 禁用 GitHub Pages Jekyll 处理
├── css/
│   └── style.css              # 全局样式
├── js/
│   └── main.js                # 导航+表单验证+动画
├── images/
│   ├── logo.svg               # 网站 Logo
│   ├── hero-main.jpg          # Hero 静态占位图
│   └── hero-main.webp         # Hero 静态占位图（WebP）
└── docs/
    └── superpowers/
        ├── plans/              # 实施计划
        └── specs/              # 设计文档
```

---

## 页面说明

| 页面 | 说明 |
|------|------|
| 首页 | 视频 Hero + 场景方案 + 数据亮点 + 核心业务 + 覆盖领域 |
| 科技动态 | 三栏卡片：公司动态 / 行业前沿 / 行业规范，每栏2条+查看更多 |
| 产品服务 | 三栏卡片：仿真模型库 / 教学培训系统 / 技术咨询服务 |
| 关于我们 | 公司简介 + 核心团队 + 资质证照 |
| 联系我们 | 公司信息 + 在线留言表单（姓名\*、电话\*、留言\*） |

---

## 技术栈

- HTML5 + CSS3 + Vanilla JS
- 无框架、无后端、无数据库
- 响应式设计（PC + 手机）
- 部署于 GitHub Pages

---

## 设计配色

| 用途 | 色值 |
|------|------|
| 页面底色 | `#f5f8fe` 柔和蓝白 |
| 子页 Hero 渐变 | `#e1ecff → #f5f8fe → #e7f0ff` |
| 链接/强调蓝 | `#2774fd` |
| 靛紫点缀 | `#6859fe` |
| 卡片底色 | `#e8f4ec` 浅碧绿 |
| 页脚底色 | `#f0f2f5` 浅灰 |

---

## 版本

- **v1.0** — 2026-05-29，初始发布版
