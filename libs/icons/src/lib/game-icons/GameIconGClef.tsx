
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconGClefIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'g-clef'];
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
        <path fill="currentColor" d="M238.75 138.492l18.147-18.829c.898-21.472 9.107-59.37 26.166-60.771 6.994.097 14.566 5.833 15.742 16.021 3.25 28.145-11.833 40.563-29.072 57.372l-31.408 32.586-.037-.038c-28.467 31.447-65.355 70.37-69.772 106.973-5.588 53.77 31.264 108.42 87.149 105.693l-3.178-18.066c-37.522-4.905-69.771-43.77-56.711-81.312 23.275-60.413 75.664-92.822 116.333-148.022 11.474-15.574 14.575-46.945 11.815-63.128-2.76-16.184-14.345-43.066-32.059-45.017-34.714-4.59-60.724 62.476-53.114 116.538zm25.667 75.896l-15.508 15.248c.542 2.775 1.166 6.185 2.088 12.14-34.017 21.505-36.576 66.707-12.186 90.96 5.177 5.31 15.165-2.767 10.104-8.674-10.971-19.786-12.097-44.028 5.742-57.137 8.78 50.539 24.627 117.16 30.164 170.895.364 3.535-6.593 10.614-9.973 11.396 0-22.091-17.908-40-40-40-22.09 0-40 17.909-40 40 .017 20.193 15.266 36.007 35.123 39.668 42.008 7.745 78.659-17.935 72.76-53.16-8.793-59.062-21.986-121.007-30.857-175.32 12.066-1.253 28.875 5.169 36.428 12.847 8.575 9.297 12.95 22.35 11.982 32.787-.924 9.96-7.425 20.992-17.06 30.381l3.662 20.776c17.346-12.583 35.117-30.185 36.94-49.844 1.518-16.352-5.01-40.324-18.08-52.273-16.885-15.437-38.313-18.553-57.349-16.612-2.004-13.065-3.018-18.039-3.98-24.078z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconGClefIcon);
    