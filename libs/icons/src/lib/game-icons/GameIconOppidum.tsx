import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconOppidumIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'oppidum'];
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
        d="M223 56c0 10.379 4.445 19.204 10.842 24.783 3.926 3.425 8.45 5.736 13.158 7.014V135h-14v-23h-18v39h-20v-21h-18v62.72c-19.19 7.082-37.964 17.092-56 30.208v-58.934h-18v73.291a282.668 282.668 0 0 0-10.457 9.586h-33.4l-38.565 34.414 11.985 13.43 26.902-24.008C114.487 355.396 241.709 480.047 313.02 482l173.49-2.098c-151.243-45.507-340.499-153.37-382.876-218.722 43.018-42.118 90.85-61.809 139.324-63.746 31.842 54.994 110.736 79.49 203.701 94.867 11.746 12.426 22.889 25.889 33.277 40.303l14.602-10.526c-28.985-40.215-63.67-73.656-101.539-98.053v-36.152h-18v25.367c-13.79-7.642-27.936-14.081-42.32-19.24H335v-64h-18v21h-20v-39h-18v23h-14V87.797c4.707-1.278 9.232-3.59 13.158-7.014C284.555 75.203 289 66.38 289 56h-18c0 5.621-1.899 8.796-4.674 11.217C263.551 69.637 259.536 71 256 71c-3.536 0-7.551-1.363-10.326-3.783C242.899 64.797 241 61.62 241 56zm10 97h46v28.068a224.497 224.497 0 0 0-30.518-1.648c-5.163.076-10.326.335-15.482.78zm-38 16h20v13.533a214.155 214.155 0 0 0-20 4.438zm102 0h20v19.902a253.061 253.061 0 0 0-13.809-3.588c-2.06-.472-4.124-.914-6.191-1.332zm-16.12 30.45c6.106.88 12.205 2.014 18.288 3.41 38.124 8.743 75.622 27.692 109.83 54.824-42.055-4.773-85.428-20.978-128.117-58.235z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconOppidumIcon })
);
