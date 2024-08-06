// src/__tests__/Task.test.js
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Task from '../components/Task';

test('displays the task text and category', () => {
  render(<Task text="text!" category="category!" />);

  // Check if the text is rendered
  expect(screen.getByText('text!')).toBeInTheDocument();

  // Check if the category is rendered
  expect(screen.getByText('category!')).toBeInTheDocument();
});
