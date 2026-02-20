# NEAR Protocol Starter Kit

A modern, production-ready template for building Web3 applications on the NEAR blockchain. Features TanStack Router, Hono backend, Better Auth with SIWN, and deployed on Cloudflare Pages.

## ✨ Features

- 🚀 **Modern Stack**: Built with React 19, TypeScript, and Tailwind CSS v4
- 🧭 **TanStack Router**: Type-safe routing with full TypeScript support
- ⚡ **Hono Backend**: Lightweight, fast backend running on Cloudflare Workers
- 🔐 **Better Auth + SIWN**: Sign in with NEAR wallet authentication
- 🔗 **NEAR Integration**: Seamless wallet connection using @hot-labs/hot-connector
- 📊 **TanStack Query**: Powerful caching and synchronization
- 🧪 **Playwright E2E**: End-to-end testing setup included
- 🌐 **Cloudflare Deployment**: Optimized for Cloudflare Pages with automatic HTTPS
- 🎨 **Beautiful Design**: NEAR Protocol branded styling with dark mode support
- 📱 **Responsive**: Mobile-first design with smooth animations

## 🛠️ Tech Stack

- **React 19** - Latest React with new features
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - Modern utility-first styling
- **TanStack Router** - Type-safe client-side routing
- **TanStack Query** - Data fetching, caching, and synchronization
- **Hono** - Ultra-fast web framework for Cloudflare Workers
- **Better Auth** - Authentication framework with NEAR SIWN plugin
- **Vite** - Lightning-fast build tool
- **Playwright** - End-to-end testing
- **@hot-labs/kit** - NEAR wallet integration
- **Cloudflare Pages** - Serverless deployment

## 📋 Prerequisites

- Node.js 18+
- npm or pnpm
- Cloudflare account (for deployment)
- Wrangler CLI (install with `npm install -g wrangler`)
- SQLite3 (for local development database)

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/Kampouse/near-starter-kit
cd near-starter-kit

# Install dependencies
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🧪 Testing

Run end-to-end tests with Playwright:

```bash
# Run tests
npm run test:e2e

# Run tests with UI
npm run test:e2e:ui
```

## 🏗️ Building

Build your application for production:

```bash
npm run build
```

The built files will be in the `./dist` directory.

## 🌐 Deployment

### Deploy to Cloudflare Pages

```bash
npm run deploy
```

This command:
1. Builds the application
2. Deploys the `./dist` folder to Cloudflare Pages using Wrangler
3. Provides a live URL for your deployed app

### Local Preview

Preview your production build locally before deploying:

```bash
npm run cf-dev
```

## 📁 Project Structure

```
near-starter-kit/
├── src/
│   ├── assets/          # Static assets (logos, images)
│   ├── components/      # Reusable React components
│   │   ├── cards.tsx    # Feature cards
│   │   └── navigation.tsx  # Navigation with SIWN auth
│   ├── hooks/           # Custom React hooks
│   │   └── useNearWallet.ts  # Wallet hook (legacy)
│   ├── lib/             # Core libraries
│   │   ├── auth.ts      # Better Auth server config
│   │   ├── auth-client.ts  # Auth client with SIWN
│   │   └── connector.ts # NEAR connector configuration
│   ├── pages/           # Page components
│   │   └── home.tsx     # Home page
│   ├── routes/          # TanStack Router routes
│   │   ├── __root.tsx   # Root layout
│   │   └── index.tsx    # Index route
│   ├── styles/          # Global styles
│   │   └── globals.css  # NEAR-themed CSS
│   ├── App.tsx          # Main app with router
│   └── main.tsx         # Entry point
├── e2e/                 # Playwright E2E tests
│   └── app.spec.ts      # App tests
├── worker.ts            # Hono backend (Cloudflare Worker)
├── playwright.config.ts # Playwright configuration
├── vite.config.js       # Vite + TanStack Router plugin
├── wrangler.toml        # Cloudflare configuration
└── package.json         # Dependencies and scripts
```

## 🔐 Authentication (SIWN)

This starter uses [Better Auth](https://better-auth.com) with the [better-near-auth](https://github.com/elliotBraem/better-near-auth) plugin for Sign in with NEAR.

### Database Setup

The auth system uses Drizzle ORM with SQLite for local development:

```bash
# Generate database migrations
pnpm drizzle-kit generate

# Push schema to database
pnpm drizzle-kit push
```

The database schema includes:
- **user** - User accounts with roles and ban status
- **session** - User sessions with IP and user agent tracking
- **account** - OAuth provider accounts
- **verification** - Email/phone verification codes
- **nearAccount** - NEAR wallet linkage (required by better-near-auth)

### Two-Step Auth Flow

```tsx
// Step 1: Connect wallet
await authClient.requestSignIn.near(
  { recipient: "your-app.com" },
  { onSuccess: () => console.log("Connected!") }
);

// Step 2: Sign message to authenticate
await authClient.signIn.near(
  { recipient: "your-app.com" },
  { onSuccess: () => console.log("Signed in!") }
);
```

### Access User Session

```tsx
const { data: session } = authClient.useSession();
const profile = await authClient.near.getProfile();
```

### Reset Database

To reset the database (delete and recreate):

```bash
rm -f dev.db dev.db-shm dev.db-wal
pnpm drizzle-kit push
```

## 🔑 Key Libraries

### TanStack Router
[Documentation](https://tanstack.com/router/latest)

- Type-safe routing
- Built-in data loading
- Search params state management
- Code splitting support

### Hono
[Documentation](https://hono.dev)

- Ultra-fast web framework
- Runs on Cloudflare Workers
- TypeScript-first
- Middleware support

### Better Auth + SIWN
[Documentation](https://better-auth.com)

- NEP-413 compliant message signing
- NEAR Social profile integration
- Session management
- Anonymous auth support

### @hot-labs/kit
[GitHub](https://github.com/hot-dao/hot-connector)

- Seamless NEAR wallet connection
- Smart contract interaction helpers

## 📚 Resources

- [NEAR Documentation](https://docs.near.org/build/web3-apps/quickstart)
- [TanStack Router](https://tanstack.com/router/latest)
- [TanStack Query](https://tanstack.com/query/latest)
- [Hono](https://hono.dev)
- [Better Auth](https://better-auth.com)
- [better-near-auth](https://github.com/elliotBraem/better-near-auth)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Playwright](https://playwright.dev)

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to Cloudflare Pages |
| `npm run cf-dev` | Preview Cloudflare build locally |
| `npm run test:e2e` | Run Playwright tests |
| `npm run test:e2e:ui` | Run tests with UI |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this starter kit for your projects!

---

Made with ❤️ for the NEAR ecosystem
