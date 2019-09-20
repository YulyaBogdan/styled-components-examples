import React from 'react';
import styled, { keyframes, css } from 'styled-components'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 40vh;
`
const bounce = keyframes`
  from { transform: translate(0,0) }
  25% { transform: translate(20px, 20px) }
  50% { transform: translate(40px, 0px) }
  75% { transform: translate(20px, 20px) } 
  to { transform: translate(0px, 0px) }
`

const bounceAnimation = css`animation: ${bounce} 5s ease-in-out infinite`;

const AnimatedText = styled.p`
  font-size: ${props => props.size || "2em"};
  color: ${props => props.textColor || "palevioletred"};
  text-shadow: ${props => props.shadow};
  cursor: default;
  text-shadow: 10px 10px 20px red;
  ${bounceAnimation};
  :hover {
    color: pink;
  }
`


export default () => 
  <Container>
      <AnimatedText>Woooo-hooo</AnimatedText>
  </Container>