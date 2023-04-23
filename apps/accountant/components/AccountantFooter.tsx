import React, { useState } from 'react';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';
import Link from 'next/link';

const AccountantFooter = () => {
  return (
    <footer>
      <div id="footer">
        <a href="http://yourwebsitename.com/about.html">ABOUT</a>

        <a href="http://yourwebsitename.com/accounting-services.html">
          ACCOUNTING SERVICES
        </a>

        <a href="http://yourwebsitename.com/accounting-resources.html">
          RESOURCES
        </a>

        <a href="http://yourwebsitename.com/blog.html">BLOG</a>

        <a href="http://yourwebsitename.com/faq.html">FAQ</a>

        <a href="http://yourwebsitename.com/contact.php">CONTACT</a>
      </div>

      <p className="address">
        Address: 7 Random Avenue, Pearl Street, Cleveland, 0020
      </p>

      <div className="footerlinks">
        <a href="http://yourwebsitename.com/privacy-policy.html" rel="nofollow">
          Privacy Policy
        </a>

        <a
          href="http://yourwebsitename.com/terms-and-conditions.html"
          rel="nofollow"
        >
          Terms &amp; Conditions
        </a>

        <p className="text-muted copyright">&copy; Your Website/Business 2017</p>
      </div>
    </footer>
  );
};

export default AccountantFooter;
