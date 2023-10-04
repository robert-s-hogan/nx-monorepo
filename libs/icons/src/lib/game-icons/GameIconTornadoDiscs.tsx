import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTornadoDiscsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'tornado-discs'];
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
        d="M370.203 25.574c-51.962-.07-134.69 39.665-212.467 106.908-105.35 91.08-162.303 197.81-127.316 238.28 18.474 21.37 58.867 19.968 108.39.476-5.416 19.54-4.192 35.717 4.91 46.244 16.727 19.35 56.123 14.81 103.09-7.556-4.062 14.072-3.303 25.733 3.198 33.252 12.79 14.793 44.6 9.873 81.523-9.772-3.955 10.502-4.084 19.25.517 24.57 9.158 10.593 34.315 4.552 61.724-13.066-3.608 6.83-4.456 12.655-1.686 15.86 5.57 6.443 23.665-.123 40.443-14.627 16.777-14.505 25.892-31.46 20.32-37.903-2.694-3.117-8.353-3.187-15.36-.81 22.21-25.036 32.348-49.734 23.025-60.518-4.444-5.14-12.68-6.387-23.117-4.307 25.718-34.37 35.86-66.023 22.863-81.056-4.827-5.583-12.086-8.512-21.61-8.763l-.002.002c-3.783-.1-7.884.213-12.244.896 26.956-41.706 36.07-78.49 19.84-97.26-8.66-10.017-23.86-14.06-42.633-12.264h-.005c-1.556.15-3.148.35-4.757.574 24.82-44.517 31.488-82.575 13.52-103.36-8.747-10.115-22.45-15.314-39.714-15.77-.81-.02-1.626-.03-2.45-.032zm-3.017 47.79c12.217-.03 21.736 3.206 27.664 10.062 10.874 12.578 7.59 35.378-6.362 63.21-40.125 8.965-93.027 38.37-143.734 82.208-49.904 43.143-86.16 90.686-101.318 128.795-28.996 9.584-51.49 9.75-62.206-2.648-25.29-29.25 24.273-114.272 110.963-189.22 66.373-57.383 135.082-92.315 174.993-92.41zm43.197 108.407c9.635-.037 17.15 2.515 21.844 7.945 10.515 12.163 4.622 36.545-13.237 65.44-27.833 6.597-64.24 26.655-98.9 56.618-34.575 29.89-59.638 62.81-70.215 89.278-31.05 13.373-55.99 15.67-66.44 3.583-20.032-23.168 20.108-90.146 88.77-149.508 52.57-45.45 106.7-73.227 138.178-73.354zm26.625 97.623c6.084.2 10.85 1.986 13.902 5.517 8.93 10.33.774 33.067-18.707 58.95-16.546 4.677-37.42 16.553-57.36 33.792-18.927 16.364-33.19 34.254-40.593 49.453-26.45 13.488-48.37 17.056-56.793 7.315-13.955-16.14 14.07-62.597 61.906-103.955 37.373-32.31 75.916-51.793 97.645-51.072zm9.22 78.34c3.72.125 6.636 1.214 8.5 3.37 6.783 7.846-2.435 27.462-21.222 47.876-6.588 2.883-14.007 7.602-21.178 13.8-6.634 5.737-12.03 11.86-15.82 17.577-21.725 14.166-41.042 19.656-47.522 12.163-8.516-9.85 8.352-38.398 37.54-63.633 22.802-19.715 46.405-31.595 59.7-31.153zm-.138 55.626c1.76.058 3.14.572 4.02 1.59 4.03 4.66-3.86 18.084-17.665 30.02-13.805 11.937-28.32 17.88-32.347 13.22-4.028-4.66 3.95-18.162 17.756-30.096 10.785-9.324 21.947-14.944 28.236-14.735z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTornadoDiscsIcon })
);
