import { SubheadingProps } from '@with-nx/types';

export const Subheading: React.FC<SubheadingProps> = ({ text }) => {
  return <h2 className="text-xl font-semibold text-gray-700">{text}</h2>;
};
