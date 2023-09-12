
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSubwayPassIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'subway-pass'];
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
        <path fill="currentColor" d="M491 351H31v26c0 14.6 11.9 27 26.59 27H464.4c14.7 0 26.6-12.4 26.6-27zM31 295h460V163.9l-55.5-55.5H57.59C42.9 108.4 31 120.4 31 135zm58.21-81.4v-44.4c0-12.3 9.94-22.2 22.19-22.2h45.2c12.3 0 22.2 9.9 22.2 22.2v44.4c0 11.3-8.5 20.6-19.4 22l19.4 30.4h-20.2l-3.6-8.8h-42l-3.6 8.8H89.21l19.39-30.4c-10.92-1.4-19.39-10.7-19.39-22zm283.29 26.5h86v20.8h-86zm-133.5 0h110v20.8H239zm-92.7-4.4 3.6 9h-31.8l3.6-9zM107.5 213c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8zm37 0c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8zm169-19.4h145v20.8h-145zm-74.5 0h53v20.8h-53zm-75.5 1.1h-59V173c0-2.9 1.2-5.7 3.2-7.8 2.1-2 4.9-3.2 7.8-3.2h37c2.9 0 5.7 1.2 7.8 3.2 2 2.1 3.2 4.9 3.2 7.8zm75.5-45.9h149v20.9H239z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSubwayPassIcon);
    