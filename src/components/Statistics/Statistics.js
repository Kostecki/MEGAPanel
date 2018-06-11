import React from 'react';
import CardDefault from './../UI/CardDefault/CardDefault';

import UsageIntervals from './UsageIntervals/UsageIntervals';
import DailyBarGraph from './DailyBarGraph/DailyBarGraph';
import AvgSpeed from './AvgSpeed/AvgSpeed';
import Navigation from '../Navigation/Navigation';

import styles from './Statistics.module.css';

const Statistics = () => (
  <React.Fragment>
    <div className={styles.statsContainer}>
      <CardDefault title='Statistik'>
        <UsageIntervals />
        <div className={styles.dailyAndAvg}>
          <DailyBarGraph />
          <AvgSpeed download='314 kbit/s' upload='129 kbit/s' />
        </div>
      </CardDefault>
    </div>
    <Navigation />
  </React.Fragment>

)

export default Statistics;