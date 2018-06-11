import React from 'react';
import Grid from '@material-ui/core/Grid';

import UsageInterval from './UsageInterval/UsageInterval';

import styles from './UsageIntervals.module.css';

const UsageIntervals = () => (
    <Grid item xs={12} className={styles.usageIntervalsContainer}>
      <UsageInterval period='Time' upload='0.5' download='2' unit='gb' />
      <UsageInterval period='Dag' upload='1' download='3' unit='gb' />
      <UsageInterval period='Uge' upload='7' download='2' unit='gb' />
    </Grid>
)

export default UsageIntervals;