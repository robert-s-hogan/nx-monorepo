import { useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

import { Seo } from '@with-nx/react-ui';

export function Index() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Seo
        title="Data Scientist and Data Analyst - Jessica Hogan M.A."
        description="I want to help you make the best data-driven decisions and translate data into actionable insights. As a Data Scientist and Data Analyst, I translate data into actionable insights. I have experience with SQL, Excel, reporting, dashboards and statistics.Jessica Hogan M.A."
        faviconPath="../static/favicon.ico"
      />
      <header className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between py-4 items-center text-black">
          <NextLink href="/">
            <Image
              src="https://rshogan.imgix.net/personal/logos/jh_logo_white.png"
              alt="Jessica Hogan's Logo"
              height="32"
              width="82"
              className="h-8"
            />
          </NextLink>
          <nav className="flex ">
            <div className="hidden md:inline-flex md:flex-end md:space-x-4 text-sm text-black">
              <NextLink
                className="flex justify-center items-center p-2"
                href="/#projects"
              >
                Projects
              </NextLink>
              <NextLink
                className="flex justify-center items-center p-2"
                href="/#who-i-am"
              >
                Who I Am
              </NextLink>
            </div>
            <button className="text-black cursor-pointer mr-0 border-none focus:outline-none md:hidden">
              <svg width="32" height="24">
                <line id="top" x1="0" y1="2" x2="32" y2="2" />
                <line id="middle" x1="8" y1="12" x2="32" y2="12" />
                <line id="bottom" x1="0" y1="22" x2="32" y2="22" />
              </svg>
            </button>
            <nav className="hidden text-gray-500 uppercase text-bold sm:block"></nav>
          </nav>
        </div>
      </header>
      <section
        className="bg-gradient-to-br from-peach to-mint scroll-smooth w-full"
        style={{ height: '80vh' }}
      >
        <div className="flex justify-center flex-col items-center h-full text-center">
          <h1 className="font-semibold text-4xl">
            Hi, I am Jessica.
            <br />
            <span className="text-black bg-clip-text bg-gradient-to-br from-orange to-peach">
              Data Scientist and Data Analyst
            </span>
          </h1>
          <p className="text-gray-700 text-lg py-2 w-4/5">
            I want to help you make the best data-driven decisions and translate
            data into actionable insights.
          </p>
          <div className="my-4 flex flex-col justify-center md:flex-row md:space-between">
            <button
              className="bg-orange hover:opacity-80 px-8 py-2 rounded-lg text-lg text-white"
              onClick={() => setShowModal(!showModal)}
            >
              Contact me
            </button>
            <a
              href="#projects"
              className="px-8 py-2 rounded-lg hover:no-underline pt-4 md:pt-4"
            >
              <p className="align-middle text-green hover:text-slate text-lg">
                See My Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline pb-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </p>
            </a>
          </div>
        </div>
      </section>
      <section id="projects" className="w-full max-w-7xl px-6 mx-auto py-8">
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">Projects</h2>
        <p>
          As a Data Scientist and Data Analyst, I translate data into actionable
          insights. I have experience with SQL, Excel, reporting, dashboards and
          statistics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8">
          <div className="overflow-hidden bg-white rounded-lg border border-opacity-20 border-blue hover:shadow-2xl dark:bg-gray-800 text-left">
            <Image
              width="355"
              height="224"
              className="object-cover object-center w-full h-56"
              src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="avatar"
            />

            <div className="flex items-center px-4 py-3 bg-peach">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>

              <h1 className="mx-3 text-lg font-semibold text-black">
                Python Project
              </h1>
            </div>

            <div className="px-4 py-4">
              <p className="py-2 text-gray-700 dark:text-gray-400">
                For this project I used the MySQL Connector, Python and pandas
                to implement a database on MySQL Server to create, read, update
                and delete data.
              </p>

              <div className="flex justify-end mt-4 text-gray-700 dark:text-gray-200">
                <NextLink
                  className="text-blue hover:text-black"
                  href="https://github.com/jessicahoganma/Python_SQL/blob/main/README.md"
                  target="_blank"
                  passHref
                  rel="noreferrer"
                >
                  <a target="_blank" rel="noreferrer">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 640 640"
                    >
                      <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
                    </svg>
                  </a>
                </NextLink>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-lg border border-opacity-20 border-blue hover:shadow-2xl dark:bg-gray-800 text-left">
            <Image
              width="355"
              height="224"
              className="object-cover object-center w-full h-56"
              src="https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="avatar"
            />

            <div className="flex items-center px-4 py-3 bg-peach">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>

              <h1 className="mx-3 text-lg font-semibold text-black">
                SQL Project
              </h1>
            </div>

            <div className="px-4 py-4">
              <p className="py-2 text-gray-700 dark:text-gray-400">
                I developed a relational database from scratch through MYSQL
                Community Server. I used Lucidchart (for my ERD), GitHub and
                PopSQL.
              </p>

              <div className="flex justify-end mt-4 text-gray-700 dark:text-gray-200">
                <NextLink
                  className="text-blue hover:text-black"
                  href="https://github.com/jessicahoganma/SQL_hospital_Project"
                  target="_blank"
                  passHref
                  rel="noreferrer"
                >
                  <a target="_blank" rel="noreferrer">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 640 640"
                    >
                      <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
                    </svg>
                  </a>
                </NextLink>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-lg border border-opacity-20 border-blue hover:shadow-2xl dark:bg-gray-800 text-left">
            <Image
              width="355"
              height="224"
              className="object-cover object-center w-full h-56"
              src="https://images.unsplash.com/photo-1501290741922-b56c0d0884af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzZWFyY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />

            <div className="flex items-center px-4 py-3 bg-peach">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h3 className="mx-3 text-lg font-semibold text-black">
                Masters Thesis
              </h3>
            </div>

            <div className="px-4 py-4">
              <p className="py-2 text-gray-700 dark:text-gray-400">
                My master’s thesis is a quantitative research project that
                measured California residents’ attitudes towards parenthood
                using SPSS.
              </p>

              <div className="flex justify-end mt-10 text-gray-700 dark:text-gray-200">
                <NextLink
                  href="https://csu-csus.esploro.exlibrisgroup.com/esploro/outputs/graduate/Parental-status-and-life-satisfaction-a/99257831096601671"
                  target="_blank"
                  rel="noreferrer"
                  passHref
                >
                  <a target="_blank" rel="noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </a>
                </NextLink>
              </div>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg border border-opacity-20 border-blue hover:shadow-2xl dark:bg-gray-800 text-left">
            <Image
              width="355"
              height="224"
              className="object-cover object-center w-full h-56"
              src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
            />

            <div className="flex items-center px-4 py-3 bg-peach">
              <Image
                height="32"
                width="32"
                src="https://img.icons8.com/external-phatplus-lineal-phatplus/512/external-marketing-behavior-phatplus-lineal-phatplus.png"
                alt="python"
              />
              <h3 className="mx-3 text-lg font-semibold text-black">
                Python for Marketing
              </h3>
            </div>
            <div className="px-4 py-4">
              <p className="py-2 text-gray-700 dark:text-gray-400">
                In this project I used various resources to clean and merge
                datasets from Google Analytics as well as create visualizations,
                analyze timeseries and build alerts for for marketing
                activities.
              </p>

              <div className="flex justify-end mt-0 text-gray-700 dark:text-gray-200">
                <NextLink
                  passHref
                  href="https://github.com/jessicahoganma/Python-For-Marketing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a target="_blank" rel="noreferrer">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 640 640"
                    >
                      <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
                    </svg>
                  </a>
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="who-i-am" className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <section className="">
            <div className="container py-8 mx-auto">
              <div className="items-center lg:grid lg:grid-cols-3">
                <div className="lg:col-span-2 lg:mr-24">
                  <h2 className="text-3xl font-semibold text-gray-800">
                    Who I am
                  </h2>

                  <p className="text-gray-500 my-5 text-justify">
                    I am a Data Scientist and Data Analyst based in Sonoma
                    County, California. I have a master’s degree and over five
                    years experience providing actionable insights. I have a
                    diverse background working in both public and private
                    sectors from research to marketing which gives me a unique
                    eye in which to approach your data-driven questions.
                  </p>

                  <p className="text-gray-500 mt-3">
                    I look forward to hearing about how I can help you solve
                    your data questions!
                  </p>

                  <span className="inline-flex sm:ml-auto sm:mt-0 pt-4 justify-center sm:justify-start space-x-2">
                    <NextLink
                      className="text-blue hover:text-black"
                      href="mailto:jessicahoganma@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </NextLink>

                    <NextLink
                      className="text-blue hover:text-black ml-3"
                      href="https://www.facebook.com/jessicahoganma"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </NextLink>
                    <NextLink
                      className="ml-3 text-blue hover:text-black"
                      href="https://twitter.com/jessicahoganma"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </NextLink>
                    <NextLink
                      className="ml-3 text-blue hover:text-black"
                      href="https://www.instagram.com/jessica_hogan_ma/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </NextLink>
                    <NextLink
                      href="https://www.linkedin.com/in/jessicahoganma/"
                      target="_blank"
                      rel="noreferrer"
                      className="ml-3 text-blue hover:text-black"
                    >
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        ></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </NextLink>

                    <NextLink
                      className="text-blue hover:text-black ml-3"
                      href="https://github.com/jessicahoganma"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 640 640"
                      >
                        <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
                      </svg>
                    </NextLink>
                  </span>
                </div>

                <div className="mt-8 lg:col-span-1">
                  <div className="flex items-center justify-center lg:justify-end">
                    <div className="max-w-lg">
                      <Image
                        width="355"
                        height="384"
                        src="https://rshogan.imgix.net/clients/jessicahogama/IMG-2649_cropped_2.jpg?auto=compress,format"
                        alt=""
                        className="object-contain h-96 w-full rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section
        id="contact"
        className="max-w-7xl mx-auto pb-8 text-white text-center -mt-16"
      >
        <div className="w-11/12 lg:w-full mx-auto bg-orange text-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 w-11/12 lg:w-3/4 mx-auto justify-center py-8">
            <h2 className="text-white text-2xl font-semibold">
              Start a project
            </h2>
            <p className="mt-2 text-white md:flex-auto">
              Interested in working together? <span className="md:block"></span>
              We should queue up a chat. I’ll buy the coffee.
            </p>
            <button
              className="rounded-lg mx-auto mt-6 md:mt-0 md:py-3 md:px-4 md:rounded-full py-3 px-10 hover:text-orange hover:bg-white font-semibold border-2 md:w-1/4 bg-orange text-white"
              onClick={() => setShowModal(!showModal)}
            >
              Lets do this
            </button>
          </div>
        </div>
      </section>
      <footer className="text-gray-600 body-font">
        <div className="max-w-7xl mx-auto px-6 py-8 flex items-center sm:flex-row flex-col">
          <Image
            width="82"
            height="32"
            src="https://rshogan.imgix.net/personal/logos/jh_logo_white.png"
            alt="Jessica Hogan's Logo"
            className="h-8"
          />
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2022 Jessica Hogan
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 pt-4 justify-center sm:justify-start">
            <a
              className="text-blue hover:text-black"
              href="mailto:jessicahoganma@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>

            <a
              className="text-blue hover:text-black ml-3"
              href="https://www.facebook.com/jessicahoganma"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-blue hover:text-black"
              href="https://twitter.com/jessicahoganma"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-blue hover:text-black"
              href="https://www.instagram.com/jessica_hogan_ma/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/jessicahoganma/"
              target="_blank"
              rel="noreferrer"
              className="ml-3 text-blue hover:text-black"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>

            <a
              className="text-blue hover:text-black ml-3"
              href="https://github.com/jessicahoganma"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 640 640"
              >
                <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
              </svg>
            </a>
          </span>
        </div>
      </footer>
      {showModal && (
        <div
          className="modal overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center justify-items-center "
          id="sampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="sampleModalLabel"
          aria-hidden={false}
          style={{ background: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div
            className="modal-dialog relative w-auto my-6 mx-auto max-w-3xl"
            role="document"
          >
            <div className="bg-white border-2 rounded-lg shadow-lg relative flex flex-col outline-none focus:outline-none w-5/6 mx-auto">
              <div className="modal-body relative p-4 flex-auto">
                <div className="overflow-hidden">
                  <button
                    className="icon border-0 close absolute top-0 right-2 my-0"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShowModal(!showModal)}
                  >
                    <span
                      className="text-3xl font-light text-right  text-black"
                      aria-hidden="true"
                    >
                      &times;
                    </span>
                  </button>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg space-y-4">
                      <h2>Thanks for taking the time to reach out!</h2>
                      <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 ">
                        Fill in the form to start a conversation
                      </p>

                      <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          className="w-8 h-8 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                          Sonoma County, CA
                        </div>
                      </div>

                      <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          className="w-8 h-8 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                          <NextLink
                            className="text"
                            href="mailto:robert@robertshogan.com"
                          >
                            Email me
                          </NextLink>
                        </div>
                      </div>
                    </div>

                    <form
                      className="p-6 flex flex-col justify-center"
                      action="https://submit-form.com/F8kispbK"
                    >
                      <div className="flex flex-col">
                        <label htmlFor="name" className="hidden">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Full Name"
                          required
                          className="w-100 mt-2 py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-col mt-2">
                        <label htmlFor="email" className="hidden">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          required
                          className="w-100 mt-2 py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-col mt-2">
                        <label htmlFor="message" className="hidden">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          placeholder="What would you like to start building?"
                          className="w-100 mt-2 py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-3 bg-orange hover:opacity-80 px-8 py-2 rounded-lg text-lg text-white"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
