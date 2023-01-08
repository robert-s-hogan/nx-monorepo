---
title: How to setup responsive grid columns
date: '2021-03-01'
summary: 'Here is how I use grid-template-columns to create responsive layouts'
tags: ['css', 'guide']
draft: false
---

```css
.grid {
    display: grid;
}
.grid-template-columns {
    repeat(1, minmax(0, 1fr))
};
```

```html
<div className="grid">
  <div className="grid-template-columns">
    <p>Hello World!</p>
  </div>
</div>
```
