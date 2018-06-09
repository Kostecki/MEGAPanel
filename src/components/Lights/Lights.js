import React from 'react';

import CardDefault from './../UI/CardDefault/CardDefault';
import SolidColors from './SolidColors/SolidColors';
import Animations from './Animations/Animations';

import styles from './Lights.module.css';

const lights = () => (
  <div className={styles.lightsContainer}>
    <CardDefault title='Farver'>
      <SolidColors />
    </CardDefault>
    <CardDefault title='Animationer'>
      <Animations />
    </CardDefault>
  </div>
)

export default lights;