import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import CardDefault from '../UI/CardDefault/CardDefault';
import Navigation from '../Navigation/Navigation';

import styles from './Admin.module.css';

const Admin = () => {
  return (
    <React.Fragment>
      <CardDefault title="Admin">
        <Grid item xs={12} className={styles.adminContainer}>
          <Card>
            <h1>Admin</h1>
          </Card>
        </Grid>
      </CardDefault>
      <Navigation />
    </React.Fragment>
  )
}

export default Admin;