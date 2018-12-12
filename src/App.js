import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown';
import Headers from './Headers';
import Registationform from './Registrationform';

//import withStyles from './button';



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

const num1 = [1,2,3,4];
const num2 = [5,6,7,8];
//const res = [num1,num2];
//Array.prototype.push.apply(num1,num2);
console.log([...num1,...num2]);
const A ={
  a:"default",
  b:"just_test"
};
const B ={
  a:"value_from_b"
};
let c ={
  ...A,
  ...B
};
console.log(c);

//const arr = [1,2,3];
//function sum(a,b,c){
 // return a+b+c;
//}



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
