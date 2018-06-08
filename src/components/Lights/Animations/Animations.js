import React from 'react'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';

import styles from './Animations.module.css'
import animationStyles from './AnimationStyles.module.css'

const animations = () => (
  <Card className={styles.card}>
    <h3 className={styles.cardTitle}>Animationer</h3>
    <Grid container spacing={24}>
      <Grid item xs={12} className={styles.animations}>
        {/* <Button className={styles.anim1} variant="contained"></Button>
        <Button variant="contained">Fade</Button>
        <Button variant="contained">Rainbow</Button> */}
        <Paper className={styles.animContainer}>
          <div className={animationStyles.pulse}></div>
          <span className={styles.animTitle}>Pulse</span>
        </Paper>

        <Paper className={styles.animContainer}>
          <div className={animationStyles.fade}><div></div><div></div><div></div><div></div></div>
          <span className={styles.animTitle}>Fade</span>
        </Paper>
      </Grid>
    </Grid>
  </Card>
)

export default animations