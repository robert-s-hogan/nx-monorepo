
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLeatherArmorIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'leather-armor'];
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
        <path fill="currentColor" d="M339.8 33.47l14 2.81c-1.2 3.02-2.5 6.32-4 9.75-5.8 13.63-14.2 29.31-20 35.12-4.9 4.85-19.8 9.57-33.1 11.48-11.2 1.8-22.4 3.9-33.7 3.9v15.97h-14V96.53c-12 .1-24.2-2.6-33.7-3.9-13.3-1.9-28.2-6.62-33.1-11.45-5.8-5.81-14.2-21.49-20-35.11-1.5-3.44-2.8-6.75-4-9.79l14-2.81c8.4 11.37 38 47.06 83.8 47.06s75.4-35.69 83.8-47.06zm31.9 6.38l31.9 6.38-29.7 74.37 32.7 49-9.5 66.1c-1.8 1.4-3.8 2.8-6 4.3-11.3 7.5-26.1 14.5-39.1 14.5-4.3 0-12-3.5-20.2-10.4-8.3-6.9-17-16.5-24.8-26.2-14.2-17.9-24.3-34.2-26-37v-18.4h11v-18h-11v-14h11v-18s38.9-7.7 50.4-18.57c10.2-10.11 17.8-26.43 24-40.82 2-4.79 3.8-9.3 5.3-13.26zm-231.4 0c1.5 3.96 3.3 8.48 5.3 13.29 6.2 14.39 13.8 30.71 24 40.79C185 107.1 220 112.5 220 112.5v18h11v14h-11v18h11v18.4c-1.7 2.8-11.8 19.1-26 37-7.8 9.7-16.5 19.3-24.8 26.2-8.2 6.9-15.9 10.4-20.2 10.4-13 0-27.8-7-39.1-14.5-2.2-1.5-4.2-2.9-6-4.3l-9.5-66.1 32.7-49-29.7-74.38zM263 130.5v14h-14v-14zm0 32V186l1.3 2.1s12.2 20.4 28.7 41c8.2 10.3 17.5 20.7 27.2 28.8 9.8 8.1 20.1 14.6 31.8 14.6 15.6 0 30-6.1 41.7-13l-2.1 15-54.2 40.7-81.4-97.8-81.4 97.8-54.2-40.7-2.1-15c11.7 6.9 26.1 13 41.7 13 11.7 0 22-6.5 31.8-14.6 9.7-8.1 19-18.5 27.2-28.8 16.5-20.6 28.7-41 28.7-41l1.3-2.1v-23.5zm-7 83.1l78.6 94.2 33.1-24.8-7.4 37c-13.1 3.1-64.2 14.5-104.3 14.5-40.1 0-91.2-11.4-104.3-14.5l-7.4-37 33.1 24.8zm90.3 128l8.7 34.9c-5.9 2-12.5 4.2-19.6 6.4-4.2 1.3-8.6 2.6-13 3.8l-6.6-39.6c11.3-1.8 21.8-3.8 30.5-5.5zm-180.6 0c8.7 1.7 19.2 3.7 30.5 5.5l-6.6 39.6c-4.4-1.2-8.8-2.5-13-3.8-7.1-2.2-13.7-4.4-19.6-6.4zm132.2 8l6.9 41.7c-13.9 3.3-27.8 5.9-39.8 6.8v-45.8c10.8-.3 22-1.4 32.9-2.7zm-83.8 0c10.9 1.3 22.1 2.4 32.9 2.7v45.8c-12-.9-25.9-3.5-39.8-6.8zm163.6 37.9l11.2 44.7s-56.2 20.2-85.6 24.3c-31.2 4.3-63.4 4.3-94.6 0-29.4-4.1-85.6-24.3-85.6-24.3l11.2-44.7c8.1 3.1 20.1 7.4 37.1 12.6 26.3 8.1 58.6 16.4 84.6 16.4 26 0 58.3-8.3 84.6-16.4 17-5.2 29-9.5 37.1-12.6z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLeatherArmorIcon);
    