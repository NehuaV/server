import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { authService } from "@/api/auth";
import { helloworldService } from "@/api/helloworld";

export const app = new Elysia()
  .use(swagger())
  .use(authService)
  .use(helloworldService);
