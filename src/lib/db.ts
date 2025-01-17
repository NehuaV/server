import { drizzle as pgDrizzle } from "drizzle-orm/node-postgres";
import { drizzle as pgliteDrizzle } from "drizzle-orm/pglite";
import { env } from "../../env";
import { type DrizzleConfig, sql } from "drizzle-orm";

export const dbConfig: DrizzleConfig = {
  casing: "snake_case",
};

export const connection = env.PGLITE
  ? process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development"
    ? // in-memory database for tests
      {}
    : { dataDir: "./.db" }
  : {
      connectionString: env.DATABASE_URL,
      connectionTimeoutMillis: 10000,
    };

export const db = env.PGLITE
  ? pgliteDrizzle({ connection, ...dbConfig })
  : pgDrizzle({ connection, ...dbConfig });
