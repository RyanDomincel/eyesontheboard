import express from "express";
import toDoListRoutes from "./routes/toDoListRoutes.js";
import { connectDB } from "../config/db.js";

const app = express();
connectDB();

app.use("/api/todo", toDoListRoutes);

app.listen(5001, () => {
  console.log("Server is running on PORT: 5001");
});
