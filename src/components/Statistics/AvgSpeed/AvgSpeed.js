import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import styles from './AvgSpeed.module.css';

const AvgSpeed = () => (
  <Card className={styles.avgSpeed}>
    <p>Gennemsnit</p>
    <h3>320 kbit/s</h3>
    <h3>320 kbit/s</h3>
  </Card>
)

export default AvgSpeed;