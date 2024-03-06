# Exoticca Technical Test - Nacho Cebey


# Exoticca Technical Test

Hello! I'm Nacho Cebery, and this is my technical test for Exoticca.

## Getting Started

To access the repository, simply download it and navigate to the project directory using the command line:

```bash
cd exoticca-tryout
```

Once inside, install the necessary dependencies and run the development server:

```bash
npm install
npm run dev
```

In this case, I chose to create a TypeScript project with Vite. The project includes various cards displaying information fetched from the API.

## Testing

I have included some basic component rendering tests using `vitest` + `react-testing-library`. You can run the tests using the following command:

```bash
npm run test
```

Feel free to explore and enhance the tests as needed.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
