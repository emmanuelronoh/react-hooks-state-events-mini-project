// src/components/Task.js
import React from 'react';

const Task = ({ text, category }) => (
  <div>
    <span>{text}</span>
    <span>{category}</span>
    <button>Delete</button>
  </div>
);

export default Task;
