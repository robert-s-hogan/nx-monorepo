
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAllForOneIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'all-for-one'];
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
        <path fill="currentColor" d="M173.625 15.72l16.156 53.81-94.374-48.905L158.47 98.25 45.187 117.406l113.28 19.625-59.718 75.19 65.03-33.407-1.78 58.843 19.844-37.344v-64.218l.75-1.75 31.906-74.75-40.875-43.875zm146.25 0L282.97 55.343l33.342 79.03.75 1.75V205.846l15.5 29.187-1.625-54.436 65.532 34.062-63.064-77.625 113.28-19.624-113.28-19.156 63.063-77.625-92.44 47.906 15.845-52.81zM249.28 23.56l-49.186 114.5v153.5L235.03 326.5c2.916-65.435 7.976-128.936 15.25-187.72 7.606 61.433 12.744 128.775 15.532 198l32.625-32.624V138.062l-49.156-114.5zM33.126 206.845l37.344 94.062 193.905 193.938h30.813c-66.34-68.503-128.483-139.002-180.625-205.875 74.705 58.246 155.104 130.333 231.312 205.874h31.063L126.813 244.688l-93.688-37.844zm444.844 0l-93.626 37.812L268.75 360.25l18.156 18.125c36.278-32.102 72.315-62.265 107.125-89.406-27.302 35.015-57.36 71.02-89.31 107.217L325.06 416.5l115.532-115.53 37.375-94.126zM186.06 442.938l-51.906 51.906h28.594c12.596-12.486 25.314-24.875 38.094-37.125l-14.78-14.783zm39.375 39.406c-3.995 4.173-8.003 8.34-12.03 12.5h24.53l-12.5-12.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAllForOneIcon);
    