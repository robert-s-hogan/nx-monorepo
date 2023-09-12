
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbstract031Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abstract-031'];
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
        <path fill="currentColor" d="m21,21c0,85.0552 45.1233,159.5271 112.8,200.7782 11.7998-42.2279 44.8672-75.5397 86.95-87.6844v-113.0938h-199.75zm270.25,0v113.0938c42.0829,12.1447 75.1502,45.4565 86.95,87.6844 67.6767-41.251 112.8-115.7229 112.8-200.7782h-199.75zm-35.25,166.8501c-37.6381,0-68.1501,30.5118-68.1501,68.15s30.5119,68.15 68.1501,68.15 68.15-30.5118 68.15-68.15-30.5119-68.15-68.15-68.15zm-122.2001,102.3718c-67.6766,41.251-112.8,115.7229-112.8,200.7781h199.75v-113.0937c-42.0828-12.1447-75.1502-45.4565-86.95-87.6844zm244.4001,0c-11.7998,42.2279-44.8671,75.5397-86.95,87.6844v113.0937h199.75c0-85.0552-45.1232-159.5271-112.8-200.7781z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbstract031Icon);
    