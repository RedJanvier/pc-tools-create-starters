REM babel
npm i -D @babel/core @babel/cli @babel/node @babel/register @babel/preset-env @babel/plugin-transform-runtime @babel/runtime
REM create a .babelrc file to setup it tup

REM eslint
npm i -D eslint
npx eslint --init

REM prettier
npm i -D prettier eslint-plugin-prettier eslint-config-prettier
REM create a .prettierrc.json file to set prettier prefferences
REM link the plugin prettier in the .eslint.json config file

REM prettier eslint cli
npm i -D prettier-eslint prettier-eslint-cli
REM also add scripts to lint and fix from eslint docs

REM mocha chai & chaiHttp
npm i -D mocha chai chai-http
REM create a test script "mocha --require @babel/register '__tests__/*.test.js' --timeout 100000 --exit"

REM jest testing
npm i -D jest
REM create a test script "jest --forceExit"