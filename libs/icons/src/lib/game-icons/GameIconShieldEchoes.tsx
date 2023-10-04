import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconShieldEchoesIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'shield-echoes'];
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
        d="M32.75 23.063l-9.22.125-.124 9.218c0 60.947 6.182 121.836 24.532 171.625 18.35 49.79 49.816 89.117 99.28 102.72l2.22.594 2.218-.47c2.123-.452 4.195-.96 6.25-1.5 18.914 42.993 48.93 76.25 93.594 88.532l2.188.594 2.218-.47c1.185-.25 2.337-.532 3.5-.81 20.05 50.325 52.134 87.948 101.438 101.5 113.453-24.192 130.97-161.447 130.97-296.69H377.467c2.195-25.66 2.905-52.133 2.905-78.468v-9.343H273.25c2.16-25.457 2.875-51.703 2.875-77.814v-9.343H32.75zm9.47 18.687h215.124c-.17 23.184-1 46.25-2.938 68.47H127.688v9.343c0 59.563 5.887 119.072 23.282 168.218-.326.08-.643.175-.97.25-41.358-12.25-67.735-44.895-84.53-90.467C49.266 153.602 42.85 98.21 42.22 41.75zm104.28 87.156h215.125c-.172 23.407-1.046 46.71-3.03 69.125H229.968c0 62.666 6.02 125.03 22.78 176.69-40.495-12.593-66.44-44.983-83.03-90-16.203-43.962-22.588-99.355-23.22-155.814zm108.406 89.03h213.156v9.345c0 54.125-3.516 108.978-17.968 153.782-14.452 44.805-41.13 80.5-85.938 90.97l-2.437.562-2.408-.72c-40.974-12.34-67.332-47.6-83-91.905-15.667-44.306-21.406-98.46-21.406-152.69v-9.343zm18.813 18.69c.65 49.682 6.538 98.41 20.217 137.093 14.2 40.152 36.1 68.604 68.532 79.374 35.817-9.437 56.817-37.4 69.842-77.78 12.557-38.93 16.445-88.56 16.875-138.69H273.72z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconShieldEchoesIcon })
);
