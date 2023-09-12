
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpikedBatIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'spiked-bat'];
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
        <path fill="currentColor" d="M461.572 116.805a29.43 29.43 0 0 1-3.764 8.735l27.695-2.337zM339.34 102.688l-11.79-36.26 21.149 27.324zm44.774 99.698q4.462-4.41 8.586-8.576l8.164 34.146-16.92-25.898zM41.069 425.111l46.317 46.338L72.836 486l-46.339-46.338zm73.114-43.875l13.577 23.392a1520.726 1520.726 0 0 0-14.582 14.36l-15.64-20.695c5.287-5.308 10.839-11.019 16.623-17.057zm27.663-29.852l12.584 28.107q-7.254 6.63-14.107 13.092l-14.032-24.174a1262.91 1262.91 0 0 0 15.555-17.025zm-56.458 58.933l15.756 20.832a1221.23 1221.23 0 0 0-14.72 15.354l-18.95-18.95c4.907-4.631 11.03-10.426 17.914-17.226zm317.696-279.48a9.517 9.517 0 0 1 12.594 4.886l22.112 50.135-37.815-39.698a9.75 9.75 0 0 1-1.82-2.728 9.517 9.517 0 0 1 4.929-12.594zm-51.594 4.474a2.115 2.115 0 0 1 .824 1.195c.804 2.633-1.057 7.952-4.103 11.865-1.924 2.453-3.87 3.785-5.287 3.785a1.787 1.787 0 0 1-1.755-1.459l-10.691-20.684zm49.183-57.22a9.555 9.555 0 1 1-18.971 2.305L375.092 26l24.618 48.96a9.76 9.76 0 0 1 .963 3.131zM286.36 181.068c12.88-14.097 23.645-25.433 33.257-35.246l6.155 11.918a18.675 18.675 0 0 0 17.173 11.346c4.812 0 11.94-1.787 18.58-10.268 8.11-10.352 8.915-20.864 6.958-27.25a19.087 19.087 0 0 0-7.73-10.406l-2.38-1.555-2.76-.698-6.915-1.744c7.222-6.906 14.371-13.663 22.09-21.065a26.437 26.437 0 0 0 45.704-24.597c18.506 8.914 37.477 35.055 25.221 47.311a1172.556 1172.556 0 0 0-10.374 10.512l-.19-.423a26.49 26.49 0 0 0-24.227-15.789 26.437 26.437 0 0 0-19.214 44.679l8.11 8.523c-16.348 17.11-34.97 35.795-62.898 61.301-20.091 18.358-108.253 89.59-165.272 140.01l-13.504-30.18c49.638-56.83 114.82-137.345 132.216-156.38z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpikedBatIcon);
    