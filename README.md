# No Clocks Frontend

> This repository represents the tech stack and architecture for No Clocks frontend development.

## Contents

- [No Clocks Frontend](#no-clocks-frontend)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Tech Stack](#tech-stack)
  - [Architecture](#architecture)
  - [Development](#development)
  - [Deployment](#deployment)
  - [Contributing](#contributing)

## Introduction

This repository serves as a foundation for all frontend development at No Clocks, LLC.

## Tech Stack

- [Remix](https://remix.run/) is the Web Framework of choice for No Clocks. Remix is a full-stack web framework that lets you build web apps with [React](https://reactjs.org/), server-rendered pages, and a data-fetching layer all in one.
- Static Types are enforced with [TypeScript](https://www.typescriptlang.org/).
- An excellent, customizable component library with [Radix UI](https://radix-ui.com/), a collection of low-level UI components and utility functions for React.
- [shadcn/ui](https://ui.shadcn.com/) is the component library of choice for No Clocks. It is a collection of accessible, reusable, and composable React components.
- [Vite](https://vitejs.dev/) is the build tool of choice for No Clocks. It is a fast, opinionated frontend build tool that provides a lightning-fast development experience.
- [Storybook](https://storybook.js.org/) is used for component development and documentation.
- Error Monitoring is handled by [Rollbar](https://rollbar.com/).
- [Docker](https://www.docker.com/) (and [Docker Compose](https://docs.docker.com/compose/)) is used for local development, containerization, and deployment.
- [Fly.io](https://fly.io/) is used for hosting and deployment.
- [GitHub Actions](https://github.com/features/actions) used for CI/CD (testing, linting, and deployment).
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) are used for code linting and formatting.
- End-to-end testing is handled by [Playwright](https://playwright.dev/).
- Unit testing is handled by [Vitest](https://vitejs.dev/guide/features.html#testing) and the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
- [PNPM](https://pnpm.io/) is used for package management.

Future additions:

- Database ORM is handled by [Prisma](https://www.prisma.io/).
- Runtime schema validation is handled by `Zod`
- [Jest](https://jestjs.io/) is used for testing.
- E-commerce functionality is handled by [Stripe](https://stripe.com/).

## Architecture

The frontend architecture is based on the [Remix](https://remix.run/) framework. Remix is a full-stack web framework that lets you build web apps with React, server-rendered pages, and a data-fetching layer all in one.

The frontend is a monolithic application that is split into the following directories and files:

- `src/` contains the main source code for the application.
  - `app/` contains the main application code.
    - `components/` contains the shared components.
    - `routes/` contains the routes for the application.
    - `styles/` contains the global styles for the application.
    - `utils/` contains shared utility functions.
    - `entry.client.tsx` is the entry point for the client-side code.
    - `entry.server.tsx` is the entry point for the server-side code.
    - `root.tsx` is the root component for the application.
  - `public/` contains the public assets for the application.
    - `favicons/` contains the favicons for the application.
    - `img/` contains the images for the application.
    - `robots.txt` is the robots.txt file for the application.
    - `favicon.ico` is the favicon for the application.
    - `site.webmanifest` is the web manifest for the application.
  - `types/` contains shared types.
  - `hooks/` contains shared hooks.
  - `lib/` contains shared utility functions.
  - `stories/` contains the stories for the components.
- `tests/` contains the tests for the application.
  - `e2e/` contains the end-to-end tests for the application.
  - `fixtures/` contains the fixtures for the tests.
  - `mocks/` contains the mocks for the tests.
  - `setup/` contains the setup for the tests.
  - `integration/` contains the integration tests for the application.
  - `unit/` contains the unit tests for the application.
- `docs/` contains the documentation for the application, written in Markdown.
- `assets/` contains static, repo-wide assets.
- `examples/` contains example code for the application.
- `scripts/` contains the scripts for the application.
- `config/` contains the configuration for the application.
- `.storybook/` contains the Storybook configuration for the application.
- `.github/` contains the GitHub Actions configuration for the application.
- `.vscode/` contains the Visual Studio Code configuration for the application.


## Development

To get started with development, clone the repository and run the following commands:

```bash
pnpm install
pnpm dev
```

This will start the development server at `http://localhost:3000`.

## Deployment

The application is deployed using [Fly.io](https://fly.io/). The deployment process is handled by GitHub Actions.

## Contributing

Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information on how to contribute to this repository.
