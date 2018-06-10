import React from 'react';
import Divider from '@material-ui/core/Divider';

import styles from './TitleWithDivider.module.css';

const TitleWithDivider = (props) => {
  return (
    <React.Fragment>
      <h3 className={styles.cardTitle}>{props.title}</h3>
      <Divider className={styles.divider} />
    </React.Fragment>
  )
}

export default TitleWithDivider;