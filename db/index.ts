import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { config } from 'dotenv';

// Load environment variables from .env.local
config({ path: '.env.local' });

// Create a database connection
export const db = drizzle(sql);

