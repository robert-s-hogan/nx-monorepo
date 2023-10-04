import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconNailsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'nails'];
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
        d="M131.656 49.656L22.312 159l12.344 12.344 46.813-28.906 32.686-32.688-.062-.063L144 62l-12.344-12.344zm247.688 0L367 62l26.906 43.563 37.688 37.687 44.75 28.094L488.688 159 379.344 49.656zm4.906 72.688L371.094 135.5l20.687 20.688-32.81-8.594-10.97 11 21.03 21.03-33.342-8.75-10.782 10.814 21.375 21.375-33.874-8.907L87.97 418.626 66.405 472.03l53.313-21.655L416 154.095l-31.75-31.75zm-256.875.625l-31.75 31.75 10.656 10.655 21-21-8.718 33.28 10.813 10.814 21.344-21.345-8.876 33.813 10.625 10.625 21.686-21.688-9.03 34.344 45.56 45.56 31.75-31.75-115.06-115.06zm172.938 172.905l-31.75 31.75 122.75 122.75 53.375 21.563-21.657-53.313-122.717-122.75z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconNailsIcon })
);
