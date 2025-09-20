import express from "express";
import toDoListRoutes from "./routes/toDoListRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
connectDB();

app.use("/api/todo", toDoListRoutes);

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
