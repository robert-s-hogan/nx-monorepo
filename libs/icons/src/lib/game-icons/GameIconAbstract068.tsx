import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAbstract068Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'abstract-068'];
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
        d="m21,21v70.5c90.8555,0 164.5,73.6445 164.5,164.5s-73.6446,164.5-164.5,164.5v70.5h470v-70.5c-90.8555,0-164.5001-73.6446-164.5001-164.5s73.6446-164.5 164.5001-164.5v-70.5h-470zm235,43.475c18.8719,0 34.075,15.203 34.075,34.075v314.9c0,18.8719-15.2031,34.075-34.075,34.075s-34.075-15.2031-34.075-34.075v-314.9c0-18.8719 15.203-34.075 34.075-34.075zm-235,70.2062v242.6375c66.9945,0 121.3188-54.3243 121.3188-121.3188s-54.3243-121.3187-121.3188-121.3187zm470,0c-66.9945,0-121.3188,54.3243-121.3188,121.3187s54.3243,121.3188 121.3188,121.3188v-242.6375z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAbstract068Icon })
);
