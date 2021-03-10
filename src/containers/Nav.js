import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Hidden } from '@material-ui/core'

const Nav = () => {
  const routes = [
    ['/', 'HOME'],
    ['/board', 'BOARD'],
    ['/gallery', 'GALLERY'],
    ['/lounge', 'LOUNGE'],
  ]

  return (
    <>
      <Hidden smDown>
        <StyledContainer className="nav-container">
          {routes.map((route, i) => (
            <StyledLink to={route[0]} key={i}>
              {route[1]}
            </StyledLink>
          ))}
        </StyledContainer>
      </Hidden>
      <Hidden mdUp>
        <StyledContainer className="drawer-container">
          {routes.map((route, i) => (
            <StyledLink to={route[0]} key={i}>
              {route[1]}
            </StyledLink>
          ))}
        </StyledContainer>
      </Hidden>
    </>
  )
}

export default Nav

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  &.nav-container {
    height: 60px;
    background: #fac337;
    flex-direction: row;
    justify-content: center;
  }
  &.drawer-container {
    flex-direction: column;
    border-bottom: 1px solid ${(props) => props.theme.border};
  }
`

const StyledLink = styled(Link)`
  padding: 10px;
  text-decoration: none;
  font-weight: 500;
  color: ${(props) => props.theme.fontColor};
  &:hover {
    color: ${(props) => props.theme.body};
  }
`
