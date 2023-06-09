import { ContainerProps } from '@with-nx/types';

export const Container: React.FC<ContainerProps> = ({ maxWidth, children }) => {
  return <div className={`mx-auto px-4 max-w-${maxWidth}`}>{children}</div>;
};
