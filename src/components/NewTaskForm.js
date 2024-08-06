// src/components/NewTaskForm.js
import React, { useState } from 'react';

const NewTaskForm = ({ onTaskFormSubmit }) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit({ task, category });
    setTask('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New task"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;
