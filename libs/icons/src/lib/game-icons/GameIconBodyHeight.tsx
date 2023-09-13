
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBodyHeightIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'body-height'];
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
        <path fill="currentColor" d="M384 22.545L307.271 99.27l25.458 25.458L366 91.457v329.086l-33.271-33.272-25.458 25.458L384 489.455l76.729-76.726-25.458-25.458L402 420.543V91.457l33.271 33.272L460.73 99.27 384 22.545zm-242.443.258c-23.366 3.035-44.553 30.444-44.553 65.935 0 19.558 6.771 36.856 16.695 48.815l11.84 14.263-18.217 3.424c-12.9 2.425-22.358 9.24-30.443 20.336-8.085 11.097-14.266 26.558-18.598 44.375-7.843 32.28-9.568 71.693-9.842 106.436h42.868l11.771 157.836c29.894 6.748 61.811 6.51 90.602.025l10.414-157.861h40.816c-.027-35.168-.477-75.125-7.584-107.65-3.918-17.933-9.858-33.371-18.04-44.342-8.185-10.97-18.08-17.745-32.563-19.989l-18.592-2.88 11.736-14.704c9.495-11.897 15.932-28.997 15.932-48.082 0-37.838-23.655-65.844-49.399-65.844l-4.843-.093z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBodyHeightIcon);
    