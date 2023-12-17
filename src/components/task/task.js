import React, { Component } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import PropTypes from 'prop-types'

import './task.css'

export default class Task extends Component {
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  render() {
    const { label, onDeleted, onToggleCompleted, completed, editing, date } = this.props

    return (
      <li className={completed ? 'completed' : editing ? 'editing' : ''}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleCompleted} />
          <label>
            <span className="description">{label}</span>
            <span className="created">
              created {formatDistanceToNow(date, { addSuffix: true, includeSeconds: true })}
            </span>
          </label>
          <button className="icon icon-edit" />
          <button className="icon icon-destroy" onClick={onDeleted} />
          <input onChange={this.onLabelChange} type="text" className="edit" value={label} />
        </div>
      </li>
    )
  }
}

Task.defaultProps = {
  todo: {},
  completed: false,
  editing: false,
  date: new Date(),
}

Task.propTypes = {
  label: PropTypes.string,
  onDeleted: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  completed: PropTypes.bool,
  editing: PropTypes.bool,
}
