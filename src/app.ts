import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { userMiddleware } from "./lib/middleware";
import cors from "@elysiajs/cors";
import { logger } from "@bogeychan/elysia-logger";

export const app = new Elysia()
  .use(swagger())
  .use(
    cors({
      origin: "http://localhost:3000",
      allowedHeaders: ["Content-Type", "Authorization"],
      methods: ["POST", "GET", "OPTIONS", "DELETE", "PUT", "PATCH"],
      exposeHeaders: ["Content-Length", "X-Request-Id"],
      maxAge: 600,
      credentials: true,
    }).use(
      logger({
        level: "info",
        stream: process.stdout,
      })
    )
  )
  .derive(({ request }) => userMiddleware(request));

export type App = typeof app;
