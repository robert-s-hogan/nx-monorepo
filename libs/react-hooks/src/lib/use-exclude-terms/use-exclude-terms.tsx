'use client';

import { useState } from 'react';

interface UseExcludeTerms {
  excludeTerm: string;
  excludeTerms: string[];
  handleExcludeTermChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddExcludeTerm: (event: React.FormEvent<HTMLFormElement>) => void;
  handleRemoveExcludeTerm: (index: number) => void;
}

export const useExcludeTerms = (): UseExcludeTerms => {
  const [excludeTerm, setExcludeTerm] = useState('');
  const [excludeTerms, setExcludeTerms] = useState(['']);

  const handleExcludeTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExcludeTerm(e.target.value);
  };

  const handleAddExcludeTerm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (excludeTerm !== '') {
      setExcludeTerms([...excludeTerms, excludeTerm]);
      setExcludeTerm('');
    }
  };

  const handleRemoveExcludeTerm = (index: number) => {
    setExcludeTerms(excludeTerms.filter((_, i) => i !== index));
  };

  return {
    excludeTerm,
    excludeTerms,
    handleExcludeTermChange,
    handleAddExcludeTerm,
    handleRemoveExcludeTerm,
  };
};
