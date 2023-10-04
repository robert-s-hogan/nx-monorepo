import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCondyluraSkullIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'condylura-skull'];
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
        d="M124.813 31.5L21.593 134.688 150.44 263.53l4.687-27.28 18.438 3.156-19.875 115.78c.314-.073.62-.14.937-.217l36.03 26.53 10-129.406 18.626 1.437-10.874 141.032 38.188 28.125v-164.28l-31-84.563 40.344 15.406 40.343-15.438-31 84.563v164.313l38.22-28.157-10.906-141 18.625-1.436L321.25 381.5l36.094-26.594c.355.09.71.166 1.062.25l-20.094-115.72 18.407-3.186 4.75 27.25 128.81-128.813L387.095 31.5 255.938 74.78 124.813 31.5zm14.843 45.813l36.438 112.624L73.47 147.03l66.186-69.718zm229.72 0l66.187 69.718-102.625 42.907 36.437-112.625zm-.063 231.406l8.343 48.124c18.14-1.61 34.37-13.527 52.125-41.625-20.87 3.008-40.78.415-60.467-6.5zm-226.625.06c-19.613 6.86-39.458 9.437-60.25 6.44 17.718 28.036 33.906 39.973 52 41.624l8.25-48.063zm221.375 64.376l-37.032 27.28c14.147 15.196 34.73 19.897 70.845 11.752-14.33-10.72-25.298-23.82-33.813-39.032zm-215.813.344c-8.737 16.542-20.235 30.682-35.53 42.125 38.18 8.612 59.01 2.917 73.218-14.406L148.25 373.5zm54 39.75c.29 24.56-2.662 48.25-9.78 71.406 25.805-11.198 41.003-24.887 49.155-42.437l-39.375-28.97zm106.156.875l-39.562 29.156c8.114 17.697 23.35 31.485 49.312 42.75-7.17-23.32-10.098-47.167-9.75-71.905z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCondyluraSkullIcon })
);
