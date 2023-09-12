
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTwinShellIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'twin-shell'];
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
        <path fill="currentColor" d="M369.318 21.48c-2.627-.023-5.247-.02-7.86.006-26.868.275-52.91 3.153-77.9 9.422-56.728 14.232-108.343 45.52-153.542 104.375 4.295 11.25 9.866 22.107 16.898 32.182l-15.326 10.697c-23.904-34.247-32.538-75.07-31.746-112.36-57.23 71.004-57.995 150.478-29.145 211.17 31.333 65.917 97.016 108.277 164.907 92.317 55.694-28.525 98.172-83.276 106.216-174.394l18.618 1.643c-8.586 97.25-56.33 159.16-118.083 190.26l.02.08c-.11.03-.223.053-.334.08-3.278 1.646-6.596 3.21-9.95 4.68-60.98 26.76-132.998 25.865-195.336 4.784 5.34 10.835 15.555 23.535 30.367 35.765 22.506 18.582 54.38 36.17 90.07 47.54 70.693 22.517 155.09 21.008 216.402-40.015 10.392-47.148 16.25-99.37 15.644-132.172l18.686-.346c.768 41.507-7.402 107.07-22.184 161.54 53.058-61.297 78.07-117.533 84.133-165.89 7.062-56.31-11.065-102.365-41.65-135.462-30.584-33.098-73.886-52.894-116.534-55.104-42.648-2.208-84.29 12.73-113.614 49.206v.002c-21.19 26.36-29.025 47.267-29.34 61.54-.314 14.272 5.57 22.437 15.56 27.693 19.982 10.513 58.994 3.832 82.573-26.392v-.002c12.514-16.04 16.338-27.975 16.18-34.525-.158-6.55-2.39-8.67-7.604-10.402-10.424-3.464-33.893 3.112-46.32 24.317l-16.124-9.45c16.453-28.072 46.122-39.984 68.338-32.6 11.108 3.69 20.073 14.328 20.395 27.687.32 13.358-6.095 28.48-20.13 46.47-28.702 36.79-75.363 47.562-106.01 31.438-15.323-8.062-25.99-24.237-25.54-44.645.45-20.407 10.696-44.523 33.458-72.838 33.22-41.324 81.43-58.63 129.144-56.158 8.573.443 17.14 1.523 25.625 3.19 19.008-34.687 50.532-57.58 87.272-71.613-19.07-2.243-37.838-3.566-56.232-3.718z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTwinShellIcon);
    