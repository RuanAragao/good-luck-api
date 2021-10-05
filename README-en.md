# Good Luck API

*Read in other languages: English, [Português(Brasil)](./README.md)*

API for generating and registering betting tickets without registering personal data.

## 📋 How will it be

An API will be developed using NextJS and MongoDB

Project base:

[NextJS Typescript Boilerplate](https://github.com/vercel/next.js/tree/master/examples/with-typescript-eslint-jest)

> Bootstrap a developer-friendly NextJS app configured with:
>
> - [Typescript](https://www.typescriptlang.org/)
> - Linting with [ESLint](https://eslint.org/)
> - Formatting with [Prettier](https://prettier.io/)
> - Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
> - Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

The generator should generate a random number and check if the registered number already exists or is in temporary reserve, if not, make a temporary reserve (certain seconds) and return to the user.

If the number is chosen, register it linked to a unique secret key that will be used to validate ticket ownership.

If you are asked to generate a new number, delete the temporary record and call the new number generation function.

If temporary registration time expires, call new number generation function.

Temporary booking time must be returned to the user.

<!-- GETTING STARTED -->
## :pushpin: Getting Started

This is an example of how you can set up this project locally.
To get a local copy up and running follow these simple example steps.


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/RuanAragao/good-luck-api.git
   ```
2. Install Yarn packages
   ```sh
   yarn install
   ```
3. Start the dev server
   ```sh
   yarn dev
   ```
   
### Build

1. Making a production build
   ```sh
   yarn build
   ```
2. Start the production server
   ```sh
   yarn start
   ```

## 💻 How to contribute

[Look how to contribute](./CONTRIBUTING.md).

## ⚖️ License

Good Luck is released under the terms of the [licença MIT](./LICENSE).

