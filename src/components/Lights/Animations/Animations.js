import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import styles from './Animations.module.css';
import animationTypes from './AnimationTypes.module.css';

const animations = () => (
  <Grid item xs={12} className={styles.animations}>
    <Paper className={`${styles.animContainer} ${styles.active}`}>
      <div className={animationTypes.pulse}></div>
      <span className={styles.animTitle}>Pulse</span>
    </Paper>
    <Paper className={styles.animContainer}>
      <div className={animationTypes.fade}><div></div><div></div><div></div><div></div></div>
      <span className={styles.animTitle}>Fade</span>
    </Paper>
    <Paper className={styles.animContainer}>
      <div className={animationTypes.pulse}></div>
      <span className={styles.animTitle}>Pulse</span>
    </Paper>
    <Paper className={styles.animContainer}>
      <div className={animationTypes.fade}><div></div><div></div><div></div><div></div></div>
      <span className={styles.animTitle}>Fade</span>
    </Paper>
    <Paper className={styles.animContainer}>
      <div className={animationTypes.pulse}></div>
      <span className={styles.animTitle}>Pulse</span>
    </Paper>
    <Paper className={styles.animContainer}>
      <div className={animationTypes.fade}><div></div><div></div><div></div><div></div></div>
      <span className={styles.animTitle}>Fade</span>
    </Paper>
    <Paper className={styles.animContainer}>
      <div className={animationTypes.pulse}></div>
      <span className={styles.animTitle}>Pulse</span>
    </Paper>
    <Paper className={styles.animContainer}>
      <div className={animationTypes.fade}><div></div><div></div><div></div><div></div></div>
      <span className={styles.animTitle}>Fade</span>
    </Paper>
    <Paper className={styles.animContainer}>
      <div className={animationTypes.pulse}></div>
      <span className={styles.animTitle}>Pulse</span>
    </Paper>
    <Paper className={styles.animContainer}>
      <div className={animationTypes.fade}><div></div><div></div><div></div><div></div></div>
      <span className={styles.animTitle}>Fade</span>
    </Paper>
  </Grid>
)

export default animations;