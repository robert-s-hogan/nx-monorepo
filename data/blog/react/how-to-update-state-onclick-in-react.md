---
title: How to update state onClick in React
date: '2022-07-09'
summary: 'Here is how I generate new state with onClick in React.js'
tags: ['react', 'useState']
draft: false
---

```js
const Example = () => {
  const [buttons, setButtons] = React.useState([
    { name: 'Select', id: 1 },
    { name: 'Select', id: 2 },
    { name: 'Select', id: 3 },
  ])

  const handleButtonClick = (i) => {
    setButtons((prevState) => {
      const nextState = prevState.map((btn) => ({
        ...btn,
        name: 'Select',
      }))
      nextState[i].name = 'Selected'
      return nextState
    })
  }

  return (
    <div>
      {buttons.map(({ name, id }, i) => (
        <button key={id} onClick={() => handleButtonClick(i)}>
          {name}
        </button>
      ))}
    </div>
  )
}

ReactDOM.render(<Example />, document.querySelector('#app'))
```

SEo: generate content with click react
Source: https://stackoverflow.com/questions/39913863/how-to-manually-trigger-click-event-in-reactjs
Source: https://stackoverflow.com/questions/71539246/update-button-text-on-click-rendered-using-map-method-in-reactjs
