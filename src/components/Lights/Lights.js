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
    animation: null,
    brightness: null,
    color: {},
    controller: null
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

  /* componentDidMount = () => {
    this.fetchFromApi();
    this.interval = setInterval(() => {
      this.fetchFromApi();
    }, 300000);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  } */

  fetchFromApi = () => (
    Axios.get('/getlit')
      .then((response) => {
        this.setState(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  )

  handleColorChangeComplete = (color) => (
    this.setState({color: color.rgb, animation: this.state.animation}, () => this.postColorChange())
  )

  handlePresetClick = (color) => {
    let newColor = {
      r: parseInt(color.substring(1, 3), 16),
      g: parseInt(color.substring(3, 5), 16),
      b: parseInt(color.substring(5, 7), 16)
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

  createRgbaString = () => (
    `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b})`
  )

  postColorChange = () => (
    Axios.post('/setlights', this.state)
  )

  render() {
    if (!this.state.brightness){
      return (
        <Loader title='Statistik' />
      )
    }
    
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

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition, "/lights")(Lights);