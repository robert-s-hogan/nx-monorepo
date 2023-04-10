import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { Skeleton } from '@with-nx/react-ui';

interface SkeletonImageProps extends ImageProps {
  alt: string;
  isLoading?: boolean;
}
const SkeletonImage: React.FC<SkeletonImageProps> = ({
  alt,
  isLoading,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && isLoading ? (
        <Skeleton />
      ) : (
        <Image {...props} onLoad={handleImageLoad} alt={alt} />
      )}
    </>
  );
};

export default SkeletonImage;
