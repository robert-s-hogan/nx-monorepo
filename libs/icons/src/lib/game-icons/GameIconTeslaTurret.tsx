import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTeslaTurretIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'tesla-turret'];
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
        d="M86.25 65.438c-16.888.292-31.98 8.265-43.625 20.53-13.8 14.54-22.688 35-22.688 55.97 0 23.592 10.85 46.488 27.75 60.968-16.63 20.026-23.824 40.488-23.406 58.938.462 20.306 10.22 37.75 24.845 48.5 14.624 10.75 34.166 14.9 53.656 9.594 18.535-5.046 36.713-18.573 51.032-41.563h102.313v-64.47l-156.313 22.19v42.28H131c-10.582 13.32-22.16 20.546-33.125 23.53-14.113 3.843-27.553.825-37.688-6.624-10.134-7.448-16.917-19.23-17.25-33.874-.312-13.763 5.157-30.422 20.657-48.312 9.81 4.438 20.733 6.306 32.218 4.687l4-.56 185.625-26.345v-39.47h37.532v34.126l18.686-2.655v-31.47h34.28L375.94 178l18.687-2.625v-23.97h27.938c4 15.145 17.786 26.314 34.187 26.314 19.532 0 35.375-15.844 35.375-35.376 0-19.532-15.843-35.344-35.375-35.344-16.19 0-29.804 10.872-34 25.72h-28.125v-20.47l-18.688-2.97v23.44h-34.28v-28.907l-18.688-2.97v31.876h-37.533V94.843l-12.218-1.938L95.81 66.062c-3.24-.494-6.435-.68-9.562-.624zm119.938 44.718l-5 21.813 62.218 11.843-82.437 27.562 5-21.813-62.22-11.812 82.438-27.594zM187.75 297.062v102.594h-40.188v26.47l-78.468 48H39.438v18.687h34.906l2.25-1.375 92.656-56.657h39.594l7.28 39.345h-15.343v18.688h54.626v-18.688h-20.28l-7.282-39.344h28.187l92.69 56.658 2.25 1.375h42.811v-18.688h-37.56L275.905 425v-25.344h-41.47l-.467-.28V297.062h-46.22z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTeslaTurretIcon })
);
