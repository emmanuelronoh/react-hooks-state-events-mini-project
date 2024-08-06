// src/__tests__/CategoryFilter.test.js
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CategoryFilter from '../components/CategoryFilter';

const categories = ['All', 'Food', 'Work'];

test('renders a select element with options', () => {
  const onFilterChange = jest.fn();
  render(<CategoryFilter categories={categories} onFilterChange={onFilterChange} />);

  // Check if the select element is in the document
  const selectElement = screen.getByRole('combobox');
  expect(selectElement).toBeInTheDocument();

  // Check if all options are present
  categories.forEach(category => {
    expect(screen.getByRole('option', { name: category })).toBeInTheDocument();
  });
});
