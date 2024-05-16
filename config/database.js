import { Sequelize } from "sequelize";
import "dotenv/config";

const database = new Sequelize(
  process.env.DATABASE,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: "postgres",
    timezone: "UTC",
  }
);

export default database;
