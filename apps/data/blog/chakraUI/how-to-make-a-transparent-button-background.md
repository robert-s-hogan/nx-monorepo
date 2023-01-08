---
title: How to make a transparent button background
date: '2022-06-16'
summary: 'Here is how I setup a variant background for the ChakraUI button component'
tags: ['react', 'chakraUI', 'extendTheme']
draft: false
---

## Verify ChakraUI libraries are installed

```js
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

# or

yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

## Import libaries into your App

```js
import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <TheRestOfYourApplication />
    </ChakraProvider>
  )
}
```

## Finally, use the extendTheme library from '@chakra-ui/react to customize the default theme

```js
//_app.js
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        transparent: {
          bg: 'transparent',
        },
      },
      _hover: {
        bg: 'brand.900',
        color: 'white',
      },
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
```

## Usage

```js
//NavBar.js
<Menu>
  <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="transparent" />
  <MenuList py={0} zIndex={3}>
    <MenuItem p={0}>
      <Select
        placeholder="StagePlayer Web"
        borderTop="0"
        borderLeft="0"
        borderRight="0"
        roundedBottom="0"
      >
        <option value="option1">About SP Web</option>
        <option value="option2">Contact Us</option>
      </Select>
    </MenuItem>
    <MenuItem p={0}>
      <Select
        placeholder="My Collections"
        borderTop="0"
        borderLeft="0"
        borderRight="0"
        roundedBottom="0"
      >
        <option value="option1">New Collection</option>
        <option value="option2">View/Edit</option>
      </Select>
    </MenuItem>
    <MenuItem p={0}>
      <Select
        placeholder="My Productions"
        borderTop="0"
        borderLeft="0"
        borderRight="0"
        roundedBottom="0"
      >
        <option value="option1">New Production</option>
        <option value="option2">Active Productions</option>
        <option value="option2">Retired Productions</option>
      </Select>
    </MenuItem>
    <MenuItem>Login/Logout</MenuItem>
    <MenuItem>Help</MenuItem>
  </MenuList>
</Menu>
```

SEO: transparent button chakraui
