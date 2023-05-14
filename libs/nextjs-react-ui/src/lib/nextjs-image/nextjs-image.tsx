import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import nextjsImageStyles from './nextjs-image.module.css';

/* eslint-disable-next-line */
export interface NextjsImageProps extends ImageProps {
  className?: string;
  isLoading?: boolean;
}

export function NextjsImage({
  src,
  alt,
  className,
  isLoading: isLoadingProp,
  ...rest
}: NextjsImageProps) {
  const [isLoading, setIsLoading] = useState<boolean | undefined>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{ position: 'relative', width: '100%', paddingBottom: '50%' }}
      className={`${nextjsImageStyles.container} ${className}`}
    >
      {isLoading && (
        <div
          className={nextjsImageStyles.skeleton}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        ></div>
      )}

      {!isLoading && (
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className={nextjsImageStyles.imageLoaded}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          {...rest}
        />
      )}
    </div>
  );
}

export default NextjsImage;
