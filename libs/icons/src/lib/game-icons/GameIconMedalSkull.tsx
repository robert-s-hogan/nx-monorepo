
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMedalSkullIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'medal-skull'];
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
        <path fill="currentColor" d="M248.563 20.844c-43.486.112-87.294 4.423-131.563 13.843v53.97c93.527-27.524 193.554-20.19 277.844.75V34.968c-45.613-8.42-91.43-13.623-137.594-14.095-2.896-.03-5.788-.04-8.688-.03zm-3.657 68.5c-12.22.072-24.497.58-36.75 1.562V289.47c14.508-5.86 30.758-9.126 47.78-9.126 16.62 0 32.512 3.09 46.75 8.687l.002-196.936c-17.3-1.715-34.878-2.678-52.563-2.75-1.744-.007-3.473-.01-5.22 0zm-55.437 3.47c-14.55 1.76-29.064 4.18-43.407 7.436v180.72l33.156 25.467c3.22-2.642 6.652-5.084 10.25-7.375V92.813zm131.905 1.436v204.156c3.657 2.274 7.125 4.74 10.406 7.375l31.033-24.75V101.126c-13.522-2.72-27.365-5.028-41.438-6.875zm-65.438 204.78c-50.672 0-89.812 32.778-89.812 70.75 0 24.138 15.838 46.124 40.375 58.97l-17.406 60.156 17.937 5.188 12.47-43.03 24.53-.002v44.813h18.69v-44.813h25.06l12.47 43.032 17.938-5.188-16.813-58.156c26.797-12.478 44.344-35.544 44.344-60.97 0-37.972-39.11-70.75-89.783-70.75zm-55.343 41.033l44 48.406-52.063-6.94 8.064-41.467zm109.72 0l8.06 41.468-52.062 6.94 44-48.408zm-55.69 61.687l15.064 29.47h-30.125l15.062-29.47z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMedalSkullIcon);
    