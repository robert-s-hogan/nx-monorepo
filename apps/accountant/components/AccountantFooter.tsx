import React, { useState } from 'react';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';
import Link from 'next/link';

const AccountantFooter = () => {
  return (
    <footer>
      <div id="footer">
        <a href="/about">ABOUT</a>

        <a href="/accounting-services">ACCOUNTING SERVICES</a>

        <a href="/accounting-resources">RESOURCES</a>

        <a href="/blog">BLOG</a>

        <a href="/faq">FAQ</a>

        <a href="/contact.php">CONTACT</a>
      </div>

      <p className="address">
        Address: 7 Random Avenue, Pearl Street, Cleveland, 0020
      </p>

      <div className="footerlinks">
        <a href="/privacy-policy" rel="nofollow">
          Privacy Policy
        </a>

        <a href="/terms-and-conditions" rel="nofollow">
          Terms &amp; Conditions
        </a>

        <p className="text-muted copyright">
          &copy; Your Website/Business 2017
        </p>
      </div>
    </footer>
  );
};

export default AccountantFooter;
