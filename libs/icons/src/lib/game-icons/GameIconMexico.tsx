import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMexicoIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'mexico'];
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
        d="M17.91 93.761c19.4 67.244 47.029 124.21 79.363 187.172l27.561-8.368c-34.337-52.44-62.494-96.45-72.16-152.817l24.231 6.32c12.377 75.413 79.95 133.444 109.213 168.56 4.905 16.388.589 32.776-4.916 46.354 51.616 25.103 104.672 57.56 163.292 69.531 22.014-17.212 44.264-27.73 68.126 7.726l9.833-28.094 23.177-.702L432.636 361c22.372 8.044 50.335-16.05 50.92-22.826 1.675-19.426.496-31.362 10.535-47.056l-55.836 7.725c-1.367 16.264 1.583 34.771-15.1 44.247-88.44 50.234-115.313-62.388-107.457-109.564-36.356-16.025-40.996-34.962-62.507-68.126l-22.475-2.81-15.451 13.345-40.033-51.27z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMexicoIcon })
);
