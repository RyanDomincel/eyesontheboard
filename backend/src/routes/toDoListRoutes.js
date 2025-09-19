import express from "express";
import {
  addToDoItem,
  getAllToDoList,
  getToDoItemById,
  updateToDoItem,
  deleteToDoItem,
} from "../controllers/toDoListController.js";

const router = express.Router();

router.get("/", getAllToDoList);

router.post("/", addToDoItem);
router.get("/:id", getToDoItemById);
router.put("/:id", updateToDoItem);
router.delete("/:id", deleteToDoItem);
export default router;
