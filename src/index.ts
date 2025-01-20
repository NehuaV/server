import { authService } from "./api/auth";
import { helloworldService } from "./api/helloworld";
import { kanbanRoutes } from "./api/kanban";
import { app } from "./app";
import { env } from "@/env";

export const server = app
  .group("/api", (app) =>
    app.use(authService).use(helloworldService).use(kanbanRoutes)
  )
  .get("/", () => "hi");

server.listen(env.PORT);

console.log(`Elysia: http://${app.server?.hostname}:${app.server?.port}`);
