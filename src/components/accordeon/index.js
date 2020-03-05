import React, { Component } from 'react';
import styles from './accordeon.module.scss';

class Accordeon extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render = () =>
    <>
      {this.props.children}
    </>
}

export default Accordeon;
