import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableIcon from './map/DraggableIcon';
import { FiChevronRight } from 'react-icons/fi';
import { Popover } from '@with-nx/react-ui';

import DroppableGridBox from './map/DroppableGridBox';
import { randomNumber } from '../lib/randomNumber';

import { useEncounterData } from '../hooks/useEncounterData';
import { GiDoubleDragon } from 'react-icons/gi';
import { MdGroups3, MdRefresh } from 'react-icons/md';

export default function Map({ randomDimension }) {
  // const { combinedObjects, error: FetchItemsError } = useFetchItems5e();
  const { data: encounterData, isLoading, error } = useEncounterData();

  const [updatedMapData, setUpdatedMapData] = useState(encounterData?.map_data);

  const terrainKeys = Object.keys(encounterData.terrain_type);
  const randomTerrainIndex = randomNumber(0, terrainKeys.length - 1);
  const randomTerrainType = terrainKeys[randomTerrainIndex];

  const weatherSeverityKeys = Object.keys(encounterData.weather_severity);
  const randomWeatherSeverityIndex = randomNumber(
    0,
    weatherSeverityKeys.length - 1
  );
  const randomWeatherSeverity = weatherSeverityKeys[randomWeatherSeverityIndex];

  const randomWeatherChange = randomNumber(1, 3);
  const weatherChange = encounterData.weather_change[randomWeatherChange];

  const timeOfDay = randomNumber(1, 3);
  const randomTimeOfDay = encounterData.time_of_day[timeOfDay];

  const objective = randomNumber(1, 3);
  const randomObjective = encounterData.objectives[objective];

  const [itemPositionsState, setItemPositionsState] = useState(
    encounterData.map_data.map((item) =>
      getUniqueRandomPositions(item.name.length + 1)
    )
  );
  const removeItem = (mapIndex, itemIndex) => {
    const currentItem = updatedMapData[mapIndex].icon[itemIndex];

    if (
      currentItem === FontAwesomeIcon &&
      (updatedMapData[mapIndex].name[itemIndex] === 'faDragon' ||
        updatedMapData[mapIndex].name[itemIndex] === 'faPeopleGroup')
    ) {
      return;
    }

    const confirmation = window.confirm(
      'Are you sure you want to remove this item from the map?'
    );
    if (confirmation) {
      const newMapData = [...updatedMapData];
      newMapData[mapIndex].name[itemIndex] = '';
      setUpdatedMapData(newMapData);

      const newItemPositions = [...itemPositionsState];
      newItemPositions[mapIndex] = getUniqueRandomPositions(
        newMapData[mapIndex].name.length + 1
      );
      setItemPositionsState(newItemPositions);
    }
  };

  function getPositionClasses(position, index) {
    const offset = index * 60;
    switch (position) {
      case 'top-left':
        return {
          position: 'absolute',
          top: 0,
          left: 0,
          marginTop: offset,
          marginLeft: offset,
        };
      case 'top-center':
        return {
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: offset,
        };
      case 'top-right':
        return {
          position: 'absolute',
          top: 0,
          right: 0,
          marginTop: offset,
          marginRight: offset,
        };
      case 'center-left':
        return {
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          marginLeft: offset,
        };
      case 'center-center':
        return {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        };
      case 'center-right':
        return {
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          marginRight: offset,
        };
      case 'bottom-left':
        return {
          position: 'absolute',
          bottom: 0,
          left: 0,
          marginBottom: offset,
          marginLeft: offset,
        };
      case 'bottom-center':
        return {
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          marginBottom: offset,
        };
      case 'bottom-right':
        return {
          position: 'absolute',
          bottom: 0,
          right: 0,
          marginBottom: offset,
          marginRight: offset,
        };
      case 'center-between-top-right':
        return {
          position: 'absolute',
          top: 0,
          right: '50%',
          transform: 'translateY(-50%) translateX(50%)',
          marginTop: offset,
        };
      case 'center-between-top-left':
        return {
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateY(-50%) translateX(-50%)',
          marginTop: offset,
        };
      case 'center-between-bottom-right':
        return {
          position: 'absolute',
          bottom: 0,
          right: '50%',
          transform: 'translateY(50%) translateX(50%)',
          marginBottom: offset,
        };
      case 'center-between-bottom-left':
        return {
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateY(50%) translateX(-50%)',
          marginBottom: offset,
        };
      default:
        return {};
    }
  }

  function getUniqueRandomPositions(itemCount) {
    const positions = [
      'top-left',
      'top-center',
      'top-right',
      'center-left',
      'center-center',
      'center-right',
      'bottom-left',
      'bottom-center',
      'bottom-right',
      'center-between-top-right',
      'center-between-top-left',
      'center-between-bottom-right',
      'center-between-bottom-left',
    ];

    const uniquePositions = [];
    for (let i = 0; i < itemCount; i++) {
      let randomIndex = Math.floor(Math.random() * positions.length);
      while (uniquePositions.includes(positions[randomIndex])) {
        randomIndex = Math.floor(Math.random() * positions.length);
      }
      uniquePositions.push(positions[randomIndex]);
      positions.splice(randomIndex, 1);
    }

    return uniquePositions;
  }

  const handleAddItem = (item, targetIndex) => {
    const newUpdatedMapData = [...updatedMapData];
    if (newUpdatedMapData[targetIndex]) {
      newUpdatedMapData[targetIndex].name.push(item.name);
      newUpdatedMapData[targetIndex].icon.push(item.icon);
    }
    setUpdatedMapData(newUpdatedMapData);

    const newItemPositions = [...itemPositionsState];
    newItemPositions[targetIndex] = getUniqueRandomPositions(
      newUpdatedMapData[targetIndex]?.name.length + 1 || 0
    );
    setItemPositionsState(newItemPositions);
  };

  const disadvantageAttackIcons = ['TbBow', 'GiIceSpellCast', 'GiSlingshot'];

  useEffect(() => {
    if (encounterData) {
      setUpdatedMapData(encounterData.map_data);
    }
  }, [encounterData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!encounterData) {
    return <div>No data available</div>;
  }

  function refreshItems() {
    const newItemPositions = updatedMapData.map((item) =>
      getUniqueRandomPositions(item.name.length + 1)
    );
    setItemPositionsState(newItemPositions);
  }

  const handleDrop = (item, targetIndex) => {
    const sourceIndex = parseInt(item.id.split('-')[2]);
    const itemIndex = parseInt(item.id.split('-')[1]);

    const newUpdatedMapData = [...updatedMapData];
    if (newUpdatedMapData[sourceIndex]) {
      newUpdatedMapData[sourceIndex].name[itemIndex] = '';
    }
    if (newUpdatedMapData[targetIndex]) {
      newUpdatedMapData[targetIndex].name.push(item.name);
      newUpdatedMapData[targetIndex].icon.push(item.icon);
    }
    setUpdatedMapData(newUpdatedMapData);

    const newItemPositions = [...itemPositionsState];
    newItemPositions[sourceIndex] = getUniqueRandomPositions(
      newUpdatedMapData[sourceIndex]?.name.length + 1 || 0
    );
    newItemPositions[targetIndex] = getUniqueRandomPositions(
      newUpdatedMapData[targetIndex]?.name.length + 1 || 0
    );
    setItemPositionsState(newItemPositions);
  };

  const popoverTrigger = (
    <div className="flex items-center">
      <p className="uppercase text-xs">details</p>
      <FiChevronRight />
    </div>
  );

  const mapPopoverContent = (
    <div className="w-64 p-3 card border">
      <div className="space-y-1 text-left">
        <p className="text-sm">Dimensions: {randomDimension}</p>
        <p className="text-sm">Terrain: {randomTerrainType}</p>
        <p className="text-sm">Weather: {randomWeatherSeverity}</p>
        <p className="text-sm">Weather Change: {weatherChange}</p>
        <p className="text-sm">Time of Day: {randomTimeOfDay}</p>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <div>
        <div className="flex items-center space-x-4">
          <button
            className="w-auto border-none text-green-500 hover:text-indigo-500 px-0"
            onClick={refreshItems}
          >
            <MdRefresh size={24} />
          </button>
          <p>MAP</p>
          <button className="w-auto flex items-center border-none pl-0 font-light text-xs">
            <Popover trigger={popoverTrigger} content={mapPopoverContent} />
          </button>
        </div>
        <p>OBJECTIVE: {randomObjective}</p>
      </div>

      <DndProvider backend={HTML5Backend}>
        <div className="map h-[1600px] w-[1600px] relative">
          <div className={`h-full w-full p-8`}>
            <div className={`grid grid-cols-12 mt-6 px-64 w-full`}>
              {updatedMapData.map((item, index) => {
                const itemPositions = itemPositionsState[index];

                return (
                  <DroppableGridBox
                    key={`${index}`}
                    onDrop={(item) => handleDrop(item, index)}
                    onAddItem={(item) => handleAddItem(item, index)}
                  >
                    {item.name.map((itemName, itemIndex) => {
                      if (!itemName) return null;
                      const positionClasses = getPositionClasses(
                        itemPositions[itemIndex],
                        itemIndex
                      );
                      const Icon = item.icon[itemIndex];

                      return (
                        <div
                          key={`${itemName}-${itemIndex}`}
                          // style={positionClasses}
                        >
                          {/* <DraggableIcon
                            id={`${itemName}-${itemIndex}`}
                            icon={Icon}
                            name={itemName}
                            onRemove={() => removeItem(index, itemIndex)}
                          /> */}
                        </div>
                      );
                    })}

                    {index === 4 && (
                      <div
                      // style={getPositionClasses(
                      //   itemPositions[item.name.length],
                      //   0
                      // )}
                      >
                        {/* <DraggableIcon
                          id={`player-group-${index}`}
                          icon={GiDoubleDragon}
                          name="faDragon"
                          customIconProps={{ icon: GiDoubleDragon }}
                        /> */}
                      </div>
                    )}

                    {item.isEnemy && (
                      <div
                      // style={getPositionClasses(
                      //   itemPositions[item.name.length],
                      //   0
                      // )}
                      >
                        {/* <DraggableIcon
                          id={`player-group-${index}`}
                          icon={MdGroups3}
                          name="faPeopleGroup"
                          customIconProps={{ icon: MdGroups3 }}
                        /> */}
                      </div>
                    )}
                  </DroppableGridBox>
                );
              })}
            </div>
          </div>
        </div>
      </DndProvider>
    </div>
  );
}
