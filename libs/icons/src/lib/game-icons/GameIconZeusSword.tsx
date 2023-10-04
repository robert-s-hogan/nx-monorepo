import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconZeusSwordIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'zeus-sword'];
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
        d="M498.03 15.125l-87.06 34.72-164.5 164.5-34.657-32.095 31.156-28.844-223-133.594L176.155 164.5l-31.094 28.813 63.563 58.875-70.03 70.03c2.932 3.53 5.915 7.01 8.968 10.438l9.656 9.656 71.5-71.5 13.718 12.688-72 72 9.843 9.844c3.502 3.116 7.044 6.19 10.657 9.187l72-72 40.782 37.75-29 26.876 223 133.594-158.69-146.97 29-26.842-67.217-62.282 162.5-162.5 34.718-87.03zM430.69 68.813l13.218 13.218L280.28 245.657l-13.717-12.687L430.688 68.812zm-341 216.875L61.874 313.5 199.22 450.875l27.81-27.844c-56.283-34.674-103.014-81.617-137.343-137.342zm18.75 100.812l-81 81 17.75 17.75 81-81-17.75-17.75z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconZeusSwordIcon })
);
