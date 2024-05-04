import { ImageResponse } from 'next/og';
import Image from 'next/image';
import SwapiFavicon from 'https://app-assets.vercel.app/apps/swapi-cards/favicon.ico';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <Image
        src={SwapiFavicon}
        alt="Conquest"
        width={size.width}
        height={size.height}
      />
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
