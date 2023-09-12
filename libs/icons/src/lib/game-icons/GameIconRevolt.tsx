
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRevoltIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'revolt'];
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
        <path fill="currentColor" d="M418.176 280.486c21.38-30.735 42.538-61.17 64.123-92.267-30.341-4.086-59.886-8.048-89.888-12.134 13.6-39.089 26.955-77.509 40.735-117.15-41.247 23.546-81.281 46.413-121.716 69.462-10.34-34.333-20.703-68.359-31.223-103.298-18.23 32.498-35.798 63.965-53.603 95.676-33.719-32.262-66.83-64.029-101.163-96.841 7.803 45.31 15.426 89.155 22.986 133.733-43.964-7.009-86.833-13.655-130.986-20.553 31.892 37.199 63.052 73.548 94.4 110.197-27.932 25.67-55.681 51.161-84.029 77.383 36.648 8.173 71.958 16.16 108.18 24.332-13.236 29.451-26.221 58.358-39.577 88.061 23.718-6.284 26.68-7.016 49.303-13.118 0 0 22.35-68.463 32.866-84.747 4.806-7.29 5.267-13.96 3.675-22.182-6.668-34.118-12.749-68.32-19.108-102.447-.39-1.934-.47-3.335 1.543-4.647 23.978-16.689 36.344-21.244 73.797-47.78 17.295 19.699 34.47 39.477 51.997 59.647a2368.384 2368.384 0 0 0-17.837 16.364c-.46.46-1.622.69-2.324.46-6.52-1.943-13.03-3.876-19.588-5.968-7.708-7.292-13.68-15.293-19.808-21.482-1.703 6.36-3.456 12.327-4.887 18.457 8.984 10.945 11.236 14.184 16.904 19.77 1.162 1.17 1.861 3.024 1.861 4.576 1.549 31.612.61 62.646 2.134 89.81 3.374.932 6.439 1.703 10.196 2.795-.773-34.13-1.353-67.71-2.244-101.52 2.053 0 3.995 1.012 5.618 3.877 19.688 32.305 37.333 64.041 54.95 93.455 2.944-1.712 5.858-3.415 8.843-5.127-1.513 4.573-6.594 10.905-9.314 14.822-9.388 14.727-25.093 22.027-37.995 30.863-15.624 24.762-28.247 50.076-38.257 67.658l14.789 37.443c.37.118 26.19-39.152 38.908-59.09 21.19 18.717 41.987 37.136 63.39 56.035 1.55-41.042 3.196-80.801 4.692-121.048 44.704 3.844 88.763 7.623 134.04 11.53-26.01-32.444-51.169-63.604-76.383-95.007zm-164.443-117.08c12.948-8.062 25.587-15.822 38.506-23.725 6.389 11.007 12.479 21.863 18.646 32.878-10.625 6.59-21.17 13.189-32.107 19.849-8.181-9.614-16.593-19.147-25.045-29.002zm51.184 59.027c-6.29-7.37-12.568-14.512-19.197-22.183 11.055-6.75 22.062-13.57 33.307-20.48 5.74 10.085 11.368 19.93 17.066 30.013-16.835 10.475-33.47 20.63-49.834 30.715-.11-.232-.23-.311-.459-.47 6.317-5.739 12.598-11.476 19.117-17.595zm-26.138 34.74c20.55-12.639 40.83-25.047 61.42-37.765 6.128 10.546 11.946 20.86 18.115 31.716-20.52 12.719-40.879 25.127-61.54 37.844-6.018-10.775-11.985-21.25-17.995-31.795zm40.479 71.033c-5.739-10.155-11.476-20.08-17.175-30.325 19.238-11.786 38.346-23.574 57.744-35.51 5.698 10.073 11.438 20.079 17.135 30.245-19.31 12.015-38.466 23.733-57.704 35.59z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRevoltIcon);
    