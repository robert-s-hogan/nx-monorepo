import { ImageResponse } from 'next/og';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          backgroundColor: 'black',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: 24,
          fontFamily: 'sans-serif',
        }}
      >
        C
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  );
}
