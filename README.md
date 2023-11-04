# To-Do list Manager - Vue Project
[![JavaScript](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![JavaScript](https://img.shields.io/badge/javascript-%2320232a.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML](https://img.shields.io/badge/html-%2320232a.svg?style=for-the-badge&logo=html5&logoColor=%23E34F26)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/css-%2320232a.svg?style=for-the-badge&logo=css3&logoColor=%231572B6)](https://developer.mozilla.org/en-US/docs/Web/CSS)

The objective of this project is to create a Vue 2 To-Do list application and then
upgrade it to Vue 3 with Nuxt.js while adhering to best coding practices.

# Features
- Create a simple Vue 2 To-Do list application.
- Add tasks with a title.
- Mark tasks as completed.
- Remove tasks.
- List tasks.
- Use Vue 2 directives (v-for, v-bind, v-on) for displaying tasks and handling user interactions.
- Application is responsive and works on both desktop and mobile devices.
- Upgrade the Vue 2 application to Vue 3.
- Migrate the application to Nuxt.js to leverage server-side rendering (SSR)
- Implement unit tests using Vitest for critical components and features to achieve a high test
coverage

# Getting Started
To run the project locally, follow these steps:

## Step 1: Install Vue CLI

If you haven't already installed Vue CLI globally, you can do so by running the following command in your terminal:
```bash
npm install -g @vue/cli
```
## Step 2: Clone Vue 2 code from master branch and locate the project folder
 ```bash
   git clone https://github.com/lekha-mishra/ToDo-Manager-Vue.git
   cd ToDo-Manager-Vue
```

## Step 3: Install node packages
 ```bash
   npm i
```

## Step 4: Compiles and hot-reloads for development
```
npm run serve
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Run Vue 3 Project:
The Vue 3 project is on the branch "upgraded-code-to-vue-3-", to switch to the Vue 3 Project, follow these steps:

## Step 5: Switch to Vue 3 code barnch
 ```bash
   cd ToDo-Manager-Vue
   git checkout upgraded-code-to-vue-3-
```

## Step 6: Delete node_module folder

## Step 7: Re-Install node packages
 ```bash
   npm i
```
## Step 8: Compiles and hot-reloads for development
```
npm run serve
```

# Steps to upgrade from Vue 2 to Vue 3 environment for existing project
- First, we make sure that our @vue/cli-service is in the newest version.
- To update our vue-cli command is – vue upgrade
- Now modify our ‘package.json’ file. Here we have to uninstall vue2 and vue-template-compiler. They are not needed for VueJS.
- Run the npm install command to install vue3, @vue/compat, and compiler @vue/compiler-sfc.
