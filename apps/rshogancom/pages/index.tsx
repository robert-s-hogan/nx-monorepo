import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Form from '../components/form';
import HeroImg from '../public/images/hero_img.jpg';
import Testimonial from '../public/images/rshhogan_testimonials_ellen_2.avif';
import RSH_logo from '../public/images/rsh_logo_Crop.jpg';

export function Index() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <header className="bg-white">
        <div className="w-full mx-auto py-0 md:py-4 lg:px-0 text-lg md:text-2xl lg:max-w-4xl ">
          <div className="flex justify-between text-white p-4 lg:px-0 text-2xl max-w-4xl">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src={RSH_logo}
                width={48}
                height={40}
                className=""
                alt="Robert Hogan's Logo"
              />
            </Link>
            <nav className="flex justify-center">
              <button onClick={() => setShowModal(!showModal)}>
                Say Hello
              </button>
            </nav>
          </div>
        </div>
      </header>
      {/* Hero */}
      <section className="hero max-h-full bg-gradient-to-br from-primary-900 to-primary-700 py-8 md:py-24 space-y-4">
        <h1 className="text-xl md:text-3xl font-bold text-center text-white md:order-1">
          Web Developer, UI/UX Engineer
        </h1>
        <p className="text-center text-white">
          I design and code beautifully simple things, and I love what I do.
        </p>
        <div className="flex justify-center">
          <div className="relative" style={{ height: '770px', width: '500px' }}>
            <Image
              src={HeroImg}
              className="rounded-lg"
              layout="fill"
              alt="Robert's Professional Shot"
            />
          </div>
        </div>
      </section>
      {/* Hi Im Robert */}
      <section className="w-full bg-white py-24 flex flex-col justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-black text-2xl font-bold mb-6">
            Hi, I’m Robert.
            <br /> Nice to meet you.
          </h2>
          <p className="text-black lg:text-xl">
            Since beginning my journey as a freelance designer nearly 6 years
            ago, Ive done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. Im quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </p>
        </div>
      </section>
      {/* Skill */}
      <section className="py-24 bg-neutral-200">
        <div className="px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div className="p-6 overflow-hidden text-center border-2 border-white bg-white rounded hover:border-tertiary-500 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="object-center h-24 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <div className="p-4 h-auto">
                <h3 className="font-semibold">Fast</h3>
                <div className="text-md text-center leading-relaxed block lg:text-sm">
                  Fast load times and lag free interaction, my highest priority.
                </div>
              </div>
            </div>
            <div className="p-6 overflow-hidden text-center border-2 border-white bg-white rounded hover:border-tertiary-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="object-center h-24 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <div className="p-4 h-auto">
                <h3 className="font-semibold">Intuitive</h3>
                <div className="text-md text-center leading-relaxed block lg:text-sm">
                  Strong preference for easy to use, intuitive UX/UI.
                </div>
              </div>
            </div>
            <div className="p-6 overflow-hidden text-center border-2 border-white bg-white rounded hover:border-tertiary-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="object-center h-24 w-24 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <div className="p-4 h-auto">
                <h3 className="font-semibold">Responsive</h3>
                <div className="text-md text-center leading-relaxed block lg:text-sm">
                  My layouts will work on any device, big or small.
                </div>
              </div>
            </div>
            <div className="p-6 overflow-hidden text-center border-2 border-white bg-white rounded hover:border-tertiary-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="object-center h-24 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <div className="p-4 h-auto">
                <h3 className="font-semibold">Optimize Digital Marketing</h3>
                <div className="text-md text-center leading-relaxed block lg:text-sm">
                  Constantly improving your digital footprint by testing,
                  analyzing, and implementing.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* My Recent Work */}
      <section className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="font-bold mb-4 text-center">My Recent Work</h2>
          <p className="mb-16 text-center">
            Here are a few design projects I have worked on recently. Want to
            see more?{' '}
            <Link href="mailto:mailto:robert@robertshogan.com">Email me</Link>.
          </p>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border border-black border-opacity-40 rounded-lg overflow-hidden">
                <div
                  style={{ height: '281px', width: '500px' }}
                  className="relative"
                >
                  <Image
                    className="w-full object-contain object-center"
                    loading="lazy"
                    src="https://rshogan.imgix.net/projects/tailwindcss-cofee-shop/rsh_coffee_hero.png"
                    layout="fill"
                    alt="Local Coffee Shop Template"
                  />
                </div>
                <div className="p-6">
                  <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Local Coffee Shop
                  </h3>
                  <p className="leading-relaxed mb-3">
                    Sample coffee shop for local businesses to connect with
                    their customers.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link
                      href="https://rshcom-coffee-template.netlify.app/"
                      target="_blank"
                      rel="nofollower noopener noreferrer"
                      className="text text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Preview Site
                    </Link>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border border-black border-opacity-40 rounded-lg overflow-hidden">
                <div
                  style={{ height: '281px', width: '500px' }}
                  className="relative"
                >
                  <Image
                    className="w-full object-cover object-center"
                    loading="lazy"
                    src="https://rshogan.imgix.net/projects/svelte-tailwindcss-product-template/product_design.png"
                    layout="fill"
                    alt="Product Shop Template"
                  />
                </div>
                <div className="p-6">
                  <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Product Shop
                  </h3>
                  <p className="leading-relaxed mb-3">
                    Sample product shop for local businesses to promote their
                    product and sell online.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link
                      href="https://rshogan-svelte-tailwindcss-product-template.vercel.app/"
                      target="_blank"
                      rel="nofollower noopener noreferrer"
                      className="text text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Preview Site
                    </Link>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border border-black border-opacity-40 rounded-lg overflow-hidden">
                <div
                  style={{ height: '281px', width: '500px' }}
                  className="relative"
                >
                  <Image
                    className="xl:w-full object-fill object-center"
                    loading="lazy"
                    src="https://rshogan.imgix.net/projects/svelte-tailwindcss-deck-project/deck_design.png"
                    layout="fill"
                    alt="Construction Site Template"
                  />
                </div>
                <div className="p-6">
                  <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Construction Site
                  </h3>
                  <p className="leading-relaxed mb-3">
                    Sample construction site for local businesses to show off
                    their work!
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <p className="text-indigo-500 inline-flex items-center md:mb-2 disabled lg:mb-0">
                      <span className="italic text-xs">Coming Soon</span>
                      {/* <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg> */}
                    </p>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Collaborators */}
      <div className="max-w-7xl mx-auto py-24 justify-center">
        <h2 className="text-center text-black text-2xl font-bold mb-12">
          I am proud to have collaborated with some awesome companies:
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
          <Link href="https://www.onedemocracy.org/" target="_blank">
            <Image
              className="mx-auto"
              src="https://rshogan.imgix.net/clients/one-democracy/od_logo.png"
              height={50}
              width={87}
              loading="lazy"
              alt="One Democracy Logo"
            />
          </Link>
          <Link href="https://www.mgisolutions.com/" target="blank">
            <Image
              className="mx-auto"
              src="https://rshogan.imgix.net/personal/img/mgi_solutions.svg"
              height={50}
              width={190}
              loading="lazy"
              alt="MGI Solutions Logo"
            />
          </Link>
          <Link href="https://anitaliandish.com/" target="blank">
            <Image
              className="mx-auto"
              src="https://rshogan.imgix.net/clients/AnItalianDish.com/an_italian_dish-removebg-preview.png"
              height={50}
              width={200}
              loading="lazy"
              alt="An Italian Dish Logo"
            />
          </Link>

          <Link href="https://www.thomashenrywines.com/" target="_blank">
            <Image
              className="mx-auto"
              src="https://rshogan.imgix.net/personal/img/thomas_henry_wines.png"
              height={50}
              width={89}
              loading="lazy"
              alt="Thomas Henry Wines Logo"
            />
          </Link>
          <Link href="https://www.thekrealty.com/" target="_blank">
            <Image
              className="mx-auto"
              src="https://rshogan.imgix.net/clients/priti-kothari/priti_logo-removebg-preview.png"
              width={100}
              height={100}
              loading="lazy"
              alt="K Realty Logo"
            />
          </Link>
          <Link href="https://ticketsaver.net/" target="_blank">
            <Image
              className="mx-auto"
              src="https://rshogan.imgix.net/clients/ticket-saver/logo-nobg.jpg"
              height={75}
              width={193}
              loading="lazy"
              alt="Ticket Saver Logo"
            />
          </Link>
          <Link href="https://www.jessicahoganma.com/" target="_blank">
            <Image
              className="mx-auto"
              src="https://rshogan.imgix.net/personal/logos/jh_logo_white.png"
              height={50}
              width={89}
              loading="lazy"
              alt="Jessica Hogan MA Logo"
            />
          </Link>
          <Link href="https://www.broadwaymedia.com/" target="_blank">
            <Image
              className="mx-auto"
              src="https://global-uploads.webflow.com/5fda52485229dd713d28f150/6243d2cd5b39455aafc9dbeb_web-slug.png"
              height={50}
              width={89}
              loading="lazy"
              alt="Broadway Media Distribution"
            />
          </Link>
        </div>
      </div>
      {/* Testimonials */}
      <section className="w-full bg-white body-font pb-12">
        <div className="max-w-4xl mx-auto px-5 py-24">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg mb-6">
              Robert helped me create a website and set up my blog. I had zero
              experience and had no idea how to go about it. Thanks to Roberts
              help, my site is up and running, and I am very pleased with how it
              looks. Robert was so patient and knowledgeable. He made the
              process easy and enjoyable. I highly recommend Robert!
            </p>
            <Image
              className="object-cover mx-auto rounded-full"
              alt="Woman Testimonial Portrait"
              height={64}
              width={64}
              src={Testimonial}
            />

            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm mt-3">
              Ellen S.
            </h2>
            <p className="text-gray-500">
              <Link href="https://anitaliandish.com/" target="_blank">
                AnItalianDish.com
              </Link>
            </p>
          </div>
        </div>
      </section>
      {/* Start a Project  */}
      <section className="pb-32 -mt-32 md:-mt-24 lg:-mt-16 text-white text-center">
        <div className="bg-gradient-to-r from-vivid-900 to-vivid-600 max-w-7xl w-5/6 mx-auto bg-gray-700 text-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:space-x-6 w-3/4 lg:w-5/6 mx-auto justify-center py-12">
            <h2 className="text-white text-2xl font-bold lg:w-1/4">
              Start a project
            </h2>
            <p className="mt-2 text-white lg:flex-auto lg:w-1/2">
              Interested in working together? <span className="lg:block"></span>
              We should queue up a chat. I’ll buy the coffee.
            </p>
            <button
              className="w-1/2 mx-auto mt-6 lg:mt-0 lg:py-0 lg:rounded-full py-3 px-4 lg:px-10 border-2 lg:w-1/4 hover:bg-white hover:text-vivid-500"
              onClick={() => setShowModal(!showModal)}
            >
              Lets do this
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="max-w-4xl mx-auto text-center py-8">
        <Image
          src="https://rshogan.imgix.net/personal/logos/rsh_logo_with_text_nobg.png"
          loading="lazy"
          height={100}
          width={198}
          className="mx-auto -mt-12 mb-24"
          alt="RobertsHogan Logo"
        />
        <div className="flex flex-col justify-between mt-16">
          <span>Handcrafted by Robert.</span>
          <span className="flex  sm:mt-0 pt-4 justify-center  space-x-4">
            <Link
              href="mailto:robert@robertshogan.com"
              target="_blank"
              className=" hover:text-vivid-500"
              aria-label="Mail Icon"
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
                ></path>
              </svg>
            </Link>
            <Link
              href="https://www.facebook.com/robertshogancom"
              target="_blank"
              className=" hover:text-vivid-500"
              aria-label="Facebook Icon"
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
            </Link>

            <Link
              href="https://twitter.com/robert_s_hogan"
              target="_blank"
              className="hover:text-vivid-500"
              aria-label="Twitter Icon"
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
            </Link>

            <Link
              href="https://www.linkedin.com/in/robert-s-hogan/"
              target="_blank"
              className="hover:text-vivid-500"
              aria-label="Linked Icon"
              rel="noreferrer"
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
            </Link>
            <Link
              href="https://github.com/robert-s-hogan"
              target="_blank"
              className=" hover:text-vivid-500"
              aria-label="Github Icon"
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
                <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"></path>
              </svg>
            </Link>
            <Link
              href="https://www.upwork.com/freelancers/robertshogan"
              target="_blank"
              className=" hover:text-vivid-500"
              aria-label="Upwork Icon"
              rel="noreferrer"
            >
              <svg
                enableBackground="new 0 0 2500 2500"
                className="h-6 w-6"
                viewBox="0 0 2500 2500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m2315.4 0h-2130.7c-102 0-184.7 80.2-184.7 179.1v2141.7c0 99 82.7 179.2 184.7 179.2h2130.7c102 0 184.6-80.3 184.6-179.2v-2141.7c0-98.9-82.6-179.1-184.6-179.1z"
                  fill="#6fda44"
                />
                <path
                  d="m1834.6 1453.7c-98.4 0-190.5-41.7-274.3-109.6l20.4-95.8.9-3.5c18.2-102 75.8-273.3 253-273.3 132.9 0 241 108.3 241 241.3-.4 132.6-108.5 240.9-241 240.9zm0-726.7c-226.4 0-401.9 147.3-473.2 389.5-109-163.7-191.4-360.2-239.7-525.7h-243.6v634.8c0 125.1-101.9 227.1-226.9 227.1s-226.8-102-226.8-227.1v-634.8h-243.7v634.8c-.9 260 210.5 473.4 470.1 473.4s471-213.4 471-473.4v-106.5c47.4 98.9 105.4 198.7 175.9 287.5l-149.3 702.7h249.5l108.1-509.7c94.8 60.8 203.8 98.9 328.8 98.9 267.2 0 484.7-219.2 484.7-486.7-.2-267-217.7-484.8-484.9-484.8z"
                  fill="#fff"
                />
              </svg>
            </Link>
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
                    type="button"
                    className="border-0 close absolute top-0 right-0 my-0"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShowModal(!showModal)}
                  >
                    <span
                      className="text-5xl font-light text-right  text-black"
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
                          <Link
                            className="text"
                            href="mailto:robert@robertshogan.com"
                          >
                            Email me
                          </Link>
                        </div>
                      </div>
                    </div>

                    <Form />
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
