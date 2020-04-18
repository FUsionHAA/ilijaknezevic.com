import React from 'react'
import styles from './FooterIcon.module.css'

const FooterIcon = (props) => {
    return (
        <div className={styles.border}>
            <a href={props.link} onClick={props.showForm}>{props.iconName}</a>
        </div>
    );
}

export default FooterIcon;