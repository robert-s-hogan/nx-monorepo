import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSwordmanIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'swordman'];
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
        d="M467.838 35.848c-53.208 3.518-101.284 8.091-139.14 50.18 9.869 29.563 26.168 65.884 46.613 95.234 20.504 29.436 44.758 50.59 68.61 53.297 35.265-33.057 53.699-112.599 23.917-198.711zM189.8 46.02a70.936 54.43 66.039 0 0-15.987 3.638 70.936 54.43 66.039 0 0-20.931 86.928 70.936 54.43 66.039 0 0 51.62 45.443c2.392 57.507-19.428 43.883-70.534 73.606l15.888 31.69c35.566-13.731 51.844-19.703 69.27-44.317 32.586 93.92-1.874 157.236-23.688 247.078l33.711 4.916c23.698-57.247 55.114-122.355 62.438-181.422 48.937 51.134 77.498 114.641 114.65 169.143l35.82-14.75c-45.81-80.724-65.633-128.371-150.591-262.19 26.819-.194 49.826-6.592 70.683-15.422-7.036-10.105-13.565-20.882-19.529-31.886-28.223 12.083-59.028 16.997-90.14.855a70.936 54.43 66.039 0 0-.118-66.955 70.936 54.43 66.039 0 0-62.562-46.355zM15.47 87.309l3.287 34.09 52.6 107.77 21.568-10.526-52.383-107.325-25.072-24.01zm97.066 139.566l-46.756 22.822 3.137 18.496 56.271-27.464-12.652-13.854zm2.318 36.701l-21.568 10.528 16.668 34.15 21.568-10.527-16.668-34.15z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSwordmanIcon })
);
