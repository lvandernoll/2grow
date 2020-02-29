import React from 'react';
import styles from './header.module.scss';
import logo from 'img/logo.svg';

const Header = () =>
  <header>
    <wired-card class={styles.header} elevation='5' fill={styles.mainColor}>
      <div className={styles.headerContent}>
        <div className={styles.headerBranding}>
          <img alt='2Grow logo' src={logo} className={styles.headerBrandingLogo} />
          <h1>{'2Grow'}</h1>
        </div>
        <nav className={styles.headerNav}>
          <ul className={styles.headerNavList}>
            <li className={styles.headerNavListItem}>
              <wired-button class={styles.headerNavListItemButton}>
                {'Visie'}
              </wired-button>
            </li>
            <li className={styles.headerNavListItem}>
              <wired-button class={styles.headerNavListItemButton}>
                {'Werkwijze'}
              </wired-button>
            </li>
            <li className={styles.headerNavListItem}>
              <wired-button elevation='4' class={styles.headerNavListItemButton}>
                {'Contact'}
              </wired-button>
            </li>
          </ul>
        </nav>
      </div>
    </wired-card>
  </header>

export default Header;
