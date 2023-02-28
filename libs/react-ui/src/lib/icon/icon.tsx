/*

 * Icon (Atom)
 * The Icon component is an atom that represents an icon. It accepts a `children` prop as the content to be rendered inside the icon, and a `className` prop to apply custom styles to the icon.
 *
 * Props:
 * children (React.ReactNode): The content to be rendered inside the icon.
 * className (string): A string of custom class names to apply to the icon.
 

Example usage:

import { FaCoffee } from 'react-icons/fa';
import Icon from './Icon';

function MyComponent() {
  return (
    <div>
      <Icon
        className="my-icon-class"
        icon={<FaCoffee style={{ color: 'red', fontSize: '2em' }} />}
      />
    </div>
  );
}

*/

import React from 'react';

/* eslint-disable-next-line */
export interface IconProps {
  icon: React.ReactNode;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ icon, className = '' }) => {
  return <span className={className}>{icon}</span>;
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
