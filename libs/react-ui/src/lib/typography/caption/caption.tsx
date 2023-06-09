import { CaptionProps } from '@with-nx/types';

export const Caption: React.FC<CaptionProps> = ({ text }) => {
  return <p className="text-sm text-gray-500">{text}</p>;
};
