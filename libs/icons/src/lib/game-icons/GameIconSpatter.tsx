import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSpatterIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'spatter'];
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
        d="M459.938 10.875c-.954 2.58-1.75 5.278-1.75 8.188 0 7.222 3.2 13.725 8.28 18.125 11.444 5.7 19.313 17.496 19.313 31.156 0 19.234-15.576 34.812-34.81 34.812-16.684 0-30.623-11.716-34.033-27.375-4.37-4.915-10.713-8.03-17.812-8.03-13.194 0-23.906 10.713-23.906 23.906 0 2.994.556 5.828 1.56 8.47-1.026-.062-2.05-.095-3.092-.095-20.027 0-37.35 11.483-45.782 28.22 1.907-.54 3.92-.844 6-.844 12.13 0 21.97 9.84 21.97 21.97 0 12.127-9.84 21.968-21.97 21.968-2.818 0-5.524-.533-8-1.5 7.006 18.02 23.905 31.104 44.03 32.562l-.03.063c1.344-.113 2.657-.172 3.875-.19 30.974-.433 23.563 30.454-8.874 21.19-2.51-.316-5.062-.532-7.656-.532-9.55 0-18.585 2.19-26.656 6.062-6.61-13.626-17.11-21.54-32.97-26.375 2.403 15.323 7.194 28.766 15.438 39-.06.064-.125.124-.187.188 22.403 14.435 32.857 38.46 23.344 54.937-6.906 11.96-22.506 16.808-39.595 13.906-.346-.004-.683-.03-1.03-.03-12.755 0-24.907 2.6-35.94 7.312.02-.488.033-.977.033-1.47 0-19.79-16.054-35.812-35.844-35.812-19.79 0-35.813 16.023-35.813 35.813 0 18.14 13.48 33.125 30.97 35.5-9.478 14.42-15 31.67-15 50.217 0 11.81 2.24 23.104 6.313 33.47l.03.03c25.585 23.75-7.246 61.7-27.937 31.594-6.49-7-15.783-11.374-26.156-11.374-19.78 0-35.627 15.843-35.625 35.625 0 2.283.18 4.835.594 7h111.217c2-14.845 14.695-26.28 30.094-26.28 15.4 0 28.095 11.434 30.095 26.28H494.97V145.78c-11.097-.646-19.845-10.34-19.845-21.593 0-11.252 8.748-20.39 19.844-21V10.876h-35.033zm-347.47 19.5c-3.027 25.5 5.296 35.646 28.438 37.594 1.548-20.59-5.456-35.444-28.437-37.595zm221.72 7.53C321.565 38.546 311.5 49 311.5 61.782c0 13.195 10.712 23.876 23.906 23.876 13.194 0 23.875-10.68 23.875-23.875 0-13.193-10.68-23.874-23.874-23.874-.412 0-.81-.02-1.22 0zm-100.282 23.94c-28.587 0-51.75 23.163-51.75 51.75 0 11.126 3.494 21.434 9.47 29.874-13.722 5.023-23.5 18.194-23.5 33.655 0 19.79 16.02 35.844 35.81 35.844 15.428 0 28.575-9.764 33.626-23.44-15.703-3.324-27.5-17.25-27.5-33.936 0-19.16 15.558-34.688 34.72-34.688 14.49 0 26.903 8.884 32.093 21.5 5.536-8.234 8.78-18.14 8.78-28.812 0-28.587-23.162-51.75-51.75-51.75zm213.313 56.56c7.183 0 13 5.817 13 13 0 7.185-5.817 13-13 13-7.185 0-13-5.815-13-13 0-7.182 5.815-13 13-13zm-364.783 1.626c-13.193 0-23.906 10.714-23.906 23.907 0 13.194 10.714 23.875 23.907 23.875 13.194 0 23.876-10.68 23.876-23.875 0-13.194-10.682-23.906-23.876-23.906zm333.5 80.44c8.934 0 16.188 7.253 16.188 16.186s-7.254 16.188-16.188 16.188c-8.933 0-16.187-7.255-16.187-16.188s7.254-16.187 16.188-16.187zM86.5 272.687c-19.79 0-35.844 16.053-35.844 35.843 0 19.79 16.053 35.814 35.844 35.814 10.56 0 20.067-4.544 26.625-11.813 14.73 11.484 31.753 15.583 51.906 9.626-11.542-16.058-25.932-25.62-43.03-29 .197-1.52.313-3.05.313-4.625 0-19.79-16.022-35.842-35.813-35.842zm218.03 65.218c16.803 0 30.408 13.605 30.408 30.406 0 16.802-13.605 30.438-30.407 30.438-16.8 0-30.436-13.636-30.436-30.438 0-16.8 13.636-30.406 30.437-30.406zm-196.06 38.406c-13.195 0-23.907 10.713-23.907 23.907 0 13.192 10.712 23.874 23.906 23.874 13.193 0 23.874-10.682 23.874-23.875 0-13.195-10.68-23.908-23.875-23.908zm199.843 35.72c12.108.023 20.76 8.463 27.093 21.624-20.464 9.625-32.45 5.1-42.312-17.875 5.106-2.343 9.788-3.538 14.03-3.717.4-.017.798-.033 1.188-.032zM43.842 442c-9.476.04-18.192 5.768-26.187 15.063 17.743 14.988 30.828 13.703 46.72-6.47-7.22-5.983-14.048-8.62-20.532-8.593z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSpatterIcon })
);
