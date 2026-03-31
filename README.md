# Irene Busah — Portfolio

> Personal portfolio of **Irene Busah** — Data Scientist, ML Engineer & Competitive Programmer.

🌐 **Live site:** [irenebusah.dev](https://irenebusah.dev) *(or your GitHub Pages URL)*

---

## ✨ Features

- **Live GitHub Projects** — Pulls public repos directly from the GitHub API
- **Challenge Wall** — Curated LeetCode problems I've solved, grouped by pattern (Sorting, Prefix Sum, Two Pointers, Sliding Window)
- **Research Section** — Academic & independent research projects
- **Blog** — Writeups and deep dives *(in progress)*
- **Contact Form** — Direct email integration
- **Ambient FX** — Animated canvas background, custom cursor, scanline overlay, scroll-reveal animations
- **Typewriter** — Cycling role titles in the hero section

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | Vanilla CSS (modular, no frameworks) |
| Logic | Vanilla JavaScript (ES Modules) |
| Fonts | Google Fonts — Orbitron, Share Tech Mono, Inter |
| APIs | GitHub REST API v3, Codeforces API |
| Hosting | GitHub Pages + Cloudflare |

---

## 📁 Project Structure

```
portfolio/
├── index.html          # Single-page app entry point
├── css/
│   ├── base.css        # Variables, reset, typography, reveal animations
│   ├── nav.css         # Navigation bar styles
│   ├── hero.css        # Hero section
│   ├── skills.css      # Tech stack grid
│   ├── projects.css    # GitHub repos grid
│   ├── cp.css          # Competitive programming challenge wall
│   ├── blog.css        # Blog section
│   └── contact.css     # Contact form & links
└── js/
    ├── canvas.js       # Animated particle background
    ├── cursor.js       # Custom cursor with glow effect
    ├── typewriter.js   # Role typewriter + scroll-reveal + nav highlight
    ├── github.js       # GitHub API integration (projects section)
    ├── leetcode.js     # Challenge wall (curated LeetCode problems)
    └── blog.js         # Blog posts renderer
```

---

## 🚀 Local Development

> **Important:** This project uses ES Modules (`<script type="module">`), which **require an HTTP server** to run. Opening `index.html` directly via `file://` will cause scripts to be blocked by the browser's CORS policy.

### Option 1 — Python (fastest, no install)
```bash
cd portfolio
python3 -m http.server 8080
# Open http://localhost:8080
```

### Option 2 — VS Code Live Server
Install the **Live Server** extension, then right-click `index.html` → **Open with Live Server**. Make sure it opens via `http://127.0.0.1:...` (not `file://`).

### Option 3 — Node.js
```bash
npx serve .
# Open the URL it provides
```

---

## 🌍 Deployment (GitHub Pages)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `Deploy from a branch` → `main` → `/ (root)`
4. GitHub will provide a `https://<username>.github.io/<repo>` URL

If using a custom domain (e.g. via Cloudflare), add a `CNAME` file to the root with your domain name.

---

## 📬 Contact

- **Email:** i.busah123@gmail.com
- **LinkedIn:** [linkedin.com/in/irene-busah](https://linkedin.com/in/irene-busah)
- **GitHub:** [github.com/Irene-Busah](https://github.com/Irene-Busah)
- **LeetCode:** [leetcode.com/busah](https://leetcode.com/busah)

---

*Built with precision & passion.*
