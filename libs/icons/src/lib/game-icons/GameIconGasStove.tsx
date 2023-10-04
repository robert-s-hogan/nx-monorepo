import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGasStoveIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'gas-stove'];
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
        d="M244.8 32c11.2 35.25-4.8 69-36.8 80 4.4 13.1 21 26.2 37.4 30.5 12.2-17.7 23.6-37.4 19.9-55.32 12.5 15.62 18.5 41.02 6 54.42 15.3-4.6 30.2-15.5 32.7-29.6 5.7-32.68-36.3-64-59.2-80zM91.24 103L199 218.1V191.7L132.8 121H192v-18H91.24zM320 103v18h59.2L313 191.7V233h36v-18h-33.1l104.9-112H320zm-87 64v16h46v-16h-46zm-16 34v30h78v-30h-78zm150 0v46h21v-46h-21zm-175 48c.5 0-5.3 1.7-11.4 6.2-6.1 4.5-13.2 11.2-19.8 18.7-10.3 11.7-18.8 25.9-22.2 37.1H329v146H137v30h238V320c0-11.5-10.5-31-23.8-46.1-6.6-7.5-13.7-14.2-19.8-18.7-6.1-4.5-11.9-6.2-11.4-6.2H192zm-55 80v110h174V329H137z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGasStoveIcon })
);
