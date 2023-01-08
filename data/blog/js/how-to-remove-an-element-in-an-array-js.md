---
title: How to remove a random element in an array .js
date: '2022-07-09'
summary: 'Here is how I removed randomized elements in an array JS'
tags: ['JS']
draft: false
---

```js
for (var i = array.length - 1; i >= 0; i--) {
  array.splice(Math.floor(Math.random() * array.length), 1)
  console.log(array)
}
```

```js
while (array.length) {
  var index = Math.floor(Math.random() * array.length)
  console.log(array[index]) // Log the item
  array.splice(index, 1) // Remove the item from the array
}
```

```js
var items = ['a', 'b', 'c', 'd']
var randomIndex = Math.floor(Math.random() * items.length)
var randomItem = items.splice(randomIndex, 1)[0]
console.log('random item: %o', randomItem)
console.log('remaining items: %o', items)
```

```js
var items = new Array(2, 3, 4, 5, 6, 7, 8, 9, 10)

items.sort(function () {
  return 0.5 - Math.random()
})

$('#test').on('click', function () {
  var ran = items.pop()
  alert(ran ? ran : 'No more numbers in array')
})
```

SEO: random item in array removed from list js
Source: https://stackoverflow.com/questions/36069870/how-to-remove-random-item-from-array-and-then-remove-it-from-array-until-array-i
