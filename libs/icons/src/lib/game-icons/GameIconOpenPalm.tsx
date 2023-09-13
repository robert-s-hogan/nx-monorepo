
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconOpenPalmIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'open-palm'];
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
        <path fill="currentColor" d="M461.512 194.104L494 222.457S391.01 310.462 305.379 342.57c-8.514 3.191-45.39 8.99-69.714 8.99-9.03 0-16.327-.798-19.8-2.831-64.013-37.392-129.62-43.784-166.905-43.784-19.284.01-30.96 1.712-30.96 1.712V199.261s1.314.068 3.94.068c12.503 0 54.662-1.43 126.128-17.942a40.33 40.33 0 0 1 9.058-.973c24.324 0 57.707 16.804 73.1 18.818 29.49 3.892 112.272 6.207 112.272 6.207l22.621 33.996c-38.48 30.162-158.38 27.146-158.38 27.146s73.77 27.915 164.822-16.667c10.128-4.923 89.951-55.81 89.951-55.81zm-102.162-29.19l-16.074-4.378-57.406 27.185c5.556.273 18.487.516 23.741.74zm38.413-4.475l-61.794 29.277c4.262.136 14.75.438 14.75.438l6.617 8.757 54.652-28.557zm-17.815 66.98l74.423-44.621-18.487-11.462-70.531 37.382z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconOpenPalmIcon);
    