import express from "express"
const router = express.Router()
import { createTodo, deleteTodo, getTodoById, getTodos } from "../controllers/todoController.js"

router.route('/')
    .get(getTodos)
    .post(createTodo)
    

router.route('/:id')
    .get(getTodoById)
    .delete(deleteTodo)

export default router