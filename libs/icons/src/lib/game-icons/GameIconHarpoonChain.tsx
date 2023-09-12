
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHarpoonChainIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'harpoon-chain'];
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
        <path fill="currentColor" d="M18.094 18.156V31.75l6.78 6.813c-2.67 4.788-4.186 10.295-4.186 16.124C20.688 72.98 35.706 88 54 88c5.832 0 11.34-1.515 16.125-4.188l14.25 14.25c-2.672 4.786-4.188 10.294-4.188 16.126 0 18.293 15.02 33.312 33.313 33.312 5.83 0 11.336-1.517 16.125-4.188l13.78 13.75c-2.67 4.786-4.186 10.294-4.186 16.125 0 18.294 15.017 33.344 33.31 33.344 5.834 0 11.34-1.54 16.126-4.218l14.75 14.782c-2.67 4.79-4.187 10.295-4.187 16.125 0 18.292 15.017 33.31 33.31 33.31 5.83 0 11.337-1.516 16.126-4.186l14.906 14.906c-16.72 11.7-38.614 12.733-56.28 3.156 34.39 49.475 187.846 52.137 28.687 137.094l259.5 78.813-78.845-259.47c-84.275 157.888-87.562 8.106-135.906-27.874 8.852 17.46 7.534 38.734-3.94 55.06l-14.967-14.967c2.58-4.72 4.062-10.128 4.062-15.844 0-18.294-15.05-33.345-33.344-33.345-5.716 0-11.124 1.483-15.843 4.063l-14.875-14.907c2.575-4.722 4.032-10.126 4.032-15.843 0-18.293-15.02-33.312-33.313-33.312-5.716 0-11.124 1.456-15.843 4.03l-13.906-13.874c2.58-4.718 4.064-10.126 4.064-15.843 0-18.293-15.05-33.312-33.344-33.312-5.717 0-11.125 1.456-15.844 4.03L83.28 70.532c2.576-4.718 4.032-10.126 4.032-15.843 0-18.293-15.018-33.343-33.312-33.343-5.717 0-11.125 1.483-15.844 4.062l-7.25-7.25H18.094zM54 40.03c8.194 0 14.625 6.464 14.625 14.657 0 8.194-6.432 14.626-14.625 14.626-8.194 0-14.625-6.432-14.625-14.626 0-8.193 6.43-14.656 14.625-14.656zm59.5 59.532c8.194 0 14.656 6.432 14.656 14.626 0 8.193-6.463 14.624-14.656 14.624-8.194 0-14.625-6.43-14.625-14.625 0-8.193 6.43-14.624 14.625-14.624zm59.03 59c8.196 0 14.626 6.432 14.626 14.625 0 8.194-6.432 14.657-14.625 14.657s-14.624-6.463-14.624-14.656c0-8.194 6.43-14.625 14.625-14.625zm60 60c8.196 0 14.657 6.463 14.657 14.657 0 8.192-6.463 14.624-14.656 14.624-8.193 0-14.624-6.432-14.624-14.625 0-8.195 6.43-14.657 14.625-14.657zm174.22 80.657l37.344 122.686-95.03-95.03c29.376 7.006 50.25-4.847 57.686-27.657zm-81 50.78l95.313 95.313-122.938-37.47c22.854-7.453 34.712-28.386 27.625-57.843z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHarpoonChainIcon);
    