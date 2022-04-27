# date-to-iso-8601-string

Presents a JavaScript `Date` as a string in [ISO 8601 format](https://www.loc.gov/standards/datetime/iso-tc154-wg5_n0038_iso_wd_8601-1_2016-02-16.pdf), with support for the Extended (`YYYY-MM-DD`) and Basic (`YYYYMMDD`) variants.

Note that this module uses the "local date" in the time zone of the machine, rather than the UTC dfate.

This package includes TypeScript types.

## Installation

```bash
# With npm
npm install --save date-to-iso-8601-string

# With Yarn
yarn add date-to-iso-8601-string
```

## Usage

### Presenting a Date using the more common "Extended" (`YYYY-MM-DD` format)

```js
// You can also import as a CommonJS module using `require`
import { dateToISO8601String } from 'date-to-iso-8601-string';

const date = new Date('2023-01-01');
dateToISO8601String(date);
//=> '2023-01-01'
```

### Presenting a Date using the less common "Basic" (`YYYY-MM-DD` format)

```js
import { dateToISO8601String, ISO8601DateFormat } from 'date-to-iso-8601-string';

const date = new Date('2023-01-01');
dateToISO8601String(date, ISO8601DateFormat.Basic);
//=> '20230101'
```

## Development

- This library code in `src/` is written with Typescript.
  - You can compile it to native JavaScript module form (`dist/esm`) and CommonJS form (`dist/commonjs`) by running `npm run build`.
  - The code is automatically built before pushing to `npm` thanks to a `prepublish` hook.
- Tests are implemented using Jest.
  - You can run the tests with `npm run test`.
- Linting (including code formatting) is enforced with ESLint, augmented by Prettier.
  - You can check your code with `npm run lint`, and automatically fix many failures with `npm run lint-and-fix`.

The compilation, testing and build process are automatically run on pushed code using GitHub Actions.

## With thanks to:

The following blog posts were very helpful for putting this - my first ever `npm` package - together!:

- https://blog.logrocket.com/publishing-node-modules-typescript-es-modules/ (@jackfranklin)
- https://blog.logrocket.com/testing-typescript-apps-using-jest/ (@ibywaks)
- https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/ (@stemmlerjs)
- https://khalilstemmler.com/blogs/tooling/prettier/ (@stemmlerjs)
