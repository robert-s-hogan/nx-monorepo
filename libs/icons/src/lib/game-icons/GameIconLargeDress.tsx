
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLargeDressIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'large-dress'];
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
        <path fill="currentColor" d="M189.4 43.36l-20.3 10.18c0 32.03.8 87.86 13.9 130.96 58.3 14.2 87.7 14.2 146 0 13.3-43 13.9-86.54 14-130.96l-20.4-10.18c-4.4 5.74-11.7 15.04-21.8 26.57-7.2 8.16-14.8 16.36-22.1 22.8-3.6 3.22-7.1 6-10.6 8.17-3.6 2.2-7.1 4.1-12.1 4.1s-8.5-1.9-12.1-4.1c-3.5-2.17-7-4.95-10.6-8.17-7.3-6.44-14.9-14.64-22.1-22.8-10.1-11.53-17.4-20.83-21.8-26.57zm-8.6 159.04L57.3 449.5c.28 1.1.8 2.3 2.16 3.8 2 2.3 5.58 5.1 10.61 7.7 10.08 5.4 25.72 10.3 44.73 14.2 38 7.8 89.7 11.8 141.2 11.8 51.5 0 103.2-4 141.2-11.8 19-3.9 34.7-8.8 44.7-14.2 5.1-2.6 8.6-5.4 10.6-7.7 1.4-1.5 1.9-2.7 2.2-3.8L331.2 202.4c-58 13.9-92.4 13.9-150.4 0z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLargeDressIcon);
    