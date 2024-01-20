import React from 'react'
import PropTypes from 'prop-types'

import TaskFilter from '../task-filter'

import './footer.css'

const Footer = ({ todoDone, clearCompleted, filter, onFilterChange }) => {
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

Footer.defaultProps = {
  filter: 'All',
  todoDone: 0,
}

Footer.propTypes = {
  todoDone: PropTypes.number,
  filter: PropTypes.string,
  clearCompleted: PropTypes.func,
  onFilterChange: PropTypes.func,
}

export default Footer
