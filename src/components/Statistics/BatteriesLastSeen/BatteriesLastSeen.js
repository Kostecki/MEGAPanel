import React from 'react';
import Card from '@material-ui/core/Card';

import styles from './BatteriesLastSeen.module.css';

const BatteriesLastSeen = (props) => {
  return (
    <Card className={styles.BatteriesLastSeen}>
      <p>Batterier (Sidst set)</p>
      <div className={styles.elementsContainer}>
        {
          Object.keys(props.data).map((key) => <h4 key={key} >{props.data[key].BatteryId}: <span className={styles.volt}>{props.data[key].Voltage} Volt</span></h4>)
        }
      </div>
    </Card>
  )
}

export default BatteriesLastSeen;