
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBigGearIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'big-gear'];
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
        <path fill="currentColor" d="M438.582 296.069l53.302-14.694-.024-50.728-53.278-14.743c-4.76-21.901-13.445-42.325-25.185-60.608l27.323-48.157-35.904-35.855-48.078 27.3C338.4 86.818 317.975 78.16 296.053 73.347l-14.746-53.224H230.64l-14.77 53.224c-21.874 4.813-42.324 13.472-60.61 25.235L107.13 71.284l-35.88 35.883 27.3 48.077c-11.74 18.336-20.401 38.76-25.236 60.66l-53.198 14.744v50.727l53.198 14.694a186.28 186.28 0 0 0 25.235 60.658l-27.298 48.157 35.88 35.83 48.128-27.274a186.217 186.217 0 0 0 60.66 25.186l14.72 53.25 50.693-.024 14.72-53.225c21.923-4.813 42.348-13.47 60.686-25.212l48.127 27.327 35.805-35.883-27.273-48.155c11.714-18.31 20.4-38.708 25.185-60.635zM200.588 122.394h110.819l78.333 78.358v9.207h-55.162c-15.844-26.933-45.134-45.051-78.582-45.051-33.445 0-62.735 18.118-78.578 45.051H122.23v-9.207zm55.408 88.542c24.88 0 45.072 20.196 45.072 45.052 0 24.929-20.19 45.1-45.072 45.1-24.872 0-45.068-20.17-45.068-45.1 0-24.856 20.196-45.052 45.068-45.052zm55.411 179.05H200.588l-78.357-78.358v-9.612h55.106a91.66 91.66 0 0 0 14.253 18.417c17.206 17.206 40.082 26.681 64.407 26.681 24.333 0 47.208-9.476 64.415-26.683a91.636 91.636 0 0 0 14.25-18.415h55.079v9.612z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBigGearIcon);
    