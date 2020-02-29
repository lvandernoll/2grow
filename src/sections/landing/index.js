import React from 'react';
import Section from 'components/section';
import styles from './landing.module.scss';

const LandingSection = () =>
  <Section className={styles.landing}>
    <h2 className={styles.landingHeading}>{'2Grow Tuintontwerp'}</h2>
    <span className={styles.landingIntro}>{'Bent u opzoek naar een goed doordacht en creatief tuinontwerp? Dan bent u bij 2Grow tuinontwerp op het goede adres!'}</span>
  </Section>

export default LandingSection;
