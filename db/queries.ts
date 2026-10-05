import { count } from "drizzle-orm";
import { db } from "./index";
import { products } from "./schema";

export async function getProducts(page = 1, pageSize = 6) {
  // offset — сколько товаров пропустить с начала списка.
  // Страница 1: (1 - 1) * 6 = 0  → берём товары 1–6
  // Страница 2: (2 - 1) * 6 = 6  → берём товары 7–12
  const offset = (page - 1) * pageSize;

  const productList = await db
    .select()
    .from(products)
    .limit(pageSize) // сколько строк взять
    .offset(offset); // сколько строк пропустить

  // Считаем все товары в таблице, чтобы узнать число страниц.
  const result = await db.select({ total: count() }).from(products);
  const total = result[0].total;
  const pages = Math.ceil(total / pageSize);

  return { products: productList, pages };
}
