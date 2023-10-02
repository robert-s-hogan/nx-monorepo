type GoogleFontLoaderProps = {
  fontFamily: string;
  fontWeights: string;
};

export const GoogleFontLoader: React.FC<GoogleFontLoaderProps> = ({
  fontFamily,
  fontWeights,
}) => {
  const fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamily}:wght@${fontWeights}&display=swap`;

  const handleOnLoad = (event: React.SyntheticEvent<HTMLLinkElement>) => {
    event.currentTarget.onload = null;
    event.currentTarget.rel = 'stylesheet';
  };

  return (
    <>
      <link rel="preload" href={fontUrl} as="style" onLoad={handleOnLoad} />
      <noscript>
        <link href={fontUrl} rel="stylesheet" type="text/css" />
      </noscript>
    </>
  );
};

export default GoogleFontLoader;
