---
title: Module not found cant resolve emotion-theming
date: '2022-10-01'
summary: 'Here is how I fixed this issue installing ChakraUI in Next.js'
tags: ['chakraUI', 'nextjs']
draft: false
---

error - ./node_modules/@chakra-ui/core/dist/es/ThemeProvider/index.js:3:0 Module not found: Can't resolve 'emotion-theming'

@chakra-ui/core: ^0.8.0 is outdated, and is afaik supported up to react 16 and emotion 10.
@chakra-ui/react: ^1.0.0 (or the current one, 1.6.1) works fine with react 17 and emotion 11
