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
        <StyledContainer className="nav">
          {routes.map((route, i) => (
            <StyledLink to={route[0]} key={i}>
              {route[1]}
            </StyledLink>
          ))}
        </StyledContainer>
      </Hidden>
      <Hidden mdUp>
        <StyledContainer className="drawer">
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
  &.nav {
    flex-direction: row;
    flex: 1;
    justify-content: flex-end;
    padding-bottom: 10px;
  }

  &.drawer {
    border-bottom: 1px solid ${(props) => props.theme.border};
    flex-direction: column;
  }
`

const StyledLink = styled(Link)`
  padding: 10px;
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  &:hover {
    color: ${(props) => props.theme.highlight};
  }
`
