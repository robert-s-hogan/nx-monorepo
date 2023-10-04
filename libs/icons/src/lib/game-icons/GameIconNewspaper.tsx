import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconNewspaperIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'newspaper'];
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
        d="M41 66.91V415.8c86.5 1 147.5 14.8 206 29.3V141.4c-45.3-30.1-90.4-58.75-206-74.49zm430 0C355.4 82.65 310.3 111.3 265 141.4v303.7c58.5-14.5 119.5-28.3 206-29.3zm-20.9 26.6l.8 66.99c-59.4 17.6-114.5 37.9-168.9 56-.4-20.9-.7-41.7-1.1-62.6 52.8-29.2 111.2-48.1 169.2-60.39zM69.01 105.3C129.8 119.4 184.1 136 226.1 150.1l.2 19c-41.6-13.9-101.3-32.3-161.35-46.3zm.12 46.6l35.97 6.5-3.2 17.8-35.97-6.5zm54.17 11.3l32.5 6.2-3.4 17.6-32.5-6.2zm53.2 10.5l49.6 9.6-3.4 17.6-49.6-9.6zm263.1 19.9l5.2 17.2-56 16.9-5.2-17.2zm-377.68 4.7C119.2 205 176 212.2 223.8 225l-4.6 17.4c-46-12.4-102.2-19.6-159.38-26.3zM357.1 216l4.8 17.4-71.7 19.8-4.8-17.4zm86.4 21l4.8 17.4-32.8 9.1-4.8-17.4zm-378.3 1.6l49.9 5.2-2 18-49.8-5.4zm76.9 9.8l82.1 12.3-2.6 17.8-82.1-12.3zm248.5 3.7l4.8 17.4L288.5 299l-4.8-17.4zm55.8 22.9l4.6 17.4L348.5 319l-4.6-17.4zm-388.06 6.4c29.84 3.1 61.96 7.5 84.46 13v111L59.2 398c-.33-38.9-.48-77.7-.86-116.6zm104.56 14.7l61.5 7.5-2.2 17.8-61.5-7.5zm161.5 11.8l4.2 17.5-37.8 9.1-4.2-17.5zm129.1 4.1l.4 82.2-78.5 10.2c-.3-23.8-.4-47.7-.7-71.5zM164 334.4l59.8 9.8-3 17.8-59.8-9.8zm271.7 1l-42.8 11.3.3 37.3 42.7-5.6zm-81.4 9.8l3.4 17.6-68.9 13.1-3.4-17.6zm-191.1 29.1l62.6 12.4-3.4 17.6-62.6-12.4zm186.6 6.8l4 17.6-62.5 13.9-4-17.6z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconNewspaperIcon })
);
