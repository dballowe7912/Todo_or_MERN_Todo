import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FilterButton from './components/FilterButton';
import Todo from './components/Todo';
import Form from './components/Form';

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.complete,
  Completed: task => task.complete
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

function App(props) {
  
  const [ taskData, setTaskData ] = useState([])
  const [ tasks, setTasks ] = useState(props.tasks)
  const [filter, setFilter] = useState("All")

  useEffect(() => {
    const fetchData = () =>  { 
      fetch('/taskdata')
      .then(response => response.json())
      .then(data => setTaskData(data.todos))
    }

    fetchData()
  }, [taskData, tasks])

  const addTask = (name) => {
    const newTask = {
      name: name,
      complete: false
    }

    axios.post('/taskdata', newTask)
  }

  const deleteTask = (id) => {
    axios.delete(`/taskdata/${id}`)
  }

  const editTask = (id, newName) => {
    const editedTask = {
      name: newName,
      complete: false
    }

    axios.put(`/taskdata/${id}`, editedTask)
  }

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, complete: !task.complete}
      }
      return task
    })
    setTasks(updatedTasks)
  }

  const taskList = taskData
  .filter(FILTER_MAP[filter])
  .map(task => (
    <Todo 
      id={task._id}
      key={task._id}
      name={task.name} 
      complete={task.complete} 
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ))

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton 
      key={name} 
      name={name} 
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ))

  const tasksNoun = taskData.length === 1 ? 'task' : 'tasks' 
  const headingText = `${taskData.length} ${tasksNoun} remaining`

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
        <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  )
}

export default App;
