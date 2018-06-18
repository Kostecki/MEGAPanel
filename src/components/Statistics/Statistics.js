import React from 'react';
import Grid from '@material-ui/core/Grid';

import CardDefault from './../UI/CardDefault/CardDefault';
import AvgSpeed from './AvgSpeed/AvgSpeed';
import BatteryVoltage from './BatteryVoltage/BatteryVoltage';
import BatteriesLastSeen from './BatteriesLastSeen/BatteriesLastSeen';
import UsageInterval from './UsageInterval/UsageInterval';
import DailyBarGraph from './DailyBarGraph/DailyBarGraph';
import VoltageGraph from './VoltageGraph/VoltageGraph';
import Navigation from '../Navigation/Navigation';

import styles from './Statistics.module.css';

let lastSeenData = [
  {
    name: 'ThunderDucks',
    voltage: 11.7
  },
  {
    name: 'LightningGeese',
    voltage: 12.3
  },
  {
    name: 'EnergySwallows',
    voltage: 12.7
  }
]

const Statistics = () => (
  <React.Fragment>
    <div className={styles.statsContainer}>
      <CardDefault title='Statistik'>
        <Grid item xs={12} className={styles.group1}>
          <BatteryVoltage voltage={'12,7'} />
          <BatteriesLastSeen data={lastSeenData} />
          <AvgSpeed download={'314 Kbit/s'} upload={'129 Kbit/s'} />
        </Grid>
        <Grid item xs={12} className={styles.group2}>
          <UsageInterval period={'Time'} upload={0.5} download={2} />
          <UsageInterval period={'Dag'} upload={1} download={3} />
          <UsageInterval period={'Uge'} upload={7} download={2} />
        </Grid>
        <Grid item xs={12} className={styles.group3}>
          <DailyBarGraph />
        </Grid>
        <Grid item xs={12}>
          <VoltageGraph />
        </Grid>
      </CardDefault>
    </div>
    <Navigation />
  </React.Fragment>
)

export default Statistics;