# TryOmniverse Backend

Node.js/Express API server for the TryOmniverse e-commerce AI agent platform.

## Features

- **RESTful API**: Clean API design with OpenAPI documentation
- **Authentication**: JWT-based authentication with role-based access
- **Real-time**: WebSocket support for real-time agent communication
- **Database**: PostgreSQL with Prisma ORM
- **Caching**: Redis for session management and caching
- **Queue System**: Bull Queue for background job processing
- **AI Integration**: OpenAI GPT-4 and LangChain integration
- **E-commerce APIs**: Shopify, Amazon, and eBay integrations

## Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL + Prisma ORM
- **Cache**: Redis
- **Queue**: Bull Queue
- **Authentication**: JWT + bcrypt
- **Validation**: Joi
- **Testing**: Jest + Supertest
- **Documentation**: Swagger/OpenAPI

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

The API will be available at [http://localhost:8000](http://localhost:8000).

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data

## Environment Variables

```bash
NODE_ENV=development
PORT=8000
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-secret-key
OPENAI_API_KEY=your-openai-key
```

## API Documentation

API documentation is available at `/api/docs` when running the server.

## Project Structure

```
backend/
├── src/
│   ├── routes/         # API route handlers
│   ├── controllers/    # Request/response logic
│   ├── services/       # Business logic
│   ├── models/         # Database models
│   ├── middleware/     # Express middleware
│   ├── utils/          # Utility functions
│   ├── types/          # TypeScript types
│   └── config/         # Configuration files
├── prisma/             # Database schema and migrations
├── tests/              # Test files
└── docs/               # API documentation
``` 