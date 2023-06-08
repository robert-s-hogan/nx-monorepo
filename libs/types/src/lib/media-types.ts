export interface AudioProps {
  src: string;
}

export interface CarouselProps {
  images: string[];
}

export interface GalleryProps {
  images: string[];
}

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  size: 'small' | 'medium' | 'large';
}

export interface LightboxProps {
  image: string;
}

export interface VideoProps {
  src: string;
  size: 'small' | 'medium' | 'large';
}
