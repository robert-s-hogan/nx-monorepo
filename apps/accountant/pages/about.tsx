import React from 'react';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';

import AccountantLayout from '../components/AccountantLayout';

const About = () => {
  return (
    <AccountantLayout>
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-screen-md mx-auto">
            <div className="text-center">
              <p className="text-gray-600 font-light mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tempor leo sed ipsum egestas fringilla. Aliquam facilisis augue
                nec neque malesuada, id tempor enim bibendum.
              </p>
              <p className="text-gray-600 font-light mb-8">
                Vivamus placerat, nulla vel aliquam tincidunt, ante libero
                pulvinar massa, sed porta enim lacus fringilla dui. Duis tempor,
                lectus quis elementum fringilla, magna leo bibendum ex, sit amet
                volutpat eros lectus vel justo.
              </p>
              <p className="text-gray-600 font-light mb-8">
                Integer pharetra neque et dignissim malesuada. Fusce in
                venenatis ipsum. Cras neque ligula, pretium id ligula vitae,
                auctor varius orci.
              </p>
              <p className="text-gray-600 font-light mb-8">
                Nullam porttitor, nisi facilisis condimentum sollicitudin, diam
                erat placerat sapien, vitae mollis felis justo et nibh. Ut nec
                mollis elit. Nunc ut ipsum ac sem vehicula pellentesque.
              </p>
              <p className="text-gray-600 font-light mb-8">
                Ut tempus sodales volutpat. Donec accumsan mi a arcu iaculis
                accumsan. Praesent aliquam elit vulputate odio iaculis
                ultricies. Quisque erat sapien, viverra ut turpis in, vehicula
                feugiat libero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AccountantLayout>
  );
};

export default About;
