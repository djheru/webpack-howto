import React from 'react';
import { renderToString } from 'react-dom/server';
import AppRoot from '../components/AppRoot';

const render = () => (req, res) => {
  res.send(`
  <html>
  <head>
      <title>My Balls</title>
      <link href="/main.css" rel="stylesheet"/>
  </head>
  <body>
  
  <div id="react-root">
    ${renderToString(<AppRoot/>)}
  </div>
  <script src="vendor-bundle.js"></script>
  <script src="main-bundle.js"></script>
  </body>
</html>
  `);
};

export default render;
