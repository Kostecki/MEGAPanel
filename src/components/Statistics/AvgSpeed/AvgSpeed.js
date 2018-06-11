import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

import styles from './AvgSpeed.module.css';

const AvgSpeed = (props) => (
  <Card className={styles.avgSpeed}>
    <p>Avg. Speeds</p>
    <h4>Download: {props.download}</h4>
    <Divider />
    <h4>Upload: {props.upload}</h4>
  </Card>
)

export default AvgSpeed;