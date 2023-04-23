import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Popover, Progress } from '@with-nx/react-ui';

import { Encounter } from '../../types/types';
import withAuth from '../../hooks/withAuth';
import ConquestLayout from '../../components/layout/ConquestLayout';
import { fetchDataById } from '../../utils/fetchDataById';
import { useModal } from '@with-nx/react-hooks';
import ReusableSection from '../../components/ReusableSection';
import Map from '../../components/Map';
import { useEncounterData } from '../../hooks/useEncounterData';
import { randomNumber } from '../../lib/randomNumber';
import CharacterStatsCard from '../../components/map/CharacterStatsCard';

import { generateEntity } from '../../utils/entity/generateEntity';

// icons
import { GiIronCross } from 'react-icons/gi';
import { AiOutlineEye } from 'react-icons/ai';
import { GrChatOption } from 'react-icons/gr';
import { FaShieldAlt, FaUserNinja, FaHammer } from 'react-icons/fa';
import { MdOutlineDarkMode } from 'react-icons/md';

//image
import DesertSvg from '../../components/map/svgs/DesertSvg';

type EncounterPageProps = {
  encounter: Encounter;
};

// export const EncounterPage = ({ encounter }: EncounterPageProps) => {
//   const { data: encounterData, isLoading, error } = useEncounterData();

//   const [isEditing, setIsEditing] = useState(false);

//   const { isShowing, toggle } = useModal();

//   const [entity, setEntity] = useState(null);

//   const handleGenerateEntityClick = () => {
//     // Replace 'exampleEntityType' with the desired EntityType value
//     const generatedEntity = generateEntity(2);
//     setEntity(generatedEntity);
//   };

//   useEffect(() => {
//     handleGenerateEntityClick();
//   }, []); // Pass an empty dependency array to run this effect only on mount

//   // const { combinedObjects, loading, error } = useFetchItems5e();

//   const handleEdit = () => {
//     toggle();
//     setIsEditing(!isEditing);
//   };

//   function handleEncounterUpdate(e) {
//     e.preventDefault();
//     // createEncounter();
//   }

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;

//     const numericFields = [
//       'player_count',
//       'player_experience_start',
//       'encounter_adjusted_experience',
//       'encounter_experience',
//     ];

//     const parsedValue = numericFields.includes(name) ? Number(value) : value;

//     // _encounterData((prevState) => ({
//     //   ...prevState,
//     //   [name]: parsedValue,
//     // }));
//   };

//   // const handleEncounterSave = (e) => {
//   //   e.preventDefault();
//   //   const res = fetch(`http://localhost:3333/api/campaign/${campaign.id}`, {
//   //     method: 'PUT',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //       Authorization: `Bearer ${token}`,
//   //     },
//   //     body: JSON.stringify(campaignData),
//   //   });

//   //   router.reload(`/campaigns/${campaign.id}`);
//   // };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (!encounterData) {
//     return <div>No data available</div>;
//   }

//   const randomEnemyPosition = randomNumber(1, 3);
//   const enemyPosition = null;
//   // encounterData.potential_opposition_starting_positions[randomEnemyPosition];

//   const popoverTrigger = (
//     <div className="flex items-center">
//       <p className="uppercase text-xs">details</p>
//       <FiChevronRight />
//     </div>
//   );

//   const xpPopoverContent = (
//     <div className="w-64 p-3">
//       <div className="space-y-1 text-left">
//         <p className="text-sm">Player Count: {encounterData.player_count}</p>
//         <p className="text-sm">
//           Placer Experience Start: {encounterData.player_experience_start}
//         </p>
//         <p className="text-sm">
//           Encounter Adjusted Experience:
//           {encounterData.encounter_adjusted_experience}
//         </p>
//         <p className="text-sm">
//           Encounter Experience: {encounterData.encounter_experience}
//         </p>
//       </div>
//     </div>
//   );

