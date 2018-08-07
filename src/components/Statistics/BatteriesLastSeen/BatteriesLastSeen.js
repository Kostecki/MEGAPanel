import React from 'react';

import styles from './BatteriesLastSeen.module.css';

const BatteriesLastSeen = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.p}>Batterier (Sidst set)</p>
      <div className={styles.elements}>
        {
          Object.keys(props.data).map((key) => <h4 className={styles.h4} key={key} >{props.data[key].BatteryId}: <span className={styles.volt}>{props.data[key].Voltage} Volt</span></h4>)
        }
      </div>
    </div>
  )
}

export default BatteriesLastSeen;