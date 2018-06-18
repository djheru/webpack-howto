require('babel-runtime/regenerator');
require('webpack-hot-middleware/client?reload=true');

// require('./main.css');
// require('./main.less');
// require('./main.sass');
require('./main.styl');

require('./index.html');
console.log("Hello World");
// alert("Wowza");
var a = async (args) => {
  const { a, b } = args;
  await console.log('hello from the future', a, b);
  console.log('Done!');
};

a({ a: 1, b: 'foo' });
