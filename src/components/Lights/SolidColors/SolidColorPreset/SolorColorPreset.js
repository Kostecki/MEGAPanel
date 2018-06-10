import React from 'react';
import Paper from '@material-ui/core/Paper';

import styles from './SolidColorPreset.module.css';

const SolidColorPreset = (props) => {
  return (
    <Paper className={styles.colorPreset} style={{background: props.backgroundColor}} onClick={() => props.onClickHandler(props.backgroundColor) }></Paper>
  )
}

export default SolidColorPreset;