import React from 'react'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import styles from './Animations.module.css'
import animationTypes from './AnimationTypes.module.css'

const animations = () => (
  <Card className={styles.card}>
    <h3 className={styles.cardTitle}>Animationer</h3>
    <Divider className={styles.divider} />
    <Grid container spacing={24}>
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
    </Grid>
  </Card>
)

export default animations