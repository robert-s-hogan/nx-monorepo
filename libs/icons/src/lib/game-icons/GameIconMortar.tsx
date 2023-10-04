import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMortarIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'mortar'];
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
        d="M336.313 25.057l-42.536 73.45-1.718 28.036 45.754 26.498 23.463-15.446 42.535-73.448zm-50.3 118.785l-31.07 53.654 30.307 17.55c.91-.06 1.825-.103 2.75-.103 3.218 0 6.35.39 9.36 1.1l28.46-49.148zm-61.238 20.455l-4.63 7.72-33.665 56.106-11.09-7.19-7.55-4.9-9.795 15.102 7.55 4.896 11.618 7.538-5.068 8.448-4.63 7.716 15.434 9.262 4.63-7.72 48-80 4.63-7.715zm14.22 44.766l-31.07 53.652 53.655 31.072 2.623-4.53c-10.39-7.46-17.203-19.63-17.203-33.314 0-13.334 6.466-25.24 16.412-32.742zM288 232.942c-12.81 0-23 10.19-23 23s10.19 23 23 23 23-10.19 23-23-10.19-23-23-23zM205.83 282.3l-78.078 134.827c5.496 5.717 8.967 13.386 9.223 21.816h31.298l77.364-133.59zm109.432 4.184c-3.484 3.116-7.498 5.644-11.885 7.436l89.393 161.023h16.01zM104 424.944c-8.39 0-15 6.608-15 15 0 8.39 6.61 15 15 15s15-6.61 15-15c0-8.392-6.61-15-15-15zm-63 32v30h35.498c5.765-4.327 12.842-6.912 20.772-8.764 9.43-2.204 20.05-3.237 30.675-3.237 10.626 0 21.22 1.03 30.608 3.24 7.86 1.847 14.873 4.418 20.568 8.76H215v-30h-82.766c-5.803 9.562-16.317 16-28.234 16-11.917 0-22.43-6.438-28.234-16zm336 16v14h94v-14z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMortarIcon })
);
