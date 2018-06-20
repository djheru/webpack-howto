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
// debugger;
const PORT = process.env.PORT || 8001
server.listen(PORT, () => {
  console.log('server listening on port: ', PORT);
});
