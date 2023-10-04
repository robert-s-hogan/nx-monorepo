import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBurningBookIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'burning-book'];
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
        d="M263.813 18.594c-50.387 12.75-80.69 66.325-50.813 111.22 22.477 33.773 44.967 61.167 8.75 79.06-23.353 11.54-50.027-16.454-46.125-49.28 4.812-40.485-18.705-79.927-46.125-88.188 46.237 106.42-43.46 176.998-24.53 77.094-30.286 16.095-32.784 59.017-11.25 122.72-40.372-17.2-55.07-66.767-38.282-120.564-35.866 28.35-53.3 130.904-14.626 183.47C136.425 464.08 248.156 496.343 268 496.343c21.144 0 117.334-33.716 189.594-115.125 41.782-47.074 50.926-168.9 9.22-243.658 5.98 25.335-6.117 76.786-33.845 94.032 4.998-57.774-3.913-140.944-36.69-171.53 32.622 172.802-93.01 152.202-48.374 99.53 29.51-34.825-.17-102.5-17.5-112.375 10.894 42.12-14.24 69.676-54.72 61.436-27.252-5.547-44.743-44.957-11.873-90.062zm-115.157 211.47h18.688V395.25l102.72 55.813L372.78 395.25V230.094h18.69v176.28l-4.908 2.657L274.5 469.876l-4.438 2.438-4.468-2.438L153.53 409.03l-4.874-2.655V230.062zm37.53.217l73.533 44.532v148.313l-73.533-41.438V230.28zm167.72 0v151.407l-75.5 42.563V276.03l75.5-45.75z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBurningBookIcon })
);
