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

  render() {
    return (
      <Grid item xs={12} className={styles.animations}>
        <Animation animation='pulse' toggleSelected={this.toggleSelected} active={this.state.selected === 'pulse'} />
        <Animation animation='fade' toggleSelected={this.toggleSelected} active={this.state.selected === 'fade'}/>
      </Grid>
    )
  }
}

export default Animations;