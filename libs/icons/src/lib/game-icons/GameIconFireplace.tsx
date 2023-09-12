
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFireplaceIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'fireplace'];
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
        <path fill="currentColor" d="M133.2 25l-53.69 94H432.5l-53.7-94H133.2zM25 137v46h462v-46H25zm32 64v46h46v-46H57zm352 0v46h46v-46h-46zm-171.4.6s-22 8.8-24 18.8c-4.6 22.8 33.9 60.8 33.9 60.8s-13.3-34.6-14.3-52.8c-.5-9.1 4.4-26.8 4.4-26.8zm54.4 14.8c-6.1 40.2-11.2 83.7-45.9 100.2-30.3 14.4-36.4-78.5-94.1-91.5 44.9 101.1-68.9 139.9 42.2 185.2h19.5c-24-25.9-34.4-90.8-34.4-90.8s30.2 72 62.5 74.2c15 1 33.5-30.2 33.5-30.2s5.9 29.8-.1 46.8H319c27.3-14.8 44.6-35.7 51.2-57.3 6.5-20.9 3-42.5-10.9-59.9-8.6 51.8-21.4 62.8-55.1 74.1 36.6-44.7 20.2-119.2-12.2-150.8zM57 265v46h46v-46H57zm352 0v46h46v-46h-46zM57 329v78h46v-78H57zm352 0v78h46v-78h-46zM25 425v62h462v-62H25z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFireplaceIcon);
    