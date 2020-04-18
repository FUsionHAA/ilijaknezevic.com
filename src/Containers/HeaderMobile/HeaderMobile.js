import React from 'react'
import styles from './HeaderMobile.module.css'
import BtnDefault from '../../Components/BtnDefault/BtnDefault'

const HeaderMobile = () => {
    return (
        <div className={styles.mobHeader}>
            <h2>Welcome to my website</h2>
            <p>Download my resume or contact me directly!</p>
            <div>
                <BtnDefault btnText='resume' />
            </div>
            <div>
                <BtnDefault btnText='contact' />
            </div>
        </div>
    );
}

export default HeaderMobile