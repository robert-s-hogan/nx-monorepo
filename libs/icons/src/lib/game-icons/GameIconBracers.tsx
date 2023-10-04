import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBracersIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bracers'];
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
        d="M334.557 181.26l7.807 17.594-12.497 13.763-21.31-32 2.373-2.62zM475.2 89.4c-1.13-25.254-3.39-49.626-4.622-62.26-13.04 1.38-38.576 4.193-64.892 7.775-67.514 9.175-80.17 15.14-82.35 16.587l-6.022 7.808c16.7 3.187 37.683 13.785 60.112 30.79l7.91 5.967-46.147 50.847 7.91 17.785 23.4 3.22 42.236-46.564 6.69 7.57c18.214 20.61 30.248 40.44 34.8 56.666l14.17-13.085v-.08l.566-2.18 1.525-1.66c.746-.883 7.864-10.815 4.712-79.187zM121.903 386.4l-7.99 8.802-28.744 31.254c-21.266-16.17-34.825-18.27-37.706-17.084-.61 2.35.554 9.627 8.79 21.977 7.65 11.558 18.87 23.524 31.48 33.693 23.616 19.085 38.735 21.548 41.808 20.27.61-2.35-.554-9.626-8.79-21.976a126.552 126.552 0 0 0-7.73-10.34l25.695-29.083-.226-.27 5.99-6.6-2.87-26.44zm17.163-18.915l-3.118 3.39 3.57.757zm39.062 12.43l26.27-28.994-25.66-27.208-23.436 25.83 2.837 26.08zm-17.436 19.208l3.39-3.728-3.876-.825zm143.253-240.29l13.864-15.29-13.558-30.507a9.042 9.042 0 1 1 16.53-7.333l10.294 23.22 27.38-30.18c-27.12-18.927-46.396-23.627-54.543-22.057l-34.678 44.983 23.73 35.67zM60.322 392.727a90.394 90.394 0 0 1 22.27 10.17l18.87-20.803-7.23-1.548a9.04 9.04 0 1 1 3.774-17.683l17.502 3.74 20.95-23.096-1.865-17.152a9.042 9.042 0 0 1 17.977-1.955l.136 1.2 13.56-14.995-23.493-24.86zM438.07 200.436c1.005-9.163-6.532-28.124-25.763-51.796l-20.226 22.294 22.216 3.062a9.04 9.04 0 0 1-1.243 18 9.164 9.164 0 0 1-1.243-.09l-34.463-4.746-13.717 15.13 13.56 30.677a9.04 9.04 0 1 1-16.52 7.333l-10.362-23.367-10.17 11.21 25.853 38.812zm-239.546 183.85l9.672 2.07a9.04 9.04 0 1 1-3.728 17.67l-19.944-4.26-21.186 23.402 1.684 15.525a9.04 9.04 0 0 1-17.91 2.362l-11.22 12.43a86.18 86.18 0 0 1 9.254 17.547l92.18-85.13-20.463-21.694zM192.592 39.14c-2.26-1.425-14.407-6.555-72.62-10.238-24.045-1.526-47.22-2.26-58.17-2.497-3.39 10.033-10.17 30.97-15.965 52.925-14.96 57.017-8.486 65.988-8.204 66.34l1.413 1.75.418 2.26v.08l301.838 320.018c10.17-21.107 49.57-63.276 89.977-72.316zM366.138 463.81c-9.04 11.762-10.746 18.937-10.294 21.322 2.102 1.05 10.396.632 23.92-5.91l-13.22-15.966zm76.835-48.734c-2.53-1.266-13.988-.418-32.768 10.644l15.582 18.802c2.475-2.69 4.768-5.4 6.86-8.102 9.095-11.785 10.756-18.96 10.315-21.344z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBracersIcon })
);
