import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconRanchGateIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'ranch-gate'];
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
        d="M25 41v46h462V41H25zm30 64v382h30V105H55zm83.2 0L103 140.2v25.6l60.8-60.8h-25.6zm60.8 0v30h18v-30h-18zm96 0v30h18v-30h-18zm53.2 0l60.8 60.8v-25.6L373.8 105h-25.6zm78.8 0v382h30V105h-30zm-258 48v30h174v-30H169zm-66 142v162l306 .1V295H103zm18 18h240.8l-60 30H121v-30zm270 5.6V343h-48.8l48.8-24.4zM121 361h144.8l-60 30H121v-30zm185.2 0H391v30H246.2l60-30zM121 409h48.8L121 433.4V409zm89.2 0H391v30.1l-240.8-.1 60-30z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconRanchGateIcon })
);
