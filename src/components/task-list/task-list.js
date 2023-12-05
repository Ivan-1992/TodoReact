import React from "react";
import Task from "../task";

import './task-list.css';

const TaskList = ({ todos, onDeleted }) => {

    const elements = todos.map((item) => {

        let { id, classNames, ...itemProps } = item;
        
        return (
            <span key={id} className={classNames}>
            <Task {...itemProps } 
                onDeleted={() => onDeleted(id)} />
            </span>
        );
      });

    return (
        <ul className="todo-list">
            { elements }
        </ul>
    );
};

export default TaskList;