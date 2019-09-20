import React from 'react';
import styled from 'styled-components'

const StyledFancyText = styled.p`
  font-size: ${props => props.size || "2em"};
  color: ${props => props.textColor || "palevioletred"};
  text-shadow: ${props => props.shadow};
  cursor: default;
`

export default () => 
  <main>
      <StyledFancyText textColor="coral" size={"24px"} shadow={"2px 2px 4px red"}>Hello, I'm STYLED</StyledFancyText>
  </main>