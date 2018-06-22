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
    lights.Color = color.rgb;
    lights.Animation = this.state.lights.Animation;

    this.setState({ lights: lights }, () => this.postColorChange())
  }

  handlePresetClick = (color) => {
    let newColor = {
      R: parseInt(color.substring(1, 3), 16),
      G: parseInt(color.substring(3, 5), 16),
      B: parseInt(color.substring(5, 7), 16)
    }

    let lights = this.state.lights;
    lights.Color = newColor;
    lights.Animation = this.state.lights.Animation;

    this.setState({ lights: lights }, () => this.postColorChange());
  }

  handleBrightnessChangeComplete = (color) => {
    let brightness = color.rgb.a;

    let lights = this.state.lights;
    lights.Brightness = brightness;
    lights.Animation = this.state.lights.Animation;

    this.setState({ lights: lights }, () => this.postColorChange());
  }

  handleAnimationSelection = (animationName, toggle) => {
    let lights = this.state.lights;

    if (toggle) {
      lights.Animation = animationName;
    } else {
      lights.Animation = null;
    }

    this.setState({ lights: lights }, () => this.postColorChange());
  }

  createRgbaString = () => (
    `rgba(${this.state.lights.Color.R}, ${this.state.lights.Color.G}, ${this.state.lights.Color.B})`
  )

  postColorChange = () => {
    Axios.post('/setlights', this.state.lights);
    console.log(this.state);
  }

  render() {
    if (this.state.loader) {
      return (
        <Loader title='Farver' />
      )
    }

    return (
      <React.Fragment>
        <div className={styles.lightsContainer}>
          <CardDefault title='Farver' showRefresh clickAction={this.fetchFromApi}>
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