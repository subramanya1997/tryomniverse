# Contributing to TryOmniverse

First off, thank you for considering contributing to TryOmniverse! It's people like you that make TryOmniverse such a great tool for the e-commerce community.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots and animated GIFs** if applicable

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior** and **explain which behavior you expected to see instead**
* **Explain why this enhancement would be useful** to most TryOmniverse users

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Development Setup

### Prerequisites

- Node.js 18+
- Python 3.9+
- Docker and Docker Compose
- PostgreSQL 14+

### Setting Up Your Development Environment

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/your-username/tryomniverse.git
   cd tryomniverse
   ```

2. **Install dependencies**
   ```bash
   npm run setup
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development environment**
   ```bash
   npm run docker:up
   npm run dev
   ```

5. **Run tests**
   ```bash
   npm test
   ```

## Project Structure

```
tryomniverse/
├── frontend/           # React/Next.js web application
│   ├── components/     # Reusable UI components
│   ├── pages/          # Next.js pages
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   └── styles/         # CSS and styling
├── backend/            # Node.js API server
│   ├── routes/         # API routes
│   ├── models/         # Database models
│   ├── middleware/     # Express middleware
│   ├── services/       # Business logic
│   └── utils/          # Utility functions
├── agents/             # AI agent implementations
│   ├── core/           # Core agent framework
│   ├── ecommerce/      # E-commerce specific agents
│   ├── integrations/   # External API integrations
│   └── workflows/      # Agent workflows
├── integrations/       # E-commerce platform integrations
│   ├── shopify/        # Shopify integration
│   ├── amazon/         # Amazon integration
│   ├── ebay/           # eBay integration
│   └── common/         # Shared integration utilities
├── shared/             # Shared utilities and types
│   ├── types/          # TypeScript type definitions
│   ├── constants/      # Application constants
│   └── utils/          # Shared utility functions
└── docs/               # Documentation
```

## Coding Standards

### JavaScript/TypeScript

- Follow the existing code style
- Use TypeScript for new code
- Use meaningful variable and function names
- Add comments for complex logic
- Use async/await over promises where possible

### Python

- Follow PEP 8 style guidelines
- Use type hints for function parameters and return values
- Write docstrings for all functions and classes
- Use meaningful variable and function names

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

Example:
```
Add customer service agent integration

- Implement ChatGPT-based customer service responses
- Add support for order status inquiries
- Include escalation logic for complex issues

Fixes #123
```

## Testing

- Write tests for new features and bug fixes
- Ensure all tests pass before submitting a PR
- Follow the existing test patterns
- Aim for good test coverage but focus on testing important functionality

### Running Tests

```bash
# Run all tests
npm test

# Run frontend tests
npm run test:frontend

# Run backend tests
npm run test:backend

# Run tests in watch mode
npm run test:watch
```

## Documentation

- Update README.md if you change functionality
- Add JSDoc comments for new functions
- Update API documentation for new endpoints
- Add examples for new features

## Community

- Join our discussions on GitHub
- Follow our updates on social media
- Participate in community calls (details in Discord)

## Questions?

Don't hesitate to ask questions by creating an issue or reaching out to the maintainers:

- **Subramanya Nagabhushanaradhya** - [@subramanya1997](https://github.com/subramanya1997)

Thank you for contributing to TryOmniverse! 🚀 