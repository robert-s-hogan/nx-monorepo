
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSuitcaseIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'suitcase'];
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
        <path fill="currentColor" d="M208 95c-3.583 0-7.736 1.925-9.977 4.613-2.24 2.69-2.99 5.447-3.4 7.907-.82 4.92-.247 9.48.5 13.96.316 1.897.698 3.748 1.096 5.52h18.534c-.67-2.54-1.387-5.542-1.877-8.48-.35-2.093-.483-3.963-.53-5.52h87.305c-.046 1.557-.18 3.427-.53 5.52-.49 2.938-1.205 5.94-1.876 8.48h18.535c.4-1.772.78-3.623 1.097-5.52.747-4.48 1.32-9.04.5-13.96-.41-2.46-1.16-5.218-3.4-7.907C311.737 96.925 307.583 95 304 95h-96zm-105 16v18h50v-18h-50zm256 0v18h50v-18h-50zM96 145c-5 0-11.05 2.777-15.637 7.363C75.777 156.95 73 163 73 168v208c0 5 2.777 11.05 7.363 15.637C84.95 396.223 91 399 96 399h23V145H96zm41 0v254h238V145H137zm256 0v254h23c5 0 11.05-2.777 15.637-7.363C436.223 387.05 439 381 439 376V168c0-5-2.777-11.05-7.363-15.637C427.05 147.777 421 145 416 145h-23z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSuitcaseIcon);
    