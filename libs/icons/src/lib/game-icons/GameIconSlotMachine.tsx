
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSlotMachineIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'slot-machine'];
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
        <path fill="currentColor" d="M255.4 28.28c-59.7-.15-119.3 10.87-173.54 33.52l10.66 39.1H418.3l10.6-39.1C374.6 39.75 315 28.43 255.4 28.28zM110.2 124.1v190.6h290.4V124.1H110.2zm25 25h240.4v140.6H135.2V149.1zm325 4.3c-11.5 0-20.9 9.3-20.9 20.9 0 11.5 9.4 20.8 20.9 20.8 11.5 0 20.9-9.3 20.9-20.8 0-11.6-9.4-20.9-20.9-20.9zm-301.9 16v102.8h53.6V169.4h-53.6zm70.3 0v102.8h53.6V169.4h-53.6zm70.3 0v102.8h53.6V169.4h-53.6zm144.4 38.4-7.9 42.6c-7.1-3.2-12.9-4.2-12.9-4.2v68.5l30.1 16 9.6-49.7c-1.1-7.1-4.1-12.8-8.1-17.4l9.7-52c-1.2.2-2.4.2-3.6.2-6.1 0-11.8-1.4-16.9-4zm-338.5 134-46.38 50 10 93.2H442.4l10-93.2-46.4-50H104.8zm250.1 11.5a44.28 18.3 0 0 1 44.3 18.3 44.28 18.3 0 0 1-.2.8c.1.2.1.3.1.4 0 2.5-1.8 4.9-4.8 7a44.28 18.3 0 0 1-39.4 10.1 44.28 18.3 0 0 1-36.8-8.2 44.28 18.3 0 0 1-1.9-1.2c-3.5-2.3-5.7-4.9-5.7-7.7 0-.3.1-.7.1-1a44.28 18.3 0 0 1 0-.2 44.28 18.3 0 0 1 44.3-18.3zm-225 3.6h52.7l-12.8 31.8H104l25.9-31.8zm75.2 0h63.5L256 388.7h-63.8l12.9-31.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSlotMachineIcon);
    