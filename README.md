## Omniverse – AI Consulting Experience

This repository contains the marketing website for **Omniverse**, a modern AI consulting studio. The site is built with [Next.js](https://nextjs.org), the App Router, TypeScript, Tailwind CSS, and [shadcn/ui](https://ui.shadcn.com/) components.

### Prerequisites

- Node.js 18 or later
- npm (included with Node.js)

### Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to preview the site. Update content in `src/app/page.tsx` and component styles inside `src/components`.

### Production build

```bash
npm run build
npm start
```

### Tech stack highlights

- **Next.js 15 App Router** with React Server Components
- **Tailwind CSS** with custom design tokens inspired by the shadcn design system
- **shadcn/ui** primitives for accessible, themeable UI components
- **TypeScript** for type-safe development

### Project structure

```
src/
  app/        # App Router entry points and layout
  components/ # Reusable UI components and shadcn primitives
  lib/        # Utilities (e.g. class name helpers)
public/       # Static assets (favicons, avatars, etc.)
```

Feel free to fork and adapt this project for your own AI consulting experiences.
