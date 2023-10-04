import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDuelIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'duel'];
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
        d="M76 16v110.625s21.708-11.927 32.343-9.843c15.5 1.78 28.554 14.896 30.468 24.375-12.995 2.602-22.967 16.39-22.967 32.812 0 18.283 12.508 33.28 27.657 33.28 1.462 0 4.692.73 6.093.47l37.968 158.906V496h51.094V108.345l-25.313 18.282s-8.972-27.62-34.686-55.312C152.94 43.624 75.997 16.002 75.997 16.002zm197.343 0v387.657l25.312-18.282s8.973 27.62 34.688 55.313C359.057 468.38 436 496 436 496V385.375s-21.708 11.927-32.343 9.843c-15.5-1.78-28.554-14.896-30.468-24.375 12.995-2.603 22.967-16.39 22.967-32.813 0-18.283-12.508-33.28-27.657-33.28-1.462 0-4.692-.73-6.093-.47L324.44 145.375V16h-51.094z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDuelIcon })
);
