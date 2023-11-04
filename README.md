# vue2-project

# Step 1: Install Vue CLI

If you haven't already installed Vue CLI globally, you can do so by running the following command in your terminal:
npm install -g @vue/cli

# Step 2: Create a New Vue Project

vue create project-name
cd project-name

# Step 3: Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Migration from Vue2 to Vue3:

First, we make sure that our @vue/cli-service is in the newest version.
To update our vue-cli command is – vue upgrade
Now modify our ‘package.json’ file. Here we have to uninstall vue2 and vue-template-compiler. They are not needed for VueJS.
Run the npm install command to install vue3, @vue/compat, and compiler @vue/compiler-sfc.
