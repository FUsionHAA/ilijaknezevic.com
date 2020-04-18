import React from 'react';
import styles from './Header.module.css'
import monitor1 from '../../images/monitor1.png';
import monitor2 from '../../images/monitor2.png';
import { LanguageContext } from '../../contexts/LanguageContext';

const Header = (props) => {
    return (
        <LanguageContext.Consumer>{(context) => {
            const { isEnglish, english, serbian } = context
            const activeLanguage = isEnglish ? english : serbian
            return (
                <header className={styles.header}>
                    <section className={`${styles.skewed} ${styles.wrapper}`}>
                        <div className={`${styles.layer} ${styles.bottom}`}>
                            <div className={styles.content_wrap}>
                                <div className={styles.content_body}>
                                    <h1>{activeLanguage.header.business.title}</h1>
                                    <p>{activeLanguage.header.business.body}</p>
                                    <div className={styles.btn_container_bottom}>
                                        <span className={styles.btn_bottom} onClick={props.showForm}>{activeLanguage.header.business.btn1}</span>
                                        <a className={styles.btn_bottom} href={"/portfolio"}>{activeLanguage.header.business.btn2}</a>
                                    </div>

                                </div>
                                <img src={monitor1} alt=""></img>
                            </div>
                        </div>
                        <div className={`${styles.layer} ${styles.top}`}>
                            <div className={`${styles.content_wrap} ${styles.test}`}>
                                <div className={styles.content_body}>
                                    <h1>{activeLanguage.header.personal.title}</h1>
                                    <p>{activeLanguage.header.personal.body}</p>
                                    <div className={styles.btn_top}>{activeLanguage.header.personal.btn}</div>
                                </div>
                                <img src={monitor2} alt=""></img>
                            </div>
                        </div>
                    </section>
                </header>
            )
        }}</LanguageContext.Consumer>
    );
}

export default Header;