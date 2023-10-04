import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTangerineIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'tangerine'];
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
        d="M259 47.39l-.5 36.91 11 .6 4.6-34.43zM220.6 88.4L192.8 107l37.8 4.2 5.9 37.8 27.7-31.3 45.7 17.6-4.7-18.8 21.7-10.2-41.2-6.9-.6 4.3-44.8-2.4.1-9.6zm128.9 27.3l-23.3 10.8 9.5 38-66.3-25.6-44.9 50.7-9.5-62-56.8-6.4C89.15 155.9 30.48 219.4 31.31 286.3c1.21 97.1 105.79 178.3 230.29 178.3 137-.1 216-82 219-175.5 2.2-69.7-60-139.2-131.1-173.4zm32 55.9l14.2 11.2-9.4 11.9-14.2-11.2zm-265.4 29.8l14.2 11.2-9.4 11.9-14.2-11.2zm298 4.7l18 .4-.5 18.4-18-.4zm-23.8 20.7l18.3 11.9-9.8 15-18.3-11.9zM91.98 244.9l17.92 1.4-1.3 17.8-17.91-1.4zm49.92 11.2l17.2 5.2-3.9 12.9L138 269zM77.13 295l1.99 18.9-17.9 1.8-1.99-18.9zm33.07 34.3l15.2 9.6-8.5 13.4-15.2-9.6z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTangerineIcon })
);
