
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconClockTowerIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'clock-tower'];
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
        <path fill="currentColor" d="M365.9 383.7h-8.1l-8.6 8.7V495h16.7zm-211.7 0h-8.1V495h16.7V392.4zM202.1 495h-22.6v-92h153v92h-22.6v-52c0-7-5.6-13-12.5-13s-12.5 6-12.5 13v52h-16.4v-52c0-7-5.6-13-12.5-13s-12.5 6-12.5 13v52h-16.4v-52c0-7-5.6-13-12.5-13s-12.5 6-12.5 13zm-23.8-104.5h155.4l19.7-19.6h27.1v-16.7h-34l-19.7 19.7H185.2l-19.7-19.7h-34v16.7h27.1zm1.6-48.6h152.2l-15 15H194.9zm169.3-164.3v159.3h16.7V177.6zm-203.1 0v159.3h16.7V177.6zm185.7 0H180.2v151.5h151.6zm-5.8 75.8c0 38.6-31.4 69.9-70 69.9s-70-31.3-70-69.9c0-38.6 31.4-70 70-70s70 31.4 70 70zm-127.5 0c0 31.7 25.8 57.4 57.5 57.4s57.5-25.7 57.5-57.4-25.8-57.5-57.5-57.5-57.5 25.8-57.5 57.5zm21.9 22 38.8-35c-1.1-3-1.7-5.3-1.8-7.1-.3-2.5.1-4.3.9-5.6 1.3-2.1 3.8-3.2 7.1-3.7 6-.9 15.6-.2 23.4-8l4.6 4.6-.4.4c-7.4 7.7-6.7 17.1-7.7 23-.5 3.3-1.6 5.7-3.6 7-1.4.9-3.2 1.3-5.6 1-1.9-.2-4.2-.8-7.1-1.9l-35 38.8zm-75.6-113.5h222.4l16.6-16.6-11.8-11.8-11.7 11.7H151.7L140 133.5l-11.8 11.8zm94.6-145.7h33.2L343 128.6H169zm4.1 91.6h25V78.9c0-6.9-5.6-12.5-12.5-12.5s-12.5 5.6-12.5 12.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconClockTowerIcon);
    