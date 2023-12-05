import React, {Component} from 'react';
// import { createRoot } from 'react-dom/client';

import Footer from '../footer';
import TaskList from '../task-list';
import Header from '../header';

import './app.css';

export default class App extends Component {
    
    maxId = 100;

    state = {
        todoData: [
            { label: 'Todo 1', editing: false, completed: true, id: 1},
            { label: 'Todo 2', editing: true, completed: false, id: 2},
            { label: 'Todo 3', editing: true, completed: false, id: 3},
            { label: 'Todo 4', editing: true, completed: false, id: 4},
          ]
    };
  
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            }
        });
    };

  render() {
    return (
        <section className="todoapp">
        <Header />
        <section className="main">
          <TaskList todos={this.state.todoData}
            onDeleted = { this.deleteItem }
          />
        </section>
        <Footer />
      </section>
      );
    }
  };
  
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );