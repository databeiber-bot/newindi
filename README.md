# AstraSignals Landing Page

A modern, responsive landing page for AstraSignals, built with React, Vite, and Tailwind CSS. This project showcases a trading indicator product with features, pricing, testimonials, and more.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd astrasignals-landing
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

### Deployment
- Build the project:
  ```bash
  npm run build
  ```
- Deploy the `dist` folder to Vercel, Netlify, or another hosting platform.

## Project Structure
- `src/App.jsx`: Main React component for the landing page.
- `src/index.css`: Tailwind CSS setup.
- `src/main.jsx`: Entry point for the React application.
- `index.html`: HTML template.
- `tailwind.config.js` and `postcss.config.js`: Tailwind CSS configuration.
- `vite.config.js`: Vite configuration for React.

## Customization
- Update `src/App.jsx` to replace placeholder links (e.g., `#pricing`, `#checkout`) with your payment gateway links (Stripe, Gumroad, etc.).
- Modify Tailwind classes in `src/App.jsx` or add custom styles in `src/index.css`.

## License
This project is for personal use. Update the footer in `src/App.jsx` with your own copyright information.