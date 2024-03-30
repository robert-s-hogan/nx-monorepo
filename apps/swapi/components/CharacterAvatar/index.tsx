// CharacterAvatar.js
import React, { useState } from 'react';
import { Person } from '../../types/people';
import characterAvatarStyles from '../../styles/character-avatar.module.css';

import Human from '../species/Human';
import Droid from '../species/Droid';
// import other species components as needed

interface CharacterAvatarProps {
  data: Person;
}

const CharacterAvatar: React.FC<CharacterAvatarProps> = ({ data }) => {
  const { species, avatar_attributes } = data;

  let component;
  switch (species) {
    case 'Human':
      component = <Human data={data} />;
      break;

    // case 'Droid':
    //   component = <Droid className={className} data={data} />;
    //   break;

    // add other cases for other species

    default:
      component = (
        <div>
          <p>Unknown species</p>
        </div>
      );
  }

  return <div>{component}</div>;
};

export default CharacterAvatar;
