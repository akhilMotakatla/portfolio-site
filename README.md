<div align="center">

<img src="https://raw.githubusercontent.com/akhilMotakatla/portfolio-site/main/public/logos/profile.png" width="120" style="border-radius:50%" alt="Akhil Reddy Motakatla" />

# Akhil Reddy Motakatla

### Senior Full Stack Engineer

**`.NET Core` · `React` · `Azure` · `AWS` · `Microservices` · `C#` · `SQL Server` · `Docker`**

<br/>

[![🌐 Live Portfolio](https://img.shields.io/badge/🌐%20Live%20Portfolio-Visit%20Site-6366f1?style=for-the-badge)](https://akhilmotakatla.github.io/portfolio-site)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-181717?style=for-the-badge&logo=github&logoColor=white)](https://akhilmotakatla.github.io/portfolio-site)

</div>

---

## 👋 About This Repository

This is the **source code** for my personal portfolio website — a fully custom-built, premium dark-themed React application. It is not a template; every component, animation, and layout decision was hand-crafted to reflect my engineering background and design sensibility.

The portfolio showcases 6+ years of professional experience across **enterprise audit platforms, healthcare systems, cloud e-commerce, and data engineering** at companies including Deloitte, Creative Mind Tech, Mable Technologies, and Amigo Smart Tech.

> **Live site →** [akhilmotakatla.github.io/portfolio-site](https://akhilmotakatla.github.io/portfolio-site)

---

## ✨ Highlights

| | |
|---|---|
| 🎬 **Cinematic intro** | Fullscreen 3D video splash screen plays with full audio on user click |
| 🌌 **Particle canvas** | Interactive mouse-connected dot field rendered on HTML5 `<canvas>` |
| 🌓 **Dark / Light mode** | Instant toggle — CSS custom properties swap the entire theme |
| 📱 **Fully responsive** | Pixel-perfect on desktop (1440 px), tablet (768 px), and mobile (375 px) |
| ⚡ **Scroll animations** | Every section reveals with Framer Motion triggered by `IntersectionObserver` |
| 🖱 **Custom cursor** | Trailing ring cursor with lerp easing (desktop only, hidden on touch devices) |
| 📊 **Animated counters** | Stats count up from 0 when scrolled into view using `react-countup` |
| 🃏 **3D tilt cards** | Project cards tilt in perspective based on mouse position |
| 🔍 **Filter UI** | Skills and Projects sections have live category filter buttons |

---

## 🛠 Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | React 19, Create React App |
| **Animations** | Framer Motion, CSS keyframes, HTML5 Canvas API |
| **UI Libraries** | react-type-animation, react-countup, react-intersection-observer, react-icons |
| **Fonts** | Space Grotesk · Inter · JetBrains Mono via Google Fonts |
| **Styling** | Plain CSS with CSS Custom Properties (no CSS-in-JS), co-located per component |
| **Deployment** | GitHub Pages via `gh-pages` npm package |
| **Version Control** | Git + GitHub |

---

## 🗂 Project Structure

```
portfolio-site/
│
├── public/
│   ├── intro.mp4                   # 3D cinematic intro video
│   ├── index.html                  # SEO meta tags, Google Fonts preconnect
│   └── logos/
│       ├── profile.png             # Profile photo
│       ├── Akhil_Resume.pdf        # Downloadable résumé
│       └── [tech logos ...]        # AWS, Azure, Docker, React, etc.
│
└── src/
    ├── index.css                   # Global CSS variables, glassmorphism utils, resets
    ├── App.js                      # Root — theme state, component order
    │
    └── components/
        ├── VideoIntro.js / .css    # Fullscreen splash → video intro with sound
        ├── CustomCursor.js / .css  # Lerp-eased trailing ring cursor
        ├── Navbar.js / .css        # Sticky glassmorphism nav, scroll progress bar, dark/light toggle
        ├── Hero.js / .css          # Canvas particles, TypeAnimation, rotating profile rings
        ├── AboutMe.js / .css       # CountUp stats, bio, 4-pillar expertise cards
        ├── Skills.js / .css        # 22 skills, 5 category filters, animated progress bars
        ├── Experience.js / .css    # Expandable vertical timeline — 5 professional roles
        ├── Projects.js / .css      # 6 projects, 3D tilt, tag filter (.NET/React/Cloud/Data)
        ├── Education.js / .css     # Degree cards (UNT MS · CMR BTech) + certifications
        ├── Contact.js / .css       # Floating-label form + social links
        ├── ScrollToTop.js / .css   # Animated back-to-top button
        └── Footer.js / .css        # Minimal branded footer
```

---

## 💼 What the Portfolio Covers

### 🏢 Work Experience (5 roles, expandable timeline)
| Company | Role | Period |
|---|---|---|
| Creative Mind Tech | Software Engineer | Oct 2025 – Present |
| Mable Technologies | Software Engineer | Aug – Oct 2025 |
| University of North Texas | Graduate Teaching Assistant | Aug 2023 – May 2025 |
| Deloitte | Software Engineer | Aug 2022 – Aug 2023 |
| Amigo Smart Tech | Software Engineer | Jan 2019 – Mar 2022 |

### 🚀 Featured Projects (6 cards with metrics)
- **Enterprise Audit Platform** — 10K+ concurrent users, 99.95% uptime (Deloitte)
- **Cloud E-Commerce Platform** — $2M+/month transactions, 50K+ active users
- **Healthcare Web Application** — 5K+ daily users, 57% page load improvement
- **Document Management System** — 500K+ documents, zero security incidents
- **Motel Booking System** — Real-time availability, full-stack React + .NET
- **Loan Management Platform** — Azure Data Factory migration, Power BI dashboards

### 🎓 Education
- **M.S. Computer & Information Science** — University of North Texas (2023–2025)
- **B.Tech Electronics & Communication** — CMR College of Engineering (2015–2019)

---

## 🚀 Running Locally

### Prerequisites
- **Node.js** ≥ 18
- **npm** ≥ 9

```bash
# 1. Clone
git clone https://github.com/akhilMotakatla/portfolio-site.git
cd portfolio-site

# 2. Install
npm install

# 3. Run dev server
npm start
# Opens http://localhost:3000
```

### Build & Deploy

```bash
# Production build only
npm run build

# Build + deploy to GitHub Pages (gh-pages branch)
npm run deploy
```

---

## 📬 Get In Touch

<div align="center">

[![Email](https://img.shields.io/badge/Email-akhilreddy7894112%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:akhilreddy7894112@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-akhil--reddy--motakatla-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/akhil-reddy-motakatla)
[![GitHub](https://img.shields.io/badge/GitHub-akhilMotakatla-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/akhilMotakatla)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-%2B1_(940)_629--6557-25D366?style=flat-square&logo=whatsapp&logoColor=white)](https://wa.me/19406296557)
[![Calendly](https://img.shields.io/badge/Schedule_a_Call-Calendly-06B6D4?style=flat-square&logo=googlecalendar&logoColor=white)](https://calendly.com/akhilreddymotakatla)

</div>

---

<div align="center">

**Open to Senior Software Engineer, Full Stack Developer, and Cloud Engineer roles.**

Built with ♥ using React · Framer Motion · GitHub Pages

© 2025 Akhil Reddy Motakatla

</div>
