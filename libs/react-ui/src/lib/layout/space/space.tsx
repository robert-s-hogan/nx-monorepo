import { SpaceProps } from '@with-nx/types';

export const Space: React.FC<SpaceProps> = ({ size }) => {
  return <div className={`m-${size}`} />;
};
