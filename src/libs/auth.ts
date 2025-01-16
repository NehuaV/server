import { betterAuth } from "better-auth";
import { APIError } from "better-auth/api";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/db";
import * as authSchema from "@/db/schema/auth-schema";

export const auth = betterAuth({
  baseURL: "http://localhost:4000",
  trustedOrigins: ["http://localhost:3000"],
  database: drizzleAdapter(db, {
    usePlural: true,
    provider: "pg",
    schema: {
      ...authSchema,
    },
  }),
  plugins: [],
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
});
