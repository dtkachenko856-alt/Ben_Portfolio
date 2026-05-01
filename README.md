# Android & AI Developer Portfolio

A professional, modern portfolio website for an Android & AI Developer built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Dark Theme** - Sleek, professional dark mode design with gradient accents
- **Responsive Design** - Fully responsive across all device sizes
- **Smooth Animations** - Scroll-triggered animations and transitions
- **Interactive Chatbot** - AI-powered chatbot for answering visitor questions
- **Complete Sections**:
  - Hero with animated text
  - About Me with highlights
  - Skills with interactive tabs
  - Featured Projects showcase
  - Professional Experience timeline
  - Education & Certifications
  - Resume download
  - Contact form
  - Footer with social links

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Animations**: CSS animations with Intersection Observer

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

The static files will be generated in the `dist` folder.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/
│   ├── sections/          # Page sections
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── experience.tsx
│   │   ├── education.tsx
│   │   ├── resume.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   ├── ui/                # UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   └── chatbot.tsx        # AI Chatbot component
├── lib/
│   ├── mock-data.ts       # Global mock data
│   └── utils.ts           # Utility functions
├── public/                # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Customization

### Personal Information

Edit `lib/mock-data.ts` to update:
- Personal details (name, contact, social links)
- Hero section content
- About section
- Skills and technologies
- Projects
- Experience
- Education
- Certifications
- Chatbot responses

### Styling

- Colors can be customized in `app/globals.css` (CSS variables)
- Tailwind configuration in `tailwind.config.ts`
- Animations defined in both files

## Chatbot Features

The integrated chatbot can answer questions about:
- Professional experience
- Projects and portfolio
- Technical skills
- Contact information
- Resume download

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Created by Alex Chen - Android & AI Developer
