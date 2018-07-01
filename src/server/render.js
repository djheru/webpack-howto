import React from "react"
import { StaticRouter } from 'react-router';
import { renderToString } from "react-dom/server"
import Routes from '../components/Routes';

export default () => (req, res) => {
  res.send(`
    <html>
      <head>
        <link href="/main.css" rel="stylesheet" />
      </head>
      <body>
        <div id="react-root">${renderToString(
          <StaticRouter location={req.url} context={{}}>
            <Routes />
          </StaticRouter>
  )}</div>
        <script src='vendor-bundle.js'></script>
        <script src='main-bundle.js'></script>
      </body>
    </html>
  `)
}
