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
    'Mandag: 04:00',
    'Mandag: 08:00',
    'Mandag: 12:00',
    'Mandag: 16:00',
    'Mandag: 20:00',
    'Mandag: 00:00',
    'Tirsdag: 04:00',
    'Tirsdag: 08:00',
    'Tirsdag: 12:00',
    'Tirsdag: 16:00',
    'Tirsdag: 20:00',
    'Tirsdag: 00:00',
    'Onsdag: 04:00',
    'Onsdag: 08:00',
    'Onsdag: 12:00',
    'Onsdag: 16:00',
    'Onsdag: 20:00',
    'Onsdag: 00:00',
    'Torsdag: 04:00',
    'Torsdag: 08:00',
    'Torsdag: 12:00',
    'Torsdag: 16:00',
    'Torsdag: 20:00',
    'Torsdag: 00:00',
    'Fredag: 04:00',
    'Fredag: 08:00',
    'Fredag: 12:00',
    'Fredag: 16:00',
    'Fredag: 20:00',
    'Fredag: 00:00',
    'Lørdag: 04:00',
    'Lørdag: 08:00',
    'Lørdag: 12:00',
    'Lørdag: 16:00',
    'Lørdag: 20:00',
    'Lørdag: 00:00',
    'Søndag: 04:00',
    'Søndag: 08:00',
    'Søndag: 12:00',
    'Søndag: 16:00',
    'Søndag: 20:00',
    'Søndag: 00:00'
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