import React from 'react';
import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 40vh;
`
const MyComp = ({className, children}) => 
  <button className={className}>
    {children}
  </button>


const StyledMyComp = styled(MyComp).attrs(props => ({
  type: "submit",
  size: props.size || "1em"
}))`
  outline: none;
  background-color: palevioletred;
  border-radius: 0.5em;
  font-size: ${props => props.size};
`

export default () => 
  <Container>
    <MyComp>Usual Button</MyComp>  
    <StyledMyComp>Styled Button</StyledMyComp>
    <StyledMyComp size="2em">Styled big button</StyledMyComp>

  </Container>

