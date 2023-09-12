
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLockedHeartIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'locked-heart'];
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
        <path fill="currentColor" d="M256 27.845c-21.563 0-48.67 1.224-69.041 9.357C166.589 45.336 153 58.047 153 86.845v51.847a125.34 125.34 0 0 1 19.988-1.732c3.353-.02 6.693.103 10.012.355v-38.47c0-16 11.186-28.155 24.975-35.05 13.788-6.893 30.9-9.95 48.025-9.95s34.237 3.057 48.025 9.95C317.815 70.69 329 82.846 329 98.846v38.478a124.58 124.58 0 0 1 30 1.377V86.845c0-28.798-13.589-41.51-33.959-49.643-20.37-8.133-47.478-9.357-69.041-9.357zm-83.12 127.093c-7.576.067-15.274.952-22.886 2.682C109.396 166.847 73 198.594 73 258.845c0 43 37.72 89.974 81.213 131.49 21.747 20.758 44.64 40.173 64.25 57.52 15.099 13.356 28.124 25.257 37.537 36.3 9.413-11.043 22.438-22.944 37.537-36.3 19.61-17.347 42.503-36.762 64.25-57.52C401.28 348.819 439 301.845 439 258.845c0-60.25-36.396-91.998-76.994-101.225-40.598-9.227-83.648 5.56-97.65 40.567L256 219.075l-8.355-20.888c-11.377-28.443-41.931-43.537-74.764-43.249zM256 234.845a44.488 44.488 0 0 1 44.488 44.488A44.488 44.488 0 0 1 284 313.876l16.488 98.922h-88.976l16.49-98.936a44.488 44.488 0 0 1-16.49-34.529A44.488 44.488 0 0 1 256 234.845z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLockedHeartIcon);
    