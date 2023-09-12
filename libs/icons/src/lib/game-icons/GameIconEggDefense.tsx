
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconEggDefenseIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'egg-defense'];
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
        <path fill="currentColor" d="M187.53 19.813c-7.494.11-15.638 1.296-24.343 3.656C107.48 38.57 50.07 95.98 34.97 151.687c-15.102 55.708 17.82 88.632 73.53 73.53C164.21 210.12 221.618 152.71 236.72 97c12.74-47.004-8.713-77.787-49.19-77.188zm106.064.25c17.368 69.213-3.744 149.306-61.813 207.375-57.893 57.894-137.616 78.902-206.686 61.812 75.073 36.3 167.67 23.735 229.937-38.53 62.39-62.39 75.13-155.505 38.564-230.657zm75.78 17.406c15.67 62.43 5.623 132.136-29.405 192.81l46.936 46.657-66-17.875c-5.573 7.407-11.568 14.613-17.97 21.594l33.377 57.438-57.875-33.625c-4.864 4.196-9.85 8.19-14.907 12l19.126 70.56-50-50.28C172.688 370.7 104.12 380.333 42.53 365.094c58.39 28.233 125.507 32.17 186.126 11.562l110.25 110.875-35.156-129.624 117.688 68.375-74.125-127.56 141.937 38.467L379.625 228.22c22.275-61.897 18.833-130.98-10.25-190.75z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconEggDefenseIcon);
    