CREATE TABLE "kanban" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"jsonSync" jsonb NOT NULL,
	"createdAt" timestamp NOT NULL,
	"updatedAt" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "kanban" ADD CONSTRAINT "kanban_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;