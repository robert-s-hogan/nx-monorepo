
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBottledBoltIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'bottled-bolt'];
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
        <path fill="currentColor" d="M108.875 32.688v56.5H415.03v-56.5H108.876zm19.688 75.187c-.782 5.333-2.006 8.77-3.282 11.063-2.115 3.802-4.57 5.415-8.968 8.562-4.396 3.147-10.553 7.908-14.656 16.22-4.103 8.31-6.28 19.467-6.28 36.28v251.406C95.375 463.746 121.66 490 154 490h213.47c32.338 0 58.592-26.255 58.592-58.594V180c0-17.668-2.004-29.225-5.812-37.813-3.808-8.587-9.777-13.66-14.094-16.812-4.317-3.153-6.54-4.544-8.437-7.906-1.096-1.94-2.172-4.94-2.908-9.595H375.97c.916 7.868 2.717 13.91 5.467 18.78 4.132 7.32 9.966 11.095 13.688 13.814 3.722 2.718 5.81 4.27 8.03 9.28 2.223 5.01 4.22 14.06 4.22 30.25v251.406c0 22.355-17.55 39.906-39.906 39.906H154c-22.355 0-39.938-17.55-39.938-39.906V180c0-15.155 2.098-23.42 4.376-28.03 2.277-4.614 4.64-6.31 8.75-9.25 4.11-2.943 10.142-7.028 14.406-14.69 2.898-5.206 4.827-11.705 5.78-20.155h-18.81zm184.812 2.28l-173.5 184.095H247.28l-59.218 159.28 195.5-208.936h-117l46.813-134.438z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBottledBoltIcon);
    