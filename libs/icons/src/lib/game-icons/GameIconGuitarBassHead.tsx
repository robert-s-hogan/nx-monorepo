import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGuitarBassHeadIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'guitar-bass-head'];
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
        d="M228.2 26.89c-15.2-.25-27.7 33.46-12.3 39.8l8.9 3.61 17.8-15.5-1.8-23.5-8.7-3.6c-1.1-.43-2.1-.68-3.2-.78h-.7zm134.4 7.92h-2.3c-7.4.3-15.3 2.12-23.3 5.75-21.2 9.67-43.6 32.67-59.7 75.74L174.4 394.7l-.1.2v.2c.9.5 3.6 1.9 8 4 9.8 4.8 24 15.7 26.1 38.8v.5l-1 55.6H304c-.1-17.6 1.4-34.5 8.1-51.5 11.7-29.4 39.3-54.9 97-77 0-.2 0 0 .1-.4.3-2 .4-6 0-11-1-10.1-4-24.9-8.6-42.2-9.2-34.7-24.8-80.2-42.4-124.9l-2.4-6.2 5.2-4.2c36.1-28.2 51.1-56.4 53.8-79.56 2.7-23.06-6.5-41.48-21.3-52.25-8.7-6.31-19.3-9.99-30.9-10.02zM260.5 52.44l.7 10.01-7.6 6.6 21.7 8.93c1.2-2.17 2.5-4.28 3.8-6.33l4-9.89zm69 18.56c8.8 0 16 7.16 16 16s-7.2 16-16 16-16-7.16-16-16 7.2-16 16-16zm-136.7 49.7c-15.2-.3-27.9 33.4-12.3 39.8l8.8 3.6 17.8-15.5-1.7-23.6-8.8-3.6c-1.1-.4-2.1-.6-3.1-.7zm32.2 25.5l.7 10-7.6 6.6 19.9 8.1 6.2-16.8zm71.6 19.8c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm-139.8 50.6c-15.3-.3-27.8 33.4-12.4 39.8l8.9 3.6 17.8-15.5-1.8-23.6-8.7-3.6c-1.1-.4-2.1-.6-3.1-.7zm32.2 25.5l.7 10-7.6 6.6 20.4 8.3 6.2-16.8zm67.2 19.3c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm-140.1 54.4c-15.2-.3-27.78 33.4-12.3 39.8l8.8 3.6 17.8-15.5-1.8-23.6-8.7-3.6c-1.1-.4-2.1-.6-3.1-.7zm32.2 25.5l.7 10-7.6 6.6 22.8 9.3 6.8-16.6zm69.3 18.5c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGuitarBassHeadIcon })
);
