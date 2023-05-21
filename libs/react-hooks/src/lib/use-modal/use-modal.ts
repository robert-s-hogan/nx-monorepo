import { useState } from 'react';

export function useModal() {
  const [isShowing, setIsShowing] = useState(false);
  function toggle() {
    setIsShowing(!isShowing);
  }
  return {
    isShowing,
    toggle,
  };
}

export default useModal;
