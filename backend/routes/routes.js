import express from "express";
import { addTodo , getAllTodos, toggleCurrentTodo, updateCurrentTodo, deleteCurrentTodo } from "../controller/todo-controller.js";

const route = express.Router();

route.post("/todos", addTodo);
route.get("/todos", getAllTodos);
route.get("/todos/:id", toggleCurrentTodo);
route.put("/todos/:id", updateCurrentTodo);
route.delete("/todos/:id", deleteCurrentTodo);

export default route;
