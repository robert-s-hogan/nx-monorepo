
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPinIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'pin'];
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
        <path fill="currentColor" d="M326.953 22.87L306.68 83.685l20.273 20.273-115.428 115.427c-16.39-8-34.277-14.452-51.84-18.502-14.247-3.285-28.136-4.902-40.802-4.772-16.84.173-31.505 3.44-41.975 9.973l229.006 229.006c11.447-18.345 12.853-49.592 5.2-82.776-4.05-17.564-10.502-35.45-18.5-51.84l115.427-115.43 20.274 20.274 60.817-20.273L326.954 22.87zM159.207 313.84L22.87 489.13l175.29-136.337-38.953-38.953z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPinIcon);
    