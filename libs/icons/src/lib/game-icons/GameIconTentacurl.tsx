
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTentacurlIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'tentacurl'];
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
        <path fill="currentColor" d="M218.28 24.75c-2.17-.013-4.333.008-6.5.03-20.792.224-41.285 2.13-60.905 6.19-51.55 10.667-96.954 35.72-128.688 84.686v381.531h127.376c-38.755-38.575-54.373-84.178-55.188-126.562-.936-48.658 16.79-93.022 40.344-120.563 43.635-51.02 91.08-74.803 135.155-78.218 44.075-3.415 84.224 13.502 113.094 41.594 28.87 28.09 46.75 67.413 46.686 109.28-.05 32.946-11.65 67.287-36.97 98.344 30.567-11.346 52.987-30.856 68.69-55.5 20.618-32.36 29.403-73.84 27.437-116.25-4.687-101.07-74.37-194.062-173.063-213.843-31.705-6.356-64.89-10.53-97.47-10.72zm91.47 168.656c33.82 51.784 33.24 110.215 9.906 155.28-18.004 34.773-49.19 61.838-87.47 72.033-29.606 7.884-63.312 5.26-97.5-10.94 18.148 26.34 41.48 42.92 67.47 51.97 34.494 12.01 74.06 10.45 111.78-1.688 6.486-2.086 12.846-4.488 19.064-7.187l-.75.125 24.688-21.53c38.51-33.66 53.976-72.27 54.03-108.783.055-36.512-15.653-71.15-41.03-95.843-16.58-16.133-37.175-27.99-60.188-33.438z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTentacurlIcon);
    