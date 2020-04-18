import React from 'react';
import styles from './InfoSection.module.css';

const InfoSection = (props) => {
    return (
        <section className={styles.container}>
            <div>
                <p className={styles.title}>{props.infoTitle}</p>
                <h2 className={styles.text}>{props.infoBody}</h2>
            </div>
        </section>

    );
}

export default InfoSection;