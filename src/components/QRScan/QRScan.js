import React, { Component } from 'react';
import QrReader from 'react-qr-reader'
import Grid from '@material-ui/core/Grid';

import CardDefault from '../UI/CardDefault/CardDefault';
import Navigation from '../Navigation/Navigation';

class QRScan extends Component {
  state = {
    batteryId: ''
  }

  handleCameraScan = (data) => {
    if (data !== this.state.result && data !== null) {
      this.setState({batteryId: data})
      console.log(data);
    }
  }

  handleCameraError = (err) => {
    console.log(err);
  }

  render() {
    return (
      <React.Fragment>
        <CardDefault title='Tilføj batteri'>
          <Grid item xs={12}>
            <QrReader
              delay={1000}
              onScan={this.handleCameraScan}
              onError={this.handleCameraError} />
            <h3>{this.state.result}</h3>
          </Grid>
        </CardDefault>
        <Navigation />
      </React.Fragment>
    )
  }
}

export default QRScan;