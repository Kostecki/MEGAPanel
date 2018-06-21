import React from 'react';
import QrReader from 'react-qr-reader'
import Grid from '@material-ui/core/Grid';
import Swal from 'sweetalert2';

import Axios from '../../utils/api';
import CardDefault from '../UI/CardDefault/CardDefault';
import Navigation from '../Navigation/Navigation';

const QRScan = () => {
  let batteryId;

  const handleCameraScan = (data) => {
    if (data !== batteryId && data !== null) {
      Axios.post('/changebattery', {
        batId: data
      })
        .then((response) => {
          console.log("api: " + response.data.response);
          batteryId = data
          Swal('Succes', `${data} blev tilføjet`, 'success')
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  const handleCameraError = (err) => {
    console.log(err);
  }

  return (
    <React.Fragment>
      <CardDefault title='Tilføj batteri'>
        <Grid item xs={12}>
          <QrReader
            onScan={handleCameraScan}
            onError={handleCameraError} />
        </Grid>
      </CardDefault>
      <Navigation />
    </React.Fragment>
  )
}

export default QRScan;