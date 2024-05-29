'use client';
import React from 'react';
import { Input, Label, TextArea } from '@with-nx/ace-eternity';

const QuoteForm = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-primary-color to-secondary-color text-on-primary">
      <div className="md:w-1/2 flex flex-col justify-center items-start p-8">
        <h1 className="text-5xl font-bold mb-4">
          Digitizing Your Business Growth
        </h1>
        <p className="text-lg mb-8">
          Expert Team Members | Results-Driven Approach | Streamlined Execution
        </p>
      </div>
      <div className="md:w-1/2 bg-white text-black my-32 mr-32 p-8">
        <p className="uppercase text-black">Request a Quote</p>
        <h2 className="text-black font-bold mb-6">
          Let's Create Something AMAZING Together
        </h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Name*</Label>
            <Input id="name" type="text" required />
          </div>
          <div>
            <Label htmlFor="company-name">Company Name*</Label>
            <Input id="company-name" type="text" required />
          </div>
          <div>
            <Label htmlFor="email">Email*</Label>
            <Input id="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="phone">Phone*</Label>
            <Input id="phone" type="tel" required />
          </div>
          <div>
            <Label htmlFor="message">Your Message*</Label>
            <TextArea
              id="message"
              placeholder="Your message here"
              value=""
              onChange={() => {}}
              className="h-[10rem]"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
