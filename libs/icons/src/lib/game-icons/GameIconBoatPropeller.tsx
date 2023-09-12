
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBoatPropellerIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'boat-propeller'];
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
        <path fill="currentColor" d="M309.15 21.209c-24.995-.374-50.098 14.428-64.076 63.611-12.743 44.837-4.557 106.917 14.5 158.983 8.733-3.686 18.747-4.452 28.447-1.442 10.094 3.133 18.152 9.826 23.24 18.272 33.762-16.847 70.774-29.358 88.594-51.313 47.257-58.219 4.19-138.461-35.183-166.851-14.175-10.221-34.811-20.95-55.522-21.26zM135.72 207.832c-66.3-1.054-108.738 69.822-113.332 115.096-3.894 38.368 5.81 105.23 96.476 82.398 44.995-11.33 94.419-49.163 129.946-91.465-12.314-10.488-17.952-27.733-12.877-44.084a41.28 41.28 0 0 1 3.779-8.568c-32.11-20.996-61.997-47.643-90.418-52.178a95.72 95.72 0 0 0-13.574-1.199zm139.908 50.63c-10.094-.024-19.338 6.442-22.506 16.65-3.898 12.562 3 25.665 15.563 29.564 12.562 3.898 25.664-2.998 29.562-15.56 3.899-12.563-2.998-25.667-15.56-29.565a23.985 23.985 0 0 0-7.059-1.088zM316.9 287.84a41.399 41.399 0 0 1-1.464 6.61c-5.666 18.255-22.966 29.865-41.248 29.241-2.283 37.694-9.975 76.046.136 102.479 26.791 70.035 117.817 72.857 162.09 52.955 35.175-15.813 88.228-57.646 23.121-124.75-32.003-32.984-88.698-56.742-142.635-66.535z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBoatPropellerIcon);
    