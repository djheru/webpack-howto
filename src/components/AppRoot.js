import React, { Component } from 'react';

class AppRoot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="profile">
        <img src={ require('../images/lg.png') } alt="" />
          <h1>{ this.props.heading }</h1>
          <div className="content">
            { this.props.content }
          </div>
      </div>
    );
  }
}

export default AppRoot;
