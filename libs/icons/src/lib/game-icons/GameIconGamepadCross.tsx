import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGamepadCrossIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'gamepad-cross'];
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
        d="M176.938 24.03V75.44c-52.96 6.715-94.96 48.652-101.72 101.593H24.564v160.096h50.75c7.034 52.62 48.895 94.247 101.624 100.938V489.5H337v-51.374c53.01-6.453 95.158-48.183 102.22-101h50.811V177.03h-50.717C432.526 123.893 390.238 81.85 337 75.376V24.03H176.938zm18.687 18.69h122.688v139.75L257.25 243.5l-61.625-61.625V42.72zm61.656 17.436c-24.524 0-44.405 19.88-44.405 44.407 0 24.525 19.88 44.406 44.406 44.406 24.524 0 44.376-19.882 44.376-44.407 0-24.526-19.85-44.407-44.375-44.407zM43.25 195.72h139.78l61.032 61.03-61.718 61.688H43.25v-122.72zm288.25 0h139.844v122.718H332.188L270.5 256.75l61-61.03zm-226.406 16.624c-24.525 0-44.406 19.88-44.406 44.406 0 24.525 19.88 44.406 44.406 44.406 24.525 0 44.406-19.88 44.406-44.406 0-24.523-19.88-44.406-44.406-44.406zm304.344 0c-24.526 0-44.407 19.88-44.407 44.406 0 24.525 19.882 44.406 44.408 44.406 24.525 0 44.406-19.88 44.406-44.406 0-24.523-19.88-44.406-44.406-44.406zM257.25 269.938L318.313 331v139.813H195.625v-139.22l61.625-61.656zm.03 94.562c-24.524 0-44.405 19.88-44.405 44.406 0 24.525 19.88 44.406 44.406 44.406 24.524 0 44.376-19.88 44.376-44.406 0-24.525-19.85-44.406-44.375-44.406z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGamepadCrossIcon })
);
