import { db } from "@/lib/db";
import { kanban } from "@/schema/kanban";
import { eq } from "drizzle-orm";
import type { App } from "@/app";
import { createInsertSchema, createSelectSchema } from "drizzle-typebox";
import { t } from "elysia";

const _createKanban = createInsertSchema(kanban);
const createKanban = t.Omit(_createKanban, [
  "id",
  "userId",
  "createdAt",
  "updatedAt",
]);

export const kanbanRoutes = (app: App) =>
  app
    .get("/kanban", ({ user, error }) => {
      if (!user) return error(401);

      return db.select().from(kanban).where(eq(kanban.userId, user.id));
    })
    .post(
      "/kanban",
      ({ user, body, error }) => {
        if (!user) return error(401);

        return db.insert(kanban).values({
          userId: user.id,
          jsonSync: body,
        });
      },
      {
        body: createKanban,
      }
    );
