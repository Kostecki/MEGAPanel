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
    animation: {
      enabled: false,
      type: null
    }
  }

  handleColorChangeComplete = (color) => {
    let animationCopy = {...this.state.animation};
    animationCopy.enabled = this.state.animation.enabled;

    this.setState({color: color.rgb, animation: animationCopy}, () => this.postColorChange());
  }

  handlePresetClick = (color) => {
    let newColor = {
      r: parseInt(color.substring(1, 3), 16),
      g: parseInt(color.substring(3, 5), 16),
      b: parseInt(color.substring(5, 7), 16),
      a: 1
    }

    let animationCopy = {...this.state.animation};
    animationCopy.enabled = this.state.animation.enabled;

    this.setState({color: newColor, animation: animationCopy}, () => this.postColorChange());
  }

  handleBrightnessChangeComplete = (color) => {
    let brightness = color.rgb.a;
    let animationCopy = {...this.state.animation};
    animationCopy.enabled = this.state.animation.enabled;

    this.setState({ brightness: brightness, animation: animationCopy }, () => this.postColorChange());
  }

  handleAnimationSelection = (animationName, toggle) => {
    let animationCopy = {...this.state.animation};

    if (toggle) {
      animationCopy.enabled = true;
      animationCopy.type = animationName;

      this.setState({animation: animationCopy}, () => this.postColorChange());
    } else {
      animationCopy.enabled = false;
      animationCopy.type = null;

      this.setState({animation: animationCopy}, () => this.postColorChange());
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
              activeAnimation={this.state.animation.type}
              animationClickHandler={this.handleAnimationSelection} />
          </CardDefault>
        </div>
        <Navigation />
      </React.Fragment>
    )
  }
}

export default Lights;