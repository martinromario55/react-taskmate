import React from 'react'
import './AddTask.css'

import { useState } from 'react'

export const AddTask = ({ tasks, setTasks }) => {
  const [taskValue, setTaskValue] = useState('')
  const [progress, setProgress] = useState(false)

  const handleChange = event => {
    // console.log(event.target.value)
    setTaskValue(event.target.value)
  }

  const handleReset = () => {
    setTaskValue('')
    setProgress(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const task = {
      id: Math.floor(Math.random() * 10000000),
      name: taskValue,
      completed: Boolean(progress),
    }
    // console.log(task)
    setTasks([...tasks, task])
    handleReset()
  }

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id="task"
          placeholder="Task name"
          autoComplete="off"
          onChange={handleChange}
          value={taskValue}
        />
        <select onChange={e => setProgress(e.target.value)} value={progress}>
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <button type="submit">Add Task</button>
        <span className="reset" onClick={handleReset}>
          Reset
        </span>
      </form>
      <p>{taskValue}</p>
    </section>
  )
}
