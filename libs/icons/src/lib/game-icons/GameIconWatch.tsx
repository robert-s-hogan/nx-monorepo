import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWatchIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'watch'];
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
        d="M151 23v9c0 21.038-3.39 52.724-8.523 85.336 31.097-25.51 70.354-41.053 111.2-40.756 5.227-.05 10.467.13 15.696.547 36.83 2.13 71.78 16.79 99.924 39.824-5.164-32.6-8.523-64.168-8.297-84.852l.1-9.098H151zm105 72.488c-88.543 0-160.514 71.967-160.514 160.51 0 88.543 71.97 160.516 160.514 160.516 88.543 0 160.514-71.973 160.514-160.516 0-88.543-71.97-160.51-160.514-160.51zm0 17.998c78.815 0 142.514 63.697 142.514 142.512S334.814 398.516 256 398.516c-78.815 0-142.514-63.703-142.514-142.518S177.186 113.486 256 113.486zM174.115 161.3l-12.734 12.72 76.48 76.558a18.94 18.94 0 0 0-.8 5.422A18.94 18.94 0 0 0 256 274.94a18.94 18.94 0 0 0 16.66-9.94h59.096v-17.998h-59.11a18.94 18.94 0 0 0-16.646-9.94 18.94 18.94 0 0 0-5.398.8l-76.487-76.563zm253.233 61.32v64.003h21.306V222.62h-21.306zm-57.96 172.888c-49.015 40.244-119.824 51.034-178.92 27.547-17.515-6.406-33.528-15.775-47.663-27.375 5.107 32.376 8.42 63.672 8.195 84.222l-.1 9.098H361v-9c0-20.857 3.33-52.178 8.39-84.492z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWatchIcon })
);
