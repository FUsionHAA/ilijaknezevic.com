import React from 'react';
import styles from './Technology.module.css';

const Technology = (props) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={props.logo} alt="" />
            <div className={styles.textItems}>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Technology;