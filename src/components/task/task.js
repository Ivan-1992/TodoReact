import React, { Component } from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './task.css';

export default class Task extends Component{

    render() {

        const { label, onDeleted, onToggleCompleted, completed } = this.props;

        let classNames = '';
        if (completed) {
            classNames += 'completed';
        }

        return (
            <li className={classNames}>
                <div className="view">
                <input className="toggle" type="checkbox" 
                    onClick={ onToggleCompleted } />
                <label>
                    <span className="description">{ label }</span> 
                    <span className="created">
                        created {formatDistanceToNow(new Date(), {includeSeconds : true})} ago
                    </span>
                </label>
                <button className="icon icon-edit" />
                <button className="icon icon-destroy" 
                    onClick={onDeleted}
                />
                </div>
            </li>
        );
    }
    
};