
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCardKingHeartsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'card-king-hearts'];
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
        <path fill="currentColor" d="M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363c0 21.263 13.074 38.5 29.2 38.5h275.298c16.126 0 29.198-17.237 29.198-38.5v-363c0-21.263-13.072-38.5-29.198-38.5H119.436zm57.214 16.174h.002c13.612-.318 26.502 9.855 27.073 28.043.976 31.09-47.738 52.945-52.31 70.015-4.998-18.649-51.414-37.573-52.45-70.015-.995-31.156 37.401-37.91 52.45-11.848 6.26-10.846 15.922-15.977 25.235-16.195zm-15.615 116.515h80.358v8.916h-17.118c-3.645 0-6.458.95-8.44 2.852-1.98 1.902-2.972 4.32-2.972 7.252v81.664l66.213-70.728c3.804-4.121 5.705-8.004 5.705-11.649 0-2.774-1.308-5.032-3.924-6.775-2.615-1.744-6.894-2.616-12.837-2.616h-4.874v-8.916h72.155v8.916h-5.586c-4.834 0-10.145 1.427-15.93 4.28s-11.133 6.815-16.047 11.886l-40.773 42.438 58.367 86.062c3.25 4.835 6.617 8.282 10.104 10.342 3.486 1.981 7.608 2.973 12.363 2.973h6.418v8.914H264.93v-8.914h9.033c6.577 0 10.936-.555 13.076-1.664 2.219-1.11 3.328-2.496 3.328-4.16 0-1.506-.475-3.012-1.426-4.518l-48.5-71.324-27.578 29.6v43.27c0 2.693.792 4.674 2.377 5.942 2.536 1.902 5.549 2.854 9.035 2.854h17.118v8.914h-80.358v-8.914h15.453c3.963 0 6.895-.792 8.797-2.377 1.902-1.664 2.854-3.805 2.854-6.42V186.4c0-2.773-1.072-4.912-3.211-6.418-2.14-1.585-5.745-2.377-10.817-2.377h-13.076v-8.916zM360.73 361.77c4.572 17.071 53.289 38.924 52.312 70.014-.57 18.188-13.463 28.361-27.074 28.043h-.002c-9.313-.218-18.973-5.35-25.235-16.195-15.048 26.061-53.445 19.308-52.45-11.848 1.036-32.442 47.451-51.364 52.449-70.013z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCardKingHeartsIcon);
    