import { AudioProps } from '@with-nx/types';

export const Audio: React.FC<AudioProps> = ({ src }) => {
  return <audio src={src} controls className="w-full" />;
};
