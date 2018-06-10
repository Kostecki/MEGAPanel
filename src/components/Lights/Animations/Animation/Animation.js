import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import styles from './Animation.module.css';
import animationTypes from './AnimationTypes.module.css';

class Animation extends Component {
  handleSelectedClick = () => {
    this.props.toggleSelected(this.props.animation);
  }

  render() {
    let fadeDivs = '<div></div><div></div><div></div><div></div></div>';

    return (
      <Paper className={`${styles.animation} ${this.props.active ? 'activeAnimation' : null }`} onClick={this.handleSelectedClick}>
        <div className={animationTypes[this.props.animation]}>
          {this.props.animation === 'fade' ? <span dangerouslySetInnerHTML={{__html: fadeDivs}} /> : null}
        </div>
        <span>{this.props.animation}</span>
      </Paper>
    )
  }
}

export default Animation;