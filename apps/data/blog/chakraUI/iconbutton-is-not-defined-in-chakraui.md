---
title: ReferenceError IconButton is not defined in chakraui
date: '2022-07-20'
summary: 'Here is how I handled ChakraUI to create responsive sizes on ChakraUI components'
tags: ['react', 'chakraUI', 'react-icons', 'fix']
draft: false
---

Make sure @chakru-ui/react is installed and import into file.

```js
npm i @chakru-ui/react

or

yarn add @chakru-ui/react
```

Add icon to file

```js
//App.js
import { IconButton } from '@chakra-ui/react'
```

Now install react-icons to use a custom icon

```js
npm install react-icons --save
```

Add ChakraUI syntax to the return portion of the component

```js
//App.js
<IconButton
  variant="outline"
  colorScheme="teal"
  aria-label="Call Sage"
  fontSize="20px"
  icon={<MdPhone />}
/>
```

Finally make sure the react-icons libarary is imported at the top of the file

```js
//App.js
import { IconButton } from '@chakra-ui/react'
import { MdPhone } from 'react-icons/md'
```

SEO: ReferenceError: IconButton is not defined chakraui
