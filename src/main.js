/*require('babel-runtime/regenerator');
require('webpack-hot-middleware/client?reload=true');*/
require('./main.css');
require('./nav.css');
require('./index.html');
// debugger;
console.log("Hello World");
// alert("Wowza");
var a = async (args) => {
  const { a, b } = args;
  await console.log('hello from the future', a, b);
  console.log('Done!');
};

a({ a: 1, b: 'foo' });
