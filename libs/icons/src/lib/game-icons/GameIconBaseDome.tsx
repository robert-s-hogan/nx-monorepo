import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBaseDomeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'base-dome'];
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
        d="M408.7 31l-15.4 414h45.4L423.3 31zm-51 32l23 23-23 23h30.1l1.7-46zm84.8 0l1.7 46h30.1l-23-23 23-23zm-56.6 95c-19 27-44.3 42.7-74.3 52.1-39.7 12.5-87.8 13.2-137.8 11.4 24.6 1.8 45.6 8.4 63 18.3 28.1-1.2 55.2-4.6 80.2-12.5 25.5-8 48.6-21 67.9-40.5zm-252.7 83.1c-30.9 5-53.17 18.7-69.5 36.9h44.8c6.4-13.6 14.6-26.1 24.7-36.9zm53.6 0c10.1 10.8 18.3 23.3 24.7 36.9h44.8c-16.3-18.2-38.6-31.9-69.5-36.9zm-26.8.1c-12.8 9.7-23.1 22.3-31.1 36.8h62.2c-8-14.5-18.3-27.1-31.1-36.8zM50.2 296c-7.2 11.5-12.64 24.1-16.58 37h58.02c2.23-12.8 5.34-25.2 9.46-37zm70.3 0c-4.5 11.6-8 24-10.5 37h100c-2.5-13-6-25.4-10.5-37zm98.4 0c4.1 11.8 7.2 24.2 9.5 37h58c-3.9-12.9-9.4-25.5-16.6-37zM29.06 351c-2.08 10.3-3.31 20.4-3.77 30h61.83c.23-10 .86-20.1 1.97-30zm78.14 0c-1.1 9.8-1.8 19.9-2.1 30h109.8c-.3-10.1-1-20.2-2.1-30zm123.7 0c1.1 9.9 1.7 20 2 30h61.8c-.5-9.6-1.7-19.7-3.8-30zM25 399v46h103v18H25v30h174v-80h66v80h30v-94zm192 32v62h30v-62zm160 32v30h78v-30z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBaseDomeIcon })
);
