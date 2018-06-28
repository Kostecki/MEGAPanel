import React from 'react';
import Card from '@material-ui/core/Card';
import { Bar } from 'react-chartjs-2';

import formatSizeUnits from '../../../utils/formatSizeUnits';

import styles from './DailyBarGraph.module.css';

const DailyBarGraph = (props) => {
  

  const getDataUpDown = () => {
    let upData = [];
    let downData = [];

    for (let i = 0; i < props.data.length; i++) {
      upData.push(props.data[i].Up);
      downData.push(props.data[i].Down);
    }

    return [upData, downData];
  }

  const data = {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
    datasets: [
      {
        label: 'Upload',
        backgroundColor: '#616774',
        hoverBorderColor: '#6a707f',
        data: getDataUpDown()[0]
      },
      {
        label: 'Download',
        backgroundColor: '#6a707f',
        hoverBorderColor: '#616774',
        data: getDataUpDown()[1]
      }
    ]
  };
  
  return (
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
                return data.datasets[tooltipItems.datasetIndex].label + ': ' + formatSizeUnits(data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] * 1024);
              }
            }
          }
        }} />
    </Card>
  )
}

export default DailyBarGraph;