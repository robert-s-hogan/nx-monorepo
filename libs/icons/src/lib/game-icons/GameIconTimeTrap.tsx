
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTimeTrapIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'time-trap'];
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
        <path fill="currentColor" d="M255.656 22.75c-131.173 0-237.72 33.326-237.72 74.344.002 22.39 32.41 42.59 82.564 56.22-17.407-8.91-27.53-19.216-27.53-30.47 0-32.128 81.75-58.53 182.686-58.53 100.937 0 183.25 26.4 183.25 58.53 0 11.194-10.3 21.59-27.53 30.47 49.843-13.627 81.968-33.91 81.968-56.22 0-41.018-106.514-74.344-237.688-74.344zM147.47 103.094v30.094h216.28v-30.094H147.47zm4.374 48.78V361.94h18.687V151.875h-18.686zm39.125 0c.698 61.812 25.325 96.435 52.81 103.814-27.847 7.475-52.776 42.9-52.843 106.25h128.188c-.066-63.353-24.952-98.766-52.78-106.25 27.468-7.386 52.05-41.998 52.75-103.813H190.968zm147.936 0V361.94h18.688V151.875h-18.688zM100.5 360.72c-50.153 13.626-82.563 33.827-82.563 56.217 0 41.018 106.546 74.344 237.72 74.344 131.173 0 237.687-33.325 237.687-74.342 0-22.31-32.125-42.593-81.97-56.22 17.232 8.88 27.532 19.244 27.532 30.438 0 32.13-82.313 58.563-183.25 58.563S72.97 423.283 72.97 391.155c0-11.254 10.123-21.528 27.53-30.437zm46.97 19.905v30.063h216.28v-30.063H147.47z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTimeTrapIcon);
    