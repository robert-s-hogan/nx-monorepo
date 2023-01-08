---
title: Callback Queue and Event Loop
date: '2022-05-11'
summary: "This is a post on my understanding of JavaScript's runtime model based on an event loop and the order of processing events, and executing queued sub-tasks."
tags: ['js', 'event loop']
draft: false
---

```js
function printHello() {
  console.log('Hello')
}
function blockFor1Sec() {
  //Loop through console.log's for about 1000ms
}
setTimeout(printHello, 0)
blockFor1Sec()
console.log('Me First')
```

## Here is the **Thread of Execution** with an explanation

First Line

```js {1}
function printHello() { ... }
```

#1 Function is stored in the Global Memory to be called later

```js {1}
function blockFor1Sec() { ... }
```

#2 printHello() Function is stored in the Global Memory to be called later

```js {1}
setTimeout(printHello, 0)
```

#3 setTimeout is a Web Browser Feature called **Timer**. When called, the timer starts (0 in this case), and the browser waits for the time (in ms) to complete. Once complete, the function printHello() gets sent to the callback queue and waits for the event loop to send the function printHello() to the **call stack**.

```js {1}
blockFor1Sec() { ... }
```

#4 function blockFor1Sec() is called from Global Memory to be added to the thread of execution. It takes 1000ms for the function blockFor1Sec() to be completed.

```js {1}
console.log('Me First')
```

#5 the console.log("Me First") runs immediately after the function blockFor1Sec() since the console log is on the next line of the thread of execution.

```js {1}
 function printHello()
 // leaves the callback queue gets added to the call stack by the event loop
```

#6 The call stack adds printHello() to the thread of execution and executes the function.

### Summary

1. 0ms setTimeout(...) is called
2. 0ms Timer (Web Browser Feaure) starts in the web browser
3. 1ms blockFor1Sec() begins to execute and goes for 1000ms
4. 1001ms console.log("Me First") is printed in the console
5. 1002ms console.log("Hello") is printed in the console
