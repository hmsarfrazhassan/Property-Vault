import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Connection config
dotenv.config({ path: "property-vault-api/config/config.env" });

// Database connection
connectDB();
const app = express();

// middleware
app.use(express.json());

// Server running port
const port = process.env.PORT || 5000;

// Server connection
const server = app.listen(port, () => {
  console.log(
    `Server is running on the port ${port} in environment ${process.env.NODE_ENV}`,
  );
});
