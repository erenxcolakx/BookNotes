import pg from 'pg';
import env from "dotenv";

env.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

db.connect()
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.error('An error occurred while connecting:', error);
  });

export default db;
