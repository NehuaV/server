import { Elysia, type Context } from "elysia";
import { auth } from "../libs/auth";

const betterAuthView = (context: Context) => {
  const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"];
  // validate request method
  if (BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
    return auth.handler(context.request);
  }

  context.error(405);
};

export const authService = new Elysia().all("/api/auth/*", betterAuthView);
