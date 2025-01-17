// @ts-expect-error weird type error
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string(),
    PGLITE: z.coerce.boolean(),
    NODE_ENV: z.union([
      z.literal("development"),
      z.literal("production"),
      z.literal("test"),
    ]),
    PORT: z.string().optional().default("4000"),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
