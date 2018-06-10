import React, { Component } from 'react';
import axios from 'axios';

import CardDefault from './../UI/CardDefault/CardDefault';
import SolidColors from './SolidColors/SolidColors';
import Animations from './Animations/Animations';

import styles from './Lights.module.css';

class Lights extends Component {
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
    this.setState({ color: color.rgb, animation: null }, () => this.postColorChange());
  }

  handleAlphaChangeComplete = (color) => {
    this.setState({ color: color.rgb, animation: null }, () => this.postColorChange());
  }

  handlePresetClick = (color) => {
    let newColor = {
      r: parseInt(color.substring(1, 3), 16),
      g: parseInt(color.substring(3, 5), 16),
      b: parseInt(color.substring(5, 7), 16),
      a: 1
    }
    this.setState({ color: newColor, animation: null }, () => this.postColorChange());
  }

  handleBrightnessChangeComplete = (color) => {
    let brightness = {...this.state.brightness};
    brightness.a = color.rgb.a;
    this.setState({ brightness: brightness, animation: null }, () => this.postColorChange());
  }

  handleAnimationSelection = (animationID) => {
    this.setState({animation: animationID}, () => this.postColorChange());
  }

  createRgbaString = (color) => {
    return `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`;
  }

  postColorChange = () => {
    console.log("Posting..");
    console.log(this.state);
    axios.post('#', {
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
    return(
      <div className={styles.lightsContainer}>
        <CardDefault title='Farver'>
          <SolidColors
            currentSelection={this.state}
            hueChangeHandler={this.handleHueChangeComplete}
            alphaChangeHandler={this.handleAlphaChangeComplete} 
            presetClickHandler={this.handlePresetClick} 
            brightnessChangeHandler={this.handleBrightnessChangeComplete} 
            createRgbaStringHandler={this.createRgbaString} />
        </CardDefault>
        <CardDefault title='Animationer'>
          <Animations 
            animationClickHandler={this.handleAnimationSelection} />
        </CardDefault>
      </div>
    )
  }
}

export default Lights;