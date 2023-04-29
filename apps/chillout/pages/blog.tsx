import ChilloutLayout from '../components/ChilloutLayout';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';

import ReusableSection from '../components/ReusableSection';

const Blog = () => {
  return (
    <ChilloutLayout>
      <section className="pt-24 pb-40 lg:pt-40 lg:pb-60 flex justify-center">
        <ul className="mx-8 w-full md:mx-auto md:w-11/12 lg:mx-auto lg:w-2/3 xl:w-1/2">
          <a
            className="inline-block rounded-md transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-105 p-4 lg:p-8 mb-16 md:mb-12 border bg-white border-gray-200"
            // href="/fun-activities-for-summer"
          >
            <div className="flex flex-col-reverse md:grid md:grid-cols-5">
              <div className="flex min-h-0 flex-col col-start-1 col-end-3 md:mr-6">
                <div className="mt-2 md:mt-0">
                  <span className="uppercase font-semibold text-gray-700 text-xs">
                    Ideas
                  </span>
                  <span className="text-gray-400 mx-2 font-medium text-sm">
                    July 23, 2021
                  </span>
                </div>
                <h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
                  Fun Sumer Activities
                </h2>
                <p className="text-sm mb-6 flex-grow text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus eligendi libero sit nihil tempora, totam
                  reprehenderit aliquam beatae obcaecati ratione. Libero
                  consequatur cumque magnam ipsam quae sequi laudantium pariatur
                  veritatis?
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      className="w-full h-full object-cover object-bottom"
                      src="./images/writer.png"
                      alt="A smiling female George Orwell."
                    />
                  </div>
                  <div className="ml-2 text-xs">
                    <span className="block font-semibold text-gray-700">
                      Ice Cube
                    </span>
                    <span className="block font-medium text-gray-500">
                      Chillmaster
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-md overflow-hidden h-48 lg:h-full lg:min-h-0 lg:col-start-3 lg:col-end-6">
                <img
                  className="w-full h-full object-cover object-bottom"
                  src="./images/summer.jpg"
                  alt="Waves breaking on a perfect shore."
                />
              </div>
            </div>
          </a>

          <div className="md:flex">
            <div className="flex flex-col md:w-1/2 md:mr-4  md:mb-0">
              <a
                // href="/blog"
                className="inline-block rounded-md transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-105 p-4  mb-16 md:mb-12 border border-gray-200"
              >
                <div className="rounded-md overflow-hidden h-48 lg:h-72">
                  <img
                    className="h-full w-full object-cover rounded-md"
                    src="./images/cool.jpg"
                    alt="A cool rubber duck in a blue swimming pool."
                  />
                </div>
                <div className="flex flex-col">
                  <div className="mt-2">
                    <span className="uppercase font-semibold text-gray-700 text-xs">
                      Productivity
                    </span>
                    <span className="text-gray-400 mx-2 font-medium text-sm">
                      Jan 23, 2021
                    </span>
                  </div>
                  <h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
                    How to Be Cool Yet Humble
                  </h2>
                  <p className="text-sm mb-6 flex-grow text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus eligendi libero sit nihil tempora, totam
                    reprehenderit aliquam beatae obcaecati ratione. Libero
                    consequatur cumque magnam ipsam quae sequi laudantium
                    pariatur veritatis?{' '}
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        className="w-full h-full object-cover object-bottom"
                        src="./images/writer-3.png"
                        alt="A smiling Satoshi Nakamoto."
                      />
                    </div>
                    <div className="ml-2 text-xs">
                      <span className="block font-semibold text-gray-700">
                        Satoshi Nakamoto
                      </span>
                      <span className="block font-medium text-gray-500">
                        Chief Technical Writer
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="flex flex-col md:w-1/2 md:ml-4">
              <a
                // href="/blog"
                className="inline-block rounded-md transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-105 p-4  mb-16 md:mb-12 border  border-gray-200"
              >
                <div className="rounded-md overflow-hidden h-48 lg:h-72">
                  <img
                    className="h-full w-full object-cover rounded-md"
                    src="./images/chill.jpg"
                    alt="A blue hotel swimming pool flanked by two palm trees."
                  />
                </div>
                <div className="flex flex-col">
                  <div className="mt-2">
                    <span className="uppercase font-semibold text-gray-700 text-xs">
                      Advice
                    </span>
                    <span className="text-gray-400 mx-2 font-medium text-sm">
                      Feb 4, 2021
                    </span>
                  </div>
                  <h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
                    Stay Chill This Summer
                  </h2>
                  <p className="text-sm mb-6 flex-grow text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus eligendi libero sit nihil tempora, totam
                    reprehenderit aliquam beatae obcaecati ratione. Libero
                    consequatur cumque magnam ipsam quae sequi laudantium
                    pariatur veritatis?
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        className="w-full h-full object-cover object-bottom"
                        src="./images/writer-2.png"
                        alt="A smiling female Jack Johnson."
                      />
                    </div>
                    <div className="ml-2 text-xs">
                      <span className="block font-semibold text-gray-700">
                        Victor Fries
                      </span>
                      <span className="block font-medium text-gray-500">
                        Batman Fan
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </ul>
      </section>
    </ChilloutLayout>
  );
};

export default Blog;
