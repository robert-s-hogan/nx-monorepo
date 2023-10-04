import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconJawboneIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'jawbone'];
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
        d="M141.53 27.5c-14.402.24-28.773 4.045-40.905 11.47 8.326 73.258-10.335 120.874-81 185.593 85.145 69.732 181.182 175.762 224.47 258.593 47.95 5.71 96.32 3.736 125.468-23.03-5.976-1.694-11.99-5.062-17.625-10.095-8.674-7.743-14.29-14.773-15.313-23.03-8.506.522-17.522-1.747-25.844-7.25-9.755-6.45-15.376-15.956-15.75-25.344-2.813.698-5.658 1.168-8.53 1.375-9.563.69-19.818-1.6-27.063-9.124-7.212-7.49-9.103-17.77-8.187-27.344.06-.64.165-1.267.25-1.906-2.99.838-6.055 1.407-9.125 1.688-9.548.872-19.862-1.21-27.25-8.594-7.244-7.24-9.356-17.286-8.72-26.75-.567.193-1.144.39-1.718.563-9.18 2.76-19.693 2.792-28.406-2.97-8.673-5.734-12.74-15.362-13.936-24.906-.764-6.09-.422-12.364.937-18.437-41.346-51.493-38.973-107.49 51.376-170.688 6.717-53.757-33.305-80.477-73.125-79.812zm140.064 64.53c-2.196-.06-5.02.324-8.375 1.44-6.71 2.23-14.523 7.06-20.5 12.936-5.98 5.875-9.918 12.704-10.69 18-.77 5.296.138 9.312 7.032 14.563 7.08 5.39 11.66 5.345 16.875 3.28 5.216-2.065 10.985-7.466 15.313-14.563 4.328-7.096 7.163-15.705 7.72-22.53.554-6.827-1.18-10.71-2.75-11.907v-.03c-.85-.648-2.43-1.127-4.626-1.19zm49.5 24.25c-.523 0-1.09.034-1.688.095-2.396.244-5.368 1.01-8.72 2.563-6.7 3.106-14.132 8.858-19.498 15.312-5.367 6.454-8.43 13.528-8.532 18.438-.102 4.91 1.103 8.356 8.906 12.5 8.01 4.252 13.158 3.627 18.407.843 5.248-2.782 10.415-8.78 13.905-16.124 3.49-7.342 5.238-15.888 4.938-22.344-.3-6.455-2.302-9.592-4.188-10.593-.76-.405-1.964-.682-3.53-.69zm49.187 21.5c-.237.007-.49.01-.75.032-3.107.28-7.608 1.803-12.405 5.094-6.397 4.388-12.886 11.342-17.094 18.438-4.206 7.095-5.817 14.167-5.03 18.28.787 4.115 2.45 6.984 11.563 9.25 9.34 2.325 15.205.483 20.218-3.343 5.015-3.825 8.982-10.39 11.064-17.81 2.082-7.423 2.152-15.524.625-21.19-1.53-5.664-3.776-7.953-6.345-8.593-.51-.127-1.128-.173-1.844-.156zm37.783 21.407c-2.654.066-3.784.61-5.313 2.032-3.057 2.84-6.715 11.768-8.875 25.343-3.315 20.835-4.277 51.186-8.78 84.718 18.245-21.454 32.614-43.518 40.31-62.25 5.227-12.716 7.254-23.8 6.283-31.405-.972-7.606-3.66-11.774-10.875-15.03-5.824-2.63-10.097-3.473-12.75-3.407zM465 179.53c-.654.01-.64.14-.875.345-.63.545-2.953 5.552-3.375 13.97-.74 14.724 2.303 36.59 3.47 55.78 1.436-.566 3.107-1.515 5.28-3.28 5.153-4.188 10.808-11.842 14.438-20.407 3.63-8.566 5.238-17.936 4-25.47-1.24-7.532-4.517-13.262-12.72-17.593-4.49-2.372-7.7-3.21-9.312-3.313-.403-.025-.688-.034-.906-.03zm-267.03 84.282c-.453-.002-.894.02-1.314.063-1.12.116-2.15.4-3.094.75-3.773 1.4-7.424 5.167-9.906 10.813-2.48 5.645-3.515 12.83-2.78 18.687.733 5.858 3.044 9.858 5.718 11.625 2.797 1.85 7.215 2.31 12.72.656 5.502-1.654 11.483-5.457 15.56-10.03 4.08-4.575 6.087-9.547 5.845-13.72-.244-4.173-2.178-8.713-10.22-14.03-5.403-3.573-9.372-4.796-12.53-4.813zm47.78 34.375c-.812-.016-1.598.072-2.344.188-3.976.618-8.316 3.588-11.875 8.625-3.557 5.037-5.987 11.863-6.436 17.75-.45 5.887.983 10.265 3.25 12.53 2.372 2.372 6.62 3.712 12.344 3.19 5.722-.524 12.34-3.052 17.25-6.72 4.91-3.668 7.873-8.144 8.468-12.28.596-4.14-.4-8.998-7.22-15.814-5.234-5.233-9.263-7.076-12.623-7.406-.28-.028-.542-.057-.813-.063zm44.47 36.782c-.526.014-1.034.056-1.533.124-3.987.54-8.376 3.44-12.03 8.406-3.655 4.967-6.25 11.716-6.813 17.594-.563 5.878.808 10.284 3.03 12.594 2.327 2.415 6.55 3.85 12.282 3.437 5.732-.413 12.397-2.833 17.375-6.406 4.98-3.575 8.014-7.97 8.69-12.095.673-4.125-.22-8.992-6.908-15.938-5.134-5.332-9.115-7.26-12.468-7.656-.56-.065-1.1-.076-1.625-.06zm83.28 8.342c-15.947 8.505-34.427 19.674-46.563 30.782-7.694 7.043-12.323 14.02-13.156 18.22-.83 4.196-.528 6.71 7.283 11.873 7.89 5.218 13.697 5.385 19.875 3.063 6.177-2.322 12.78-8.142 18.312-16.438 8.636-12.948 14.052-31.514 14.25-47.5zm22.625 63.907c-14.205 5.428-29.29 9.312-36.625 13.467-2.15 1.218-3.486 2.372-4 3-.514.63-.376.427-.375.594 0 .337 1.343 4.753 9.25 11.814 7.362 6.574 12.22 7.246 16.156 6.406 3.937-.84 8.107-4.084 11.376-9.313 3.27-5.228 5.32-12.16 5.438-18.062.062-3.134-.426-5.76-1.22-7.906z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconJawboneIcon })
);
