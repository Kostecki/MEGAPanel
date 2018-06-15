import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import CardDefault from '../UI/CardDefault/CardDefault';
import Navigation from '../Navigation/Navigation';

class QRScan extends Component {
  render() {
    return (
      <React.Fragment>
        <CardDefault title='Tilføj batteri'>
          <Grid item xs={12}>
            <h1>1</h1>
          </Grid>
        </CardDefault>
        <Navigation />
      </React.Fragment>
    )
  }
}

export default QRScan;