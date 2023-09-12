
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSensuousnessIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'sensuousness'];
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
        <path fill="currentColor" d="M250.344 21.885c-1.224.032-2.443.15-3.656.35-9.712 1.62-18.018 8.555-23.653 19.99-5.635 11.434-8.068 27.065-5.308 43.61 2.76 16.542 10.134 30.538 19.175 39.524 9.042 8.986 19.15 12.848 28.862 11.228 9.71-1.62 18.017-8.555 23.652-19.99 5.635-11.435 8.068-27.067 5.31-43.61-2.76-16.544-10.138-30.54-19.18-39.525-7.91-7.863-16.638-11.802-25.202-11.578zm185.64 32.22c-35.615 33.13-82.033 58.62-132.83 76.217-7.837 12.763-19.697 22.255-34.316 24.694-11.368 1.896-22.54-.784-32.383-6.547-55.808 11.324-113.423 13.896-165.514 7.39 42.767 37.097 106.85 54.638 169.626 50.964-9.982 93.127-47.653 188.14-81.968 282.924 53.913-39.23 109.785-113.508 127.08-175.496 27.11 53.623 33.926 92.79 49.646 176.547h.002c34.354-84.91 33.247-202.718-13.023-301.91 56.437-22.846 101.64-67.225 113.68-134.785z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSensuousnessIcon);
    