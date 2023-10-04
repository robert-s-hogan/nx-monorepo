import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHumanTargetIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'human-target'];
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
        d="M247 24v15.2C134.4 43.81 43.81 134.4 39.2 247H24v18h15.2c4.61 112.6 95.2 203.2 207.8 207.8V488h18v-15.2c112.6-4.6 203.2-95.2 207.8-207.8H488v-18h-15.2C468.2 134.4 377.6 43.81 265 39.2V24h-18zm0 33.21V88h18V57.21C367.8 61.78 450.2 144.2 454.8 247H424v18h30.8c-4.6 102.8-87 185.2-189.8 189.8V424h-18v30.8c-102.8-4.6-185.22-87-189.79-189.8H88v-18H57.21C61.78 144.2 144.2 61.78 247 57.21zm9 52.79a64 64 0 0 0-64 64 64 64 0 0 0 38.1 58.5C172.6 280.9 161.9 349.6 176 406h160c14.1-56.4 3.3-125.2-54.1-173.6A64 64 0 0 0 320 174a64 64 0 0 0-64-64z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHumanTargetIcon })
);
