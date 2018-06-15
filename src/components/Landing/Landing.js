import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Landing.module.css';

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
      </ul>
    </div>
  </div>
)

export default Landing;