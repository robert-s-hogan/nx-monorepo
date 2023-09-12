
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDandelionFlowerIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'dandelion-flower'];
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
        <path fill="currentColor" d="M275.2 26.85c-13.9 57.93-26.5 115.75-34.1 173.25 3.8-.9 7.7-1.3 11.8-1.3 6.8 0 13.4 1.2 19.6 3.5 4.3-57.1 10.9-114.79 25.5-173.25zm-59.7 8.63l-35.4 8.33c3.5 16.38 7.7 32.72 12.5 49.04l38.5 53.05c1.6-9.4 3.4-18.7 5.2-28.1-8-27.07-15.4-54.46-20.8-82.32zM346 44.76c-18.9 24.74-33.8 50.61-47.2 77.04-2 15-3.7 29.9-5.2 45 6.7-5.9 13.3-11.8 19.8-17.7 13-32 28.9-63.92 53.3-95.12zM147.1 61.14l-18.7 15.02 89.2 135.34c1.3-1.1 2.6-2.1 4-3.2 1.6-12.4 3.3-24.8 5.2-37.2zm259.8 22.63c-35.7 37.83-75 73.73-115.6 109.03l-1.5 20c4.3 3.8 8.1 8.3 11.1 13.3 43.5-41 86-81.7 121.3-123.9zM96.74 117.2L75.81 147c20.36 17.2 44.09 32.4 69.39 46.8 15.9 4.9 31.8 9.4 47.8 13.6l-26.2-39.9c-25.2-14.9-49.3-30.9-70.06-50.3zm348.96 14.3l-73.5 51.4c-5.6 5.7-11.4 11.2-17.1 16.9 12.7-.3 25.4-.9 38.2-1.9 20.7-15.5 42.5-30.6 66.8-44.9zm-391.12 49l-5.85 23.1c44.78 20.3 91.67 36.4 139.17 51.5 3.1-2.2 6.2-4.3 9.3-6.4.8-7.2 2.9-13.8 6.1-20-50.7-12.9-100.6-28-148.72-48.2zm421.32 22.7c-47.4 11.4-94.1 14.9-139.9 14.8-9.3 8.9-18.6 17.7-28 26.6l.3 1.5c1.2.8 2.3 1.5 3.5 2.2 57.9-.9 114-7.7 169.2-17.5zm-223 13.7c-21.1 0-38 17-38 38.2 0 21.2 16.9 38.1 38 38.1s37.9-16.9 37.9-38.1c0-21.2-16.8-38.2-37.9-38.2zM35.18 227.4L31 253.7l59.57 8.2c13.03-2.2 25.93-4.5 38.63-7-21.2-7.4-42.24-15.2-62.97-23.9zm363.42 33.7c-18.8 2-37.7 3.5-56.7 4.5 19.1 10.1 39.1 19.5 59.7 28.6l67.8 14.8 3.1-34.8zm-234.8 5.4c-40.3 8.2-81.34 16.1-126.65 21.3l3 34.3 67.25-14.8c20.8-12.7 41.3-25.8 61.3-39.2-1.6-.5-3.3-1.1-4.9-1.6zm144 .4c-2.6 11.4-8.5 21.6-16.7 29.3 53.1 29.4 116.6 49.9 179 72.2l8.6-22.8c-59.1-23.6-118.5-47.2-170.9-78.7zm-109.1 2.6c-47.7 32.7-97 63.9-149.75 91.8l13.23 19.9c48.52-22.8 94.52-47.8 138.42-74.8l10.3-14.1c-5.7-6.5-10-14.2-12.2-22.8zm72.7 38.6c-5.8 2.2-12.1 3.3-18.5 3.3-4.6 0-9-.6-13.1-1.6l21.9 175.3 23.5-4zm-50.1.6l-103 142.4 19.8 13.5 88.7-111.8zm69 7.8l1.8 22.7c23.9 42.7 48.8 85 77 126l29.3-15.9c-30.4-39.2-56.4-79.2-81-119.5-9.2-4.2-18.3-8.6-27.1-13.3zm56.3 26c3.6 5.9 7.4 11.7 11.1 17.6 24.7 23.2 48.7 47.7 70.2 76.1l24.8-22.7c-14.9-17.4-30.8-33.3-47.3-48.7-19.7-7-39.5-14.4-58.8-22.3zm-172.8 1.1c-23.9 13.7-48.4 26.8-73.6 39.4l-26.6 24.5 24.9 22.9 45.5-45.8zm56.2 34.6l-27.1 34.1-10.7 60.6 26.3 7.7 14.1-81.8zm65.5 3.9l.7 8 30.2 89.1 14.6-6-9.1-31.1c-12.7-19.8-24.7-39.9-36.4-60z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDandelionFlowerIcon);
    