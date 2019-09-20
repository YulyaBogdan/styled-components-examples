import React from 'react';
import styled, { keyframes } from 'styled-components'

const StyledFancyText = styled.p`
  font-size: ${props => props.size || "2em"};
  color: ${props => props.textColor || "palevioletred"};
  text-shadow: ${props => props.shadow};
  cursor: default;
`
const animation = keyframes`
  from { transform: translate(0,0) }
  25% { transform: translate(20px, 20px) }
  50% { transform: translate(40px, 0px) }
  75% { transform: translate(20px, 20px) } 
  to { transform: translate(0px, 0px) }
`
const StyledEvenMoreFancyText = styled(StyledFancyText)`
  text-shadow: 10px 10px 20px red;
  animation: ${animation} 5s ease-in-out infinite;
  :hover {
    color: pink;
  }
`


export default () => 
  <main>
      <StyledFancyText textColor="coral" size={"24px"} shadow={"2px 2px 4px red"}>Hello, I'm STYLED</StyledFancyText>
      <StyledEvenMoreFancyText>Hello, I'm STYLED MORE</StyledEvenMoreFancyText>
  </main>