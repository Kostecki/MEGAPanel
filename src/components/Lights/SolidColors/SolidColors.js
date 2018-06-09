import React, { Component } from 'react';

import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { HuePicker, AlphaPicker } from 'react-color';

import styles from './SolidColors.module.css';

class SolidColors extends Component {
  state = {
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    },
    brightness: {
      a: 0.5
    },
    animation: null
  }

  handleHueChangeComplete = (color) => {
    this.setState({ color: color.rgb }, () => this.postColorChange());
  }

  handleAlphaChangeComplete = (color) => {
    this.setState({ color: color.rgb }, () => this.postColorChange());
  }

  handlePresetClick = (color) => {
    let newColor = {
      r: parseInt(color.substring(1, 3), 16),
      g: parseInt(color.substring(3, 5), 16),
      b: parseInt(color.substring(5, 7), 16),
      a: 1
    }
    this.setState({ color: newColor }, () => this.postColorChange());
  }

  handleBrightnessChangeComplete = (color) => {
    this.setState({ brightness: color.rgb }, () => this.postColorChange());
  }

  createRgbaString = (color) => {
    return `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`;
  }

  postColorChange = () => {
    console.log("Posting..");
    axios.post('https://putsreq.com/13pmCr7IuFD50z8RzzOz', {
      payload: this.state
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <div className={styles.colorPreview} style={{ background: this.createRgbaString(this.state.color) }}></div>
        </Grid>
        <Grid item xs={8} className={styles.colorPresets}>
          <Paper className={styles.colorPreset} style={{ background: '#ff0000' }} onClick={() => { this.handlePresetClick('#ff0000') }}></Paper>
          <Paper className={styles.colorPreset} style={{ background: '#ffffff' }} onClick={() => { this.handlePresetClick('#ffffff') }}></Paper>
          <Paper className={styles.colorPreset} style={{ background: '#ffff00' }} onClick={() => { this.handlePresetClick('#ffff00') }}></Paper>
          <Paper className={styles.colorPreset} style={{ background: '#008000' }} onClick={() => { this.handlePresetClick('#008000') }}></Paper>
          <Paper className={styles.colorPreset} style={{ background: '#40e0d0' }} onClick={() => { this.handlePresetClick('#40e0d0') }}></Paper>
          <Paper className={styles.colorPreset} style={{ background: '#0000ff' }} onClick={() => { this.handlePresetClick('#0000ff') }}></Paper>
          <Paper className={styles.colorPreset} style={{ background: '#FF5000' }} onClick={() => { this.handlePresetClick('#ffa500') }}></Paper>
          <Paper className={styles.colorPreset} style={{ background: '#800080' }} onClick={() => { this.handlePresetClick('#800080') }}></Paper>
        </Grid>

        <Grid item xs={6} className={styles.brightnessSlider}>
          <p>Lysstyrke ({Math.trunc(this.state.brightness.a * 100)}%)</p>
          <AlphaPicker
            className={styles.alphaPicker}
            color={this.state.brightness}
            onChangeComplete={this.handleBrightnessChangeComplete} />
          <div className={styles.brightnessIcons}>
            <i className="far fa-lightbulb"></i>
            <i className="fas fa-lightbulb"></i>
          </div>
        </Grid>
        <Grid item xs={6}>
          <p>Farvevælger ({this.state.color.r}, {this.state.color.g}, {this.state.color.b}, {this.state.color.a})</p>
          <HuePicker
            className={styles.huePicker}
            color={this.state.color}
            onChangeComplete={this.handleHueChangeComplete} />
          <AlphaPicker
            className={styles.alphaPicker}
            color={this.state.color}
            onChangeComplete={this.handleAlphaChangeComplete} />
        </Grid>
      </React.Fragment>
    )
  }
}

export default SolidColors;