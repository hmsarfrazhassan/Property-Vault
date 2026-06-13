import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import societyRoutes from "./routes/societyRoutes.js";

// Connection config
dotenv.config({ path: "property-vault-api/config/config.env" });

// Database connection
connectDB();
const app = express();

// middleware
app.use(express.json());

// all routes
app.use("/api/v1/society", societyRoutes);

// Server running port
const port = process.env.PORT || 5000;

// Server connection
const server = app.listen(port, () => {
  console.log(
    `Server is running on the port ${port} in environment ${process.env.NODE_ENV}`,
  );
});
