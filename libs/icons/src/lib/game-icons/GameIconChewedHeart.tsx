
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconChewedHeartIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'chewed-heart'];
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
        <path fill="currentColor" d="M371.148 21.422c-47.943.474-94.522 30.346-106.605 84.855 23.308 25.97 35.25 59.46 30.36 94.453l-18.51-2.585c6.01-43.03-18.18-83.975-60.573-106.483-30.015-13.248-62.242-15.24-91.802-8.28l-6.82 1.147c.035.21.058.394.093.603-.275.08-.552.152-.827.232.297.04.59.09.887.135 3.047 18.48 3.43 30.233 1.01 38.135-2.465 8.044-7.604 13.897-19.858 21.88l-10.947 7.13 10.287 8.056c21.587 16.905 26.17 33.387 22.36 44.382-3.81 10.995-17.38 20.564-42.932 20.02l-11.91-.254 2.59 11.627c3.902 17.518 2.97 29.854-.3 37.894s-8.532 12.52-16.617 15.308l.006.015-7.91 2.555C112.05 394.053 302.19 431.686 337.77 493.3c0-88.87 183.898-228.256 149.855-373.734-15.838-67.674-66.885-98.634-116.475-98.144zm-233.69 72.246c21.017 14.63 31.41 45.175 15.14 71.9 96.352-16.05 73.76 120.85 5.703 101.38-19.06 41.176-62.37 43.628-87.2 32.82 5.938-4.656 10.792-10.806 13.863-18.36 4.23-10.4 5.16-23.078 3.094-37.998 25.026-2.268 43.544-14.152 49.802-32.21 6.223-17.957-.74-38.94-19.358-57.192 8.663-7.18 14.733-15.126 17.727-24.897 3.145-10.27 3.022-21.51 1.227-35.442z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconChewedHeartIcon);
    