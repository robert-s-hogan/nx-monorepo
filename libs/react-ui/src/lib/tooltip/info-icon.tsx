import React from 'react';

interface InfoIconProps {
  color?: string;
  className?: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({
  color = 'currentColor',
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      width="24"
      height="24"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  );
};

export default InfoIcon;
