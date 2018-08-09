import React from 'react';
import Grid from '@material-ui/core/Grid';

import CardDefault from '../CardDefault/CardDefault';

import styles from './Loader.module.css';

const Loader = (props) => {
  return (
    <CardDefault title={props.title}>
      <Grid item xs={12} className={styles.loading}>
        <div className="loadingAnimation"></div>
      </Grid>
    </CardDefault>
  )
}

export default Loader;