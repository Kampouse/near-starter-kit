import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors';
import { auth } from './src/lib/auth';

const app = new Hono();

// Enable CORS
app.use('/api/*', cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true,
}));
app.use('/auth/*', cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true,
}));

// Better Auth handler
app.all('/api/auth/*', async (c) => {
  return auth.handler(c.req.raw);
});

app.all('/auth/*', async (c) => {
  return auth.handler(c.req.raw);
});

// Health check
app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    network: 'testnet',
  });
});

const port = 8788;

console.log(`Development API server running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
