import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import colors from "colors"
import dotenv from 'dotenv'
import connectDB from './config/db.js'
dotenv.config()
const app = express()
const PORT = 5000
app.use(express.json())

import todoRoutes from './routes/todoRoutes.js'

connectDB()
// app.use(bodyParser.urlencoded({ extended: true }))

// app.use(express.static("public"))

//  the completed task array with initial placeholders for removed task
// var complete = ["finish jquery"];

// app.post('/removetask', (req, res) => {
//     var completeTask = req.body.check

//  check for the "typeof" the different completed task, then add into the complete task
    // if (typeof completeTask === "string") {
    //     complete.push(completeTask)
//  check if the completed task already exist in the task when checked, then remove using the array splice method
//         tasks.splice(tasks.indexOf(completeTask), 1)
//     } else if (typeof completeTask === "object") {
//         for (var i = 0; i < completeTask.length; i++) {
//         complete.push(completeTask[i])
//         tasks.splice(tasks.indexOf(completeTask[i]), 1)
//         }
//     }
//     res.redirect("/")
// })

app.use('/taskdata', todoRoutes)

//  post route for adding new task
// app.post('/addtask', (req, res) => {
  // let newTask = req.body.newTask
//  add the new task from the post route into the array
  // tasks.push(newTask)
//  after adding to the array go back to the root route
//   res.redirect("/")
// })

app.listen(
    PORT, 
    console.log(`Server is running on port ${PORT}`)
)