import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import TitleWithDivider from '../TitleWithDivider/TitleWithDivider';

import styles from './CardDefault.module.css';

class CardDefault extends Component {
  render() {
    return (
      <Card className={styles.card}>
        <TitleWithDivider title={this.props.title} />
        <Grid container spacing={24}>
          {this.props.children}
        </Grid>
      </Card>
    )
  }
}

export default CardDefault;