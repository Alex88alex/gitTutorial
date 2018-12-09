import React, { Component } from 'react';

class Registationform extends Component {
  
  constructor(props){
    super(props);
    this.state={
      email:''
    };
    this.handleEmaiCange=this.handleEmaiCange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault(); 
    console.log('form is submittedh',this.state.email);
  }
  handleEmaiCange(){
    console.log('email was changed', EventTarget.value );
    this.setState({email: EventTarget.value});
  }
  render() {
       
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text"
        placeholder="E-mail"
        value = {this.state.email}
        onChange={this.handleEmaiCange.bind(this)}
        />
        <button>Save</button>
      </form>
    );
  }
}

export default Registationform;