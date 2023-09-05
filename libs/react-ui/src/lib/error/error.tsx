// /libs/react-ui/src/lib/error/error.tsx

import React from 'react';
import errorStyles from './error.module.css';

/* eslint-disable-next-line */
export interface ErrorProps {
  message?: string;
}

export function Error({ message = 'An error occurred.' }: ErrorProps) {
  return <div className={errorStyles.errorContainer}>{message}</div>;
}

export default Error;
