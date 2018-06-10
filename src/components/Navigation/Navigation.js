import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home'
import ColorLensIcon from '@material-ui/icons/ColorLens'
import InsertChartOutlined from '@material-ui/icons/InsertChart';

import styles from './Navigation.module.css';

class Navigation extends Component {
  state = {
    value: null
  }

  componentDidMount() {
    //I'm sorry. This is gross..
    let curPage = this.props.location.pathname;
    switch(curPage) {
      case '/lights':
        this.setState({value: 1})
        break;
      
      case '/stats':
        this.setState({value: 2})
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
        this.props.history.push('/stats')
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
        <BottomNavigationAction label="Hjem" icon={<HomeIcon />} />
        <BottomNavigationAction label="Lys" icon={<ColorLensIcon />} />
        <BottomNavigationAction label="Statistik" icon={<InsertChartOutlined />} />
      </BottomNavigation>
    )
  }
}

export default withRouter(Navigation);