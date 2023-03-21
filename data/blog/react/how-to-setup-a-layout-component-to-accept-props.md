---
title: How to setup a layout component to accept props
date: '2022-10-06'
summary: 'Here is how I accept props to adjust the background image of the layout'
tags: ['react', 'chakraUI', 'background image']
draft: false
---

```js
import Image from 'next/image'
import React from 'react'
import Head from 'next/head'
import Banner from './Banner'

import { Container, VStack, Box, Flex, Text } from '@chakra-ui/react'
// @ts-ignore
import NavBar from './NavBar.tsx'
import CurtainWarmerBg from '../assets/images/login_curtains.jpg'

interface Props {
  meta?: {
    title?: string,
  };
  showCurtainWarmers?: boolean;
  hideFooter?: boolean;
  children?: React.ReactNode;
}

const curtainWarmerBackground = (
  <Image
    src={CurtainWarmerBg}
    alt="hero"
    layout="fill"
    objectFit="cover"
    objectPosition="center"
    style={{ position: 'absolute', zIndex: '-10', maxWidth: '100%' }}
  />
)

export default function Layout({
  meta: metaProps,
  showCurtainWarmers: curtainWarmerProp,
  children,
}: Props) {
  const meta = {
    title: 'Your Page Title here',
    ...metaProps,
  }
  const curtainWarmer = curtainWarmerProp || false

  return (
    <div style={{ position: 'relative' }}>
      {curtainWarmer && (
            <Image
              src={CurtainWarmerBg}
              alt="hero"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              style={{ position: 'absolute', zIndex: '-10' }}
            />
        </>
      )}

      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner
        description="Looking for script-accurate show content? Check out"
        ctaText="Scenic Projections"
        link="https://www.broadwaymedia.com/products/stage-projectors"
      />
      <NavBar />
      <main style={{ zIndex: '9999' }}>{children}</main>
    </div>
  )
}
```
