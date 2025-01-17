import type { Context } from "elysia";
import { auth } from "../lib/auth";
import type { App } from "@/app";

const betterAuthView = (context: Context) => {
  const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"];
  // validate request method
  if (BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
    return auth.handler(context.request);
  }

  context.error(405);
};

export const authService = (app: App) => app.all("/auth/*", betterAuthView);
