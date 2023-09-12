
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCalendarHalfYearIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'calendar-half-year'];
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
        <path fill="currentColor" d="M25 57v30h62V57H25zm160 0v62h62V57h-62zm80 0v14h62V57h-62zm80 0v39h62V57h-62zm80 0v78h62V57h-62zM105 73v78h62V73h-62zm160 16v78h62V89h-62zM25 105v78h62v-78H25zm320 9v78h62v-78h-62zm-160 23v78h62v-78h-62zm240 16v78h62v-78h-62zm-320 16v78h62v-78h-62zm160 16v78h62v-78h-62zM25 201v78h62v-78H25zm320 9v78h62v-78h-62zm-160 23v78h62v-78h-62zm240 16v78h62v-78h-62zm-320 16v78h62v-78h-62zm160 16v78h62v-78h-62zM25 297v78h62v-78H25zm320 9v78h62v-78h-62zm-160 23v78h62v-78h-62zm240 16v78h62v-78h-62zm-320 16v94h62v-94h-62zm160 16v78h62v-78h-62zM25 393v78h62v-78H25zm320 9v69h62v-69h-62zm-160 23v46h62v-46h-62zm240 16v14h62v-14h-62z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCalendarHalfYearIcon);
    