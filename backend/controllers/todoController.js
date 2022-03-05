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

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/no-image.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

export { getTodos, getTodoById }
