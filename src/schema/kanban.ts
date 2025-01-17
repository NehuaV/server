import {
  pgTable,
  text,
  timestamp,
  jsonb,
  serial,
  integer,
} from "drizzle-orm/pg-core";
import { users } from "./auth-schema";
import { relations } from "drizzle-orm";

export const kanban = pgTable("kanban", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  userId: text("userId")
    .notNull()
    .references(() => users.id),
  jsonSync: jsonb("jsonSync").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .defaultNow()
    .$onUpdateFn(() => new Date()),
});

export const kanbanRelations = relations(kanban, ({ one }) => ({
  user: one(users, {
    fields: [kanban.userId],
    references: [users.id],
  }),
}));

export type Kanban = typeof kanban.$inferSelect;
export type NewKanban = typeof kanban.$inferInsert;
