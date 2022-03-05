import mongoose from "mongoose"
const Schema = mongoose.Schema

let todoSchema = new Schema(
  {
    name: { type: String, required: true },
    complete: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
)

const Todo = mongoose.model('Todo', todoSchema)

export default Todo