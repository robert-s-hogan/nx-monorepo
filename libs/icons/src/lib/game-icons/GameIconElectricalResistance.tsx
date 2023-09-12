
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconElectricalResistanceIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'electrical-resistance'];
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
        <path fill="currentColor" d="M256 32l-64 96 80 16-16 80 64-96-80-16 16-80zm-96 217c-1.9 0-9.8 3-15.8 6.7-2.8 1.7-5.3 3.5-7.2 4.8v119c1.9 1.3 4.4 3.1 7.2 4.8 6 3.7 13.9 6.7 15.8 6.7 1.9 0 9.8-3 15.8-6.7 5.9-3.7 10.6-7.3 10.6-7.3l2.5-2H201V265h-12.1l-2.5-2s-4.7-3.6-10.6-7.3c-6-3.7-13.9-6.7-15.8-6.7zm192 0c-1.9 0-9.8 3-15.8 6.7-5.9 3.7-10.6 7.3-10.6 7.3l-2.5 2H311v110h12.1l2.5 2s4.7 3.6 10.6 7.3c6 3.7 13.9 6.7 15.8 6.7 1.9 0 9.8-3 15.8-6.7 2.8-1.7 5.3-3.5 7.2-4.8v-119c-1.9-1.3-4.4-3.1-7.2-4.8-6-3.7-13.9-6.7-15.8-6.7zm-133 16v110h14V265h-14zm32 0v110h42V265h-42zM95.5 311c-18.8 0-36.6 9.2-49.94 22.7C32.22 347.1 23 365 23 384v106h18V384c0-13 6.78-27.1 17.32-37.7C68.85 335.8 82.8 329 95.5 329H119v-18H95.5zm297.5 0v18h22.9c13.1 0 27.1 6.8 37.7 17.4C464.2 357 471 371 471 384v106h18V384c0-19-9.2-37-22.7-50.4-13.4-13.4-31.4-22.6-50.4-22.6H393z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconElectricalResistanceIcon);
    