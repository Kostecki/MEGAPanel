import React, { Component } from 'react';
import QrReader from 'react-qr-reader'
import Grid from '@material-ui/core/Grid';

import CardDefault from '../UI/CardDefault/CardDefault';
import Navigation from '../Navigation/Navigation';

class QRScan extends Component {
  state = {
    delay: 1000,
    result: ''
  }

  handleCameraScan = (data) => {
    if (data) {
      this.setState({result: data})
    }
    console.log(data);
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
              delay={this.state.delay}
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