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

    //Only fetch new data when in production
    if (process.env.NODE_ENV === "production") {
      this.interval = setInterval(() => {
        this.fetchFromApi();
      }, 5000);
    }
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
    let newColor = {
      R: color.rgb.r,
      G: color.rgb.g,
      B: color.rgb.b
    }
    
    newLights.Color = newColor;

    if (!this.state.lights.Animation) {
      newLights.Animation = "solid"
    } else {
      newLights.Animation = this.state.lights.Animation;
    }

    this.setState({ lights: this.state.lights }, () => this.postColorChange())
  }

  handlePresetClick = (color) => {
    let newLights = this.state.lights;
    let newColor = {
      R: parseInt(color.substring(1, 3), 16),
      G: parseInt(color.substring(3, 5), 16),
      B: parseInt(color.substring(5, 7), 16)
    }

    newLights.Color = newColor;

    if (!this.state.lights.Animation) {
      newLights.Animation = "solid"
    } else {
      newLights.Animation = this.state.lights.Animation;
    }

    this.setState({ lights: newLights }, () => this.postColorChange());
  }

  handleBrightnessChangeComplete = (color) => {
    let brightness = color.rgb.a; //Brightness value from color picker
    let newLights = this.state.lights;

    let newColor = {
      R: newLights.Color.r,
      G: newLights.Color.g,
      B: newLights.Color.b
    };

    newLights.Color = newColor;
    newLights.Brightness = brightness;
    newLights.Animation = this.state.lights.Animation;

    this.setState({ lights: newLights }, () => this.postColorChange());
  }

  handleAnimationSelection = (animationName, toggle) => {
    let newLights = this.state.lights;

    let newColor = {
      R: newLights.Color.r,
      G: newLights.Color.g,
      B: newLights.Color.b
    };

    newLights.Color = newColor;

    if (toggle) {
      newLights.Animation = animationName;
    } else {
      newLights.Animation = "solid";
    }

    this.setState({ lights: newLights }, () => this.postColorChange());
  }

  createRgbString = () => (
    `rgb(${this.state.lights.Color.R}, ${this.state.lights.Color.G}, ${this.state.lights.Color.B})`
  )

  postColorChange = () => {
    console.log(this.state.lights);
    Axios.post('/setlights', this.state.lights)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error)
    })
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
              createRgbStringHandler={this.createRgbString} />
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