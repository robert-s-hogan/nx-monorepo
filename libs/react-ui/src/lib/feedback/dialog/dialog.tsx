import React from 'react';
import { DialogProps } from '@with-nx/types';

export const Dialog: React.FC<DialogProps> = ({
  title,
  children,
  isVisible,
  onClose,
}) => {
  return (
    isVisible && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">{title}</h2>
            <button onClick={onClose} className="text-red-500">
              Close
            </button>
          </div>
          <div className="mt-4">{children}</div>
        </div>
      </div>
    )
  );
};
