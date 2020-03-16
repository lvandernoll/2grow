import React, { useEffect } from 'react';
import 'wired-elements';
import styles from './app.module.scss';
import Header from 'components/header';
import LandingSection from 'sections/landing';
import AmbitionsSection from 'sections/ambitions';
import WhoAreWeSection from 'sections/whoAreWe';
import OurServicesSection from 'sections/ourServices';
import WayOfWorkingSection from 'sections/wayOfWorking';

const App = () => {
  useEffect(() => {
    if(window.location.pathname !== '/') {
      try {
        const section = document.querySelector(`#${window.location.pathname.slice(1)}`);
        if(section) {
          setTimeout(()=>{
            window.scrollTo({
              top: section.offsetTop - styles.headerHeight.slice(0, -2),
              behavior: 'smooth',
            });
          }, 500);
        }
      } catch(e) {
        console.error(e);
      }
    }
  });

  return (
    <>
      <Header />
      <div className={styles.content}>
        <LandingSection />
        <AmbitionsSection />
        <WhoAreWeSection />
        <OurServicesSection />
        <WayOfWorkingSection />
      </div>
    </>
  );
}

export default App;
