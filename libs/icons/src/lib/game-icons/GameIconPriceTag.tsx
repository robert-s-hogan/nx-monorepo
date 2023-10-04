import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPriceTagIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'price-tag'];
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
        d="M303.297 42.269c-1.54.025-3.033.077-4.476.158-11.55.649-19.422 3.475-22.47 6.438L18.923 299.087 184.807 469.75l257.43-250.222c3.047-2.963 6.096-10.75 7.072-22.278.976-11.527.207-26.288-1.645-42.248-1.605-13.84-3.991-28.476-6.597-42.96-12.99 9.51-28.1 16.583-48.25 20.222a40 40 0 0 1-11.38 36.191 40 40 0 0 1-56.562-.802 40 40 0 0 1 .803-56.563 40 40 0 0 1 29.031-11.3 40 40 0 0 1 27.532 12.103 40 40 0 0 1 2.998 3.5c24.115-3.229 38.245-11.132 52.109-23.326-1.891-9.87-3.776-19.475-5.47-28.424-27.556-6.032-61.042-14.049-90.872-18.371-11.925-1.728-23.195-2.83-32.957-2.998-1.627-.028-3.212-.03-4.752-.004zm159.469 34.836c-3.39.175-6.773 1.444-9.342 3.283a2734.251 2734.251 0 0 1 3.7 19.365l5.326-3.707c.268.372.45.517.765 1.106 2.648 4.937 5.797 16.02 7.912 30.437 4.231 28.833 5.344 71.6 1.848 116.16-3.496 44.56-11.623 91.069-25.262 127.625-13.639 36.557-32.614 61.986-55.453 68.49-8.264 2.354-12.21.983-16.803-3.57-4.593-4.552-9.035-13.679-12.054-26.199-5.115-21.207-6.457-51.417-5.526-83.469l-18.336 17.824c-.067 25.974 1.633 50.248 6.364 69.864 3.443 14.277 8.383 26.341 16.882 34.765 8.5 8.424 21.359 11.814 34.405 8.098 31.734-9.038 52.827-40.494 67.384-79.512 14.558-39.017 22.756-86.771 26.344-132.508 3.589-45.736 2.547-89.302-1.984-120.181-2.266-15.44-5.15-27.556-9.858-36.332-2.353-4.388-5.217-8.459-10.513-10.627-1.324-.542-2.736-.832-4.174-.91-.54-.03-1.082-.03-1.625-.002zM293.1 187.796l12.549 12.906-29.38 28.563c6.195 6.952 11.437 14.253 15.71 21.908 5.1 9.1 8.755 18.47 10.96 28.12l-16.91 16.212c-.948-10.96-3.498-21.125-7.652-30.496-4.154-9.37-9.91-17.894-17.27-25.57-14.505-15.131-29.423-22.66-44.751-22.59-15.276.126-30.857 7.804-46.744 23.035-15.835 15.181-24.137 30.4-24.907 45.656-.716 15.312 6.178 30.534 20.684 45.664 5.665 5.91 11.193 10.73 16.584 14.463 5.443 3.684 10.96 6.396 16.553 8.135l31.539-30.236-26.205-27.336 13.054-12.516 42.09 43.9-50.416 48.335c-10.546-2.29-20.679-6.247-30.398-11.872-8.672-5.09-16.86-11.463-24.569-19.097l-25.826 24.635-12.424-13.026 26.303-25.088c-12.28-16.036-18.338-32.69-18.164-49.963.32-21.183 10.05-40.95 29.188-59.298 18.59-17.824 38.09-26.72 58.498-26.692.658.001 1.316.012 1.976.031 17.69.524 34.44 7.564 50.254 21.069z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPriceTagIcon })
);
