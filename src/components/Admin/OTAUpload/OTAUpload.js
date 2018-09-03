import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert2';

import axios from '../../../utils/api';

import styles from './OTAUpload.module.css';

class OTAUpload extends Component {
    state = {
        file: null,
        uploadStatus: 'Upload en fil..'
    }

    onChange = (e) => {
        this.setState({ file: e.target.files[0] });
    }

    handleUploadFW = (e) => {
        e.preventDefault();

        if (this.state.file) {
            const data = new FormData();
            data.append('file', this.state.file);

            axios.post('', data) //This needs an actual endpoint
                .then((response) => {
                    console.log("Response:", response.data.response); //Update state.status
                })
                .catch((error) => {
                    console.log(error); //Update state.status
                });
        }
    }

    handleRestoreFW = () => {
        swal({
            title: 'Er du HELT sikker?',
            text: "Det bliver noget lort at fortryde ude på en fucking mark",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ja, gendan'
          }).then((result) => {
            if (result.value) {
              swal(
                'Got it!',
                'Controlleren bliver gendannet.. <br> (🤞)',
                'success'
              )
              axios.get('') //This needs an actual endpoint
                .then((response) => {
                    console.log("Response:", response.data.response); //Upate state.status
                })
                .catch((error) => {
                    console.log(error); //Update state.status
                })
            }
          })
    }

    render() {
        return (
            <div className={styles.container}>
                <p className={styles.p}>Status: <span className={styles.status}>{this.state.uploadStatus}</span></p>
                <p className={styles.p}>Nuværende FW Version: </p> {/* Fetch from API */}

                <form className={styles.form} onSubmit={this.handleUploadFW}>
                    <Input
                        className={styles.input}
                        onChange={this.onChange}
                        type="file"
                    />
                    <div className={styles.buttons}>
                        <Button type="submit" variant="contained" color="primary">Flash Firmware</Button>
                    </div>
                </form>
                <Button onClick={this.handleRestoreFW} type="submit" variant="contained" color="secondary">Flash tidligere FW</Button>
            </div>
        )
    }
}

export default OTAUpload;