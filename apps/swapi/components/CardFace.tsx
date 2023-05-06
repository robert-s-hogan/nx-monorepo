import { useState, useEffect } from 'react';

interface CardFaceProps {
  homeworld?: string;
  className?: string;
  data?: any;
}

const CardFace: React.FC<CardFaceProps> = ({ data, className, homeworld }) => {
  const [cleanHair, setCleanHair] = useState('');
  const [cleanEye, setCleanEye] = useState('');
  const [cleanSkin, setCleanSkin] = useState('');
  const [female, setFemale] = useState('');

  const {
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = data;

  async function selectGender(gender: string) {
    if (gender) {
      const tempFemale = gender.search('female');
      if (tempFemale === 0) {
        setFemale('female');
      }
    }
  }

  async function updateHairColors(hair_color: string) {
    if (hair_color) {
      const temp = hair_color.replace(/, /g, '-');
      setCleanHair(temp);
    }
  }

  async function updateEyeColors(eye_color: string) {
    if (eye_color) {
      const temp = eye_color.replace(/, /g, '-');
      setCleanEye(temp);
    }
  }

  async function updateSkinColors(skin_color: string) {
    if (skin_color) {
      const temp = skin_color.replace(/, /g, '-');
      setCleanSkin(temp);
    }
  }

  useEffect(() => {
    updateHairColors(hair_color);
    updateEyeColors(eye_color);
    updateSkinColors(skin_color);
    selectGender(gender);
  }, [hair_color, skin_color, eye_color, gender]);

  return (
    <div className={className}>
      <div
        className={
          !female
            ? `hair absolute top-2 right-6 w-36 h-36 mx-auto rounded-full rounded-tr-3xl bg-${cleanHair} text-white`
            : `hair absolute top-2 right-6 w-36 h-48 mx-auto bg-black rounded-t-full rounded-3xl`
        }
      >
        {female && (
          <div className="bangs relative w-32 h-16 mx-auto bg-black rounded-full rounded-b-3xl z-10"></div>
        )}
      </div>
      <div
        className={`face shadow-2xl top-4 right-6 absolute w-36 h-36 rounded-full bg-${cleanSkin}`}
      >
        <div className="smile1 top-24 left-9 bg-white h-9 w-9 absolute rounded-bl-full"></div>
        <div className="smile2 top-24 left-17 bg-white h-9 w-9 absolute rounded-br-full"></div>
        <div
          className={`eye w-2 h-4 md:w-3 md:h-5 eye-left top-14 left-12 absolute rounded-md bg-${cleanEye}`}
        ></div>
        <div
          className={`eye w-2 h-4 md:w-3 md:h-5 eye-right top-14 right-12 absolute rounded-md bg-${cleanEye}`}
        ></div>
        <div
          className={`ear rounded-full h-9 w-7 md:h-11 md:w-9 ear-left top-14 -left-4 absolute -z-10 bg-${cleanSkin}`}
        ></div>
        <div
          className={`ear rounded-full h-9 w-7 md:h-11 md:w-9 ear-right top-14 -right-4 absolute bg-${cleanSkin}`}
        ></div>
        <div
          className={`eyebrow-left h-2 w-5 md:h-2.5 md:w-7 top-10 left-8 absolute rounded-md bg-${hair_color}`}
        ></div>
        <div
          className={`eyebrow-right h-2 w-5 md:h-2.5 md:w-7 top-10 right-12 absolute bg-${hair_color} rounded-md`}
        ></div>
      </div>
    </div>
  );
};

export default CardFace;
