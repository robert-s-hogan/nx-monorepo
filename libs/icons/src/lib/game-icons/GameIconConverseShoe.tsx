import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconConverseShoeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'converse-shoe'];
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
        d="M42.63 89c8.3 49.2 17.42 100.1 14.35 151.5-2.9 48.8-28.19 92.8-31.58 134.5h319.7c5.3-16.4 16.2-30.9 28.3-42.1 4.2-3.9 8.5-7.5 12.8-10.6-34.9-9.7-61.7-24-82.5-41.3H244v-18h41c-8.5-9.5-15.7-19.6-21.7-30H208v-18h46c-4.6-9.9-8.4-19.9-11.7-30H192v-18h44.8c-2.8-10.1-5.3-20.2-7.6-30H176v-18h49c-2.4-10.5-4.9-20.54-7.7-30H42.63zM128 215c31.4 0 57 25.6 57 57s-25.6 57-57 57c-31.37 0-57-25.6-57-57s25.63-57 57-57zm0 18c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zm287.6 96c-5 .3-18.6 6.5-30 17.1-8.7 8-16.5 18.3-21.2 28.9H448c11.5 0 25.6-5.7 38.6-12.3-.4-4.2-1-7.7-2.2-10-1.6-3.3-3.9-5.7-8.7-8.3-9.6-5.2-28.9-9.5-60.1-15.4zm71.4 52.9c-2 .9-3.4 1.6-5.7 2.5C471 388.5 459 393 448 393H25v30h407c22.2 0 45.3-8.7 55-12.8v-28.3z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconConverseShoeIcon })
);
