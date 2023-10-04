import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconRoyalLoveIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'royal-love'];
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
        d="M368.916 38.908c-15.49.145-31.22 3.356-46.316 9.82-40.01 25.788-50.568 67.182-60.502 109.32 44.02-10.522 87.27-21.872 112.422-65.44l.005 145.12c-25.506-44.172-68.58-55.153-112.44-65.492 10.338 43.86 21.32 86.932 65.493 112.436l-145.12-.002c43.563-25.152 54.914-68.402 65.435-112.42-43.837 10.336-86.88 21.325-112.375 65.48l.002-145.12c25.14 43.545 68.36 54.902 112.357 65.417-9.795-40.978-20.336-81.273-56.916-106.922-75.954-34.415-171.507 8.28-168.19 112.21 4.593 143.862 210.47 227.71 232.626 310.408 20.28-75.672 236.27-172.54 231.944-310.407h.002C484.876 84.78 430.587 39.92 372.01 38.92c-1.03-.018-2.06-.02-3.094-.012zM255.094 306.645c15.93 0 28.844 12.913 28.844 28.843s-12.914 28.846-28.844 28.846c-15.93 0-28.844-12.916-28.844-28.846s12.914-28.843 28.844-28.843z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconRoyalLoveIcon })
);
