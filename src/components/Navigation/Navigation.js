import React from 'react';
import { NavLink } from 'react-router-dom';

//import styles from './Navigation.module.css';

const Navigation = (props) => (
  <div className="navigation">
    <ul>
      <li>
        <NavLink to='/lights'>Farver</NavLink>
      </li>
      <li>
        <NavLink to='/stats'>Statistik</NavLink>
      </li>
    </ul>
  </div>
)

export default Navigation;