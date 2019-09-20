import React from 'react';
import styled, { ThemeProvider, createGlobalStyle} from 'styled-components'

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


const nightTheme= {
  background: "#000022",
  color: "#FFFFEE",
};


const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.background};
  }
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
  <ThemeProvider theme={this.state.nightTheme ? nightTheme : dayTheme}>

    <Container>
      
      <label>
        Night theme
        <input type="checkbox"checked={this.state.nightTheme} onChange={this.toggleTheme}/>
      </label>
      <GlobalStyle nightTheme={this.state.nightTheme} />
    </Container>  

  </ThemeProvider>
  
)}
}

export default App;
