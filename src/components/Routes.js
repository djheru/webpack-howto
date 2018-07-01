import React from "react"
import { Route, Link } from 'react-router-dom';
import About from './About';
import Article from './Article';
import Gallery from './Gallery';

const Routes = () => (
  <div>
    <div className="nav">
      <Link to="/">Gallery</Link>
      <Link to="/about">About</Link>
      <Link to="/article">Article</Link>
    </div>
    <Route exact path="/" component={ Gallery }/>
    <Route path="/about" component={ About }/>
    <Route path="/article" component={ Article }/>
  </div>
);

export default Routes;
