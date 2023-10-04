import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconArtificialIntelligenceIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'artificial-intelligence'];
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
        d="M256.016 17.824C153.28 17.824 68 123.394 68 255.984c0 55.725 15.08 106.68 40.17 147.034 42.033 17.992 95.622 27.594 149.34 27.644 51.828.046 103.59-8.786 145.04-25.588C428.41 364.4 444 312.66 444 255.982c0-132.59-85.25-238.156-187.982-238.158h-.002zm1.746 18.7c80.525 0 145.63 65.072 145.63 145.6 0 80.526-65.105 145.63-145.63 145.63-80.53 0-145.6-65.104-145.6-145.63 0-80.53 65.07-145.6 145.6-145.6zm-27.69 40.02c-2.586 5.774-5.09 11.292-7.52 16.843-.543 1.243-1.193 1.538-2.622 1.636-5.436.377-10.875.927-16.25 1.8-1.77.29-2.69.21-3.723-1.294-3.335-4.866-6.823-9.626-10.352-14.565L167.268 97.3c3.778 5.304 7.298 10.362 10.962 15.315.976 1.318.846 2.18.102 3.567-1.747 3.258-3.268 6.647-4.7 10.058-.835 1.984-.724 4.898-2.126 5.967-1.56 1.19-4.355.774-6.615 1.035-4.747.548-9.5 1.08-14.443 1.64l2.727 27.526c6.937-.78 13.47-1.57 20.017-2.195 1.164-.11 2.92.056 3.503.8 3.262 4.16 6.248 8.535 9.602 13.22l-9.477 21.26 25.057 11.216c3.057-6.812 6.036-13.325 8.89-19.894.658-1.518 1.386-2.035 3.143-2.064 4.032-.066 8.11-.283 12.063-1.02 2.293-.426 3.46-.018 4.757 1.844 3.998 5.74 8.2 11.337 12.386 17.076l16.084-11.722 5.537 9.588-19.986 20.01-24.428-14.034-13.035 23.715c8.287 4.824 16.284 9.48 23.567 13.722-2.152 9.085-4.15 17.682-6.29 26.244-.156.616-1.35 1.37-2.072 1.383-6.587.105-13.18.063-19.77.063h-6.585v26.434c.67.318 1.345.628 2.02.935h26.087c.75 3.174 1.477 6.206 2.182 9.203C235.314 310.028 244.536 311 254 311c15.906 0 31.138-2.728 45.236-7.723-8.264-13.37-6.265-30.49 3.118-41.173 13.284-15.13 36.56-16.175 50.794-2.032 1.167 1.16 2.232 2.366 3.21 3.61C374.897 241.53 386 213.237 386 182.412c0-6.172-.454-12.24-1.314-18.18-.236-.12-.427-.22-.686-.35-.132-.068-.31-.047-.664-.09-4.587 7.96-9.21 15.986-13.56 23.54l-27.532-7.566v-27.21h-27.32v27.24c-9.023 2.44-17.696 4.787-26.645 7.206-4.342-7.55-8.898-15.472-13.47-23.426l-18.232 10.235c-1.31-1.825-2.425-3.512-3.685-5.087-.825-1.03-.648-1.725-.028-2.86 2.178-3.98 4.357-7.992 6.06-12.185.805-1.988 1.693-2.632 3.73-2.81 6.453-.557 12.885-1.36 19.616-2.102-.92-9.32-1.82-18.397-2.72-27.522-6.795.652-13.1 1.22-19.396 1.89-1.49.157-2.1-.388-2.888-1.66-2.787-4.495-5.686-8.944-8.89-13.144-1.16-1.518-1.426-2.46-.63-4.148 2.537-5.387 4.9-10.854 7.393-16.438-8.45-3.774-16.663-7.445-25.068-11.2zm-13.455 42.845c12.335.102 22.195 10.073 22.092 22.337-.105 12.433-10.133 22.24-22.595 22.093-12.426-.145-22.047-10.12-21.908-22.72.134-12.086 10.174-21.814 22.41-21.71zm-45.183 214.63c18.315 0 33.066 14.8 33.066 33.41 0 18.608-14.75 33.437-33.064 33.437-18.315 0-33.036-14.83-33.036-33.437 0-18.61 14.72-33.41 33.034-33.41zm165.334.732a33 33 0 0 1 33 33 33 33 0 0 1-33 33 33 33 0 0 1-33-33 33 33 0 0 1 33-33zm-208.372 96.002v.006c.003 0 .005 0 .008.002l-.008-.008zm.008.008c11.484 13.443 24.29 25.074 38.108 34.586l-7.076-26.303c-10.648-2.343-21.013-5.113-31.032-8.283zm253.89 1.52c-8.87 2.67-17.994 5.016-27.33 7.046l-6.42 23.903c12.14-8.723 23.46-19.12 33.75-30.943v-.004zM179.82 443V443l9.565 35.686c11.31 5.452 23.12 9.55 35.31 12.156l-5.048-43.006c-13.472-1.002-26.797-2.645-39.828-4.838zm154.793.252c-10.124 1.667-20.447 2.983-30.85 3.96l-4.802 40.702c9.11-2.72 17.96-6.292 26.522-10.63l9.133-34.028v-.002l-.002-.002zm-49.77 5.297l-.005.03h.006l-.002-.03zm-.005.03c-9.08.502-18.206.753-27.324.753-6.344-.005-12.686-.126-19.012-.377l5.297 44.72c4.04.377 8.112.503 12.216.503 8.003 0 15.89-.626 23.652-1.905l5.17-43.692z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconArtificialIntelligenceIcon })
);
