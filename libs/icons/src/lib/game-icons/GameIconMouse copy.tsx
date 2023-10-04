
  import DynamicIconWrapper from '../DynamicIconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMouse copyIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'mouse copy'];
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
        <path fill="currentColor" d="M34.938 16.906l-13.438 13C38.818 47.84 43.224 67.702 43.938 90.53c.713 22.83-2.914 47.96-.844 73.407 2.07 25.448 10.682 51.637 35.437 73.375 12.552 11.02 28.978 20.904 50.5 29.594-35.85 77.342 47.795 132.472 156 132.938C271.356 402 258.744 410.08 251.28 423c-13.113 22.707-5.338 51.734 17.376 64.844 22.714 13.11 51.76 5.332 64.875-17.375 4.172-7.224 6.21-15.09 6.345-22.876 35.374 15.605 85.978 19.85 137.156 7.687-13.672-51.014-42.848-92.966-74.624-115.624 6.57-4.002 12.257-9.682 16.375-16.812 13.115-22.707 5.34-51.734-17.374-64.844-22.712-13.11-51.76-5.332-64.875 17.375-6.807 11.79-7.995 25.29-4.374 37.375-54.145-91.83-145.59-133.942-193.812-62.313-21.142-8.312-36.498-17.526-47.5-27.187-20.946-18.393-27.29-38.276-29.125-60.844-1.837-22.567 1.69-47.38.905-72.47-.784-25.088-6.53-51.12-27.688-73.03z"/>
      </svg>
    );
  };
  
  export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMouse copyIcon })
);

    