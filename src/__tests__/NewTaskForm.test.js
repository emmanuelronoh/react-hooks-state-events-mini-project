// src/__tests__/NewTaskForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import NewTaskForm from '../components/NewTaskForm';

test('calls onTaskFormSubmit when the form is submitted', () => {
  const onTaskFormSubmit = jest.fn();
  render(<NewTaskForm onTaskFormSubmit={onTaskFormSubmit} />);

  // Fill out the form and submit
  fireEvent.change(screen.getByPlaceholderText('New task'), { target: { value: 'New Task' } });
  fireEvent.change(screen.getByPlaceholderText('Category'), { target: { value: 'Work' } });
  fireEvent.click(screen.getByText('Add Task'));

  expect(onTaskFormSubmit).toHaveBeenCalledWith({
    task: 'New Task',
    category: 'Work'
  });
});
