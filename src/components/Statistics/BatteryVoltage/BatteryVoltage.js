import React from 'react';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';

import styles from './BatteryVoltage.module.css';
import './BatteryVoltage.css';

const BatteryVoltage = (props) => {
  console.log(props.data);

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
  

  return (
    <Card className={styles.voltage}>
      <p>Batteri</p>
      <div className={`${styles.voltageStatus} ${chargeStatus()[0]}`}>
        <h2>{props.data.Voltage} Volt</h2><Icon>{chargeStatus()[1]}</Icon>
      </div>
    </Card>
  )
}

export default BatteryVoltage;