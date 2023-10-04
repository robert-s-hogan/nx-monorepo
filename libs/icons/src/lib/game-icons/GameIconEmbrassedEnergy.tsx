import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconEmbrassedEnergyIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'embrassed-energy'];
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
        d="M179.813 20.72v81.25L135.78 75.624l17.564 46.938-115.656-20.938 84.718 49.906H20v27.345l110.47 14.875 96.593-29.188c-11.303-11.87-18.594-30.743-18.594-52 0-35.926 20.87-65.062 46.624-65.062 25.753 0 46.625 29.136 46.625 65.063 0 20.847-7.038 39.375-17.97 51.28l99.03 29.907 112.5-15.156V151.53H394.19l84.718-49.905-120.437 21.78 17.874-47.718-48.656 29.126V20.72H179.813zM495.28 223.343l-112.5 22.437-55.405-13.124-28.03 118.313 16.592 145h51.688L329.25 351.22l46.53 27.842-21.31-56.937 124.436 22.5-91.125-53.688h107.5v-67.593zM20 223.75v67.188h108.813l-91.125 53.687L157.31 322.97 136.345 379l38.47-23-28.595 139.97h48.155L207.28 351.56 185.595 232.72l-55.125 13.06L20 223.75z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconEmbrassedEnergyIcon })
);
