import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSpartanHelmetIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'spartan-helmet'];
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
        d="M253.714 20.358c-8.79.075-17.448.82-25.89 2.308-46.55 8.208-89.423 26.157-121.225 52.065-31.803 25.908-52.572 59.39-56.316 100.053l-.004.04-.004.04c-8.45 83.885 39.397 152.37 65.604 181.553 5.21 5.804 7.064 13.574 6.533 20.862-.53 7.288-3.04 14.494-6.598 21.838-7.114 14.688-18.703 30.06-31.03 44.457-13.957 16.303-27.375 29.703-37.75 39.627 7.203-1.214 14.764-4.37 22.67-9.368 14.66-9.265 29.554-24.475 42.097-41.298 12.543-16.824 22.807-35.28 28.802-50.586 2.998-7.654 4.912-14.54 5.614-19.72.7-5.178-.177-8.39-.354-8.687-15.34-25.73-31.257-52.027-40.687-79.112-9.43-27.085-12.2-55.565-.073-83.35 25.223-57.79 78.02-85.085 130.772-89.605 52.61-4.508 105.963 12.396 136.545 44.71l23.292 22.474 69.254-41.47c-20.34-26.314-55.49-55.33-96.24-76.257-33.546-17.226-70.702-28.978-106.18-30.428-2.957-.12-5.902-.17-8.832-.144zM372.42 146.184l-.058-.057.31.313c-.083-.087-.17-.17-.25-.256zM244.814 118.95c-2.468.102-4.935.245-7.4.457-3.562.305-7.11.73-10.64 1.255l9.628 45.077c5.76-1.637 11.657-2.823 17.646-3.564l-9.233-43.226zm43.85 3.658c-4.866 12.845-7.33 25.916-6.978 39.04 6.034.48 12.086 1.335 18.12 2.557-.868-12.19 1.306-24.43 6.362-36.98-5.66-1.82-11.515-3.363-17.504-4.617zm-106.672 11.79c-6.112 3.028-12 6.54-17.612 10.532 17.55 8.862 29.7 22.763 34.715 39.594 4.936-3.84 10.145-7.183 15.564-10.063-6.122-16.257-17.577-30.086-32.666-40.063zm88.136 44.796c-1.156-.002-2.308.014-3.457.047-2.675.076-5.328.242-7.952.502-41.993 4.176-77.31 30.258-87.475 90.07-2.198 12.94 4.293 42.822 12.246 67.66 7.952 24.836 16.634 45.517 16.634 45.517l.504 1.198.143 1.295c1.96 17.7-9.11 34.967-21.212 52.26-8.036 11.486-16.43 22.104-23.97 31.72 24-1.35 45.963-11.985 67.177-30.947-.124-.5-.17-.71-.313-1.297-.866-3.594-1.955-8.697-1.687-14.68.446-9.983 5.674-21.958 18.818-31.868-24.577-35.02-28.898-78.757-24.06-115.027l.886-6.65 6.626-1.05c58.715-9.29 97.246-28.81 139.34-54.593-27.566-21.88-61.198-34.115-92.25-34.158zm120.197 37.84c-48.424 30.517-91.56 55.67-157.556 67.35-3.253 33.408 2.427 71.84 25.226 100.798 12.607.61 23.264 6.977 29.904 16.184 6.747 9.353 9.946 21.162 10.83 33.628 23.288 21.426 62.97 39.024 97.764 56.655-3.17-39.444-.296-76.34-14.538-114.11l-62.842-25.3-.062-.027c-14.313-6.018-23.332-13.792-26.512-24.03-3.18-10.236-.874-19.966 1.188-31.064l2.2-11.852 10.74 5.476c23.407 11.94 51.394 20.52 77.548 20.065l6.582-.116 2.103 6.238c10.593 31.436 12.912 56.612 15.752 82.203l7.787 3.113c4.126-29.38 1.912-68.686-3.862-104.425-5.463-33.817-14.72-65.03-22.252-80.788zM223.397 441.148c-.01.444.094.455.01.04-.002-.008-.01-.033-.01-.04z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSpartanHelmetIcon })
);
