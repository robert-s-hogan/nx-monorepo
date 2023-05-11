import { LinkProps } from '@with-nx/types';

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className,
  target,
  rel,
}) => (
  <a className={className} href={href} target={target} rel={rel}>
    {children}
  </a>
);

export default Link;
