import ChilloutLayout from '../components/ChilloutLayout';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';

import ReusableSection from '../components/ReusableSection';

const Faqs = () => {
  return (
    <ChilloutLayout>
      <section className="pt-32 px-12 pl-6 lg:pt-44 lg:pl-32">
        <h1 className="text-xs lg:text-base uppercase font-bold mb-3 lg:mb-6 text-gray-400">
          FAQs
        </h1>
        <p className="font-semibold lg:w-1/2 text-3xl lg:text-5xl max-w-prose text-gray-700">
          Let’s answer a couple of your burning questions, shall we? A cooling
          down of sorts...
        </p>
      </section>

      {/* <div className="-mt-8 lg:-mt-16">
        <svg
          className="h-80 w-full transform scale-y-200 lg:scale-y-100 lg:h-full"
          width="1440"
          height="346"
          viewBox="0 0 1440 346"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 346L24 310C48 274 96 202 144 195C192 188 240 245 288 260C336 274 384 245 432 195C480 144 528 72 576 80C624 87 672 173 720 202C768 231 816 202 864 159C912 116 960 58 1008 29C1056 0 1104 0 1152 15C1200 29 1248 58 1296 58C1344 58 1392 29 1416 15L1440 0V346H1416C1392 346 1344 346 1296 346C1248 346 1200 346 1152 346C1104 346 1056 346 1008 346C960 346 912 346 864 346C816 346 768 346 720 346C672 346 624 346 576 346C528 346 480 346 432 346C384 346 336 346 288 346C240 346 192 346 144 346C96 346 48 346 24 346H0Z"
            fill="#3B82F6"
          />
        </svg>
      </div> */}

      <section className="flex flex-col items-center pt-16 lg:pt-20 pb-40">
        <div className="flex flex-col items-center mx-4 -mt-12 lg:mt-24 lg:mb-32">
          <svg
            width="40"
            height="24"
            viewBox="0 0 40 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0C14.66 0 11.34 2.66 10 8C12 5.34 14.34 4.34 17 5C18.52 5.38 19.62 6.48 20.82 7.7C22.78 9.7 25 12 30 12C35.34 12 38.66 9.34 40 4C38 6.66 35.66 7.66 33 7C31.48 6.62 30.4 5.52 29.18 4.3C27.22 2.3 25 0 20 0ZM10 12C4.66 12 1.34 14.66 0 20C2 17.34 4.34 16.34 7 17C8.52 17.38 9.6 18.48 10.82 19.7C12.78 21.7 15 24 20 24C25.34 24 28.66 21.34 30 16C28 18.66 25.66 19.66 23 19C21.48 18.62 20.4 17.52 19.18 16.3C17.22 14.3 15 12 10 12Z"
              fill="#3B82F6"
            />
          </svg>
          <h2 className="text-center mt-4 mb-8 lg:mb-0 tracking-wider font-bold text-3xl lg:text-4xl text-gray-700">
            Frequently Asked Questions
          </h2>
        </div>
        <ul className="mx-4 w-full md:mx-auto md:w-2/3 lg:mx-auto lg:w-1/2 xl:w-1/3">
          <div className="mx-6 lg:mx-0">
            <li className="inline-block w-full my-8">
              <details className=" shadow-md bg-blue-50">
                <summary className="cursor-pointer px-6 py-4 lg:px-12 lg:py-8 font-semibold text-base lg:text-lg text-blue-500">
                  <div className="flex items-center">
                    <span className="pr-4 lg:pr-8">
                      <svg
                        className="h-3 fill-current text-blue-500 "
                        width="28"
                        height="18"
                        viewBox="0 0 28 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24.5313 0L14 10.5313L3.46872 0L0 3.46872L14 17.4687L28 3.46872L24.5313 0Z" />
                      </svg>
                    </span>
                    <span>
                      Some insightful question that will be promptly answered?
                    </span>
                  </div>
                </summary>
                <p className="font-medium px-6 pb-6 pt-2 lg:px-12 lg:pb-12 lg:-mt-2 leading-relaxed text-blue-400">
                  Here is the answer to said insightful question which does
                  include many illuminating responses that do their utmost at
                  portraying an air of trust, professionalism in a beautifully
                  succinct manner.
                </p>
              </details>
            </li>

            <li className="inline-block w-full my-8">
              <details className=" shadow-md bg-blue-50">
                <summary className="cursor-pointer px-6 py-4 lg:px-12 lg:py-8 font-semibold text-base lg:text-lg text-blue-500">
                  <div className="flex items-center">
                    <span className="pr-4 lg:pr-8">
                      <svg
                        className="h-3 fill-current text-blue-500 "
                        width="28"
                        height="18"
                        viewBox="0 0 28 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24.5313 0L14 10.5313L3.46872 0L0 3.46872L14 17.4687L28 3.46872L24.5313 0Z" />
                      </svg>
                    </span>
                    <span>
                      Some insightful question that will be promptly answered?
                    </span>
                  </div>
                </summary>
                <p className="font-medium px-6 pb-6 pt-2 lg:px-12 lg:pb-12 lg:-mt-2 leading-relaxed text-blue-400">
                  Here is the answer to said insightful question which does
                  include many illuminating responses that do their utmost at
                  portraying an air of trust, professionalism in a beautifully
                  succinct manner.
                </p>
              </details>
            </li>

            <li className="inline-block w-full my-8">
              <details className=" shadow-md bg-blue-50">
                <summary className="cursor-pointer px-6 py-4 lg:px-12 lg:py-8 font-semibold text-base lg:text-lg text-blue-500">
                  <div className="flex items-center">
                    <span className="pr-4 lg:pr-8">
                      <svg
                        className="h-3 fill-current text-blue-500 "
                        width="28"
                        height="18"
                        viewBox="0 0 28 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24.5313 0L14 10.5313L3.46872 0L0 3.46872L14 17.4687L28 3.46872L24.5313 0Z" />
                      </svg>
                    </span>
                    <span>
                      Some insightful question that will be promptly answered?
                    </span>
                  </div>
                </summary>
                <p className="font-medium px-6 pb-6 pt-2 lg:px-12 lg:pb-12 lg:-mt-2 leading-relaxed text-blue-400">
                  Here is the answer to said insightful question which does
                  include many illuminating responses that do their utmost at
                  portraying an air of trust, professionalism in a beautifully
                  succinct manner.
                </p>
              </details>
            </li>

            <li className="inline-block w-full my-8">
              <details className=" shadow-md bg-blue-50">
                <summary className="cursor-pointer px-6 py-4 lg:px-12 lg:py-8 font-semibold text-base lg:text-lg text-blue-500">
                  <div className="flex items-center">
                    <span className="pr-4 lg:pr-8">
                      <svg
                        className="h-3 fill-current text-blue-500 "
                        width="28"
                        height="18"
                        viewBox="0 0 28 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24.5313 0L14 10.5313L3.46872 0L0 3.46872L14 17.4687L28 3.46872L24.5313 0Z" />
                      </svg>
                    </span>
                    <span>
                      Some insightful question that will be promptly answered?
                    </span>
                  </div>
                </summary>
                <p className="font-medium px-6 pb-6 pt-2 lg:px-12 lg:pb-12 lg:-mt-2 leading-relaxed text-blue-400">
                  Here is the answer to said insightful question which does
                  include many illuminating responses that do their utmost at
                  portraying an air of trust, professionalism in a beautifully
                  succinct manner.
                </p>
              </details>
            </li>

            <li className="inline-block w-full my-8">
              <details className=" shadow-md bg-blue-50">
                <summary className="cursor-pointer px-6 py-4 lg:px-12 lg:py-8 font-semibold text-base lg:text-lg text-blue-500">
                  <div className="flex items-center">
                    <span className="pr-4 lg:pr-8">
                      <svg
                        className="h-3 fill-current text-blue-500 "
                        width="28"
                        height="18"
                        viewBox="0 0 28 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24.5313 0L14 10.5313L3.46872 0L0 3.46872L14 17.4687L28 3.46872L24.5313 0Z" />
                      </svg>
                    </span>
                    <span>
                      Some insightful question that will be promptly answered?
                    </span>
                  </div>
                </summary>
                <p className="font-medium px-6 pb-6 pt-2 lg:px-12 lg:pb-12 lg:-mt-2 leading-relaxed text-blue-400">
                  Here is the answer to said insightful question which does
                  include many illuminating responses that do their utmost at
                  portraying an air of trust, professionalism in a beautifully
                  succinct manner.
                </p>
              </details>
            </li>
          </div>
        </ul>
      </section>
    </ChilloutLayout>
  );
};

export default Faqs;
