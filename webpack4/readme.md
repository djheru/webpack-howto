```
npm i -g webpack webpack-cli
touch src/index.js dist/index.html
# Add an alert to the file
webpack --mode=development
webpack --mode=production

rm dist/main.js src/index.js
touch config/webpack.dev.js
```

#### Basic webpack options

```javascript
const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js'
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist/js'),
    publicPath: '/js'
  },
  devServer: {
    contentBase: 'dist',
    port: 8000,
    publicPath: '/js'
  }
};

```
```
npx webpack-dev-server --config=config/webpack.dev.js
```
