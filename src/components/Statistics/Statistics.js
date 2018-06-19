import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

//import Axios from '../../utils/api';
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

class Statistics extends Component {
  componentDidMount = () => {
    /* this.interval = setInterval(() => {
      //Get information on avg. speeds, weekly data usage and battery status
      Axios.get('/getbatteryhistoric')
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000); */
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  render() {
    return (
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
  }
}

export default Statistics;