import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// Описание таблицы products. Drizzle по этой схеме понимает,
// какие колонки есть в SQLite.
export const products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title"),
  price: integer("price"),
  description: text("description"),
  image: text("image"),
});

// Тип одной строки из таблицы. Удобно передавать в ProductCard.
export type Product = typeof products.$inferSelect;
