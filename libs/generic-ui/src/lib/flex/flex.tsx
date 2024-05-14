import React from 'react';

// Define the props interface if needed, such as children, etc.
interface FlexProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode; // Include children to render nested components
}

// Flex component implementation
export const Flex: React.FC<FlexProps> = ({
  className = '',
  style,
  children,
}) => {
  // Return a div with flex-related props handled via className and style
  return (
    <div className={`flex ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Flex;
