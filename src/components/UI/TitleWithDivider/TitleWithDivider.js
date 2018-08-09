import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

import styles from './TitleWithDivider.module.css';

class TitleWithDivider extends Component {
  state = {
    animate: false
  }

  showRefresh = this.props.showRefresh;

  render() {
    return (
      <React.Fragment>
      <h3 className={styles.cardTitle}>{this.props.title} {this.showRefresh > 0 && <FontAwesomeIcon onTransitionEnd={() => this.setState({animate: false})}
                                                                                                    onClick={(event) => { this.props.clickAction(); this.setState({animate: true}) }}
                                                                                                    className={`${styles.refresh} ${this.state.animate ? 'refreshAnimation' : null }`}
                                                                                                    icon={faSyncAlt} />}</h3>
      <Divider className={styles.divider} />
    </React.Fragment>
    )
  }
}

export default TitleWithDivider;