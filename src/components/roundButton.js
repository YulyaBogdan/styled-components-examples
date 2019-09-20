import { Button } from "./button"
import styled, { css } from "styled-components"
import React from "react"


const RoundButton = styled(Button)`
    position: relative;
    ${({theme}) => css(theme.roundButton)};
    &::before {
      position: absolute;
      top: 0.5em;
      left: 0.7em;
      content: "+"
    }
`

export default ({children,...props}) => <RoundButton {...props} before={children}/>