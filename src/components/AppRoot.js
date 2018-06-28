import React, { Component } from 'react';
const markdownData = require("../../data/post.md");
const imagePath = require("../images/lg.png");

class AppRoot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="profile">
        <img src={ imagePath } alt="" />
        <h1>{ markdownData.title }</h1>
        <div className="content" dangerouslySetInnerHTML={{ __html: markdownData.__content }}>
        </div>
      </div>
    );
  }
}

export default AppRoot;
