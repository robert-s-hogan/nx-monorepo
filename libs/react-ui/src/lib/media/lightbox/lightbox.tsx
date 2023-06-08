import React, { useState } from 'react';
import { LightboxProps } from '@with-nx/types';

export const Lightbox: React.FC<LightboxProps> = ({ image }) => {
  const [open, setOpen] = useState(true);

  return open ? (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
      onClick={() => setOpen(false)}
    >
      <img src={image} alt="Lightbox" className="max-w-full max-h-full" />
    </div>
  ) : null;
};
