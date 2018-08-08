import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import styles from './OTAUpload.module.css';

const OTAUpload = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <Input
                    className={styles.input}
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

export default OTAUpload;