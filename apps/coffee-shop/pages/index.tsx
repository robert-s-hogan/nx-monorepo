import React from 'react';
import CoffeeShopLayout from '../components/CoffeeShopLayout';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';
import Link from 'next/link';

import ReusableSection from '../components/ReusableSection';
import CoffeeHero from '../public/images/coffee_hero.png';
import CoffeeGrowth from '../public/images/coffee_growth.png';
import Happy from '../public/images/happy.png';
import SmilingManOne from '../public/images/smiling_man.png';
import SmilingManTwo from '../public/images/smiling_man_2.jpg';
import SmilingWomanOne from '../public/images/smiling_woman.jpg';

export function Index() {
  return (
    <CoffeeShopLayout>
      <ReusableSection className="lg:flex justify-center items-center h-full pb-16 lg:pb-0">
        <div className="pt-24 w-full lg:pt-0 lg:w-auto">
          <Image
            src={CoffeeHero}
            alt="Cartoon Large coffee spilling"
            height={565}
            width={565}
          />
        </div>
        <div className="mx-4 mt-8 lg:mt-0 lg:ml-16">
          <span className="block uppercase text-sm lg:text-base lg:font-semibold mb-2 lg:mb-4 text-gray-700">
            I help coffee shops to
          </span>
          <h1 className="text-5xl lg:text-7xl uppercase text-gray-900 font-medium mb-4 lg:mb-8">
            Get more <span className="block font-black">coffee lovers</span>
            in the door
          </h1>
          <Link
            className="inline-block uppercase text-sm text-center font-bold px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl rounded-bl-3xl bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-2 focus:ring-yellow-300"
            href="/contact"
          >
            Find out more
          </Link>
        </div>
      </ReusableSection>

      <ReusableSection className="py-16 lg:py-24 shadow-inner  bg-yellow-100">
        <div className="lg:flex justify-center gap-x-18">
          <div className="mx-4 md:w-2/3 md:mx-auto mb-16 lg:mx-0 lg:mb-0 lg:w-80 flex flex-col items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.82092 17.9378V22.1791H6.06221L18.5712 9.65881L14.3299 5.41753L1.82092 17.9378ZM24 19.1932L19.1932 24L13.312 18.1188L15.3139 16.1169L16.4449 17.2479L19.2385 14.443L20.8445 16.049L19.1932 17.655L20.3921 18.786L21.9981 17.2026L24 19.1932V19.1932ZM5.90386 10.6767L0 4.80679L4.80679 0L6.79736 2.00188L4.00377 4.80679L5.21395 6.00565L7.99623 3.20075L9.60226 4.80679L7.99623 6.40151L9.12724 7.53252L5.90386 10.6767V10.6767ZM21.8511 6.34496C22.2922 5.90386 22.2922 5.21395 21.8511 4.75024L19.2045 2.14892C18.7861 1.70782 18.0509 1.70782 17.6098 2.14892L15.5287 4.21866L19.77 8.45994L21.8511 6.34496Z"
                fill="#78350F"
              />
            </svg>
            <h2 className="text-xl lg:text-2xl mt-3 mb-6 font-semibold text-gray-900">
              Website Design
            </h2>
            <p className="text-center text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus,
              augue ut leo sagittis tempor nibh. Commodo nulla nullam tempor
              adipiscing.
            </p>
          </div>

          <div className="mx-4 md:w-2/3 md:mx-auto mb-16 lg:mx-0 lg:mb-0 lg:w-80 flex flex-col items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9976 0L24 7.01647L21.9812 9.00706L14.9929 2.01882L16.9976 0V0ZM0 22.9835L9.17647 13.8494C9.03529 13.4118 9.13412 12.8612 9.50118 12.4941C10.0518 11.9435 10.9553 11.9435 11.5059 12.4941C12.0565 13.0588 12.0565 13.9482 11.5059 14.4988C11.1388 14.8659 10.5882 14.9647 10.1506 14.8235L1.01647 24L15.9953 18.9882L20.9788 10.0094L14.0047 3.02118L5.01177 8.00471L0 22.9835Z"
                fill="#78350F"
              />
            </svg>

            <h2 className="text-xl lg:text-2xl mt-3 mb-6 font-semibold text-gray-900">
              SEO
            </h2>
            <p className="text-center text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus,
              augue ut leo sagittis tempor nibh. Commodo nulla nullam tempor
              adipiscing.
            </p>
          </div>

          <div className="mx-4 md:w-2/3 md:mx-auto mb-16 lg:mx-0 lg:mb-0 lg:w-80 flex flex-col items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6 12C14.268 12 13.2 13.068 13.2 14.4C13.2 15.0365 13.4529 15.647 13.9029 16.0971C14.353 16.5471 14.9635 16.8 15.6 16.8C16.2365 16.8 16.847 16.5471 17.2971 16.0971C17.7471 15.647 18 15.0365 18 14.4C18 13.7635 17.7471 13.153 17.2971 12.7029C16.847 12.2529 16.2365 12 15.6 12ZM12 21.6C9.45392 21.6 7.01212 20.5886 5.21177 18.7882C3.41143 16.9879 2.4 14.5461 2.4 12C2.4 9.45392 3.41143 7.01212 5.21177 5.21177C7.01212 3.41143 9.45392 2.4 12 2.4C14.5461 2.4 16.9879 3.41143 18.7882 5.21177C20.5886 7.01212 21.6 9.45392 21.6 12C21.6 14.5461 20.5886 16.9879 18.7882 18.7882C16.9879 20.5886 14.5461 21.6 12 21.6ZM12 0C10.4241 0 8.86371 0.310389 7.4078 0.913446C5.95189 1.5165 4.62902 2.40042 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C4.62902 21.5996 5.95189 22.4835 7.4078 23.0866C8.86371 23.6896 10.4241 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 10.4241 23.6896 8.86371 23.0866 7.4078C22.4835 5.95189 21.5996 4.62902 20.4853 3.51472C19.371 2.40042 18.0481 1.5165 16.5922 0.913446C15.1363 0.310389 13.5759 0 12 0ZM14.4 8.4C14.4 7.76348 14.1471 7.15303 13.6971 6.70294C13.247 6.25286 12.6365 6 12 6C10.668 6 9.6 7.068 9.6 8.4C9.6 9.03652 9.85286 9.64697 10.3029 10.0971C10.753 10.5471 11.3635 10.8 12 10.8C12.6365 10.8 13.247 10.5471 13.6971 10.0971C14.1471 9.64697 14.4 9.03652 14.4 8.4ZM8.4 12C7.76348 12 7.15303 12.2529 6.70294 12.7029C6.25286 13.153 6 13.7635 6 14.4C6 15.0365 6.25286 15.647 6.70294 16.0971C7.15303 16.5471 7.76348 16.8 8.4 16.8C9.03652 16.8 9.64697 16.5471 10.0971 16.0971C10.5471 15.647 10.8 15.0365 10.8 14.4C10.8 13.7635 10.5471 13.153 10.0971 12.7029C9.64697 12.2529 9.03652 12 8.4 12Z"
                fill="#78350F"
              />
            </svg>

            <h2 className="text-xl lg:text-2xl mt-3 mb-6 font-semibold text-gray-900">
              Social Media
            </h2>
            <p className="text-center text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus,
              augue ut leo sagittis tempor nibh. Commodo nulla nullam tempor
              adipiscing.
            </p>
          </div>
        </div>
      </ReusableSection>

      <section className="flex justify-center mx-4 md:w-2/3 md:mx-auto pt-24 lg:pt-30 pb-32 lg:pb-40">
        <div className="lg:flex items-center justify-center gap-x-14">
          <div className="lg:w-1/4 mb-16 lg:mb-0">
            <h2 className="inline-block text-3xl lg:text-4xl font-semibold uppercase text-gray-900">
              Grow Your Shop
            </h2>
            <p className="leading-relaxed mt-10 mb-10 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At et
              augue tristique risus, enim non. Auctor quis pulvinar elit sit.
              Est proin scelerisque at est gravida nibh. Odio eget odio diam
              felis aliquam volutpat integer. Dis commodo blandit id enim
              facilisi eros nulla.
            </p>
            <Link
              className="inline-block uppercase text-center text-sm font-bold px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl rounded-bl-3xl bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-2 focus:ring-yellow-300"
              href="/growth-tips"
            >
              See Tips
            </Link>
          </div>

          <Image
            src={CoffeeGrowth}
            alt="A happy cartoon woman holding a green growing plant."
            width={405}
            height={380}
          />
        </div>
      </section>

      <section className="flex flex-col shadow-inner rounded-r-10xl lg:rounded-r-full items-center pt-30 pb-40 bg-yellow-100">
        <h2 className="inline-block text-3xl lg:text-4xl font-semibold uppercase text-gray-900 mb-18">
          Client Testimonials
        </h2>

        <div className="lg:flex gap-x-10">
          <div className="mb-24 lg:mb-0">
            <div className="flex items-center shadow-md w-89 h-89 p-10 rounded-tl-3xl rounded-br-3xl bg-yellow-50">
              <p className="font-medium leading-relaxed">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                rhoncus mauris nunc integer lectus risus. Molestie in a lacinia
                sapien, sodales purus. Ultrices semper ornare ante. Molestie in
                a lacinia sapien, sodales purus. Ultrices semper ornare ante a
                lacinia nunc.”
              </p>
            </div>
            <div className="flex mt-10">
              <div className="h-12 w-12 flex-shrink-0">
                <Image
                  className="w-full h-full rounded-full shadow-inner"
                  src={SmilingManOne}
                  alt="A smiling man."
                  width={250}
                  height={250}
                />
              </div>
              <div className="ml-4">
                <span className="block text-sm font-bold mt-2 tracking-wider text-gray-600">
                  Thom Yorke
                </span>
                <span className="block text-sm text-gray-500">
                  Founder, Aroma
                </span>
              </div>
            </div>
          </div>

          <div className="mb-24 lg:mb-0">
            <div className="flex items-center shadow-md w-89 h-89 p-10 rounded-tl-3xl rounded-br-3xl bg-yellow-50">
              <p className="font-medium leading-relaxed">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                rhoncus mauris nunc integer lectus risus. Molestie in a lacinia
                sapien, sodales purus. Ultrices semper ornare ante. Molestie in
                a lacinia sapien, sodales purus. Ultrices semper ornare ante a
                lacinia nunc.”
              </p>
            </div>
            <div className="flex mt-10">
              <div className="h-12 w-12 flex-shrink-0">
                <Image
                  className="w-full h-full rounded-full shadow-inner"
                  src={SmilingWomanOne}
                  alt="A smiling woman."
                  width={250}
                  height={250}
                />
              </div>
              <div className="ml-4">
                <span className="block text-sm font-bold mt-2 tracking-wider text-gray-600">
                  Laura Misch
                </span>
                <span className="block text-sm text-gray-500">
                  Barista, Truth Coffee
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center shadow-md w-89 h-89 p-10 rounded-tl-3xl rounded-br-3xl bg-yellow-50">
              <p className="font-medium leading-relaxed">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                rhoncus mauris nunc integer lectus risus. Molestie in a lacinia
                sapien, sodales purus. Ultrices semper ornare ante. Molestie in
                a lacinia sapien, sodales purus. Ultrices semper ornare ante a
                lacinia nunc.”
              </p>
            </div>
            <div className="flex mt-10">
              <div className="h-12 w-12 flex-shrink-0">
                <Image
                  className="w-full h-full rounded-full shadow-inner"
                  src={SmilingManTwo}
                  alt="A smiling man."
                  width={250}
                  height={250}
                />
              </div>
              <div className="ml-4">
                <span className="block text-sm font-bold mt-2 tracking-wider text-gray-600">
                  Rory Ferreira
                </span>
                <span className="block text-sm text-gray-500">
                  Owner, 17th Cafe
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pt-24 lg:pt-40 pb-32 lg:pb-52">
                    <h2 className="text-center text-3xl lg:text-4xl font-semibold uppercase text-gray-900 mb-20 lg:mb-24">
                        My Previous Work
                    </h2>
                    <div className="flex flex-col items-center mx-4 md:w-2/3 md:mx-auto lg:w-full lg:mx-0">
                        <div className="lg:flex items-center justify-center gap-x-14">
                            <div className="lg:w-1/4">
                                <h2 className="inline-block text-xl font-semibold uppercase text-gray-800">
                                    Aroma Roastery
                                </h2>
                                <p className="leading-relaxed my-6 text-gray-700">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Massa in arcu venenatis est
                                    laoreet habitant nibh. Eu proin egestas
                                    consequat pharetra sit volutpat consectetur
                                    mauris. Scelerisque ac lectus vitae, amet
                                    sed vel molestie dui. Ullamcorper.
                                </p>
                                <Link
                                    className="inline-block uppercase text-center text-sm font-bold px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl rounded-bl-3xl bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-2 focus:ring-yellow-300"
                                    href="/project-url"
                                >
                                    View Project
                                </Link>
                            </div>
                            <div className="relative h-80 lg:w-80 mt-8 lg:mt-0 -mx-4 lg:mx-0 lg:rounded-tl-10xl lg:rounded-br-10xl overflow-hidden">
                                <div className="absolute top-0 right-0 left-0 bottom-0 opacity-30 bg-yellow-50"></div>
                                <Image
                                    className="h-full w-full object-cover"
                                    height={320}
                                    width={320}
                                    src="../images/work_1.jpg"
                                    alt="Two cups of coffee on a wooden table."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center my-24 lg:my-40 mx-4 md:w-2/3 md:mx-auto lg:w-full lg:mx-0">
                        <div className="lg:flex flex-row-reverse items-center justify-center gap-x-14">
                            <div className="lg:w-1/4">
                                <h2 className="inline-block text-xl font-semibold uppercase text-gray-800">
                                    Truth Coffee
                                </h2>
                                <p className="leading-relaxed my-6 text-gray-700">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Massa in arcu venenatis est
                                    laoreet habitant nibh. Eu proin egestas
                                    consequat pharetra sit volutpat consectetur
                                    mauris. Scelerisque ac lectus vitae, amet
                                    sed vel molestie dui. Ullamcorper.
                                </p>
                                <Link
                                    className="inline-block uppercase text-center text-sm font-bold px-5 py-3 lg:px-10 lg:py-4 rounded-tl-3xl rounded-br-3xl bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-2 focus:ring-yellow-300"
                                    href="/project-url"
                                >
                                    View Project
                                </Link>
                            </div>
                            <div className="relative h-80 lg:w-80 mt-8 lg:mt-0 -mx-4 lg:mx-0 lg:rounded-tr-10xl lg:rounded-bl-10xl overflow-hidden">
                                <div className="absolute top-0 right-0 left-0 bottom-0 opacity-30 bg-yellow-50"></div>
                                <Image
                                    className="h-full w-full object-cover"
                                    src="../images/work_2.jpg"
                                    alt="A barista preparing coffee in Truth Coffee"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mx-4 md:w-2/3 md:mx-auto lg:w-full lg:mx-0">
                        <div className="lg:flex items-center justify-center gap-x-14">
                            <div className="lg:w-1/4">
                                <h2 className="inline-block text-xl font-semibold uppercase text-gray-800">
                                    17th Cafe
                                </h2>
                                <p className="leading-relaxed my-6 text-gray-700">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Massa in arcu venenatis est
                                    laoreet habitant nibh. Eu proin egestas
                                    consequat pharetra sit volutpat consectetur
                                    mauris. Scelerisque ac lectus vitae, amet
                                    sed vel molestie dui. Ullamcorper.
                                </p>
                                <Link
                                    className="inline-block uppercase text-center text-sm font-bold px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl rounded-bl-3xl bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-2 focus:ring-yellow-300"
                                    href="/project-url"
                                >
                                    View Project
                                </Link>
                            </div>
                            <div className="relative h-80 lg:w-80 mt-8 lg:mt-0 -mx-4 lg:mx-0 lg:rounded-tl-10xl lg:rounded-br-10xl overflow-hidden">
                                <div className="absolute top-0 right-0 left-0 bottom-0 opacity-30 bg-yellow-50"></div>
                                <Image
                                    className="h-full w-full object-cover"
                                    src="../images/work_3.jpg"
                                    alt="A coffee shop with people seated at tables."
                                />
                            </div>
                        </div>
                    </div>
                </section> */}

      <section className="py-24 shadow-inner">
        <h2 className="text-center font-semibold text-xl lg:text-2xl mb-12 text-gray-900">
          Ready for more customers?
        </h2>
        <div className="text-center">
          <Link
            className="inline-block uppercase font-bold px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl text-sm lg:text-base rounded-bl-3xl bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-2 focus:ring-yellow-300"
            href="/contact"
          >
            Get in touch now
          </Link>
        </div>
      </section>
    </CoffeeShopLayout>
  );
}

export default Index;
