import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

import styles from './CardDefault.module.css';

class CardDefault extends Component {
  render() {
    return (
      <Card className={styles.card}>
        <h3 className={styles.cardTitle}>{this.props.title}</h3>
        <Divider className={styles.divider} />
        <Grid container spacing={24}>
          {this.props.children}
        </Grid>
      </Card>
    )
  }
}

export default CardDefault;