import React, { Component } from 'react';
import QrReader from 'react-qr-reader'
import Grid from '@material-ui/core/Grid';
import Swal from 'sweetalert2';

import CardDefault from '../UI/CardDefault/CardDefault';
import Navigation from '../Navigation/Navigation';

class QRScan extends Component {
  state = {
    batteryId: ''
  }

  handleCameraScan = (data) => {
    if (data !== this.state.batteryId && data !== null) {
      this.setState({batteryId: data}, () => Swal('Awesome!', `${this.state.batteryId} has been added`, 'success'))
      console.log("Posting", this.state.batteryId);
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
              onScan={this.handleCameraScan}
              onError={this.handleCameraError} />
          </Grid>
        </CardDefault>
        <Navigation />
      </React.Fragment>
    )
  }
}

export default QRScan;