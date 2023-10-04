import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWolfTrapIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'wolf-trap'];
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
        d="M106 113.773l-32.963 74.375c-1.058.223-2.103.455-3.12.704-5.293 1.296-9.95 2.918-14.044 4.79l-8.266-53.435-25.037 87.277c-1.296 3.723-2.424 7.607-3.338 11.635l-.26.905.07-.04c-3.632 16.665-3.56 35.726 3.597 55.818 3.306 14.022 15.515 30.355 40.24 48.135 29.193 20.992 75.05 42.954 138.495 63.86-.253-1.795-.393-3.625-.393-5.486 0-12.21 5.637-23.185 14.432-30.447l-4.07-42.73-31.54 37.69c-9.764-3.686-19.047-7.46-27.896-11.3l-2.95-78.177-33.57 60.615c-9.068-4.85-17.496-9.773-25.294-14.75l-4.627-90.04-28.932 65.057c-7.485-6.607-13.957-13.243-19.45-19.86-4.244-20.016-.412-38.063 6.145-52.42l4.483-2.602c15.852-5.496 35.514-7.645 58.504-6.182 32.732 2.084 72.51 11.748 118.152 30.803.098-13.092 7.704-24.51 18.692-30.142l-5.597-52.59-30.14 42.78c-9.68-3.6-19.025-6.73-28.012-9.41l-4.26-68.73-32.567 59.774c-11.784-2.163-22.712-3.436-32.716-3.91l-3.77-71.97zm323.08 29.936l-15.973 70.28c-9.928-1.244-20.884-1.876-32.837-1.777l-19.58-66.443-18.075 68.964c-9.342 1.12-19.127 2.635-29.316 4.55l-19.015-44.84-16.422 45.742c8.9 6.183 14.768 16.47 14.768 28.04 0 2.407-.257 4.758-.74 7.03 47.224-10.57 87.28-13.166 119.37-9.7 22.9 2.47 41.908 7.938 56.592 16.05l3.978 3.332c4.016 15.265 4.72 33.704-2.873 52.707-6.54 5.582-14.047 11.016-22.547 16.25l-17.43-69.034-19.89 87.94c-8.51 3.565-17.626 6.972-27.356 10.198l-19.724-61.576-19.274 72.674c-9.347 2.27-19.107 4.404-29.326 6.37l-22.605-45.43-14.87 49.995c2.57 5.23 4.02 11.097 4.02 17.283 0 5.728-1.25 11.18-3.476 16.107 70.416-9.85 122.176-24.18 155.893-40.565 27.394-13.31 42.205-27.326 47.852-40.582 10.472-18.58 13.79-37.348 13.048-54.388l.063.053-.102-.942c-.214-4.126-.664-8.146-1.308-12.035l-9.81-90.26-17.243 51.245c-3.714-2.54-8.03-4.93-13.023-7.11-.96-.417-1.95-.822-2.954-1.222L429.08 143.71zm-170.584 89.07c-8.642 0-15.443 6.802-15.443 15.445 0 3.53 1.15 6.74 3.084 9.318 3.42.025 6.915.164 10.468.422 4.313.313 8.527.796 12.633 1.422 2.91-2.793 4.705-6.733 4.705-11.162 0-8.64-6.806-15.446-15.447-15.446zm-12.652 43.468c-1.02-.003-2.032.005-3.033.025-12.016.244-22.59 2.134-30.23 4.98-5.094 1.9-8.82 4.23-10.85 6.22-2.03 1.99-2.375 3.155-2.375 4.37 0 2.426 3.81 8.437 14.258 13.844 10.448 5.408 25.905 9.714 42.992 10.954 17.088 1.24 32.486-.854 42.674-4.65 5.093-1.898 8.82-4.23 10.85-6.22 2.03-1.987 2.374-3.154 2.374-4.368 0-2.43-3.81-8.44-14.258-13.847-10.447-5.408-25.904-9.712-42.992-10.95-3.204-.234-6.348-.348-9.41-.357zm-5.688 57.215l-2.96 29.51c1.08-.09 2.17-.15 3.273-.15 5.382 0 10.524 1.1 15.214 3.077l3.05-30.406c-1.153-.06-2.313-.13-3.48-.215-5.18-.376-10.223-.992-15.098-1.817zm.313 48.05c-11.6 0-20.798 9.2-20.798 20.8 0 11.595 9.2 20.796 20.797 20.796 11.594 0 20.798-9.203 20.798-20.798 0-11.595-9.202-20.798-20.8-20.798z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWolfTrapIcon })
);
