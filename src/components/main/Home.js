import React from 'react'
import styled from 'styled-components'
import Background from '../../assets/background.png'

const Home = () => {
  return (
    <StyledContainer className="home-container">
      {/* TODO : explain my self as some keywords, want to use some motion effects too */}
      <p>
        안녕하세요. <br /> 프론트엔드 개발자를 꿈꾸는 이기은입니다.
      </p>
    </StyledContainer>
  )
}

export default Home

const StyledContainer = styled.div`
  width: 100%;
  min-height: 100%;
  background-image: url(${Background});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  color: ${(props) => props.theme.body};
`
