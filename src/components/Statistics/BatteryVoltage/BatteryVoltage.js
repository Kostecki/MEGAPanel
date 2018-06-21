import React from 'react';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';

import styles from './BatteryVoltage.module.css';
import './BatteryVoltage.css';

const BatteryVoltage = (props) => {
  const chargeStatus = () => {
    let voltage = props.data.Voltage;
    let health = '';
    let icon = '';

    if (voltage > 12) {
      health = 'chargeGood'
      icon = 'mood';
    } else if (voltage > 11.5) {
      health = 'chargeOkay'
      icon = 'mood';
    } else {
      health = 'chargeBad'
      icon = 'mood_bad';
    }

    return [health, icon];
  }

  const chargeLevel = () => {
    let voltage = props.data.Voltage;

    if (voltage >= 12.73) {
      return "100";
    }
    if (voltage >= 12.62) {
      return "90";
    } 
    if (voltage >= 12.5) {
      return "80";
    }
    if (voltage >= 12.37) {
      return "70";
    }
    if (voltage >= 12.24) {
      return "60";
    }
    if (voltage >= 12.10) {
      return "50";
    }
    if (voltage >= 11.96) {
      return "40";
    }
    if (voltage >= 11.81) {
      return "30";
    }
    if (voltage >= 11.66) {
      return "20";
    }
    if (voltage >= 11.51) {
      return "10";
    }
    if (voltage < 11.51) {
      return "0";
    }
  }
  

  return (
    <Card className={styles.voltage}>
      <p>Batteri</p>
      <div className={`${styles.voltageStatus} ${chargeStatus()[0]}`}>
        <h2>{props.data.Voltage} Volt </h2>
        <h2>{chargeLevel()} %</h2>
      </div>
    </Card>
  )
}

export default BatteryVoltage;