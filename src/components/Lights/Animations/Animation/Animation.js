import React  from 'react';
import Paper from '@material-ui/core/Paper';

import styles from './Animation.module.css';

const Animation = (props) => {
  let handleSelectedClick = () => {
    props.toggleSelected(props.animation);
    props.animationClick(props.animation, !props.active);
  }

  return (
    <Paper className={`${styles.animation} ${props.active ? 'activeAnimation' : null }`} onClick={handleSelectedClick}>
      <span>{props.animation}</span>
    </Paper>
  )
}

export default Animation;