import React from 'react';

import styles from './BatteryVoltage.module.css';
import './BatteryVoltage.css';

const BatteryVoltage = (props) => {
  const chargeStatus = () => {
    let voltage = props.data.Voltage;
    let health = '';

    if (voltage >= 12.10) {
      health = 'chargeGood'
    } else if (voltage > 11.5) {
      health = 'chargeOkay'
    } else {
      health = 'chargeBad'
    }

    return health;
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
    <div className={styles.container}>
      <p className={styles.p}>Batteri ({props.data.BatteryId})</p>
      <div className={`${styles.voltageStatus} ${chargeStatus()}`}>
        <h2 className={styles.h2}>{props.data.Voltage} Volt ({chargeLevel()}%)</h2>
      </div>
    </div>
  )
}

export default BatteryVoltage;