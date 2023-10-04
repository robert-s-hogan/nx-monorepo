import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBookPileIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'book-pile'];
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
        d="M341.79 95.5L65.54 166.379l127.84 58.11 276.025-72.64L341.789 95.5zm-1.577 18.984l74.858 33.059-72.551 19.09-77.258-32.916 74.951-19.233zm142.813 52.395L194.864 242.71l-3.057.805h-.002l-.041.01-2.857-1.3L44.73 178.15l-.184-.092c-5.585-2.793-8.012-1.992-10.77.11-2.757 2.1-5.515 6.88-6.275 12.956-1.519 12.153 3.616 27.58 23.916 34.346l.412.139L193.338 288.5l173.235-45.588V212.45l76-18.345v28.806l42.173-11.097c-4.36-14.037-5.33-29.146-1.72-44.934zm-58.453 50.086l-40 9.656v103.186l21.947-21.948 18.053 12.498V216.965zm58.453 13.914l-40.453 10.646v45.385l42.173-11.098c-4.36-14.036-5.33-29.145-1.72-44.933zM38.42 240.268c-1.803.036-3.177.782-4.642 1.898-2.758 2.101-5.516 6.88-6.276 12.957-1.519 12.153 3.616 27.579 23.916 34.346l.412.138L193.338 352.5l173.235-45.588v-45.387l-174.766 45.99-146.62-65.161a61.602 61.602 0 0 1-4.802-1.874 8.317 8.317 0 0 0-1.965-.212zm6.768 2.086l.021.008-.279-.125.258.117zm437.838 52.525l-40.453 10.646v45.385l42.173-11.097c-4.36-14.037-5.33-29.146-1.72-44.934zM38.42 304.268c-1.803.036-3.177.782-4.642 1.898-2.758 2.101-5.516 6.88-6.276 12.957-1.519 12.153 3.616 27.579 23.916 34.346l.412.138L193.338 416.5l173.235-45.588v-45.387l-174.766 45.99-146.62-65.161a61.602 61.602 0 0 1-4.802-1.874 8.317 8.317 0 0 0-1.965-.212zm6.768 2.086l.021.008-.279-.125.258.117zm363.437 24.855l-38.863 38.863 68.834-18.115-29.97-20.748z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBookPileIcon })
);
