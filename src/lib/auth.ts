import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db";
import { users, sessions, accounts, verifications } from "@/schema/auth-schema";

export const auth = betterAuth({
  baseURL: "http://localhost:4000",
  trustedOrigins: ["http://localhost:3000"],
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
