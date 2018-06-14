import React, { Component } from 'react';
import { axiosPost } from '../../api';
import CardDefault from './../UI/CardDefault/CardDefault';
import SolidColors from './SolidColors/SolidColors';
import Animations from './Animations/Animations';

import Navigation from '../Navigation/Navigation';

import styles from './Lights.module.css';

class Lights extends Component {
  state = {
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    },
    brightness: 0.5,
    animation: null
  }

  handleColorChangeComplete = (color) => {
    this.setState({color: color.rgb, animation: this.state.animation}, () => this.postColorChange());
  }

  handlePresetClick = (color) => {
    let newColor = {
      r: parseInt(color.substring(1, 3), 16),
      g: parseInt(color.substring(3, 5), 16),
      b: parseInt(color.substring(5, 7), 16),
      a: 1
    }
    
    this.setState({color: newColor, animation: this.state.animation}, () => this.postColorChange());
  }

  handleBrightnessChangeComplete = (color) => {
    let brightness = color.rgb.a;

    this.setState({ brightness: brightness, animation: this.state.animation }, () => this.postColorChange());
  }

  handleAnimationSelection = (animationName, toggle) => {
    if (toggle) {
      this.setState({animation: animationName}, () => this.postColorChange());
    } else {
      this.setState({animation: null}, () => this.postColorChange());
    }
  }

  createRgbaString = (color) => {
    return `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`;
  }

  postColorChange = () => {
    axiosPost('/setlights', this.state);
  }

  render() {
    return(
      <React.Fragment>
        <div className={styles.lightsContainer}>
          <CardDefault title='Farver'>
            <SolidColors
              currentSelection={this.state}
              hueChangeHandler={this.handleColorChangeComplete}
              alphaChangeHandler={this.handleColorChangeComplete} 
              presetClickHandler={this.handlePresetClick} 
              brightnessChangeHandler={this.handleBrightnessChangeComplete} 
              createRgbaStringHandler={this.createRgbaString} />
          </CardDefault>
          <CardDefault title='Animationer'>
            <Animations
              activeAnimation={this.state.animation}
              animationClickHandler={this.handleAnimationSelection} />
          </CardDefault>
        </div>
        <Navigation />
      </React.Fragment>
    )
  }
}

export default Lights;