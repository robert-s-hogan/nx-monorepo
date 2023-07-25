// components/SearchFilter.tsx
import React from 'react';
import { Grid } from '@with-nx/react-ui';

interface SearchFilterProps {
  categories: string[];
  onCategoryChange: (selectedCategory: string) => void;
}

const SearchFilter = ({ categories, onCategoryChange }: SearchFilterProps) => {
  const [selectedCategory, setSelectedCategory] =
    React.useState<string>('people');

  const handleCheckboxChange = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="space-y-4 mt-8">
      <h3>Filter by Category</h3>
      <Grid className="grid-cols-2 md:grid-cols-3">
        {categories.map((category) => (
          <label key={category}>
            <input
              type="radio"
              name="category"
              checked={selectedCategory === category}
              onChange={() => handleCheckboxChange(category)}
            />
            <span className="ml-3 text-2xl uppercase font-black">
              {category}
            </span>
          </label>
        ))}
      </Grid>
    </div>
  );
};

export default SearchFilter;
