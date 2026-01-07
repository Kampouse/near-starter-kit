interface Env {
  ASSETS: Fetcher;
  NEAR_NETWORK: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Health check endpoint
    if (url.pathname === '/health') {
      return new Response(
        JSON.stringify({
          status: 'ok',
          timestamp: new Date().toISOString(),
          network: env.NEAR_NETWORK || 'testnet',
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Handle API routes if needed in the future
    if (url.pathname.startsWith('/api/')) {
      return new Response(
        JSON.stringify({ error: 'API endpoint not implemented' }),
        {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    // Let Cloudflare Pages handle all other routes (SPA)
    return env.ASSETS.fetch(request);
  },
};
