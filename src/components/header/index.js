import React, { Component } from 'react';
import styles from './header.module.scss';
import logo from 'img/logo.svg';
import NavButton from './navButton';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  componentDidMount = () => {
    const headerHeight = styles.headerHeight.slice(0, -2);
    window.addEventListener('scroll', () => {
      if(!this.state.collapsed && window.scrollY > headerHeight) {
        this.setState({ collapsed: true });
      } else if(this.state.collapsed && window.scrollY <= headerHeight) {
        this.setState({ collapsed: false });
      }
    });
  }

  render = () =>
    <header>
      <wired-card class={`${styles.header} ${this.state.collapsed ? styles.headerOpened : ''}`} elevation='5' fill={styles.mainColor}>
        <div className={styles.headerContent}>
          <div className={styles.headerBranding}>
            <img alt='2Grow logo' src={logo} className={styles.headerBrandingLogo} />
            <h1>{'2Grow'}</h1>
          </div>
          <nav className={styles.headerNav}>
            <ul className={styles.headerNavList}>
              <NavButton section='onze-ambities' text='Onze ambities' />
              <NavButton section='wie-zijn-wij' text='Wie zijn wij' />
              <NavButton section='onze-diensten' text='Onze diensten' />
            </ul>
          </nav>
        </div>
      </wired-card>
    </header>
}

export default Header;
