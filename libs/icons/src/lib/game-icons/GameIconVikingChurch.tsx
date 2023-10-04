import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconVikingChurchIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'viking-church'];
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
        d="M231.027 25l-5.5 22h60.946l-5.5-22h-49.946zm-43.002 32.95l-8.05 16.1 30.923 15.464-7.37 29.486h104.945l-7.371-29.486 30.923-15.463-8.05-16.102L293.873 73H289v24h-66V73h-4.873l-30.102-15.05zM241 65v14h30V65h-30zm-24 72v62h30v-39h18v39h30v-62h-78zm-84.975 16.95l-8.05 16.1 25.36 12.682L138.624 247h234.754l-10.713-64.268 25.361-12.681-8.05-16.102L349.873 169H313v48H199v-48h-36.873l-30.102-15.05zM68 244v32h.322c-1.973 4.177-3.785 9.206-5.244 14.344-2.109 7.425-3.554 14.928-4.488 20.656h37.603c-.774-5.696-2.02-13.213-3.925-20.652-1.649-6.435-3.845-12.735-6.268-17.356V244H68zm357 0v31.596c-1.922 4.256-3.656 9.452-5.014 14.752-1.906 7.44-3.149 14.956-3.923 20.652h37.603c-.934-5.728-2.38-13.231-4.488-20.656-1.687-5.94-3.841-11.742-6.178-16.233V244h-18zm-288 21v14h46v-14h-46zm64 0v14h110v-14H201zm128 0v14h46v-14h-46zm-73 31.23l-23 57.5V375h46v-21.268l-23-57.502zm-138.438.77l-23 46h123.344l18.4-46H117.563zm158.131 0l18.4 46h123.344l-23-46H275.693zM57 329v46h158v-14H65.437l16-32H57zm373.563 0l16 32H297v14h158v-46h-24.438zM55.026 393l-11.5 46h13.446l11.5-46H55.027zm32 0l-11.5 46H183v-46H87.027zM201 393v46h18.184l30.666-46H201zm61.15 0l30.666 46H311v-46h-48.85zm66.85 0v46h107.473l-11.5-46H329zm114.527 0l11.5 46h13.446l-11.5-46h-13.446zM256 416.225l-23 34.5V487h46v-36.275l-23-34.5zM41 457v30h14v-30H41zm32 0v30h46v-30H73zm64 0v30h78v-30h-78zm160 0v30h78v-30h-78zm96 0v30h46v-30h-46zm64 0v30h14v-30h-14z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconVikingChurchIcon })
);
