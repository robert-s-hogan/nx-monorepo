import { LinkProps } from '@with-nx/types';

export const Link = ({
  href,
  children,
  className,
  target,
  rel,
}: LinkProps): JSX.Element => (
  <a className={className} href={href} target={target} rel={rel}>
    {children}
  </a>
);

export default Link;
