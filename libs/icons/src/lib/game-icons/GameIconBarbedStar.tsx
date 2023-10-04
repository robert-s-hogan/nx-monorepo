import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBarbedStarIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'barbed-star'];
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
        d="M253.352 19.617l-52.18 115.475 27.2.002-24.257 74.123-65.638.156 6.18-19.02L18.69 204.286l93.718 85.324 7.63-23.48 53.017 38.708-21.047 65.28-15.735-11.43-25.652 124.097 110.103-62.744-21.946-15.942 55.584-40.213 60.472 43.748-17.08 12.408 110.102 62.745-25.65-124.098-23.638 17.172-22.898-71.022 53.016-38.707 7.628 23.48 93.717-85.323-125.966-13.935 6.18 19.02-65.64-.155-24.256-74.12 25.205.003-52.2-115.483zm-5.317 115.48h12.654l30.373 92.747 85.253.217 6.288 19.352-68.854 50.29 28.914 89.712-11.94 8.674-76.363-55.233-71.475 51.698-14.977-10.88 27.065-83.972-68.856-50.288 6.287-19.35 85.256-.218 30.375-92.748zm6.338 41.76l-13.69 41.81c4.38-1.018 8.932-1.575 13.614-1.575 4.74 0 9.347.57 13.777 1.615l-13.7-41.85zm-.076 58.93c-23.097 0-41.62 18.52-41.62 41.617 0 23.097 18.523 41.617 41.62 41.617 23.096 0 41.617-18.52 41.617-41.616s-18.52-41.617-41.617-41.617zm-51.518 10.336l-43.878.104 35.336 25.794c.84-9.41 3.85-18.214 8.54-25.897zm103.032 0c4.71 7.712 7.722 16.555 8.55 26.006l35.482-25.903-44.03-.104zm-5.888 70.61c-5.968 6.912-13.462 12.47-21.96 16.12l35.413 25.606-13.453-41.726zm-91.143.13l-13.41 41.596 35.353-25.565c-8.484-3.628-15.97-9.155-21.942-16.032z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBarbedStarIcon })
);
