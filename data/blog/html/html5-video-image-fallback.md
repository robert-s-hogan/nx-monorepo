---
title: HTML5 Video images fall back
date: '2022-07-08'
summary: 'Here is how I used an image as a fallback for Safari browsers'
tags: ['html', 'video', 'quick fix']
draft: false
---

##

```js
<video width="316" height="161" poster="https://i.stack.imgur.com/BfXRi.png" controls>
  <source src="https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4" />
  <source src="https://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

SEO: html5 video image fallback
Source: https://stackoverflow.com/questions/15500154/display-fallback-image-even-if-the-browser-supports-html5-video
