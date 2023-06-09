import { Image } from '../image/image';
import { GalleryProps } from '@with-nx/types';

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="flex flex-wrap">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Gallery Image ${index}`}
          size="small"
          className="m-2"
        />
      ))}
    </div>
  );
};
