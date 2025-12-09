# AI in STEM Education: A Philosophical Exploration

A multi-page website exploring the debate about AI in STEM education, built with React + Vite and TailwindCSS.

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deployment to GitHub Pages

This project is configured to work with GitHub Pages. Follow these steps:

### Option 1: Automatic Deployment (Recommended)

1. Push your code to a GitHub repository
2. Go to your repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. The included GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your site whenever you push to the `main` or `master` branch

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Push the `dist` folder contents to the `gh-pages` branch of your repository, or use a tool like `gh-pages`:
```bash
npm install --save-dev gh-pages
```

Then add to `package.json` scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

3. Enable GitHub Pages in your repository settings and select the `gh-pages` branch

### Important Notes

- The site uses HashRouter for GitHub Pages compatibility (URLs will have `#` in them, e.g., `yoursite.github.io/repo/#/pro-ai`)
- The base path is set to `./` for relative paths, making it work regardless of repository name
- All routing will work correctly on GitHub Pages

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky navigation bar
│   │   └── Footer.jsx       # Footer with name and course info
│   ├── pages/
│   │   ├── Home.jsx         # Home page with hero and overview
│   │   ├── ProAI.jsx        # Arguments supporting AI in STEM
│   │   ├── AntiAI.jsx       # Concerns and critiques
│   │   ├── CurrentTech.jsx  # Current AI technologies
│   │   └── Reflection.jsx   # Personal reflection page
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles with Tailwind
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Features

- ✅ React + Vite setup
- ✅ React Router (HashRouter) for multi-page navigation
- ✅ TailwindCSS for styling
- ✅ Responsive, mobile-first design
- ✅ Sticky navigation bar
- ✅ All 5 required pages with placeholder content
- ✅ GitHub Pages compatible

## Customization

- Update your name in `src/components/Footer.jsx`
- Add your personal reflection content in `src/pages/Reflection.jsx`
- Customize colors and styling in `tailwind.config.js` and `src/index.css`

