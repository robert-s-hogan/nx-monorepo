import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWingedSwordIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'winged-sword'];
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
        d="M246.78 18.656v101.22c7.988.266 16.003.267 24 0V18.655h-24zm-72.155 110.406v30.813h168.313v-30.813c-55.755 12.73-113.104 12.604-168.313 0zm-150.28 35.063l9.343 37.594 132.187 8.093 9.406.562-.655 9.406c-2.594 38.077 5.257 78.673 25.563 112.44l7.625-146.47-183.47-21.625zm463.186 0l-177.842 20.97 7.187 137.843c16.457-31.775 22.736-68.503 20.375-103.157l-.625-9.405 9.375-.563 132.188-8.093 9.343-37.595zm-260.624 14.438L216.25 383.188v44.187l44.375 66.53 43.03-65.342-13-250h-22.53V429.5h-18.688V178.562h-22.53zM38.186 220.72c3.52 11.234 8.043 23.026 13.345 34.936l104.5-8.562c-.358-6.42-.452-12.835-.28-19.188L38.187 220.72zm435.502 0l-117.563 7.186c.172 6.353.077 12.768-.28 19.188l104.5 8.562c5.3-11.91 9.825-23.702 13.342-34.937zm-315.844 45l-97.72 8c5.446 10.777 11.426 21.472 17.782 31.81l84.063-18.28c-1.735-7.117-3.12-14.322-4.126-21.53zm196.187 0c-1.003 7.207-2.36 14.414-4.092 21.53l84.03 18.28c6.357-10.338 12.338-21.033 17.782-31.81l-97.72-8zM167.19 305.25L88.75 322.313c6.694 9.8 13.67 19.05 20.75 27.468l64.938-26.342c-2.725-5.955-5.143-12.023-7.25-18.188zm177.5 0c-2.107 6.166-4.527 12.232-7.25 18.188l64.937 26.343c7.08-8.415 14.056-17.666 20.75-27.467l-78.438-17.063z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWingedSwordIcon })
);
