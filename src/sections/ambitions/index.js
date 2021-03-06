import React from 'react';
import Section from 'components/section';
import styles from './ambitions.module.scss';
import img from 'img/placeholder.png';

const AmbitionsSection = () =>
  <Section name='onze-ambities' className={styles.ambitions}>
    <div className={styles.ambitionsContent}>
      <h3>{'Onze ambities'}</h3>
      <p className={styles.ambitionsContentParagraph}>
        {'Wij van 2Grow zijn twee studenten die ons richten op het ontwerpen van particuliere tuinen en bedrijfstuinen. Wij hebben ervaring in het groen en doen nu een studie Tuin- en Landschapsinrichting te Velp. Wij zijn in 2018 gestart met een eigen ontwerpbedrijfje en hebben als doelstelling om te groeien in onze vaardigheden en uw droomtuin te ontwerpen.'}
      </p>
    </div>
    <wired-image src={img} class={styles.ambitionsImg} />
  </Section>

export default AmbitionsSection;
