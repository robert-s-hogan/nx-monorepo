
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPublicSpeakerIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'public-speaker'];
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
        <path fill="currentColor" d="M256 33c-20.835 0-39 20.24-39 47s18.165 47 39 47 39-20.24 39-47-18.165-47-39-47zM110.258 54.934l-16.99 8.496c14.917 22.147 32.213 47.013 49.76 68.947 19.707 24.634 39.95 45.048 52.997 51.572l4.975 2.488v39.478c27.13 3.608 46.516 4.982 67.875 4.09-.66-.49-1.316-.98-1.95-1.48-4.915-3.88-9.18-8.206-12.5-12.856-5.87-.587-10.577-4.374-13.392-8.65-3.063-4.65-4.57-10.242-4.57-16.262s1.507-11.612 4.57-16.264c3.064-4.65 8.364-8.736 14.967-8.736s11.903 4.085 14.967 8.736c3.063 4.652 4.57 10.244 4.57 16.264s-1.507 11.612-4.57 16.263c-.06.094-.13.185-.192.277 1.92 2.358 4.335 4.758 7.303 7.1 6.283 4.962 14.722 9.46 24.75 12.66 2.65-.324 5.366-.67 8.172-1.04v-39.58l4.975-2.488c13.048-6.525 33.29-26.94 52.998-51.573 17.546-21.934 34.842-46.8 49.76-68.947l-16.99-8.496C355.066 101.422 307.792 145 256 145c-51.792 0-99.067-43.578-145.742-90.066zm29.094 179.93l12.152 60.763c101.057 9.362 107.935 9.362 208.992 0l12.147-60.734c-110.08 17.448-123.22 17.163-233.29-.03zm39.244 81.335l13.35 106.8h128.11l13.348-106.8c-67.76 6.032-87.047 6.032-154.808 0zM137 441v20h238v-20H137zM16 478v18h480v-18H16z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPublicSpeakerIcon);
    