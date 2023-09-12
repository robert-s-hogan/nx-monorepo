
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTorpedoIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'torpedo'];
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
        <path fill="currentColor" d="M40 47c-9.282 0-17 7.718-17 17s7.718 17 17 17 17-7.718 17-17-7.718-17-17-17zm0 16c.446 0 1 .554 1 1 0 .446-.554 1-1 1-.446 0-1-.554-1-1 0-.446.554-1 1-1zm48 48c-9.282 0-17 7.718-17 17s7.718 17 17 17 17-7.718 17-17-7.718-17-17-17zm0 16c.446 0 1 .554 1 1 0 .446-.554 1-1 1-.446 0-1-.554-1-1 0-.446.554-1 1-1zm-40 40c-13.7 0-25 11.3-25 25s11.3 25 25 25 25-11.3 25-25-11.3-25-25-25zm0 18c3.973 0 7 3.027 7 7s-3.027 7-7 7-7-3.027-7-7 3.027-7 7-7zm52.23 32l13 39-13 39h26.514v-78H100.23zm164.622 0l-120.108 30.025v17.948L264.852 295h117.892v-78H264.852zm135.892 0v78h30v-78h-30zm48 0v78h5.684c28.584-7.435 40.316-23.962 40.316-39s-11.732-31.565-40.316-39h-5.684z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTorpedoIcon);
    