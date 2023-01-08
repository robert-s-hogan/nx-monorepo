---
title: How to use useState and useEffect in React.js
date: '2022-07-09'
summary: 'Here is how used updated state in React.js'
tags: ['react', 'useState', 'useEffect']
draft: false
---

## Example 1

```js
const [testState, setTestState] = React.useState()

useEffect(() => {
  // do your stuff here when the state of testState is updated
}, [testState])

const Test = () => {
  setTestState('test')
}

;<button onClick={() => Test()}>btn</button>
```

## Example 2

```js
function HomePage() {
  // ...
  const [likes, setLikes] = useState()

  function handleClick() {
    setLikes(likes + 1)
  }

  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  )
}
```

seo: onclick randomize usestate useeffect
source: https://stackoverflow.com/questions/69138243/can-i-run-useeffect-with-onclick
