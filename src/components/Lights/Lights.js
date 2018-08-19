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
    lights: {
      "Animation": null,
      "Brightness": null,
      "Color": {
        "R": null,
        "G": null,
        "B": null
      },
      "Speed": null
    },
    isLoading: false,
    isFirstLoad: false
  }

  componentWillMount = () => {
    this.handleFetchFromApi();

    //Only fetch new data automatically when in production
    if (process.env.NODE_ENV === "production") {
      this.interval = setInterval(() => {
        this.handleFetchFromApi();
      }, 5000);
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  handleFetchFromApi = () => {
    if (this.state.isFirstLoad) {
      this.setState({ isLoading: true });
      this.setState({ isFirstLoad: false });
    }

    Axios.get('/getlit')
      .then((response) => {
        if (!response.data.Animation) {
          this.setState({ lights: "error", isLoading: false, isFirstLoad: true });
        } else {
          this.setState({ lights: response.data, isLoading: false });
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleColorChange = (color) => {
    let newLights = this.state.lights;

    newLights.Color.R = color.rgb.r;
    newLights.Color.G = color.rgb.g;
    newLights.Color.B = color.rgb.b;

    if (!this.state.lights.Animation) {
      newLights.Animation = "solid";
    } else {
      newLights.Animation = this.state.lights.Animation;
    }

    this.setState({ lights: newLights }, () => this.handlePostToApi())
  }

  handlePresetColorClick = (color) => {
    let newLights = this.state.lights;

    newLights.Color.R = parseInt(color.substring(1, 3), 16);
    newLights.Color.G = parseInt(color.substring(3, 5), 16);
    newLights.Color.B = parseInt(color.substring(5, 7), 16);

    if (!this.state.lights.Animation) {
      newLights.Animation = "solid";
    } else {
      newLights.Animation = this.state.lights.Animation;
    }

    this.setState({ lights: newLights }, () => this.handlePostToApi());
  }

  handleBrightnessChange = (color) => {
    let newLights = this.state.lights;
    
    newLights.Brightness = color.rgb.a; //Brightness value from color picker

    this.setState({ lights: newLights }, () => this.handlePostToApi());
  }

  handleAnimationClick = (animationName, toggle) => {
    let newLights = this.state.lights;

    if (toggle) {
      newLights.Animation = animationName;
    } else {
      newLights.Animation = "solid";
    }

    this.setState({ lights: newLights }, () => this.handlePostToApi());
  }
  
  handleAnimationSpeedChange = (speed) => {
    let newLights = this.state.lights;

    newLights.Speed = speed;

    this.setState({ lights: newLights }, () => this.handlePostToApi());
  }

  handlePostToApi = () => {
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
          <Loader title="Farver" />
          <Navigation />
        </React.Fragment>
      )
    }

    if (this.state.lights === "error") {
      return (
        <React.Fragment>
          <CardDefault title="Farver" showRefresh clickAction={this.handleFetchFromApi}>
            <p className={`${styles.shitsfucked} ${styles.rotating}`}>Noget er i stykker.. <br /> ¯\_(ツ)_/¯</p>
          </CardDefault>
          <Navigation />
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        <div className={styles.container}>
          <CardDefault title="Farver" showRefresh clickAction={this.handleFetchFromApi}>
            <SolidColors
              currentSelection={this.state.lights}
              presetColorClick={this.handlePresetColorClick}
              colorChange={this.handleColorChange}
              brightnessChange={this.handleBrightnessChange} />
          </CardDefault>
          <CardDefault title="Animationer">
            <Animations
              currentSelection={this.state.lights}
              animationClick={this.handleAnimationClick}
              animationSpeedChange={this.handleAnimationSpeedChange} />
          </CardDefault>
        </div>
        <Navigation />
      </React.Fragment>
    )
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition, "/lights")(Lights);