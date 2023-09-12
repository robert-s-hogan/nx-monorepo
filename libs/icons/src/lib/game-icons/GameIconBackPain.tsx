
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBackPainIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'back-pain'];
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
        <path fill="currentColor" d="M200.094 21.094l13.875 143.72L83.72 58.343l72.624 139.906-77.72-29.47 34.282 62.126-82.062-2.062L135.874 297 31.75 327.03l109.438 21.158c8.39-48.802 49.597-85.194 97.75-105.344 28.916-12.1 60.67-18.762 90.75-18.594 19.237.108 37.776 3.024 54.437 9.063l48-119.375L350 196.5l19.22-161.78-41.876 95.968L313.47 92.03l-32.69 83.5-80.686-154.436zm255.78 190.687c-17.883-.093-38.852 9.04-55.937 26.126-5.31 5.31-9.823 11.022-13.562 16.875-29.252-17.627-72.375-16.805-113.28-3.905-9.17 2.484-18.214 5.537-26.94 9.188-43.676 18.277-78.503 49.837-86.218 89.625-6.61 30.108 5.37 63.223 47.438 94.843H88.062l-26.437 47.75H318.78l-88.467-103.25c24.27-26.707 67.457-43.703 97-45.06 13.792 45.096 36.233 113.496 71.718 148.31h60.876c-43.07-46.546-76.57-109.087-81.97-179.842 1.617 3.235 3.72 6.188 6.314 8.78 18.664 18.664 55.945 11.618 83.28-15.718 27.337-27.336 34.384-64.618 15.72-83.28-7-7-16.645-10.382-27.375-10.44z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBackPainIcon);
    