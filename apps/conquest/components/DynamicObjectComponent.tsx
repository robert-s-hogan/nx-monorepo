import { ImUnlocked } from 'react-icons/im';
import {
  GiLockedChest,
  GiChestArmor,
  GiGemChain,
  GiSwitchWeapon,
  GiRomanShield,
} from 'react-icons/gi';
import { Flex } from '@with-nx/react-ui';

interface DynamicObjectComponentProps {
  data: any;
  locked?: boolean;
  onClick?: () => void;
}

const DynamicObjectComponent = ({
  data,
  locked = false,
  onClick,
}: DynamicObjectComponentProps) => {
  function objectToString(obj) {
    let str = '';
    for (let i = 0; i < Object.keys(obj).length; i++) {
      str += obj[i];
    }
    return str;
  }

  if (typeof data === 'object' && !isNaN(parseInt(Object.keys(data)[0]))) {
    data = objectToString(data);
  }

  const renderWeapon = (weapon) => {
    return (
      <div className="col-span-1 bg-gray 100 p-4 rounded-md">
        <h4 className="flex items-center">{weapon.name}</h4>
        <ul>
          {/* <Box height={24}>{weapon.description}</Box> */}
          <li>Type: {weapon.type}</li>
          <li>Quadrant: {weapon.location}</li>
          <li>Interactable: {weapon.interactable ? 'true' : 'false'}</li>
          <li>Loot: {weapon.loot ? weapon.loot : 'none'}</li>
          <li>Rarity: {weapon.rarity}</li>
          <li>Condition: {weapon.condition}</li>
          <li>Size: {weapon.size}</li>
          <li>Value: {weapon.value}</li>
        </ul>
      </div>
    );
  };

  const renderRandomItem = (item) => {
    return (
      <div className="col-span-1 bg-gray 100 p-4 rounded-md">
        <h4 className="flex items-center">{item.name}</h4>
        <ul>
          {/* <Box height={24}>{item.description}</Box> */}
          <li>type: {item.type}</li>
          <li>Quadrant: {item.location}</li>
          <li>Interactable: {item.interactable ? 'true' : 'false'}</li>
          <li>Loot:{item.loot ? item.loot : 'none'}</li>
          <li>Rarity: {item.rarity}</li>
          <li>Condition: {item.condition}</li>
          <li>Size: {item.size}</li>
          <li>Value: {item.value}</li>
        </ul>
      </div>
    );
  };

  const renderCustomItem = (customItem) => {
    return (
      <div
        className={`col-span-1 p-4 rounded-md border border-gray-300 ${
          locked ? 'bg-gray-100' : 'bg-white'
        }`}
        onClick={onClick}
      >
        <div className="space-y-4 flex items-start">
          <div className="flex items-end">
            {locked ? <GiLockedChest /> : <ImUnlocked />}
          </div>
          <h4 className="flex items-center">
            <Flex className="items-center">
              {customItem.name === 'Weapon' ? (
                <Flex className="items-center">
                  <GiSwitchWeapon size={24} />
                  <p className="ml-2">Weapon</p>
                </Flex>
              ) : customItem.name === 'Armor' ? (
                <Flex className="items-center">
                  <GiChestArmor size={24} />

                  <p className="ml-2">Armor</p>
                </Flex>
              ) : customItem.name === 'Accessory' ? (
                <Flex className="items-center">
                  <GiGemChain size={24} />
                  <p className="ml-2">Accessory</p>
                </Flex>
              ) : (
                <Flex className="items-center">
                  <GiRomanShield size={24} />
                  <p className="ml-2">Shield</p>
                </Flex>
              )}
            </Flex>
          </h4>

          <ul>
            {customItem.effects.map((effect, index) => (
              <li key={index}>{effect}</li>
            ))}
          </ul>
        </div>{' '}
      </div>
    );
  };

  if (data.type === 'custom-item') {
    return renderCustomItem(data);
  } else if (data.type === 'weapon') {
    return renderWeapon(data);
  } else {
    return renderRandomItem(data);
  }
};

export default DynamicObjectComponent;
