import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSlimeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'slime'];
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
      <path
        fill="currentColor"
        d="M269.614 30.044c-41.094.11-65.414 10.652-81.03 26.75-16.656 17.17-24.139 42.145-28.03 71.115-3.893 28.97-4.132 61.396-7.866 92.127-3.734 30.73-10.966 60.248-30.557 82.406-15.817 17.892-42.361 25.805-62.95 35.092-10.296 4.643-19.02 9.523-23.905 14.351-4.885 4.829-6.475 8.28-4.984 15.149 1.096 5.052 1.608 4.95 5.66 5.863.26.059.576.099.865.147.557 5.33.8 11.75-.547 15.793-2.607 7.825-15.762 11.07-15.469 19.314.375 10.517 11.005 24.543 21.44 23.178 9.19-1.203 13.373-15.322 12.992-24.582-.206-4.997-6.993-7.761-8.076-12.643-1.234-5.558.271-14.423 1.748-20.937 2.398-.154 4.955-.365 7.662-.627 17.928-1.738 42.524-4.773 62.908 10.922l.188.144.18.154c8.02 6.876 11.601 15.838 13.708 23.77 2.107 7.931 3.122 15.205 5.084 20.517 1.963 5.313 4.028 8.479 9.606 11.131 5.527 2.63 15.524 4.371 32.275 2.875 6.943-1.197 23.278-9.063 40.928-16.4 17.776-7.39 37.824-14.455 57.451-11.662 22.195 3.158 36.671 21.628 50.092 35.969 6.71 7.17 13.151 13.532 19.105 17.296 5.955 3.765 10.752 5.103 16.756 3.752 3.784-.85 6.019-2.717 8.604-6.716 2.585-4 4.872-10.023 7.088-16.815 4.43-13.584 8.153-30.887 22.523-41.054 15.43-10.919 35.04-9.373 51.36-9.366 2.497.001 4.914-.024 7.236-.088 1.676 6.563 3.632 16.245 2.43 22.186-1.07 5.28-8.3 8.397-8.44 13.781-.322 12.39 5.349 32.649 17.742 32.672 12.318.023 18.463-20.109 17.758-32.406-.326-5.692-7.844-8.637-9.877-13.963-2.372-6.216-3.17-17.085-3.437-24.25 3.643-1.11 5.647-2.575 6.986-4.809 1.073-1.79 1.352-3.25.978-5.77-.373-2.519-1.69-5.98-4.097-9.984-4.815-8.008-13.776-17.92-24.324-28.353-21.097-20.867-48.347-43.68-62.825-67.358-4.863-7.952-8.993-16.588-12.576-25.705-7.318-.474-14.554-.62-21.726-.51-.277 9.449-.298 27.428 3.062 37.31 3.313 9.743 17.026 11.318 17.207 25.634.193 15.237-6.193 39.866-21.422 40.383-15.972.541-25.213-24.753-25.283-40.735-.06-13.684 12.29-14.826 14.397-23.879 1.635-7.029.603-17.906-.751-26.676-1.116-5.49-5.266-11.503-12.227-10.64-33.643 3.153-66.13 10.934-98.915 17.518 3.746-21.205 11.727-47.904 35.3-65.721a73.974 73.974 0 0 1 4.52-3.154c-.304 5.65-.976 11.957-2.492 16.06-1.742 4.717-9.088 7.325-8.68 12.336.611 7.504 8.295 16.512 15.815 16.13 8.506-.434 16.796-11.492 15.943-19.966-.404-4.016-7.606-4.097-9.29-7.765-2.548-5.546-1.784-15.554-.835-22.373 21.352-9.2 44.721-6.84 64.479.29 8.004 2.89 13.774 7.568 18.152 13.231-4.283-18.421-7.608-37.494-11.049-56.047-4.684 11.104-23.122 12.455-42.303 4.672 15.512-9.746 25.996-23.802 35.4-38.783-5.935-25.782-13.52-48.61-24.792-64.387-11.33-15.859-25.448-25.085-48.428-25.775a258.397 258.397 0 0 0-8.445-.12zm-41.33 90.005c.635-.009 1.278.256 1.91.832 17.36 15.839 31.196 35.58 54.338 41.11-10.236 9.53-31.876 14.4-57.028 1.125-10.858-17.297-5.365-42.982.78-43.067zm41.023 318.409c-16.932.1-38.307 8.538-36.385 22.369 3.127 22.496 55.236 28.997 67.424 9.832 6.62-10.41-8.522-27.451-20.367-30.903-3.094-.901-6.764-1.321-10.672-1.298z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSlimeIcon })
);
