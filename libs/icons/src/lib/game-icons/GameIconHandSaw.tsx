import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHandSawIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'hand-saw'];
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
        d="M430 34.438l-296.563 238.5 20 20.437 3.844 3.906-1.718 5.22-6.718 20.22 42.906 46.374 32.78-34.97 5.75-27.937 26.532-6.468 4.063-24.814 24.188-5.312 1.593-22.156 26.22-7.532 3.03-20.78 22.125-6.064 6.47-21.562 21.75-8.5 6.25-18.28 17.5-7.095 4.22-16.125 17.53-7.063 3.5-15.5 17.28-6.624 3.845-17.188 15.844-3.813 2.5-17.187 14.5-.97 16.874-18L430 34.438zM113.03 277.813L28.938 339c15.382 51.32 48.128 92.382 86.876 130.906l71.656-78.875L132 331.064l-3.594-3.907 1.656-5.062 6.688-20.063-23.72-24.217zm-17.78 32.093l5.25 5.688 63.78 69.375 5.657 6.124-5.718 6.094-37.814 40.53-13.187 14.094-2.314-19.156c-4.643-38.057-20.223-65.16-52.875-81.406l-13.81-6.875L57 335.72l31.844-21.5 6.406-4.314z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHandSawIcon })
);
