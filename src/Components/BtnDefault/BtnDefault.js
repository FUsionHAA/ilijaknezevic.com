import React from 'react'
import styles from './BtnDefault.module.css'

const BtnDefault = (props) => {
    return (
        <span className={styles.btnDefault} onClick={props.onClick}>{props.btnText}</span>
    );
}

export default BtnDefault;