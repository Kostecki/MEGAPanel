import React from 'react';
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

import styles from './TitleWithDivider.module.css';

const TitleWithDivider = (props) => {
  let showRefresh = props.showRefresh;

  return (
    <React.Fragment>
      <h3 className={styles.cardTitle}>{props.title} {showRefresh > 0 && <FontAwesomeIcon onClick={props.clickAction} className={styles.refresh} icon={faSyncAlt} />}</h3>
      <Divider className={styles.divider} />
    </React.Fragment>
  )
}

export default TitleWithDivider;