
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbdominalArmorIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abdominal-armor'];
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
        <path fill="currentColor" d="M162 35.75l-94.49 27.1c-12.05 6.3-23.47 23.9-31.01 46.35-6.07 18.2-9.62 38.9-10.93 58.3L136.7 112zm188 .1L375.4 112l111 55.6c-1.3-19.3-4.9-40.2-10.9-58.3-5.7-17.05-13.6-31.35-22.5-40.05-2.7-2.8-5.5-4.9-8.4-6.4zm-172.9 11.5l-25.7 77.45-92.9 46.4 14.08 53.5 88.82 44.4 94.6-15.9 94.6 15.9 88.8-44.4 14.1-53.5-92.8-46.4-25.8-77.35h-10.5l-59.3 73.95-.1 61.1h-18.1l.1-61-59.3-74.15zM78.65 247.7l22.05 83.9 146.2-43.8v-14.7l-88.4 14.7zm354.75 0l-80 40.1-88.4-14.7v14.7l146.3 43.8zm-186.5 58.7l-31.6 9.6-35.1 70.2 66.7-33.3zm18.1 0v46.5l66.9 33.4-35.2-70.3zM191.7 323l-86.4 26 25.3 96.3zm128.6.1l61.1 122.1 25.3-96.2zm-55.3 50l.1 43.2 100.7 37.8-20.4-40.8zm-18.1 0l-80.2 40.1-20.5 40.9L247 416.3zm.1 62.4l-81.6 30.6 81.6 10.2zm18.1 0v40.7l81.7-10.2z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbdominalArmorIcon);
    