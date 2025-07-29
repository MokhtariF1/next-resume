# 🚀 Modern Resume - Hossein Pira

A stunning, interactive, and modern resume built with Next.js, TypeScript, and Tailwind CSS. Features glassmorphism design, smooth animations, and real PDF download functionality.

![Resume Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## ✨ Features

### 🎨 Modern Design
- **Glassmorphism UI** - Frosted glass effects with backdrop blur
- **Interactive Mouse Tracking** - Background elements follow cursor movement
- **Smooth Animations** - Staggered loading animations and hover effects
- **Floating Particles** - Animated background particles for depth
- **Gradient Overlays** - Dynamic color gradients throughout
- **3D Hover Effects** - Cards lift and scale on interaction

### 📱 Responsive & Interactive
- **Mobile-First Design** - Optimized for all screen sizes
- **Clickable Contact Links** - Direct email, phone, and social media links
- **Animated Skills Tags** - Interactive hover effects and scaling
- **Professional Photo Display** - Circular frame with online status indicator

### 📄 PDF Export
- **Real PDF Download** - Generate and download professional PDF version
- **Print-Optimized Layout** - Clean formatting for printing
- **Complete Information** - All resume data included in PDF

### 🎯 Professional Sections
- **About Me** - Personal introduction and passion statement
- **Tech Stack** - Categorized by Frontend, Backend, Cross-platform, and Databases
- **Core Skills** - Interactive skill tags with animations
- **What I Build** - Application types and capabilities
- **Development Style** - Core principles and approach
- **Contact Information** - All professional contact details

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

### Features
- **Responsive Design** - Mobile-first approach
- **Modern CSS** - Glassmorphism, gradients, and animations
- **Interactive Elements** - Mouse tracking and hover effects
- **PDF Generation** - Browser-based PDF creation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/code3-dev/next-resume.git
   cd next-resume
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
next-resume/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main resume component
├── public/
│   └── hossein-photo.jpg    # Profile photo
├── components/
│   └── ui/                  # Reusable UI components
├── README.md
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Customization

### Personal Information
Update your details in `app/page.tsx`:

```typescript
const contactLinks = [
  {
    icon: Mail,
    label: "your.email@gmail.com",
    href: "mailto:your.email@gmail.com",
    color: "from-red-500 to-pink-500",
  },
  // ... other contact info
]
```

### Skills & Technologies
Modify the skills arrays:

```typescript
const skills = [
  "Your Skill 1",
  "Your Skill 2",
  // ... add your skills
]

const databases = [
  "Your Database 1",
  "Your Database 2",
  // ... add your databases
]
```

### Profile Photo
Replace `public/hossein-photo.jpg` with your professional photo.

### Colors & Styling
Customize the color scheme in the component or `tailwind.config.js`:

```typescript
// Example: Change gradient colors
className="bg-gradient-to-r from-your-color to-your-color"
```

## 📱 Responsive Design

The resume is fully responsive and optimized for:
- **Desktop** - Full interactive experience
- **Tablet** - Adapted layout with touch interactions
- **Mobile** - Stacked layout with optimized spacing

## 🖨️ PDF Export

The PDF export feature:
- Creates a clean, print-friendly version
- Includes all resume information
- Optimized for ATS (Applicant Tracking Systems)
- Professional formatting

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify
1. Build the project: `pnpm build`
2. Deploy to [Netlify](https://netlify.com)

### Other Platforms
The project can be deployed to any static hosting service that supports Next.js.

## 🎯 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for speed
- **SEO Friendly**: Proper meta tags and structure
- **Accessibility**: WCAG compliant

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Hossein Pira**
- GitHub: [@code3-dev](https://github.com/code3-dev)
- LinkedIn: [hossein-pira-748056278](https://www.linkedin.com/in/hossein-pira-748056278)
- Email: h3dev.pira@gmail.com
- Telegram: [@h3dev](https://t.me/h3dev)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev)
- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/code3-dev/next-resume?style=social)
![GitHub forks](https://img.shields.io/github/forks/code3-dev/next-resume?style=social)
![GitHub issues](https://img.shields.io/github/issues/code3-dev/next-resume)
![GitHub license](https://img.shields.io/github/license/code3-dev/next-resume)

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Hossein Pira](https://github.com/code3-dev)