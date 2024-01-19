<h1 align="center">
  <⚡⚛️> Vite React Library Template
</h1>

<p align="center">
    <a href="https://github.com/manuelmartin-developer"><img src="https://img.shields.io/badge/manuelmartindev-OS-green.svg?style=flat-square" alt="Codely Open Source"/></a>
    <a href="https://github.com/manuelmartin-developer/vite-library-template/stargazers">
    <img src="https://img.shields.io/github/stars/manuelmartin-developer/vite-library-template.svg?style=flat-square" alt="Stars"/>
  </a>
</p>

<p align="center">
  Template for creating React libraries with TypeScript following best practices: Storybook for documentation, testing, linting, publishing to npm, etc.
  <br />
  <br />
</p>

## ⚡ Using this Vite template

1. Create your project based on this template:
  <br />

   - If you want to create a GitHub repository, we would recommend to use the GitHub "Use this template" button and clone your newly created repository
    - If you want to create a local project, you can clone this repository and then change the remote origin to your own repository

<br/>

2. Update your project information:
  <br />

    - [ ] Update the `package.json` with your project information:
    
     ```
      {
        "name": "@{user_name}/{repo-name}",
        "author": "{user_name}",
        "description": "Library description",
        "keywords": [
                "react",
                "awesome",
                "library"
                ],
        "version": "0.0.1",
        "license": "MIT",
        "repository": {
                "type": "git",
                "url": "git+your-repo-url.git"
            },
        "bugs": {
                "url": "https://your-repo-url/issues"
            },
        "homepage": "https://your-repo-url#readme",
        "publishConfig": {
                "registry": "https://npm.pkg.github.com/@{USER_NAME}"
            },
      }
     ```
    <br/>

    - [ ] Specify proper values for the `name`, `author`, `description`, `keywords`, `version`, `license`, `repository`, `bugs`, `homepage` and `publishConfig` properties
    <br/>
   - [ ] Change the author in `LICENSE` file
  
   ```
    MIT License

    Copyright (c) 2024 Your Name
   ```
   
    <br/>

   - [ ] Clean up this `README.md` file and fill it with your own information

    <br/>

3. Set up your GitHub Actions workflow:

    <br/>

   - [ ] If you do **not** wish to publish to npm, you can delete the `.github/workflows/publish.yml` file or disable the workflow in the GitHub Actions settings.

## 📚 Documentation

This template comes with Storybook configured to document your components. It also comes with a component folder structure and some examples.

- `npm run docs`: Run Storybook documentation in dev mode
- `npm run build:docs`: Build Storybook documentation

## ✅ Testing

This template comes with Jest configured to run unit tests of each component. Also it comes with component folder structure and some examples.

### Unit tests

`npm run test`: Run unit tests with Jest and React Testing Library
`npm run test:watch`: Run unit tests on watch mode
`npm run test:ui`: Run unit tests with Jest on visual mode

## 💅 Prettier

- This template comes with Prettier configured to format your code. You can run it with `npm run format`.

## 🔦 Linting

- `npm run lint`: Run linter

## 🐕 Husky

- This template comes with Husky configured to run the linter, formatter and tests on each commit.

## 🚀 CI and Publishing

- This template comes with a GitHub Actions workflow to automatically publish on any push to `main` or `master` when the `package.json` version number differs from the latest on npm. Please note that you need to create the package on NPM first.

- For it to work you will need to add an `NPM_TOKEN` secret to your repo:

    - Create an automation token in NPM
    - [Documentation on npm tokens](https://docs.npmjs.com/about-access-tokens) and how to create them
    - Go to your GitHub Repository Settings / Secrets / Actions
    - Click on the "New repository secret" button
    - Fill in the form:
        - Name: `NPM_TOKEN`
        - Secret: the NPM token value

Read the [full documentation on the npm-publish action](https://github.com/JS-DevTools/npm-publish).

## 🌈 Tech Stack

- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- [Storybook](https://storybook.js.org/)
- [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- [Husky](https://typicode.github.io/husky/#/) for Git hooks
- [Jest](https://jestjs.io) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for the unit tests
- [GitHub Action Workflows](https://github.com/features/actions) set up to run tests and linting on push


## 🔀 Related information

Feel free to submit a PR if you want to add any other useful information related to this template.

Stars are also welcome ⭐️
