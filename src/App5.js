import React from 'react';
import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 40vh;
  
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

export default () => 
    <Container>
      
      <Form /> 

    </Container>  

