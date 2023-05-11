import IconWrapper from './IconWrapper';

const MoreVerticalIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-more-vertical ${props.className}`}
    >
      <circle cx="12" cy="12" r="1.5"></circle>
      <circle cx="12" cy="5.5" r="1.5"></circle>
      <circle cx="12" cy="19.5" r="1.5"></circle>
    </svg>
  );
};

export const MoreVertical = IconWrapper(MoreVerticalIcon);
