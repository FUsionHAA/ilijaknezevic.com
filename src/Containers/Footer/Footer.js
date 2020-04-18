import React, { Component } from 'react'
import FooterIcon from '../../Components/FooterIcon/FooterIcon'
import styles from './Footer.module.css'
import user from '../../images/icons/user.svg'
import map_signs from '../../images/icons/map-signs.svg'
import phone from '../../images/icons/phone.svg'
import { LanguageContext } from '../../contexts/LanguageContext'

class Footer extends Component {
    static contextType = LanguageContext
    
    currentYearHandler = () => {
        let date = new Date()
        let year = date.getFullYear()
        return year
    }

    render() {
        const { isEnglish, english, serbian } = this.context
        const activeLanguage = isEnglish ? english : serbian
        return (
            <footer className={styles.footer} style={{ height: '18rem' }}>
                <div className={styles.bottom}>

                    <div className={styles.footerIcons}>
                        <div className={styles.footerIconsTop}>
                            <div className={styles.subHeading}>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="map-signs"
                                    className={`svg-inline--fa fa-map-signs fa-w-16 ${styles.svgAnim}`}
                                    role="img"
                                    xmlns={map_signs}
                                    viewBox="0 0 512 512">
                                    <path
                                        fill="currentColor"
                                        d="M507.31 84.69L464 41.37c-6-6-14.14-9.37-22.63-9.37H288V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v16H56c-13.25 0-24 10.75-24 24v80c0 13.25 10.75 24 24 24h385.37c8.49 0 16.62-3.37 22.63-9.37l43.31-43.31c6.25-6.26 6.25-16.38 0-22.63zM224 496c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V384h-64v112zm232-272H288v-32h-64v32H70.63c-8.49 0-16.62 3.37-22.63 9.37L4.69 276.69c-6.25 6.25-6.25 16.38 0 22.63L48 342.63c6 6 14.14 9.37 22.63 9.37H456c13.25 0 24-10.75 24-24v-80c0-13.25-10.75-24-24-24z">
                                    </path>
                                </svg>
                            </div>
                            <span>{activeLanguage.navigation.footerSiteMap}<span className={styles.zigzag}></span></span>
                        </div>
                        <div className={styles.footerIconsBottom}>
                            <FooterIcon iconName={activeLanguage.navigation.home} link={"/"} />
                            <FooterIcon iconName={activeLanguage.navigation.portfolio} link={"/portfolio"} />
                            <FooterIcon iconName={activeLanguage.navigation.about} link={"/about"} />
                            <FooterIcon iconName={activeLanguage.navigation.contact} showForm={this.props.showForm} />
                        </div>
                    </div>

                    <div className={styles.footerContact}>
                        <div className={styles.contactInfo}>
                            <div className={styles.subHeading}>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="phone-alt"
                                    className={`svg-inline--fa fa-phone-alt fa-w-16 ${styles.svgAnim}`}
                                    role="img"
                                    xmlns={phone}
                                    viewBox="0 0 512 512">
                                    <path
                                        fill="currentColor"
                                        d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z">
                                    </path>
                                </svg>
                            </div>
                            <span>{activeLanguage.navigation.footerContact}<span className={styles.zigzag}></span></span>
                        </div>
                        <div className={styles.contact}>
                            <div>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="user"
                                    className={`svg-inline--fa fa-user fa-w-14 ${styles.contactIcon}`}
                                    role="img"
                                    xmlns={user}
                                    viewBox="0 0 448 512">
                                    <path
                                        fill="currentColor"
                                        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z">
                                    </path>
                                </svg>
                                <span>Ilija Knežević</span>
                            </div>

                            <div>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="phone-alt"
                                    className={`svg-inline--fa fa-phone-alt fa-w-16 ${styles.contactIcon}`}
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <path
                                        fill="currentColor"
                                        d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z">
                                    </path>
                                </svg>
                                <span>(+381) 065-342-95-95</span>
                            </div>

                            <div>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="envelope"
                                    className={`svg-inline--fa fa-envelope fa-w-16 ${styles.contactIcon}`}
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <path
                                        fill="currentColor"
                                        d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                                    </path>
                                </svg>
                                <span>ilijasamosad@yahoo.com</span>
                            </div>

                            <div>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="linkedin"
                                    className={`svg-inline--fa fa-linkedin fa-w-14 ${styles.contactIcon}`}
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                        fill="currentColor"
                                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                                    </path>
                                </svg>
                                <a href="https://www.linkedin.com/in/ilija-knezevic-b49884158/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </div>

                        </div>

                    </div>
                </div>
                
                <div className={styles.copyright}>Copyright&nbsp;Ilija&nbsp;Knežević&nbsp;{this.currentYearHandler()}&nbsp;&copy;</div>

            </footer>
        );
    }
}

export default Footer;