import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBolterGunIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bolter-gun'];
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
        d="M406.125 71.563v28.812h-285.25L68.312 153.5v76.97L22 403.312l94.438 25.312 12.062-45.03-37.125-9.97 26.844-59h148.936v.094h174.53l.002-214.345h-16.875V71.562h-18.688zm54.25 55.968v52.814h34.156V127.53h-34.155zm-161.406 8.064h108.81v32.97H298.97v-32.97zM152.75 238.78h25.438l34.187 41.345 6.125-41.344h48.656v57.157H126.75l26-57.156zm143.72 94.47v38.938h114.155V333.25h-17.063v23.53h-18.687v-23.53h-42.28v23.53h-18.69v-23.53H296.47z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBolterGunIcon })
);
