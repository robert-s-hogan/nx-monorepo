import { useState, useEffect } from 'react';
import { mapHeightToSize, mapMassToWidth } from '../utils/mapCharacterProps';

function useCharacterProps({
  gender,
  hair_color,
  skin_color,
  eye_color,
  height,
  mass,
}) {
  const [cleanHair, setCleanHair] = useState('');
  const [cleanEye, setCleanEye] = useState('');
  const [cleanSkin, setCleanSkin] = useState('');
  const [female, setFemale] = useState('');
  const [avatarHeight, setAvatarHeight] = useState('');
  const [avatarWidth, setAvatarWidth] = useState('');

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

  function updateAvatarHeight(height: string) {
    const sizeClass = mapHeightToSize(height);
    setAvatarHeight(sizeClass);
  }

  function updateAvatarWidth(mass: string) {
    const widthClass = mapMassToWidth(mass);
    setAvatarWidth(widthClass);
  }

  useEffect(() => {
    updateHairColors(hair_color);
    updateEyeColors(eye_color);
    updateSkinColors(skin_color);
    selectGender(gender);
    updateAvatarHeight(height);
    updateAvatarWidth(mass);
  }, [hair_color, skin_color, eye_color, gender, height, mass]);

  return { cleanHair, cleanEye, cleanSkin, female, avatarHeight, avatarWidth };
}

export default useCharacterProps;
