import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCardPickupIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'card-pickup'];
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
        d="M272.824 24.318c-14.929.312-25.66 3.246-32.767 8.446L142.899 84.91l-54.106 73.514C77.42 175.98 85.518 210 121.112 188.197l38.9-51.351c49.476-42.711 150.484-23.032 102.586 62.591-23.53 49.582-12.457 73.79 17.76 83.95l13.812-46.381c23.95-53.825 68.502-63.51 66.684-106.905l107.303 7.725-.866-112.045zm-54.09 103.338c-17.41-.3-34.485 6.898-46.92 17.375l-39.044 51.33c10.713 8.506 21.413 3.959 32.125-6.363 12.626 6.394 22.365-3.522 30.365-23.297 3.317-13.489 8.21-23.037 23.475-39.045zm-32.617 88.324a13.49 13.49 0 0 0-5.232 1.235l-129.164 59.51c-6.784 3.13-9.763 11.202-6.633 17.992l85.27 185.08c3.132 6.783 11.205 9.779 18 6.635l129.15-59.504c6.796-3.137 9.777-11.198 6.647-18L198.87 223.86c-2.343-5.097-7.473-8.043-12.754-7.88zm-29.767 50.06c7.794.113 14.913 2.053 21.092 5.847 10.758 6.604 18.63 20.93 19.644 35.754.698 10.184-1.712 17.837-12.553 39.873-3.879 7.885-5.634 15.27-5.072 21.355.46 4.973.786 5.855 3.639 9.844l3.135 4.38-1.754.98c-.965.538-7.097 3.1-13.627 5.693-6.918 2.746-12.316 4.496-12.934 4.193-.583-.286-2.352-2.62-3.931-5.188-7.525-12.227-7.225-27.53.878-44.627 6.655-14.04 8.47-19.966 7.952-25.974-.815-9.44-6.743-16.478-14.834-17.617-6.021-.848-10.668.553-18.912 5.703-8.298 5.183-13.941 10.708-19.055 18.656-1.8 2.797-3.407 5.053-3.57 5.014-.164-.04-3.206-7.256-6.758-16.037l-6.46-15.967 3.23-3.666c5.809-6.598 11.758-11.166 22.226-17.065 13.44-7.573 26.273-11.314 37.664-11.15zm33.308 133.048c6.463.125 12.18 3.215 15.7 8.963 4.296 7.015 4.185 13.838-.334 20.752-2.89 4.42-8.953 8.313-15.04 9.654-15.132 3.335-28.038-9.343-23.726-23.307 1.817-5.885 5.325-9.937 11.273-13.02 4.104-2.125 8.25-3.117 12.127-3.042z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCardPickupIcon })
);