//   const passivePerceptionPopoverContent = (
//     <div className="w-96 p-3 card">
//       <div className="flex items-center space-x-4">
//         {/* {encounterData.characters.map((character) => {
//           if (character.icon === 'GiIronCross') {
//             return (
//               <p key={character.name} className="flex items-center space">
//                 <GiIronCross className="mr-2" />
//                 {character.stats.passive_perception.base +
//                   character.stats.passive_perception.modifier}
//               </p>
//             );
//           } else if (character.icon === 'FaUserNinja') {
//             return (
//               <p key={character.name} className="flex items-center space">
//                 <FaUserNinja className="mr-2" />
//                 {character.stats.passive_perception.base +
//                   character.stats.passive_perception.modifier}
//               </p>
//             );
//           } else if (character.icon === 'FaShieldAlt') {
//             return (
//               <p key={character.name} className="flex items-center space">
//                 <FaShieldAlt className="mr-2" />
//                 {character.stats.passive_perception.base +
//                   character.stats.passive_perception.modifier}
//               </p>
//             );
//           } else if (character.icon === 'FaHammer') {
//             return (
//               <p key={character.name} className="flex items-center space">
//                 <FaHammer className="mr-2" />
//                 {character.stats.passive_perception.base +
//                   character.stats.passive_perception.modifier}
//               </p>
//             );
//           }
//         })} */}
//       </div>
//     </div>
//   );

//   const languagesPopoverContent = (
//     <div className="w-96 p-3 card">
//       <div className="space-y-1 text-left">
//         {/* {encounterData.characters.map((character) => {
//           if (character.icon === 'GiIronCross') {
//             return (
//               <p key={character.name} className="flex items-center space">
//                 <GiIronCross className="mr-2" />
//                 {character.stats.languages.base
//                   .map((language) => language)
//                   .join(', ')}
//               </p>
//             );
//           } else if (character.icon === 'FaUserNinja') {
//             return (
//               <p key={character.name} className="flex items-center space">
//                 <FaUserNinja className="mr-2" />
//                 {character.stats.languages.base
//                   .map((language) => language)
//                   .join(', ')}
//               </p>
//             );
//           } else if (character.icon === 'FaShieldAlt') {
//             return (
//               <p key={character.name} className="flex items-center space">
//                 <FaShieldAlt className="mr-2" />
//                 {character.stats.languages.base
//                   .map((language) => language)
//                   .join(', ')}
//               </p>
//             );
//           } else if (character.icon === 'FaHammer') {
//             return (
//               <p key={character.name} className="flex items-center space">
//                 <FaHammer className="mr-2" />
//                 {character.stats.languages.base
//                   .map((language) => language)
//                   .join(', ')}
//               </p>
//             );
//           }
//         })} */}
//       </div>
//     </div>
//   );

//   const darkVisionPopoverContent = (
//     <div className="w-96 p-3 card">
//       <div className="flex items-center space-x-4">
//         {/* {encounterData.characters.map((character) => {
//           if (character.icon === 'GiIronCross') {
//             return (
//               <p key={character.name} className="flex items-center space">
//                 <GiIronCross className="mr-2" />
//                 {character.stats.dark_vision.base}ft
//               </p>
//             );
//           } else if (character.icon === 'FaUserNinja') {
//             return (
//               <p key={character.name} className="flex items-center space">
//                 <FaUserNinja className="mr-2" />
//                 {character.stats.dark_vision.base}ft
//               </p>
//             );
//           } else if (character.icon === 'FaShieldAlt') {
//             return (
//               <p key={character.name} className="flex items-center space">
//                 <FaShieldAlt className="mr-2" />
//                 {character.stats.dark_vision.base}ft
//               </p>
//             );
//           } else if (character.icon === 'FaHammer') {
//             return (
//               <p key={character.name} className="flex items-center space">
//                 <FaHammer className="mr-2" />
//                 {character.stats.dark_vision.base}ft
//               </p>
//             );
//           }
//         })} */}
//       </div>
//     </div>
//   );

//   const introPopoverContent = (
//     <div className="w-96 p-3 border">
//       <div className="space-y-1 text-left">
//         <p className="text-lg">{encounterData.intro}</p>
//       </div>
//     </div>
//   );

//   const randomDimensionIndex = randomNumber(0, 3);
//   const randomDimension = encounterData.map_dimensions[randomDimensionIndex];

