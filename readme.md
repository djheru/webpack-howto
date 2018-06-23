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

#### Note:

__Loaders are effective on one file at a time, plugins work on the whole bundle__

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

## Custom Webpack Dev Server w/ Hot Reloading

```
npm i express weebpack-dev-middleware webpack-hot-middleware html-webpack-plugin
npm i -g nodemon
mkdir src/server
touch src/server/main.js
touch src/server/express.js

# server/main.js
require('babel-register');
require('./express');

# server/express.js
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../config/webpack.dev';

const server = express();

const compiler = webpack(config);
const devMiddleware = webpackDevMiddleware(compiler, config.devServer);
const hotMiddleware = webpackHotMiddleware(compiler);
const staticMiddleware = express.static('dist');

// Needs to be dev, hot, static
server.use(devMiddleware);
server.use(hotMiddleware);
server.use(staticMiddleware);

server.listen(8001, () => {
  console.log('server listening on port 8001');
});

# Updated webpack config
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

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
    overlay: true, // display errors on browser
    stats: {
      colors: true
    },
    hot: true
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
          // Using HTMLWebpackPlugin instead
          // { loader: 'file-loader', options: { name: '[name].html' } }, // loads up html files
          // { loader: 'extract-loader' }, // extract into a separate file
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
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ]
};

```

## Debugging in the Browser

- Add --inspect flag to nodemon command
    - `nodemon --inspect --watch config --watch src/server src/server/main.js`
- Run `npm run dev` - notice the debugger output
- In chrome dev tools, look for the green node logo, click it, see the debugger
- Add `debugger;` to express.js before the `server.listen`
- Note how the node devtools switches to the "sources" tab and takes you to the breakpoint in code
- Add `debugger;` to the client code. See the sources tab on the regular devtools does the thing


## HTML Preprocessors

#### EJS

```
touch src/index.ejs

# In webpack.dev.js
{
    ...
    ,
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
          template: './src/index.ejs',
          title: 'Link\'s Journal'
        })
      ]
}

# In src/index.ejs:

<html>
<head>
    <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
<div class="profile">
    <img src="<%= require('./images/lg.png') %>" alt="">
    <h1>OHAI Y'all</h1>
</div>

<script src="/main-bundle.js"></script>
</body>
</html>
```

#### Pug

```
npm i pug pug-loader
touch src/index.pug

#index.pug
doctype html
html
    head
        title
            = htmlWebpackPlugin.options.title
    body
        .profile
            img(src=require('./images/lg.png'))
            h1
                | OHAI Y'ALL!

# webpack.dev.js
# Under loaders:
,
  {
    test: /\.pug/,
    use: [
      { loader: 'pug-loader' }
    ]
  }

# Under plugins
plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.pug',
      title: 'Link\'s Journal'
    })
  ]
```

## Handlebars

```
touch src/index.hbs
Copy .ejs file, replace <%= %> with {{ }}; remove require from image
npm i handlebars handlebars-loader

# In webpack config loader
,
  {
    test: /\.hbs/,
    use: [
      { loader: 'handlebars-loader', query: { inlineRequires: '/images/' } }
    ]
  }
```

## Heroku deploy

- Download the heroku cli from https://devcenter.heroku.com/articles/heroku-cli#download-and-install
- After installing, login using the command `heroku login`
- Create a Procfile
	- `touch Procfile`
- Add a new script to the package.json
	- `"prod": "NODE_ENV=production node src/server/main.js"`
- Add a new app to heroku
	- `heroku create`
	- This gives you the app name, url, and the git remote url
	- Set the git remote
		- `heroku git:remote --app app-name-12345`
- Add config variable to env vars
	- `heroku config:set NODE_ENV=production -a app-name-12345`
- Check variables
	- `heroku config`
- Update server to use heroku-defined port
```javascript
const PORT = process.env.PORT || 8001
server.listen(PORT, () => {
  console.log('server listening on port: ', PORT);
});
```
- Run `npm run build` because heroku deploys from the dist folder
- `touch .env`
	- Set up env vars
- Run heroku locally
	- `heroku local`

### Handling CSS in Production

- Install plugin
	- `npm i -S mini-css-extract-plugin`
	- Extracts the css from the bundle and loads it into a separate file
	- Includes a loader to replace the style-loader
- Create a prod webpack config
	- `cp config/webpack.dev.js config/webpack.prod.js`
- Update the run scripts
```JSON
{
	"build": "NODE_ENV=production webpack --config=config/webpack.prod.js",
	"build:dev": "NODE_ENV=production webpack --config=config/webpack.dev.js"
}
```
- Optimize CSS with plugin
	- `npm install optimize-css-assets-webpack-plugin`
	- minimizes, optimizes, gets rid of duplicate styles

```javascript
// In webpack.prod.js
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

{
    ...,
    plugins: [
         new OptimizeCssAssetsPlugin(),
         new MiniCSSExtractPlugin({
           filename: '[name]-[contenthash].css'
         }),
          ...,
      ]
}
```


### Handling JS in Production
- Separate out development-centric code and add to the development webpack config entry main array
- Use the define plugin to set up environment variables
```
new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV) // add vars as needed
}),
```
- Change the config to be a function that takes env as the param. Now you have access to get the environment variables in the shell
- Use the environment vars to do things like configure the dev server, etc
- Use the environment vars to pass in secrets

#### Minify/Uglify
- `npm i -S uglifyjs-webpack-plugin`
- Add the plugin to the prod config

#### Compression
- `npm i -S compression-webpack-plugin`
- Add to the prod config
```
const CompressionPlugin = require('compression-webpack-plugin');
...
plugins: [
  ...,
  new CompressionPlugin({
    algorithm: 'gzip'
  })
```

__Output__
```
                           Asset       Size  Chunks             Chunk Names
          images/lg-928d9297.png    176 KiB          [emitted]
   main-bf4d76127a2c1d7acbdd.css  314 bytes       0  [emitted]  main
                  main-bundle.js   7.56 KiB       0  [emitted]  main
                      index.html  344 bytes          [emitted]
main-bf4d76127a2c1d7acbdd.css.gz  236 bytes          [emitted]
                   index.html.gz  237 bytes          [emitted]
               main-bundle.js.gz   2.74 KiB          [emitted]

```

__Serve GZipped Assets with Express__
`npm i -S express-static-gzip`
```
//const staticMiddleware = express.static('dist');
const staticMiddleware = require('express-static-gzip')('dist');
server.use(staticMiddleware);
```

__Use Brotli Compression__
`npm i -S brotli-webpack-plugin`

```
//const staticMiddleware = express.static('dist');
const enableBrotli = true;
const staticMiddleware = require('express-static-gzip')('dist', { enableBrotli });
server.use(staticMiddleware);
```
