# DEPRECATED

## This seed is now deprecated in favor of Vue CLI 3 based [vue-telekom-seed](https://github.com/T-Systems-RUS/vue-telekom-seed)

> A Vue.js seed project with TypeScript, TS-Jest, Nightwatch and ESlint

It's highly recommended to use [Yarn](https://yarnpkg.com/en/) for this project 

Unit tests are done with Jest.
e2e tests are based on Nightwatch and Cucumber.

## How to run
``` bash
# Install dependencies
yarn
OR
npm install

# Serve with hot reload at localhost:8080
yarn run dev

# Build for production with minification
yarn run build

# Run unit tests
yarn run unit
# Report will be located at: test/unit/reports/test-report.html
# Coverage report will be located at: test/unit/reports/coverage/index.html

# Run e2e tests with output to console
yarn run e2e

# Generate HTML report (after running e2e)
yarn run e2e-html-report
# Report will be located at: test/e2e/reports/html/cucumber_report.html

# Perform ESLint code check
yarn run lint
```

## Other commands
```
# build for production and view the bundle analyzer report
yarn run build --report

# Run unit tests in watch mode for development
yarn run unit-watch

# Perform ESLint code check + autofix all possible issues
yarn run lint --fix
```

## WebStorm / Intellij IDEA configuration

Enable ESlint plugin, Vue plugin and TypeScript integration.
All of these should work by default.

### Unit testing via Jest

1. Click Run in the main toolbar
2. Edit Configurations
3. On the top left of the Run/Debug Configurations dialog, click the + sign.
4. Choose Jest
5. Name the new configuration "Jest"
6. Under "Configuration file" enter `{YOUR_PATH}\test\unit\jest.conf.js` (be sure to change {YOUR_PATH})
7. Click Apply 

You can now both run Unit tests and debug them inside the IDE.

### e2e testing via Nightwatch

1. Click Run in the main toolbar
2. Edit Configurations
3. On the top left of the Run/Debug Configurations dialog, click the + sign.
4. Choose Node.js
5. Name the new configuration "Nightwatch"
6. Under "JavaScript file" enter `node_modules\nightwatch\bin\runner.js`
7. Under "Application parameters" enter `--config test/e2e/nightwatch.conf.js --env chrome`
8. Click Apply 

You can now both run e2e tests and debug them inside the IDE.

**Note that this is different from running via console** `yarn run e2e` 
**which also starts the http server and checks if port is in use.**

**If your app is not served at default port (8080), change devServerURL in** `nightwatch.conf.js`

**For this to work you will need a running SPA in background, e.g. run** `yarn run dev` **and start e2e in IDE afterwards.**

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
