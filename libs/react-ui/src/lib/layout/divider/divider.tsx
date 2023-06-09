import { DividerProps } from '@with-nx/types';

export const Divider: React.FC<DividerProps> = ({ color }) => {
  return <hr className={`border-${color} my-4`} />;
};
