import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  slug: text("slug").notNull(),
});

export const flashcards = pgTable("flashcards", {
  id: uuid("id").primaryKey().defaultRandom(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  slug: text("slug").notNull(),
  categoryId: uuid("categoryId").references(() => categories.id),
});

export type NewCateogry = typeof categories.$inferInsert;
export type Cateogry = typeof categories.$inferSelect;

export type NewFlashcard = typeof flashcards.$inferInsert;
export type Flashcard = typeof flashcards.$inferSelect;
