---
title: Setting up images in Next.js
date: '2022-07-08'
summary: 'Here is how set up images into Next.js'
tags: ['next.js', 'images', 'next.config.js']
draft: false
---

## next/image Un-configured Host

```js
// next.config.js
module.exports = {
  images: {
    domains: ['assets.example.com'],
  },
}
```

Source: https://nextjs.org/docs/messages/next-image-unconfigured-host
