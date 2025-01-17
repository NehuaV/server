import { db } from "@/lib/db";
import { kanban } from "@/schema/kanban";
import { eq } from "drizzle-orm";
import type { App } from "@/app";
import { t } from "elysia";
import { createInsertSchema } from "drizzle-typebox";
import { commonResponses } from "@/utils/responseSchemas";

const _createKanban = createInsertSchema(kanban);
const createKanban = t.Omit(_createKanban, [
  "id",
  "userId",
  "createdAt",
  "updatedAt",
]);

export const kanbanRoutes = (app: App) =>
  app
    .get(
      "/kanban",
      async ({ user, error }) => {
        if (!user) return error(401, "Unauthorized");

        const data = await db
          .select()
          .from(kanban)
          .where(eq(kanban.userId, user.id));

        return {
          data: data,
          message: "Kanban fetched successfully",
        };
      },
      {
        response: {
          200: commonResponses[200],
          401: commonResponses[401],
        },
      }
    )
    .post(
      "/kanban",
      async ({ user, body, error }) => {
        if (!user) return error(401, "Unauthorized");

        const data = await db.insert(kanban).values({
          userId: user.id,
          jsonSync: body,
        });

        return {
          data: data,
          message: "Kanban created successfully",
        };
      },
      {
        body: createKanban,
        response: {
          200: commonResponses[200],
          401: commonResponses[401],
        },
      }
    );
