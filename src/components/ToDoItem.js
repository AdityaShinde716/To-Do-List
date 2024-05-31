import React from 'react';
import './ToDoItem.css';

function ToDoItem({ task, removeTask, toggleTaskCompletion }) {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
      <button onClick={() => removeTask(task.id)}>Remove</button>
    </li>
  );
}

export default ToDoItem;

