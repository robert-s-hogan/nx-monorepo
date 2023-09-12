
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLightningSlashesIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'lightning-slashes'];
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
        <path fill="currentColor" d="M140.2 23.414c15.085 32.345 32.656 63.74 52.378 93.875l5.117 6.558-.023-34.914 71.494 120.16 12.21-30.672 62.49 111.574 10.792-23.053 46.98 65.72c28.694 19.943 58.638 37.808 89.563 53.27-9.573-53.755-22.974-106.946-46.167-158.7l-15.385 36.853-60.82-106.8-7.33 21.812-58.623-100.784-9.523 36.104-57.16-69.95-8.792 27.077-87.2-48.13zM32.905 30.65c.498 1.085 1.01 2.16 1.512 3.24l128.55 182.686-15.07 2.442 85.834 57.697-31.3 9.924 138.322 85.465-34.393 16.145 5.4 3.322c-.7-1.014-1.393-2.032-2.098-3.043 4.165 3.215 8.367 6.367 12.584 9.49l109.297 67.22c14.582 7.255 29.39 13.985 44.418 20.156-10.046-21.494-21.62-43.198-34.51-64.898l-83.413-116.693-12.685 27.093-61.118-109.127-11.734 29.474-56.094-94.275.014 21.255-48.426-62.06C123.39 81.91 77.68 52.7 32.904 30.65zM19.557 136.71l29.308 61.67-34.44-.745 81.34 67.69L60.59 275.1l123.84 95.517-44.7 3.76 148.02 83.487-32.973 12.033 117.977 27.077c-11.174-23.545-23.634-46.537-37.254-68.864l-68.41-42.074 34.47-16.183-143.597-88.726 33.185-10.52L98.2 208.132l30.69-4.97C94.145 177.7 57.52 155.358 19.556 136.71z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLightningSlashesIcon);
    