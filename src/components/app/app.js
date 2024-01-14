import React, { useState, useRef, useEffect } from 'react'

import Footer from '../footer'
import TaskList from '../task-list'
import NewTaskForm from '../new-task-form'
import './app.css'

const App = () => {
  const [todoData, setTodoData] = useState([])
  const [term] = useState('')
  const [filter, setFilter] = useState('all')
  const [isTimerOn, setIsTimerOn] = useState(false)

  const ref = useRef()

  useEffect(() => {
    ref.current = 1
  }, [])

  const createTodoItem = (label, minutes, seconds) => {
    return {
      label,
      minutes,
      seconds,
      completed: false,
      editing: false,
      id: Math.floor(Math.random() * 100),
      date: new Date(),
    }
  }

  const deleteItem = (id) => {
    setTodoData((prevTodoData) => {
      const newArray = prevTodoData.filter((el) => el.id !== id)
      return newArray
    })
  }

  const addItem = (text, min, sec) => {
    const newItem = createTodoItem(text, min, sec)
    setTodoData((prevTodoData) => [...prevTodoData, newItem])
  }

  const onToggleCompleted = (id) => {
    setTodoData((prevTodoData) => {
      const newArray = prevTodoData.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed }
        } else {
          return item
        }
      })
      return newArray
    })
  }

  const onFilterChange = (selectedFilter) => {
    setFilter(selectedFilter)
  }

  const clearCompleted = () => {
    setTodoData((prevTodoData) => prevTodoData.filter((item) => !item.completed))
  }

  const search = (items, searchTerm) => {
    if (searchTerm.length === 0) {
      return items
    }
    return items.filter((item) => item.label.indexOf(searchTerm) > -1)
  }

  const filterItems = (items, currentFilter) => {
    switch (currentFilter) {
      case 'all':
        return items
      case 'active':
        return items.filter((item) => !item.completed)
      case 'completed':
        return items.filter((item) => item.completed)
      default:
        return items
    }
  }

  const onStartTimer = (id) => {
    if (!isTimerOn) {
      setIsTimerOn(true)
      ref.current = setInterval(() => {
        setTodoData((data) => {
          const idx = data.findIndex((elem) => elem.id === id)
          if (idx === -1) {
            clearInterval(ref.current)
            setIsTimerOn(false)
            return [...data]
          }
          const oldItem = data[idx]
          let newItem = { ...oldItem, seconds: oldItem.seconds - 1 }
          if (newItem.seconds < 0) {
            newItem = { ...newItem, minutes: oldItem.minutes - 1, seconds: 59 }
          }
          if (newItem.seconds === 0 && newItem.minutes === 0) {
            clearInterval(ref.current)
            setIsTimerOn(false)
          }
          return [...data.slice(0, idx), newItem, ...data.slice(idx + 1)]
        })
      }, 1000)
    }
  }

  const onStopTimer = () => {
    clearInterval(ref.current)
    setIsTimerOn(false)
  }

  const visibleItems = filterItems(search(todoData, term), filter)
  const doneCount = todoData.filter((el) => el.completed).length
  const todoCount = todoData.length - doneCount

  return (
    <section className="todoapp">
      <NewTaskForm onItemAdded={addItem} />
      <section className="main">
        <TaskList
          todos={visibleItems}
          onDeleted={deleteItem}
          onToggleCompleted={onToggleCompleted}
          onStartTimer={onStartTimer}
          onStopTimer={onStopTimer}
        />
      </section>
      <Footer
        todoDone={todoCount}
        clearCompleted={clearCompleted}
        filter={filter}
        onFilterChange={onFilterChange.bind(this)}
      />
    </section>
  )
}

export default App
