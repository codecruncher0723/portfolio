# High-Fidelity Cinematic Developer Portfolio

A responsive, minimalist, dark-mode-first developer portfolio engineered to showcase robust software systems and projects. This project focuses on high-fidelity visual hierarchy, smooth interactive feedback and performant scroll-triggered animations.

## 🚀 Live Demo

Explore the live production build at: [https://codecruncher0723.github.io/portfolio/](https://codecruncher0723.github.io/portfolio/)

---

## 🛠️ Key Architectural Features

### 1. Unified Design Token System (`style.css`)
- Managed entirely through centralized CSS custom properties (`:root`).
- Standardized scaling using layout primitives like CSS Grid and Flexbox for native fluid responsiveness without complex media query chains.
- Seamless, state-persisting Dark/Light theme engine backed by local device cache memory (`localStorage`).

### 2. High-Performance Camera Movement (`script.js`)
- Employs the hardware-accelerated asynchronous **Intersection Observer API** to monitor DOM elements passing through the viewport boundary.
- Triggers non-blocking cinematic fade-in entries and structural transitions precisely when elements enter active visual viewports, reducing scroll performance overhead.

### 3. Accessible Micro-Interactions
- Tactile hover feedback states engineered with transform translations (`translateY`) and optimized graphic glow effects.
- Strict keyboard focus configurations (`:focus-visible`) implemented to guarantee immediate structural outline visibility for non-mouse screen navigation.

---

## 💻 Technical Showcase (Featured Projects)

* **Personal Portfolio Website** A responsive personal website to showcase my skills, projects, and contact information in a clean and modern design.
* **Weather Forecast App** A web application that fetches real-time weather data for any city and displays temperature, humidity, and conditions.
* **To-Do App** A simple productivity app to add, delete, and mark tasks as completed with data saved in the browser.
---

## 🗂️ Core Technology Stack

- **Structure & Frameworks:** HTML5 (Semantic Schema Architecture)
- **Styling Engine:** CSS3 (Custom Design Tokens, Flexbox Grid, Structural Transforms)
- **Behavioral Logic:** Native JavaScript (ES6 Modules, Local Browser State Engine, Async Observers)

---

## 🔧 Production Pipeline Commands

To run modifications locally and sync changes directly to the live environment, initialize the tracking suite:

```bash
# 1. Stage modified system files
git add .

# 2. Commit a version control timestamp 
git commit -m "Optimize design primitives and structural layouts"

# 3. Ship changes directly to live deployment pipeline
git push origin main