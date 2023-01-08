---
title: Adding background image to page chakraui
date: '2022-09-22'
summary: 'Here is how I added a background image to React/ChakraUI components'
tags: ['react', 'chakraUI', 'background image']
draft: false
---

## Quick answer:

```js
//React
<div style={{backgroundImage: 'url(/bg.jpg)'}}>
```

The default file path is '/public/' so make sure you have that folder and the image is in there.

## Here is a full React component solution

```js
//Index
import BgImage from '../public/background_image.jpg'

export default function Index() {
  return (
    <div
      style={{
        backgroundImage: `${BgImage}`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
      }}
    >
      Overlayed Text
    </div>
  )
}
```

## Finally, here is a CSS only solution.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="oNdergM" data-user="robertshogan" >
  <span>See the Pen <a href="https://codepen.io/robertshogan/pen/oNdergM">
  Hero Image using CSS</a> by Robert Hogan (<a href="https://codepen.io/robertshogan">@robertshogan</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
