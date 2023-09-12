
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLighthouseIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'lighthouse'];
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
        <path fill="currentColor" d="M136 40.938l-88 44V184h176V84.937l-88-44zM480 48l-240 80v32l240 64V48zM64 96h31.406l.313 64H64V96zm47.406 0h48l.313 64h-48l-.314-64zm64 0H208v64h-32.28l-.314-64zM79.312 201L19.094 487h233.812l-.094-.438.125.094c7.327-10.582 26.22-22.905 46.032-28.22 10.19 18.728 29.766 30.564 53.03 30.564h4.125l2.688-3.125c11.347-13.123 19.005-24.272 35.843-27.906C404.94 477.692 426.263 489 448 489h5.25l2.594-4.563c8.78-15.503 11.158-17.993 28.844-28.75l-9.375-15.375c-16.44 10-24.038 17.37-32.063 30.344-15.508-1.633-29.613-11.073-34.75-25.656l-2.344-6.625-7 .656c-26.106 2.45-39.755 18.452-51.062 31.72-17.555-1.233-29.83-10.616-35.688-25.97l-2.656-6.967-7.375 1.343c-20.77 3.78-40.482 13.32-54.094 25.813L192.688 201H79.313zM87 256h18v48H87v-48zm80 128h18v48h-18v-48z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLighthouseIcon);
    