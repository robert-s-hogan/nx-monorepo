interface DevBlogSubTitleProps {
  className?: string;
  children: React.ReactNode;
}

export const DevBlogSubTitle = ({
  className,
  children,
}: DevBlogSubTitleProps) => {
  return <p className={`text-lg ${className ? className : ''}`}>{children}</p>;
};

export default DevBlogSubTitle;
