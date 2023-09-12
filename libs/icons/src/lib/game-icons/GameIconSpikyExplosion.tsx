
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpikyExplosionIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'spiky-explosion'];
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
        <path fill="currentColor" d="M454.547 16.027C406.8 37.25 381.052 75.064 369.135 123.303c42.096-24.196 72.15-58.61 85.412-107.276zM95.56 19.03c15.534 34.478 41.673 62.266 76.506 84.683 1.576-31.216-1.92-59.57-11.097-84.682H95.56zm223.674 9.507c-27.494 57.123-49.87 115.225-67.9 174.162-13.04-40.243-29.32-79.83-49.25-118.68.247 36.447 3.52 71.91 9.445 106.51-38.943-35.318-79.96-68.894-123.292-100.52 29.922 43.868 62.24 84.967 96.64 123.656-26.502-8.224-56.91-10.145-88.08-5.97 19.645 14.96 42.703 28.156 67.192 36-48.423 2.757-97.046 7.823-145.888 15.45 41.51 7.845 82.85 13.375 124.043 16.842-22.063 8.906-43.915 18.854-65.536 29.946 40.608-.275 79.997-4.3 118.33-11.577-16.74 21.736-31.644 45.162-44.99 70.028 25.735-15.12 49.978-31.88 72.554-50.477-12.504 58.248-21.31 117.203-27.092 176.738 21.65-50.587 41.044-101.993 57.877-154.328 11.282 28.076 24.197 55.62 38.556 82.696-2.48-37.338-7-74.264-13.793-110.73 46.832 43.08 96.5 82.882 148.472 120.017-38.845-51.87-80.238-101.596-124.584-148.84 65.17-2.498 130.007-9.56 194.576-20.314-47.5-6.818-95.158-11.807-142.99-14.775 19.607-8.637 38.96-18.06 58.078-28.198-36.566 2.427-72.737 6.804-108.467 13.363 12.16-16.334 23.427-33.654 33.715-52.05-16.755 8.214-32.493 17.366-47.317 27.36 13.228-57.563 23.26-116.284 29.7-176.308zm175.05 29.625c-48.748 27.205-89.195 69.08-119.934 128.35 46.33-.998 85.935-12.905 119.933-33.666V58.162zM25.36 124.676c-1.285-.01-2.578-.004-3.878.015 24.13 35.622 56.432 55.136 101.748 49.035-24.56-34.196-57.994-48.75-97.87-49.05zm374.08 179.517c-10.527-.03-21.428 1.062-32.66 3.15 34.93 36.464 77.04 54.27 129.158 46.053-26.086-34.646-58.903-49.093-96.5-49.203zM113.774 326.62c-8.008.004-15.842.556-23.472 1.32-25.435 2.57-48.993 9.59-70.666 21.062v70.666c38.192-19.716 72.544-49.83 102.203-92.86-2.708-.13-5.395-.19-8.065-.19zm57.727 49.855c-50.455 23.15-70.933 64.14-72.57 116.345 43.08-26.34 69.47-63.673 72.57-116.345zm157.664 15.744c.832 38.58 10.744 71.555 28.033 99.866h78.843c-22.654-40.592-57.522-74.27-106.877-99.867z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpikyExplosionIcon);
    