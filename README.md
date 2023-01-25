# etc-study

npm init -y
npm i --save-dev webpack webpack-cli
npm run
npm run build

npx webpack --entry ./src/index.js --output-path ./dist
npx webpack --entry ./src/index.js --output-path ./dist --mode development // 압축N
