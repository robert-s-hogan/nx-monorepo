
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHeartBeatsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'heart-beats'];
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
        <path fill="currentColor" d="M366.688 30.027c-1.01-.01-2.022-.01-3.034.004h.002c-41.495.563-83.634 22.155-110.844 69.282-41.912-117.77-236.49-76.29-232 64.5.64 20.068 5.132 38.987 12.454 56.917h76.45l21.22-74.126 26.375 90.134 18.46-64.312 17.238 48.303H328.1l21.222-74.126 26.375 90.13 18.46-64.308 17.238 48.303h72.517c7.097-18.183 10.927-37.136 10.307-56.917-2.61-83.04-63.874-133.082-127.533-133.786zM131.125 211.34l-7.842 27.39h-81.58c54.51 103.006 197.737 172.59 216.172 241.395 16.782-62.62 165.07-139.482 217.855-241.396h-77.023l-2.69-7.542-20.154 70.208-26.353-90.054-7.84 27.387H180.32l-2.69-7.54-20.15 70.206-26.355-90.056z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHeartBeatsIcon);
    