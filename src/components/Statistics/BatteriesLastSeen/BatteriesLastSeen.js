import React from 'react';
import Card from '@material-ui/core/Card';

import styles from './BatteriesLastSeen.module.css';

const BatteriesLastSeen = (props) => {
  return (
    <Card className={styles.BatteriesLastSeen}>
      <p>Batterier (Sidst set)</p>
      <div className={styles.elementsContainer}>
        {props.data.map((item, i) => <h4 key={i}>{item.name}: <span className={styles.volt}>{item.voltage} Volt</span></h4>
      )}
      </div>
    </Card>
  )
}

export default BatteriesLastSeen;