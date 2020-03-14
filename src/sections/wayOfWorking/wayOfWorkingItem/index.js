import React from 'react';
import styles from '../wayOfWorking.module.scss';

const WayOfWorkingItem = props =>
  <article className={styles.wayOfWorkingItem}>
    <h4 className={styles.wayOfWorkingItemHeader}>
      <span className={styles.wayOfWorkingItemHeaderIndex} />
      <span>{props.title}</span>
    </h4>
    <p>{props.children}</p>
  </article>

export default WayOfWorkingItem;
