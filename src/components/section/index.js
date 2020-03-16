import React from 'react';
import styles from './section.module.scss';

const Section = ({ name, className, children }) =>
  <wired-card id={name} class={styles.section}>
    <section className={className}>
      {children}
    </section>
  </wired-card>

export default Section;
