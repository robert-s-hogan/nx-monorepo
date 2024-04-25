import React, { useState, useEffect } from 'react';

interface SwapiCardsFaceProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  skin_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  styles: string;
  updateColors?: (url: string) => void;
}

const SwapiCardsFace: React.FC<SwapiCardsFaceProps> = (props) => {
  const { eye_color, skin_color, gender, styles } = props;

  const [skinGradientId, setSkinGradientId] = useState('');
  const [eyeGradientId, setEyeGradientId] = useState('');
  const [useSkinGradient, setUseSkinGradient] = useState(false);
  const [useEyeGradient, setUseEyeGradient] = useState(false);

  const skinColors = skin_color
    .split(',')
    .map((color) => color.trim().replace(/ /g, '-'))
    .map((color) => (color === 'metal' ? ['silver', 'black'] : color))
    .flat();
  if (skinColors.length > 1) console.log(skinColors);

  const eyeColors = eye_color
    .split(',')
    .map((color) => color.trim().replace(/ /g, '-'));

  useEffect(() => {
    setUseSkinGradient(skinColors.length > 1);
    setUseEyeGradient(eyeColors.length > 1);

    setSkinGradientId(
      `skinGradient-${Math.random().toString(36).substr(2, 9)}`
    );
    setEyeGradientId(`eyeGradient-${Math.random().toString(36).substr(2, 9)}`);
  }, [skin_color, eye_color]);

  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-full w-full absolute -inset-1 ${styles}`}
    >
      <defs>
        {useSkinGradient && (
          <linearGradient
            id={skinGradientId}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            {skinColors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (skinColors.length - 1)) * 100}%`}
                style={{ stopColor: color }}
              />
            ))}
          </linearGradient>
        )}
        {useEyeGradient && (
          <linearGradient
            id={eyeGradientId}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            {eyeColors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (eyeColors.length - 1)) * 100}%`}
                style={{ stopColor: color }}
              />
            ))}
          </linearGradient>
        )}
      </defs>
      <circle
        cx="764"
        cy="944"
        r="240"
        fill={
          useSkinGradient
            ? `url(#${skinGradientId})`
            : `var(--${skinColors[0]})`
        }
      />
      <circle cx="694" cy="904" r="100" fill="white" />
      <circle cx="834" cy="904" r="100" fill="white" />
      <circle
        cx="694"
        cy="904"
        r="20"
        fill={
          useEyeGradient ? `url(#${eyeGradientId})` : `var(--${eyeColors[0]})`
        }
      />
      <circle
        cx="844"
        cy="904"
        r="20"
        fill={
          useEyeGradient ? `url(#${eyeGradientId})` : `var(--${eyeColors[0]})`
        }
      />
      <ellipse rx="20" ry="40" cx="769" cy="1054" fill="crimson" />
    </svg>
  );
};

export default SwapiCardsFace;
