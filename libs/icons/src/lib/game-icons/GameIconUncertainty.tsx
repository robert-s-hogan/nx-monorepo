
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconUncertaintyIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'uncertainty'];
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
        <path fill="currentColor" d="M257.78 19.438c-127.92.016-231.75 103.855-231.75 231.78 0 55.734 19.71 106.776 52.532 146.72L57.75 434.094h132.406l-66.312-114.72-22.375 39c-20.9-30.478-33.064-67.442-33.064-107.155 0-104.523 84.854-189.376 189.375-189.376 104.523 0 189.408 84.853 189.408 189.375 0 39.108-11.68 75.664-32 105.874l-21.875-37.72L327 434.095h132.406l-21.594-37.47c32.225-39.78 51.75-90.253 51.75-145.405 0-127.927-103.827-231.766-231.75-231.782h-.03zm-.655 75.468c-49.528-.047-110.474 29.232-128.406 104.938l60.75 14.312c26.965-76.242 90.87-70.824 113.31-28.625 26.775 50.346-89.687 107.283-84.124 190.407h77.688c6.49-98.144 118.973-123.49 59.562-229.53C337.963 114.38 301 96.572 261.876 95.03V95c-1.573-.062-3.153-.092-4.75-.094zM258.5 395.97c-26.95 0-48.594 21.644-48.594 48.592 0 26.95 21.645 48.594 48.594 48.594 26.95 0 48.594-21.645 48.594-48.594 0-26.948-21.645-48.593-48.594-48.593z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconUncertaintyIcon);
    