import React from 'react';

import CardDefault from './../UI/CardDefault/CardDefault';
import UsageIntervals from './UsageIntervals/UsageIntervals';

import styles from './Statistics.module.css';

const Statistics = () => (
  <div className={styles.statsContainer}>
    <CardDefault title='Statistik'>
      <UsageIntervals />
    </CardDefault>
  </div>
)

export default Statistics;