import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBlacksmithIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'blacksmith'];
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
        d="M210 25c-10.012 0-19.372 5.32-26.74 15.145C175.892 49.968 171 64.15 171 80c0 15.85 4.892 30.032 12.26 39.855C190.628 129.68 199.988 135 210 135c10.012 0 19.372-5.32 26.74-15.145C244.108 110.032 249 95.85 249 80c0-15.85-4.892-30.032-12.26-39.855C229.372 30.32 220.012 25 210 25zm219.746 17.512l-18.701 15.21-22.76-9.206-7.72 15.271 85.86 36.313 16.807-34.532-53.486-23.056zm-5.264 59.392l-54.697 116.153 17.367 7.976L441.69 109.18l-17.207-7.276zM153 122.518c-5.86.764-11.17 1.81-16 3.086V253h146V125.604c-4.83-1.276-10.14-2.322-16-3.086v59.044l-4.975 2.489c-34.146 17.073-69.904 17.073-104.05 0L153 181.563v-59.045zm-34 9.982a61.312 61.312 0 0 0-5.008 2.988c-13.003 8.669-19.647 20.236-23.262 34.696-5.902 23.608-2.042 54.157-.416 82.816H119V132.5zm182 0V253h28.686c1.626-28.659 5.486-59.208-.416-82.816-3.615-14.46-10.26-26.027-23.262-34.696A61.312 61.312 0 0 0 301 132.5zm-130 .846v36.793c26.365 11.776 51.635 11.776 78 0v-36.793C239.103 145.188 225.36 153 210 153s-29.103-7.812-39-19.654zm-16.951 137.058l-.002.002v20.344H65.109c15.996 38.806 51.26 65.427 88.942 74.28V398h58.558c-12.115 30.534-33.527 55.682-58.5 77.592h-25.435v18.72h284.344v-18.72h-27.44c-28.728-21.894-50.024-47.017-61.594-77.594h63.657v-29.156c19.75-6.995 39.5-19.541 59.25-36.719-19.806-17.518-39.235-27.25-59.25-31.937v-29.782H154.049z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBlacksmithIcon })
);
