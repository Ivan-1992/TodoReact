import React from 'react'
import PropTypes from 'prop-types'

import Task from '../task'

import './task-list.css'

const TaskList = ({ todos, onDeleted, onToggleCompleted, onStartTimer, onStopTimer }) => {
  const elements = todos.map((item) => {
    let { id, ...itemProps } = item
    return (
      <Task
        {...itemProps}
        key={id}
        onDeleted={() => onDeleted(id)}
        onToggleCompleted={() => onToggleCompleted(id)}
        onStartTimer={() => onStartTimer(id)}
        onStopTimer={() => onStopTimer(id)}
      />
    )
  })

  return <ul className="todo-list">{elements}</ul>
}

TaskList.defaultProps = {
  todos: {},
}

TaskList.propTypes = {
  todos: PropTypes.array,
  onDeleted: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
}

export default TaskList
