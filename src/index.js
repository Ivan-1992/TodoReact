import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client';

import Footer from './components/footer';
import TaskList from './components/task-list';
import Header from './components/header';

import './index.css';

const App = () => {

  const todoData = [
    { label: 'Todo 1', editing: false, completed: true, id: 1},
    { label: 'Todo 2', editing: true, completed: false, id: 2},
  ];

  return (
    <section className="todoapp">
    <Header />
    <section className="main">
      <TaskList todos={todoData}/>
    </section>
    <Footer />
  </section>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);