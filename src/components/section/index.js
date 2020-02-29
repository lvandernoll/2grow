import React, { Component } from 'react';
import styles from './section.module.scss';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render = () =>
    <wired-card class={styles.section}>
      <section className={this.props.className}>
        {this.props.children}
      </section>
    </wired-card>
}

export default Section;
