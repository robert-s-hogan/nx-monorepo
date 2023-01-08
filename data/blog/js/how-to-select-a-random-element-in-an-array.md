---
title: How to select a random element in an array JS
date: '2022-07-09'
summary: 'Here is how I created a random declaration to select a single element in an array JS'
tags: ['react', 'useState']
draft: false
---

## Use the Math.random(), array.length, and Math.floor() to Select a Random Element From an Array in JavaScript

```js
var arrStr = ['Mehvish', 'Tahir', 'John', 'Sania', 'Thomas']
var randElement = arrStr[Math.floor(Math.random() * arrStr.length)]
console.log(randElement)
```

SEO: selecting random array item i n js
Source: https://www.delftstack.com/howto/javascript/select-a-random-element-from-an-array-in-javascript/
