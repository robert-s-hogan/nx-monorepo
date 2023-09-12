
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPaperBoatIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'paper-boat'];
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
        <path fill="currentColor" d="M247 40l-74.6 161.6 74.6 24.9V40zm18 0v186.5l74.6-24.9L265 40zm-86.7 105.8l-136.02 17 112.02 35 24-52zm155.4 0l24 52 112.1-35-136.1-17zM25.48 176.4L130 307.1l104.6-65.4-209.12-65.3zm461.02 0l-209.1 65.3L382 307.1l104.5-130.7zM256 249.6L159.4 310h193.2L256 249.6zM128 358c-16 0-32.14 9-45.68 17.3-13.53 8.4-23.93 16.7-23.93 16.7l11.22 14s9.65-7.7 22.14-15.3C104.2 383 120.1 376 128 376c7.9 0 16.4 6 26.4 14s21.6 18 37.6 18 27.6-10 37.6-18 18.5-14 26.4-14c7.9 0 16.4 6 26.4 14s21.6 18 37.6 18 27.6-10 37.6-18 18.5-14 26.4-14c7.9 0 23.8 7 36.2 14.7 12.5 7.6 22.2 15.3 22.2 15.3l11.2-14s-10.4-8.3-23.9-16.7C416.1 367 400 358 384 358c-16 0-27.6 10-37.6 18s-18.5 14-26.4 14c-7.9 0-16.4-6-26.4-14S272 358 256 358s-27.6 10-37.6 18-18.5 14-26.4 14c-7.9 0-16.4-6-26.4-14S144 358 128 358zm0 64c-16 0-32.14 9-45.68 17.3-13.53 8.4-23.93 16.7-23.93 16.7l11.22 14s9.65-7.7 22.14-15.3C104.2 447 120.1 440 128 440c7.9 0 16.4 6 26.4 14s21.6 18 37.6 18 27.6-10 37.6-18 18.5-14 26.4-14c7.9 0 16.4 6 26.4 14s21.6 18 37.6 18 27.6-10 37.6-18 18.5-14 26.4-14c7.9 0 23.8 7 36.2 14.7 12.5 7.6 22.2 15.3 22.2 15.3l11.2-14s-10.4-8.3-23.9-16.7C416.1 431 400 422 384 422c-16 0-27.6 10-37.6 18s-18.5 14-26.4 14c-7.9 0-16.4-6-26.4-14S272 422 256 422s-27.6 10-37.6 18-18.5 14-26.4 14c-7.9 0-16.4-6-26.4-14S144 422 128 422z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPaperBoatIcon);
    