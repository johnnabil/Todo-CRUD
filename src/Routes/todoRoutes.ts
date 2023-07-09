import { Router } from "express";
import { getTodos, getUsers, createUser, getTodoById, createTodo, updateTodo, deleteTodo, deleteAllTodos, getUserTodos } from "../Controllers/todoController";

const router = Router();

router.get("/todos", getTodos);
router.get("/users", getUsers);
router.get("/todos/:id", getTodoById);
router.post("/todos", createTodo);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);
router.delete("/todos", deleteAllTodos);
router.get("/users/:id/todos", getUserTodos);
router.post("/users", createUser);

export default router;