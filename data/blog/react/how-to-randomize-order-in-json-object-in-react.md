---
title: How to fix ampersand(&) issues in URL string parmaters
date: '2022-07-09'
summary: 'Here is how I bypassed the compiler ampersand errors'
tags: ['react', 'url paramters']
draft: false
---

```js
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

// Used like so
var arr = [2, 11, 37, 42]
shuffle(arr)
console.log(arr)
```

SEO: randomize order in json object react
Source: https://stackoverflow.com/questions/57123259/how-to-randomly-fetch-from-a-json-file-and-render-it-into-a-flatlist
Source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
