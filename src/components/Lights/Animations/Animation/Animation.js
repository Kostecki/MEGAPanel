import React  from 'react';
import Paper from '@material-ui/core/Paper';

import styles from './Animation.module.css';
import animationTypes from './AnimationTypes.module.css';

const Animation = (props) => {
  let handleSelectedClick = () => {
    props.toggleSelected(props.animation);
    props.animationClickHandler(props.id, !props.active);
  }

  let fadeDivs = '<div></div><div></div><div></div><div></div></div>';

  return (
    <Paper className={`${styles.animation} ${props.active ? 'activeAnimation' : null }`} onClick={handleSelectedClick}>
      <div className={animationTypes[props.animation]}>
        {props.animation === 'fade' ? <span dangerouslySetInnerHTML={{__html: fadeDivs}} /> : null}
      </div>
      <span>{props.animation}</span>
    </Paper>
  )
}

export default Animation;