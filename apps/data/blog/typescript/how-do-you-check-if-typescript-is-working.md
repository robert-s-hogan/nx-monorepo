---
title: How do you check if typescript is working
date: '2022-06-16'
summary: 'Here is how I verify typescript is working'
tags: ['typescript', 'install', 'fix']
draft: false
---

## Prerequisites: Node.Js and NPM

```js
npm install -g typescript

 or

 yarn add typescript
```

## Command Line Usage

```js
//Single file
tsc app.ts
```

```js
//Compile multiple files
tsc app.ts about.ts login.ts
```

```js
//All pages
tsc *.ts
```

### Watcher

```js
tsc *.ts --out app.js --watch
```
