import React, { Component } from 'react';
// import markdownData from '../../data/post.md'
class AppRoot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="profile">
        <img src={{/* require('../images/lg.png') */}} alt="" />
          <h1>{ 'OHAIIIIII' }</h1>
          {/*<h1>{ markdownData.title }</h1>*/}
          <div className="content" dangerouslySetInnerHTML={{ __html: "<h1>Heading</h1>" }}>
          {/*<div className="content" dangerouslySetInnerHTML={ { __html: markdownData.__content } }>*/}
          </div>
      </div>
    );
  }
}

export default AppRoot;
