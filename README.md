# How to Use

You can choose from one of the following two methods to use this repository:

## Getting Started

```bash
pnpm create next-app --example https://github.com/vercel/examples/tree/main/solutions/nx-monorepo nx-monorepo
```

### Development server

Run `pnpm nx serve <app_name>` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Build

Run `pnpm nx build <app_name>` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

To Build \*_every_ app

```bash
pnpm nx run-many --targets=build --all

```

### Running unit tests

Run `pnpm nx test <app_name>` to execute the unit tests via [Jest](https://jestjs.io).

Run `pnpm nx affected:test` to execute the unit tests affected by a change.

### Code scaffolding

Run `pnpm nx g @nrwl/react:component my-component --project=app` to generate a new component.

### Generate an application

Run `pnpm nx g @nrwl/react:app new-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

### Generate a library

Run `pnpm nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@with-nx/mylib`.

### Install TailwindCSS to a project

Run `pnpm nx g @nrwl/react:setup-tailwind --project=<your app here>` to install TailwindCSS to an library or application

### Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

```

```
