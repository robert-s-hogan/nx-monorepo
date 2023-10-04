import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconStableIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'stable'];
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
        d="M333.1 62.18L24.41 117.3l-.11 30.6 314.1-56.18zM231 129.2l-30 5.4V295h30zM71 157.8l-30 5.4V295h30zM312.5 186c-8.6 6.1-7 24.1 3.5 40.1-21.6 7.5-45.6 17.2-67 25.6V295h16v90.9c41.3-20.8 74.4-52.7 106.8-89 4.6 22.8 33.9 25.9 51.1 28.7 0 0 .9 13.3 7 18.6 9.2 7.8 24.1 13.4 34.6 7.4 9.7-5.6 9.2-25.7 9.1-29.3-.2-7.5-7.3-13.1-13.9-16-18-35-57.4-90.7-90.8-93.1-4.6-.3-11.2.7-19 2.5-13.7-9.2-32.1-23.7-37.4-29.7zM183 272.5c-39.6 2.4-69.5 2.6-94 3V295h94zM25 313v46h222v-46H25zm0 64v46h222v-46zm0 64v46h222v-46z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconStableIcon })
);
