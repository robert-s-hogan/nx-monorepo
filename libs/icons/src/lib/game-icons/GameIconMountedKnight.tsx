
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMountedKnightIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'mounted-knight'];
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
        <path fill="currentColor" d="M222.776 64.76a16.1 16.1 0 0 1 4.22.56c8.45 2.29 13.88 11.15 14.57 22l-25.78 6 21.89 13.86c-4.93 10.47-13.67 17.3-22.34 17.3a16.1 16.1 0 0 1-4.22-.56c-11.68-3.16-17.59-18.85-13.2-35 3.87-14.26 14.43-24.16 24.86-24.16zm-20.29-9.44a38.78 38.78 0 0 1 9.18-4.65c-5.47-4.23-12.06-8.82-15.9-9.73-27.8-6.55-28.34 34.41-49.08 15.35 16.77 30.56 35.36-12.18 55.8-.96zm54 115.56c-6.437-14.24-23.208-20.557-37.44-14.1l23.34 51.55c14.246-6.438 20.57-23.21 14.12-37.45zm-69.52 35l-21.72-6.66-60.94 31 7.16 14.07zm29.88-65.41h-1.53c-2.836.002-5.66-.37-8.4-1.11a32.64 32.64 0 0 1-14.27-8.23l-19.49 53.78 47.69 14.63-10.68-23.59-14-2.64 9.69-7-8.01-17.51s17.52-7.83 19-8.33zm-132.65 143c-64.72-46.18 42-97.32-47.05-105.87 59.27 26.57-49.43 44.81-10.25 97.71 7.49 10.11 34.76 24.95 49.64 32.56a78.51 78.51 0 0 1 7.7-24.38zm132.79-63.26l2.31-4.42-10.29-3.15-49.91 25.39 68.65 26.47-48.34 40.09 40.63 26.55-6.5-23.93 45.41-49zm13.73-82c4.898.003 9.76.82 14.39 2.42l41.79-21.22a184.67 184.67 0 0 0-35.66-3.51c-5.68 11-14.35 19-24.17 22.51 1.21-.09 2.43-.16 3.65-.16zm182 124.37h-4.15c-5.37 0-11.36-.21-17.77-.63l12.66 18 25-7.33s-1.13-4.55-2.74-11.23a82.78 82.78 0 0 1-13.04 1.23zm-138.97-46.37c13.84-22.89 46.76-66.73 96-66.73 16.79 0 35.49 5.1 56 17.86l-11 19.83.21 21.93c-.43 3.25 3.4 21 7.08 36.9-6.65 1.15-23 1-43.18-1l-5.68-8.1c-16.16-9.55-28.75-15.76-28.75-15.76s.91 7.77 1.22 19.23c-23.06-4.18-46.85-10.67-64.84-20.13a81.992 81.992 0 0 1-7.06-4.03zm120.1-18.38c0 4.678 5.655 7.02 8.963 3.712 3.306-3.307.964-8.962-3.714-8.962a5.25 5.25 0 0 0-5.25 5.25zm-132.64-47.42a44.15 44.15 0 0 1 9.43 12.91l223.21-123.4v-9.4zm76.17 154.12c5.64-14.72 7.68-32.58 8.2-48a325.89 325.89 0 0 1-49-12.25 151.31 151.31 0 0 1-30.12-13.81l13.78 96.66-129 17.14-10.39-87.05c-4.26 1.77-8.45 3.64-12.54 5.64-58.81 28.68-29.46 96.18-29.46 96.18l-25 49.21 30.11 54.35v18.81h33.9l-15.74-22.83-14.48-52.57 48.87-46.4c27.89 1.26 102.44-11.49 134.52-17l83 4.55 22.88 29.29-16.85 12.55 29.55 13.9 9.37-18.45-19.23-49.28zm-51.22-131.12l-11.31 5.72a44.08 44.08 0 0 1-.07 7.38c3.46-4.32 7.23-8.75 11.38-13.1zm31.69 231.92l-5-45.44-20.89-1.14c-6.2 1.06-13.11 2.22-20.44 3.43l21.46 47.74 17.68 54.56-.63 17h31.67l-9.65-17.83zm-140.38 19.45l36.79-53.82c-21.33 2.95-51.31 5.07-51.47 5.07l2.93 7.61-19.1 41.87 47 44.07v11.75h28.65l-11.35-12.92z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMountedKnightIcon);
    