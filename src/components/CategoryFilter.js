// src/components/CategoryFilter.js
import React from 'react';

const CategoryFilter = ({ categories, onFilterChange }) => (
  <select onChange={(e) => onFilterChange(e.target.value)}>
    {categories.map(category => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
);

export default CategoryFilter;
