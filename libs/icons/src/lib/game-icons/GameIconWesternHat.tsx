
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWesternHatIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'western-hat'];
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
        <path fill="currentColor" d="M199.117 111.268c-2.435.007-4.816.524-7.117 1.675-18.365 9.194-38.59 129.65-50.16 164.987 45.64 13.262 87.106 16.556 115.314 16.425 28.21-.13 68.652-3.635 112.97-16.49C358.53 242.48 338.34 122.123 320 112.943c-21.065-10.53-48.73 31.998-64 32-13.6.002-37.05-33.734-56.883-33.675zM224 160c11.53 40.5 9.107 74.724 0 96-9.107 21.276-32 11.235-32 0 25.333-6.927 26.21-35.5 32-96zm64 0c5.79 60.5 6.667 89.073 32 96 0 11.235-22.893 21.276-32 0s-11.53-55.5 0-96zM46.79 263.127c-17.5.4-24.138 17.83-14.79 40.873 11.088 30.345 58.972 96.774 112 96 24.103-.352 31.438-15.483 112-16 80.562-.517 87.88 15.648 112 16 53.017.774 100.907-65.655 112-96 13.006-32.066-4.934-53.25-40.016-32.84-21.85 11.926-44.06 17.898-65.984 24.48-.02 0-.044.024-.064.024v-.006c-45.8 13.756-87.924 17.486-116.754 17.615-28.83.13-72.027-3.357-119.145-17.548-21.897-6.618-44.09-12.59-66.027-24.565-9.866-5.74-18.374-8.19-25.22-8.033z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWesternHatIcon);
    