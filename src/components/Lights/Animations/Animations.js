import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Animation from './Animation/Animation';

import styles from './Animations.module.css';

class Animations extends Component {
  state = {
    selected: this.props.activeAnimation
  }

  toggleSelected = (selected) => {
    this.setState(prevState => ({selected: prevState.selected === selected ? '' : selected}))
  };

  animationTypes = ['bpm', 'candy cane', 'confetti', 'cyclon rainbow', 'dots', 'fire', 'glitter', 'juggle', 'lightning', 'police all', 'police one', 'rainbow', 'ripple', 'rainbow with glitter', 'sinelon', 'twinkle', 'noise'];

  render() {
    return (
      <Grid item xs={12} className={styles.animations}>
        { this.animationTypes.map((item, i) => <Animation key={i}
                                                id={i}
                                                animation={item}
                                                toggleSelected={this.toggleSelected}
                                                active={this.state.selected === item}
                                                animationClickHandler={this.props.animationClickHandler}/>) }
      </Grid>
    )
  }
}

export default Animations;