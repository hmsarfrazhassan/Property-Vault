import mongoose from "mongoose";

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.DB_URI);
  console.log(`DB is connected on host ${conn.connection.host}`);
};

export default connectDB;
