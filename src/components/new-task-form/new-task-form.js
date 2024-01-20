import React, { useState } from 'react'
import './new-task-form.css'

const NewTaskForm = ({ onItemAdded }) => {
  const [label, setLabel] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  const handleLabelChange = (e) => {
    setLabel(e.target.value)
  }

  const handleMinutesChange = (e) => {
    setMinutes(e.target.value)
  }

  const handleSecondsChange = (e) => {
    setSeconds(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (label.trim()) {
      onItemAdded(label, minutes, seconds)
      setLabel('')
      setMinutes('')
      setSeconds('')
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="new-todo"
          placeholder="Task"
          autoFocus
          onChange={handleLabelChange}
          value={label}
          required
          pattern="[\d\w]+"
        />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Min"
          onChange={handleMinutesChange}
          value={minutes}
          required
          min={0}
        />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Sec"
          onChange={handleSecondsChange}
          value={seconds}
          min={0}
          max={59}
          required
        />
        <button type="submit" className="hidden"></button>
      </form>
    </header>
  )
}

export default NewTaskForm
