import { defineConfig } from "drizzle-kit";
import { env } from "@/env";

const extendConfig = env.PGLITE ? { driver: "pglite" } : {};

export default defineConfig({
  schema: "./src/schema/*",
  out: "./drizzle",
  dialect: "postgresql",
  casing: "camelCase",
  ...extendConfig,
  dbCredentials: {
    url: env.PGLITE ? "./.db" : env.DATABASE_URL ?? "",
  },
});
