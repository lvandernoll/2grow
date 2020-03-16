import React, { useState, useEffect } from 'react';
import styles from '../header.module.scss';

const NavButton = ({ sectionId, text}) => {
  const [inView, setInView] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const section = document.querySelector(`#${sectionId}`);
    window.addEventListener('scroll', () => {
      const scrollWindow = window.scrollY + (styles.headerHeight.slice(0, -2) * 1 + 1);
      const newInView = scrollWindow > section.offsetTop && scrollWindow < section.offsetTop + section.scrollHeight;

      if(!inView && newInView) {
        setInView(true);
      } else if(inView && !newInView) {
        setInView(false);
      }
    });
  });

  const scrollToSection = () => {
    const section = document.querySelector(`#${sectionId}`);
    const headerHeight = styles.headerHeight.slice(0, -2);
    window.scrollTo({
      top: section.offsetTop - headerHeight,
      behavior: 'smooth',
    });
    window.history.replaceState(null, null, sectionId);
  }

  return (
    <li onClick={scrollToSection} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} className={styles.headerNavListItem}>
      <wired-button elevation={inView ? 4 : hover ? 3 : 0} id={`${sectionId}Button`} class={styles.headerNavListItemButton}>
        {text}
      </wired-button>
    </li>
  );
}

export default NavButton;
