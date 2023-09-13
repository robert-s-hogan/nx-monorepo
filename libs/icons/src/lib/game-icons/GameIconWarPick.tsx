
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWarPickIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'war-pick'];
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
        <path fill="currentColor" d="M136.48 27.746c-2.108.024-4.174.152-6.242.272 42.927 23.035 87.233 59.434 121.902 96.57 8.66 9.276 12.358 18.765 16.371 27.44 2.486 5.37 5.173 10.658 9.297 16.37l30.65-26.373c-3.067-5.031-5.213-10.567-6.044-16.386-.919-6.432.09-13.283 3.039-19.48-32.92-24.035-68.653-47.25-102.75-62.026-22.779-9.871-44.547-15.843-64.1-16.371-.714-.02-1.42-.024-2.123-.016zm226.463 99.256c-2.825 0-5.562.505-8.092 1.293l28.91 28.91c.788-2.53 1.293-5.266 1.293-8.092 0-6.485-2.314-12.726-5.85-16.262-3.535-3.535-9.776-5.85-16.261-5.85zm-23.088 11.754l-21.89 18.836c9.951-2.533 20.985.059 28.712 7.787 7.728 7.728 10.32 18.761 7.788 28.713l18.835-21.89zm-14.39 35.78c-3.053 0-6.104 1.189-8.485 3.57-4.762 4.761-4.762 12.208 0 16.97 4.762 4.762 12.21 4.762 16.97 0 4.763-4.762 4.763-12.209 0-16.97-2.38-2.381-5.433-3.57-8.485-3.57zm-27.582.335l-9.846 8.47-5.352 46.03 46.03-5.352 8.468-9.841c-10.923 4.588-24.09 2.467-32.931-6.373-8.842-8.842-10.959-22.01-6.37-32.934zm72.148 28.727l-26.373 30.65c5.712 4.124 11 6.812 16.371 9.297 8.674 4.013 18.163 7.711 27.44 16.37 37.136 34.67 73.534 78.977 96.57 121.903 1.254-21.638-4.803-46.36-16.115-72.465-14.776-34.097-37.992-69.829-62.026-102.75-6.198 2.95-13.049 3.958-19.48 3.04-5.82-.832-11.355-2.978-16.387-6.045zm-103.375 7.79l-28.398 26.588L274.08 273.8l26.588-28.399-38.489 4.477zm-41.545 38.897l-11.686 10.941 37.405 37.405 10.941-11.686zm-24.832 23.252l-90.564 84.797 44.007 44.008 84.797-90.565zM96.566 370.643l-21.91 20.515 46.242 46.242 20.516-21.91zm-28.09 39.79l-5.656 16.971 21.832 21.832 16.97-5.656zm-18.789 29.295l-18.49 9.686a106.156 106.156 0 0 0-2.746 13.676c-.608 4.548-.852 9.29-.469 12.92.383 3.63 1.496 5.735 1.912 6.152.417.417 2.523 1.53 6.153 1.912 3.63.383 8.372.139 12.92-.469a106.155 106.155 0 0 0 13.675-2.746l9.686-18.49z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWarPickIcon);
    