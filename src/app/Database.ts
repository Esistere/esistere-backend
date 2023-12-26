import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export class Database {
  private static pool: Pool;
  private static config = {
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: Number(process.env.POSTGRES_PORT),
  };

  private constructor() {}

  public static getInstance(): Pool {
    if (!Database.pool) Database.pool = new Pool(Database.config);
    return Database.pool;
  }
}
