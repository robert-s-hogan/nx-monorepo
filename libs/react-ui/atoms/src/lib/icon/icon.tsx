/* eslint-disable-next-line */
import React from 'react';

interface IconProps {
  children: React.ReactNode;
  className?: string;
}

const IconAtom: React.FC<IconProps> = ({ children, className = '' }) => {
  return <span className={className}>{children}</span>;
};

IconAtom.defaultProps = {
  className: '',
};

export default IconAtom;
