import asyncHandler from 'express-async-handler'
import Todo from "../models/todo-model.js"

// @desc    Fetch all todos
// @route   GET /taskdata
// @access  Public
const getTodos = asyncHandler(async (req, res) => {
    const todos = await Todo.find()

    res.json({ todos })
})

// @desc    Fetch single todo
// @route   GET /taskdata/:id
// @access  Public
const getTodoById = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id)

  if (todo) {
    res.json(todo)
  } else {
    res.status(404)
    throw new Error("Task not found")
  }
})

// @desc    Create a todo
// @route   POST /taskdata
// @access  Public
const createTodo = asyncHandler(async (req, res) => {
 
    const todo = new Todo({
    name: req.body.name,
    complete: false
  })

  const createdTodo = await todo.save()
  res.status(201).json(createdTodo)
})

// @desc    Delete a todo
// @route   DELETE /taskdata
// @access  Public
const deleteTodo = asyncHandler(async (req, res) => {
 const todo = await Todo.findById(req.params.id)

 if (todo) {
   await todo.remove()
   res.json({ message: "Todo removed" })
 } else {
   res.status(404)
   throw new Error("Todo not found")
 }
})

export { getTodos, getTodoById, createTodo, deleteTodo }
