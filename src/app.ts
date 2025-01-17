import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { userMiddleware } from "./lib/middleware";

export const app = new Elysia()
  .use(swagger())
  .derive(({ request }) => userMiddleware(request));

export type App = typeof app;
