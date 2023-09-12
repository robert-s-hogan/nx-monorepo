
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPaperClipIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'paper-clip'];
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
        <path fill="currentColor" d="M359.486 53.883c-18.533.924-36.916 8.152-52.168 23.404L50.463 334.143c-15.528 15.527-21.196 34.746-19.207 52.65 1.99 17.904 11.053 34.485 23.793 47.225 12.738 12.74 29.32 21.803 47.223 23.793 17.905 1.99 37.123-3.68 52.65-19.206l220.163-220.16c20.998-21 19.447-48.32 4.586-63.182-14.86-14.86-42.183-16.413-63.182 4.586L169.717 306.62l12.728 12.73L329.22 172.576c15.694-15.695 29.653-12.66 37.725-4.588 8.073 8.073 11.108 22.032-4.588 37.727l-220.16 220.16c-11.992 11.992-24.88 15.498-37.935 14.047-13.056-1.45-26.29-8.44-36.485-18.633-10.194-10.195-17.182-23.43-18.632-36.485-1.45-13.056 2.054-25.944 14.046-37.936L320.046 90.015c16.358-16.358 35.173-20.603 54.918-17.27 19.745 3.334 40.126 14.96 56.195 31.03 16.07 16.068 27.696 36.45 31.03 56.195 3.333 19.746-.912 38.56-17.27 54.92l-220.16 220.16 12.726 12.727 220.162-220.162c20.336-20.335 26.41-46.24 22.29-70.642-4.118-24.402-17.718-47.595-36.05-65.926-18.33-18.332-41.523-31.93-65.925-36.05-6.1-1.03-12.296-1.422-18.474-1.114z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPaperClipIcon);
    