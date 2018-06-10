import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';

import styles from './SolidColorPreset.module.css';

class SolidColorPreset extends Component {
  render() {
    return (
      <Paper className={styles.colorPreset} style={{background: this.props.backgroundColor}} onClick={() => this.props.onClickHandler(this.props.backgroundColor) }></Paper>
    )
  }
}

export default SolidColorPreset;