import { sql } from "drizzle-orm";
import { db } from "./index";
import { products } from "./schema";

// Картинки лежат в папке public.
// Путь в БД — это просто строка: /product-1.jpg
// Next.js отдаёт файл public/product-1.jpg по адресу http://localhost:3000/product-1.jpg
const seedProducts = [
  { title: "Ноутбук ASUS", price: 54990, description: "Ноутбук для учёбы и работы.", image: "/product-1.jpg" },
  { title: "Мышь Logitech", price: 2490, description: "Беспроводная мышь для компьютера.", image: "/product-2.jpg" },
  { title: "Клавиатура Keychron", price: 8990, description: "Механическая клавиатура.", image: "/product-3.jpg" },
  { title: "Наушники Sony", price: 12990, description: "Беспроводные наушники.", image: "/product-4.jpg" },
  { title: "Смартфон Samsung", price: 39990, description: "Смартфон с большим экраном.", image: "/product-5.jpg" },
  { title: "Планшет Apple", price: 45990, description: "Планшет для учёбы и рисования.", image: "/product-6.jpg" },
  { title: "Монитор LG", price: 18990, description: "Монитор 27 дюймов.", image: "/product-7.jpg" },
  { title: "Веб-камера Logitech", price: 5990, description: "Камера для видеозвонков.", image: "/product-8.jpg" },
  { title: "Колонка JBL", price: 4990, description: "Портативная Bluetooth-колонка.", image: "/product-9.jpg" },
  { title: "Флешка Kingston", price: 990, description: "USB-флешка на 64 ГБ.", image: "/product-10.jpg" },
  { title: "Внешний SSD", price: 7990, description: "Портативный диск на 1 ТБ.", image: "/product-11.jpg" },
  { title: "Роутер TP-Link", price: 3490, description: "Wi-Fi роутер для дома.", image: "/product-12.jpg" },
  { title: "Микрофон Fifine", price: 4290, description: "USB-микрофон для стримов.", image: "/product-13.jpg" },
  { title: "Смарт-часы Xiaomi", price: 5990, description: "Часы с шагомером.", image: "/product-14.jpg" },
  { title: "Пауэрбанк Xiaomi", price: 2190, description: "Зарядка на 20000 мАч.", image: "/product-15.jpg" },
  { title: "Принтер HP", price: 11990, description: "Лазерный принтер для дома.", image: "/product-16.jpg" },
  { title: "Игровая мышь Razer", price: 5490, description: "Мышь для игр.", image: "/product-17.jpg" },
  { title: "Геймпад Xbox", price: 6290, description: "Беспроводной контроллер.", image: "/product-18.jpg" },
  { title: "Наушники AirPods", price: 14990, description: "Беспроводные вкладыши.", image: "/product-19.jpg" },
  { title: "Зарядка USB-C", price: 1490, description: "Блок питания 65 Вт.", image: "/product-20.jpg" },
  { title: "Кабель HDMI", price: 790, description: "Кабель для монитора, 2 метра.", image: "/product-21.jpg" },
  { title: "Подставка для ноутбука", price: 1990, description: "Алюминиевая подставка.", image: "/product-22.jpg" },
  { title: "Клавиатура Logitech", price: 3290, description: "Беспроводная клавиатура.", image: "/product-23.jpg" },
  { title: "Монитор Samsung", price: 22990, description: "Игровой монитор 165 Гц.", image: "/product-24.jpg" },
  { title: "Ноутбук Lenovo", price: 47990, description: "Ноутбук для офиса.", image: "/product-25.jpg" },
  { title: "Планшет Samsung", price: 27990, description: "Планшет со стилусом.", image: "/product-26.jpg" },
  { title: "Колонка Яндекс", price: 6990, description: "Умная колонка с Алисой.", image: "/product-27.jpg" },
  { title: "Наушники JBL", price: 3990, description: "Накладные наушники.", image: "/product-28.jpg" },
  { title: "Мышь Apple Magic", price: 7490, description: "Беспроводная мышь для Mac.", image: "/product-29.jpg" },
  { title: "Док-станция Anker", price: 8990, description: "USB-C хаб для ноутбука.", image: "/product-30.jpg" },
];

async function seed() {
  // Пересоздаём таблицу, чтобы схема всегда совпадала с db/schema.ts
  db.run(sql`DROP TABLE IF EXISTS products`);
  db.run(sql`
    CREATE TABLE products (
      id integer PRIMARY KEY AUTOINCREMENT,
      title text,
      price integer,
      description text,
      image text
    )
  `);

  await db.delete(products);
  await db.insert(products).values(seedProducts);

  console.log("Добавлено товаров:", seedProducts.length);
}

seed();
