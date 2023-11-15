import React, { useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '@with-nx/react-ui';

const CustomImage = ({ src, height, width, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative" style={{ width, height }}>
      {isLoading && <Skeleton isLoading={true} height={height} width={width} />}
      <Image
        src={src}
        height={height}
        width={width}
        alt={alt}
        onLoad={handleImageLoad}
        className={isLoading ? 'hidden' : ''}
      />
    </div>
  );
};

export default CustomImage;
