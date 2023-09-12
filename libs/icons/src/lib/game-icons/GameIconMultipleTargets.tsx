
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMultipleTargetsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'multiple-targets'];
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
        <path fill="currentColor" d="M113.986 32.107v24.016C98.637 59.601 86.48 71.758 83.002 87.107H58.986v18h24.016c3.478 15.35 15.635 27.506 30.984 30.985v24.015h18v-24.015c15.35-3.479 27.506-15.635 30.985-30.985h24.015v-18h-24.015c-3.479-15.349-15.636-27.506-30.985-30.984V32.107h-18zM340 45.143v39.39c-50.72 4.33-91.28 44.89-95.61 95.61H205v18h39.39c4.33 50.72 44.89 91.28 95.61 95.609v39.39h18v-39.39c50.72-4.33 91.28-44.89 95.61-95.61H493v-18h-39.39c-4.33-50.72-44.89-91.279-95.61-95.609v-39.39h-18zM122.986 73.107c12.81 0 23 10.191 23 23 0 12.81-10.19 23-23 23-12.809 0-23-10.19-23-23 0-12.809 10.191-23 23-23zM340 102.6v22.543h18V102.6c40.946 4.182 73.36 36.597 77.543 77.543H413v18h22.543c-4.182 40.945-36.597 73.36-77.543 77.543v-22.543h-18v22.543c-40.946-4.183-73.36-36.598-77.543-77.543H285v-18h-22.543c4.182-40.946 36.597-73.361 77.543-77.543zM42.477 286.994v41h18v-23h23v-18h-41zm153 0v18h23v23h18v-41h-41zm-56 16c-44.629 0-81 36.372-81 81 0 44.629 36.371 81 81 81 44.628 0 81-36.371 81-81 0-44.628-36.372-81-81-81zm0 18c34.9 0 63 28.1 63 63s-28.1 63-63 63c-34.901 0-63-28.1-63-63s28.099-63 63-63zm229.591 56.1v16h18v-16h-18zm0 32v32h18v-32h-18zm-83 7v18h64v-18h-64zm120 0v18h64v-18h-64zm-363.591 23.9v41h41v-18h-23v-23h-18zm176 0v23h-23v18h41v-41h-18zm150.591 17.1v16h18v-16h-18z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMultipleTargetsIcon);
    