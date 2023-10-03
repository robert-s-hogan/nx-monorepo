// hooks/useHandleBackdropClick.js
import { useEffect } from 'react';

export const useHandleBackdropClick = (ref, onBackdropClick) => {
  useEffect(() => {
    const handleBackdropClick = (event) => {
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
