
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconNothingToSayIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'nothing-to-say'];
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
        <path fill="currentColor" d="M254.156 56.938c-64.144 0-122.393 19.17-165.03 50.718-42.64 31.547-69.845 76.01-69.845 125.5 0 49.492 27.207 93.952 69.845 125.5 6.388 4.727 13.13 9.164 20.188 13.313l-12.657 95.905 90.594-65.75c21.226 4.708 43.67 7.25 66.906 7.25 64.144 0 122.362-19.17 165-50.72C461.794 327.11 489 282.65 489 233.156c0-49.49-27.206-93.95-69.844-125.5-42.638-31.546-100.856-50.718-165-50.718zM157 274.438c12.69 0 23 10.276 23 22.968 0 12.69-10.31 23-23 23s-22.97-10.31-22.97-23 10.28-22.97 22.97-22.97zm96.844 0c12.69 0 22.97 10.276 22.97 22.968-.002 12.69-10.28 23-22.97 23s-23-10.31-23-23 10.31-22.97 23-22.97zm99.844 0c12.69 0 22.968 10.276 22.968 22.968 0 12.69-10.278 23-22.97 23-12.69 0-22.998-10.31-22.998-23s10.31-22.97 23-22.97z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconNothingToSayIcon);
    