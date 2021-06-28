# Starting with Typescript

This repository is a basic Typescript start 

Install Typescript
```
npm install typescript
```
Create a `hello.ts` file
```
console.log("Hello world!");
```
Compile the Typescript file to Javascript
```
npx tsc hello.ts
```
Initialize Typescript config file
```
npx tsc --init
```
## Use Typescript on a server app

To restart node process when files change install `ts-node-dev`
```
npm install ts-node-dev --save-dev
```
Add `ts-node-dev` script on `package.json` file 
```
"scripts": {
    "dev:server": "ts-node-dev --respawn --transpile-only src/index.ts"
},
```
Start the server
```
npm run dev:server
```
