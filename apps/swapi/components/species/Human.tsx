import React from 'react';

import { useAvatarSize } from '../../hooks/useAvatarSize';
import { Person } from '../types/people';
import Hair from '../avatar-components/Hair';
import Smile from '../avatar-components/Smile';
import Eyes from '../avatar-components/Eyes';
import Face from '../avatar-components/Face';
import Ear from '../avatar-components/Ear';
import Eyebrow from '../avatar-components/Eyebrow';

interface HumanProps {
  className?: string;
  data: Person;
}

const Human: React.FC<HumanProps> = ({ className, data }) => {
  const avatarSize = useAvatarSize();
  console.log(avatarSize);

  const attributes = data.avatar_attributes;

  const avatarHeight = avatarSize.height * avatarSize.scale || 100; // default to 100
  const avatarWidth = avatarSize.width * avatarSize.scale || 100; // default to 100

  const eyeSize = avatarHeight * 0.15;
  const smileSize = avatarHeight * 0.15;
  const earSize = avatarHeight + 5;
  const eyebrowSize = avatarHeight + 2;

  const isFemale = attributes.gender === 'female';

  return (
    <div
      className={`relative`}
      style={{ transform: `scale(${avatarSize.scale})` }}
    >
      <Hair
        color={attributes.hair_color}
        height={avatarHeight}
        width={avatarWidth}
        position="top-2 right-6"
        style={
          isFemale
            ? 'rounded-t-full rounded-3xl'
            : 'rounded-full rounded-tr-3xl'
        }
        isFemale={isFemale}
        hasHair={data.hair_color !== 'none'}
      />
      <Face
        color={attributes.skin_color}
        height={avatarHeight}
        width={avatarWidth}
        position="absolute bottom-0 right-6"
        style={data.hair_color !== 'none' ? 'boxShadow-outline' : ''}
      >
        <Smile
          color="white"
          height={smileSize}
          width={smileSize}
          positionLeft="top-24 left-9"
          positionRight="top-24 left-17"
        />
        <Eyes
          color={attributes.eye_color}
          height={eyeSize}
          width={eyeSize}
          position="top-14 left-12"
        />
        <Eyes
          color={attributes.eye_color}
          height={eyeSize}
          width={eyeSize}
          position="top-14 right-12"
        />
        <Ear
          color={attributes.skin_color}
          height={earSize}
          width={earSize}
          position="top-14 -left-4"
        />
        <Ear
          color={attributes.skin_color}
          height={earSize}
          width={earSize}
          position="top-14 -right-4"
        />
        <Eyebrow
          color={attributes.hair_color}
          height={eyebrowSize}
          width={eyebrowSize}
          position="top-10 left-8"
        />
        <Eyebrow
          color={attributes.hair_color}
          height={eyebrowSize}
          width={eyebrowSize}
          position="top-10 right-12"
        />
      </Face>
    </div>
  );
};

export default Human;
