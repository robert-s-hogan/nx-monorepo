import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCrystalShrineIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'crystal-shrine'];
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
        d="M116.215 17.404c0 16-16 32-32 32 16 0 32 16 32 32 0-16 16-32 32-32-16 0-32-16-32-32zm64.326 12.87l-23.488 92.062h63.965l27.49-27.49-67.967-64.573zm228.147 25.958c0 20.214-20.216 40.428-40.43 40.428 20.214 0 40.43 20.214 40.43 40.428 0-20.214 20.213-40.428 40.427-40.428-20.214 0-40.428-20.214-40.428-40.428zm-150.022 53.913l-23.18 23.18L283.043 311h29.066l-53.443-200.855zm75.232 2.365l16.123 32.281 45.188 33.148-4.393-53.533-56.918-11.896zm-18.033 4.181l-26.685 38.121 10 37.586 33.38-42.283-16.695-33.424zm-160.672 23.645L172.42 206.4l21.988 12.623L239.043 311h25.365l-45.68-170.664h-63.535zm189.797 23.088l-40.03 50.703L330.737 311h.026l64.08-111.004-49.852-36.572zm122.352 5.834c0 16-16 32-32 32 16 0 32 16 32 32 0-16 16-32 32-32-16 0-32-16-32-32zm-374.22 12.375l11.308 76.129 48.834-6.356 19.322-24.154-79.465-45.62zm346.995 53.793l-52.547 13.172L351.547 311h25.77l19.16-19.48 43.64-56.094zm-255.21 5.244l-17.403 21.75 25.77 48.58h25.761l-34.129-70.33zm-33.84 29.174l-39.005 5.074L148.145 311h24.751l-21.83-41.156zm-91.37 11.396c0 16-16 32-32 32 16 0 32 16 32 32 0-16 16-32 32-32-16 0-32-16-32-32zM137 329v30h238v-30H137zm32 48v78h16v-78h-16zm34 0v78h106v-78H203zm124 0v78h16v-78h-16zm-164.758 96l-30.119 16h247.754l-30.12-16H162.243z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCrystalShrineIcon })
);
