
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpiralBloomIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'spiral-bloom'];
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
        <path fill="currentColor" d="M261.826 23.342c-2.1.014-4.186.044-6.262.09-116.232 2.562-195.636 54.744-216.322 111.95-11.82 32.69-6.027 67.12 23.305 99.196 19.405 21.22 49.525 41.114 91.818 57.072-12.872-43.693-18.494-87.863-11.482-132.302l.3.047c1.81-10.37 6.832-20.448 14.112-29.23 29.632-35.742 94.642-59.715 158.1-48.42 77.656 13.824 128.62 37.135 158.263 65.618-2.933-26.51-18.825-51.028-43.174-71.595-31.773-26.84-77.54-45.766-122.914-50.266-15.788-1.566-31.05-2.257-45.744-2.16zm23.666 74.465c-47.91-.14-94.163 20.588-113.81 44.287-5.785 6.978-9.38 13.613-10.584 20.13l.246.038c-.25 1.582-.48 3.165-.696 4.748-.01 4.96 1.412 9.884 4.372 14.87 7.767 13.083 29.18 27.893 70.695 38.186 13.2 3.273 25.47 5.01 36.783 5.705l12.764-82.262 9.785 2.246c29.88 6.86 49.564 16.87 60.648 29.853 5.542 6.492 8.828 14.005 9.086 21.674.05 1.447-.01 2.882-.173 4.302 2.764 38.157 1.664 75.476-5.703 111.287 59.32-12.15 102.336-40.655 118.74-71.587 13.41-25.282 11.35-51.275-13.218-77.035-24.568-25.76-73.307-50.04-152.307-64.102-8.828-1.57-17.756-2.313-26.628-2.34zm15.12 68.66l-9.23 59.488c5.397-.3 10.47-.875 15.16-1.705 18.506-3.274 31.014-10.577 36.177-17.23 1.707-2.2 2.666-4.21 3.1-6.157-.028-.372-.05-.742-.078-1.115l.274-.02c.073-.61.108-1.214.088-1.818-.098-2.892-1.232-6.198-4.622-10.168-5.937-6.955-19.125-15.1-40.87-21.275zm-142.034 37.21c.62 31.614 7.182 63.427 17.713 95.532 16.043 5.048 33.555 9.58 52.636 13.472 39.913 7.48 77.113 7.98 110.115 3.54 6.515-28.052 8.834-57.48 8.147-87.95-9.52 6.876-22.23 11.698-37.39 14.38-21.557 3.814-48.29 3.063-78.578-4.447-34.638-8.588-58.302-20.168-72.642-34.527zm-129.83 15.538C37.45 404.402 137.104 495.61 258.788 495.61c123.68 0 224.628-104.89 230.415-237.204-37.837 57.903-139.786 95.892-263.777 72.637l-.072-.014-.073-.014c-22.46-4.58-42.96-10.024-61.608-16.205l-1.62.57c-.147-.418-.29-.837-.435-1.255-51.585-17.38-88.692-40.5-112.863-66.934-8.195-8.96-14.842-18.344-20.006-27.975z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpiralBloomIcon);
    