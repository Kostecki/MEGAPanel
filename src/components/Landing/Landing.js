import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Landing.module.css';

const showAdminIfAuthenticated = () => {
  if (JSON.parse(localStorage.getItem('isAuthenticated'))) {
    return <li><NavLink to='/admin'>Admin</NavLink></li>
  }
}

const Landing = () => (
  <div className={styles.landingContainer}>
    <h1>MEGABøvlet</h1>
    <div className="navigation">
      <ul>
        <li>
          <NavLink to='/lights'>Farver</NavLink>
        </li>
        <li>
          <NavLink to='/stats'>Statistik</NavLink>
        </li>
        <li>
          <NavLink to='/qr'>QR</NavLink>
        </li>
        {showAdminIfAuthenticated()}
      </ul>
    </div>
  </div>
)

export default Landing;