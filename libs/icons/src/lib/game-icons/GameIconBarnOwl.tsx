
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBarnOwlIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'barn-owl'];
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
        <path fill="currentColor" d="M297.8 422h-3.6l-28.9 58h25.5v17H185.9v-17h44.2l19.8-62c-41.2-7-73.9-25.5-96.9-58.7l-4 28.5c-23.5-19.2-38-49.3-33.9-101.7l-11.5 51.8s-32.45-25.7-12.7-99.1C44.59 145 56.22 23.5 160.8 23.5c137.9 0 86.6 152.8 109.2 190.3l28.4 29.2c-14.1-10.3-27.7-17-40.2-20.7-36.2-10.8-65.6 1.6-81.1 24.7-15.2 22.5-17.3 56.1 2.2 90 18 31.1 55.1 63 118.5 85zm97.3 1c-113.9-15-174.2-55.6-197.7-96.4-14.8-25.6-14.5-50.9-3-67.9 11-16.4 32.2-24.1 57.9-16.5 42.8 12.7 95.7 64.5 142.8 180.8zm-44.3-125.9 96.2 99.2c-12.4 3.5-24.6 6.7-36.4 9.7-19.2-45.8-39.5-81.5-59.8-108.9zM163.1 74.9c-15.3-15.4-29.2-20.1-40.4-18.6-13.5 1.8-24.49 12.7-30.77 28.8-16.69 42.9.21 122.8 71.17 122.8 71 0 87.9-79.9 71.2-122.8-6.3-16.1-17.3-27-30.8-28.8-11.2-1.5-25.1 3.2-40.4 18.6zm-6.4 17.8 6.4 7.5 6.4-7.5c12.5-14.8 22.8-21.1 31.8-19.9 8.1 1.1 13.7 8.6 17.5 18.4 13.4 34.6 1.6 100-55.7 100-57.3 0-69.1-65.4-55.6-100 3.7-9.8 9.3-17.3 17.4-18.4 9-1.2 19.4 5.1 31.8 19.9zm-41.4 24.8 15.4 4.3 22.8 56 19.4-.5 19.6-55.3 16.8-6.7-7.8-19.4-25.5 10.3-13.6 38.3-16.2-40-25.3-7.1z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBarnOwlIcon);
    