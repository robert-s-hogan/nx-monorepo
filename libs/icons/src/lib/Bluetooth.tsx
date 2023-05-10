import React from 'react';
import IconWrapper from './IconWrapper';

const BluetoothIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-bluetooth ${props.className}`}
    >
      <polyline points="16 3 22 9 16 15"></polyline>
      <polyline points="8 3 14 9 8 15"></polyline>
      <line x1="14" y1="9" x2="8" y2="15"></line>
      <line x1="8" y1="9" x2="14" y2="15"></line>
    </svg>
  );
};

export const Bluetooth = IconWrapper(BluetoothIcon);
