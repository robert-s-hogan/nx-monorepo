import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHempIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'hemp'];
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
        d="M256 16c-38.355 67.122-53.713 168.713-46.096 249.691C162.114 202.531 80 160 48 144c0 44.276 61.262 134.485 125.51 185.89C122.122 316.443 48 320 16 320c27.009 27.009 99.61 54.017 157.943 66.773C142.34 396.846 123.34 427.495 96 448c49.447 0 121.079-21.399 151-49.203V496h18v-97.203C294.921 426.6 366.553 448 416 448c-27.34-20.505-46.34-51.154-77.943-61.227C396.39 374.017 468.99 347.01 496 320c-32 0-106.122-3.558-157.51 9.89C402.738 278.486 464 188.277 464 144c-48 16-114.114 58.531-161.904 121.691C309.713 184.713 294.356 83.121 256 16z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHempIcon })
);
