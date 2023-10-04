import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconKnapsackIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'knapsack'];
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
        d="M230.125 18.156V247h49.313V18.156h-49.313zM78.812 21.438l-16 136.906c48.707 30.112 97.637 47.843 148.625 53.094V33.125c-44.244-1.822-88.46-5.89-132.625-11.688zm349.438.28c-43.398 6.814-86.784 10.647-130.125 11.97v175c46.732-7.458 95.816-24.375 148.438-50.844L428.25 21.72zm-1.938 166.532c-44.474 19.847-87.06 32.836-128.187 38.97V247h37.031v143.188h-37.031v8.718c0 34.41-20.516 56.084-43.25 56.28-22.734.2-43.438-21.34-43.438-56.28v-8.72l-27.656.002h-9.343V247h37.001v-17.188c-43.774-4.164-86.14-16.857-127.687-38.062 5.04 92.69 3.66 185.37-5.063 278.063 117.402 32.047 234.788 31.002 352.188 0-6.853-93.858-9.223-187.706-4.563-281.563zm-233.187 77.438V371.5H316.47V265.687H193.124zm20.47 18.156H296v67.5H213.594v-67.5zm18.686 18.687v30.126h45.032V302.53h-45.03zm-2.155 87.658v8.718c0 28.23 13.32 37.692 24.594 37.594 11.27-.098 24.718-10.018 24.718-37.594v-8.72l-49.313.002z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconKnapsackIcon })
);
