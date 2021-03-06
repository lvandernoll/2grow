import React, { useState, useEffect } from 'react';
import styles from './header.module.scss';
import logo from 'img/logo.svg';
import NavButton from './navButton';

const Header = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const headerHeight = styles.headerHeight.slice(0, -2);
    updateHeader(headerHeight);
    window.addEventListener('scroll', () => updateHeader(headerHeight));
  });
  
  const updateHeader = headerHeight => {
    if(!collapsed && window.scrollY > headerHeight) {
      setCollapsed(true);
    } else if(collapsed && window.scrollY <= headerHeight) {
      setCollapsed(false);
    }
  }

  return (
    <header>
      <wired-card class={`${styles.header} ${collapsed ? styles.headerOpened : ''}`} elevation='5' fill={styles.mainColor}>
        <div className={styles.headerContent}>
          <div className={styles.headerBranding}>
            <img alt='2Grow logo' src={logo} className={styles.headerBrandingLogo} />
            <h1>{'2Grow'}</h1>
          </div>
          <nav className={styles.headerNav}>
            <ul className={styles.headerNavList}>
              <NavButton sectionId='onze-ambities' text='Onze ambities' />
              <NavButton sectionId='wie-zijn-wij' text='Wie zijn wij' />
              <NavButton sectionId='onze-diensten' text='Onze diensten' />
              <NavButton sectionId='onze-werkwijze' text='Onze werkwijze' />
            </ul>
          </nav>
        </div>
      </wired-card>
    </header>
  )
}

export default Header;
