# Resume Portfolio - Reinaldo Haynes

A modern, interactive resume website built with Next.js, featuring a clean design, dark/light theme toggle, and optimized for both web viewing and printing.

## 🌟 Features

- **Responsive Design**: Mobile-first approach that looks great on all devices
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Print Optimized**: Clean print layout with proper page breaks and styling
- **Interactive Elements**: Hover effects and smooth transitions
- **Static Export**: Builds to static files for easy deployment
- **Performance Focused**: Optimized loading and rendering
- **Accessibility**: Proper semantic HTML and ARIA labels
- **Skills Visualization**: Visual progress bars showing years of experience

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist](https://vercel.com/font) font family
- **Build**: Static export for deployment

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ReyHaynes/resume.reyhaynes.com.git
cd resume.reyhaynes.com
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Update Resume Data

Edit the resume content in `app/data/resume.json`:

```json
{
  "header": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "location": "Your Location"
  },
  "summary": "Your professional summary...",
  "experience": [...],
  "skills": [...],
  "education": [...],
  "certifications": [...]
}
```

### Customize Styling

- **Colors**: Modify CSS custom properties in `app/globals.css`
- **Layout**: Adjust components in `app/components/`
- **Typography**: Update font settings in `app/layout.tsx`

### Add Company Logos

Place company logos in the `public/` directory and reference them in the resume data:

```json
{
  "logo": "/company_logo.jpeg"
}
```

## 🛠️ Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
├── app/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Header with name and theme toggle
│   │   ├── ThemeToggle.tsx  # Dark/light mode toggle
│   │   ├── Section.tsx      # Resume sections
│   │   ├── ExperienceItem.tsx
│   │   ├── Skills.tsx
│   │   ├── StandoutSkills.tsx
│   │   └── ...
│   ├── data/
│   │   └── resume.json      # Resume content data
│   ├── hooks/
│   │   └── useTheme.ts      # Theme management hook
│   ├── lib/
│   │   └── theme-script.ts  # Client-side theme script
│   ├── types/
│   │   └── resume.ts        # TypeScript types
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
└── package.json
```

## 🎨 Theme System

The theme system supports both light and dark modes with:

- **System Preference Detection**: Automatically matches user's OS preference
- **Manual Toggle**: Switch themes with the toggle button
- **Persistence**: Remembers user's choice in localStorage
- **CSS Custom Properties**: Seamless color transitions
- **Print Compatibility**: Optimized colors for printing

## 📱 Responsive Design

- **Mobile-first**: Optimized for mobile devices
- **Tablet**: Adjusted layout for medium screens
- **Desktop**: Full layout with sidebar
- **Print**: Special print styles for clean paper output

## 🚀 Deployment

This project is configured for static export, making it deployable to:

- **GitHub Pages**
- **Vercel**
- **Netlify**
- **AWS S3 + CloudFront**
- Any static hosting service

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ReyHaynes/resume.reyhaynes.com)

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The static files will be in the `out/` directory
3. Upload the contents to your hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Reinaldo Haynes**
- Website: [resume.reyhaynes.com](https://resume.reyhaynes.com)
- LinkedIn: [@reyhaynes](https://linkedin.com/in/reyhaynes)
- GitHub: [@ReyHaynes](https://github.com/ReyHaynes)

---

⭐ Star this repository if you found it helpful!
