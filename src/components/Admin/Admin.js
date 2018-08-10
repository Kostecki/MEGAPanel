import React from 'react';
import Grid from '@material-ui/core/Grid';

import CardDefault from '../UI/CardDefault/CardDefault';
import Navigation from '../Navigation/Navigation';
import Login from './Login/Login';
import OTAUpload from './OTAUpload/OTAUpload';

import styles from './Admin.module.css';

const Admin = () => {
    return (
        <React.Fragment>
            <CardDefault title="Admin">
                <div className={styles.container}>
                    <Grid item xs={12}>
                        <OTAUpload />
                    </Grid>
                    <Grid item xs={12}>
                        <Login />
                    </Grid>
                </div>
            </CardDefault>
            <Navigation />
        </React.Fragment>
    )
}

export default Admin;