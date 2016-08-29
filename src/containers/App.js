import React, { Component } from 'react';

export default class Test extends Component {
  render() {
    return <div>
      <h1>Fitness Playground</h1>
      {this.props.children}
    </div>
  }
}