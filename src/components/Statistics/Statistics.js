import React from 'react';
import Grid from '@material-ui/core/Grid';

import CardDefault from './../UI/CardDefault/CardDefault';
import AvgSpeed from './AvgSpeed/AvgSpeed';
import BatteryVoltage from './BatteryVoltage/BatteryVoltage';
import UsageInterval from './UsageInterval/UsageInterval';
import DailyBarGraph from './DailyBarGraph/DailyBarGraph';
import Navigation from '../Navigation/Navigation';

import styles from './Statistics.module.css';

const Statistics = () => (
  <React.Fragment>
    <div className={styles.statsContainer}>
      <CardDefault title='Statistik'>
        <Grid item xs={12} className={styles.group1}>
          <BatteryVoltage voltage='12,7' />
          <AvgSpeed download='314 kbit/s' upload='129 kbit/s' />
        </Grid>
        <Grid item xs={12} className={styles.group2}>
          <UsageInterval period='Time' upload='0.5' download='2' unit='gb' />
          <UsageInterval period='Dag' upload='1' download='3' unit='gb' />
          <UsageInterval period='Uge' upload='7' download='2' unit='gb' />
        </Grid>
        <Grid item xs={12} className={styles.group3}>
          <DailyBarGraph />
        </Grid>
      </CardDefault>
    </div>
    <Navigation />
  </React.Fragment>

)

export default Statistics;