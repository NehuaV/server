import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db";
import { users, sessions, accounts, verifications } from "@/schema/auth-schema";
import { env } from "@/env";

export const auth = betterAuth({
  baseURL: env.BASE_URL,
  trustedOrigins: [env.FE_URL],
  database: drizzleAdapter(db, {
    usePlural: true,
    provider: "pg",
    schema: {
      users,
      sessions,
      accounts,
      verifications,
    },
  }),
  // plugins: [],
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
});
