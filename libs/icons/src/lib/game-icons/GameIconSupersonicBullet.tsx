import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSupersonicBulletIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'supersonic-bullet'];
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
        d="M52.75 18.77C219.1 90.98 350.8 176.7 426.6 273.5 363.1 354.7 262.1 428.8 135.1 494h40c79.3-43.1 147.9-89.9 202.6-140.5-39.1 50.4-88.1 97.4-144.9 140.5h30.4c80.1-63.9 144.3-136.2 185.4-216.3l2.2-4.2-2.2-4.3C399.4 173.5 315.9 89.89 211 18.77h-33.9C257.6 70.37 325.9 128.8 377 193.4 305.7 128.5 210.5 70.41 98.51 18.77H52.75zm286.85 0C419.5 87.02 464.5 168.5 472.2 250.8c7.7 83.6-22.8 168.6-96.8 243.2h25.8c20.8-22.7 37.9-46.5 51.5-70.9-7.6 24.5-17.1 48.2-28.8 70.9h20.9c72.3-148.7 61.7-336.5-17.8-475.23h-21.6c20 33.13 35.9 69.56 47.3 107.83-20.6-38.1-49.1-74.46-85-107.83h-28.1zM19.29 100.4v18.7c98.91.5 192.11 33.8 275.81 93.3-83.7-43.1-177-67.4-275.81-67.8v18.7c126.31.5 243.11 41.3 341.91 111.2C262 345.4 146.2 389 19.29 389.6v18.6c97.11-.4 187.91-25.2 269.81-67.6-82.1 58.6-172.8 92.6-269.81 93.2v18.7c138.51-.8 264.11-66.9 369.61-172.2l6.7-6.6-6.7-6.7c-104-106.4-248.8-163.9-369.61-166.6zM200.8 236.3v80.3c48.2 0 92-15.6 129-40.8-36.9-25-81.1-39.5-129-39.5zm-164.17.5V316h22.33v-79.2zm41.02 0V316H179.3v-79.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSupersonicBulletIcon })
);
