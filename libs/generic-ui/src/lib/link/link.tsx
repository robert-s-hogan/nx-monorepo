type LinkProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
  rel?: string;
  target?: string;
};

export const Link: React.FC<LinkProps> = ({
  href,
  target,
  rel,
  className,
  children,
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      role="link"
      tabIndex={0}
    >
      {children}
    </a>
  );
};
