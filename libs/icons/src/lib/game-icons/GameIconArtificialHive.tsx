import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconArtificialHiveIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'artificial-hive'];
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
        d="M251.313 23.844L49.438 140.25l-.376 233.5 202.625 116.406L453.563 373.75l.375-233.5L251.313 23.844zm-1.407 57.062l52.406 30.25v60.5l-52.406 30.25-52.406-30.25v-60.5l52.406-30.25zm-105.344 60.47l52.407 30.25v60.5l-52.407 30.25 52.406 30.25v60.53l-52.407 30.25-52.407-30.25v-60.53l52.406-30.25-52.406-30.25v-60.5l52.406-30.25zm210.313 0l52.406 30.25v60.5l-52.405 30.25 52.406 30.25v60.53l-52.405 30.25-52.406-30.25v-60.53l52.405-30.25-52.406-30.25v-60.5l52.405-30.25zM249.905 202l52.407 30.25v60.5l-52.28 30.188 52.28 30.156v60.53l-52.406 30.25-52.406-30.25v-60.53l52.28-30.156-52.28-30.188v-60.5L249.906 202z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconArtificialHiveIcon })
);
