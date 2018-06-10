import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { HuePicker, AlphaPicker } from 'react-color';

import SolidColorPreset from './SolidColorPreset/SolorColorPreset';

import styles from './SolidColors.module.css';

class SolidColors extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <div className={styles.colorPreview} style={{ background: this.props.createRgbaStringHandler(this.props.currentSelection.color) }}></div>
        </Grid>
        <Grid item xs={8} className={styles.colorPresets}>
          <SolidColorPreset backgroundColor='#ff0000' onClickHandler={this.props.presetClickHandler} />
          <SolidColorPreset backgroundColor='#ffffff' onClickHandler={this.props.presetClickHandler} />
          <SolidColorPreset backgroundColor='#ffff00' onClickHandler={this.props.presetClickHandler} />
          <SolidColorPreset backgroundColor='#008000' onClickHandler={this.props.presetClickHandler} />
          <SolidColorPreset backgroundColor='#40e0d0' onClickHandler={this.props.presetClickHandler} />
          <SolidColorPreset backgroundColor='#0000ff' onClickHandler={this.props.presetClickHandler} />
          <SolidColorPreset backgroundColor='#FF5000' onClickHandler={this.props.presetClickHandler} />
          <SolidColorPreset backgroundColor='#800080' onClickHandler={this.props.presetClickHandler} />
        </Grid>

        <Grid item xs={6} className={styles.brightnessSlider}>
          <p>Lysstyrke ({Math.trunc(this.props.currentSelection.brightness.a * 100)}%)</p>
          <AlphaPicker
            className={styles.alphaPicker}
            color={this.props.currentSelection.brightness}
            onChangeComplete={this.props.brightnessChangeHandler} />
          <div className={styles.brightnessIcons}>
            <i className="far fa-lightbulb"></i>
            <i className="fas fa-lightbulb"></i>
          </div>
        </Grid>
        <Grid item xs={6}>
          <p>Farvevælger ({this.props.currentSelection.color.r}, {this.props.currentSelection.color.g}, {this.props.currentSelection.color.b}, {this.props.currentSelection.color.a})</p>
          <HuePicker
            className={styles.huePicker}
            color={this.props.currentSelection.color}
            onChangeComplete={this.props.hueChangeHandler} />
          <AlphaPicker
            className={styles.alphaPicker}
            color={this.props.currentSelection.color}
            onChangeComplete={this.props.alphaChangeHandler} />
        </Grid>
      </React.Fragment>
    )
  }
}

export default SolidColors;