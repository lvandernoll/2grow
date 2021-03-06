import React from 'react';
import Section from 'components/section';
import WayOfWorkingItem from './wayOfWorkingItem';
import styles from './wayOfWorking.module.scss';
import arrow1 from 'img/arrow1.svg';
import arrow2 from 'img/arrow2.svg';
import arrow3 from 'img/arrow3.svg';

const WayOfWorkingSection = () =>
  <Section name='onze-werkwijze' className={styles.wayOfWorking}>
    <h3>{'Onze werkwijze'}</h3>
    <div className={styles.wayOfWorkingRow}>
      <WayOfWorkingItem title={'Kennismaken'}>
        {'Wanneer jullie gebruik willen maken van onze diensten, komen we graag eens langs voor een oriënterend gesprek. Tijdens dit gesprek kunnen we jullie wensen inventariseren, maar ook laten zien wat we voor jullie kunnen betekenen.'}
      </WayOfWorkingItem>
    </div>
    <div className={styles.wayOfWorkingRow}>
      <img src={arrow1} alt='' className={styles.wayOfWorkingRowArrow} />
      <WayOfWorkingItem title={'Schetsfase'}>
        {'Na dit eerste gesprek maken we twee schetsen van de tuin. Deze komen we graag bij jullie presenteren, met als doelstelling dat we dit kunnen gebruiken als vertrekpunt naar een verdere uitwerking. Om deze schetsen beeldend te maken, voegen we hier een moodboard met referentiebeelden aan toe.'}
      </WayOfWorkingItem>
    </div>
    <div className={styles.wayOfWorkingRow}>
      <WayOfWorkingItem title={'Ontwerpfase'}>
        {'Na de schetsfase wordt de schets uitgewerkt naar een definitief ontwerp. Dit kan door middel van een plattegrond of door een 3D-visualisatie. Bij deze stap moeten veel keuzes gemaakt worden m.b.t. de materialen (zoals bestratingen, verlichtingen en bouwkundige constructies), maar ook de beplantingen (bomen, heesters, vaste planten). Wij inspireren jullie graag door naar een leverancier te gaan, om materialen te bekijken of eens langs een plantenkwekerij te gaan.'}
      </WayOfWorkingItem>
      <img src={arrow2} alt='' className={styles.wayOfWorkingRowArrow} />
    </div>
    <div className={styles.wayOfWorkingRow}>
      <img src={arrow3} alt='' className={styles.wayOfWorkingRowArrow} />
      <WayOfWorkingItem title={'Realisatiefase / uitvoeringsfase'}>
        {'Wij houden ons expliciet bezig met het ontwerp van de tuin en voeren dus zelf geen aanlegwerkzaamheden uit. Wel hebben we connecties die dit kunnen uitvoeren. Zo kunnen we u koppelen aan een hovenier en al snel aangeven wat het uitvoeren van het tuinontwerp gaat kosten.'}
      </WayOfWorkingItem>
    </div>
  </Section>

export default WayOfWorkingSection;
