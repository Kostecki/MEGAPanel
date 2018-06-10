import React from 'react';
import CardDefault from './../UI/CardDefault/CardDefault';

import UsageIntervals from './UsageIntervals/UsageIntervals';
import AvgSpeed from './AvgSpeed/AvgSpeed';
import Navigation from '../Navigation/Navigation';

import styles from './Statistics.module.css';

const Statistics = () => (
  <React.Fragment>
    <div className={styles.statsContainer}>
      <CardDefault title='Statistik'>
        <UsageIntervals />
        <AvgSpeed />
      </CardDefault>
    </div>
    <Navigation />
  </React.Fragment>

)

export default Statistics;