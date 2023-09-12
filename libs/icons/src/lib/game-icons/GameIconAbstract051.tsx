
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbstract051Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abstract-051'];
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
        <path fill="currentColor" d="m124.6937,21c-57.2511,0-103.6937,47.4844-103.6937,106.0438s46.4426,105.8969 103.6937,105.8969c12.9326,0 25.3034-2.4644 36.7188-6.9031l155.8346,80.7813c-7.7593,7.2819-14.3702,15.7433-19.6818,25.1156h62.1284c28.7142,0 51.7,23.5043 51.7,52.875s-22.9858,53.1688-51.7,53.1688h-62.1284c17.9357,31.648 51.4049,53.0218 89.7409,53.0218 57.2512,0 103.6938-47.6313 103.6938-106.1906s-46.4426-105.8969-103.6938-105.8969c-12.9809,0-25.4147,2.4329-36.8658,6.9032l-155.8342-80.7813c7.7917-7.2981 14.4995-15.7124 19.8284-25.1157h-62.1283c-28.7142,0-51.7-23.5043-51.7-52.8749s22.9858-53.1688 51.7-53.1688h62.1283c-17.9357-31.6481-51.4048-52.875-89.7409-52.875zm41.4188,68.8844c-22.9158,0-41.4188,16.6375-41.4188,37.1594s18.503,37.0124 41.4188,37.0124h283.4688c22.9162,0 41.4187-16.4907 41.4187-37.0124s-18.5025-37.1594-41.4187-37.1594h-283.4688zm-103.6938,257.9125c-22.9163,0-41.4187,16.4907-41.4187,37.0125s18.5025,37.3062 41.4187,37.3062h283.4688c22.9157,0 41.4187-16.7845 41.4187-37.3062s-18.503-37.0125-41.4187-37.0125h-283.4688z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbstract051Icon);
    