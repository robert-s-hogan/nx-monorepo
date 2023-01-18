# How to Use

You can choose from one of the following two methods to use this repository:

## Getting Started

```bash
pnpm create next-app --example https://github.com/vercel/examples/tree/main/solutions/nx-monorepo nx-monorepo
```

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

`import { Button } from '@with-nx/react-ui/atoms';`

### Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
