import React from 'react';
import Card from '@material-ui/core/Card';
import { Line } from 'react-chartjs-2';

import styles from './VoltageGraph.module.css';

const data = {
  datasets: [{
    data: ['11.4', '11.2', '12.8', '12.1', '12', '12', '12', '11', '13', '13', '11', '11', '12', '13', '12', '12', '12', '11', '11', '12', '11', '12', '11', '12', '12', '11', '11', '12', '12', '12', '12', '12', '11', '13', '13', '11', '11', '12', '13', '12', '12', '12'],
    label: 'Spænding',
    yAxisID: 'left-y-axis'
  }],
  labels: [
    '04:00',
    '08:00',
    '12:00',
    '16:00',
    '20:00',
    '00:00',
    '04:00',
    '08:00',
    '12:00',
    '16:00',
    '20:00',
    '00:00',
    '04:00',
    '08:00',
    '12:00',
    '16:00',
    '20:00',
    '00:00',
    '04:00',
    '08:00',
    '12:00',
    '16:00',
    '20:00',
    '00:00',
    '04:00',
    '08:00',
    '12:00',
    '16:00',
    '20:00',
    '00:00',
    '04:00',
    '08:00',
    '12:00',
    '16:00',
    '20:00',
    '00:00',
    '04:00',
    '08:00',
    '12:00',
    '16:00',
    '20:00',
    '00:00'
  ]
}
const options = {
  scales: {
    yAxes: [{
      id: 'left-y-axis',
      type: 'linear',
      position: 'left'
    }]
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItems, data) {
        return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + 'V';
      }
    }
  }
}

const VoltageGraph = () => (
  <Card className={styles.voltageGraph}>
    <p>Batterierne i løbet af ugen</p>
    <Line data={data} options={options} width={700} height={200} /> {/* not specifying a height fucks up the layout.. TODO: Make it nicer */}
  </Card>
)

export default VoltageGraph;