import { Text } from '@with-nx/react-ui';

interface DevBlogSubTitleProps {
  className?: string;
  children: React.ReactNode;
}

export const DevBlogSubTitle = ({
  className,
  children,
}: DevBlogSubTitleProps) => {
  return (
    <Text className={`text-lg ${className ? className : ''}`}>{children}</Text>
  );
};

export default DevBlogSubTitle;
