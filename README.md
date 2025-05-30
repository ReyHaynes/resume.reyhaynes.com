# Resume Portfolio - Reinaldo Haynes

A file-driven, modern, ATS-friendly resume website built with Next.js, featuring a clean design, dark/light theme toggle, and optimized for both web viewing and printing.

Use `/app/data/resume.json` to modify the resume data. Target the job you want dynamically.

## 🌟 Features

- **Responsive Design**: Mobile-first approach that looks great on all devices
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Print Optimized**: Clean print layout with proper page breaks and styling
- **Static Export**: Builds to static files for easy deployment
- **Performance Focused**: Optimized loading and rendering; SEO-friendly
- **Accessibility**: Proper semantic HTML, ARIA labels, and screen-reader ready
- **Skills Visualization**: Visual progress bars showing years of experience
- **Optional Analytics**: Privacy-focused Firebase Analytics for engagement insights

## 📸 Screenshots

### Light Mode
![Resume - Light Mode](https://github.com/ReyHaynes/resume.reyhaynes.com/blob/main/screenshots/screenshot-light_mode.jpg)

### Dark Mode  
![Resume - Dark Mode](https://github.com/ReyHaynes/resume.reyhaynes.com/blob/main/screenshots/screenshot-dark_mode.jpg)

### Print Layout
![Resume - Print Layout](https://github.com/ReyHaynes/resume.reyhaynes.com/blob/main/screenshots/screenshot-print.jpg)

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
    "website": "https://yourwebsite.com",
    "websiteLabel": "yourwebsite.com",
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

## 📊 Optional: Firebase Analytics

This project includes optional, privacy-focused Firebase Analytics integration for basic page tracking.

### Features

- **Minimal Tracking**: Only essential page views, engagement time, and scroll milestones
- **Privacy-Focused**: No intrusive tracking or personal data collection
- **Optional**: App works perfectly without analytics configured
- **Lightweight**: Minimal performance impact

### Setup (Optional)

1. Create a Firebase project at [Firebase Console](https://firebase.google.com/)
2. Enable Analytics in your Firebase project
3. Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

4. Add your Firebase configuration to `.env.local`:
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

### What's Tracked

- **Page Views**: Basic page visit tracking
- **Engagement Time**: Time spent on page (only meaningful engagement >10s)
- **Scroll Milestones**: Progress at 25%, 50%, 75%, and 100% scroll depth
- **Performance Metrics**: Page load times and rendering performance
- **Device Context**: Viewport size, device type, and screen resolution
- **Session Information**: Visit patterns and return visitor tracking
- **Exit Intent**: Potential exit behavior for engagement insights

### Privacy Notes

- No personal information is collected
- All tracking is anonymous and aggregated
- Easy to disable by removing environment variables
- Fully compliant with privacy best practices

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
│   │   ├── useTheme.ts      # Theme management hook
│   │   └── useAnalytics.ts  # Analytics tracking hook (optional)
│   ├── lib/
│   │   ├── theme-script.ts  # Client-side theme script
│   │   ├── firebase.ts      # Firebase configuration (optional)
│   │   └── analytics.ts     # Analytics functions (optional)
│   ├── providers/
│   │   └── FirebaseProvider.tsx # Firebase provider (optional)
│   ├── types/
│   │   └── resume.ts        # TypeScript types
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── public/                  # Static assets and company logos
├── .env.local.example       # Environment variables template
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

💚 Made with love...because I hate updating PDFs and Word documents!

⭐ Star this repository if you found it helpful!
