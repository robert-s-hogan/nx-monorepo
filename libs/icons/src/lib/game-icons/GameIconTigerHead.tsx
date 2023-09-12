
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTigerHeadIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'tiger-head'];
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
        <path fill="currentColor" d="M425.479 25.666c.695.03 1.233.235 1.6.637 28.156 30.856 23.75 58.537 18.36 87.437-2.37 4.836-4.483 8.801-6.79 12.07-5.074 7.188-11.345 12.477-26.674 20.141l8.05 16.098c16.671-8.336 26.4-16.047 33.327-25.86a76.374 76.374 0 0 0 1.99-2.98c23.481 29.638 37.639 65.615 40.162 105.69-10.473-11.076-20.322-14.383-32.865-16.864-3.655-17.373-11.07-34.942-23.44-51.433l-14.398 10.796c22.344 29.793 25.952 62.948 20.375 90.836-5.578 27.889-21.494 49.864-33.201 55.717-17.61 8.805-30.338 21.686-40.338 31.686-5 5-9.353 9.287-12.854 11.965-.175.133-.333.24-.502.365-.852-4.857-2.097-9.886-3.67-15.076-5.313-17.534-14.622-37.068-26.894-57.522l-15.434 9.262c11.728 19.546 20.419 38.012 25.106 53.478 4.687 15.467 4.988 27.718 2.256 34.55-2.733 6.83-7.22 10.423-19.944 10.847-11.082.37-27.763-2.992-49.941-11.604C317.866 378.86 305.89 348.962 304 320c-16 32-32 32-48 32s-32 0-48-32c-1.89 28.962-13.866 58.859 34.24 75.902-22.178 8.612-38.86 11.973-49.941 11.604-12.724-.424-17.211-4.017-19.944-10.848-2.732-6.83-2.43-19.082 2.256-34.549 4.687-15.466 13.378-33.932 25.106-53.478l-15.434-9.262c-12.272 20.454-21.581 39.988-26.894 57.522-1.573 5.19-2.818 10.22-3.67 15.076-.169-.124-.327-.232-.502-.365-3.501-2.678-7.854-6.965-12.854-11.965-10-10-22.728-22.88-40.338-31.686-11.707-5.853-27.623-27.828-33.2-55.717-5.578-27.888-1.97-61.043 20.374-90.836l-14.398-10.796c-12.37 16.491-19.785 34.06-23.44 51.433-12.543 2.48-22.392 5.788-32.865 16.863 2.523-40.074 16.68-76.05 40.162-105.689a76.374 76.374 0 0 0 1.99 2.98c6.927 9.813 16.656 17.524 33.327 25.86l8.05-16.098c-15.329-7.664-21.6-12.953-26.673-20.14-2.308-3.27-4.42-7.235-6.791-12.07-5.39-28.9-9.796-56.582 18.36-87.438.367-.402.905-.607 1.6-.637 9.097-.394 45.217 28.95 79.051 35.594 19.651-6.115 40.847-10.22 63.332-12.094l4.448 15.568c-13.92 1.875-28.343 5.444-44.198 10.729l5.692 17.074c16.147-5.382 30.123-8.91 43.425-10.584l4.463 15.62c-6.012.517-11.858 1.388-17.295 2.667-9.38 2.207-17.681 5.276-23.802 11.397l12.726 12.726c1.88-1.879 7.578-4.81 15.198-6.603 5.387-1.268 11.681-2.114 18.226-2.506L256 144l8.213-28.746c6.545.392 12.839 1.238 18.226 2.506 7.62 1.793 13.319 4.724 15.198 6.603l12.726-12.726c-6.12-6.121-14.422-9.19-23.802-11.397-5.437-1.279-11.283-2.15-17.295-2.668l4.463-15.619c13.302 1.673 27.278 5.202 43.425 10.584l5.692-17.074c-15.855-5.285-30.278-8.854-44.198-10.729l4.448-15.568c22.485 1.873 43.68 5.98 63.332 12.094 33.834-6.643 69.954-35.988 79.05-35.594zm-92.82 109.979c-40 16-59.059 23.357-76.659 23.357-17.6 0-36.658-7.357-76.658-23.357l-6.684 16.71c40 16 60.942 24.643 83.342 24.643s43.342-8.643 83.342-24.643zm43.292 4.33c-14.39 28.78-43.976 43.976-75.976 59.976l7.588 15.172c-4.818 6.521-8.924 14.296-11.934 23.482 0 0-7.629 33.395-8.506 47.916l17.754 2.958C304 272 304 256 312.527 244.664c5.173 7.024 13.406 11.635 22.694 11.635 15.685 0 28.367-13.15 28.367-28.863 0-9.105-4.264-17.342-10.897-22.666 12.317-3.675 24.332-3.772 31.309-3.772v-17.996c-4.717 0-12.708-.032-22.129 1.363 12.116-9.681 22.675-21.335 30.178-36.34zm-239.902 0l-16.098 8.05c7.503 15.005 18.062 26.659 30.178 36.34-9.421-1.395-17.412-1.363-22.129-1.363v17.996c6.977 0 18.992.097 31.309 3.772-6.633 5.324-10.897 13.561-10.897 22.666 0 15.712 12.682 28.863 28.367 28.863 9.288 0 17.521-4.611 22.694-11.635C208 256 208 272 207.123 289.48l17.754-2.958c-.877-14.521-8.506-47.916-8.506-47.916-3.01-9.186-7.116-16.96-11.934-23.482l7.588-15.172c-32-16-61.586-31.196-75.976-59.976zm272.488 49.18l-17.074 5.69c3.336 10.009 2.55 18.53-.664 27.313-3.214 8.784-9.13 17.608-15.903 26.317-6.773 8.708-14.338 17.246-20.529 26.129-6.19 8.882-11.365 18.396-11.365 29.396h17.996c0-5 2.826-11.486 8.135-19.104 5.309-7.617 12.744-16.08 19.97-25.37 7.227-9.292 14.312-19.468 18.598-31.184 4.287-11.716 5.5-25.196.836-39.188zm-305.074 0c-4.664 13.991-3.45 27.47.836 39.187 4.286 11.716 11.37 21.892 18.597 31.183 7.227 9.292 14.662 17.754 19.971 25.371 5.31 7.618 8.135 14.104 8.135 19.104h17.996c0-11-5.174-20.514-11.365-29.396-6.191-8.883-13.756-17.42-20.53-26.13-6.773-8.708-12.688-17.532-15.902-26.316-3.213-8.784-4-17.304-.664-27.312zm231.758 27.413c5.708 0 10.369 4.638 10.369 10.868 0 6.229-4.66 10.865-10.37 10.865-5.708 0-10.368-4.636-10.368-10.865 0-6.23 4.66-10.868 10.369-10.868zm-158.442 0c5.709 0 10.37 4.638 10.37 10.868 0 6.229-4.661 10.865-10.37 10.865-5.708 0-10.369-4.636-10.369-10.865 0-6.23 4.66-10.868 10.37-10.868zm287.065 12.034C499.508 289.222 495.39 352.61 480 368c-9.787-15.381-20.124-27.816-32-32 9.426 36.059 0 64-16 80 0-16-3.432-23.686-16-32 3.293 39.931-18.232 56.793-32 64-6.028-11.65-17.48-24.433-33.275-35.494a31.768 31.768 0 0 0 5.63-9.164c1.46-3.648 2.367-7.5 2.829-11.526 3.896-1.288 7.36-3.491 10.533-5.918 4.999-3.822 9.646-8.535 14.646-13.535 10-10 21.272-21.12 35.662-28.314 20.293-10.147 36.377-36.172 42.8-68.283 2.935-14.677 3.599-30.76 1.019-47.164zm-415.688 0c-2.58 16.403-1.916 32.487 1.02 47.164 6.422 32.111 22.506 58.136 42.799 68.283 14.39 7.195 25.662 18.314 35.662 28.314 5 5 9.647 9.713 14.646 13.535 3.173 2.427 6.637 4.63 10.533 5.918.462 4.027 1.37 7.878 2.829 11.526a31.768 31.768 0 0 0 5.63 9.164C145.48 423.566 134.028 436.35 128 448c-13.768-7.207-35.293-24.069-32-64-12.568 8.314-16 16-16 32-16-16-25.426-43.941-16-80-11.876 4.184-22.213 16.619-32 32-15.39-15.39-19.508-78.778 16.156-139.398zM424.998 256h-17.996c0 11.5-10.11 26.464-21.834 40.143-5.862 6.839-11.89 13.345-16.754 19.56-4.864 6.215-9.412 11.798-9.412 20.297h17.996c0 .5 1.452-3.918 5.588-9.203 4.136-5.285 10.108-11.779 16.246-18.94 12.276-14.321 26.166-31.358 26.166-51.857zm-320 0H87.002c0 20.5 13.89 37.536 26.166 51.857 6.138 7.161 12.11 13.655 16.246 18.94 4.136 5.285 5.588 9.702 5.588 9.203h17.996c0-8.5-4.548-14.082-9.412-20.297-4.864-6.215-10.892-12.721-16.754-19.56-11.724-13.679-21.834-28.642-21.834-40.143zm201.725 168.805c4.823.6 9.34.83 13.576.69a53.604 53.604 0 0 0 5.383-.466c-2.526 8.899-6.629 17.366-12.768 24.733C301.151 463.877 282 472.998 256 472.998s-45.151-9.12-56.914-23.236c-6.14-7.367-10.242-15.834-12.768-24.733 1.752.236 3.54.404 5.383.465 4.236.141 8.753-.088 13.576-.69 1.86 4.965 4.373 9.518 7.637 13.434 8.237 9.885 21.086 16.764 43.086 16.764s34.849-6.88 43.086-16.764c3.264-3.916 5.776-8.47 7.637-13.433z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTigerHeadIcon);
    