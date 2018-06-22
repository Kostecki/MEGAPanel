import React from 'react';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';

import styles from './TitleWithDivider.module.css';

const TitleWithDivider = (props) => {
  return (
    <React.Fragment>
      <h3 className={styles.cardTitle}>{props.title} <Icon onClick={props.clickAction} className={styles.refresh}>refresh</Icon></h3>
      <Divider className={styles.divider} />
    </React.Fragment>
  )
}

export default TitleWithDivider;