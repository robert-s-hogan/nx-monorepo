
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconIceGolemIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'ice-golem'];
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
        <path fill="currentColor" d="M64.086 26.254c-6.237 39.87-10.003 32.572-38.703 36.922 26.282 3.712 39.417 8.81 38.193 37.176 2.659-19.972.836-30.862 36.156-36.666-15.822-6.064-33.712 4.317-35.646-37.432zm171.064.41L204.6 74.125l20.066 14.436 35.813-1.82 22.677-15.118-25.306-43.582-22.7-1.377zm58.313 26.863l34.135 58.787-3.514 4.756c-8.857 11.988-15.901 23.926-26.307 34.877l26.118 38.395-4.485-31.547 42.602-93.592-68.55-11.676zm-102.906 9.159l-56.166 16.63 10.02 19.877-18.005 28.631 31.244-2.363 16.258 32.252 5.51 83.332 34.289 33 14.793-60.986 46.986 66.673 55.434-39.97-1.518-10.672-.629.428-44.134-64.881-7.352 74.902-80.46-78.674.273-.281a85.007 85.007 0 0 1-6.385-8.314c-10.292-15.21-16.606-32.339-23.592-43.815l-2.93-4.812 26.364-40.957zm182.916 20.789l-27.828 61.136 31.628 21.692 31.745 93.63c-14.946-3.888-30.64 2.536-32.446-36.415-6.236 39.87-10.003 32.57-38.703 36.92 26.282 3.712 39.42 8.81 38.195 37.175 2.589-19.446.944-30.28 33.457-36.195l7.372 21.74 7.736-70.28 46.723 27.222-24.922-83.52-31.106 7.588-4.265-17.488 58.337-14.227c-7.958-4.17-10.582-5.507-21.425-11.27-10.758-5.716-21.643-11.558-30.147-16.253-4.252-2.348-7.9-4.404-10.703-6.053-.857-.505-1.495-.91-2.2-1.344l-31.448-14.058zm-81.262 3.744l-23.477 15.65v10.342h-18v-7.953l-16.56.842.754 8.283L217 116.012l-1.049-11.547-21.107-15.184-9.56 14.854c7.03 12.719 12.763 26.851 20.34 38.049 8.34 12.328 17.659 20.674 34.343 21.978 21.412-5.759 33.462-13.368 42.847-22.656 8.386-8.3 15.088-18.692 23.342-30.272L292.211 87.22zm-171.633 4.687L72.611 106.41l-3.324 38.537 13.43 8.631c-48.664 60.418-1.867.866-47.516 60.793l75.274-56.168 9.484 15.299L63.822 208.3l-5.527 64.074 41.072-28.842 11.117 25.617 31.87-102.539 10.503-10.666-5.859-11.627-54.834 4.149 31.596-50.25-3.182-6.31zm123.963 30.412c1.995.03 3.956.157 5.863.368 13.566 1.499 24.743 5.851 31.79 13.085l-12.895 12.56c-1.294-1.33-11.018-6.666-20.871-7.755-9.853-1.089-19.496.729-26.295 8.057l-13.196-12.242c8.706-9.383 20.047-13.244 30.897-13.955a58.083 58.083 0 0 1 4.707-.118zm21.063 51.987c-6.368 2.817-13.521 5.33-21.64 7.478l19.075 18.65 2.565-26.128zM439.49 242.37l-8.05 73.15c.82-.779 1.713-1.807 2.726-3.195 4.278-5.86 9.527-17.238 18.947-30.896l3.041-4.409 5.325.569c7.072.756 12.796 2.553 17.478 4.494l-10-22.545-29.467-17.168zM238.46 258.437l-2.494.204-12.156 50.109-24.1-23.193 26.346 42.152 41.062-19.115 15.66 27.707 44.032-9.846 6.101-37.865-3.775-25.35-57.881 41.737-32.795-46.54zm-146.662 12.87l-.93.19-41.486 29.132-5.75 22.115 38.984-22.586 25.756 23.113.512-12.597-17.086-39.367zm82.078 6.879l-45.77 107.558 9.182 41.313 17.697-53.094 16.582 47.125 10.842-13.99 7.696-19.975c38.884 7.55 31.602 11.181 34.92 39.856 4.635-26.136 10.192-39.084 38.497-36.862-19.866-3.36-30.814-1.923-35.37-37.426-6.58 15.513 2.999 33.633-37.993 34.29l19.72-51.19-36.003-57.605zm176.457 15.433l-7.691 47.74-39.034 8.729 32.791 19.484 5.99 49.994 22.903-34.087 29.022 44.11 7.892-66.1-51.873-69.87zm99.283 12.774c-6.236 39.87-10.003 32.57-38.703 36.92 26.282 3.712 39.417 8.81 38.193 37.175 2.659-19.972.838-30.861 36.159-36.666-15.823-6.063-33.714 4.32-35.649-37.43zm-84.48 111.597l-24.555 36.547-2.822 33.858 127.039 1.876 19.959-44.076-35.29 19.82-11.573-21.216-14.118 12.605-14.498-1.318-2.931 24.545-41.211-62.64zm-173.678 6.819l-25.904 33.421-10.108-28.724-20.05 60.15h57.01c-2.998-20.407-2.653-42.363-.948-64.847zm-111.969 4.84l-12.275 60.007h65.545l-7.776-34.988-23.048 10.477-22.446-35.497z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconIceGolemIcon);
    