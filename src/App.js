import React, { Component } from 'react';
import 'wired-elements';
import styles from './app.module.scss';
import Header from 'components/header';
import LandingSection from 'sections/landing';
import AmbitionsSection from 'sections/ambitions';
import WhoAreWeSection from 'sections/whoAreWe';
import OurServicesSection from 'sections/ourServices';

class App extends Component {
  componentDidMount = () => {
    if(window.location.pathname !== '/') {
      const section = document.querySelector(`#${window.location.pathname.slice(1)}`);
      if(section) {
        setTimeout(()=>{
          window.scrollTo({
            top: section.offsetTop - styles.headerHeight.slice(0, -2),
            behavior: 'smooth',
          });
        }, 500)
      }
    }
  }

  render = () =>
    <>
      <Header />
      <div className={styles.content}>
        <LandingSection />
        <AmbitionsSection />
        <WhoAreWeSection />
        <OurServicesSection />
        <AmbitionsSection />
      </div>
    </>
}

export default App;
