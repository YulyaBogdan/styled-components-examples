import React from 'react';
import styled, { ThemeProvider, createGlobalStyle, css} from 'styled-components'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
`

const dayTheme = {
    background: "#FFFFEE",
    color: "#000022"
  } ;


const nightTheme = {
  background: "#000022",
  color: "#FFFFEE",
};

const buttonTheme = {
  roundButton: {
    "border-radius":"50%"
  },
  button: {
    "border-radius":"0.5em"
  }
}


const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.background};
  }
`


const StyledButton = styled.button.attrs(props => ({
  color: !props.disabled ? props.color : "#FFFFFF",
  theme: {
    button: props.theme.button || {
      "border-radius": "0"
    }}
}))`
  font-size: 1em;
  padding: 1em;
  border: 1px solid black;
  ${({theme}) => css(theme.button)}

  background-color: ${props => props.color};
`

class Button extends React.Component{

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
      <StyledButton {...this.props} onClick={this.handleClick}/>
      <pre>{`Clicked ${this.state.count} times`}</pre>
    </>
    )
  }
}

const StyledRoundButton = styled(Button)`
    position: relative;
    ${({theme}) => css(theme.roundButton)};
    &::before {
      position: absolute;
      top: 0.5em;
      left: 0.7em;
      content: "+"
    }
`

const RoundButton = ({...props}) => <StyledRoundButton {...props}/>

const cssMixin = css`
    color: white;
    padding: 2em
`;

const ButtonWithMixin = styled(Button)`
  ${cssMixin}
`

class App extends React.Component {

  constructor(props){
    super(props);

    this.state ={
      nightTheme: false
    }
  }

  toggleTheme = () => {
    this.setState( state => ({nightTheme: !state.nightTheme}))
  }

  render(){
  return (
    <>
  <ThemeProvider theme={this.state.nightTheme ? {... buttonTheme, ...nightTheme} : {...buttonTheme, ...dayTheme}}>

    <Container>
      
      <label>
        Night theme
        <input type="checkbox"checked={this.state.nightTheme} onChange={this.toggleTheme}/>
      </label>

      <Button color="coral">ThemedButton</Button>
      <Button color="coral" disabled>ThemedButton disabled</Button>
      <RoundButton color="coral"/>
      <ButtonWithMixin color="palevioletred">ButtonWithMixin</ButtonWithMixin>
      <GlobalStyle nightTheme={this.state.nightTheme} />
    </Container>  

  </ThemeProvider>
  <Button color="coral">NotThemedButton</Button>
  
  </>
)}
}

export default App;
