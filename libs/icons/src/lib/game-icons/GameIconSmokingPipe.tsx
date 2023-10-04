import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSmokingPipeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'smoking-pipe'];
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
        d="M483.66 146.386l-162.2 75.44c6.805 5.068 11.616 12.53 13.86 21.566 31.302-30.166 133.963-65.006 148.34-65.006 9.932-32 0-32 0-32zM46.193 219.384c-14.496 43.792-22.06 69.925-22.262 86.385-.21 17.282 5.624 25.782 22.095 42.252 13.328 13.328 28.604 18.273 48.182 17.518 19.53-.754 43.06-7.833 69.69-19.338 61.88-30.948 127.09-66.444 154.712-91.86.012-9.254-2.38-14.29-7.306-17.646-29.185 15.145-57.58 31.062-125.656 46.467l-10.986 2.486v-11.264c0-16-.098-27.592-1.826-36.235-1.504-7.515-4.044-12.927-9.2-18.766H46.193z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSmokingPipeIcon })
);
