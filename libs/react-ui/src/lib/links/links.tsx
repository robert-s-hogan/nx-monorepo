import React from 'react';

interface Link {
  text: string;
  href: string;
}

interface LinksProps {
  links: Link[];
}

export const Links: React.FC<LinksProps> = ({ links }) => {
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
