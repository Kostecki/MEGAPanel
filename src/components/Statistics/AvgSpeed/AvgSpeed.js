import React from 'react';
import Card from '@material-ui/core/Card';

import styles from './AvgSpeed.module.css';

const AvgSpeed = (props) => (
  <Card className={styles.avgSpeed}>
    <p>Avg. Speeds</p>
    <h4>Download: <span className={styles.speed}>{props.download}</span></h4>
    <h4>Upload: <span className={styles.speed}>{props.upload}</span></h4>
  </Card>
)

export default AvgSpeed;