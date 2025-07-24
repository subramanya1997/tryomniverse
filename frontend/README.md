# TryOmniverse Frontend

React/Next.js frontend application for the TryOmniverse e-commerce AI agent platform.

## Features

- **Modern UI/UX**: Clean, responsive design built with Tailwind CSS
- **Real-time Chat**: WebSocket-based chat with AI agents
- **Dashboard**: Comprehensive e-commerce analytics and metrics
- **Agent Management**: Create, configure, and monitor AI agents
- **Integration Hub**: Connect and manage e-commerce platform integrations
- **Multi-tenant**: Support for multiple stores and businesses

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Headless UI
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts
- **Real-time**: Socket.io client
- **Testing**: Jest + React Testing Library

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Environment Variables

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_WS_URL=ws://localhost:8000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Project Structure

```
frontend/
├── components/         # Reusable UI components
│   ├── ui/            # Base UI components
│   ├── forms/         # Form components
│   ├── charts/        # Chart components
│   └── layout/        # Layout components
├── app/               # Next.js App Router pages
├── hooks/             # Custom React hooks
├── lib/               # Utility libraries
├── stores/            # Zustand stores
├── types/             # TypeScript types
└── styles/            # Global styles
``` 