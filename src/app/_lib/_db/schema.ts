import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

enum Role {
  Admin = "admin",
  User = "user",
}

const timestamps = {
    updated_at: timestamp(),
    created_at: timestamp().defaultNow().notNull(),
    deleted_at: timestamp(),
  }

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  age: integer("age").notNull(),
  email: text("email").notNull().unique(),
  role: text("role").notNull().default(Role.User),
  ...timestamps,
});

