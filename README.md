# Project Name

This project is built using a highly performant tech stack that includes Next.js, React.js, TypeScript, Redux Toolkit, useSWR, Tailwind CSS, and NX monorepo environment.

## Tech Stack

- **Next.js**: A powerful framework for building React applications with server-rendering and static site generation capabilities.
- **React.js**: A popular library for building user interfaces with reusable components.
- **TypeScript**: A superset of JavaScript that adds static typing, improving developer productivity and code quality.
- **Redux Toolkit**: The official, opinionated, batteries-included toolset for efficient Redux development.
- **useSWR**: A React Hooks library for data fetching and caching, optimized for use with RESTful and GraphQL APIs.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **NX**: A powerful extensible monorepo tool for building and scaling applications.

## Optimal Performance Setup

To achieve optimal performance with this tech stack, consider the following setup:

1. **Server Side Rendering (SSR)**: Leverage Next.js' SSR capabilities for pages that require dynamic data or need to be updated frequently. This improves performance and SEO.
2. **Static Site Generation (SSG)**: Utilize Next.js' SSG capabilities for static or infrequently updated pages. This reduces server load and improves loading speed.
3. **Dynamic Imports**: Use dynamic imports for components that are not critical for the initial render, such as modals or dialogs. This reduces the initial bundle size and speeds up page loading.
4. **Redux Toolkit**: Implement Redux Toolkit for complex state management scenarios or when it's necessary to share state between multiple components.
5. **useSWR**: Use useSWR for simple state management, and when you need real-time updates, caching, and revalidation for your data fetching.
6. **Tailwind CSS**: Use Tailwind CSS for fast and efficient styling of your components with minimal custom CSS.
7. **NX Monorepo**: Organize your codebase using NX monorepo environment, allowing for code sharing, efficient dependency management, and better scalability.

## Getting Started

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Run the development server: `pnpm nx run <app_name>`
4. Open your browser and navigate to `http://localhost:4200`

For more information on how to build and deploy your project, refer to the individual documentation for each technology used in the stack.

## Indiviual App Structure

/components - app specific components - //mostly use libs/react-ui
/data - lookup tables of static data - //also in the libs/constants library
/hooks - custom react-hooks - //also in the libs/react-hooks
/pages - nextjs generated pages (app specific)
/pages/api - nextjs serverless functions or dynamic routing
/public - nextjs assets 
/services - api calls 
/types - set types for all data
/utils - functions that format, validation and calculations //also in libs/utils

### Development server

Run `pnpm nx serve <app_name>` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

When running apps you may need to run into incognito mode

### Build

#### Build a single app

Run `pnpm nx build <app_name>` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Build all apps

Run `pnpm nx run-many --target=build` to build all projects. This is great when updating any component in our libraries.

You can also `--target=lint,test` too

### Running unit tests

Run `pnpm nx test <app_name>` to execute the unit tests via [Jest](https://jestjs.io).

Run `pnpm nx affected:test` to execute the unit tests affected by a change.

### Code scaffolding

A command to use when you are unsure where the library will be installed is:

`--dry-run`

ex: `pnpm nx g @nrwl/react:component my-component --project=<app_name> --dry-run`

The `--dry-run` command will print out the file path in the terminal. You can verify the component was going into the proper location.

Run `pnpm nx g @nrwl/react:component my-component --project=<app_name>` to generate a new component.

This example will add a component into our existing `react-ui/atoms` library:

`pnpm nx g @nrwl/react:component my-component --project=react-ui/atoms --export`

### Generate an application

Run `pnpm nx g @nrwl/next:app new-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

### Generate a library

Run `pnpm nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@with-nx/mylib`.

ex:

`import { Button } from '@with-nx/react-ui';`

### Add tailwindCSS to a project

`pnpm nx g @nrwl/react:setup-tailwind --project=<your app here>`

### Storybook commands

Run storybook server locally

`pnpm nx run react-ui:storybook --serve`

### Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.


## Projects Checklist

1. Modular code - Follow folder structure
2. Next.JS - SSR for information that is updated consistently, otherwise SSG.
3. Code splitting - dynamic imports to any components that require user interaction
    widgets, content tabs, embedded content, user scrolls downs, interacts with specific elements, feature toggles, product details, cart summary, modals, popups, user accounts sections
4. Redux toolkit - for complex global state management
5. useSWR for caching
6. Next.js - set up serverless functions for caching strategy:
    // pages/api/products.ts
    import { NextApiRequest, NextApiResponse } from 'next';

    export default async (req: NextApiRequest, res: NextApiResponse) => {
    const response = await fetch('https://api.example.com/products');
    const data = await response.json();

    // Set Cache-Control header for caching the response
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=60');
    res.status(200).json(data);
    };
7. Review CI/CD
8. Confirm tailwindCSS is purging unused CSS
9. Set up types in /types folder
10. 