import React, { Component } from 'react'
import './new-task-form.css'

export default class NewTaskForm extends Component {
  state = {
    label: '',
    minutes: '',
    seconds: '',
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onMinutesChange = (e) => {
    this.setState({
      minutes: e.target.value,
    })
  }

  onSecondsChange = (e) => {
    this.setState({
      seconds: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (
      this.state.label.trim() &&
      this.state.minutes.trim() &&
      this.state.seconds.trim() &&
      this.state.minutes >= 0 &&
      this.state.seconds > 0
    ) {
      this.props.onItemAdded(this.state.label, this.state.minutes, this.state.seconds)
    } else {
      alert('Введите правильные значения')
    }
    this.setState({
      label: '',
      minutes: '',
      seconds: '',
    })
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="new-todo"
            placeholder="Task"
            autoFocus
            onChange={this.onLabelChange}
            value={this.state.label}
          />
          <input
            type="number"
            className="new-todo-form__timer"
            placeholder="Min"
            autoFocus
            onChange={this.onMinutesChange}
            value={this.state.minutes}
          />
          <input
            type="number"
            className="new-todo-form__timer"
            placeholder="Sec"
            autoFocus
            onChange={this.onSecondsChange}
            value={this.state.seconds}
          />
          <button type="submit" className="hidden"></button>
        </form>
      </header>
    )
  }
}
