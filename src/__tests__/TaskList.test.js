// src/__tests__/TaskList.test.js
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TaskList from '../components/TaskList'; // Ensure this import path is correct

const tasks = [
  { id: 1, text: 'Buy rice', category: 'Food' },
  { id: 2, text: 'Work on project', category: 'Work' }
];

test('renders a list of tasks', () => {
  render(<TaskList tasks={tasks} />);

  // Check if tasks are rendered
  tasks.forEach(task => {
    expect(screen.getByText(task.text)).toBeInTheDocument();
    expect(screen.getByText(task.category)).toBeInTheDocument();
  });
});
