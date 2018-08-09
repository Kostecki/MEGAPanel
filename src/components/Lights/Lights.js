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
    isLoading: true,
    isFirstLoad: false
  }

  componentWillMount = () => {
    this.fetchFromApi();
    this.interval = setInterval(() => {
      this.fetchFromApi();
    }, 5000);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  fetchFromApi = () => {
    if (this.state.isFirstLoad) {
      this.setState({ isLoading: true });
      this.setState({ isFirstLoad: false });
    }

    Axios.get('/getlit')
      .then((response) => {
        this.setState({ lights: response.data, isLoading: false});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleColorChangeComplete = (color) => {
    let newLights = this.state.lights;
    let newColors = {
      R: color.rgb.r,
      G: color.rgb.g,
      B: color.rgb.b
    }
    
    newLights.Color = newColors;
    this.setState({ lights: this.state.lights }, () => this.postColorChange())
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
    let newLights = {
      Color: {
        R: this.state.lights.Color.R,
        G: this.state.lights.Color.G,
        B: this.state.lights.Color.B
      }
    };
    newLights.Brightness = brightness;
    newLights.Animation = this.state.lights.Animation;

    this.setState({ lights: newLights }, () => this.postColorChange());
  }

  handleAnimationSelection = (animationName, toggle) => {
    let newLights = this.state.lights;

    if (toggle) {
      newLights.Animation = animationName;
    } else {
      newLights.Animation = null;
    }

    this.setState({ lights: newLights }, () => this.postColorChange());
  }

  createRgbString = () => (
    `rgb(${this.state.lights.Color.R}, ${this.state.lights.Color.G}, ${this.state.lights.Color.B})`
  )

  postColorChange = () => {
    console.log(this.state.lights);
    Axios.post('/setlights', this.state.lights);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <React.Fragment>
          <Loader title='Farver' />
          <Navigation />
        </React.Fragment>
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
              createRgbStringHandler={this.createRgbaString} />
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