import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import AppRoot from '../components/AppRoot';
import webpack from 'webpack';
import configDevClient from '../../config/webpack.dev-client';
import configDevServer from '../../config/webpack.dev-server';
import configProdClient from '../../config/webpack.prod-client';
import configProdServer from '../../config/webpack.prod-server';

const server = express();

const isProd = process.env.NODE_ENV === 'production';

if (!isProd) {

  const compiler = webpack([configDevClient, configDevServer]);
  const clientCompiler = compiler.compilers[0];
  const serverCompiler = compiler.compilers[1];

  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const devMiddleware = webpackDevMiddleware(compiler, configDevClient.devServer);
  const hotMiddleware = webpackHotMiddleware(clientCompiler, configDevClient.devServer);

  // order needs to be dev, hot, static
  server.use(devMiddleware);
  server.use(hotMiddleware);
  console.log('DEV Middleware Enabled');
} else {
  const render = require('./render');
//const staticMiddleware = express.static('dist');
  const enableBrotli = true;
  const staticMiddleware = require('express-static-gzip')('dist', { enableBrotli });
  server.use(staticMiddleware);

  server.use(render());

}

const PORT = process.env.PORT || 8002;
server.listen(PORT, () => {
  console.log('server listening on port: ', PORT, process.env.NODE_ENV);
});
