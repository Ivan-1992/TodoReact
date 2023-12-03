import React from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './task.css';

const Task = ({ label, completed, editing}) => {

    return (
        <li className={completed ? 'completed' : ''}>
            <div className="view">
            <input className="toggle" type="checkbox" />
            <label>
                <span className="description">{ label }</span> 
                <span className="created">
                    created {formatDistanceToNow(new Date(), {includeSeconds : true})} ago
                </span>
            </label>
            <button className="icon icon-edit" />
            <button className="icon icon-destroy" />
            </div>
        </li>
    );
};

export default Task;