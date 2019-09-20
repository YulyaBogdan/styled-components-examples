import React from 'react';
import styled, { ThemeProvider, createGlobalStyle, keyframes } from 'styled-components'

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
const StyledFancyText = styled.p`
  font-size: ${props => props.size || "2em"};
  color: ${props => props.textColor || "palevioletred"};
  text-shadow: ${props => props.shadow};
  cursor: default;
 @media (max-width: 768px) {
    color: green;
  } 
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
const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;

`
class ReactComp extends React.Component {

  render(){
    return (
      <button className={this.props.className}>{this.props.children}</button>
    )
  }
}

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.buttonRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.inputRef.current);
    console.log(this.buttonRef.current);
  }
  render() {
    
    return (
      <>
        <Input
          ref={this.inputRef}
          placeholder="Hover to focus!"
          onMouseEnter={() => 
            this.inputRef.current.focus()
          }
        />
        <ReactComp 
          ref={this.buttonRef} 
          >
            Button ref
          </ReactComp>
      </>
    );
  }
}


const Parent = styled.div`
  display: flex;
  align-items: center;
  padding: 5em;
  background: palevioletred;
`

const Child = styled(StyledMyComp)`
    ${Parent}:hover & {
      background: coral
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
      <StyledFancyText textColor="coral" size={"24px"} shadow={"2px 2px 4px red"}>Hello, I'm STYLED</StyledFancyText> 

      <StyledEvenMoreFancyText>Hello, I'm STYLED MORE</StyledEvenMoreFancyText>
      <Form /> 

      <StyledMyComp>Button</StyledMyComp>
      <StyledMyComp size="2em">Bigger button</StyledMyComp>

      <Parent>
        <Child>Change the color</Child>
      </Parent>
    
      <GlobalStyle nightTheme={this.state.nightTheme}/>

    </Container>  

  </ThemeProvider>
  
)}
}

export default App;
