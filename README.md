# Good Luck API

*Ler em outras linguagens: [English](./README-en.md), Português(Brasil)*

API para geração e registro de tickets de aposta sem registro de dados pessoais.

## 📋 Como será

A API irá ser desenvolvida usando NextJS e MongoDB

Projeto base:

[NextJS Typescript Boilerplate](https://github.com/vercel/next.js/tree/master/examples/with-typescript-eslint-jest)

> Bootstrap a developer-friendly NextJS app configured with:
>
> - [Typescript](https://www.typescriptlang.org/)
> - Linting with [ESLint](https://eslint.org/)
> - Formatting with [Prettier](https://prettier.io/)
> - Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
> - Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

O gerador deverá gerar um número randômico e checar se já existe o número registrado ou está em reserva temporária, se não houver, fazer uma reserva temporária (determinados segundos) e retornar para o usuário.

Se o número é escolhido, realizar registro do mesmo atrelado a uma chave única secreta que será usada para validar a propriedade do ticket.

Se é solicitado a geração de um novo número, excluir registro temporário e chamar função de geração de novo número.

Se o tempo de registro temporário expirar, chamar função de geração de novo número. 

O tempo de reserva temporária deve ser retornado ao usuário.

<!-- GETTING STARTED -->
## Começando

Este é um exemplo de como você pode configurar este projeto localmente.
Para obter uma cópia local instalada e funcionando, siga estas etapas simples de exemplo.

### Instalação

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
   
### Construir

1. Making a production build
   ```sh
   yarn build
   ```
2. Run a production server
   ```sh
   yarn start
   ```

## 💻 Como contribuir

[Veja como contribuir](./CONTRIBUTING.md).

## ⚖️ Licença

Good Luck API está sob os termos da [licença MIT](./LICENSE).

