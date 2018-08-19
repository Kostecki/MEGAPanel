import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/lab/Slider';

import Animation from './Animation/Animation';

import styles from './Animations.module.css';

class Animations extends Component {
  state = {
    selected: null,
    speed: 30
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selected !== this.props.currentSelection.Animation) {
      this.setState({ selected: this.props.currentSelection.Animation })
    }
  }

  handleSpeedOnChange = (event, speed) => {
    this.setState({ speed }, () => {
      this.props.animationSpeedChange(this.state.speed);
    });
  };

  toggleSelected = (selected) => {
    console.log("toggleSelected");
    this.setState(prevState => ({ selected: prevState.selected === selected ? null : selected }))
  };

  animationTypes = ['bpm',
    'candy cane',
    'confetti',
    'cyclon rainbow',
    'dots',
    'fire',
    'glitter',
    'juggle',
    'lightning',
    'police all',
    'police one',
    'rainbow',
    'ripple',
    'rainbow with glitter',
    'sinelon',
    'twinkle',
    'noise'];

  render() {
    return (
      <React.Fragment>
        <Grid item xs={12} sm={4}>
          <div className={styles.speed}>
            <p className={styles.p} onClick={() => {this.setState({speed: 30})}}>Animationshastighed ({this.state.speed})</p>
            <Slider className={styles.speedSlider} style={{padding: 0}} value={this.state.speed} min={10} max={200} step={10} onChange={this.handleSpeedOnChange} />
          </div>
        </Grid>
        <Grid item xs={12} className={styles.animations}>
          {this.animationTypes.map((item, i) => <Animation key={i}
            id={i}
            animation={item}
            toggleSelected={this.toggleSelected}
            active={this.state.selected === item}
            animationClick={this.props.animationClick} />)}
        </Grid>
      </React.Fragment>
    )
  }
}

export default Animations;