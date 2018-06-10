import React from 'react';
import {withRouter} from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home'
import ColorLensIcon from '@material-ui/icons/ColorLens'
import InsertChartOutlined from '@material-ui/icons/InsertChart';

import styles from './Navigation.module.css';

const Navigation = (props) => {
  let handleChange = (value, event) => {
    switch (event) {
      case 0:
        props.history.push('/')
        break;

      case 1:
        props.history.push('/lights')
        break;

      case 2:
        props.history.push('/stats')
        break;
    
      default:
        break;
    }
  }

  return (
    <BottomNavigation
      onChange={handleChange}
      showLabels
      className={styles.bottomNav}
    >
      <BottomNavigationAction label="Hjem" icon={<HomeIcon />} />
      <BottomNavigationAction label="Lys" icon={<ColorLensIcon />} />
      <BottomNavigationAction label="Statistik" icon={<InsertChartOutlined />} />
    </BottomNavigation>
  )
}

export default withRouter(Navigation);