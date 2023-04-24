/*
import React, { useState } from "react";
import Collapse from "@with-nx/react-ui";

const MyComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Collapse isOpen={isOpen} startingHeight={0}>
        {children}
          </Collapse>
        </div>
      );
    };
    
    export default MyComponent;
*/

import React, { useEffect, useRef, useState } from 'react';
import styles from './collapse.module.css';

/* eslint-disable-next-line */
export interface CollapseProps {
  isOpen: boolean;
  startingHeight: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export function Collapse({
  isOpen,
  startingHeight,
  children,
  style,
  className,
}: CollapseProps) {
  return (
    <div isOpen={isOpen} startingHeight={0} style={style} className={className}>
      {children}
    </div>
  );
}

export default Collapse;
