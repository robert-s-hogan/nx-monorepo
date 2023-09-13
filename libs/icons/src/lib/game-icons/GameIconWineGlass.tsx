
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWineGlassIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'wine-glass'];
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
        <path fill="currentColor" d="M148.97 22.47l-6.25.093-2.564 6.156c-13.235 37.556-21.28 79-21.28 118.093 0 53.777 14.848 93.17 39.874 118.875 18.945 19.458 43.36 30.696 70.156 35 17.09 48.115 16.085 101.005-2.562 148.687-30.555 5.118-60.254 18.273-86.313 39.5h231.22c-26.066-21.23-55.75-34.384-86.313-39.5-18.667-47.734-19.62-100.686-2.468-148.844 26.58-4.382 50.84-15.552 69.75-34.842 25.184-25.692 40.186-65.08 40.186-118.875 0-39.093-8.045-80.537-21.28-118.094l-2.188-6.25h-219.97zm6.75 18.686h199.843c7.25 21.815 12.64 44.904 15.593 67.72h-231.03c2.953-22.816 8.344-45.905 15.593-67.72zm-17.47 86.406h234.78c.45 6.49.69 12.912.69 19.25 0 50.357-13.716 84.26-34.845 105.813-21.13 21.554-50.295 31.406-83.53 31.406-33.238 0-62.247-9.863-83.22-31.405s-34.563-55.437-34.563-105.813c0-6.338.24-12.76.688-19.25z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWineGlassIcon);
    