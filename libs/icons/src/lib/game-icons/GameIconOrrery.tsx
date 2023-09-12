
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconOrreryIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'orrery'];
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
        <path fill="currentColor" d="M375.4 395.8c-7 8.2-18.6 15.2-32.7 20.2-24.3 9-55.5 13-86.7 13-31.2 0-62.4-4-86.7-13-14.1-5-25.7-12-32.7-20.2L110.8 417c10.2 12 26.6 23 47.1 30 27.5 10 62.8 15 98.1 15s70.6-5 98.1-15c20.6-7 36.9-18 47.1-30zM144.7 379h222.6c-22.7 43-199.9 43-222.6 0zM62.17 257.7c-15.35-3.8-26.75-17.6-26.75-34.1 0-19.4 15.72-35.1 35.08-35.1s35.1 15.7 35.1 35.1c0 16.5-11.42 30.3-26.77 34.1v83H334v16.6H62.17zm373.53 6.1c-12.5-3.6-21.7-15.1-21.7-28.8 0-16.6 13.4-30 30-30s30 13.4 30 30c0 13.7-9.2 25.2-21.7 28.8v61.5h-248v-16.6h231.4zm-48-96.8c-9.2-3.4-15.7-12.2-15.7-22.5 0-13.2 10.8-24 24-24s24 10.8 24 24c0 10.3-6.5 19.1-15.7 22.5v43.4c-4.4 7.2-7 15.6-7 24.6 0 9 2.6 17.4 7 24.6v32.7h-190v-16.6h173.4zM256 75c50.8 0 92 41.2 92 92s-41.2 92-92 92-92-41.2-92-92 41.2-92 92-92z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconOrreryIcon);
    