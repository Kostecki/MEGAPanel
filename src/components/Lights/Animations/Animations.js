import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Animation from './Animation/Animation';

import styles from './Animations.module.css';

class Animations extends Component {
  state = {
    selected: ''
  }

  toggleSelected = (selected) => {
    this.setState(prevState => ({selected: prevState.selected === selected ? '' : selected}))
  };

  animationTypes = ['pulse', 'fade'];

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