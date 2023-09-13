
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDesertEagleIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'desert-eagle'];
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
        <path fill="currentColor" d="M440.225 129.522h31.64V115.87H460.02zm-392.75 36.293v-.084a.483.483 0 0 1 0-.084.179.179 0 0 0 0-.126l-.084-.336a13.358 13.358 0 0 0-.913-2.321 22.62 22.62 0 0 0-1.975-3.308 22.389 22.389 0 0 0-1.396-1.775c-.263-.294-.515-.598-.788-.892l-.861-.84a22.861 22.861 0 0 0-1.859-1.618c-.63-.546-1.323-.945-1.995-1.417-.672-.473-1.365-.788-2.027-1.177a16.802 16.802 0 0 0-1.943-.913c-.62-.252-1.197-.546-1.722-.693l-1.375-.441-1.23-.378 1.23-.389 1.438-.441c.567-.189 1.208-.273 1.922-.441a19.627 19.627 0 0 1 2.352-.389c.84-.073 1.765-.22 2.71-.23.945-.011 1.963-.064 2.972 0a31.02 31.02 0 0 1 3.15.314l1.586.263c.525.105 1.05.231 1.554.357 1.05.231 2.048.557 3.035.872.987.315 1.795.65 2.636 1.05a51.393 51.393 0 0 0-5.146 14.555zm158.76 93.671c.167 1.44.377 2.815.64 4.117a29.55 29.55 0 0 0 .966 3.57 15.258 15.258 0 0 0 1.281 2.825 7.193 7.193 0 0 0 .725 1.05 5.954 5.954 0 0 0 .724.84l.672.61c.22.147.42.262.578.357l.493.304-.567-.115c-.189 0-.43-.084-.703-.158l-.903-.367a6.72 6.72 0 0 1-1.05-.599 8.401 8.401 0 0 1-1.187-.872 17.338 17.338 0 0 1-2.457-2.52 32.838 32.838 0 0 1-2.384-3.392 53.451 53.451 0 0 1-2.205-4.032 91.498 91.498 0 0 1-3.844-9.137 143.14 143.14 0 0 1-2.468-7.434 22.82 22.82 0 0 1 11.552-3.833c-.2 3.066-.336 6.3-.326 9.64a84.61 84.61 0 0 0 .462 9.146zm34.654 28.89a9.073 9.073 0 0 0 9.073-9.074v-38.56h5.954v44.525a9.073 9.073 0 0 1-9.073 9.073h-65.381l1.365-5.954h58.051zm236.49-81.837H54.017C44.566 217.04 26 219.886 26 225.44c0 6.816 52.076-8.4 50.973 30.601-1.722 60.782-31.703 60.792-35.988 125.732a13.463 13.463 0 0 0 13.41 14.356h74.402a16.172 16.172 0 0 0 15.847-12.98c10.312-51.162 22.231-98.838 30.916-139.059 3.024-14.019 20.456-20.152 30.538-20.152h236.51a43.37 43.37 0 0 0 34.77-17.4zM101.724 355.962a11.961 11.961 0 1 1-11.961 11.961 11.961 11.961 0 0 1 11.961-11.96zm27.45-70.81a11.961 11.961 0 1 1-11.96-11.961 11.961 11.961 0 0 1 11.971 11.96zM87.17 146.324h385.493A13.379 13.379 0 0 1 486 159.703v20.803a43.57 43.57 0 0 1-.998 9.23H60.15c1.344-5.397 4.043-16.444 4.946-21.307 2.248-12.003 9.903-22.105 22.116-22.105z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDesertEagleIcon);
    