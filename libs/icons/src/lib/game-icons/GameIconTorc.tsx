
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTorcIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'torc'];
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
        <path fill="currentColor" d="M247.1 23.09c-57.5 2.19-109.7 25.26-149.2 61.83l20.6 20.58-12.8 12.8-20.58-20.6C46.64 139.3 23.1 194.8 23.1 255.9c0 22.6 3.24 44.4 9.25 65.1-3.97 7.1-6.25 15.2-6.25 23.9 0 27 22.04 49 49 49 27 0 49-22 49-49 0-25-18.8-45.7-43.06-48.6-1.92-10.2-2.94-20.7-2.94-31.4 0-93.2 75.8-169 169-169s169 75.8 169 169-75.8 169-169 169c-10.7 0-21.2-1-31.4-2.9-2.9-24.2-23.6-43.1-48.6-43.1-27 0-49 22-49 49s22 49 49 49c8.7 0 16.8-2.3 23.9-6.3 20.6 6 42.5 9.3 65.1 9.3 61 0 116.6-23.5 158.2-62l-20.6-20.6 12.8-12.8 20.6 20.6c36.6-39.5 59.6-91.7 61.8-149.2h-40.8v-18h40.8c-.9-23.4-5.2-45.9-12.5-67L436.1 200l-8-16.2 41.7-20.8c-10.6-24.2-25.1-46.2-42.7-65.3l-36.6 36.6-12.8-12.8 36.6-36.57c-19.1-17.67-41.1-32.17-65.2-42.7l-20.9 41.7-16.2-8.06 20.1-40.25c-21.1-7.3-43.6-11.64-67-12.53V63.9h-18z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTorcIcon);
    