---
title: How to add mediq queries in Antd
date: '2022-07-08'
summary: 'Here is how I added media queries to Antd components'
tags: ['antd', 'media queries', 'quick fix']
draft: false
---

```js
const layout = {
  labelCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 8 }, lg: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 12 }, lg: { span: 12 } },
}
```

## Add the layout via spread operator onto the Antd component

```js
<Form {...layout}>content</Form>
```

SEO: antd media query
Source: https://stackoverflow.com/questions/64997115/how-to-implement-responsive-layout-in-ant-design-form
