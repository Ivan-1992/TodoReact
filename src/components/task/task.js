import React, { Component } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import PropTypes from 'prop-types'

import './task.css'

export default class Task extends Component {
  static defaultProps = {
    todo: {},
    completed: false,
    editing: false,
    date: new Date(),
  }

  static propTypes = {
    label: PropTypes.string,
    onDeleted: PropTypes.func.isRequired,
    onToggleCompleted: PropTypes.func.isRequired,
    completed: PropTypes.bool,
    editing: PropTypes.bool,
  }

  // onLabelChange = (e) => {
  //   this.setState({
  //     label: e.target.value,
  //   })
  // }

  render() {
    const {
      label,
      onDeleted,
      onToggleCompleted,
      completed,
      editing,
      date,
      minutes,
      seconds,
      onStartTimer,
      onStopTimer,
    } = this.props

    const changeMinutes = minutes > 9 ? Number(minutes) : `0${minutes}`
    const changeSeconds = seconds > 9 ? Number(seconds) : `0${seconds}`

    return (
      <li className={completed ? 'completed' : editing ? 'editing' : ''}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleCompleted} />
          <label>
            <span className="title">{label}</span>
            <span className="description">
              <button className="icon icon-play" onClick={onStartTimer} />
              <button className="icon icon-pause" onClick={onStopTimer} />
              <span className="minutes">
                {changeMinutes}:{changeSeconds}
              </span>
            </span>
            <span className="description">
              created {formatDistanceToNow(date, { addSuffix: true, includeSeconds: true })}
            </span>
          </label>
          <button className="icon icon-edit" />
          <button className="icon icon-destroy" onClick={onDeleted} />
        </div>
        {/* <input onChange={this.onLabelChange} type="text" className="edit" value={label} /> */}
      </li>
    )
  }
}
