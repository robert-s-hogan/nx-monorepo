
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPikemanIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'pikeman'];
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
        <path fill="currentColor" d="M406 27.594l-23.625 76.187-5.844 28.97-52.25 47.844-51.5-43.125-23.405-4.095c8.217-14.33 14.685-32.77 16.406-49.594 10.02-2.28 20.516-5.426 31.69-9.81l-36.283-16.564c-1.964-7.07-16.546-28.484-31.406-27.28h-.03c-18.2 4.6-25.82 25.298-28.72 40.718L176.5 90.53c7.87-.307 15.58-.415 23.344-.53.66 14.1 4.4 27.847 9.97 36.375l-35.158-6.125L106 195.906l77.344 55.875 1.625 16.845-34.19 215.75h38.376l38.313-169.25 47.874 169.25h37.47l-3.564-16.406 17.094 16.405 63.062-322.53c5.01-4.54 9.265-8.483 12.094-11.314.177-10.537-2.537-18.942-5.094-24.5l1.125-5.686 8.47-92.75zm-223.156 125.78l.344 64.095-31.5-23.75 31.156-40.345zm88.03 21.25l50.876 45.94s22.993-19.458 44.875-38.533l-57.438 285.564-42.812-197.53 4.5-95.44z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPikemanIcon);
    