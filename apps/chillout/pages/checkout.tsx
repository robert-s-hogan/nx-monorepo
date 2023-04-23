// pages/checkout.tsx
import React from 'react';
import ChilloutLayout from '../components/layout/ChilloutLayout';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';

import ReusableSection from '../components/ReusableSection';
import CheckoutForm from '../components/CheckoutForm';

const CheckoutPage: React.FC = () => {
  return (
    <ChilloutLayout>
      <section className="lg:flex flex-grow lg:justify-center py-32 px-4 lg:py-44 max-w-screen-7xl mx-2 lg:mx-auto h-fit">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-700">Order Form</h2>
            <span className="mt-2 font-medium text-gray-400">
              Place an order and we'll be in touch!
            </span>
          </div>
          <form
            name="purchase"
            data-netlify="true"
            // autocomplete="off"
            netlify-honeypot="bot-field"
          >
            {/* <p className="hidden">
              <label>
                Don’t fill this out if you’re human:{' '}
                <input className="bg-gray-50" name="bot-field" />
              </label>
            </p> */}
            <div className="lg:flex gap-x-10 pb-20 lg:pb-4 justify-center">
              <div>
                <div className="mb-8">
                  <div className="flex w-8 h-8 rounded-full justify-center items-center border-2 text-blue-500 border-blue-500">
                    <span className="text-2xl font-semibold">1</span>
                  </div>

                  <h3 className="uppercase tracking-wider text-xs font-semibold mt-2 text-gray-400">
                    Delivery Info
                  </h3>
                </div>
                <div className="input-animated">
                  <input
                    className="text-gray-600 bg-gray-50"
                    type="text"
                    id="name"
                    name="name"
                    required
                    pattern="\S+.*"
                    placeholder="the placeholder"
                  />
                  <label htmlFor="name" className="label-name">
                    <span className="content-name">Name</span>
                  </label>
                </div>
                <div className="input-animated">
                  <input
                    className="text-gray-600 bg-gray-50"
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="the placeholder"
                  />
                  <label htmlFor="email" className="label-email">
                    <span className="content-email">Email</span>
                  </label>
                </div>
                <div>
                  <textarea
                    className="border-0 w-full bg-gray-100"
                    name="address"
                    placeholder="Enter your detailed address here..."
                    id="address"
                    cols={30}
                    rows={5}
                    minLength={10}
                    maxLength={100}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="mt-16 lg:mt-0">
                <div className="mb-12">
                  <div className="flex w-8 h-8 rounded-full justify-center items-center border-2 text-blue-500 border-blue-500">
                    <span className="text-2xl font-semibold">2</span>
                  </div>

                  <h3 className="uppercase tracking-wider text-xs font-semibold mt-2 text-gray-400">
                    Product Info
                  </h3>
                </div>
                <div className="flex justify-between mx-12 lg:mx-8 mb-4">
                  <span className="text-sm font-semibold mr-4 text-gray-600">
                    Type
                  </span>
                  <select name="type" id="type">
                    <option>Airconditioner</option>
                    <option>Ultra Robo-Con</option>
                  </select>
                </div>
                <div className="flex justify-between mx-12 lg:mx-8 mb-4">
                  <span className="text-sm font-semibold mr-4 text-gray-600">
                    Quantity
                  </span>
                  <select name="quantity" id="quantity">
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <div>
                  <textarea
                    className="not_required border-0 w-full bg-gray-100"
                    name="comment"
                    placeholder="Additional comments..."
                    id="comment"
                    cols={30}
                    rows={3}
                    minLength={10}
                    maxLength={100}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  id="submit-button"
                  className="w-full uppercase text-center px-5 py-3 shadow-sm my-4 lg:mb-0 rounded-md font-semibold bg-blue-500 border text-blue-50  hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                >
                  Place Order
                </button>
                <span
                  id="success"
                  className="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-green-500 bg-green-100 text-green-600"
                >
                  Thanks! We'll be in touch soon.
                </span>
                <span
                  id="error"
                  className="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-red-500 bg-red-100 text-red-600"
                >
                  Whoops... Something went wrong.
                </span>
              </div>
              <div className="mb-12 w-full lg:w-1/4">
                <div className="flex w-8 h-8 rounded-full justify-center items-center border-2 text-blue-500 border-blue-500">
                  <span className="text-2xl font-semibold">3</span>
                </div>
                <CheckoutForm />
              </div>
            </div>
          </form>
        </div>
      </section>
    </ChilloutLayout>
  );
};

export default CheckoutPage;
