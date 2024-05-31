import React, { useState, useEffect } from 'react';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [sortType, setSortType] = useState('default');

  useEffect(() => {
    // Load tasks from localStorage on initial render
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Save tasks to localStorage whenever tasks change
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false, id: Date.now() }]);
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (id) => {
    const newTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortType === 'completed') {
      return a.completed - b.completed;
    }
    if (sortType === 'alphabetical') {
      return a.text.localeCompare(b.text);
    }
    return tasks;
  });

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <div className="sort-options">
        <label>Sort by: </label>
        <select onChange={(e) => setSortType(e.target.value)} value={sortType}>
          <option value="default">Default</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>
      <ToDoList
        tasks={sortedTasks}
        addTask={addTask}
        removeTask={removeTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
}

export default App;

