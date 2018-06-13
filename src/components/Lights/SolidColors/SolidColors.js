import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HuePicker, AlphaPicker } from 'react-color';

import SolidColorPreset from './SolidColorPreset/SolorColorPreset';

import styles from './SolidColors.module.css';

const setBrightness = (brightness) => {
  let brightnessObject = {
    r: null,
    g: null,
    b: null,
    a: brightness
  }

  return brightnessObject;
}

const SolidColors = (props) => (
  <React.Fragment>
    <Grid item xs={4} md={4}>
      <div className={styles.colorPreview} style={{ background: props.createRgbaStringHandler(props.currentSelection.color) }}></div>
    </Grid>
    <Grid item xs={8} className={styles.colorPresets}>
      <SolidColorPreset backgroundColor='#ff0000' onClickHandler={props.presetClickHandler} />
      <SolidColorPreset backgroundColor='#ffffff' onClickHandler={props.presetClickHandler} />
      <SolidColorPreset backgroundColor='#ffff00' onClickHandler={props.presetClickHandler} />
      <SolidColorPreset backgroundColor='#008000' onClickHandler={props.presetClickHandler} />
      <SolidColorPreset backgroundColor='#40e0d0' onClickHandler={props.presetClickHandler} />
      <SolidColorPreset backgroundColor='#0000ff' onClickHandler={props.presetClickHandler} />
      <SolidColorPreset backgroundColor='#FF5000' onClickHandler={props.presetClickHandler} />
      <SolidColorPreset backgroundColor='#800080' onClickHandler={props.presetClickHandler} />
    </Grid>

    <Grid item xs={12} md={6}>
      <p>Farvevælger ({props.currentSelection.color.r}, {props.currentSelection.color.g}, {props.currentSelection.color.b}, {props.currentSelection.color.a})</p>
      <HuePicker
        className={styles.huePicker}
        color={props.currentSelection.color}
        onChangeComplete={props.hueChangeHandler} />
      <AlphaPicker
        className={styles.alphaPicker}
        color={props.currentSelection.color}
        onChangeComplete={props.alphaChangeHandler} />
    </Grid>

    <Grid item xs={12} md={6} className={styles.brightnessSlider}>
      <p>Lysstyrke ({Math.trunc(props.currentSelection.brightness * 100)}%)</p>
      <AlphaPicker
        className={styles.alphaPicker}
        color={setBrightness(props.currentSelection.brightness)}
        onChangeComplete={props.brightnessChangeHandler} />
      <div className={styles.brightnessIcons}>
        <i className="far fa-lightbulb"></i>
        <i className="fas fa-lightbulb"></i>
      </div>
    </Grid>
  </React.Fragment>
)

export default SolidColors;