
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSkateboarding01Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'skateboarding-01'];
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
        <path fill="currentColor" d="M189 489 82 390.4l48 64.6-99-45 82 56-77 3zm54.2-28c7.2-5 16.7-2 21.1 5 4.5 7 2.2 16-5 21-7.2 4-16.6 2-21.1-5-4.4-7-2.2-17 5-21zm-67-12 26.9 25h-.2l238.9-147.5.7-34.6-20.8-.5-.5 23.3C391.3 333.3 230.9 433 201 451l-21.2-10zm72.6-370.2c5.9 22.7 26.3 39.8 50.9 40.4 20.7.6 39-10.6 48.6-27.4 47.5 18.2 89 52.9 116.9 98.2l-148.4-48.3-28.6 55.2 92.8 13.2 8.3 88.7-30.6 16.7-17.5-70.5-82.5 9.4L238 394.8 213.1 415l-19.9-169.2 35.6-120.5-150.38 60.1C129.2 118.2 189.6 85.5 248.8 78.8zM411 356.9c7.3-4.5 16.9-2.3 21.4 5s2.2 16.9-5 21.4c-7.3 4.5-16.9 2.3-21.4-5s-2.3-16.9 5-21.4zm-109-325c18.4.5 32.9 15.8 32.4 34.1-.5 18.4-15.8 32.9-34.2 32.4-18.3-.5-32.8-15.8-32.3-34.2.5-18.3 15.8-32.8 34.1-32.3z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSkateboarding01Icon);
    