import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSerratedSlashIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'serrated-slash'];
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
        d="M45.156 22.375c-7.16.035-14.42.166-21.78.375 237.557 25.66 433.75 444.537 147 429.47C547.707 626.792 649.035 19.44 45.155 22.374zm114.03 23.656c42.156 8.716 79.4 21.247 111.908 36.564l-49.906-5.813c-18.943-11.373-39.588-21.733-62-30.75zm101.72 54.19l53.78 6.28c18.73 11.87 35.41 24.773 50.064 38.375L260.906 100.22zm37.813 36.593l97.342 41.843c16.622 21.04 29.12 43.047 37.72 65.094L298.718 136.812zm52.186 65.156l92.53 73.28c4.36 19.457 5.676 38.577 4.095 56.72l-96.624-130zm30.156 71.905L443.22 357.5c-3.516 13.73-8.858 26.63-16 38.313L381.06 273.875zm9.25 77.188l23.72 62.656c-5.084 5.772-10.736 11.096-16.907 15.936l-6.813-78.594zm-14.375 50.687l3.438 39.625c-6.736 3.695-13.956 6.876-21.625 9.53l18.188-49.155zm-34.593 39.625l-5.688 15.375c-14.48 2.757-30.254 3.816-47.312 2.875 20.822-1.33 38.548-7.8 53-18.25z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSerratedSlashIcon })
);
