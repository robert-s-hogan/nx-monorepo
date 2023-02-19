/*

 * Icon (Atom)
 * The Icon component is an atom that represents an icon. It accepts a `children` prop as the content to be rendered inside the icon, and a `className` prop to apply custom styles to the icon.
 *
 * Props:
 * children (React.ReactNode): The content to be rendered inside the icon.
 * className (string): A string of custom class names to apply to the icon.
 

Example usage:

import Icon from './Icon';

function MyComponent() {
  return (
    <div>
      <Icon className="my-icon-class">icon content</Icon>
    </div>
  );
}

*/

/* eslint-disable-next-line */
import React from 'react';

interface IconProps {
  children: React.ReactNode;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ children, className = '' }) => {
  return <span className={className}>{children}</span>;
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
