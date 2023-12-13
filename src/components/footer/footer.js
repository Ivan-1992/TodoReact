import React, { Component } from "react";
import './footer.css';
import TaskFilter from "../task-filter";

export default class Footer extends Component {

    render() {
        const {todoDone, clearCompleted, filter, onFilterChange} = this.props;

        return (
            <footer className="footer">
                <span className="todo-count">{todoDone} items left</span>
                <TaskFilter filter={filter}
                onFilterChange={onFilterChange}/>
                <button className="clear-completed"
                onClick={() => clearCompleted()} >
                    Clear completed
                </button>
            </footer>
        );
    }
}