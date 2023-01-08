---
title: How to install react-icons with chakraui
date: '2022-07-09'
summary: 'Here is how I installed react-icons and chakraUI in React.js'
tags: ['react', 'chakraui', 'react-icons']
draft: false
---

```js
//install react-icons
npm install react-icons --save

or

yarn add react-icons --save
```

```js
//install chakraui
@chakra-ui/react
```

```js
//App.js
import { Icon } from '@chakra-ui/react'
import { MdSettings } from 'react-icons/md'

function Example() {
  return <Icon as={MdSettings} />
}
```

Source: https://react-icons.github.io/react-icons/ &&
