/* eslint-disable @typescript-eslint/no-require-imports */
const { drizzle } = require('drizzle-orm/vercel-postgres');
const { migrate } = require('drizzle-orm/vercel-postgres/migrator');
const { sql } = require('@vercel/postgres');
const { config } = require('dotenv');

// Load environment variables from .env.local
config({ path: '.env.local' });

async function main() {
  console.log('Running migrations...');
  
  try {
    // Initialize the database connection
    const db = drizzle(sql);
    
    // Run migrations
    await migrate(db, { migrationsFolder: './migrations' });
    
    console.log('Migrations completed successfully!');
  } catch (error) {
    console.error('Error running migrations:', error);
    process.exit(1);
  }
}

main(); 