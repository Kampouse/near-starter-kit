import { Hono } from 'hono';
import { cors } from 'hono/cors';

type Env = {
  ASSETS: Fetcher;
  NEAR_NETWORK: string;
};

const app = new Hono<{ Bindings: Env }>();

// Enable CORS for API routes
app.use('/api/*', cors());

// Health check endpoint
app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    network: c.env.NEAR_NETWORK || 'testnet',
  });
});

// API routes placeholder
app.all('/api/*', (c) => {
  return c.json({ error: 'API endpoint not implemented' }, 404);
});

// SPA fallback - let Cloudflare Pages handle all other routes
app.all('/*', async (c) => {
  return c.env.ASSETS.fetch(c.req.raw);
});

export default app;
