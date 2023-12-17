import React, { Component } from 'react'

import Footer from '../footer'
import TaskList from '../task-list'
import NewTaskForm from '../new-task-form'

import './app.css'

export default class App extends Component {
  maxId = 100

  state = {
    todoData: [],
    term: '',
    filter: 'all',
  }

  createTodoItem(label) {
    return {
      label,
      completed: false,
      editing: false,
      id: this.maxId++,
      date: new Date(),
    }
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]

      return {
        todoData: newArray,
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text)

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem]

      return {
        todoData: newArr,
      }
    })
  }

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)

      const oldItem = todoData[idx]
      const newItem = { ...oldItem, completed: !oldItem.completed }

      const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]

      return {
        todoData: newArray,
      }
    })
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((item) => !item.completed)
      return {
        todoData: newArr,
      }
    })
  }

  search(items, term) {
    if (term.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1
    })
  }

  filter(items, filter) {
    switch (filter) {
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

  render() {
    const { todoData, term, filter } = this.state

    const visibleItems = this.filter(this.search(todoData, term), filter)
    const doneCount = todoData.filter((el) => el.completed).length

    const todoCount = todoData.length - doneCount
    return (
      <section className="todoapp">
        <NewTaskForm onItemAdded={this.addItem} />
        <section className="main">
          <TaskList todos={visibleItems} onDeleted={this.deleteItem} onToggleCompleted={this.onToggleCompleted} />
        </section>
        <Footer
          todoDone={todoCount}
          clearCompleted={this.clearCompleted}
          filter={this.state.filter}
          onFilterChange={this.onFilterChange.bind(this)}
        />
      </section>
    )
  }
}
