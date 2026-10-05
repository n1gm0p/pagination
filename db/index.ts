import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";

// Файл базы создаётся в корне проекта.
const sqlite = new Database("sqlite.db");

export const db = drizzle(sqlite);
