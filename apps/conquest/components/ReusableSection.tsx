import React from 'react';

interface ReusableSectionProps {
  children: React.ReactNode;
}

const ReusableSection = ({ children }: ReusableSectionProps) => {
  return <div className="max-w-7xl container mx-auto">{children}</div>;
};

export default ReusableSection;
