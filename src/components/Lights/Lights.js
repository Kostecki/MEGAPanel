import React, { Component } from 'react';
import Axios from '../../utils/api';

import Loader from '../UI/Loader/Loader';
import CardDefault from '../UI/CardDefault/CardDefault';
import SolidColors from './SolidColors/SolidColors';
import Animations from './Animations/Animations';
import withAuthorization from '../Auth/withAuthorization';
import Navigation from '../Navigation/Navigation';

import styles from './Lights.module.css';

class Lights extends Component {
  state = {
    lights: {},
    loader: true
  }

  /* state = {
    animation: null,
    brightness: 0.5,
    color: {
      r: 255,
      g: 0,
      b: 0
    },
    controller: null
  } */

  componentDidMount = () => {
    this.fetchFromApi();
    this.interval = setInterval(() => {
      this.fetchFromApi();
    }, 300000);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  fetchFromApi = () => {
    this.setState({ loader: true });
    Axios.get('/getlit')
      .then((response) => {
        this.setState({ lights: response.data });
        this.setState({ loader: false });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleColorChangeComplete = (color) => {
    let lights = this.state.lights;
    lights.color = color.rgb;
    lights.animation = this.state.lights.animation;

    this.setState({ lights: lights }, () => this.postColorChange())
  }

  handlePresetClick = (color) => {
    let newColor = {
      r: parseInt(color.substring(1, 3), 16),
      g: parseInt(color.substring(3, 5), 16),
      b: parseInt(color.substring(5, 7), 16)
    }

    let lights = this.state.lights;
    lights.color = newColor;
    lights.animation = this.state.lights.animation;

    this.setState({ lights: lights }, () => this.postColorChange());
  }

  handleBrightnessChangeComplete = (color) => {
    let brightness = color.rgb.a;

    let lights = this.state.lights;
    lights.brightness = brightness;
    lights.animation = this.state.lights.animation;

    this.setState({ lights: lights }, () => this.postColorChange());
  }

  handleAnimationSelection = (animationName, toggle) => {
    let lights = this.state.lights;

    if (toggle) {
      lights.animation = animationName;
    } else {
      lights.animation = null;
    }

    this.setState({ lights: lights }, () => this.postColorChange());
  }

  createRgbaString = () => (
    `rgba(${this.state.lights.color.r}, ${this.state.lights.color.g}, ${this.state.lights.color.b})`
  )

  postColorChange = () => (
    Axios.post('/setlights', this.state.lights)
  )

  render() {
    if (this.state.loader) {
      return (
        <Loader title='Farver' />
      )
    }

    return (
      <React.Fragment>
        <div className={styles.lightsContainer}>
          <CardDefault title='Farver'>
            <SolidColors
              currentSelection={this.state.lights}
              hueChangeHandler={this.handleColorChangeComplete}
              alphaChangeHandler={this.handleColorChangeComplete}
              presetClickHandler={this.handlePresetClick}
              brightnessChangeHandler={this.handleBrightnessChangeComplete}
              createRgbaStringHandler={this.createRgbaString} />
          </CardDefault>
          <CardDefault title='Animationer'>
            <Animations
              activeAnimation={this.state.lights.animation}
              animationClickHandler={this.handleAnimationSelection} />
          </CardDefault>
        </div>
        <Navigation />
      </React.Fragment>
    )
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition, "/lights")(Lights);