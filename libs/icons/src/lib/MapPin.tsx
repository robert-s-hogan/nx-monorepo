// libs/icons/src/lib/MapPin.tsx
import React from 'react';
import IconWrapper from './IconWrapper';

type MapPinProps = {
  className?: string;
};

const MapPinIcon: React.FC<MapPinProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-map-pin ${props.className}`}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
};

export const MapPin = IconWrapper(MapPinIcon);
