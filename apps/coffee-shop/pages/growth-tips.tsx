import React from 'react';
import CoffeeShopLayout from '../components/CoffeeShopLayout';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';
import Link from 'next/link';

import ReusableSection from '../components/ReusableSection';
import Writer from '../public/images/writer.png';
import CoffeeGrowth from '../public/images/coffee_growth.png';
import GrowthTipsHero from '../public/images/growth_tips_hero.jpg';
import PostTwo from '../public/images/post_2.jpg';
import WriterThree from '../public/images/writer-3.png';
import PostThree from '../public/images/post_3.jpg';
import WriterTwo from '../public/images/writer-2.png';

const GrowthTips = () => {
  return (
    <CoffeeShopLayout>
      <div className="pt-24 pb-40 lg:pt-40 lg:pb-60 flex justify-center">
        <ul className="mx-8 w-full md:mx-auto md:w-11/12 lg:mx-auto">
          <Link
            className="inline-block bg-white rounded-md transition-all duration-300 hover:bg-yellow-100 shadow-sm p-4 lg:p-8  mb-16 md:mb-12 border  border-gray-200"
            href="/growth-tips"
          >
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-5">
              <div className="flex min-h-0 flex-col col-start-1 col-end-3 md:mr-6">
                <div className="mt-2 md:mt-0">
                  <span className="uppercase font-semibold text-gray-700 text-xs">
                    Ideas
                  </span>
                  <span className="text-gray-400 mx-2 font-medium text-sm">
                    August 20, 2021
                  </span>
                </div>
                <h1 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
                  How to Use Organic SEO
                </h1>
                <p className="text-sm mb-6 flex-grow text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus eligendi libero sit nihil tempora, totam
                  reprehenderit aliquam beatae obcaecati ratione. Libero
                  consequatur cumque magnam ipsam quae sequi laudantium pariatur
                  veritatis?
                </p>
                <Flex className="items-center">
                  <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      className="w-full h-full object-cover object-bottom"
                      src={Writer}
                      alt="A smiling female George Orwell."
                    />
                  </div>
                  <div className="ml-2 text-xs">
                    <span className="block font-semibold text-gray-700">
                      John Something
                    </span>
                    <span className="block font-medium text-gray-500">
                      Editor
                    </span>
                  </div>
                </Flex>
              </div>
              <div className="rounded-md overflow-hidden h-48 lg:h-full lg:min-h-0 lg:col-start-3 lg:col-end-6">
                <Image
                  className="w-full h-full object-cover object-bottom"
                  src={GrowthTipsHero}
                  alt="Waves breaking on a perfect shore."
                />
              </div>
            </div>
          </Link>

          <div className="md:flex">
            <div className="flex flex-col md:w-1/2 md:mr-4">
              <Link
                href="/growth-tips"
                className="inline-block bg-white rounded-md transition-all duration-300 hover:bg-yellow-100 shadow-sm p-4  mb-16 md:mb-12 border  border-gray-200"
              >
                <div className="rounded-md overflow-hidden h-48 lg:h-72">
                  <Image
                    className="h-full w-full object-cover rounded-md"
                    src={PostTwo}
                    alt="A cool rubber duck in a blue swimming pool."
                  />
                </div>
                <div className="flex flex-col ">
                  <div className="mt-2">
                    <span className="uppercase font-semibold text-gray-700 text-xs">
                      Productivity
                    </span>
                    <span className="text-gray-400 mx-2 font-medium text-sm">
                      Jan 9, 2021
                    </span>
                  </div>
                  <h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
                    How to Source the Best Beans
                  </h2>
                  <p className="text-sm mb-6 flex-grow text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus eligendi libero sit nihil tempora, totam
                    reprehenderit aliquam beatae obcaecati ratione. Libero
                    consequatur cumque magnam ipsam quae sequi laudantium
                    pariatur veritatis?{' '}
                  </p>
                  <Flex className="items-center">
                    <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        className="w-full h-full object-cover object-bottom"
                        src={WriterThree}
                        alt="A smiling Satoshi Nakamoto."
                      />
                    </div>
                    <div className="ml-2 text-xs">
                      <span className="block font-semibold text-gray-700">
                        Kyle Chasse
                      </span>
                      <span className="block font-medium text-gray-500">
                        Chief Technical Writer
                      </span>
                    </div>
                  </Flex>
                </div>
              </Link>
            </div>

            <div className="flex flex-col md:w-1/2 md:ml-4">
              <Link
                href="/growth-tips"
                className="inline-block bg-white rounded-md transition-all duration-300 hover:bg-yellow-100 shadow-sm p-4  mb-16 md:mb-12 border  border-gray-200"
              >
                <div className="rounded-md overflow-hidden h-48 lg:h-72">
                  <Image
                    className="h-full w-full object-cover rounded-md"
                    src={PostThree}
                    alt="A blue hotel swimming pool flanked by two palm trees."
                  />
                </div>
                <div className="flex flex-col">
                  <div className="mt-2">
                    <span className="uppercase font-semibold text-gray-700 text-xs">
                      Advice
                    </span>
                    <span className="text-gray-400 mx-2 font-medium text-sm">
                      Dec 2, 2020
                    </span>
                  </div>
                  <h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
                    Handling Fiery Clients
                  </h2>
                  <p className="text-sm mb-6 flex-grow text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus eligendi libero sit nihil tempora, totam
                    reprehenderit aliquam beatae obcaecati ratione. Libero
                    consequatur cumque magnam ipsam quae sequi laudantium
                    pariatur veritatis?
                  </p>
                  <Flex className="items-center">
                    <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        className="w-full h-full object-cover object-bottom"
                        src={WriterTwo}
                        alt="A smiling female Jack Johnson."
                      />
                    </div>
                    <div className="ml-2 text-xs">
                      <span className="block font-semibold text-gray-700">
                        Obi-Wan Kenobi
                      </span>
                      <span className="block font-medium text-gray-500">
                        OG Psychologist
                      </span>
                    </div>
                  </Flex>
                </div>
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </CoffeeShopLayout>
  );
};

export default GrowthTips;
