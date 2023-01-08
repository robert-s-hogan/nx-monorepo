---
title: HTML5 Video images fall back
date: '2022-07-08'
summary: 'Here is how I used an image as a fallback for Safari browsers'
tags: ['html', 'video', 'quick fix']
draft: false
---

```js
import unknownSizedImage from './assets/randomImage.jpeg.'
;<Image src={unknownSizedImage} layout="fill" alt="Alt Text" />
```

Source: https://nextjs.org/docs/basic-features/image-optimization
