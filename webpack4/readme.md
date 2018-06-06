# Webpack 4 Beyond the Basics

## Initial Setup

```
npm i -g webpack webpack-cli
touch src/index.js dist/index.html
# Add an alert to the file
webpack --mode=development
webpack --mode=production

rm dist/main.js src/index.js
touch config/webpack.dev.js
```

## Basic webpack options

To run it: `npx webpack-dev-server --config=config/webpack.dev.js`

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


## Add CSS Loaders
```
npm i style-loader css-loader

# Updated config
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
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [// run in reverse order
          { loader: 'style-loader' }, // second, inject into html
          { loader: 'css-loader' } // first, lint and load css
        ]
      }
    ]
  }
};
```

## Display Errors in Browser

```
{
    ...,
    devServer: {
        contentBase: 'dist',
        port: 8000,
        publicPath: '/js',
        overlay: true
    }
}

```

## HTML Loader
```
npm i html-loader extract-loader file-loader

# Inside module.rules:
{
    test: /\.html$/,
    use: [
      { loader: 'file-loader', options: { name: '[name].html' } }, // loads up html files
      { loader: 'extract-loader' }, // extract into a separate file
      { loader: 'html-loader' } // lint and load html
    ]
}
```

## Images

```
module: {
    rules: [
      {
        test: /\.css$/,
        use: [// run in reverse order
          { loader: 'style-loader' }, // second, inject into html
          { loader: 'css-loader' } // first, lint and load css
        ]
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].html' } }, // loads up html files
          { loader: 'extract-loader' }, // extract into a separate file
          { loader: 'html-loader', options: { attrs: ['img:src']} } // lint and load html
        ]
      },
      {
        test: /\.(jpg|gif|png)$/, // adding rules for images
        use: [
          { loader: 'file-loader', options: { name: 'images/[name].[ext]' }}
        ]
      }
    ]
  }
```

## Babel Basics

```
npm i babel-core babel-cli babel-loader babel-preset-env \
    babel-plugin-transform-runtime


# in .babelrc
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "browsers": [
            "last 2 versions"
          ]
        },
        "debug": true
      }
    ]
  ],
  "plugins": "transform-runtime"
}

# Webpack config
const path = require('path');

module.exports = {
  entry: {
    main: [ './src/main.js' ]
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    port: 8000,
    publicPath: '/',
    overlay: true // display errors on browser
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [// run in reverse order
          { loader: 'style-loader' }, // second, inject into html
          { loader: 'css-loader' } // first, lint and load css
        ]
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].html' } }, // loads up html files
          { loader: 'extract-loader' }, // extract into a separate file
          { loader: 'html-loader', options: { attrs: ['img:src']} } // lint and load html
        ]
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: [
          { loader: 'file-loader', options: { name: 'images/[name].[ext]' }}
        ]
      }
    ]
  }
};

# main.js
require('babel-runtime/regenerator');
require('./main.css');
require('./index.html');
console.log("Hello World");
// alert("Wowza");
var a = async (args) => {
  const { a, b } = args;
  await console.log('hello from the future', a, b);
  console.log('Done!');
};

a({ a: 1, b: 'foo' });

```
