import ChilloutLayout from '../components/layout/ChilloutLayout';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';

import ReusableSection from '../components/ReusableSection';
import ProductOneMain from '../public/images/product1_main.jpg';
import ProductsLandingPlant from '../public/images/products_landing_plant.png';
import ProductOneA from '../public/images/product1_a.jpg';
import ProductOneB from '../public/images/product1_b.jpg';
import ProductOneC from '../public/images/product1_c.jpg';
import RoboMain from '../public/images/robo_main.jpg';
import RoboSideOne from '../public/images/robo_side1.jpg';
import RoboSideTwo from '../public/images/robo_side2.jpg';
import RoboSideThree from '../public/images/robo_side3.jpg';

const Products = () => {
  return (
    <ChilloutLayout>
      <section className="lg:flex lg:justify-center pt-32 px-4 lg:pt-44 max-w-screen-2xl mx-auto">
        <div className="lg:w-1/2">
          <h1 className="text-xs lg:text-base uppercase font-bold mb-3 lg:mb-6 text-gray-400">
            Products
          </h1>
          <p className="font-semibold text-3xl lg:text-5xl max-w-prose text-gray-700">
            Something really catchy and not too long. Short and sweet does it.
          </p>
          <div className="pl-4 mt-12 lg:pl-20 lg:mt-24">
            <div className="flex items-center mb-10">
              <div className="flex justify-center items-center w-12 h-12 mr-6 rounded-md bg-blue-600">
                <svg
                  width="30"
                  height="22"
                  viewBox="0 0 30 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4.66667H13L14 6.66667H1L0 4.66667ZM1.33333 8.66667H14.3333L15.3333 10.6667H2.33333L1.33333 8.66667ZM23 19.3333C24.1067 19.3333 25 18.44 25 17.3333C25 16.2267 24.1067 15.3333 23 15.3333C21.8933 15.3333 21 16.2267 21 17.3333C21 18.44 21.8933 19.3333 23 19.3333ZM25 7.33333H21.6667V10.6667H27.6133L25 7.33333ZM9.66667 19.3333C10.7733 19.3333 11.6667 18.44 11.6667 17.3333C11.6667 16.2267 10.7733 15.3333 9.66667 15.3333C8.56 15.3333 7.66667 16.2267 7.66667 17.3333C7.66667 18.44 8.56 19.3333 9.66667 19.3333ZM25.6667 5.33333L29.6667 10.6667V17.3333H27C27 19.5467 25.2133 21.3333 23 21.3333C20.7867 21.3333 19 19.5467 19 17.3333H13.6667C13.6667 19.5467 11.8667 21.3333 9.66667 21.3333C7.45333 21.3333 5.66667 19.5467 5.66667 17.3333H3V12.6667H5.66667V14.6667H6.68C7.41333 13.8533 8.48 13.3333 9.66667 13.3333C10.8533 13.3333 11.92 13.8533 12.6533 14.6667H19V2.66667H3C3 1.18667 4.18667 0 5.66667 0H21.6667V5.33333H25.6667Z"
                    fill="#EFF6FF"
                  />
                </svg>
              </div>
              <div>
                <span className="text-lg font-semibold text-gray-700">
                  Free Delivery
                </span>
                <p className="text-sm font-medium text-gray-500">
                  A phrase about speed and efficiency.
                </p>
              </div>
            </div>

            <div className="flex items-center mb-10">
              <div className="flex justify-center items-center w-12 h-12 mr-6 rounded-md bg-blue-600">
                <svg
                  width="14"
                  height="24"
                  viewBox="0 0 14 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16H2.66667C2.66667 17.44 4.49333 18.6667 6.66667 18.6667C8.84 18.6667 10.6667 17.44 10.6667 16C10.6667 14.5333 9.28 14 6.34667 13.2933C3.52 12.5867 0 11.7067 0 8C0 5.61333 1.96 3.58667 4.66667 2.90667V0H8.66667V2.90667C11.3733 3.58667 13.3333 5.61333 13.3333 8H10.6667C10.6667 6.56 8.84 5.33333 6.66667 5.33333C4.49333 5.33333 2.66667 6.56 2.66667 8C2.66667 9.46667 4.05333 10 6.98667 10.7067C9.81333 11.4133 13.3333 12.2933 13.3333 16C13.3333 18.3867 11.3733 20.4133 8.66667 21.0933V24H4.66667V21.0933C1.96 20.4133 0 18.3867 0 16Z"
                    fill="#EFF6FF"
                  />
                </svg>
              </div>
              <div>
                <span className="text-lg font-semibold text-gray-700">
                  Money Guarantee
                </span>
                <p className="text-sm font-medium text-gray-500">
                  Something involving money.
                </p>
              </div>
            </div>

            <div className="flex items-center mb-10">
              <div className="flex justify-center items-center w-12 h-12 mr-6 rounded-md bg-blue-600">
                <svg
                  width="24"
                  height="30"
                  viewBox="0 0 24 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 13.3333C24 20.7333 18.88 27.6533 12 29.3333C5.12 27.6533 0 20.7333 0 13.3333V5.33333L12 0L24 5.33333V13.3333ZM12 26.6667C17 25.3333 21.3333 19.3867 21.3333 13.6267V7.06667L12 2.90667L2.66667 7.06667V13.6267C2.66667 19.3867 7 25.3333 12 26.6667ZM16.0667 20L11.96 17.5333L7.86667 20L8.94667 15.3333L5.33333 12.2133L10.1067 11.8L11.96 7.4L13.8267 11.7867L18.6 12.2L14.9733 15.3333L16.0667 20Z"
                    fill="#EFF6FF"
                  />
                </svg>
              </div>
              <div>
                <span className="text-lg font-semibold text-gray-700">
                  Time Promise
                </span>
                <p className="text-sm font-medium text-gray-500">
                  A commitment to time and it’s weirdness.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute lg:relative bottom-20 opacity-10 lg:opacity-100">
          <Image src={ProductsLandingPlant} alt="" />
        </div>
      </section>
      <section className="lg:flex justify-center max-w-screen-2xl mx-auto lg:mx-8 pt-16 lg:pt-40 pb-40">
        <div className="mt-24 mx-4 lg:mx-0 lg:mt-0">
          <h2 className="text-xs uppercase font-bold mb-6 lg:mb-14 text-gray-400">
            Products Available Now
          </h2>

          <div className="lg:flex mb-24 lg:mb-48">
            <div className="lg:w-130 lg:mr-12">
              <div className="h-100 cursor-pointer">
                <Image
                  data-product="product1_main"
                  className="h-full w-full object-cover rounded-xl lg:rounded-lg"
                  src={ProductOneMain}
                  alt="A cool handheld air conditioner"
                />

                <div
                  id="product1_main"
                  className="fixed invisible opacity-0 transition-opacity duration-300 top-0 left-0 right-0 bottom-0 p-4 lg:p-12 z-50 bg-gray-700"
                >
                  <Image
                    className="h-full w-full object-cover rounded-xl lg:rounded-lg"
                    src={ProductOneMain}
                    alt="A scenic clear-watered lake."
                  />
                </div>
              </div>
              <div className="flex gap-x-4 lg:gap-x-6 mt-4 lg:mt-8">
                <div className="w-full h-20 lg:h-24 rounded-lg lg:rounded-xl overflow-hidden cursor-pointer border-4 border-blue-50 hover:border-blue-500">
                  <Image
                    data-product="product1_a"
                    className="w-full h-full object-cover transform"
                    src={ProductOneA}
                    alt="A scenic clear-watered lake"
                  />

                  <div
                    id="product1_a"
                    className="fixed invisible opacity-0 transition-opacity duration-300 top-0 left-0 right-0 bottom-0 p-4 lg:p-12 z-50 bg-gray-700"
                  >
                    <Image
                      className="h-full w-full object-cover rounded-lg"
                      src={ProductOneA}
                      alt="A scenic clear-watered lake."
                    />
                  </div>
                </div>
                <div className="w-full h-20 lg:h-24 rounded-lg lg:rounded-xl overflow-hidden cursor-pointer border-4 border-blue-50 hover:border-blue-500">
                  <Image
                    data-product="product1_b"
                    className="w-full h-full object-cover"
                    src={ProductOneB}
                    alt="A lake surrounded by icy mountains."
                  />

                  <div
                    id="product1_b"
                    className="fixed invisible opacity-0 transition-opacity duration-300 top-0 left-0 right-0 bottom-0 p-4 lg:p-12 z-50 bg-gray-700"
                  >
                    <Image
                      className="h-full w-full object-cover rounded-lg"
                      src={ProductOneB}
                      alt="A lake surrounded by icy mountains."
                    />
                  </div>
                </div>
                <div className="w-full h-20 lg:h-24 rounded-lg lg:rounded-xl overflow-hidden cursor-pointer border-4 border-blue-50 hover:border-blue-500">
                  <Image
                    data-product="product1_c"
                    className="w-full h-full object-cover"
                    src={ProductOneC}
                    alt="Green leaves on a dark leafy background."
                  />

                  <div
                    id="product1_c"
                    className="fixed invisible opacity-0 transition-opacity duration-300 top-0 left-0 right-0 bottom-0 p-4 lg:p-12 z-50 bg-gray-700"
                  >
                    <Image
                      className="h-full w-full object-cover rounded-lg"
                      src={ProductOneC}
                      alt="Green leaves on a dark leafy background."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="uppercase mb-8 lg:mb-10 mt-8 lg:mt-0">
                <h3 className="font-bold text-2xl lg:text-5xl text-gray-700">
                  Premium Airconditioner
                </h3>
                <span className="inline-block mt-2 text-xs lg:text-sm font-bold tracking-widest text-gray-500">
                  By
                  <a className="text-blue-500 hover:underline" href="/checkout">
                    Chillout Company
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-x-6 mb-10">
                <div className="px-3 py-5 rounded-md font-bold bg-blue-50 text-blue-500">
                  <span className="text-2xl">$</span>
                  <span className="text-4xl">1000</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-xl text-green-500">
                    20% Off Today
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    Includes all rates and taxes
                  </span>
                </div>
              </div>
              <p className="max-w-prose font-medium text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor,
                et at amet et sit aliquam aliquam nunc. In vestibulum nunc,
                dolor gravida hac lectus lobortis quam.
              </p>
              <a
                className="inline-block font-semibold rounded-md uppercase px-10 py-4 mt-12 bg-blue-500 text-blue-50 hover:bg-blue-700"
                href="/checkout"
              >
                Purchase
              </a>
            </div>
          </div>

          <div className="lg:flex">
            <div className="lg:w-130 lg:mr-12">
              <div className="h-100 cursor-pointer">
                <Image
                  data-product="product2_main"
                  className="h-full w-full object-cover rounded-xl lg:rounded-lg"
                  src={RoboMain}
                  alt="A cool handheld air conditioner"
                />

                <div
                  id="product2_main"
                  className="fixed invisible opacity-0 transition-opacity duration-300 top-0 left-0 right-0 bottom-0 p-4 lg:p-12 z-50 bg-gray-700"
                >
                  <Image
                    className="h-full w-full object-cover rounded-xl lg:rounded-lg"
                    src={RoboMain}
                    alt="A scenic clear-watered lake."
                  />
                </div>
              </div>
              <div className="flex gap-x-4 lg:gap-x-6 mt-4 lg:mt-8">
                <div className="w-full h-20 lg:h-24 rounded-lg lg:rounded-xl overflow-hidden cursor-pointer border-4 border-blue-50 hover:border-blue-500">
                  <Image
                    data-product="product2_a"
                    className="w-full h-full object-cover transform"
                    src={RoboSideOne}
                    alt="A scenic clear-watered lake"
                  />

                  <div
                    id="product2_a"
                    className="fixed invisible opacity-0 transition-opacity duration-300 top-0 left-0 right-0 bottom-0 p-4 lg:p-12 z-50 bg-gray-700"
                  >
                    <Image
                      className="h-full w-full object-cover rounded-lg"
                      src={RoboSideOne}
                      alt="A scenic clear-watered lake."
                    />
                  </div>
                </div>
                <div className="w-full h-20 lg:h-24 rounded-lg lg:rounded-xl overflow-hidden cursor-pointer border-4 border-blue-50 hover:border-blue-500">
                  <Image
                    data-product="product2_b"
                    className="w-full h-full object-cover"
                    src={RoboSideTwo}
                    alt="A lake surrounded by icy mountains."
                  />

                  <div
                    id="product2_b"
                    className="fixed invisible opacity-0 transition-opacity duration-300 top-0 left-0 right-0 bottom-0 p-4 lg:p-12 z-50 bg-gray-700"
                  >
                    <Image
                      className="h-full w-full object-cover rounded-lg"
                      src={RoboSideTwo}
                      alt="A lake surrounded by icy mountains."
                    />
                  </div>
                </div>
                <div className="w-full h-20 lg:h-24 rounded-lg lg:rounded-xl overflow-hidden cursor-pointer border-4 border-blue-50 hover:border-blue-500">
                  <Image
                    data-product="product2_c"
                    className="w-full h-full object-cover"
                    src={RoboSideThree}
                    alt="Green leaves on a dark leafy background."
                  />

                  <div
                    id="product2_c"
                    className="fixed invisible opacity-0 transition-opacity duration-300 top-0 left-0 right-0 bottom-0 p-4 lg:p-12 z-50 bg-gray-700"
                  >
                    <Image
                      className="h-full w-full object-cover rounded-lg"
                      src={RoboSideThree}
                      alt="Green leaves on a dark leafy background."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="uppercase mb-8 lg:mb-10 mt-8 lg:mt-0">
                <h3 className="font-bold text-2xl lg:text-5xl text-gray-700">
                  Ultra Robo-Con
                </h3>
                <span className="inline-block mt-2 text-xs lg:text-sm font-bold tracking-widest text-gray-500">
                  By
                  <a className="text-blue-500 hover:underline" href="/checkout">
                    Chillout Company
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-x-6 mb-10">
                <div className="px-3 py-5 rounded-md font-bold bg-blue-50 text-blue-500">
                  <span className="text-2xl">$</span>
                  <span className="text-4xl">8000</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-xl text-green-500">
                    15% Off Today
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    Includes all rates and taxes
                  </span>
                </div>
              </div>
              <p className="max-w-prose font-medium text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor,
                et at amet et sit aliquam aliquam nunc. In vestibulum nunc,
                dolor gravida hac lectus lobortis quam.
              </p>
              <a
                className="inline-block font-semibold rounded-md uppercase px-10 py-4 mt-12 bg-blue-500 text-blue-50 hover:bg-blue-700"
                href="/checkout"
              >
                Purchase
              </a>
            </div>
          </div>
        </div>
      </section>
    </ChilloutLayout>
  );
};

export default Products;
