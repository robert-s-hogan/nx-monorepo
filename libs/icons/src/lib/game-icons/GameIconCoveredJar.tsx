
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCoveredJarIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'covered-jar'];
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
        <path fill="currentColor" d="M256 20.499c-5.37 0-11.966 2.87-17.602 7.799-5.635 4.928-10.078 11.758-11.736 17.642-.916 3.253 1.542 14.605 5.803 23.897 2.475 5.398 4.819 9.6 6.619 12.664h33.832c1.8-3.064 4.144-7.266 6.62-12.664 4.26-9.292 6.718-20.644 5.802-23.897-1.658-5.884-6.101-12.714-11.736-17.642-5.636-4.929-12.231-7.799-17.602-7.799zm-34.879 66.803c-15.953 2.54-29.665 7.058-40.234 13.892-16.04 10.371-25.856 25.57-27.54 50.541 100.168 14.306 105.138 14.306 205.305 0-1.683-24.97-11.5-40.17-27.539-50.54-10.57-6.835-24.28-11.353-40.234-13.893-2.98 5.463-5.326 9.09-5.326 9.09l-2.66 4.107h-53.786l-2.66-4.107s-2.346-3.627-5.326-9.09zm-84.889 80.18C80.017 193.328 80 237.626 80 259.5c0 64 32 136 64 200 16 16 64 32 112 32s96-16 112-32c32-64 64-136 64-200 0-21.874-.017-66.172-56.232-92.02l-6.495.928c-112 16-114.546 16-226.546 0z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCoveredJarIcon);
    