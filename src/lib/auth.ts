import { betterAuth } from "better-auth";
import { siwn } from "better-near-auth";

export const auth = betterAuth({
  database: {
    // In-memory for development - replace with D1 for production
    adapter: {
      create: async ({ model, data }) => data,
      read: async ({ model, where }) => null,
      update: async ({ model, where, data }) => data,
      delete: async ({ model, where }) => null,
      findOne: async ({ model, where }) => null,
      findMany: async ({ model, where }) => [],
    },
  },
  plugins: [
    siwn({
      recipient: "near-starter-kit.pages.dev",
      anonymous: true,
    }),
  ],
});

export type Auth = typeof auth;
