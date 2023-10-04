import React from 'react';

type SingleFont = {
  fontFamily: string;
  fontWeights: string;
};

type GoogleFontLoaderProps = {
  fonts: SingleFont[];
};

export const GoogleFontLoader: React.FC<GoogleFontLoaderProps> = ({
  fonts,
}) => {
  const createFontUrl = (font: SingleFont) => {
    return `https://fonts.googleapis.com/css2?family=${font.fontFamily}:wght@${font.fontWeights}&display=swap`;
  };

  const handleOnLoad = (event: React.SyntheticEvent<HTMLLinkElement>) => {
    event.currentTarget.onload = null;
    event.currentTarget.rel = 'stylesheet';
  };

  return (
    <>
      {fonts.map((font, index) => (
        <React.Fragment key={index}>
          <link
            rel="preload"
            href={createFontUrl(font)}
            as="style"
            onLoad={handleOnLoad}
          />
          <noscript>
            <link href={createFontUrl(font)} rel="stylesheet" type="text/css" />
          </noscript>
        </React.Fragment>
      ))}
    </>
  );
};

export default GoogleFontLoader;
