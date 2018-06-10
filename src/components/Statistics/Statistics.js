import React from 'react';
import CardDefault from './../UI/CardDefault/CardDefault';
import UsageIntervals from './UsageIntervals/UsageIntervals';

import Navigation from '../Navigation/Navigation';

import styles from './Statistics.module.css';

const Statistics = () => (
  <React.Fragment>
    <div className={styles.statsContainer}>
      <CardDefault title='Statistik'>
        <UsageIntervals />
      </CardDefault>
    </div>
    <Navigation />
  </React.Fragment>

)

export default Statistics;