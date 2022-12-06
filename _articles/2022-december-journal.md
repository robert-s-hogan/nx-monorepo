---
title: 'Notes for December - Journal'
excerpt: 'Here are some observations and learnings regarding the technologies and methods to solve problems.'
date: '2022-12-01T05:35:07.322Z'
author:
  name: Robert Hogan
---

Here are my notes and review of December 2022.

## December 5th

Today I worked on moving a Next.js project using Yarn as the package manager to a Nx monorepo. I am going to use pnpm for the monorepo package management based on some of the benchmarks they brag about [pnpm] (https://pnpm.io/benchmarks).

I ran into a build error I couldn't figure out regarding a .scss file. I tried following the NEXT.js recommendation: npm install --save-dev sass but still couldn't resolve the issue. I am working with another developer and we are setting up a reusable/sharable video editor. The current implementation is using React.js with a Ruby backend using Electron.js. We are porting the editor over to NEXT.js and REST api stack.

Other error(s) I ran into were related to pnpm install issues. I had 4-5 libraries that wouldn't install with the recommended npm install commands. I really haven't used pnpm much so I'm sure there is a easy solution to this.

Outside of the scss and pnpm issue, most of the transition was pretty smooth. I copied over the folders opening two VS Codes and drag and dropping the folders to their new home. Then working through the library issues.

I'm excited to start building out the components and libraries!
