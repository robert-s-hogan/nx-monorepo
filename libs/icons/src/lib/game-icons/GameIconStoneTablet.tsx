
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconStoneTabletIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'stone-tablet'];
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
        <path fill="currentColor" d="M206.355 24.53L23.982 171.567l.086.373h-.013l-5.7 124.037 131.676 82.55L245.66 492.14l63.94-8.59 109.808-109.587 72.772-35.453.953-70.24 1.186-50.508L327.75 104.63l-33.41 14.46-3.46 29.756-18.566-2.16 3.21-27.598-46.934-7.715-21.106 28.844-15.082-11.037 27.887-38.11 65.273 10.73-.13.78 25.2-10.908-51.485-64.012-52.793-3.13zM40.605 218.886l117.91 74.13 49.065-9.7-14.14-13.71 13.01-13.42 39.75 38.545-71.942 14.223-18.918 50.844-117.817-73.86 3.082-67.052zm362.754 59.068l44.382 20.55 26.463-12.92-.56 41.165-50.293 24.504 9.59-39.008-37.434-17.332 7.85-16.96zm-211.534 37.373l78.108 93-24.81 54.158-75.405-89.59.602.225 21.504-57.794zm218.403 11.028l-9.896 40.24-89.69 89.51 19.092-49.204 80.493-80.546zm-102.293 85.064l-21.904 56.44-24.312 3.267 26.118-57.01 20.1-2.697z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconStoneTabletIcon);
    