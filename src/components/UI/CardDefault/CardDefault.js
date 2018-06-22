import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import TitleWithDivider from '../TitleWithDivider/TitleWithDivider';

import styles from './CardDefault.module.css';

const CardDefault = (props) => {
  return (
    <Card className={styles.card}>
      <TitleWithDivider clickAction={props.clickAction} title={props.title} />
      <Grid container spacing={24}>
        {props.children}
      </Grid>
    </Card>
  )
}

export default CardDefault;