import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMantrapIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'mantrap'];
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
        d="M60.406 156.688L24 259.75 203.938 324c-.238-8.905 1.562-18.017 5.625-26.594 7.02-14.822 19.54-25.345 33.906-30.187l-24.44-53.908-19.124 54.125-33-72.718-19.094 54.093-33-72.72-19.968 56.532-34.438-75.938zm399.781 0l-34.468 75.937-19.97-56.53-33 72.718-19.094-54.094-33 72.718-19.125-54.125-31.936 70.468c-2.292-.53-4.602-.85-6.906-.936-.462-.018-.915-.03-1.375-.03-14.28-.007-28.097 8.283-34.875 22.592-9.33 19.695-1.36 42.64 17.5 51.656 18.86 9.017 41.483.758 50.812-18.937 1.127-2.38 1.99-4.805 2.625-7.25l199.22-71.125-36.408-103.063zM199.78 178.03v18.69h120.595v-18.69H199.78zm50.126 35.345v52.906h18.688v-52.905h-18.688zm10.25 90.563c9.678 0 17.53 7.824 17.53 17.5.002 9.675-7.854 17.53-17.53 17.53-9.676 0-17.53-7.853-17.53-17.53 0-9.678 7.852-17.5 17.53-17.5zM99.53 336.967c-50.15 13.628-82.56 33.83-82.56 56.22 0 41.017 106.544 74.343 237.718 74.343 131.173 0 237.687-33.327 237.687-74.342 0-22.313-32.124-42.595-81.97-56.22 17.232 8.878 27.533 19.275 27.533 30.47 0 32.127-82.313 58.53-183.25 58.53-100.938 0-182.657-26.403-182.657-58.53 0-11.257 10.095-21.56 27.5-30.47z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMantrapIcon })
);
