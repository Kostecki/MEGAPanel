import React from 'react';
import Card from '@material-ui/core/Card';
import { Bar } from 'react-chartjs-2';

import styles from './DailyBarGraph.module.css';

const data = {
  labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
  datasets: [
    {
      label: 'Download',
      backgroundColor: '#616774',
      hoverBorderColor: '#616774',
      data: [1, 1, 3, 2, 1, 5, 8, 2, 3, 7, 3, 4, 2, 4, 6, 7, 4, 4, 5, 3, 3, 2, 1, 8]
    }
  ]
};

const DailyBarGraph = () => (
  <Card className={styles.dailyBarGraphContainer}>
    <p>Dagen i detaljer</p>
    <Bar
      data={data}
      width={700}
      options={{
        maintainAspectRatio: true,
        tooltips: {
          callbacks: {
            label: function (tooltipItems, data) {
              return data.datasets[tooltipItems.datasetIndex].label + ': ' + data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' GB';
            }
          }
        }
      }} />
  </Card>
)

export default DailyBarGraph;