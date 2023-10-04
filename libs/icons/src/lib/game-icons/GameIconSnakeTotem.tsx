import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSnakeTotemIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'snake-totem'];
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
        d="M138.375 21.094l-78.47 78.47v161.874l158.97 33.187-3.813 18.28-155.156-32.374v108.5l87.03 106.876h140.158V407.72H185.03l21.157 28h42.407v18.686h-51.688l-2.812-3.72-35.313-46.686-11.31-14.97h139.624V211.095l-138.75-31.844-7.25-1.656v-75.218h18.687v60.31l254.345 58.376 5-62.156c-10.023 12.4-25.68 20.813-46.97 20.813-80.483 0-80.436-120.47 0-120.47 25.84 0 43.383 12.435 52.626 29.313l5.408-67.47H138.375zm75.78 24.03h85.626l-25.374 42.813-60.25-42.812zM487.22 82.657l-59.658 28.656h-96.53c-.48 2.69-.72 5.433-.72 8.188 0 3.548.395 7.083 1.188 10.5h95.094l60.625 29.156 8.092-16.844-44.53-21.406L495.31 99.5l-8.093-16.844z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSnakeTotemIcon })
);
