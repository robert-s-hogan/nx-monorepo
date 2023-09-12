
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDoubleRingedOrbIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'double-ringed-orb'];
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
        <path fill="currentColor" d="M254.777 93.275c-58.482 0-105.695 47.21-105.695 105.696 0 58.487 47.213 105.698 105.695 105.698 58.482 0 105.696-47.21 105.696-105.697 0-58.48-47.214-105.695-105.696-105.695zm-140.714 63.59C-40.9 155.67-21.26 276.118 227.043 357.748c225.954 74.28 319.04 10.624 239.48-69.973-.413-.55-.84-1.097-1.277-1.64-4.755 3.954-9.71 7.915-14.95 11.88 4.487 5.513 7.138 11.084 7.704 16.01.713 6.2-.9 11.8-6.986 17.977-5.84 5.927-16.25 11.98-32.307 16.49-24.074 5.698-58.427 5.6-102.287-2.656l.105-.04c-2.153-.38-4.3-.787-6.445-1.198-21.875-4.418-46.004-10.805-72.318-19.455-69.962-23-118.054-49.706-146.063-74.936.246-.19.48-.38.728-.568-.27.166-.532.333-.8.5-53.315-48.08-33.682-90.78 46.558-92.2-8.46-.665-16.502-1.016-24.124-1.075zm281.425 0c-7.62.06-15.663.41-24.123 1.076 80.24 1.42 99.86 44.115 46.537 92.193-.264-.165-.513-.33-.78-.494.244.184.472.368.712.553-26.017 23.434-69.357 48.144-131.455 69.973 21.19 5.413 42.82 9.363 64.815 11.64 34.83-15.125 63.025-30.916 84.91-46.554.01.007.02.014.032.02.522-.386 1.03-.773 1.547-1.16 90.502-65.565 69.686-128.11-42.196-127.247zM44.54 286.27c-74.364 73.55-5.467 133.668 176.683 89.125-22.844-7.563-44.89-15.83-65.84-24.194-25.396 2.316-46.41 1.29-62.842-2.346-16.802-4.544-27.613-10.765-33.61-16.852-6.086-6.176-7.697-11.776-6.985-17.977.56-4.88 3.17-10.395 7.582-15.86-5.253-3.968-10.22-7.935-14.986-11.894z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDoubleRingedOrbIcon);
    