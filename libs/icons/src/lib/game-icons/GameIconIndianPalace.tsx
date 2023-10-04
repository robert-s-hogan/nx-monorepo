import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconIndianPalaceIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'indian-palace'];
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
        d="M256 27.88c-8.97 10.574-20.842 21.506-33.637 33.347-16.767 15.515-34.995 32.31-49.45 49.656-14.453 17.345-24.872 35.13-27.25 51.994-2.265 16.054 1.912 31.8 18.275 49.244h184.125c16.362-17.444 20.54-33.19 18.275-49.243-2.38-16.865-12.798-34.65-27.252-51.994-14.454-17.345-32.682-34.14-49.45-49.656C276.843 49.387 264.97 38.454 256 27.88zM32 68.12c-16 16-16 32-16 48h7v71h-7v18h7v279h18v-279h7v-18h-7v-71h7c0-16 0-32-16-48zm448 0c-16 16-16 32-16 48h7v71h-7v18h7v279h18v-279h7v-18h-7v-71h7c0-16 0-32-16-48zm-368 137c-16 16-32 32-32 48v23h64v-23c0-16-16-32-32-48zm288 0c-16 16-32 32-32 48v23h64v-23c0-16-16-32-32-48zm-231 25v14h174v-14zm0 32v222h39v-135c0-16 32-48 48-64 16 16 48 48 48 64v135h39v-222zm-96 32v190h78v-190zm288 0v190h78v-190zm-249 7s16 8.234 16 16v32H96v-32c0-7.766 16-16 16-16zm288 5.464s16 8.233 16 16v32h-32v-32c0-7.767 16-16 16-16zM112 365.12s16 8.234 16 16v32H96v-32c0-7.766 16-16 16-16zm288 0s16 8.234 16 16v32h-32v-32c0-7.766 16-16 16-16zm-288 64s16 8.234 16 16v32H96v-32c0-7.766 16-16 16-16zm288 0s16 8.234 16 16v32h-32v-32c0-7.766 16-16 16-16z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconIndianPalaceIcon })
);