//   const createCharacterPopover = (character) => {
//     const trigger = (
//       <div className="flex items-center">
//         <p className="flex items-center space">
//           <span className="mr-2 flex items-center">
//             {character.icon === 'FaUserNinja' && (
//               <FaUserNinja className="mr-2" />
//             )}
//             {character.icon === 'FaShieldAlt' && (
//               <FaShieldAlt className="mr-2" />
//             )}
//             {character.icon === 'FaHammer' && <FaHammer className="mr-2" />}
//             {character.icon === 'GiIronCross' && (
//               <GiIronCross className="mr-2" />
//             )}
//             {character.name}
//           </span>
//         </p>
//       </div>
//     );

//     const content = <CharacterStatsCard character={character} />;

//     return <Popover key={character.name} trigger={trigger} content={content} />;
//   };

//   const entityData = {
//     name: entity.name,
//     icon: entity.icon,
//     role: entity.role,
//     level: entity.level,
//     currentHitpoints: entity.currentHitpoints,
//     totalHitpoints: entity.totalHitpoints,
//     stats: entity.stats,
//     avatar: entity.avatar,
//     skills: entity.skills,
//   };

//   const npcPopoverContent = (entityData) => {
//     const trigger = (
//       <div className="flex items-center">
//         <p className="uppercase text-xs">details</p>
//         <FiChevronRight />
//       </div>
//     );

//     <button onClick={handleGenerateEntityClick} className="w-auto">
//       Generate Entity
//     </button>;
//     const content = <CharacterStatsCard character={entityData} />;
//     return (
//       <Popover key={entityData.name} trigger={trigger} content={content} />
//     );
//   };

