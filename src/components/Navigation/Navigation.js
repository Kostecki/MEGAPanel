import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LightsIcon from '@material-ui/icons/ColorLens'
import StatisticsIcon from '@material-ui/icons/InsertChart';
import CameraIcon from '@material-ui/icons/CameraAlt';
import AdminIcon from '@material-ui/icons/Settings';

import styles from './Navigation.module.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#FF3D02' },
    secondary: { main: '#3d5afe' },
  },
});

class Navigation extends Component {
  state = {
    value: null
  };

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
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <BottomNavigation showLabels value={value} onChange={this.handleChange} className={styles.bottomNav}>
          <BottomNavigationAction label="Statistik" component={Link} to="/" icon={<StatisticsIcon />} />
          <BottomNavigationAction label="Lys" component={Link} to="/lights" icon={<LightsIcon />} />
          <BottomNavigationAction label="QR" component={Link} to="/qr" icon={<CameraIcon />} />
          <BottomNavigationAction label="Admin" component={Link} to="/admin" icon={<AdminIcon />} />
        </BottomNavigation>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(Navigation);