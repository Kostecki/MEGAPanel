import React from 'react';

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper'
import Icon from '@material-ui/core/Icon';
import { HuePicker, AlphaPicker } from 'react-color'

import styles from './SolidColors.module.css'

const solidColors = () => (
  <Card className={styles.card}>
    <h3 className={styles.cardTitle}>Farver</h3>
    <Grid container spacing={24}>
      <Grid item xs={4}>
        <Paper>
          <div className={styles.colorPreview} style={{background: 'red'}}></div>
        </Paper>
      </Grid>
      <Grid item xs={8} className={styles.colorPresets}>
        <Paper className={styles.colorPreset} style={{background: 'red'}}></Paper>
        <Paper className={styles.colorPreset} style={{background: 'white'}}></Paper>
        <Paper className={styles.colorPreset} style={{background: 'yellow'}}></Paper>
        <Paper className={styles.colorPreset} style={{background: 'green'}}></Paper>
        <Paper className={styles.colorPreset} style={{background: 'turquoise'}}></Paper>
        <Paper className={styles.colorPreset} style={{background: 'blue'}}></Paper>
        <Paper className={styles.colorPreset} style={{background: 'orange'}}></Paper>
        <Paper className={styles.colorPreset} style={{background: 'purple'}}></Paper>
      </Grid>
    </Grid>

    <Grid container spacing={24} className={styles.sliders}>
      <Grid item xs={6} className={styles.brightnessSlider}>
        <p>Lysstyrke</p>
        <AlphaPicker className={styles.alphaPicker} />
      </Grid>
      <Grid item xs={6}>
        <p>Custom Color</p>
        <HuePicker className={styles.huePicker} />
        <AlphaPicker className={styles.alphaPicker} />
      </Grid>
    </Grid>
  </Card>
)

export default solidColors