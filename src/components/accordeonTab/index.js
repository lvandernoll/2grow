import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import styles from './accordeonTab.module.scss';

class AccordeonTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active,
    };
  }

  onClick = () => this.setState({ active: !this.state.active });

  render = () =>
    <wired-card onClick={this.onClick} class={`${styles.accordeonTab}  ${this.state.active ? styles.accordeonTabActive : ''}`}>
      <wired-card fill={this.state.active ? styles.mainColor : ''} class={styles.accordeonTabHeader}>
        <div className={styles.accordeonTabHeaderContent}>
          <span className={styles.accordeonTabHeaderContentText}>{this.props.header}</span>
          <FontAwesomeIcon icon={faCaretDown} className={styles.accordeonTabHeaderContentIcon} />
        </div>
      </wired-card>
      <p className={styles.accordeonTabContent}>
        {this.props.content}
      </p>
    </wired-card>
}

export default AccordeonTab;
