import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconD12Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'd12'];
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
        d="M450.169 181.354L379.685 84.29 265.629 47.325v92.652l96.384 70.031zm-91.46-28.416a19.735 19.735 0 0 1-3.004 6.606 16.563 16.563 0 0 1-11.924 6.857q-7.548.918-15.729-5.056-8.18-5.974-9.599-13.439a16.563 16.563 0 0 1 2.922-13.414 19.747 19.747 0 0 1 5.378-4.866q3.422-2.206 9.026-1.574a18.757 18.757 0 0 1-1.717-10.421 21.082 21.082 0 0 1 4.03-9.802 19.246 19.246 0 0 1 13.666-7.99q8.633-1.108 17.779 5.57 9.146 6.677 10.326 14.952a20.033 20.033 0 0 1-3.827 15.204 20.772 20.772 0 0 1-8.145 6.797 16.312 16.312 0 0 1-10.17 1.192q2.038 5.461.989 9.384zm-10.731-8.287a8.252 8.252 0 0 1-1.717 6.189 8.907 8.907 0 0 1-15.669-3.685 8.562 8.562 0 0 1 1.908-6.367 8.347 8.347 0 0 1 5.33-3.578 8.252 8.252 0 0 1 6.451 1.825 8.347 8.347 0 0 1 3.757 5.628zm9.54-11.77a10.732 10.732 0 0 1-11.472-8.346q-.548-3.709 2.504-7.894a10.851 10.851 0 0 1 6.654-4.77 10.732 10.732 0 0 1 11.543 8.43 10.851 10.851 0 0 1-2.469 7.775q-2.945 4.198-6.653 4.806zm-110.968 7.096V47.325L132.494 84.29 62.01 181.354l88.156 28.618zm-112.66-21.798l37.895-26.52a31.73 31.73 0 0 1 5.056 12.664q1.55 7.155-2.79 19.413a98.304 98.304 0 0 0-4.341 14.524 13.904 13.904 0 0 0 2.158 10.314 10.732 10.732 0 0 0 6.034 4.472 8.347 8.347 0 0 0 7.154-1.574q4.961-3.47 4.162-8.43a22.418 22.418 0 0 0-3.577-7.644l10.577-7.393q4.674 7.25 5.425 13.2 1.443 11.328-9.682 19.079-8.789 6.153-17.386 4.913-8.597-1.24-14.214-9.242a21.237 21.237 0 0 1-3.97-13.486 44.513 44.513 0 0 1 3.112-12.568l2.194-6.141q2.063-5.76 2.659-8.12a15.025 15.025 0 0 0 .43-4.77l-24.16 16.908zm64.7 215.412h114.998l35.51-109.37-93.009-67.598-93.009 67.599zm89.266-95.072a8.347 8.347 0 0 0-6.797-2.838q-6.058 0-8.24 4.52a22.382 22.382 0 0 0-1.49 8.346h-12.855q.322-8.62 3.124-13.927 5.319-10.112 18.889-10.112 10.731 0 17.063 5.962 6.332 5.962 6.237 15.633a21.25 21.25 0 0 1-4.484 13.32 44.585 44.585 0 0 1-9.659 8.62l-5.318 3.769q-4.996 3.577-6.832 5.127a15 15 0 0 0-3.1 3.685h29.488v11.685h-46.207a31.73 31.73 0 0 1 3.125-13.271q2.838-6.75 13.414-14.31a98.602 98.602 0 0 0 11.925-9.408 13.916 13.916 0 0 0 4.15-9.682 10.732 10.732 0 0 0-2.433-7.13zm-79.607-1.812a58.536 58.536 0 0 0 8.776-.835 12.377 12.377 0 0 0 6.511-3.577 11.686 11.686 0 0 0 2.6-4.842 11.125 11.125 0 0 0 .512-2.707h11.09v67.54h-13.606v-46.553H208.25v-9.038zM196.468 352.67l-54.434 75.04 114.055 36.965 114.056-36.965-54.434-75.04H196.468zm77.27 83.792q-5.64 7.226-17.517 7.214-12.76 0-18.817-10.672-4.71-8.347-4.71-21.464a97.78 97.78 0 0 1 .656-12.58 38.444 38.444 0 0 1 4.52-14.309 23.121 23.121 0 0 1 7.571-7.87 20.414 20.414 0 0 1 11.197-2.981q9.408 0 15 4.77a18.328 18.328 0 0 1 6.285 12.83h-13.165a6.773 6.773 0 0 0-1.252-3.577 7.286 7.286 0 0 0-6.475-3.172q-6.474 0-9.217 7.262a45.062 45.062 0 0 0-2.051 11.829 14.905 14.905 0 0 1 5.724-4.281 20.975 20.975 0 0 1 22.19 4.77 21.833 21.833 0 0 1 5.748 15.609 26.34 26.34 0 0 1-5.64 16.61zm-10.732-24.612q2.885 3.148 2.885 9.063a13.868 13.868 0 0 1-2.54 8.645 8.275 8.275 0 0 1-6.963 3.327 9.36 9.36 0 0 1-7.453-3.446 13.248 13.248 0 0 1-2.862-8.884q0-6.75 3.911-9.778a9.456 9.456 0 0 1 5.962-2.05 9.241 9.241 0 0 1 7.131 3.111zm119.147-112.195l27.879 8.347-4.77 16.157zm-14.31-71.546l-36.81 113.28 54.483 74.993L456 319.366V199.503zm66.073 86.952l-13.927-4.162-7.656 25.614-11.113-3.315-32.196-35.523 4.27-14.309 40.434 12.08 2.183-7.322 9.956 2.97-2.182 7.32 13.928 4.162zm-289.76-86.952L56 199.491v119.934l70.484 97.016 54.482-74.992zM72.54 286.24l44.43-14-4.77-15.143 8.621-2.719a58.536 58.536 0 0 0 3.435 8.12 12.377 12.377 0 0 0 5.33 5.14 11.686 11.686 0 0 0 5.401 1.026 11.137 11.137 0 0 0 2.731-.322l3.327 10.576-64.391 20.272zm18.47 58.596l-4.09-12.974 44.43-13.999-4.77-15.144 8.622-2.718a58.68 58.68 0 0 0 3.434 8.12 12.365 12.365 0 0 0 5.33 5.14 11.65 11.65 0 0 0 5.402 1.025 11.102 11.102 0 0 0 2.73-.322l3.328 10.577z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconD12Icon })
);
