# TypeScript

Date: `2024-03-08`

Status: `Accepted`

## Context

When deciding on TypeScript vs. JavaScript, we need to consider the following:

- TypeScript is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code.
- TypeScript is statically typed, which means that it can catch errors at compile time.
- TypeScript is a popular choice for large codebases because it helps with code organization and maintainability.
- TypeScript is supported by most modern IDEs, which means that you get better autocompletion and type checking.
- TypeScript can be transpiled to JavaScript, which means that you can use it in any environment that supports JavaScript.

## Decision

We have decided to use [TypeScript](https://www.typescriptlang.org/) as our primary front-end language over JavaScript and strongly advise that
TypeScript be used for all new projects going forward.

TypeScript offers several advantages over JavaScript, including static typing, better code organization, and better
tooling support.

We are convinced that the experience offered by [TypeScript](https://www.typescriptlang.org/) will enhance your capabilities as a developer. 

- Through its enforcement of explicit data types, TypeScript delivers immediate feedback as you code.
- This manifests either as useful autocomplete suggestions within your editor or as immediate error indications through red squiggly lines for attempts to utilize non-existent properties or incorrect data types.
- Such features preemptively address errors that might otherwise emerge in later stages of debugging.
- For both newcomers to web development and experienced professionals, the disciplined approach enforced by [TypeScript](https://www.typescriptlang.org/) promises a smoother and more predictable coding journey compared to using plain JavaScript.

## Consequences

- Developers will need to learn TypeScript if they are not already familiar with it.
- Developers will need to set up a TypeScript build pipeline for their projects.
- Developers will need to use TypeScript-specific tools and libraries.
- Developers will need to write type definitions for any third-party libraries that they use.
