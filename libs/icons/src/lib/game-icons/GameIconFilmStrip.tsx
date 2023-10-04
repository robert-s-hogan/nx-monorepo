import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFilmStripIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'film-strip'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className: propClassName, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`game-icon ${combinedClassNames}`}
      {...otherProps}
    >
      <path
        fill="currentColor"
        d="M55 18v476h18v-37h46v37h274v-37h46v37h18V18h-18v37h-46V18h-18v60H137V18h-18v37H73V18H55zm18 55h46v46H73V73zm320 0h46v46h-46V73zm-256 41h238v156H137V114zm-64 23h46v46H73v-46zm320 0h46v46h-46v-46zM73 201h46v46H73v-46zm320 0h46v46h-46v-46zM73 265h46v46H73v-46zm320 0h46v46h-46v-46zm-256 41h238v156H137V306zm-64 23h46v46H73v-46zm320 0h46v46h-46v-46zM73 393h46v46H73v-46zm320 0h46v46h-46v-46z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFilmStripIcon })
);
