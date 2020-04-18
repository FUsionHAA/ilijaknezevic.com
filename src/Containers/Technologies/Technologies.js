import React from 'react'
import styles from './Technologies.module.css'
import Technology from '../../Components/Technology/Technology'
import html from '../../images/technologies/html.png'
import css from '../../images/technologies/css.png'
import javascript from '../../images/technologies/javascript.png'
import jquery from '../../images/technologies/jquery.png'
import react from '../../images/technologies/react.png'
import redux from '../../images/technologies/redux.png'
import wordpress from '../../images/technologies/wordpress.png'
import scss from '../../images/technologies/scss.png'
import { LanguageContext } from '../../contexts/LanguageContext'

const Technologies = () => {
    return (
        <LanguageContext.Consumer>{(context) => {
            const { isEnglish, english, serbian } = context
            const activeLanguage = isEnglish ? english : serbian
            return (
                <div>
                    <h2 className={styles.title}>{activeLanguage.technologies.title}</h2>
                    <div className={styles.container}>
                        <Technology logo={html} title={'HTML'} text={activeLanguage.technologies.html} />
                        <Technology logo={css} title={'CSS'} text={activeLanguage.technologies.css} />
                        <Technology logo={javascript} title={'JavaScript'} text={activeLanguage.technologies.javascript} />
                        <Technology logo={jquery} title={'Jquery'} text={activeLanguage.technologies.jquery} />
                        <Technology logo={react} title={'React'} text={activeLanguage.technologies.react} />
                        <Technology logo={redux} title={'Redux'} text={activeLanguage.technologies.redux} />
                        <Technology logo={wordpress} title={'Wordpress'} text={activeLanguage.technologies.wordpress} />
                        <Technology logo={scss} title={'Sass'} text={activeLanguage.technologies.sass} />
                    </div>
                </div>
            )
        }}</LanguageContext.Consumer>
    );
}

export default Technologies;