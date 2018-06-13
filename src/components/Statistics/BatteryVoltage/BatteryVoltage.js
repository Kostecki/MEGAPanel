import React from 'react';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';

import styles from './BatteryVoltage.module.css';
import './BatteryVoltage.css';

const BatteryVoltage = (props) => {
  const chargeStatus = () => {  //TODO: Make this whole BatteryVoltage-thing not gross..
    let voltage = props.voltage.replace(',', '.');
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

    let result = [health, icon];
    return result;
  }
  

  return (
    <Card className={styles.voltage}>
      <p>Batteri</p>
      <div className={`${styles.voltageStatus} ${chargeStatus()[0]}`}>
        <h2>{props.voltage} Volt</h2><Icon>{chargeStatus()[1]}</Icon>
      </div>
    </Card>
  )
}

export default BatteryVoltage;