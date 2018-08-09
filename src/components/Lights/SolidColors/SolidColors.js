import React from 'react';
import Grid from '@material-ui/core/Grid';
import { AlphaPicker, SliderPicker } from 'react-color';

import SolidColorPreset from './SolidColorPreset/SolorColorPreset';

import styles from './SolidColors.module.css';

const objectKeysToLowerCase = (obj) => {
  Object.keys(obj).forEach(function (key) {
    var k = key.toLowerCase();
    if (k !== key) {
      obj[k] = obj[key];
      delete obj[key];
    }
  });
  return (obj);
}

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
      <div className={styles.colorPreview} style={{ backgroundColor: props.createRgbStringHandler(props.currentSelection.Color) }}></div>
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
      <p>Farvevælger RGB({props.currentSelection.Color.R}, {props.currentSelection.Color.G}, {props.currentSelection.Color.B})</p>
      <SliderPicker
        className={styles.sliderPicker}
        color={objectKeysToLowerCase(props.currentSelection.Color)}
        onChangeComplete={props.hueChangeHandler} />
    </Grid>

    <Grid item xs={12} md={6} className={styles.brightnessSlider}>
      <p>Lysstyrke ({Math.trunc(props.currentSelection.Brightness * 100)}%)</p>
      <AlphaPicker
        className={styles.alphaPicker}
        color={setBrightness(props.currentSelection.Brightness)}
        onChangeComplete={props.brightnessChangeHandler} />
    </Grid>
  </React.Fragment>
)

export default SolidColors;