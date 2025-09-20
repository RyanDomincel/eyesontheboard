import ToDoList from "../models/toDoListModel.js";

export async function getAllToDoList(req, res) {
  try {
    const toDoItems = await ToDoList.find();
    res.status(200).json(toDoItems);
  } catch (error) {
    console.error("Error fetching to-do items:", error);
    res.status(500).json({ message: "Server error", error });
  }
}
export function addToDoItem(req, res) {
  // Logic to add a new to-do item
  res.status(201).json({ message: "To-Do item added!" });
}
export function updateToDoItem(req, res) {
  // Logic to update a specific to-do item by ID
  res.status(200).json({ message: `To-Do item ${req.params.id} updated` });
}
export function getToDoItemById(req, res) {
  // Logic to get a specific to-do item by ID
  res.status(200).json({ message: `To-Do item ${req.params.id} details` });
}
export function deleteToDoItem(req, res) {
  // Logic to delete a specific to-do item by ID
  res.status(200).json({ message: `To-Do item ${req.params.id} deleted` });
}
