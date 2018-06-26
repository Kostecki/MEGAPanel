import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Moment from 'moment';
import 'moment/locale/da';

import Loader from '../UI/Loader/Loader';
import Axios from '../../utils/api';
import CardDefault from './../UI/CardDefault/CardDefault';
import AvgSpeed from './AvgSpeed/AvgSpeed';
import BatteryVoltage from './BatteryVoltage/BatteryVoltage';
import BatteriesLastSeen from './BatteriesLastSeen/BatteriesLastSeen';
import UsageInterval from './UsageInterval/UsageInterval';
import DailyBarGraph from './DailyBarGraph/DailyBarGraph';
import VoltageGraph from './VoltageGraph/VoltageGraph';
import Navigation from '../Navigation/Navigation';

import styles from './Statistics.module.css';

class Statistics extends Component {
  state = {
    status: {},
    batteries: {},
    loader: true
  }

  componentDidMount = () => {
    this.fetchFromApi();
    this.interval = setInterval(() => {
      this.fetchFromApi();
    }, 300000);
  }

  componentWillUnmount = () => (
    clearInterval(this.interval)
  )

  fetchFromApi = () => {
    this.setState({ loader: true });
    Axios.get('/getstatus')
      .then((response) => {
        this.setState({ status: response.data }, () => console.log(this.state.status));

        return Axios.get('/getbatteries');
      })
      .then((response) => {
        this.setState({ batteries: response.data });
        this.setState({ loader: false });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  //Get current hour
  getHour = () => {
    var d = new Date();
    return d.getHours();
  }

  //Get weekday as string
  getToday = () => {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[d.getDay()];
  }

  getUpDownHour = () => {
    let data = {
      up: this.state.status.DataWeek[this.getToday()][this.getHour()].Up,
      down: this.state.status.DataWeek[this.getToday()][this.getHour()].Down
    }

    return data;
  }

  getUpDownDay = () => {
    let today = this.state.status.DataWeek[this.getToday()]
    let data = {
      up: 0,
      down: 0
    }

    for (let i = 0; i < today.length; i++) {
      data.up += today[i].Up;
      data.down += today[i].Down;
    };

    return data;
  }

  getUpDownWeek = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let today = Moment().isoWeekday();
    
    let week = this.state.status.DataWeek;
    let data = {
      up: 0,
      down: 0
    }
    
    for (let i = 0; i < today; i++) {
      for (const j of Object.keys(week[days[i]])) {
        data.up += week[days[i]][j].Up;
        data.down += week[days[i]][j].Down;
      }
    }

    return data;
  }

  getCurrentBattery = () => {
    let data;

    for (let i = 0; i < this.state.batteries.length; i++) {
      if (!this.state.batteries[i].CurrentBattery) {
        data = this.state.batteries[i];
      }
    }

    return data;
  }

  render() {
    if (this.state.loader) {
      return (
        <Loader title='Statistik' />
      )
    }

    return (
      <React.Fragment>
        <div className={styles.statsContainer}>
          <CardDefault title='Statistik' showRefresh clickAction={this.fetchFromApi}>
            <Grid item xs={12} className={styles.group1}>
              <BatteryVoltage data={this.getCurrentBattery()} voltage={'12,7'} />
              <BatteriesLastSeen data={this.state.batteries} />
              <AvgSpeed download={this.state.status.Avg.Down} upload={this.state.status.Avg.Up} />
            </Grid>
            <Grid item xs={12} className={styles.group2}>
              <UsageInterval period="Time" upload={this.getUpDownHour().up} download={this.getUpDownHour().down} />
              <UsageInterval period="Dag" upload={this.getUpDownDay().up} download={this.getUpDownDay().down} />
              <UsageInterval period="Uge" upload={this.getUpDownWeek().up} download={this.getUpDownWeek().down} />
            </Grid>
            <Grid item xs={12} className={styles.group3}>
              <DailyBarGraph data={this.state.status.DataWeek[this.getToday()]} />
            </Grid>
            <Grid item xs={12}>
              <VoltageGraph data={this.state.status.BatteryWeek} />
            </Grid>
          </CardDefault>
        </div>
        <Navigation />
      </React.Fragment>
    )
  }
}

export default Statistics;