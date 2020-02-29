import React from 'react';
import 'wired-elements';
import Header from 'components/header';
import LandingSection from 'sections/landing';
import styles from './app.module.scss';
import AmbitionsSection from 'sections/ambitions';
import WhoAreWeSection from 'sections/whoAreWe';

const App = () =>
  <div className={styles.content}>
    <Header />
    <LandingSection />
    <AmbitionsSection />
    <WhoAreWeSection />
  </div>

export default App;
