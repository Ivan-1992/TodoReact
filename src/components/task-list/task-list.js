import React from "react";
import Task from "../task";

import './task-list.css';

const TaskList = ({ todos, onDeleted, onToggleCompleted }) => {

    const elements = todos.map((item) => {
        let { id, classNames, ...itemProps } = item;
    
        return (
            <Task {...itemProps } key={id}
                onDeleted={() => onDeleted(id)} 
                onToggleCompleted={()=> onToggleCompleted(id)}
                />
        );
      });

    return (
        <ul className="todo-list">
            { elements }
        </ul>
    );
};

export default TaskList;