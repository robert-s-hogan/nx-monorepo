
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconComputingIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'computing'];
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
        <path fill="currentColor" d="M83.014 30.53c-14.8 0-26.118 5.868-33.96 17.6-7.782 11.675-11.673 28.656-11.673 50.942 0 22.228 3.892 39.207 11.675 50.94 7.84 11.674 19.16 17.51 33.96 17.51 14.797 0 26.09-5.836 33.872-17.51 7.84-11.733 11.76-28.712 11.76-50.94 0-22.286-3.92-39.267-11.76-50.94-7.783-11.734-19.075-17.6-33.873-17.6zm230.648 0c-14.8 0-26.12 5.868-33.96 17.6-7.783 11.675-11.675 28.656-11.675 50.942 0 22.228 3.892 39.207 11.674 50.94 7.843 11.674 19.163 17.51 33.962 17.51 14.8 0 26.09-5.836 33.87-17.51 7.843-11.733 11.765-28.712 11.765-50.94 0-22.286-3.922-39.267-11.764-50.94-7.782-11.734-19.072-17.6-33.87-17.6zm115.324 0c-14.798 0-26.12 5.868-33.96 17.6-7.783 11.675-11.674 28.656-11.674 50.942 0 22.228 3.89 39.207 11.673 50.94 7.842 11.674 19.163 17.51 33.96 17.51 14.8 0 26.09-5.836 33.872-17.51 7.842-11.733 11.762-28.712 11.762-50.94 0-22.286-3.92-39.267-11.763-50.94-7.782-11.734-19.072-17.6-33.87-17.6zm-236.75 2.39l-31.572 6.367V55.56l31.748-6.367v100.73H163.23v15.036h76.055v-15.036H210.1V32.92h-17.864zM83.014 44.682c9.256 0 16.184 4.54 20.783 13.62 4.658 9.02 6.986 22.61 6.986 40.77 0 18.1-2.328 31.69-6.986 40.77-4.6 9.02-11.527 13.53-20.783 13.53-9.198 0-16.124-4.51-20.782-13.53-4.598-9.08-6.898-22.67-6.898-40.77 0-18.16 2.3-31.75 6.898-40.77 4.658-9.08 11.584-13.62 20.782-13.62zm230.648 0c9.257 0 16.185 4.54 20.783 13.62 4.658 9.02 6.987 22.61 6.987 40.77 0 18.1-2.33 31.69-6.987 40.77-4.598 9.02-11.526 13.53-20.783 13.53-9.197 0-16.125-4.51-20.783-13.53-4.6-9.08-6.9-22.67-6.9-40.77 0-18.16 2.3-31.75 6.9-40.77 4.657-9.08 11.585-13.62 20.782-13.62zm115.324 0c9.257 0 16.185 4.54 20.784 13.62 4.657 9.02 6.986 22.61 6.986 40.77 0 18.1-2.33 31.69-6.986 40.77-4.6 9.02-11.527 13.53-20.784 13.53-9.197 0-16.125-4.51-20.783-13.53-4.6-9.08-6.898-22.67-6.898-40.77 0-18.16 2.3-31.75 6.898-40.77 4.658-9.08 11.586-13.62 20.783-13.62zM83.014 187.504c-14.8 0-26.118 5.867-33.96 17.6-7.782 11.673-11.673 28.654-11.673 50.94 0 22.228 3.892 39.208 11.675 50.94 7.84 11.674 19.16 17.512 33.96 17.512 14.797 0 26.09-5.838 33.872-17.512 7.84-11.732 11.76-28.712 11.76-50.94 0-22.286-3.92-39.267-11.76-50.94-7.783-11.733-19.075-17.6-33.873-17.6zm115.324 0c-14.8 0-26.12 5.867-33.96 17.6-7.784 11.673-11.675 28.654-11.675 50.94 0 22.228 3.89 39.208 11.674 50.94 7.84 11.674 19.162 17.512 33.96 17.512 14.8 0 26.09-5.838 33.874-17.512 7.842-11.732 11.763-28.712 11.763-50.94 0-22.286-3.92-39.267-11.762-50.94-7.782-11.733-19.073-17.6-33.872-17.6zm109.223 2.39l-31.574 6.366v16.273l31.75-6.37v100.733h-29.183v15.036h76.056v-15.036h-29.186V189.893H307.56zm115.323 0l-31.572 6.366v16.273l31.75-6.37v100.733h-29.185v15.036h76.057v-15.036h-29.184V189.893h-17.865zm-339.87 11.76c9.257 0 16.185 4.54 20.784 13.62 4.658 9.02 6.986 22.612 6.986 40.77 0 18.1-2.328 31.69-6.986 40.77-4.6 9.02-11.527 13.532-20.783 13.532-9.198 0-16.124-4.51-20.782-13.532-4.598-9.08-6.898-22.67-6.898-40.77 0-18.158 2.3-31.75 6.898-40.77 4.658-9.08 11.584-13.62 20.782-13.62zm115.325 0c9.256 0 16.184 4.54 20.783 13.62 4.66 9.02 6.987 22.612 6.987 40.77 0 18.1-2.328 31.69-6.986 40.77-4.598 9.02-11.526 13.532-20.782 13.532-9.198 0-16.126-4.51-20.783-13.532-4.6-9.08-6.9-22.67-6.9-40.77 0-18.158 2.3-31.75 6.9-40.77 4.657-9.08 11.585-13.62 20.783-13.62zm0 142.823c-14.8 0-26.12 5.866-33.96 17.6-7.784 11.673-11.675 28.652-11.675 50.94 0 22.226 3.89 39.207 11.674 50.94 7.84 11.674 19.162 17.512 33.96 17.512 14.8 0 26.09-5.84 33.874-17.513 7.842-11.733 11.763-28.714 11.763-50.94 0-22.288-3.92-39.267-11.762-50.94-7.782-11.734-19.073-17.6-33.872-17.6zm115.324 0c-14.8 0-26.12 5.866-33.96 17.6-7.783 11.673-11.675 28.652-11.675 50.94 0 22.226 3.892 39.207 11.674 50.94 7.843 11.674 19.163 17.512 33.962 17.512 14.8 0 26.09-5.84 33.87-17.513 7.843-11.733 11.765-28.714 11.765-50.94 0-22.288-3.922-39.267-11.764-50.94-7.782-11.734-19.072-17.6-33.87-17.6zm-236.75 2.388l-31.572 6.367v16.272l31.75-6.367V463.87H47.904V478.9h76.057V463.87H94.778V346.864H76.912zm345.97 0l-31.57 6.367v16.272l31.75-6.367V463.87h-29.187V478.9h76.057V463.87h-29.184V346.864h-17.865zM198.34 358.627c9.256 0 16.184 4.54 20.783 13.62 4.66 9.02 6.987 22.61 6.987 40.77 0 18.1-2.328 31.69-6.986 40.77-4.598 9.02-11.526 13.53-20.782 13.53-9.198 0-16.126-4.51-20.783-13.53-4.6-9.08-6.9-22.67-6.9-40.77 0-18.16 2.3-31.75 6.9-40.77 4.657-9.08 11.585-13.62 20.783-13.62zm115.324 0c9.257 0 16.185 4.54 20.783 13.62 4.658 9.02 6.987 22.61 6.987 40.77 0 18.1-2.33 31.69-6.987 40.77-4.598 9.02-11.526 13.53-20.783 13.53-9.197 0-16.125-4.51-20.783-13.53-4.6-9.08-6.9-22.67-6.9-40.77 0-18.16 2.3-31.75 6.9-40.77 4.657-9.08 11.585-13.62 20.782-13.62z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconComputingIcon);
    