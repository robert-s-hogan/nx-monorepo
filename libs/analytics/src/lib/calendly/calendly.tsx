import React, { useEffect } from 'react';

/* eslint-disable-next-line */
export interface CalendlyProps {
  url: string;
}

export function Calendly(props: CalendlyProps) {
  const { url } = props;
  useEffect(() => {
    if (url) {
      const head = document.querySelector('head');
      const script = document.createElement('script');
      script.setAttribute(
        'src',
        'https://assets.calendly.com/assets/external/widget.js'
      );
      head?.appendChild(script);
    }
  }, [url]);
  return (
    <div
      id="calendly-inline-widget"
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth: '320px', height: '600px' }}
    ></div>
  );
}

export default Calendly;
