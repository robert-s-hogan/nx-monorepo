import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCarnivoreMouthIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'carnivore-mouth'];
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
        d="M35.344 47.063c3.72 50.664 10.165 99.533 100.28 92.656-2.466-81.82-50.998-87.873-100.28-92.657zm412.094 8.78l-4.188 84.938c66.643-15.697 37.995-78.956 4.188-84.936zM285.875 170.47c-.567-.002-1.14.013-1.72.06-1.54.13-3.135.45-4.75.907-12.91 3.67-26.198 18.925-24.5 39.125.694 8.22 11.438 30.375 22.44 48.094 4.454 7.176 8.508 13.076 12.186 18.47 2.647-6.54 5.605-13.978 8.69-22.688 3.656-10.332 7.185-21.38 9.467-31.125 2.283-9.746 3.055-18.44 2.438-22.188-2.44-14.78-7.734-22.812-13.063-26.813-3.497-2.625-7.216-3.837-11.187-3.843zm68.72 2.25c-3.975-.05-7.713 1.114-11.22 3.686-5.345 3.92-10.69 11.883-13.25 26.625-.65 3.734.05 12.412 2.25 22.19 2.2 9.776 5.617 20.9 9.188 31.28 3.017 8.774 5.967 16.262 8.562 22.844 3.72-5.338 7.776-11.18 12.28-18.28 11.138-17.554 22.068-39.538 22.845-47.752v-.062c1.868-20.184-11.325-35.658-24.22-39.5-1.61-.48-3.178-.79-4.717-.938-.578-.055-1.152-.086-1.72-.093zm75.686 18.75c-.54-.02-1.09-.005-1.624.03-1.424.094-2.836.37-4.22.844-5.527 1.89-11.996 7.37-17.436 20.625-1.08 2.63-2.367 13.09-2.156 25.343.21 12.252 1.36 26.844 2.812 40.75 1.258 12.043 2.666 22.74 3.938 31.937 4.414-5.49 8.972-11.096 14.28-18.063 14.252-18.7 29.51-41.82 32.095-50.03 5.855-18.6-3.784-38.863-16-47.157-4.01-2.72-7.91-4.156-11.69-4.28zm-219.436 3.31c-3.782.075-7.695 1.464-11.72 4.126-12.262 8.112-22.052 28.226-16.343 46.906 1.13 3.7 5.977 12.356 12.564 21.657 6.586 9.3 14.868 19.74 22.937 29.436 6.238 7.496 11.668 13.632 16.814 19.47.62-9.29 1.314-19.916 1.78-31.97.55-14.162.813-28.992.376-41.5-.437-12.508-2.057-23.222-3.28-26.28-5.332-13.334-11.754-18.905-17.282-20.876-1.383-.493-2.795-.793-4.22-.906-.533-.043-1.084-.073-1.624-.063zm-66.375 32.407c-2.453.017-5.087.63-7.94 1.875-11.406 4.987-22.748 20.613-20.686 37.188.77 6.195 10.784 23.992 21.062 37.813 3.69 4.96 6.898 8.8 10.063 12.687 2.096-5.953 4.4-12.534 6.78-20.28 2.916-9.493 5.668-19.585 7.375-28.345 1.703-8.74 2.02-16.468 1.47-19.125-.002-.006 0-.025 0-.03-2.577-12.177-7.183-17.677-11.345-20.032-2.083-1.18-4.33-1.767-6.78-1.75zm24.155 121.282c-3.992 2.06-7.825 3.972-12.53 6.655-14.032 8-29.33 19.6-32.157 24.344-7.848 13.17-3.97 30.466 3.812 38.78 3.89 4.157 7.944 5.888 12.25 5.438 4.306-.45 10.18-3.32 16.906-12.72v-.03c1.37-1.912 4.006-8.585 5.813-16.688 1.806-8.103 3.206-17.8 4.25-27 .805-7.108 1.236-13.094 1.655-18.78zm223.844 5.686c-.895 7.812-1.907 16.832-2.75 27.156-.983 12-1.712 24.705-1.72 35.625-.008 10.92.98 20.412 2.188 24.032 4.544 13.623 10.658 19.552 16.062 21.842 5.404 2.29 11.33 1.567 17.688-2.125 12.714-7.383 23.674-26.89 19.062-45.875l-.063-.218c-.91-3.428-5.07-10.897-11.156-18.75-6.19-7.99-14.148-16.756-21.967-24.78-6.416-6.585-12.142-12.018-17.344-16.908zm-163.97 17c-5.757 4.13-12.516 9.088-19.688 14.813-8.564 6.835-17.29 14.394-24.062 21.436-6.77 7.042-11.36 13.99-12.22 16.97-5.408 18.723 4.71 38.753 17.126 46.75 6.208 3.997 12.142 4.993 17.625 2.968 5.485-2.026 11.82-7.648 16.94-21.03 2.968-7.76 4.864-34.22 4.81-56.69-.02-9.613-.282-17.953-.53-25.218zm49.5 14.03c-3.595 5.436-7.53 11.398-11.875 18.627-10.72 17.833-21.096 40.096-21.656 48.312-1.385 20.22 12.17 35.375 25.155 38.906 6.492 1.767 12.315.985 17.563-3.06 5.247-4.048 10.42-12.138 12.625-26.94.56-3.742-.38-12.405-2.813-22.124-2.434-9.72-6.086-20.772-9.906-31.062-3.232-8.706-6.34-16.137-9.094-22.656zm62.28.845c-2.487 6.602-5.313 14.09-8.186 22.876-3.407 10.416-6.642 21.58-8.688 31.375-2.045 9.798-2.614 18.49-1.906 22.22 2.793 14.716 8.295 22.628 13.72 26.5 5.422 3.872 11.278 4.457 17.686 2.47 12.816-3.98 25.754-19.555 23.563-39.72-.89-8.187-12.166-30.082-23.595-47.53-4.625-7.063-8.786-12.887-12.594-18.19z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCarnivoreMouthIcon })
);
