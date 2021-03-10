import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router'
import Home from '../components/main/Home'

const Main = () => {
  const routes = [['/', Home]]

  return (
    <StyledContainer className="main-container">
      {routes.map((route) => (
        <Route path={route[0]} key={route[1]}>
          {route[1]}
        </Route>
      ))}
    </StyledContainer>
  )
}

export default Main

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
`
