import React from 'react';

import styles from './AvgSpeed.module.css';

const AvgSpeed = (props) => (
  <div className={styles.container}>
    <p className={styles.p}>Gennemsnitshastighed</p>
    <h4 className={styles.h4}>Download: <span className={styles.speed}>{props.download} kbit/s</span></h4>
    <h4 className={styles.h4}>Upload: <span className={styles.speed}>{props.upload} kbit/s</span></h4>
  </div>
)

export default AvgSpeed;