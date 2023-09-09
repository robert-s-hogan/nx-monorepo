import React from 'react';

import { useAvatarSize } from '../../hooks/useAvatarSize';
import { Person } from '../../types/people';
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
      {/* <Hair
        color={attributes.hair_color}
        height={avatarHeight}
        width={avatarWidth}
        style={
          isFemale
            ? 'rounded-t-full rounded-3xl'
            : 'rounded-full rounded-tr-3xl'
        }
        isFemale={isFemale}
        hasHair={attributes.hair_color !== 'none'}
      />
      <Face
        color={attributes.skin_color}
        height={avatarHeight}
        width={avatarWidth}
        style={attributes.hair_color !== 'none' ? 'boxShadow-outline' : ''}
      >
        <Smile color="white" height={smileSize} width={smileSize} />
        <Eyes color={attributes.eye_color} />
        <Eyes color={attributes.eye_color} />
        <Ear color={attributes.skin_color} height={earSize} width={earSize} />
        <Ear color={attributes.skin_color} height={earSize} width={earSize} />
        <Eyebrow
          color={attributes.hair_color}
          height={eyebrowSize}
          width={eyebrowSize}
        />
        <Eyebrow
          color={attributes.hair_color}
          height={eyebrowSize}
          width={eyebrowSize}
        /> 
      </Face>*/}
      Human.tsx
    </div>
  );
};

export default Human;
