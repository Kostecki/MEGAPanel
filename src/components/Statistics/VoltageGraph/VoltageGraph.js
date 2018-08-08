import React from 'react';
import { Line } from 'react-chartjs-2';

import styles from './VoltageGraph.module.css';

const VoltageGraph = (props) => {
  let voltageData = [...props.data.Monday,
                    ...props.data.Tuesday,
                    ...props.data.Wednesday,
                    ...props.data.Thursday,
                    ...props.data.Friday,
                    ...props.data.Saturday,
                    ...props.data.Sunday];

  const data = {
    labels: [
      '04:00', '08:00', '12:00', '16:00', '20:00', '00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '00:00'
    ],
    datasets: [{
      data: voltageData,
      label: 'Spænding',
      yAxisID: 'left-y-axis'
    }],
  }
  const options = {
    maintainAspectRatio: false,
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

  return (
    <div className={styles.container}>
      <p>Batterierne i løbet af ugen</p>
      <Line
        data={data}
        options={options} />
    </div>
  )
}

export default VoltageGraph;