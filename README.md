# NEAR Protocol Starter Kit

A modern, production-ready template for building Web3 applications on the NEAR blockchain. Powered by Hot Labs, TanStack Query, and deployed on Cloudflare Pages.

## ✨ Features

- 🚀 **Modern Stack**: Built with React 19, TypeScript, and Tailwind CSS v4
- 🔗 **NEAR Integration**: Seamless wallet connection using @hot-labs/kit
- ⚡ **Data Fetching**: Powerful caching and synchronization with TanStack Query
- 🌐 **Cloudflare Deployment**: Optimized for Cloudflare Pages with automatic HTTPS
- 🧪 **Testing Support**: Compatible with NEAR Workspaces JS for smart contract testing
- 🎨 **Beautiful Design**: NEAR Protocol branded styling with dark mode support
- 📱 **Responsive**: Mobile-first design with smooth animations

## 🛠️ Tech Stack

- **React 19** - Latest React with new features
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - Modern utility-first styling
- **React Router v7** - Client-side routing
- **TanStack Query** - Data fetching, caching, and synchronization
- **Vite** - Lightning-fast build tool
- **@hot-labs/kit** - NEAR wallet integration
- **Cloudflare Pages** - Serverless deployment

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Cloudflare account (for deployment)
- Wrangler CLI (install with `npm install -g wrangler`)

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd pnl

# Install dependencies
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

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
pnl/
├── src/
│   ├── assets/          # Static assets (logos, images)
│   ├── components/      # Reusable React components
│   │   ├── cards.tsx    # Feature cards
│   │   └── navigation.tsx  # Navigation bar with wallet connection
│   ├── hooks/           # Custom React hooks
│   │   └── useNearWallet.ts  # Hot Labs wallet hook
│   ├── lib/             # Utility libraries
│   │   └── connector.ts  # NEAR connector configuration
│   ├── pages/           # Page components
│   │   └── home.tsx     # Home page
│   ├── styles/          # Global styles
│   │   └── globals.css  # NEAR-themed CSS variables
│   ├── App.tsx          # Main app component
│   ├── config.ts        # App configuration
│   └── main.tsx         # Entry point
├── worker.ts            # Cloudflare Worker configuration (if needed)
├── vite.config.js       # Vite configuration
├── wrangler.toml        # Cloudflare Wrangler configuration
└── package.json         # Dependencies and scripts
```

## 🔑 Key Libraries

### @hot-labs/kit
[GitHub](https://github.com/hot-dao/hot-connector)

- Seamless NEAR wallet connection
- Smart contract interaction helpers
- Built-in authentication management
- React hooks for easy integration

### TanStack Query
[Documentation](https://tanstack.com/query/latest/docs/react/overview)

- Optimistic updates
- Automatic refetching
- Smart caching
- Loading states and error handling

### NEAR Workspaces JS
[GitHub](https://github.com/near/near-workspaces-js)
(Add to devDependencies for smart contract testing)

- Test smart contracts in sandboxed environments
- Mock accounts and contract deployments
- Fast testing without gas costs
- Integration with popular testing frameworks

## 🎨 Customization

### Styling

The app uses NEAR Protocol's brand colors with CSS variables defined in `src/styles/globals.css`:

```css
:root {
    --primary-glow: /* NEAR green gradient */
    --secondary-glow: /* Secondary glow effect */
    --tile-start-rgb: /* Tile colors */
    --card-rgb: /* Card backgrounds */
    --card-border-rgb: /* NEAR green borders */
}
```

### Wallet Configuration

Configure your NEAR wallet connection in `src/lib/connector.ts`:

```typescript
import { hotConnector } from '@/lib/connector';

// The hotConnector is pre-configured and ready to use
// See src/hooks/useNearWallet.ts for implementation details
```

## 📚 Resources

- [NEAR Documentation](https://docs.near.org/build/web3-apps/quickstart)
- [@hot-labs/kit](https://github.com/hot-dao/hot-connector)
- [TanStack Query Docs](https://tanstack.com/query/latest/docs/react/overview)
- [NEAR Workspaces JS](https://github.com/near/near-workspaces-js)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [React 19 Docs](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## 🧪 Testing

Set up testing with NEAR Workspaces JS:

```bash
npm install --save-dev @near-wallet-selector/testing
```

Create test files in your project structure and use the workspaces environment for contract testing.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to Cloudflare Pages
- `npm run cf-dev` - Preview Cloudflare build locally
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this starter kit for your projects!

## 🙏 Acknowledgments

- Built with [NEAR Protocol](https://near.org/)
- Powered by [@hot-labs/kit](https://github.com/hot-dao/hot-connector)
- Styled with [Tailwind CSS v4](https://tailwindcss.com/)
- Deployed on [Cloudflare Pages](https://pages.cloudflare.com/)

---

Made with ❤️ for the NEAR ecosystem