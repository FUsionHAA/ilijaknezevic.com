import React, { Component, createContext } from 'react'

export const LanguageContext = createContext()

class LanguageContextProvider extends Component {
    state = {
        isEnglish: '',

        english: {
            navigation: {
                home: 'Home',
                portfolio: 'Portfolio',
                about: 'About',
                contact: 'Contact',
                footerSiteMap: 'SITE MAP',
                footerContact: 'CONTACT'
            },
            emailForm: {
                title: 'Send me a message:',
                email: 'E-mail:',
                placeholderEmail: 'Your email*',
                message: 'Message:',
                placeholderMessage: 'Your message*',
                btn: 'send',
                sent: {
                    firstLine: 'Message sent!',
                    secondLine: 'I will get back at you as soon as possible.',
                    btn: 'new message'
                },
                error: {
                    firstLine: 'Something went wrong!',
                    secondLine: 'Please try again later.',
                    btn: 'try again'
                }
            },
            infoSection: {
                title: 'MY PASSION AND FOCUS IS REACT DEVELOPMENT',
                body: "If you need a website that looks amazing and works perfectly that's what I do. Give me a call or send me an email so we can work together."
            },
            header: {
                personal: {
                    title: 'Personal',
                    body: 'Lorem ipsum',
                    btn: 'resume'
                },
                business: {
                    title: 'Business',
                    body: 'Lorem ipsum',
                    btn1: 'contact',
                    btn2: 'portfolio'
                }
            },
            technologies: {
                title: 'technologies i like to work with the most',
                html: 'When i started learning HTML i thought programing was so easy.',
                css: 'It was meant to edit text, now we design games with it...',
                javascript: "The best part is that we can do anything with javascript. The worst part is that we will.",
                jquery: 'It makes life easier and code more readable! If it could only replace javascript...',
                react: 'Ever since i started using react i don\'t want to use anything else.',
                redux: 'A small library with a simple, limited API designed to be a predictable container for application state. I solve so many problems!',
                wordpress: 'My girlfriend wanted a blogging website and 2h later she had it. How can you beat that?',
                sass: "If you can make your code Sassy you make your code Sassy! It's that simple."
            }
        },

        serbian: {
            navigation: {
                home: 'Početna',
                portfolio: 'Portfolio',
                about: 'O meni',
                contact: 'Kontakt',
                footerSiteMap: 'MAPA SAJTA',
                footerContact: 'KONTAKT'
            },
            emailForm: {
                title: 'Pošaljite mi poruku:',
                email: 'E-mail:',
                placeholderEmail: 'Vaš email*',
                message: 'Poruka:',
                placeholderMessage: 'Vaša poruka*',
                btn: 'pošalji',
                sent: {
                    firstLine: 'Poruka poslata!',
                    secondLine: 'Javiću Vam se što pre.',
                    btn: 'nova poruka'
                },
                error: {
                    firstLine: 'Poruka nije poslata!',
                    secondLine: 'Molim Vas pokušajte kasnije.',
                    btn: 'probajte ponovo'
                },
            },
            infoSection: {
                title: 'MOJA STRAST I ONO NA ŠTA SE FOKUSIRAM JE RAZVOJ REACT APLIKACIJA',
                body: "Ukoliko Vam je poterban website koji fenomenalno izgleda i savršeno radi to je ono čime se ja bavim. Pozovite me ili mi pošaljite email da bi smo radili zajedno."
            },
            header: {
                personal: {
                    title: 'Personal',
                    body: 'Lorem ipsum',
                    btn: 'rezime'
                },
                business: {
                    title: 'Business',
                    body: 'Lorem ipsum',
                    btn1: 'kontakt',
                    btn2: 'portfolio'
                }
            },
            technologies: {
                title: 'tehnologije u kojima najviše volim da radim',
                html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dignissimos ea nemo quae odit mollitia harum ut eaque suscipit ratione.',
                css: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dignissimos ea nemo quae odit mollitia harum ut eaque suscipit ratione.',
                javascript: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dignissimos ea nemo quae odit mollitia harum ut eaque suscipit ratione.',
                jquery: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dignissimos ea nemo quae odit mollitia harum ut eaque suscipit ratione.',
                react: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dignissimos ea nemo quae odit mollitia harum ut eaque suscipit ratione.',
                redux: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dignissimos ea nemo quae odit mollitia harum ut eaque suscipit ratione.',
                wordpress: 'My girlfriend wanted a blogging website and 2h later she had it. How can you beat that?',
                sass: "If you can make your code Sassy you make your code Sassy! It's that simple."
            }
        }
    }

    componentDidMount = () => {
        if (window.localStorage.length < 2) {
            localStorage.setItem('isEng', true)
            if (localStorage.getItem('isEng') === 'true') {
                this.setState({ isEnglish: true })
            }
            console.log('if didmount')
        } else if (localStorage.getItem('isEng') === 'false') {
            localStorage.setItem('isEng', false)
            if (localStorage.getItem('isEng') === 'false') {
                this.setState({ isEnglish: false }) 
            }
        }else if (localStorage.getItem('isEng') === 'true') {
            localStorage.setItem('isEng', true)
            if (localStorage.getItem('isEng') === 'true') {
                this.setState({ isEnglish: true }) 
            }
        }
    }

    toggleLanguage = () => {
        if (localStorage.getItem('isEng') === 'true') {
            localStorage.setItem('isEng', false)
            if (localStorage.getItem('isEng') === 'false') {
                this.setState({ isEnglish: false })
            }
        } else if (localStorage.getItem('isEng') === 'false') {
            localStorage.setItem('isEng', true)
            if (localStorage.getItem('isEng') === 'true') {
                this.setState({ isEnglish: true })
            }
        }
    }

    render() {
        return (
            <LanguageContext.Provider value={{ ...this.state, toggleLanguage: this.toggleLanguage }}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

export default LanguageContextProvider