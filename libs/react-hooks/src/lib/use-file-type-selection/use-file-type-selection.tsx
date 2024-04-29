import { useState } from 'react';

interface UseFileTypeSelection {
  selectedFileType: string;
  handleFileTypeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useFileTypeSelection = (): UseFileTypeSelection => {
  const [selectedFileType, setSelectedFileType] = useState('');

  const handleFileTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFileType(e.target.name);
  };

  return {
    selectedFileType,
    handleFileTypeChange,
  };
};
