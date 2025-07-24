# TryOmniverse Frontend

Next.js frontend application for the TryOmniverse e-commerce AI agent platform, powered by Supabase.

## Features

- **Modern UI/UX**: Clean, responsive design built with Tailwind CSS
- **Real-time Updates**: Supabase Realtime for live agent conversations
- **Dashboard**: Comprehensive e-commerce analytics and metrics
- **Agent Management**: Create, configure, and monitor AI agents
- **Integration Hub**: Connect and manage e-commerce platform integrations
- **Multi-tenant**: Support for multiple stores and businesses
- **Authentication**: Supabase Auth with social login support

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Backend**: Supabase (PostgreSQL + Real-time + Auth + Storage)
- **Styling**: Tailwind CSS + Headless UI
- **State Management**: Zustand + Supabase client
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts for analytics
- **Real-time**: Supabase Realtime subscriptions
- **Testing**: Jest + React Testing Library

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Add your Supabase configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Generate TypeScript types from Supabase
npx supabase gen types typescript --project-id your-project-id > types/supabase.ts

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
- `npm run type-check` - Run TypeScript type checking

## Environment Variables

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_AGENTS_URL=http://localhost:8001

# Optional: Analytics and monitoring
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_MIXPANEL_TOKEN=your-mixpanel-token
```

## Project Structure

```
frontend/
├── app/                # Next.js App Router pages
│   ├── (auth)/        # Authentication pages
│   ├── dashboard/     # Main dashboard
│   ├── agents/        # Agent management
│   ├── integrations/  # Integration settings
│   └── stores/        # Store management
├── components/         # Reusable UI components
│   ├── ui/            # Base UI components (buttons, forms, etc.)
│   ├── charts/        # Chart components for analytics
│   ├── agents/        # Agent-specific components
│   └── layout/        # Layout components
├── hooks/             # Custom React hooks
│   ├── useSupabase.ts # Supabase client hook
│   ├── useAgents.ts   # Agent management hooks
│   └── useRealtime.ts # Real-time subscription hooks
├── lib/               # Utility libraries
│   ├── supabase.ts    # Supabase client configuration
│   ├── agents.ts      # Agent API client
│   └── utils.ts       # General utilities
├── stores/            # Zustand stores
│   ├── authStore.ts   # Authentication state
│   ├── agentStore.ts  # Agent management state
│   └── storeStore.ts  # E-commerce store state
├── types/             # TypeScript types
│   ├── supabase.ts    # Generated Supabase types
│   ├── agents.ts      # Agent-related types
│   └── database.ts    # Database types
└── styles/            # Global styles and Tailwind config
```

## Supabase Integration

### Authentication
```typescript
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const supabase = createClientComponentClient()

// Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password'
})

// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password'
})
```

### Real-time Subscriptions
```typescript
useEffect(() => {
  const channel = supabase
    .channel('conversations')
    .on('postgres_changes', 
      { event: 'INSERT', schema: 'public', table: 'messages' },
      (payload) => {
        // Handle new messages
        addMessage(payload.new)
      }
    )
    .subscribe()

  return () => {
    channel.unsubscribe()
  }
}, [])
```

### Database Operations
```typescript
// Fetch stores
const { data: stores, error } = await supabase
  .from('stores')
  .select('*')
  .eq('owner_id', user.id)

// Insert agent
const { data, error } = await supabase
  .from('agents')
  .insert({
    store_id: storeId,
    agent_type_id: 'inventory_agent',
    name: 'My Inventory Agent',
    config: { threshold: 10 }
  })
```

## Key Features Implementation

### Agent Dashboard
- Real-time agent status monitoring
- Performance metrics visualization
- Agent configuration management
- Conversation history with customers

### E-commerce Integration
- Store connection wizard
- Product synchronization
- Order management
- Inventory tracking

### Analytics Dashboard
- Revenue and sales metrics
- Customer behavior analysis
- Agent performance analytics
- Automated reporting

### Real-time Chat
- Live agent conversations
- Customer support interface
- Agent collaboration tools
- Message history and search

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Performance Optimization

- **Image Optimization**: Next.js Image component with Supabase Storage
- **Code Splitting**: Automatic route-based code splitting
- **Real-time Optimization**: Efficient Supabase subscriptions
- **Caching**: SWR for data fetching and caching
- **Bundle Analysis**: Built-in bundle analyzer 