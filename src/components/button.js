import React from 'react'

import styled, {css} from 'styled-components'

export const Button = styled.button.attrs(props => ({
  color: !props.disabled ? props.color : "#FFFFFF"
}))`
  font-size: 1em;
  padding: 1em;
  border: 1px solid black;
  ${({theme}) => css(theme.button)}

  background-color: ${props => props.color};
`

class MyButton extends React.Component{

  state={
    count: 0
  }

  handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
  
    this.setState(state => ({count: state.count+1}))
  }


  render () {
    return (
    <> 
      <pre>{JSON.stringify(this.props)}</pre>
      <Button {...this.props} onClick={this.handleClick}/>
      <pre>{`Clicked ${this.state.count} times`}</pre>
    </>
    )
  }
}

export default MyButton
