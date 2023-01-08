---
title: Using ChakraUI icons
date: '2022-07-04'
summary: 'Here is how ChakraUI handles icons'
tags: ['react', 'chakraUI', 'react-icons']
draft: false
---

```js
// 1. Import
import { Icon } from '@chakra-ui/react'
import { MdSettings } from 'react-icons/md'

// 2. Use the `as` prop
function Example() {
  return <Icon as={MdSettings} />
}
```

SEO: chakra ui icons
Source: https://chakra-ui.com/docs/components/icon
