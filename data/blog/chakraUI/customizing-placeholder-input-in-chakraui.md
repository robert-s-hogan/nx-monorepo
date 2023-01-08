---
title: Customizing input placeholder in ChakraUI
date: '2022-07-03'
summary: 'Here is how ChakraUI handles placeholder customization for inputs'
tags: ['react', 'chakraUI']
draft: false
---

```js
<Stack spacing={3}>
  <Input placeholder="default placeholder" />
  <Input placeholder="custom placeholder" _placeholder={{ opacity: 1, color: 'gray.500' }} />
  <Input color="teal" placeholder="custom placeholder" _placeholder={{ color: 'inherit' }} />
  <Input
    color="tomato"
    placeholder="custom placeholder"
    _placeholder={{ opacity: 0.4, color: 'inherit' }}
  />
</Stack>
```

help: https://github.com/chakra-ui/chakra-ui/discussions/3110
source: https://chakra-ui.com/docs/components/input
