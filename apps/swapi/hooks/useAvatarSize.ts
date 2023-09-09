import { useContext } from 'react';

import { sizes } from '../utils/avatarSizes';
import { AvatarSizeContext } from '../context/AvatarSizeProvider';

export const useAvatarSize = () => {
  const size = useContext(AvatarSizeContext);
  return sizes[size] || sizes.md; // default to 'md' if not found
};
