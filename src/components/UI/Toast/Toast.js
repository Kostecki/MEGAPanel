import React from 'react';

import styles from './Toast.module.css';

const Toast = (props) => {
    const toastType = styles[props.type]

    return(
        <div className={`${styles.toastbar} ${toastType}`}>{props.text}</div>
    )
}

export default Toast;