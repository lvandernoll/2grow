import React from 'react';
import 'wired-elements';
import Header from 'components/header';
import LandingSection from 'sections/landing';
import styles from './app.module.scss';
import AmbitionsSection from 'sections/ambitions';
import WhoAreWeSection from 'sections/whoAreWe';
import OurServicesSection from 'sections/ourServices';

const App = () =>
  <div className={styles.content}>
    <Header />
    <LandingSection />
    <AmbitionsSection />
    <WhoAreWeSection />
    <OurServicesSection />
    <AmbitionsSection />
  </div>

export default App;
