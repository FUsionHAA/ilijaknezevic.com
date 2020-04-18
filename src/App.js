import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Containers/Navbar/Navbar'
import ParallaxEffect from './Components/ParallaxEffect/ParallaxEffect'
import Footer from './Containers/Footer/Footer'
import Home from './Containers/Home/Home'
import Portfolio from './Components/Portfolio/Portfolio'
import About from './Components/About/About'
import EmailForm from './Components/EmailForm/EmailForm'
import LanguageContextProvider from './contexts/LanguageContext'

class App extends Component {
  state = {
    formMargin: -100
  }

  toggleContactForm = () => {
    if (this.state.formMargin === -100) {
      this.setState({ formMargin: 0 })
      document.body.style.overflow = 'hidden'
    } else {
      this.setState({ formMargin: -100 })
      document.body.style.overflow = 'visible'
    }
  }

  render() {
    return (
      <LanguageContextProvider>
        <BrowserRouter>
          <div className="App">
            <EmailForm formMargin={this.state.formMargin} handleHide={this.toggleContactForm} />
            <ParallaxEffect />
            <Navbar showContactForm={this.toggleContactForm} />
            <Switch>
              <Route path="/" exact component={(props) => <Home {...props} showForm={this.toggleContactForm} />} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/about" component={About} />
            </Switch>
            <Footer showForm={this.toggleContactForm} />
          </div>
        </BrowserRouter>
      </LanguageContextProvider>
    )
  }
}

export default App;
