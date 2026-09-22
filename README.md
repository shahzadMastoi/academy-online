# NoorLearn Academy

A modern online learning platform for Islamic education, designed to help children and families grow in Quranic knowledge, character, and digital literacy in a safe and engaging environment.

NoorLearn Academy is a responsive React + TypeScript web app that showcases course offerings, learning tracks, and a parent-focused AI assistant experience.

## Overview

This project presents a polished academy website with:

- A welcoming home page with strong conversion-focused messaging
- Course catalog and detailed lesson pages
- Islamic education tracks for Quran, character-building, and parenting guidance
- A modern UI tailored for families and young learners
- A built-in AI-powered Tarbiyah assistant for parent support

## Features

- Responsive landing page for desktop and mobile
- Multi-page navigation using React Router
- Course cards and detailed curriculum views
- Islamic learning pathways for children and parents
- Strong visual design with clean, engaging educational branding
- WhatsApp enrollment CTAs for quick user conversion
- AI chat assistant for Islamic parenting and educational guidance

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Lucide React icons
- Google GenAI SDK

## Project Structure

```text
academy-online/
├── App.tsx
├── components/
│   └── TarbiyahAssistant.tsx
├── constants.tsx
├── index.html
├── index.tsx
├── metadata.json
├── package.json
├── tsconfig.json
├── types.ts
├── vite.config.ts
├── README.md
└── .env.local
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/shahzadMastoi/academy-online.git
cd academy-online
```

2. Install dependencies:

```bash
npm install
```

3. Configure your environment variables:

Create a `.env.local` file in the root directory and add your API key for the AI assistant if you want to enable the chat feature.

```env
API_KEY=your_gemini_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

5. Open the app in your browser:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```
Runs the application in development mode.

```bash
npm run build
```
Builds the app for production.

```bash
npm run preview
```
Serves the production build locally for preview.

## Production Build

To generate a production build:

```bash
npm run build
```

The build output will be generated in the `dist` folder.

## Deployment

This app is a Vite-based frontend and can be deployed to any static hosting provider such as:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

For static deployment, run:

```bash
npm run build
```

Then upload the generated `dist` folder to your hosting provider.

## Screens and Experience

The platform is designed around a modern Islamic school brand, with:

- a premium landing experience
- curriculum pages for each educational track
- child-friendly, trust-building design language
- a call-to-action model centered on parent enrollment and course discovery

## Contributing

Contributions are welcome. If you want to improve the UI, add sections, or enhance the course catalog, feel free to open a pull request.

## License

This project does not currently include a license file. If you plan to distribute or publish it publicly, it is recommended to add an appropriate open-source license.

## Contact

For inquiries about the academy or this project, please use the contact information and enrollment flow included in the app.

## Notes

This repository is built as a front-end educational website and is ideal for demonstrating a clean academy brand experience, Islamic curriculum structure, and modern onboarding journey.
