import { useState, useEffect } from 'react';

interface SwapiCardsFaceProps {
  name: string;
  hairColor: string;
  eyeColor: string;
  gender: string;
  skinColor: string;
  homeworld: string;
  styles: string;
  updateColors?: (url: string) => void;
}

const SwapiCardsFace: React.FC<SwapiCardsFaceProps> = (props) => {
  const { hairColor, eyeColor, skinColor, gender, styles } = props;

  const [cleanHair, setCleanHair] = useState('');
  const [cleanEye, setCleanEye] = useState('');
  const [cleanSkin, setCleanSkin] = useState('');
  const [female, setFemale] = useState('');

  async function selectGender(gender: string) {
    let tempFemale = gender.search('female');
    if (tempFemale === 0) {
      setFemale('female');
    }
  }

  async function updateHairColors(hairColor: string) {
    let temp = hairColor.replace(/, /g, '-');
    setCleanHair(temp);
  }

  async function updateEyeColors(eyeColor: string) {
    let temp = eyeColor.replace(/, /g, '-');
    setCleanEye(temp);
  }
  async function updateSkinColors(skinColor: string) {
    let temp = skinColor.replace(/, /g, '-');
    setCleanSkin(temp);
  }

  useEffect(() => {
    updateHairColors(hairColor);
    updateEyeColors(eyeColor);
    updateSkinColors(skinColor);
    selectGender(gender);
  }, [hairColor, skinColor, eyeColor, gender]);

  return (
    <div className={styles}>
      <div
        className={
          !female
            ? `hair absolute top-2 right-34 w-40 h-40 mx-auto rounded-full rounded-tr-3xl bg-${cleanHair} text-white`
            : `hair absolute top-2 right-34 w-40 h-48 mx-auto bg-black rounded-t-full rounded-3xl`
        }
      >
        {female && (
          <div className="bangs relative w-32 h-16 mx-auto bg-black rounded-full rounded-b-3xl z-10"></div>
        )}
      </div>
      <div
        className={`face shadow-2xl top-4 right-32 absolute w-40 h-40 rounded-full bg-${cleanSkin}`}
      >
        <div className="smile1 top-24 left-8 bg-white h-12 w-12 absolute rounded-bl-full"></div>
        <div className="smile2 top-24 left-20 bg-white h-12 w-12 absolute rounded-br-full"></div>
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
          className={`eyebrow-left h-2 w-5 md:h-2.5 md:w-7 top-10 left-8 absolute rounded-md bg-${hairColor}`}
        ></div>
        <div
          className={`eyebrow-right h-2 w-5 md:h-2.5 md:w-7 top-10 right-12 absolute bg-${hairColor} rounded-md`}
        ></div>
      </div>
    </div>
  );
};

export default SwapiCardsFace;
