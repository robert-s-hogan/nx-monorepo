import { useContext } from 'react';

import { AvatarSizeContext } from '../context/AvatarSizeContext';
import { sizes } from '../utils/avatarSizes';

export const useAvatarSize = () => {
  const size = useContext(AvatarSizeContext);
  return sizes[size] || sizes.md; // default to 'md' if not found
};
