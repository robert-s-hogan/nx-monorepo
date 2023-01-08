---
title: Syntax for react typescript components
date: '2022-07-01'
summary: 'Here is how to type react components'
tags: ['react', 'typescript']
draft: false
---

## Here is an example using functions

Types are better when you need to create functions, for example. Let’s imagine that we have a function that’s going to return an object called, type alias is more recommended for this approach:

```js
type Person = {
  name: string,
  age: number,
}

type ReturnPerson = (person: Person) => Person

const returnPerson: ReturnPerson = (person) => {
  return person
}
```

source: https://blog.logrocket.com/types-vs-interfaces-in-typescript/
