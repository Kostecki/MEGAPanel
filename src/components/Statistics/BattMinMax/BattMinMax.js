import React from 'react';
import Card from '@material-ui/core/Card';

import styles from './BattMinMax.module.css';

const BattMinMax = (props) => {
  return (
    <Card className={styles.battMinMax}>
      <p>Batteri</p>
      <h4>Minimum: <span className={styles.volt}>{props.minVolt} Volt</span></h4>
      <h4>Maksimum: <span className={styles.volt}>{props.maxVolt} Volt</span></h4>
    </Card>
  )
}

export default BattMinMax;