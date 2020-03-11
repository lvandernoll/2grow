import React from 'react';
import styles from './section.module.scss';

const Section = props =>
  <wired-card id={props.name} class={styles.section}>
    <section className={props.className}>
      {props.children}
    </section>
  </wired-card>

export default Section;
