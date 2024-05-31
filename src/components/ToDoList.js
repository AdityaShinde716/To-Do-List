import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

function ToDoList({ tasks, addTask, removeTask, toggleTaskCompletion }) {
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      setError('Task cannot be empty');
      return;
    }
    setError('');
    addTask(newTask);
    setNewTask('');
  };

  return (
    <div className="todo-list-container">
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add</button>
        {error && <p className="error">{error}</p>}
      </div>
      <ul>
        {tasks.map((task, index) => (
          <ToDoItem
            key={task.id}
            task={task}
            removeTask={removeTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
