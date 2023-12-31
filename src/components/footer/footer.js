import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TaskFilter from '../task-filter'

import './footer.css'

export default class Footer extends Component {
  static defaultProps = {
    filter: 'All',
    todoDone: 0,
  }

  static propTypes = {
    todoDone: PropTypes.number,
    filter: PropTypes.string,
    clearCompleted: PropTypes.func,
    onFilterChange: PropTypes.func,
  }

  render() {
    const { todoDone, clearCompleted, filter, onFilterChange } = this.props

    return (
      <footer className="footer">
        <span className="todo-count">{todoDone} items left</span>
        <TaskFilter filter={filter} onFilterChange={onFilterChange} />
        <button className="clear-completed" onClick={() => clearCompleted()}>
          Clear completed
        </button>
      </footer>
    )
  }
}
