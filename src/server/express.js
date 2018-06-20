import express from 'express';
const server = express();

const isProd = process.env.NODE_ENV === 'production';

if (!isProd) {
  const webpack = require('webpack');
  const config = require('../../config/webpack.dev');
  const compiler = webpack(config);
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const devMiddleware = webpackDevMiddleware(compiler, config.devServer);
  const hotMiddleware = webpackHotMiddleware(compiler);

  // order needs to be dev, hot, static
  server.use(devMiddleware);
  server.use(hotMiddleware);
}

const staticMiddleware = express.static('dist');
server.use(staticMiddleware);

const PORT = process.env.PORT || 8002
server.listen(PORT, () => {
  console.log('server listening on port: ', PORT, process.env.NODE_ENV);
});
