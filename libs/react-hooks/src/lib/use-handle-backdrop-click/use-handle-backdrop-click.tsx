'use client';

// hooks/useHandleBackdropClick.js
import { useEffect } from 'react';

export const useHandleBackdropClick = (
  ref: React.RefObject<HTMLElement>,
  onBackdropClick: () => void
) => {
  useEffect(() => {
    const handleBackdropClick = (event: MouseEvent) => {
      if (event.target === ref.current) {
        onBackdropClick();
      }
    };

    ref.current?.addEventListener('click', handleBackdropClick);

    return () => {
      ref.current?.removeEventListener('click', handleBackdropClick);
    };
  }, [ref, onBackdropClick]);
};

export default useHandleBackdropClick;
