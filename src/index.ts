import { authService } from "./api/auth";
import { helloworldService } from "./api/helloworld";
import { kanbanRoutes } from "./api/kanban";
import { app } from "./app";
import { env } from "@/env";
const PORT = env.PORT || 4000;
app
  .group("/api", (app) =>
    app.use(authService).use(helloworldService).use(kanbanRoutes)
  )
  .listen(PORT);

console.log(`Elysia: http://${app.server?.hostname}:${app.server?.port}`);
