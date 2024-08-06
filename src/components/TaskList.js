// src/components/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => (
  <ul>
    {tasks.map(task => (
      <Task key={task.id} text={task.text} category={task.category} />
    ))}
  </ul>
);

export default TaskList;
