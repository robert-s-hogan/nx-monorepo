
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFluffyFlameIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'fluffy-flame'];
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
        <path fill="currentColor" d="M92.043 24.678c-2.944.002-5.89.177-8.828.535C36.212 30.937 9.05 81.023 22.537 137.08c3.273 13.606 8.647 26.307 15.57 37.668-.006-.09-.007-.177-.013-.266 1.35 2.25 2.966 4.417 4.85 6.438 11.252 12.063 27.762 13.945 36.796 4.672 9.034-9.273 7.16-26.484-4.09-38.547-1.41 7.565-7.797 13.434-15.77 13.434-8.998 0-16.35-7.356-16.35-16.355 0-1.885.26-3.35.824-4.92C54 117.51 73.796 100.763 98.912 96.082c30.028-5.596 59.188 7.624 75.38 31.316 4.616 13.202 6.077 24.766 5.616 35.514-.84 19.612-8.37 37.303-17.142 57.244-12.184 27.692-26.016 59.814-22.526 104.215 1.285 57.826 31.464 113.704 84.887 145.392 82.36 48.853 188.73 21.7 237.592-60.64 48.86-82.338 21.713-188.687-60.648-237.54-13.1-7.77-26.807-13.61-40.795-17.617 45.042 34.597 60.388 96.118 36.68 147.875-.532-4.287-1.34-8.593-2.44-12.897-13.92-54.505-68.97-88.07-123.476-74.158-8.882 2.263-16.897 6.52-24.515 10.807 35.86-5.066 70.14 16.573 79.31 52.47 9.83 38.507-13.138 77.213-51.657 87.04-9.925 2.535-19.965 2.87-29.563 1.326-7.373-2.62-14.602-5.98-21.586-10.123-14.722-8.732-26.925-20.077-36.413-33.076-16.793-32.11-20.372-62.952-8.217-94.378l-.035-.014.508-1.154c8.797-19.996 17.684-40.13 18.707-63.97.397-9.248-.45-18.94-2.855-29.228-.53-5.94-1.51-12-2.987-18.136-12.644-52.555-56.53-91.7-100.695-91.672zm282.39 57.53c-28.528-.353-54.46 19.41-67.154 61.7 30.764-33.286 128.965-6.368 182.1 96.524C476.72 139.258 421.974 82.794 374.43 82.207z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFluffyFlameIcon);
    