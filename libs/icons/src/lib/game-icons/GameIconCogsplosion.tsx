
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCogsplosionIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'cogsplosion'];
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
        <path fill="currentColor" d="M161.186 30.88c-7.18.168-14.257 2.57-19.573 7.888-4.494 4.494-6.902 10.25-7.642 16.26-6.008.74-11.76 3.148-16.255 7.642-4.59 4.59-6.997 10.49-7.682 16.637-6.15.683-12.055 3.098-16.646 7.69-7.088 7.087-9 17.303-7.338 26.724 1.66 9.42 6.648 18.663 14.38 26.395 5.303 5.304 11.318 9.313 17.613 11.846-.032 3.08-.987 5.26-2.463 6.735-1.986 1.987-5.24 3.035-10.264 2.15-5.022-.888-11.193-3.96-16.425-9.193l-13.214 13.215c7.732 7.732 16.974 12.72 26.394 14.38 9.42 1.663 19.637-.25 26.725-7.337 4.686-4.686 7.1-10.742 7.723-17.03 6.288-.623 12.344-3.035 17.03-7.722 4.592-4.59 7-10.496 7.684-16.646 6.15-.684 12.053-3.092 16.643-7.682 7.088-7.088 9-17.304 7.338-26.725-1.663-9.42-6.647-18.662-14.38-26.394-5.523-5.523-11.82-9.636-18.4-12.146.23-2.475 1.112-4.298 2.395-5.582 1.987-1.987 5.242-3.034 10.264-2.148 5.022.886 11.193 3.96 16.426 9.19l13.214-13.213c-7.73-7.73-16.972-12.718-26.392-14.38-2.355-.416-4.76-.607-7.154-.55zm182.798 20.308l-18.052 4.837 3.36 12.538c-3.326 2.186-6.22 5.04-8.452 8.42l-12.518-3.352-4.836 18.054 12.614 3.38c.28 3.99 1.37 7.847 3.152 11.35l-9.32 9.318 13.214 13.217 9.38-9.382c1.68.825 3.454 1.504 5.322 2.004 1.964.527 3.94.837 5.9.948l3.45 12.875 18.052-4.838-3.477-12.98c3.193-2.12 5.982-4.856 8.164-8.09l12.922 3.464 4.835-18.052-12.828-3.437c-.236-3.945-1.27-7.766-2.978-11.25l9.36-9.362-13.213-13.215-9.22 9.22c-1.793-.915-3.702-1.66-5.717-2.2-1.918-.514-3.846-.82-5.76-.938l-3.356-12.528zm-206.236 22.23c1.042-.005 2.188.095 3.443.316 5.024.887 11.197 3.96 16.43 9.192 5.23 5.232 8.302 11.405 9.19 16.428.885 5.022-.163 8.277-2.15 10.263-1.986 1.987-5.24 3.035-10.262 2.15-5.022-.888-11.195-3.96-16.427-9.193-5.23-5.232-8.304-11.405-9.19-16.428-.887-5.022.16-8.275 2.148-10.26 1.49-1.492 3.693-2.454 6.82-2.468zm207.258 8.906c1.065-.035 2.16.087 3.258.38 5.854 1.57 9.188 7.344 7.62 13.198-1.57 5.855-7.344 9.188-13.198 7.62-5.855-1.57-9.188-7.343-7.62-13.198 1.177-4.39 4.718-7.364 8.885-7.914.348-.046.7-.074 1.056-.086zm-232.252 15.45c2.522 6.44 6.586 12.6 12.002 18.015 5.414 5.413 11.57 9.474 18.008 11.997-.142 2.77-1.05 4.777-2.43 6.156-1.986 1.987-5.24 3.035-10.264 2.15-5.022-.888-11.193-3.96-16.425-9.193-5.233-5.232-8.306-11.403-9.192-16.425-.886-5.023.162-8.278 2.15-10.264 1.38-1.38 3.38-2.296 6.15-2.437zm183.232 48.744L125.53 302.695l.966-103.943-66.363 66.922-38.184-101.03v329.45h258.923L199.37 473.54l161.5-30.372.038.14 1.848-.494 11.617-2.185c2.095 2.893 4.688 5.36 7.62 7.308l-3.475 12.976 18.05 4.838 3.452-12.875c1.96-.11 3.935-.42 5.9-.947 1.867-.5 3.643-1.18 5.32-2.004l9.38 9.38 13.214-13.216-9.32-9.32c1.78-3.5 2.872-7.36 3.152-11.348l12.615-3.38-4.837-18.054-12.517 3.354c-2.233-3.383-5.126-6.236-8.45-8.422l3.358-12.537-18.05-4.838-3.358 12.527c-1.915.118-3.842.424-5.76.938-2.014.54-3.923 1.285-5.715 2.2l-9.22-9.22-13.214 13.215 9.36 9.36c-1.708 3.487-2.74 7.307-2.978 11.253l-12.828 3.438 2.104 7.85-99.274.8 73.254-70.363-36.738 2.8 50.22-60.863 2.977-2.308c4.462 4.433 9.56 8.315 15.217 11.515l-5.547 13.596 17.305 7.06 5.56-13.628c6.274 1.64 12.624 2.412 18.903 2.344l2.007 14.626 18.515-2.54-2.017-14.72c6.12-1.693 11.997-4.177 17.474-7.39l9.134 11.773 14.766-11.458-9.13-11.77c4.4-4.437 8.25-9.506 11.436-15.12l13.823 5.64 7.06-17.305-13.83-5.643c1.637-6.237 2.396-12.55 2.34-18.795l14.827-2.032-2.537-18.516-14.873 2.04c-1.675-6.102-4.132-11.97-7.317-17.438l11.85-9.193-11.455-14.765-11.795 9.15c-4.424-4.415-9.48-8.283-15.086-11.484l5.63-13.794-17.306-7.06-5.613 13.76c-6.25-1.663-12.58-2.453-18.842-2.415l-2.013-14.686-18.516 2.537 2.012 14.675c-6.143 1.668-12.045 4.144-17.547 7.342l-9.058-11.674-14.767 11.455 9.01 11.615c-4.445 4.447-8.34 9.534-11.56 15.174l-13.577-5.54-7.06 17.304 13.54 5.526c-1.667 6.29-2.44 12.66-2.385 18.96L312.7 254.28l2.423 17.68-108.488 38.93 89.35-164.372zm102.73 51.714c6.96-.078 14.056 1.208 20.93 4.012 19.95 8.14 32.303 26.768 33.293 46.88l-23.085-2.913c-1.867-9.957-8.572-18.837-18.568-22.915-3.904-1.593-7.962-2.313-11.953-2.252-11.532.176-22.486 6.88-27.55 17.836l-23.5-2.968c.454-1.444.956-2.884 1.538-4.312 8.412-20.617 28.02-33.13 48.895-33.368zm.772 41.44c1.567-.01 3.174.29 4.74.928 6.266 2.556 9.162 9.445 6.606 15.71-2.556 6.266-9.448 9.164-15.713 6.608-6.264-2.556-9.16-9.448-6.604-15.713 1.917-4.7 6.27-7.503 10.972-7.533zm-53.607 14.77l23.636 2.986c1.898 9.908 8.59 18.733 18.545 22.795 15.15 6.18 32.623-.79 39.473-15.47l23.035 2.91c-.46 1.474-.97 2.945-1.566 4.403-11.216 27.49-42.334 40.572-69.822 29.356-19.985-8.154-32.344-26.83-33.3-46.98zm52.88 158.238c.355.01.707.04 1.054.086 4.168.55 7.71 3.523 8.887 7.914 1.57 5.855-1.763 11.63-7.618 13.2-5.855 1.568-11.628-1.767-13.197-7.622-1.57-5.855 1.764-11.63 7.62-13.197 1.097-.294 2.19-.415 3.255-.38z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCogsplosionIcon);
    