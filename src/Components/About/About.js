import React, { Component } from 'react';
import styles from './About.module.css';
import img1 from '../../images/about_slider/1.png';
import img2 from '../../images/about_slider/2.png';
import img3 from '../../images/about_slider/3.png';
import { LanguageContext } from '../../contexts/LanguageContext'

class About extends Component {
    state = {
        first: 0,
        second: 100,
        third: 200,
        dropDown1: 0,
        dropDown2: -1000,
        dropDown3: -1000,
        counter: 1
    }

    changePositionHandler = (count) => {
        let counter = count
        switch (counter) {
            case 1:
                this.setState({
                    first: 0,
                    second: 100,
                    third: 200,
                    dropDown1: 0,
                    dropDown2: -1000,
                    dropDown3: -1000
                })
                break;
            case 2:
                this.setState({
                    first: -100,
                    second: 0,
                    third: 100,
                    dropDown1: -1000,
                    dropDown2: 0,
                    dropDown3: -1000
                })
                break;
            case 3:
                this.setState({
                    first: -200,
                    second: -100,
                    third: 0,
                    dropDown1: -1000,
                    dropDown2: -1000,
                    dropDown3: 0
                })
                break;
            default:
                break
        }
    }

    prevHandler = () => {
        if (this.state.counter <= 1) {
            this.setState({
                counter: 3
            })
        } else {
            this.setState({
                counter: this.state.counter - 1
            })
        }
        this.changePositionHandler(this.counterDown())
    }

    nextHandler = () => {
        if (this.state.counter >= 3) {
            this.setState({
                counter: 1
            })
        } else {
            this.setState({
                counter: this.state.counter + 1
            })
        }
        this.changePositionHandler(this.counterUp())
    }

    counterUp = () => {
        let counter = this.state.counter + 1
        if (counter > 3) {
            counter = 1
        }
        return counter
    }

    counterDown = () => {
        let counter = this.state.counter - 1
        if (counter === 0) {
            counter = 3
        }
        return counter
    }

    render() {
        const { isEnglish, english, serbian } = this.context
        const activeLanguage = isEnglish ? english : serbian
        return (
            <div className={styles.about}>
                <div className={styles.top}>
                    <div onClick={this.prevHandler} className={styles.prev}>
                        <span className={styles.arrow_left}></span>
                    </div>
                    <div className={styles.slider}>
                        <div className={styles.slide} style={{ opacity: (this.state.dropDown1 === 0 ? 1 : 0), left: `${this.state.first}%` }} >
                            <img src={img1} alt="" />
                            <h2>professional</h2>
                        </div>
                        <div className={styles.slide} style={{ opacity: (this.state.dropDown2 === 0 ? 1 : 0), left: `${this.state.second}%` }} >
                            <img src={img2} alt="" />
                            <h2>education</h2>
                        </div>
                        <div className={styles.slide} style={{ opacity: (this.state.dropDown3 === 0 ? 1 : 0), left: `${this.state.third}%` }} >
                            <img src={img3} alt="" />
                            <h2>personal</h2>
                        </div>
                        <div className={styles.dots}>
                            <div style={{ backgroundColor: (this.state.dropDown1 === 0 ? '#726e6e' : '#333') }}></div>
                            <div style={{ backgroundColor: (this.state.dropDown2 === 0 ? '#726e6e' : '#333') }}></div>
                            <div style={{ backgroundColor: (this.state.dropDown3 === 0 ? '#726e6e' : '#333') }}></div>
                        </div>
                    </div>
                    <div onClick={this.nextHandler} className={styles.next}>
                        <span className={styles.arrow_right}></span>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.dropDown} style={{ marginTop: `${this.state.dropDown1}px` }}>Content1</div>
                    <div className={styles.dropDown} style={{ marginTop: `${this.state.dropDown2}px` }}>Content2</div>
                    <div className={styles.dropDown} style={{ marginTop: `${this.state.dropDown3}px` }}>Content3</div>
                </div>
            </div>
        );
    }
}

export default About;