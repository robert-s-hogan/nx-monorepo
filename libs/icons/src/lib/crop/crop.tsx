import IconWrapper from './IconWrapper';

const CropIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-crop ${props.className}`}
    >
      <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path>
      <path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>
    </svg>
  );
};

export const Crop = IconWrapper(CropIcon);
