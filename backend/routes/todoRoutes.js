import express from "express"
const router = express.Router()
import { createTodo, deleteTodo, editTodo, getTodoById, getTodos } from "../controllers/todoController.js"

router.route('/')
    .get(getTodos)
    .post(createTodo)
    

router.route('/:id')
    .get(getTodoById)
    .delete(deleteTodo)
    .put(editTodo)

export default router