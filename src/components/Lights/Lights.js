import React from 'react';

import SolidColors from './SolidColors/SolidColors';
import Animations from './Animations/Animations';

import styles from './Lights.module.css';

const lights = () => (
  <div className={styles.lightsContainer}>
    <SolidColors />
    <Animations />
  </div>
)

export default lights;