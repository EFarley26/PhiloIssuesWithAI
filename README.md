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

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky navigation with dark mode toggle
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
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Features

- ✅ React + Vite setup
- ✅ React Router for multi-page navigation
- ✅ TailwindCSS for styling
- ✅ Responsive, mobile-first design
- ✅ Dark mode toggle
- ✅ Smooth animations and transitions
- ✅ Sticky navigation bar
- ✅ All 5 required pages with placeholder content

## Customization

- Update your name in `src/components/Footer.jsx`
- Add your personal reflection content in `src/pages/Reflection.jsx`
- Customize colors and styling in `tailwind.config.js` and `src/index.css`

