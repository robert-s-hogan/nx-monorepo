import IconWrapper from './IconWrapper';

const FilterIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-filter ${props.className}`}
    >
      <path d="M4 5h16a1 1 0 0 1 .7 1.7l-8 8a1 1 0 0 1-1.4 0l-8-8A1 1 0 0 1 4 5zm0 8v2a1 1 0 0 0 .3.7l3 3a1 1 0 0 0 1.4 0l3-3a1 1 0 0 0 .3-.7v-2l4.6-4.6a1 1 0 0 0-1.4-1.4L12 9.58 8.7 6.3a1 1 0 1 0-1.4 1.4L10 9.42V13a1 1 0 0 0 .3.7l3 3a1 1 0 0 0 1.4 0l3-3a1 1 0 0 0 .3-.7v-3.58l2.3-2.3a1 1 0 1 0-1.4-1.4L12 10.58l-4.6-4.6a1 1 0 0 0-1.4 1.4L10 8.42z"></path>
    </svg>
  );
};

export const Filter = IconWrapper(FilterIcon);
