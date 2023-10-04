import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMagicTridentIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'magic-trident'];
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
        d="M242.104 17.87l-102.96 205.92c15.477 17.84 29.092 50.475 36.428 112.638 62.163 7.336 94.8 20.95 112.64 36.427l205.92-102.96-159.827 31.966-77.022 25.675-12.137-60.68-60.68-12.138 25.673-77.022zm251.03.995l-244.52 189.63-18.5 36.997 30.33 6.065 6.064 30.326 36.998-18.498zM191.275 275.47l45.257 45.255-12.727 12.726-45.254-45.253zm-38.727 28.827L68.44 388.402l-17.87 60.3 107.535-107.536c-1.566-13.837-3.443-26.08-5.558-36.87zm18.287 49.598L63.297 461.43l60.3-17.87 84.106-84.107c-10.788-2.115-23.032-3.992-36.87-5.558zM41.76 415.085l-23.89 23.89v55.156h55.155l23.89-23.89-78.386 23.23z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMagicTridentIcon })
);
