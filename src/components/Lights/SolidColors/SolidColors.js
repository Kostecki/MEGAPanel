import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import { HuePicker, AlphaPicker } from 'react-color';

import styles from './SolidColors.module.css';

class SolidColors extends Component {
  state = {
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }
  }

  handleHueChangeComplete = (color) => {
    this.setState({color: color.rgb});
    console.log(color.rgb);
  }

  handleAlphaChangeComplete = (color) => {
    this.setState({color: color.rgb});
  }

  handlePresetClick = (color) => {
    let newColor = {
      r: parseInt(color.substring(1,3),16),
      g: parseInt(color.substring(3,5),16),
      b: parseInt(color.substring(5,7),16),
      a: 1
    }
    this.setState({color: newColor});
  }

  rgbaString = (color) => {
    return `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`;
  }

  render() {
    return (
      <Card className={styles.card}>
        <h3 className={styles.cardTitle}>Farver | {this.state.color.r}, {this.state.color.g}, {this.state.color.b}, {this.state.color.a}</h3>
        <Divider className={styles.divider} />
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <div className={styles.colorPreview} style={{background: this.rgbaString(this.state.color)}}></div>
          </Grid>
          <Grid item xs={8} className={styles.colorPresets}>
            <Paper className={styles.colorPreset} style={{ background: '#ff0000' }} onClick={() => {this.handlePresetClick('#ff0000')}}></Paper>
            <Paper className={styles.colorPreset} style={{ background: '#ffffff' }} onClick={() => {this.handlePresetClick('#ffffff')}}></Paper>
            <Paper className={styles.colorPreset} style={{ background: '#ffff00' }} onClick={() => {this.handlePresetClick('#ffff00')}}></Paper>
            <Paper className={styles.colorPreset} style={{ background: '#008000' }} onClick={() => {this.handlePresetClick('#008000')}}></Paper>
            <Paper className={styles.colorPreset} style={{ background: '#40e0d0' }} onClick={() => {this.handlePresetClick('#40e0d0')}}></Paper>
            <Paper className={styles.colorPreset} style={{ background: '#0000ff' }} onClick={() => {this.handlePresetClick('#0000ff')}}></Paper>
            <Paper className={styles.colorPreset} style={{ background: '#FF5000' }} onClick={() => {this.handlePresetClick('#ffa500')}}></Paper>
            <Paper className={styles.colorPreset} style={{ background: '#800080' }} onClick={() => {this.handlePresetClick('#800080')}}></Paper>
          </Grid>
        </Grid>

        <Grid container spacing={24} className={styles.sliders}>
          <Grid item xs={6} className={styles.brightnessSlider}>
            <p>Lysstyrke</p>
            <AlphaPicker 
              className={styles.alphaPicker} />
          </Grid>
          <Grid item xs={6}>
            <p>Custom Color</p>
            <HuePicker
              className={styles.huePicker} 
              color={this.state.color} 
              onChangeComplete={this.handleHueChangeComplete} />
            <AlphaPicker
              className={styles.alphaPicker}
              color={this.state.color}
              onChangeComplete={this.handleAlphaChangeComplete} />
          </Grid>
        </Grid>
      </Card>
    )
  }
}

export default SolidColors;