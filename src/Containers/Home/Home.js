import React, { Component } from 'react'
import Technologies from '../Technologies/Technologies'
import styles from './Home.module.css'
import InfoSection from '../../Components/InfoSection/InfoSection'
import Header from '../Header/Header'
import { LanguageContext } from '../../contexts/LanguageContext'
import HeaderMobile from '../HeaderMobile/HeaderMobile'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    static contextType = LanguageContext

    loadHeader = () => {
        if (this.state.width < 670) {
            return <HeaderMobile />
        } else {
            return <Header showForm={this.props.showForm} />
        }
    }

    render() {
        const { isEnglish, english, serbian } = this.context
        const activeLanguage = isEnglish ? english : serbian
        return (
            <main className={styles.home}>
                {this.loadHeader()}
                <InfoSection infoTitle={activeLanguage.infoSection.title} infoBody={activeLanguage.infoSection.body} />
                <Technologies />
            </main>
        );
    }
}

export default Home;