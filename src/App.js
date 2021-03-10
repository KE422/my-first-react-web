import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles, lightTheme, darkTheme } from './assets/styles'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './containers/Nav'
import Main from './containers/Main'
import Footer from './containers/Footer'

const App = ({ theme }) => {
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledContainer className="app-container">
        <Nav />
        <Switch>
          <Route path="/">{Main}</Route>
        </Switch>
        <Footer />
      </StyledContainer>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme.theme,
  }
}

export default connect(mapStateToProps)(App)

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
