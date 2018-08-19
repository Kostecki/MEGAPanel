import React from 'react';
import Grid from '@material-ui/core/Grid';
import { AlphaPicker, SliderPicker } from 'react-color';

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

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const SolidColors = (props) => {
  let hexString = rgbToHex(props.currentSelection.Color.R, props.currentSelection.Color.G, props.currentSelection.Color.B);

  return (
    <React.Fragment>
      <Grid item xs={4} md={4}>
        <div className={styles.colorPreview} style={{ backgroundColor: hexString }}></div>
      </Grid>
      <Grid item xs={8} className={styles.colorPresets}>
        <SolidColorPreset backgroundColor='#f44336' onClickHandler={props.presetColorClick} />
        <SolidColorPreset backgroundColor='#e91e63' onClickHandler={props.presetColorClick} />
        <SolidColorPreset backgroundColor='#9c27b0' onClickHandler={props.presetColorClick} />
        <SolidColorPreset backgroundColor='#3f51b5' onClickHandler={props.presetColorClick} />
        <SolidColorPreset backgroundColor='#04a9f4' onClickHandler={props.presetColorClick} />
        <SolidColorPreset backgroundColor='#009688' onClickHandler={props.presetColorClick} />
        <SolidColorPreset backgroundColor='#8bc34a' onClickHandler={props.presetColorClick} />
        <SolidColorPreset backgroundColor='#ffeb3b' onClickHandler={props.presetColorClick} />
      </Grid>

      <Grid item xs={12} md={6}>
        <p className={styles.p}>Farvevælger RGB({props.currentSelection.Color.R}, {props.currentSelection.Color.G}, {props.currentSelection.Color.B})</p>
        <SliderPicker
          className={styles.sliderPicker}
          color={hexString}
          onChangeComplete={props.colorChange} />
      </Grid>

      <Grid item xs={12} md={6} className={styles.brightnessSlider}>
        <p className={styles.p}>Lysstyrke ({Math.trunc(props.currentSelection.Brightness * 100)}%)</p>
        <AlphaPicker
          className={styles.alphaPicker}
          color={setBrightness(props.currentSelection.Brightness)}
          onChangeComplete={props.brightnessChange} />
      </Grid>
    </React.Fragment>
  )
}

export default SolidColors;