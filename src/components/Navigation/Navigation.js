import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LightsIcon from '@material-ui/icons/ColorLens'
import StatisticsIcon from '@material-ui/icons/InsertChart';
import CameraIcon from '@material-ui/icons/CameraAlt';
import AdminIcon from '@material-ui/icons/Settings';

import styles from './Navigation.module.css';

class Navigation extends Component {
  state = {
    value: null
  }

  componentWillMount() {
    //I'm sorry. This is gross..
    let curPage = this.props.location.pathname;
    switch (curPage) {
      case '/':
        this.setState({ value: 0 })
        break;

      case '/lights':
        this.setState({ value: 1 })
        break;

      case '/qr':
        this.setState({ value: 2 })
        break;

      case '/admin':
        this.setState({ value: 3 })
        break;

      default:
        break;
    }
  }

  handleChange = (event, value) => {
    switch (value) {
      case 0:
        this.props.history.push('/')
        break;

      case 1:
        this.props.history.push('/lights')
        break;

      case 2:
        this.props.history.push('/qr')
        break;

      case 3:
        this.props.history.push('/admin')
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <BottomNavigation
        onChange={this.handleChange}
        showLabels
        className={styles.bottomNav}
        value={this.state.value}
      >
        <BottomNavigationAction label="Statistik" icon={<StatisticsIcon />} />
        <BottomNavigationAction label="Lys" icon={<LightsIcon />} />
        <BottomNavigationAction label="QR" icon={<CameraIcon />} />
        <BottomNavigationAction label="Admin" icon={<AdminIcon />} />
      </BottomNavigation>
    )
  }
}

export default withRouter(Navigation);