import Image from 'next/image';
import { GiIronCross } from 'react-icons/gi';
import { FaShieldAlt, FaUserNinja, FaHammer } from 'react-icons/fa';
import { BsShield } from 'react-icons/bs';
import { BiRectangle } from 'react-icons/bi';
import { TbWeight } from 'react-icons/tb';
import characterStatsCardStyles from './characterStatsCard.module.css';
import { Character } from '../../types/types';

const CharacterStatsCard = ({ character }: { character: Character }) => {
  const {
    name,
    icon,
    role,
    level,
    currentHitpoints,
    totalHitpoints,
    stats,
    avatar,
    skills,
  } = character;

  const StatIcon = ({ type, value, icon, baseValue, modifier }) => {
    return (
      <div className="flex flex-col items-center justify-center relative">
        <div className="flex flex-col items-center">
          {modifier !== undefined && (
            <p className="text-xl font-bold">
              {modifier >= 0 ? `+${modifier}` : modifier}
            </p>
          )}
          <p className="text-xs font-bold rounded-full border-2 px-2">
            {baseValue}
          </p>
          <p className="text-xs">{type}</p>
        </div>
      </div>
    );
  };

  const Saves = ({ saves }) => {
    const saveTypes = ['str', 'dex', 'con', 'wis', 'cha', 'int'];

    return (
      <>
        <h3>Saving Throws</h3>
        <div className="grid grid-cols-6 gap-4 items-center justify-between space-x-2 text-center">
          {saveTypes.map((saveType) => {
            const save = saves[saveType];
            return (
              <StatIcon
                key={saveType}
                type={saveType.toUpperCase()}
                baseValue={save.base}
                modifier={save.modifier}
                value={true}
                icon={true}
              />
            );
          })}
        </div>
      </>
    );
  };

  const Skills = ({ skills }) => {
    return (
      <div className="mt-4">
        <h3>Skills</h3>
        <div className="grid grid-cols-1 items-center">
          {skills.map((skill) => {
            const modifier = skill.bonus ? skill.modifier + 2 : skill.modifier;
            const sign = modifier >= 0 ? '+' : '-';
            const advantage = skill.advantage ? ' (Advantage)' : '';
            const disadvantage = skill.disadvantage ? ' (Disadvantage)' : '';

            return (
              <div
                key={skill.name}
                className="flex items-center justify-between"
              >
                <div
                  className={`text-sm text-gray-400 ${
                    skill.prof ? 'font-bold text-black' : ''
                  }`}
                >
                  {skill.name} {skill.prof ? ' (Proficient)' : ''}
                </div>

                <div className="text-lg font-bold">
                  {sign}
                  {Math.abs(modifier)}&nbsp;
                  {advantage ? 'ADV' : ''} {disadvantage ? 'DIS' : ''}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-[36rem] h-auto card border border-primary overflow-hidden">
      {/* <pre>{JSON.stringify(character, null, 2)}</pre> */}
      <div className="grid grid-cols-2 gap-12">
        <div id="left-character-grid">
          <div className="flex items-center justify-between space-x-2 py-2">
            {icon === 'FaUserNinja' && (
              <FaUserNinja size={24} className="mr-2" />
            )}
            {icon === 'FaShieldAlt' && (
              <FaShieldAlt size={24} className="mr-2" />
            )}
            {icon === 'FaHammer' && <FaHammer size={24} className="mr-2" />}
            {icon === 'GiIronCross' && (
              <GiIronCross size={24} className="mr-2" />
            )}
            <div className="flex flex-col">
              <p className="text-center font-semibold">{name}</p>
              <p className="text-xs flex items-center">
                {role} | {level}
              </p>
            </div>
            <p>
              {currentHitpoints}/{totalHitpoints}
            </p>
          </div>

          <div className="grid grid-cols-6 gap-4 items-center justify-between space-x-2 py-2 text-center">
            <StatIcon
              type="AC"
              value={stats.ac}
              icon={icon}
              baseValue={stats.ac.base}
              modifier={stats.ac.modifier}
            />
            <StatIcon
              type="PROF"
              value={stats.prof}
              icon={icon}
              baseValue={stats.prof.base}
              modifier={stats.prof.modifier}
            />

            <div className="col-span-2 !mx-0 flex justify-center">
              <Image src={avatar} height={75} width={75} alt={name} />
            </div>

            <StatIcon
              type="INIT"
              value={stats.initiative}
              icon={icon}
              baseValue={stats.initiative.base}
              modifier={stats.initiative.modifier}
            />
            <StatIcon
              type="SPEED"
              value={stats.speed}
              icon={icon}
              baseValue={stats.speed.base}
              modifier={stats.speed.modifier}
            />
            <StatIcon
              type="STR"
              baseValue={stats.str.base}
              modifier={stats.str.modifier}
              icon={icon}
              value={stats.speed}
            />
            <StatIcon
              type="DEX"
              value={stats.dex}
              icon={icon}
              baseValue={stats.dex.base}
              modifier={stats.dex.modifier}
            />
            <StatIcon
              type="CON"
              value={stats.con}
              icon={icon}
              baseValue={stats.con.base}
              modifier={stats.con.modifier}
            />
            <StatIcon
              type="INT"
              value={stats.int}
              icon={icon}
              baseValue={stats.int.base}
              modifier={stats.int.modifier}
            />
            <StatIcon
              type="WIS"
              value={stats.wis}
              icon={icon}
              baseValue={stats.wis.base}
              modifier={stats.wis.modifier}
            />
            {/* <StatIcon
              type="CHA"
              value={stats.wis}
              icon={icon}
              baseValue={stats.cha.base}
              modifier={stats.cha.modifier}
            /> */}
          </div>

          <div className="space-y-2 mt-4">
            <Saves saves={stats.saves} />
          </div>
          <div className="space-y-2 mt-4">
            <p>
              <span className="font-semibold">Languages</span>:{' '}
              {/* {stats?.languages?.base.map((language) => language).join(', ')} */}
            </p>
            <p>Proficiencies</p>
            <p>
              <span className="font-semibold">Weapons</span>:{' '}
              {/* {stats?.proficiencies?.weapons.map((weapon) => weapon).join(', ')} */}
            </p>
            <p>
              <span className="font-semibold">Armor</span>:{' '}
              {/* {stats?.proficiencies?.armor.map((armor) => armor).join(', ')} */}
            </p>
            <p>
              <span className="font-semibold">Tools</span>:{' '}
              {/* {stats?.proficiencies?.tools.map((tool) => tool).join(', ')} */}
            </p>
            <div className="w-full">
              <span className="font-semibold">Notes</span>:
            </div>
          </div>
        </div>
        <div id="right-character-grid">
          <h3>Senses</h3>
          <div className="grid grid-cols-2 item-center text-center">
            {/* <StatIcon
              type="PASSIVE PERCEPTION"
              value={stats.passive_perception}
              icon={icon}
              baseValue={stats.passive_perception.base}
              modifier={stats.passive_perception.modifier}
            />
            <StatIcon
              type="DARK VISION"
              value={stats.dark_vision}
              icon={icon}
              baseValue={stats.dark_vision.base}
              modifier={stats.dark_vision.modifier}
            /> */}
          </div>
          {/* <Skills skills={skills} /> */}
        </div>
      </div>
    </div>
  );
};

export default CharacterStatsCard;
