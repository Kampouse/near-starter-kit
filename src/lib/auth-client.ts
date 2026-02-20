import { createAuthClient } from "better-auth/client";
import { siwnClient } from "better-near-auth/client";

export const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_AUTH_URL || "http://localhost:8788",
  plugins: [
    siwnClient({
      domain: "near-starter-kit.pages.dev",
      networkId: "testnet",
    }),
  ],
});
