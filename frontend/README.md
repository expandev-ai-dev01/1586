# TODO List App

Sistema de gerenciamento de tarefas

## Tech Stack

- React 19.2.0
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 7.9.3
- TanStack Query 5.90.2
- Zustand 5.0.8
- React Hook Form 7.63.0
- Zod 4.1.11

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create `.env` file from `.env.example`:

```bash
cp .env.example .env
```

4. Start development server:

```bash
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Application configuration
│   ├── App.tsx            # Root component
│   └── router.tsx         # Routing configuration
├── assets/                # Static assets
│   └── styles/           # Global styles
├── core/                  # Core functionality
│   ├── components/       # Shared components
│   ├── lib/              # Library configurations
│   ├── types/            # Global types
│   └── utils/            # Utility functions
├── domain/               # Business domains (features)
├── pages/                # Page components
│   └── layouts/          # Layout components
└── main.tsx              # Application entry point
```

## Features

The application will include the following features:

1. Task Creation
2. Task Categorization
3. Priority Setting
4. Deadline Management
5. Task Completion Tracking
6. Task Search
7. Notifications and Reminders
8. Task Sharing
9. Calendar View
10. Multi-platform Synchronization

## API Integration

The frontend integrates with a REST API backend:

- **Public endpoints**: `/api/v1/external/...`
- **Authenticated endpoints**: `/api/v1/internal/...`

API configuration is in `src/core/lib/api.ts`

## Development Guidelines

- Follow the established folder structure
- Use TypeScript for all new files
- Follow React best practices and hooks patterns
- Use TailwindCSS for styling
- Implement proper error handling
- Write meaningful commit messages

## License

Private project