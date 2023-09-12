
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBarrierIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'barrier'];
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
        <path fill="currentColor" d="M112 41c-21.65 0-39 17.35-39 39 0 21.6 17.35 39 39 39 21.6 0 39-17.4 39-39 0-21.65-17.4-39-39-39zm288 0c-21.6 0-39 17.35-39 39 0 21.6 17.4 39 39 39s39-17.4 39-39c0-21.65-17.4-39-39-39zM112 55c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25zm288 0c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25zM83.38 129.2L80.87 151h45.83l1.9-16.5c-5.2 1.6-10.8 2.5-16.6 2.5-10.4 0-20.2-2.8-28.62-7.8zm345.22.1c-8.4 4.9-18.2 7.7-28.6 7.7-5.8 0-11.4-.9-16.7-2.5l1.9 16.5h45.9l-2.5-21.7zM41 169v57.3L79.18 169H41zm59.8 0l-51.98 78h42.36l52.02-78h-42.4zm64 0l-52 78h42.4l52-78h-42.4zm64 0l-52 78h42.4l52-78h-42.4zm64 0l-52 78h42.4l52-78h-42.4zm64 0l-52 78h42.4l52-78h-42.4zm64 0l-52 78h42.4l52-78h-42.4zm50.2 20.8L432.8 247H471v-57.2zM67.71 265l-7.15 62h45.84l7.2-62H67.71zm330.69 0l7.1 62h45.9l-7.1-62h-45.9zM41 345v16h430v-16H41zm13.56 34L42.1 487h45.88l12.42-108H54.56zm356.94 0L424 487h45.9l-12.5-108h-45.9z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBarrierIcon);
    