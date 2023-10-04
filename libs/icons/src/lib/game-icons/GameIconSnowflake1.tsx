import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSnowflake1Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'snowflake-1'];
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
        d="M316.28 19.063L211.19 47.25l36.625 67.78-61.25 16.44L184 54.53 80.437 82.313 52.47 186.72l77 2.186L113 250.344l-67.875-36.22L17.22 318.19l75.843 75.843 40.593-65.56 45.25 45.25-65.562 40.624 76.53 76.53 103.782-27.812-36.5-68.03 61.53-16.47 2.377 77.157 104.687-28.064 27.97-104.437-77.158-2.376L393 259.47l68.03 36.5 27.908-104.22-77-77.03-40.47 65.718-44.624-44.657 65.406-40.75-75.97-75.968zM253.19 125l11.53 21.344-22.874 69.72-54.094-49.095-.813-24.19 66.25-17.78zm64.062 16.75l48.28 48.313-13 21.125-71.81 15.062 15.467-71.375 21.063-13.125zm-176.438 47.47l23.75.686 48.938 54.656-69.563 22.282L123 255.656l17.813-66.437zm221.094 53.56l21.125 11.345-17.78 66.375-23.97-.75-48.5-53.938 69.126-23.03zm-139.25 41.5l-14.625 71.376-19.53 12.094-48.875-48.906 12.094-19.5 70.936-15.063zm40.438 11.064l54.5 48.344.72 23.53-66.533 17.844-11.124-20.75 22.438-68.968z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSnowflake1Icon })
);
