import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config({ path: "property-vault-api/config/config.env" });

connectDB();
const app = express();
const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(
    `Server is running on the port ${port} in environment ${process.env.NODE_ENV}`,
  );
});
