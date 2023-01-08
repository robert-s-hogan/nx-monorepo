---
title: React module not found  can't resolve @emotion/react
date: '2022-07-06'
summary: 'Here is my solution to the error: Module not found: Cant resolve emotion-theming'
tags: ['react', 'chakraUI']
draft: false
---

## Solve - Module not found: Can't resolve @emotion/react

To solve the error "Module not found: Error: Can't resolve '@emotion/react'", make sure to install the @emotion/react package by opening your terminal in your project's root directory and running the command npm install @emotion/react and restart your dev server.

Open your terminal in your project's root directory (where your package.json file is located) and run the following commands:

```js
# 👇️ with NPM
npm install @emotion/react
npm install @emotion/core
npm install @emotion/styled

# ----------------------------------------------

# 👇️ with YARN
yarn add @emotion/react
yarn add @emotion/core
yarn add @emotion/styled
```

If you are using the @emotion/css package, make sure to install it as well.

If the error is not resolved, try to delete your node_modules and package-lock.json (not package.json) files, re-run npm install and restart your IDE.

```shell
# 👇️ delete node_modules and package-lock.json
rm -rf node_modules
rm -f package-lock.json

# 👇️ clean npm cache
npm cache clean --force

npm install
```

Make sure to restart your IDE and dev server if the error still persists. VSCode often glitches and a reboot solves things sometimes.

Now you should be able to import and use the @emotion/react package.

```jsx
// App.js
/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from '@emotion/react'

function App() {
  return (
    <div>
      <p
        css={css`
          color: red;
        `}
      >
        Hello world
      </p>
    </div>
  )
}

export default App
```

If you're still getting the "Module not found: Error: Can't resolve '@emotion/react'" error, open your package.json file and make sure it contains the @emotion/react package in the dependencies object.

```json
//package.json
{
  // ... rest
  "dependencies": {
    "@emotion/core": "^11.0.0",
    "@emotion/react": "^11.8.2",
    "@emotion/styled": "^11.8.1"
  }
}
```

The @emotion/react module should NOT be globally installed or be in your project's devDependencies, it should be in the dependencies object in your package.json file.

You can try to manually add the line and re-run npm install.

```shell
npm install
```

Or install the latest version of the packages:

```shell
npm install @emotion/react@latest
npm install @emotion/core@latest
npm install @emotion/styled@latest
```
