
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCrossedClawsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'crossed-claws'];
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
        <path fill="currentColor" d="M19.453 19.705v245.13c4.412-17.67 14.42-34.115 27.492-47.702 12.698-13.2 28.387-23.823 45.4-30.082 12.868-6.873 23.85-14.545 31.89-23.404 9.75-10.736 15.592-22.933 16.154-39.316-1.656-23.427 5.156-47.68 17.508-68.144 8.895-14.738 20.753-27.626 34.87-36.48H19.453zm215.035 6.215c-5.724-.02-11.28.912-16.675 2.59-17.264 5.368-33.076 19.375-43.915 37.334-10.84 17.958-16.528 39.624-14.724 58.93 1.62 17.348 8.724 32.643 23.82 43.712l31.033-28.47-6.61 45.058c2.833 2.213 5.588 4.5 8.26 6.863l37.093-18.232-18.836 37.006c3.236 3.88 6.3 7.91 9.2 12.08l41.372-9.536-27.45 33.256c2.04 4.16 3.95 8.422 5.712 12.797l40.853-2.43-32.007 29.693c1.23 4.84 2.32 9.78 3.27 14.826l41.31 4.756-37.52 23.68c.538 6.54.875 13.23 1.01 20.063l40.796 11.113-41.38 17.777c-.26 4.49-.596 9.03-1.01 13.627l39.984 13.582-43.467 15.115c-.246 1.63-.497 3.263-.76 4.906l-.095-.016c-2.115 20.453-5.49 41.9-10.14 64.314 26.924-20.296 50.692-45.74 70.003-74.527l-.865-.603c75.188-107.848 76.028-266.003-57.973-373.15-14.29-11.425-27.695-16.07-40.29-16.114zM124.195 199.57c-3.522.076-7.08.433-10.666 1.043-19.117 3.255-38.574 14.36-53.116 29.477-14.542 15.117-23.98 34.013-24.7 52.076-.717 18.063 6.375 35.746 27.81 51.52 67.433 49.626 139.796 66.25 195.744 59.224 4.17-43.893.952-81.86-9.14-113.54l-12.825 18.442-1.82-38.984c-5.46-1.862-10.803-3.962-16.02-6.305l-27.98 25.754 6.87-36.97c-3.73-2.31-7.376-4.763-10.947-7.352l-38.388 19.236 16.87-37.415c-12.557-11.8-26.784-16.527-41.693-16.205zm369.475 7.31c-21.533 10.837-42.396 20.03-62.555 27.593l-2.613 42.492-23.047-33.64c-1.282.404-2.56.795-3.834 1.183 1.383 32.623-2.928 65.035-12.2 95.873 46.435-34.513 83.29-81.657 104.25-133.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCrossedClawsIcon);
    