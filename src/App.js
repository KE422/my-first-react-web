import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, lightTheme, darkTheme } from './assets/styles'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './containers/Header'
import Main from './containers/Main'
import Footer from './containers/Footer'

const App = ({ theme }) => {
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header />
      <Route path="/" components={Main} />
      <Footer />
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme.theme,
  }
}

export default connect(mapStateToProps)(App)
