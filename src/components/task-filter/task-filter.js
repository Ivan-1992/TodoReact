import React from 'react'
import PropTypes from 'prop-types'

import './task-filter.css'

const TaskFilter = ({ filter, onFilterChange }) => {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ]

  const butt = buttons.map(({ name, label }) => {
    const isActive = filter === name
    const clazz = isActive ? 'selected' : ''
    return (
      <li key={name}>
        <button className={`${clazz}`} onClick={() => onFilterChange(name)}>
          {label}
        </button>
      </li>
    )
  })

  return <ul className="filters">{butt}</ul>
}

TaskFilter.defaultProps = {
  filter: 'All',
}

TaskFilter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
}

export default TaskFilter
