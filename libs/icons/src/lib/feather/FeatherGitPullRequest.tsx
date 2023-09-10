
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherGitPullRequestIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathergitpullrequest'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathergitpullrequest ${combinedClassNames}`}
      {...otherProps}
    >
      <circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>
    </svg>
  );
};

export const FeatherGitPullRequest = IconWrapper(FeatherGitPullRequestIcon);
  