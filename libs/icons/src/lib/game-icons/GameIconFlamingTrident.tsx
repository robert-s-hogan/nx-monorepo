
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFlamingTridentIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'flaming-trident'];
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
        <path fill="currentColor" d="M103.03 16.438C87.39 31.415 72.88 78.322 91.095 110.874c74.192 132.596-2.636 198.3-39.5 92.72-27.98 89.637 6.844 197.69 101.22 252.186l56.03-56.03-17.22-17.47c-22.326-22.272-23.116-58.42-.81-80.686l41.06-41.063-8.968-8.936 57.344-21.125-21.156 57.218-8.75-8.72-40.97 40.376c-12.485 12.463-12.53 31.874 0 44.375l17.75 17.75 73.69-73.69-13.72-13.686 75.812-27.938-27.97 75.656-15.56-15.53-73.876 73.562 18.72 18.72c12.524 12.468 31.873 12.473 44.374-.002l44.312-44.312-8.78-8.78 57.343-21.126-21.158 57.22-9.156-9.127-44.03 44.688c-22.32 22.267-59.14 22.234-81.47 0L227.03 418.22l-50 49.75c33.226 14.468 72.478 22.905 117.69 22.905 250.694 0 238.78-311.425 86-351.813 34.115 37.6 2.513 82.866-51.44 75.72-66.704-8.838-71.872-73.31-58.874-99.47 24.57-49.455-17.56-101.51-93.156-96.843 103.54 77.253-53.127 162.6-74.22-2.032z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFlamingTridentIcon);
    