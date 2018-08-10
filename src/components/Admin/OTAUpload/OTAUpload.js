import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

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

        const data = new FormData();
        data.append('file', this.state.file);

        axios.post('/upload', data) //This needs an actual endpoint
        .then((response) => {
            console.log(response); //Update status
        })
        .catch((error) => {
            console.log(error); //Update status
        });
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
                        <Button type="submit" variant="contained" color="primary">
                            Flash Firmware
                    </Button>
                        <Button type="submit" variant="contained" color="secondary">
                            Flash tidligere FW
                    </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default OTAUpload;