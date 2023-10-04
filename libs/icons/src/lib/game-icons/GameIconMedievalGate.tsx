import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMedievalGateIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'medieval-gate'];
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
        d="M256 22.604c-10.01 0-20.02 2.388-26.836 7.163-2.162 1.514-6.99 10.97-9.213 20.113-.69 2.84-1.016 5.075-1.446 7.516h74.992c-.43-2.44-.757-4.676-1.447-7.516-2.224-9.142-7.052-18.6-9.214-20.113-6.817-4.775-16.826-7.163-26.836-7.163zM80 26.626l-50.707 126.77h95.814l2.8-7zm352 0l-47.906 119.77 2.8 7h95.813zm-199 48.77v14h46v-14zm-19.438 32l-7 14h98.875l-7-14zm-63.468 32l-24.8 62h261.413l-24.8-62zM25 171.396v318h55v-39s4.074-32 16-32 16 32 16 32v39h80v-39c0-32 42.762-80 64-80 23.75 0 64 48 64 80v39h80v-39s4.074-32 16-32 16 32 16 32v39h55v-318h-92.906l19.2 48H393v183h-18v-135h-46v23h-18v-23h-46v23h-18v-23h-46v23h-18v-23h-46v135h-18v-183H98.707l19.2-48zm14 23h18v32H39zm416 0h18v32h-18zm-318 25v30h46v-7h18v7h46v-7h18v7h46v-7h18v7h46v-30zm-50 71h18v32H87zm320 0h18v32h-18zM256 312.91l2.846.946s24.722 8.202 49.69 22.766c12.483 7.282 25.14 16.154 35.077 26.918C353.55 374.304 361 387.396 361 402.396h-18c0-9-4.55-17.91-12.613-26.645-8.064-8.735-19.406-16.863-30.922-23.58-20.776-12.12-39.553-18.78-43.465-20.142-3.912 1.36-22.69 8.022-43.465 20.14-11.516 6.72-22.858 14.847-30.922 23.583C173.55 384.488 169 393.397 169 402.397h-18c0-15 7.45-28.092 17.387-38.856 9.936-10.764 22.594-19.636 35.078-26.918 24.967-14.564 49.69-22.766 49.69-22.766z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMedievalGateIcon })
);
