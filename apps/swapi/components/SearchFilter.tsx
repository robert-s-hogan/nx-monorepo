// components/SearchFilter.tsx
import React, { useState } from 'react';
import { Grid } from '@with-nx/react-ui';

interface SearchFilterProps {
  categories: string[];
  onCategoryChange: (selectedCategories: string[]) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  categories,
  onCategoryChange,
}) => {
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set()
  );

  const handleCheckboxChange = (category: string, checked: boolean) => {
    const updatedCategories = new Set(selectedCategories);

    if (checked) {
      updatedCategories.add(category);
    } else {
      updatedCategories.delete(category);
    }

    setSelectedCategories(updatedCategories);
    onCategoryChange(Array.from(updatedCategories));
  };

  return (
    <div className="space-y-4 mt-8">
      <h3>Filter by Category</h3>
      <Grid className="grid-cols-2 md:grid-cols-3">
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={selectedCategories.has(category)}
              onChange={(e) => handleCheckboxChange(category, e.target.checked)}
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
