import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { auth } from './src/lib/auth';

type Env = {
  ASSETS: Fetcher;
  NEAR_NETWORK: string;
  BETTER_AUTH_SECRET: string;
};

const app = new Hono<{ Bindings: Env }>();

// Enable CORS for API routes
app.use('/api/*', cors());
app.use('/auth/*', cors());

// Better Auth handler
app.all('/auth/*', async (c) => {
  return auth.handler(c.req.raw);
});

// Health check endpoint
app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    network: c.env.NEAR_NETWORK || 'testnet',
  });
});

// Better Auth API routes (including better-near-auth endpoints like /api/auth/near/nonce)
app.all('/api/auth/*', async (c) => {
  return auth.handler(c.req.raw);
});

// Other API routes placeholder
app.all('/api/*', (c) => {
  return c.json({ error: 'API endpoint not implemented' }, 404);
});

// SPA fallback - let Cloudflare Pages handle all other routes
app.all('/*', async (c) => {
  return c.env.ASSETS.fetch(c.req.raw);
});

export default app;
