import { useEffect, useState } from 'react';
import {
  Text,
  Box,
  Grid,
  Heading,
  Flex,
  GridItem,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Icon,
  Th,
  TableContainer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { MdOutlineGroups } from 'react-icons/md';
// import {
//   GiFishMonster,
//   GiMonsterGrasp,
//   GiAncientSword,
//   GiBroadDagger,
//   GiCrown,
//   GiCrossbow,
//   GiChestArmor,
//   GiLockedChest,
//   GiLockedDoor,
//   GiOpenGate,
//   GiDungeonGate,
//   GiGate,
//   GiMedievalGate,
//   GiSteeltoeBoots,
//   GiShorts,
//   GiShirt,
// } from 'react-icons/gi';
// import { CgBowl } from 'react-icons/cg';
// import { TbBow, TbHammer, TbSword } from 'react-icons/tb';
// import {
//   GrBaby,
//   GrDocumentTest,
//   GrAppleAppStore,
//   GrFavorite,
//   GrManual,
//   GrHomeRounded,
//   GrMagic,
//   GrImage,
//   GrJava,
//   GrInfo,
//   GrRaspberry,
//   GrMap,
//   GrInspect,
//   GrHorton,
//   GrRestroomMen,
//   GrOverview,
//   GrPhone,
//   GrInsecure,
//   GrFormTrash,
//   GrRestroom,
//   GrGremlin,
//   GrRestroomWomen,
//   GrRobot,
//   GrPaint,
//   GrRestaurant,
//   GrMysql,
//   GrPiedPiper,
//   GrIceCream,
//   GrSearch,
//   GrGlobe,
//   GrFirefox,
//   GrHome,
//   GrFan,
//   GrGroup,
//   GrFormView,
//   GrFlag,
//   GrSco,
//   GrDrawer,
//   GrRun,
//   GrDribbble,
//   GrEdit,
//   GrFilter,
//   GrDiamond,
//   GrBug,
//   GrDocker,
//   GrCube,
//   GrCertificate,
//   GrCodeSandbox,
//   GrCoatCheck,
//   GrCurrency,
//   GrCatalogOption,
//   GrCubes,
//   GrClearOption,
//   GrArticle,
//   GrCart,
//   GrCopy,
//   GrBitcoin,
//   GrConfigure,
//   GrBraille,
//   GrCoffee,
//   GrAttachment,
//   GrSettingsOption,
//   GrBook,
//   GrBrush,
//   GrCafeteria,
//   GrShield,
//   GrShop,
//   GrBar,
//   GrAttraction,
//   GrAnchor,
//   GrBasket,
//   GrAchievement,
//   GrAndroid,
//   GrApple,
// } from 'react-icons/gr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faDragon } from '@fortawesome/free-solid-svg-icons';
import QuadrantOne from './map/quadrantOne';
import QuadrantTwo from './map/quadrantTwo';
import QuadrantThree from './map/quadrantThree';
import QuadrantFour from './map/quadrantFour';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Map({
  monsters,
  objects,
  oppositionStartingPotion,
  playerStartingPotion,
  amountOfItems,
  dimensions,
}) {
  const [randomArray, setRandomArray] = useState([]);

  const { data, error } = useSWR('/api/structures', fetcher);

  if (!data) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;
  const mapSize = [1, 2, 3, 4];

  // function selectItem(number) {
  //   switch (number) {
  //     case 1:
  //       return GiSteeltoeBoots;
  //     case 2:
  //       return GiBroadDagger;
  //     case 3:
  //       return GiShirt;
  //     case 4:
  //       return GiMonsterGrasp;
  //     case 5:
  //       return GiLockedChest;
  //     case 6:
  //       return GiFishMonster;
  //     case 7:
  //       return TbBow;
  //     case 8:
  //       return GiShorts;
  //     case 9:
  //       return GrAchievement;
  //     case 10:
  //       return GrAnchor;
  //     case 11:
  //       return GrAndroid;
  //     case 12:
  //       return GrBaby;
  //     case 13:
  //       return GrSearch;
  //     case 14:
  //       return GiCrown;
  //     case 15:
  //       return GiShirt;
  //     case 16:
  //       return GrSco;
  //     case 17:
  //       return TbSword;
  //     case 18:
  //       return GrSettingsOption;
  //     case 19:
  //       return GrSco;
  //     case 20:
  //       return GrShop;
  //     case 21:
  //       return GrArticle;
  //     case 22:
  //       return GrBar;
  //     case 23:
  //       return GrAppleAppStore;
  //     case 24:
  //       return GiFishMonster;
  //     case 25:
  //       return GiMonsterGrasp;
  //     case 26:
  //       return GrBaby;
  //     case 27:
  //       return GiAncientSword;
  //     case 28:
  //       return GrDocumentTest;
  //     case 29:
  //       return GiBroadDagger;
  //     case 30:
  //       return GrAppleAppStore;
  //     case 31:
  //       return GiCrown;
  //     case 32:
  //       return GiCrossbow;
  //     case 33:
  //       return GrFavorite;
  //     case 34:
  //       return GrManual;
  //     case 35:
  //       return GrHomeRounded;
  //     case 36:
  //       return GrMagic;
  //     case 37:
  //       return GrImage;
  //     case 38:
  //       return GrJava;
  //     case 39:
  //       return GrInfo;
  //     case 40:
  //       return GrRaspberry;
  //     case 41:
  //       return GrShield;
  //     case 42:
  //       return GrMap;
  //     case 43:
  //       return GrInspect;
  //     case 44:
  //       return GrHorton;
  //     case 45:
  //       return GrRestroomMen;
  //     case 46:
  //       return GrOverview;
  //     case 47:
  //       return GrPhone;
  //     case 48:
  //       return GrInsecure;
  //     case 49:
  //       return GrFormTrash;
  //     case 50:
  //       return GrRestroom;
  //     case 51:
  //       return GrGremlin;
  //     case 52:
  //       return GrRestroomWomen;
  //     case 53:
  //       return GrRobot;
  //     case 54:
  //       return GrPaint;
  //     case 55:
  //       return GrRestaurant;
  //     case 56:
  //       return GrMysql;
  //     case 57:
  //       return GrPiedPiper;
  //     case 58:
  //       return GrIceCream;
  //     case 59:
  //       return GrGlobe;
  //     case 60:
  //       return TbHammer;
  //     case 61:
  //       return CgBowl;
  //     case 62:
  //       return GrFirefox;
  //     case 63:
  //       return GrHome;
  //     case 64:
  //       return GrFan;
  //     case 65:
  //       return GrGroup;
  //     case 66:
  //       return GrFormView;
  //     case 67:
  //       return GrFlag;
  //     case 68:
  //       return GrDrawer;
  //     case 69:
  //       return GrDribbble;
  //     case 70:
  //       return GrEdit;
  //     case 72:
  //       return GrFilter;
  //     case 73:
  //       return GrDiamond;
  //     case 74:
  //       return GrBug;
  //     case 75:
  //       return GrDocker;
  //     case 76:
  //       return GrRun;
  //     case 77:
  //       return GrCube;
  //     case 78:
  //       return GrCertificate;
  //     case 79:
  //       return GrCodeSandbox;
  //     case 80:
  //       return GrCoatCheck;
  //     case 81:
  //       return GrCurrency;
  //     case 82:
  //       return GrCatalogOption;
  //     case 83:
  //       return GrCubes;
  //     case 84:
  //       return GrClearOption;
  //     case 85:
  //       return GrArticle;
  //     case 86:
  //       return GrCart;
  //     case 87:
  //       return GiChestArmor;
  //     case 88:
  //       return GrCopy;
  //     case 89:
  //       return GrBitcoin;
  //     case 90:
  //       return GrConfigure;
  //     case 91:
  //       return GrBraille;
  //     case 92:
  //       return GrCoffee;
  //     case 93:
  //       return GiLockedChest;
  //     case 94:
  //       return GrAttachment;
  //     case 95:
  //       return GrBook;
  //     case 96:
  //       return GiLockedDoor;
  //     case 97:
  //       return GrBrush;
  //     case 98:
  //       return GrCafeteria;
  //     case 99:
  //       return GiDungeonGate;
  //     case 100:
  //       return GiGate;
  //     case 101:
  //       return GrBar;
  //     case 102:
  //       return GrAttraction;
  //     case 103:
  //       return GrAnchor;
  //     case 104:
  //       return GrBasket;
  //     case 105:
  //       return GiSteeltoeBoots;
  //     case 106:
  //       return GrAchievement;
  //     case 107:
  //       return GiShorts;
  //     case 108:
  //       return GiShirt;
  //     case 109:
  //       return Tfoot;
  //     case 110:
  //       return CgBowl;
  //     case 111:
  //       return GrAndroid;
  //     case 112:
  //       return GrApple;
  //     case 113:
  //       return GiMedievalGate;
  //     case 114:
  //       return GiOpenGate;
  //     default:
  //       return '';
  //   }
  // }
  return (
    <Box pt={8}>
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Heading as="h3" size="md">
                Map
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(3,1fr)' }}
              mt={24}
              mb={4}
              gap={1}
            >
              {mapSize.map((size, index) => (
                <GridItem
                  textAlign="center"
                  key={index}
                  colStart={{ lg: index === 3 ? 2 : '' }}
                  colEnd={{ lg: index === 3 ? 3 : '' }}
                >
                  <Box
                    height="200px"
                    bg="gray.200"
                    alignItems="center"
                    display="flex"
                    flex-direction="column"
                    justifyContent="center"
                    position="relative"
                    my={{ lg: index === 0 || index === 2 ? 24 : 0 }}
                    mt={{ lg: index === 1 || index === 3 ? '-6rem' : '' }}
                    mb={{ lg: index === 1 || index === 3 ? '-6rem' : '' }}
                  >
                    {oppositionStartingPotion === index && (
                      <Text fontSize="4xl" color="red.500">
                        <FontAwesomeIcon icon={faDragon} />
                      </Text>
                    )}
                    {playerStartingPotion === index && (
                      <Text fontSize="4xl" color="green.500">
                        <FontAwesomeIcon icon={faPeopleGroup} />
                      </Text>
                    )}
                    {index === 0 && (
                      <QuadrantOne objects={objects} structures={data} />
                    )}
                    {index === 1 && (
                      <QuadrantTwo objects={objects} structures={data} />
                    )}
                    {index === 2 && (
                      <QuadrantThree objects={objects} structures={data} />
                    )}
                    {index === 3 && (
                      <QuadrantFour objects={objects} structures={data} />
                    )}
                    {/* <Flex mt={2} alignItems="center">
                {randomItem1 === index && (
                  <Text fontSize="3xl" ml={2}> */}
                    {/* <Icon as={selectItem(randomNumber(1, 122))} /> */}
                    {/* r1
                  </Text>
                )}
                {randomItem2 === index && (
                  <Text fontSize="3xl" ml={2}> */}
                    {/* <Icon as={selectItem(randomNumber(1, 122))} /> */}
                    {/* r2
                  </Text>
                )}
                {randomItem3 === index && (
                  <Text fontSize="3xl" ml={2}> */}
                    {/* <Icon as={selectItem(randomNumber(1, 122))} /> */}
                    {/* r3
                  </Text>
                )}
                {randomItem4 === index && (
                  <Text fontSize="3xl" ml={2}>
                    <Icon as={selectItem(randomNumber(1, 122))} /> */}
                    {/* r4
                  </Text>
                )}
                {randomItem5 === index && (
                  <Text fontSize="3xl" ml={2}> */}
                    {/* <Icon as={selectItem(randomNumber(1, 122))} /> */}
                    {/* r5
                  </Text>
                )}
                {randomItem6 === index && (
                  <Text fontSize="3xl" ml={2}> */}
                    {/* <Icon as={selectItem(randomNumber(1, 122))} /> */}
                    {/* r6
                  </Text>
                )}
                {randomItem7 === index && (
                  <Text fontSize="3xl" ml={2}> */}
                    {/* <Icon as={selectItem(randomNumber(1, 122))} /> */}
                    {/* r7
                  </Text>
                )}
                {randomItem8 === index && (
                  <Text fontSize="3xl" ml={2}> */}
                    {/* <Icon as={selectItem(randomNumber(1, 122))} /> */}
                    {/* r8
                  </Text>
                )}
              </Flex> */}
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
