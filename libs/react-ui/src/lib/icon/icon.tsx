/*

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
