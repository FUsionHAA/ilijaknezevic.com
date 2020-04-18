import React from 'react'
import styles from './EmailForm.module.css'
import Spinner from '../Spinner/Spinner'
import BtnDefault from '../BtnDefault/BtnDefault'
import check from '../../images/icons/check.svg'
import exclamation from '../../images/icons/exclamation.svg'
import { LanguageContext } from '../../contexts/LanguageContext'

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            feedback: '',
            form: 1,
            loading: false
        };
        this.handleChangeIF = this.handleChangeIF.bind(this);
        this.handleChangeTA = this.handleChangeTA.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static contextType = LanguageContext

    emailForm = (activeLanguage) => {
        if (this.state.loading === false) {
            if (this.state.form === 1) {
                return (
                    <form className={styles.mailingForm} style={{ marginLeft: `${this.props.formMargin}%`, top: `calc(50% + ${document.documentElement.scrollTop}px)` }} >
                        <div className={styles.close} onClick={this.props.handleHide}>&#10006;</div>
                        <h2>{activeLanguage.emailForm.title}</h2>
                        <div>
                            <div>
                                <p>{activeLanguage.emailForm.email}</p>
                                <input
                                    className={styles.formIF}
                                    id="test-email"
                                    name="test-email"
                                    onChange={this.handleChangeIF}
                                    placeholder={activeLanguage.emailForm.placeholderEmail}
                                    required
                                    value={this.state.email}
                                    style={{ width: '100%' }}
                                />
                            </div>
                            <div>
                                <p>{activeLanguage.emailForm.message}</p>
                                <textarea
                                    className={styles.formTA}
                                    id="test-mailing"
                                    name="test-mailing"
                                    onChange={this.handleChangeTA}
                                    placeholder={activeLanguage.emailForm.placeholderMessage}
                                    required
                                    value={this.state.feedback}
                                    style={{ width: '100%', height: '150px' }}
                                />
                            </div>
                        </div>
                        <div>
                            <BtnDefault btnText={activeLanguage.emailForm.btn} onClick={this.handleSubmit} />
                        </div>
                    </form>
                )
            } else if (this.state.form === 2) {
                return (
                    <div className={styles.mailingForm} style={{ marginLeft: `${this.props.formMargin}%`, top: `calc(50% + ${document.documentElement.scrollTop}px)` }}>
                        <div className={styles.close} onClick={this.props.handleHide}>&#10006;</div>
                        <div>
                            <svg
                                height="4rem"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                className={`${styles.checkSvg} svg-inline--fa fa-check fa-w-16`}
                                role="img"
                                xmlns={check}
                                viewBox="0 0 512 512">
                                <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                            <p>{activeLanguage.emailForm.sent.firstLine}</p>
                            <p>{activeLanguage.emailForm.sent.secondLine}</p>
                        </div>
                        <div>
                            <BtnDefault btnText={activeLanguage.emailForm.sent.btn} onClick={this.goToFrom} />
                        </div>
                    </div>
                )
            } else if (this.state.form === 3) {
                return (
                    <div className={styles.mailingForm} style={{ marginLeft: `${this.props.formMargin}%`, top: `calc(50% + ${document.documentElement.scrollTop}px)` }}>
                        <div className={styles.close} onClick={this.props.handleHide}>&#10006;</div>
                        <div>
                            <svg
                                height="4rem"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="exclamation"
                                className={`${styles.exclamationSvg} svg-inline--fa fa-exclamation fa-w-6`}
                                role="img"
                                xmlns={exclamation}
                                viewBox="0 0 192 512"><path fill="currentColor" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path>
                            </svg>
                            <p>{activeLanguage.emailForm.error.firstLine}</p>
                            <p>{activeLanguage.emailForm.error.secondLine}</p>
                        </div>
                        <div>
                            <BtnDefault btnText={activeLanguage.emailForm.error.btn} onClick={this.goToFrom} />
                        </div>
                    </div>
                )
            }
        } else {
            return (
                <div className={styles.mailingForm} style={{ marginLeft: `${this.props.formMargin}%`, top: `calc(50% + ${document.documentElement.scrollTop}px)` }}>
                    <Spinner />
                </div>
            )
        }
    }

    goToFrom = () => {
        this.setState({ form: 1 })
    }

    handleChangeTA(event) {
        this.setState({ feedback: event.target.value })
    }

    handleChangeIF(event) {
        this.setState({ email: event.target.value })
    }

    handleSubmit() {
        if (this.state.email === '') {
            alert('You must enter email.')
            return
        }

        if (!this.state.email.toLowerCase().match(/\S+@\S+\.\S+/)) {
            alert('Enter valid email address!')
            return
        }

        if (this.state.feedback === '') {
            alert('You must enter message.')
            return
        }

        const templateId = 'template_FElZw8Kl'

        this.setState({ loading: true })

        this.sendFeedback(templateId, { email_html: this.state.email, message_html: this.state.feedback, reply_to: this.state.email })

        this.setState({ email: '', feedback: '' })
    }

    sendFeedback(templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            this.setState({ loading: false, form: 2 })
        }).catch(err =>
            this.setState({ loading: false, form: 3 }))
    }

    render() {
        const { isEnglish, english, serbian } = this.context
        const activeLanguage = isEnglish ? english : serbian
        return (
            <div style={{ marginLeft: `${this.props.formMargin}%` }} >
                <div className={styles.backDrop} onClick={this.props.handleHide} style={{ top: `${document.documentElement.scrollTop}px` }} ></div>
                <div>{this.emailForm(activeLanguage)}</div>
            </div>
        )
    }
}