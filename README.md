# Max Basev - Personal Portfolio Website

🌐 **Live Site:** [m-b.one](https://m-b.one/)

Modern personal portfolio website built with Next.js, featuring bilingual support (English & Russian) and responsive design.

## 🚀 Features

- **Bilingual Support** - Full English and Russian versions
- **Responsive Design** - Optimized for all device sizes  
- **Modern Stack** - Built with Next.js 15 and TypeScript
- **Professional Portfolio** - Showcasing development services and experience
- **Legal Documents** - Public offer agreements in both languages
- **Contact Integration** - Multiple contact methods and banking details

## 🛠 Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** CSS3 with Bootstrap classes
- **Icons:** Boxicons, FontAwesome
- **Deployment:** Ready for Vercel/Netlify

## 📁 Project Structure

```
nextjs-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Redirect to /en
│   │   ├── en/
│   │   │   ├── page.tsx     # English homepage
│   │   │   └── offer/
│   │   │       └── page.tsx # English offer agreement
│   │   └── ru/
│   │       ├── page.tsx     # Russian homepage  
│   │       └── offer/
│   │           └── page.tsx # Russian offer agreement
│   └── components/          # (future React components)
├── public/
│   ├── img/                 # Profile images
│   └── MB_Logo.png         # Logo
├── package.json
└── next.config.ts
```

## 🌐 Available Routes

- `/` - Redirects to `/en`
- `/en` - English homepage
- `/ru` - Russian homepage (Русская версия)
- `/en/offer` - Public offer agreement (English)
- `/ru/offer` - Договор оферты (Russian)

## 🏗 Installation & Development

```bash
# Clone the repository
git clone https://github.com/MaxBasev/m-b.one.git
cd m-b.one/nextjs-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📱 Navigation

The site features a clean left sidebar navigation with:
- **Language selector** - EN/RU flags for easy switching
- **Document access** - Quick link to offer agreements
- **Mobile responsive** - Hamburger menu for mobile devices

## 👨‍💻 About

Personal website of **Max Basev** (ИП Басев Максим Игоревич) - a software developer based in Bishkek, Kyrgyzstan, offering professional software development services.

### Services:
- Custom software development
- Web application development  
- Software optimization and enhancement
- Technical consulting and architecture

## 📄 License

© 2018-2025 MaxBasev. All rights reserved.

---

**Contact:** connect@m-b.one | [@maxbasev](https://t.me/maxbasev)