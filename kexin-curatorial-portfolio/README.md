# Kexin's Curatorial Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS to showcase curatorial projects.

## Project Overview

This portfolio website features an elegant design with smooth transitions and interactive elements, highlighting curatorial work through immersive project presentations.

### Key Features

- Modern React + Vite setup with hot module replacement (HMR)
- Responsive design using Tailwind CSS
- Full-screen snap-scrolling project presentations
- Animated transitions and interactive elements
- Clean, minimalist layout with focus on visual content

## Project Structure

```
kexin-curatorial-portfolio/
├── src/
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Layout components (MainLayout)
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── A_City_in_Tune.jsx
│   │   └── Legacies_in_Exile.jsx
│   ├── data/           # Project data and content
│   └── styles/         # Custom styles and Tailwind configurations
├── public/             # Static assets and images
└── ...config files
```

## Featured Projects

1. **A City in Tune**
   - Interactive full-screen presentation
   - Snap-scrolling navigation
   - Alternating image/text layouts
   - Custom animations and transitions

2. **Legacies in Exile**
   - Detailed project showcase
   - Visual storytelling elements
   - Responsive image galleries

## Development Setup

1. **Environment Setup**
   ```bash
   # Install dependencies
   yarn install

   # Start development server
   yarn dev
   ```

2. **Build for Production**
   ```bash
   yarn build
   ```

## Project History

### Initial Setup and Configuration
- Created React + Vite project structure
- Configured Tailwind CSS and PostCSS
- Set up project routing and navigation
- Established main layout and component structure

### Design Implementation
- Developed responsive layout system
- Created project card components
- Implemented full-screen project presentations
- Added smooth transitions and animations

### Content Integration
- Integrated project images and descriptions
- Created detailed project pages
- Implemented snap-scrolling navigation
- Added interactive elements and transitions

### Repository Setup
- Initialized Git repository
- Set up GitHub remote
- Configured SSH authentication
- Established initial project documentation

### Recent Updates (Session 2)
- **About Page Overhaul:**
  - Implemented a full-width, two-column layout with a dynamic image height that matches the text content for a balanced aesthetic.
  - Added a "Collaborated With" section to showcase partnerships.
  - Included a subtle scroll-down arrow to improve navigation on full-screen layouts.
- **Project Page Enhancements:**
  - Updated the "Legacies in Exile" page with detailed descriptions for the curatorial process, storytelling highlights, and a personal reflection.
  - Made project card badges clickable, linking to external sites.
  - Standardized badge styling for a consistent look and feel.
- **Homepage Animation:**
  - Added a vibrant, animated gradient to the main headline to make it more eye-catching.

### Recent Updates (Session 3)
- **Contact Page Redesign:**
  - Replaced the traditional contact form with a modern, link-based "social hub."
  - Designed elegant, clickable cards for each social media platform, complete with icons and subtitles.
- **Layout Debugging:**
  - Systematically resolved a persistent layout issue on the Contact page by analyzing and mirroring the structure of known-working pages.
  - Corrected foundational layout settings in the main layout component to ensure site-wide consistency.

### Recent Updates (Session 4)
- **Contact Page Finalization:**
  - Updated all social media button labels with descriptive subtitles.
  - Added the correct URLs for all social media platforms, including Instagram, TikTok, Substack, Ko-fi, Medium, and LinkedIn.
  - Reordered the social links to prioritize key platforms.

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- React Router
- React Icons
- PostCSS
