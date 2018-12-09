import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown';
import Headers from './Headers';
import Registationform from './Registrationform';

 

const menu = [
  {
    link:'/articles',
    label:'Articles'
  },
  {
    link:'/contacts',
    label:'Contacts'
  },
  {
    link:'/posts',
    label:'Posts'
  }
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
       <Headers items={menu}/>

        <Registationform/>
        <Dropdown />
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Установка газового счётчика в Одессе!
          </p>
        <input id="as"></input>
        </header>
        </div>
    );
  }
}

export default App;
