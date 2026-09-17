# ⚡ Meryem Achemlal — Portfolio

> A modern, interactive personal portfolio built with **React.js**, **SASS**, and **Bootstrap**, hosted on **Vercel**.
> Designed with a focus on seamless web integration, dark cyber/glassmorphism UI/UX aesthetics, and web accessibility standards.

---

## 🚀 Live Demo & Overview

- **Live Site:** [meryem-portfolio.vercel.app](https://meryem-portfolio.vercel.app)
- **Developer:** Meryem Achemlal — _Front-End Developer & Web Integrator_

---

## 🛠️ Tech Stack

### **Front-End & UI**

- **React.js** — Component-based UI framework
- **SASS / SCSS** — Custom styling with variables, mixins, and cyber/glassmorphism neon effects
- **Bootstrap 5** — Responsive layout and flexible grid system
- **Icomoon / Devicon** — Vector icons and tech stack logos

### **Back-End & API (Contact Form)**

- **Node.js & Express** — Local development email dispatch server
- **Vercel Serverless Functions** — Serverless `/api/send.js` endpoint using Nodemailer for production environments

### **Tools & Deployment**

- **Vercel** — Hosting, Serverless Functions, and automated CI/CD pipeline
- **Git & GitHub** — Version control and code management

---

## ✨ Key Features

- 🎨 **Cyberpunk & Glassmorphism Design** — Dark color palette with neon burgundy accents, 3D hover effects, and interactive cards.
- 📱 **100% Fully Responsive** — Seamless user experience tailored for mobile, tablet, and desktop screens.
- ⚡ **Project Showcase** — Dynamic cards highlighting live interactive demos and GitHub source code.
- 🛠️ **Tech Stack Section** — Sleek visualization of skills categorized by domain and expertise level.
- 📩 **Functional Contact Form** — Direct email dispatch via SMTP and Nodemailer integrations.
- ♿ **Web Accessibility (A11y)** — Built in alignment with RGAA and WCAG standards.

---

## 📁 Project Structure

```text
meryem-portfolio/
├── api/
│   └── send.js               # Vercel Serverless Function (Nodemailer)
├── public/
│   └── index.html            # Main HTML entry point
├── src/
│   ├── components/           # React Components (Hero, About, Skills, Projects, Footer...)
│   ├── images/               # Project previews, icons, and media assets
│   ├── styles/               # Custom SCSS stylesheets (style.scss)
│   ├── App.js                # Root component
│   └── index.js              # React entry point
├── .env                      # Environment variables (SMTP - untracked in Git)
├── package.json              # Project dependencies and scripts
└── README.md                 # Documentation
```

## ⚙️ Installation & Local Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### 1. Clone the repository

```bash
git clone [https://github.com/Meriemu/meryem-portfolio.git](https://github.com/Meriemu/meryem-portfolio.git)
cd meryem-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file at the root of the project with the following variables:

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_google_app_password
```

### 4. Start the local development server

```bash
npm start
```

🚀 Deployment on Vercel
The repository is configured to trigger an automatic deployment upon pushing to the main branch:

```bash
git add .
git commit -m "feat: update portfolio features"
git push origin main
```

To trigger a manual build using the Vercel CLI, run:

```bash
npx vercel --prod
```

## 👤 Author

**Meryem Achemlal**

- **GitHub:** [https://github.com/Meriemu](https://github.com/Meriemu)
- **LinkedIn:** [https://www.linkedin.com/in/meryem-a-582b22a5/](https://www.linkedin.com/in/meryem-a-582b22a5/)
- **Codewars:** [https://www.codewars.com/users/Meriemu](https://www.codewars.com/users/Meriemu)

---

© 2026 Meryem Achemlal — Built with React.js & Passion ⚡
