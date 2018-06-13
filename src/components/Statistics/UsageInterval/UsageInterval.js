import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { defaults, Doughnut } from 'react-chartjs-2';
import Moment from 'moment';
import 'moment/locale/da';

import styles from './UsageInterval.module.css';

const UsageInterval = (props) => {
  defaults.global.legend.display = false;

  const usageIntervalPeriod = (period) => {
    let now = Moment();
    let range = '';
    let startOfWeek = Moment().startOf('isoweek').format('D.');
    let endOfWeek = Moment().endOf('isoweek').format('D. MMMM');

    switch (period) {
      case 'Time':
        range = now.format('HH:MM');
        break;
      
      case 'Dag':
        range = now.format('dddd, D. MMMM');
        break;

      case 'Uge':
        range = startOfWeek + '-' + endOfWeek;
        break;
    
      default:
        break;
    }

    return range;
  }

  const data = {
    labels: [
      'Upload',
      'Download'
    ],
    datasets: [{
      data: [props.upload, props.download],
      backgroundColor: [
        '#616774',
        '#46BFBD'
      ],
      hoverBackgroundColor: [
        '#6a707f',
        '#5AD3D1'
      ]
    }]
  };

  const options = {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    cutoutPercentage: 80,
    tooltips: {
      callbacks: {
        label: function (tooltipItems, data) {
          return data.labels[tooltipItems.datasetIndex] + ': ' + data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + props.unit.toUpperCase();
        }
      }
    }
  }
  return (
    <Card className={`${styles.usageInterval} ${props.period.toLowerCase()}`}>
      <p>{props.period} ({usageIntervalPeriod(props.period)})</p>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <p className={styles.textInsideDoughnut}><i className="fas fa-long-arrow-alt-up"></i> {`${props.upload}/${props.download}`} <i className="fas fa-long-arrow-alt-down"></i></p>
          <Doughnut data={data} options={options} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default UsageInterval;