import express from "express"
const router = express.Router()
import { getTodoById, getTodos } from "../controllers/todoController.js"

router.route('/').get(getTodos)
router.route('/:id').get(getTodoById)

export default router