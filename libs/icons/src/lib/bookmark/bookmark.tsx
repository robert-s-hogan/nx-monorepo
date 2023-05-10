import React from 'react';
import IconWrapper from './IconWrapper';

const BookmarkIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-bookmark ${props.className}`}
    >
      <path d="M6 4v16l6-6.4l6 6.4V4z"></path>
    </svg>
  );
};

export const Bookmark = IconWrapper(BookmarkIcon);