//   return (
//     <ConquestLayout>
//       <div className="px-">
//         <div className={`${isEditing ? 'bg-editing' : ''}`}>
//           <ReusableSection>
//             {/* <nav className="">
//             <ul className="flex justify-between py-4 ">
//               <li className="flex flex-col justify-center items-center">
//                 <button className="btn-nav-icon-menu">
//                   <FiFlag size={20} className="mx-auto" />
//                   <p className="text-sm">Objective</p>
//                   <p className="text-xs text-success font-semibold">
//                     {encounterData.objective}
//                   </p>
//                 </button>
//               </li>
//               <li className="flex flex-col justify-center items-center">
//                 <button className="btn-nav-icon-menu">
//                   <FiMap size={20} className="mx-auto" />
//                   <p className="text-sm">Map</p>
//                 </button>
//               </li>
//               <li className="flex flex-col justify-center items-center">
//                 <button className="btn-nav-icon-menu">
//                   <FiBox size={20} className="mx-auto" />
//                   <p className="text-sm">Items</p>
//                 </button>
//               </li>
//               <li className="flex flex-col justify-center items-center">
//                 <button className="btn-nav-icon-menu">
//                   <RiCaravanLine size={20} className="mx-auto" />
//                   <p className="text-sm">Caravan</p>
//                 </button>
//               </li>
//               <li className="flex flex-col justify-center items-center">
//                 <button className="btn-nav-icon-menu">
//                   <GiMonsterGrasp size={20} className="mx-auto" />
//                   <p className="text-sm">Monsters</p>
//                 </button>
//               </li>
//             </ul>
//           </nav> */}
//           </ReusableSection>
//         </div>
//         {isEditing ? (
//           <div className="bg-editing pt-4 h-screen rounded">
//             <div className="w-full px-8">
//               <div className="grid grid-cols-12 gap-24 w-full">
//                 <div className="flex flex-col col-span-2">
//                   <div className="flex items-center space-x-2">
//                     <h3>{encounterData.campaign_name}</h3>
//                     <p>#{encounter.id}</p>
//                     <button onClick={handleEdit} className="btn-primary w-auto">
//                       save
//                     </button>
//                   </div>
//                   <div>
//                     <div className="flex items-center space-x-4">
//                       <p>XP</p>
//                       <button className="w-auto flex items-center border-none pl-0 font-light text-xs">
//                         <Popover
//                           trigger={popoverTrigger}
//                           content={xpPopoverContent}
//                         />
//                       </button>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="flex items-center space-x-4">
//                       <p>INTRO</p>
//                       <button className="w-auto flex items-center border-none pl-0 font-light text-xs">
//                         <Popover
//                           trigger={popoverTrigger}
//                           content={introPopoverContent}
//                         />
//                       </button>
//                     </div>
//                   </div>
//                   <div className="mt-2">
//                     <div className="flex flex-col space-y-2">
//                       <p className="uppercase">Characters</p>
//                       {encounterData?.characters.map((character) =>
//                         createCharacterPopover(character)
//                       )}
//                     </div>
//                   </div>
//                   <div className="my-24 space-y-4">
//                     <div className="flex items-center">
//                       <AiOutlineEye size={24} className="mr-4" />
//                       <div className="flex flex-col">
//                         <p>Passive Perception</p>
//                         <Popover
//                           trigger={popoverTrigger}
//                           content={passivePerceptionPopoverContent}
//                         />
//                       </div>
//                     </div>
//                     <div className="flex items-center">
//                       <GrChatOption size={24} className="mr-4" />
//                       <div className="flex flex-col">
//                         <p>Languages</p>
//                         <Popover
//                           trigger={popoverTrigger}
//                           content={languagesPopoverContent}
//                         />
//                       </div>
//                     </div>
//                     <div className="flex items-center">
//                       <MdOutlineDarkMode size={24} className="mr-4" />
//                       <div className="flex flex-col">
//                         <p>Dark Vision</p>
//                         <Popover
//                           trigger={popoverTrigger}
//                           content={darkVisionPopoverContent}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-12 my-12">
//                     <div className="flex items-center space-x-2">
//                       <Progress value={27} maxValue={100} type="circular" />
//                       <div className="flex flex-col text-center">
//                         <p>3600</p>
//                         <p className="text-xs">til next level</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card">
//                     <div className="flex items-center space-x-8 w-full">
//                       <div className="flex flex-col">
//                         <p>Sales Figures</p>
//                         <p className="font-bold">$10,430</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-span-9">
//                   <div className="flex items-center space-x-2">
//                     <p className="">NPC</p>
//                     {npcPopoverContent(entityData)}
//                   </div>
//                   <div className="flex items-center justify-center">
//                     <div className="border h-px w-full" />
//                     <span className="mx-4">{randomDimension}&nbsp;ft</span>
//                     <div className="border h-px w-full" />
//                   </div>
//                   <DesertSvg mapDimensions={randomDimension}>
//                     <div className="flex justify-center items-center h-full w-full">
//                       <Map
//                         monsters={encounterData.monsters}
//                         amountOfItems={encounterData.amountOfItems}
//                         objects={encounterData.objects}
//                         oppositionStartingPotion={enemyPosition}
//                         mapData={encounterData.map_data}
//                         dimensions={encounterData.sharedMapDimensions}
//                         difficulty={encounterData.selectedDifficulty}
//                         terrainType={encounterData.selectedTerrainType}
//                         weatherSeverity={encounterData.selectedWeatherSeverity}
//                         weatherChange={encounterData.selectedWeatherChange}
//                         timeOfDay={encounterData.selectedTimeOfDay}
//                         objectives={encounterData.selectedObjective}
//                         weatherType={encounterData.selectedWeatherType}
//                         challengeRating={encounterData.challengeRating}
//                         hasWeather={encounterData.selectedHasWeather}
//                         randomDimension={randomDimension}
//                       />
//                     </div>
//                   </DesertSvg>
//                 </div>
//                 <div className="col-span-1" />
//               </div>
//             </div>
//           </div>
//         ) : (
//           <ReusableSection>
//             <div className="flex items-center justify-between py-4">
//               <p>Encounter started</p>
//               <button
//                 onClick={handleEdit}
//                 className="w-auto h-min border-none align-top "
//               >
//                 Edit
//               </button>
//             </div>
//           </ReusableSection>
//         )}
//       </div>
//     </ConquestLayout>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { id } = context.params;
//   const encounterId = Number(id);
//   const encounter = await fetchDataById('encounters', encounterId);

//   return {
//     props: {
//       encounter,
//     },
//   };
// };

// export default withAuth(EncounterPage);

export default function Home() {
  return <h1>encounter id</h1>;
}
