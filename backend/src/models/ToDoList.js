import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const ToDoList = mongoose.model("ToDoList", toDoSchema);

export default ToDoList;
