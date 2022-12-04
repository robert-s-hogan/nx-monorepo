import Link from 'next/link';

export const CustomNextImageLink = ({ href, children, passHref }) => {
  return (
    <Link href={href} passHref>
      <a>{children}</a>
    </Link>
  );
};

export default CustomNextImageLink;
