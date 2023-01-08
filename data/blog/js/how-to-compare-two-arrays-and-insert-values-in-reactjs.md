---
title: react compare two arrays and insert values
date: '2022-07-09'
summary: 'react compare two arrays and insert values'
tags: ['react', 'js', 'filter']
draft: false
---

```js
var result = result1.filter(function (o1) {
  return !result2.some(function (o2) {
    return o1.id === o2.id // return the ones with equal id
  })
})
// if you want to be more clever...
let result = result1.filter((o1) => !result2.some((o2) => o1.id === o2.id))
```

```js
//lodash solution
var result1 = [
  { id: 1, name: 'Sandra', type: 'user', username: 'sandra' },
  { id: 2, name: 'John', type: 'admin', username: 'johnny2' },
  { id: 3, name: 'Peter', type: 'user', username: 'pete' },
  { id: 4, name: 'Bobby', type: 'user', username: 'be_bob' },
]

var result2 = [
  { id: 2, name: 'John', email: 'johnny@example.com' },
  { id: 4, name: 'Bobby', email: 'bobby@example.com' },
]

var result3 = _(result1)
  .differenceBy(result2, 'id', 'name')
  .map(_.partial(_.pick, _, 'id', 'name'))
  .value()

console.log(result3)
```

SEO: react compare two arrays and insert values
Source: https://stackoverflow.com/questions/32965688/comparing-two-arrays-of-objects-and-exclude-the-elements-who-match-values-into
